// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';

// ── Test: All new modules can be imported without errors ───────────
// These are structural/smoke tests to verify modules export the correct functions

describe('Module exports: Games', () => {
    it('crossword exports initCrossword and cleanupCrossword', async () => {
        const mod = await import('../src/components/crossword.js');
        expect(typeof mod.initCrossword).toBe('function');
        expect(typeof mod.cleanupCrossword).toBe('function');
    });

    it('hangman exports initHangman and cleanupHangman', async () => {
        const mod = await import('../src/components/hangman.js');
        expect(typeof mod.initHangman).toBe('function');
        expect(typeof mod.cleanupHangman).toBe('function');
    });

    it('memory-cards exports initMemoryCards and cleanupMemoryCards', async () => {
        const mod = await import('../src/components/memory-cards.js');
        expect(typeof mod.initMemoryCards).toBe('function');
        expect(typeof mod.cleanupMemoryCards).toBe('function');
    });

    it('speed-quiz exports initSpeedQuiz and cleanupSpeedQuiz', async () => {
        const mod = await import('../src/components/speed-quiz.js');
        expect(typeof mod.initSpeedQuiz).toBe('function');
        expect(typeof mod.cleanupSpeedQuiz).toBe('function');
    });
});

describe('Module exports: Conversation', () => {
    it('daily-dialogue exports initDailyDialogue and cleanupDailyDialogue', async () => {
        const mod = await import('../src/components/daily-dialogue.js');
        expect(typeof mod.initDailyDialogue).toBe('function');
        expect(typeof mod.cleanupDailyDialogue).toBe('function');
    });

    it('sentence-builder exports initSentenceBuilder and cleanupSentenceBuilder', async () => {
        const mod = await import('../src/components/sentence-builder.js');
        expect(typeof mod.initSentenceBuilder).toBe('function');
        expect(typeof mod.cleanupSentenceBuilder).toBe('function');
    });

    it('chat-simulator exports initChatSimulator and cleanupChatSimulator', async () => {
        const mod = await import('../src/components/chat-simulator.js');
        expect(typeof mod.initChatSimulator).toBe('function');
        expect(typeof mod.cleanupChatSimulator).toBe('function');
    });
});

describe('Module exports: Word Development', () => {
    it('synonyms-antonyms exports initSynonymsAntonyms', async () => {
        const mod = await import('../src/components/synonyms-antonyms.js');
        expect(typeof mod.initSynonymsAntonyms).toBe('function');
        expect(typeof mod.cleanupSynonymsAntonyms).toBe('function');
    });

    it('collocations exports initCollocations', async () => {
        const mod = await import('../src/components/collocations.js');
        expect(typeof mod.initCollocations).toBe('function');
        expect(typeof mod.cleanupCollocations).toBe('function');
    });

    it('prefixes-suffixes exports initPrefixesSuffixes', async () => {
        const mod = await import('../src/components/prefixes-suffixes.js');
        expect(typeof mod.initPrefixesSuffixes).toBe('function');
        expect(typeof mod.cleanupPrefixesSuffixes).toBe('function');
    });
});

describe('Module exports: Exams', () => {
    it('mini-quiz exports initMiniQuiz', async () => {
        const mod = await import('../src/components/mini-quiz.js');
        expect(typeof mod.initMiniQuiz).toBe('function');
        expect(typeof mod.cleanupMiniQuiz).toBe('function');
    });

    it('daily-challenge exports initDailyChallenge', async () => {
        const mod = await import('../src/components/daily-challenge.js');
        expect(typeof mod.initDailyChallenge).toBe('function');
        expect(typeof mod.cleanupDailyChallenge).toBe('function');
    });

    it('leaderboard exports initLeaderboard', async () => {
        const mod = await import('../src/components/leaderboard.js');
        expect(typeof mod.initLeaderboard).toBe('function');
        expect(typeof mod.cleanupLeaderboard).toBe('function');
    });
});

describe('Module exports: Tools', () => {
    it('bookmarks exports initBookmarks, toggleBookmark, isBookmarked, getBookmarks', async () => {
        const mod = await import('../src/components/bookmarks.js');
        expect(typeof mod.initBookmarks).toBe('function');
        expect(typeof mod.toggleBookmark).toBe('function');
        expect(typeof mod.isBookmarked).toBe('function');
        expect(typeof mod.getBookmarks).toBe('function');
        expect(typeof mod.cleanupBookmarks).toBe('function');
    });

    it('notes exports initNotes', async () => {
        const mod = await import('../src/components/notes.js');
        expect(typeof mod.initNotes).toBe('function');
        expect(typeof mod.cleanupNotes).toBe('function');
    });

    it('export-progress exports initExportProgress', async () => {
        const mod = await import('../src/components/export-progress.js');
        expect(typeof mod.initExportProgress).toBe('function');
        expect(typeof mod.cleanupExportProgress).toBe('function');
    });
});

describe('Module exports: Shared Helper', () => {
    it('game-helpers exports all utility functions', async () => {
        const mod = await import('../src/core/game-helpers.js');
        expect(typeof mod.getLeaderboard).toBe('function');
        expect(typeof mod.saveToLeaderboard).toBe('function');
        expect(typeof mod.renderLeaderboardHTML).toBe('function');
        expect(typeof mod.createCountdown).toBe('function');
        expect(typeof mod.renderCEFRFilter).toBe('function');
        expect(typeof mod.getGlobalScores).toBe('function');
    });
});
