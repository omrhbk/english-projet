import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import initSqlJs from 'sql.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

if (!process.env.JWT_SECRET) {
  console.warn('UYARI: JWT_SECRET tanımlı değil! .env dosyasını kontrol et.');
}
const JWT_SECRET = process.env.JWT_SECRET || 'english-app-secret-key-change-in-production';
const SALT_ROUNDS = 10;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize SQLite database with sql.js
let db;
// Use absolute path so the DB is always found regardless of CWD
const DB_PATH = join(__dirname, '..', 'progress.db');

async function initDatabase() {
  const SQL = await initSqlJs();
  
  // Load existing database or create new one
  let buffer;
  if (existsSync(DB_PATH)) {
    buffer = readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }
  
  // Create users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      display_name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create progress table if not exists
  db.run(`
    CREATE TABLE IF NOT EXISTS user_progress (
      user_id TEXT PRIMARY KEY,
      xp INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      streak INTEGER DEFAULT 0,
      last_login_date TEXT,
      completed_activities TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  // Save database to file
  saveDatabase();
}

function saveDatabase() {
  const data = db.export();
  writeFileSync(DB_PATH, data);
}

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from parent directory (where public/ and src/ folders are)
app.use(express.static(join(__dirname, '..')));
// Also serve public/ folder at root so index.html loads at /
app.use(express.static(join(__dirname, '..', 'public')));

// API Routes

// Get user progress
app.get('/api/progress/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    
    const result = db.exec('SELECT * FROM user_progress WHERE user_id = ?', [userId]);
    let progress = null;
    
    if (result.length > 0 && result[0].values.length > 0) {
      const row = result[0].values[0];
      const columns = result[0].columns;
      progress = {};
      columns.forEach((col, idx) => {
        progress[col] = row[idx];
      });
    }
    
    if (!progress) {
      // Create default progress for new user
      db.run(`
        INSERT INTO user_progress (user_id, xp, level, streak, last_login_date, completed_activities)
        VALUES (?, 0, 1, 0, ?, '[]')
      `, [userId, new Date().toDateString()]);
      
      saveDatabase();
      
      // Fetch again
      const result2 = db.exec('SELECT * FROM user_progress WHERE user_id = ?', [userId]);
      const row = result2[0].values[0];
      const columns = result2[0].columns;
      progress = {};
      columns.forEach((col, idx) => {
        progress[col] = row[idx];
      });
    }
    
    // Parse completed_activities JSON
    progress.completed_activities = JSON.parse(progress.completed_activities || '[]');
    
    res.json({
      success: true,
      data: {
        xp: progress.xp,
        level: progress.level,
        streak: progress.streak,
        lastLoginDate: progress.last_login_date,
        completedActivities: progress.completed_activities
      }
    });
  } catch (error) {
    console.error('Error loading progress:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Save user progress
app.post('/api/progress/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const { xp, level, streak, lastLoginDate, completedActivities } = req.body;
    
    // Check if user exists
    const result = db.exec('SELECT user_id FROM user_progress WHERE user_id = ?', [userId]);
    
    if (result.length > 0 && result[0].values.length > 0) {
      // Update existing user
      db.run(`
        UPDATE user_progress 
        SET xp = ?, level = ?, streak = ?, last_login_date = ?, 
            completed_activities = ?, updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ?
      `, [xp, level, streak, lastLoginDate, JSON.stringify(completedActivities || []), userId]);
    } else {
      // Insert new user
      db.run(`
        INSERT INTO user_progress (user_id, xp, level, streak, last_login_date, completed_activities)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [userId, xp, level, streak, lastLoginDate, JSON.stringify(completedActivities || [])]);
    }
    
    saveDatabase();
    
    res.json({ success: true, message: 'Progress saved successfully' });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ── Auth Middleware ─────────────────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Token gerekli' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ success: false, error: 'Geçersiz token' });
  }
}

// ── Auth Endpoints ──────────────────────────────────────────────────────────

// Kayıt
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email ve şifre zorunlu' });
    }
    if (password.length < 6) {
      return res.status(400).json({ success: false, error: 'Şifre en az 6 karakter olmalı' });
    }

    // Email zaten var mı?
    const existing = db.exec('SELECT id FROM users WHERE email = ?', [email.toLowerCase()]);
    if (existing.length > 0 && existing[0].values.length > 0) {
      return res.status(409).json({ success: false, error: 'Bu email zaten kayıtlı' });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    db.run(
      'INSERT INTO users (email, password_hash, display_name) VALUES (?, ?, ?)',
      [email.toLowerCase(), passwordHash, displayName || email.split('@')[0]]
    );
    saveDatabase();

    // Yeni kullanıcının ID'sini al
    const result = db.exec('SELECT id, email, display_name FROM users WHERE email = ?', [email.toLowerCase()]);
    const row = result[0].values[0];
    const userId = `user_${row[0]}`;

    const token = jwt.sign(
      { userId, email: row[1], displayName: row[2] },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({ success: true, token, userId, displayName: row[2], email: row[1] });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Giriş
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email ve şifre zorunlu' });
    }

    const result = db.exec(
      'SELECT id, email, password_hash, display_name FROM users WHERE email = ?',
      [email.toLowerCase()]
    );

    if (result.length === 0 || result[0].values.length === 0) {
      return res.status(401).json({ success: false, error: 'Email veya şifre hatalı' });
    }

    const row = result[0].values[0];
    const [id, dbEmail, passwordHash, displayName] = row;

    const match = await bcrypt.compare(password, passwordHash);
    if (!match) {
      return res.status(401).json({ success: false, error: 'Email veya şifre hatalı' });
    }

    const userId = `user_${id}`;
    const token = jwt.sign(
      { userId, email: dbEmail, displayName },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({ success: true, token, userId, displayName, email: dbEmail });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Token doğrula (frontend'de sayfa yenilemede kullanılır)
app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Frontend için güvenli config endpoint'i
// Sadece public olması gereken key'leri döndür (JWT_SECRET gibi gizli olanları değil)
app.get('/api/config', (req, res) => {
  res.json({
    unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY || '',
    geminiApiKey: process.env.GEMINI_API_KEY || '',
  });
});

// Initialize database and start server
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📚 English Learning App Backend`);
    console.log(`📊 Database: SQLite (progress.db) with sql.js`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  saveDatabase();
  console.log('\n👋 Server stopped');
  process.exit(0);
});
