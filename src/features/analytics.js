// Error Analytics Module

const STORAGE_KEY_ERRORS = 'english_app_errors';

class ErrorAnalytics {
    constructor() {
        this.errors = this.loadErrors();
    }

    loadErrors() {
        const saved = localStorage.getItem(STORAGE_KEY_ERRORS);
        return saved ? JSON.parse(saved) : {};
    }

    saveErrors() {
        localStorage.setItem(STORAGE_KEY_ERRORS, JSON.stringify(this.errors));
    }

    trackMistake(wordId) {
        if (!this.errors[wordId]) {
            this.errors[wordId] = 0;
        }
        this.errors[wordId]++;
        this.saveErrors();
    }

    getWeakWords(limit = 5) {
        // Sort by error count, return top N
        const sorted = Object.entries(this.errors)
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit);
        
        return sorted.map(([id, count]) => ({
            id: parseInt(id),
            mistakes: count
        }));
    }

    getTotalMistakes() {
        return Object.values(this.errors).reduce((sum, val) => sum + val, 0);
    }
}

export const errorAnalytics = new ErrorAnalytics();
