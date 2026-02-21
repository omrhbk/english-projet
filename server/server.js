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
  
  // SRS cards table
  db.run(`
    CREATE TABLE IF NOT EXISTS srs_cards (
      user_id TEXT NOT NULL,
      word_id INTEGER NOT NULL,
      easiness REAL DEFAULT 2.5,
      interval INTEGER DEFAULT 0,
      repetitions INTEGER DEFAULT 0,
      next_review TEXT,
      last_review TEXT,
      quality INTEGER DEFAULT 0,
      PRIMARY KEY (user_id, word_id)
    )
  `);

  // Save database to file
  saveDatabase();
}

function saveDatabase() {
  const data = db.export();
  writeFileSync(DB_PATH, data);
}

// ── Rate Limiting (basit in-memory) ──────────────────────────────────────────
const rateLimitMap = new Map();
function rateLimit(windowMs, maxRequests) {
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    const key = `${ip}:${req.route?.path || req.path}`;
    const entry = rateLimitMap.get(key) || { count: 0, resetTime: now + windowMs };
    if (now > entry.resetTime) {
      entry.count = 0;
      entry.resetTime = now + windowMs;
    }
    entry.count++;
    rateLimitMap.set(key, entry);
    if (entry.count > maxRequests) {
      return res.status(429).json({ success: false, error: 'Çok fazla istek. Lütfen bekleyin.' });
    }
    next();
  };
}
// Her 10 dakikada rate limit map temizle
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) rateLimitMap.delete(key);
  }
}, 10 * 60 * 1000);

// Middleware
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000', 'http://localhost:3001'];
app.use(cors({
  origin: (origin, callback) => {
    // Tarayıcıdan olmayan istekler (Postman, curl vb.) origin=undefined olur
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy violation'));
    }
  },
  credentials: true
}));
app.use(express.json({ limit: '1mb' }));

// Security headers (CSP, HSTS, X-Frame, etc.)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://images.unsplash.com https://*.unsplash.com",
    "connect-src 'self' https://api.dictionaryapi.dev https://api.mymemory.translated.net https://api.unsplash.com",
    "media-src 'self' https://*.dictionaryapi.dev",
    "frame-ancestors 'none'"
  ].join('; '));
  next();
});

// Serve static files with cache headers
const staticOptions = {
  maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
  etag: true,
  lastModified: true
};
app.use(express.static(join(__dirname, '..'), staticOptions));
app.use(express.static(join(__dirname, '..', 'public'), staticOptions));

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

