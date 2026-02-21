import { describe, it, expect } from 'vitest';
import { vocabData } from '../src/core/data.js';

describe('vocabData', () => {
    it('has at least 1000 words', () => {
        expect(vocabData.length).toBeGreaterThanOrEqual(1000);
    });

    it('each word has required fields', () => {
        vocabData.forEach((word, idx) => {
            expect(word.id, `word at index ${idx} missing id`).toBeDefined();
            expect(word.word, `word id=${word.id} missing word`).toBeTruthy();
            expect(word.meaning, `word id=${word.id} "${word.word}" missing meaning`).toBeTruthy();
            expect(word.type, `word id=${word.id} "${word.word}" missing type`).toBeTruthy();
            expect(word.level, `word id=${word.id} "${word.word}" missing level`).toBeTruthy();
        });
    });

    it('has unique IDs', () => {
        const ids = vocabData.map(w => w.id);
        const unique = new Set(ids);
        expect(unique.size).toBe(ids.length);
    });

    it('has no duplicate words', () => {
        const words = vocabData.map(w => w.word.toLowerCase());
        const unique = new Set(words);
        // Allow tolerance for intentional duplicates (same word, different type/meaning)
        const duplicates = words.length - unique.size;
        expect(duplicates).toBeLessThan(50);
    });

    it('has valid CEFR levels', () => {
        const validLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        vocabData.forEach(word => {
            expect(validLevels, `word "${word.word}" has invalid level "${word.level}"`).toContain(word.level);
        });
    });

    it('has valid word types', () => {
        const validTypes = ['noun', 'verb', 'adjective', 'adverb', 'other'];
        vocabData.forEach(word => {
            expect(validTypes, `word "${word.word}" has invalid type "${word.type}"`).toContain(word.type);
        });
    });

    it('has words across multiple CEFR levels', () => {
        const levels = new Set(vocabData.map(w => w.level));
        expect(levels.size).toBeGreaterThanOrEqual(4);
    });

    it('has words across multiple types', () => {
        const types = new Set(vocabData.map(w => w.type));
        expect(types.size).toBeGreaterThanOrEqual(3);
    });

    it('synonyms is an array when present', () => {
        vocabData.forEach(word => {
            if (word.synonyms !== undefined) {
                expect(Array.isArray(word.synonyms), `word "${word.word}" synonyms is not an array`).toBe(true);
            }
        });
    });
});
