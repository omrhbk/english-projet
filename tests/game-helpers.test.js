import { describe, it, expect, beforeEach } from 'vitest';
import { getLeaderboard, saveToLeaderboard, getGlobalScores } from '../src/core/game-helpers.js';

// Mock localStorage
const store = {};
const localStorageMock = {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key: (i) => Object.keys(store)[i] || null
};
globalThis.localStorage = localStorageMock;

describe('game-helpers: Leaderboard', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('getLeaderboard returns empty array for missing key', () => {
        expect(getLeaderboard('nonexistent')).toEqual([]);
    });

    it('saveToLeaderboard adds entry and sorts by score desc', () => {
        saveToLeaderboard('test_lb', { score: 50 });
        saveToLeaderboard('test_lb', { score: 100 });
        saveToLeaderboard('test_lb', { score: 75 });
        const board = getLeaderboard('test_lb');
        expect(board.length).toBe(3);
        expect(board[0].score).toBe(100);
        expect(board[1].score).toBe(75);
        expect(board[2].score).toBe(50);
    });

    it('saveToLeaderboard respects maxEntries', () => {
        for (let i = 0; i < 15; i++) {
            saveToLeaderboard('test_lb', { score: i * 10 }, 5);
        }
        const board = getLeaderboard('test_lb');
        expect(board.length).toBe(5);
        expect(board[0].score).toBe(140); // highest
    });

    it('saveToLeaderboard adds date field', () => {
        saveToLeaderboard('test_lb', { score: 42 });
        const board = getLeaderboard('test_lb');
        expect(board[0].date).toBeDefined();
        expect(new Date(board[0].date).getTime()).not.toBeNaN();
    });

    it('getLeaderboard handles corrupted JSON', () => {
        store['bad_key'] = '{invalid json}}}';
        expect(getLeaderboard('bad_key')).toEqual([]);
    });
});

describe('game-helpers: getGlobalScores', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('returns empty object when no leaderboards exist', () => {
        const scores = getGlobalScores();
        expect(Object.keys(scores).length).toBe(0);
    });

    it('aggregates scores from multiple games', () => {
        saveToLeaderboard('word_chain_leaderboard', { score: 100 });
        saveToLeaderboard('word_chain_leaderboard', { score: 80 });
        saveToLeaderboard('hangman_leaderboard', { score: 50 });

        const scores = getGlobalScores();
        expect(scores['word chain']).toBeDefined();
        expect(scores['word chain'].best).toBe(100);
        expect(scores['word chain'].plays).toBe(2);
        expect(scores['word chain'].total).toBe(180);
        expect(scores['hangman']).toBeDefined();
        expect(scores['hangman'].best).toBe(50);
    });
});
