// Progress Management Module

const STORAGE_KEY = 'english_app_progress';

// Import will be done in app.js to avoid circular dependency
let achievementManager = null;

export function setAchievementManager(manager) {
    achievementManager = manager;
}

const defaultState = {
    xp: 0,
    level: 1,
    completedActivities: [], // IDs of completed tasks
    streak: 0,
    lastLoginDate: new Date().toDateString()
};

export const progressManager = {
    state: defaultState, // Will be loaded async

    async init() {
        // Load state from server/localStorage
        this.state = await loadState();
        this.checkDailyStreak();
        this.updateUI();
    },

    async save() {
        try {
            // Try to save to server
            const response = await fetch(`http://localhost:3000/api/progress/${this.getUserId()}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    xp: this.state.xp,
                    level: this.state.level,
                    streak: this.state.streak,
                    lastLoginDate: this.state.lastLoginDate,
                    completedActivities: this.state.completedActivities
                })
            });
            
            if (!response.ok) throw new Error('Server save failed');
            
            // Also save to localStorage as backup
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch (error) {
            console.warn('⚠️ Server unavailable, using localStorage fallback:', error.message);
            // Fallback to localStorage only
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        }
        
        this.updateUI();
        // Check for new achievements
        if (achievementManager) {
            achievementManager.checkAndAward(this.getStats());
        }
    },

    getUserId() {
        // Simple user ID generation (in production, use proper auth)
        let userId = localStorage.getItem('user_id');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('user_id', userId);
        }
        return userId;
    },

    checkDailyStreak() {
        const today = new Date().toDateString();
        const lastLogin = this.state.lastLoginDate;

        if (lastLogin === today) {
            // Same day, do nothing
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        if (lastLogin === yesterdayStr) {
            // Consecutive day - increment streak
            this.state.streak++;
        } else if (lastLogin !== today) {
            // Streak broken - reset
            this.state.streak = 1;
        }

        this.state.lastLoginDate = today;
        this.save();
    },

    addXP(amount) {
        this.state.xp += amount;
        this.checkLevelUp();
        this.save();
    },

    checkLevelUp() {
        // Simple formula: Level = floor(sqrt(XP / 100)) + 1
        // Or specific thresholds: 0-100 (Lvl 1), 101-300 (Lvl 2), etc.
        const newLevel = Math.floor(this.state.xp / 100) + 1;
        if (newLevel > this.state.level) {
            this.state.level = newLevel;
            
            // Play level up sound
            if (window.audioManager) window.audioManager.playLevelUp();
            
            // Celebrate!
            if (window.celebrateLevelUp) window.celebrateLevelUp();
            
            setTimeout(() => {
                alert(`Tebrikler! Seviye Atladın! 🎉\nYeni Seviye: ${newLevel}`);
            }, 500);
        }
    },

    completeActivity(id) {
        if (!this.state.completedActivities.includes(id)) {
            this.state.completedActivities.push(id);
            this.save();
        }
    },

    getStats() {
        return {
            xp: this.state.xp,
            level: this.state.level,
            streak: this.state.streak,
            completedCount: this.state.completedActivities.length
        };
    },

    updateUI() {
        const xpDisplay = document.querySelectorAll('.stat-item')[0];
        if (xpDisplay) xpDisplay.textContent = `⭐ ${this.state.xp} XP`;

        const lvlDisplay = document.querySelectorAll('.stat-item')[1];
        if (lvlDisplay) lvlDisplay.textContent = `🏆 Seviye ${this.state.level}`;

        // XP progress bar — bir sonraki seviyeye yüzde kaçı tamamlandı
        const xpInLevel = this.state.xp % 100;
        const pct = xpInLevel; // 0-100

        const fill = document.getElementById('xp-bar-fill');
        const label = document.getElementById('xp-bar-label');
        if (fill) fill.style.width = pct + '%';
        if (label) label.textContent = `${xpInLevel}/100 XP`;
    }
};

async function loadState() {
    const userId = progressManager.getUserId ? progressManager.getUserId() : 
                   localStorage.getItem('user_id') || 'user_' + Math.random().toString(36).substr(2, 9);
    
    try {
        // Try to load from server
        const response = await fetch(`http://localhost:3000/api/progress/${userId}`);
        if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
                return {
                    xp: result.data.xp,
                    level: result.data.level,
                    streak: result.data.streak,
                    lastLoginDate: result.data.lastLoginDate,
                    completedActivities: result.data.completedActivities
                };
            }
        }
    } catch (error) {
        console.warn('⚠️ Server unavailable, using localStorage fallback:', error.message);
    }
    
    // Fallback to localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
    }
    return { ...defaultState };
}

// Initialize with async load
(async () => {
    progressManager.state = await loadState();
})();

