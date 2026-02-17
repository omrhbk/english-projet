// Achievement System

const STORAGE_KEY_ACHIEVEMENTS = 'english_app_achievements';

// Achievement Definitions
export const achievements = [
    {
        id: 'first_xp',
        title: 'İlk Adım',
        description: 'İlk puanını kazandın!',
        icon: '🎯',
        condition: (stats) => stats.xp >= 10
    },
    {
        id: 'century_club',
        title: 'Yüzler Kulübü',
        description: '100 XP biriktirdin!',
        icon: '💯',
        condition: (stats) => stats.xp >= 100
    },
    {
        id: 'level_up',
        title: 'Seviye Atlama',
        description: 'Seviye 2\'ye ulaştın!',
        icon: '⬆️',
        condition: (stats) => stats.level >= 2
    },
    {
        id: 'streak_3',
        title: 'Kararlı',
        description: '3 gün üst üste giriş yaptın!',
        icon: '🔥',
        condition: (stats) => stats.streak >= 3
    },
    {
        id: 'streak_7',
        title: 'Bir Hafta!',
        description: '7 günlük seriyi tamamladın!',
        icon: '🏆',
        condition: (stats) => stats.streak >= 7
    },
    {
        id: 'vocab_master',
        title: 'Kelime Ustası',
        description: '10 kelime öğrendin!',
        icon: '📚',
        condition: (stats) => stats.completedCount >= 10
    }
];

class AchievementManager {
    constructor() {
        this.earned = this.loadEarned();
    }

    loadEarned() {
        const saved = localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS);
        return saved ? JSON.parse(saved) : [];
    }

    saveEarned() {
        localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(this.earned));
    }

    checkAndAward(stats) {
        const newlyEarned = [];

        achievements.forEach(achievement => {
            // Check if not already earned and condition is met
            if (!this.earned.includes(achievement.id) && achievement.condition(stats)) {
                this.earned.push(achievement.id);
                newlyEarned.push(achievement);
            }
        });

        if (newlyEarned.length > 0) {
            this.saveEarned();
            // Show popups for new achievements
            newlyEarned.forEach((ach, index) => {
                setTimeout(() => this.showPopup(ach), index * 1500);
            });
        }
    }

    showPopup(achievement) {
        const popup = document.createElement('div');
        popup.className = 'achievement-popup';
        popup.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <h3>Rozet Kazandın!</h3>
                <p class="achievement-title">${achievement.title}</p>
                <p class="achievement-desc">${achievement.description}</p>
            </div>
        `;

        document.body.appendChild(popup);

        // Animate in
        setTimeout(() => popup.classList.add('show'), 100);

        // Remove after 4 seconds
        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 500);
        }, 4000);
    }

    getEarnedBadges() {
        return achievements.filter(ach => this.earned.includes(ach.id));
    }

    getProgress() {
        return {
            earned: this.earned.length,
            total: achievements.length
        };
    }
}

export const achievementManager = new AchievementManager();
