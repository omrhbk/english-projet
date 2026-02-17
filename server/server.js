import express from 'express';
import cors from 'cors';
import initSqlJs from 'sql.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
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