// Kayıt — 15 dakikada max 10 istek
app.post('/api/auth/register', rateLimit(15 * 60 * 1000, 10), async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email ve şifre zorunlu' });
    }
    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Geçerli bir email adresi girin' });
    }
    if (password.length < 8) {
      return res.status(400).json({ success: false, error: 'Şifre en az 8 karakter olmalı' });
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

// Giriş — 15 dakikada max 15 istek
app.post('/api/auth/login', rateLimit(15 * 60 * 1000, 15), async (req, res) => {
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

// Şifre değiştir
app.post('/api/auth/change-password', authMiddleware, rateLimit(15 * 60 * 1000, 5), async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, error: 'Mevcut ve yeni şifre zorunlu' });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({ success: false, error: 'Yeni şifre en az 8 karakter olmalı' });
    }

    const userId = req.user.userId;
    const dbId = parseInt(userId.replace('user_', ''));
    const result = db.exec('SELECT password_hash FROM users WHERE id = ?', [dbId]);
    if (result.length === 0 || result[0].values.length === 0) {
      return res.status(404).json({ success: false, error: 'Kullanıcı bulunamadı' });
    }

    const match = await bcrypt.compare(currentPassword, result[0].values[0][0]);
    if (!match) {
      return res.status(401).json({ success: false, error: 'Mevcut şifre hatalı' });
    }

    const newHash = await bcrypt.hash(newPassword, SALT_ROUNDS);
    db.run('UPDATE users SET password_hash = ? WHERE id = ?', [newHash, dbId]);
    saveDatabase();

    res.json({ success: true, message: 'Şifre başarıyla değiştirildi' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Profil güncelle
app.put('/api/auth/profile', authMiddleware, async (req, res) => {
  try {
    const { displayName } = req.body;
    const userId = req.user.userId;
    const dbId = parseInt(userId.replace('user_', ''));

    if (displayName) {
      db.run('UPDATE users SET display_name = ? WHERE id = ?', [displayName, dbId]);
      saveDatabase();
    }

    res.json({ success: true, message: 'Profil güncellendi' });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Token doğrula (frontend'de sayfa yenilemede kullanılır)
app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user });
});

// ── SRS Sync Endpoints ────────────────────────────────────────────────────────

// SRS kartlarını getir
app.get('/api/srs/:userId', authMiddleware, (req, res) => {
  try {
    const { userId } = req.params;
    const result = db.exec('SELECT * FROM srs_cards WHERE user_id = ?', [userId]);
    const cards = {};
    if (result.length > 0) {
      const columns = result[0].columns;
      result[0].values.forEach(row => {
        const card = {};
        columns.forEach((col, idx) => { card[col] = row[idx]; });
        cards[card.word_id] = {
          easiness: card.easiness,
          interval: card.interval,
          repetitions: card.repetitions,
          nextReview: card.next_review,
          lastReview: card.last_review,
          quality: card.quality
        };
      });
    }
    res.json({ success: true, data: cards });
  } catch (error) {
    console.error('SRS load error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// SRS kartlarını kaydet (tüm kartları toplu güncelle)
app.post('/api/srs/:userId', authMiddleware, (req, res) => {
  try {
    const { userId } = req.params;
    const { cards } = req.body;
    if (!cards || typeof cards !== 'object') {
      return res.status(400).json({ success: false, error: 'Geçerli kart verisi gerekli' });
    }

    Object.entries(cards).forEach(([wordId, card]) => {
      const existing = db.exec('SELECT word_id FROM srs_cards WHERE user_id = ? AND word_id = ?', [userId, parseInt(wordId)]);
      if (existing.length > 0 && existing[0].values.length > 0) {
        db.run(`UPDATE srs_cards SET easiness = ?, interval = ?, repetitions = ?, next_review = ?, last_review = ?, quality = ? WHERE user_id = ? AND word_id = ?`,
          [card.easiness, card.interval, card.repetitions, card.nextReview, card.lastReview, card.quality, userId, parseInt(wordId)]);
      } else {
        db.run(`INSERT INTO srs_cards (user_id, word_id, easiness, interval, repetitions, next_review, last_review, quality) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [userId, parseInt(wordId), card.easiness, card.interval, card.repetitions, card.nextReview, card.lastReview, card.quality]);
      }
    });

    saveDatabase();
    res.json({ success: true, message: `${Object.keys(cards).length} kart senkronize edildi` });
  } catch (error) {
    console.error('SRS save error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Tek bir SRS kartını güncelle
app.put('/api/srs/:userId/:wordId', authMiddleware, (req, res) => {
  try {
    const { userId, wordId } = req.params;
    const card = req.body;

    const existing = db.exec('SELECT word_id FROM srs_cards WHERE user_id = ? AND word_id = ?', [userId, parseInt(wordId)]);
    if (existing.length > 0 && existing[0].values.length > 0) {
      db.run(`UPDATE srs_cards SET easiness = ?, interval = ?, repetitions = ?, next_review = ?, last_review = ?, quality = ? WHERE user_id = ? AND word_id = ?`,
        [card.easiness, card.interval, card.repetitions, card.nextReview, card.lastReview, card.quality, userId, parseInt(wordId)]);
    } else {
      db.run(`INSERT INTO srs_cards (user_id, word_id, easiness, interval, repetitions, next_review, last_review, quality) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [userId, parseInt(wordId), card.easiness, card.interval, card.repetitions, card.nextReview, card.lastReview, card.quality]);
    }

    saveDatabase();
    res.json({ success: true });
  } catch (error) {
    console.error('SRS update error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
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
