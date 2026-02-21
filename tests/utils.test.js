import { describe, it, expect } from 'vitest';
import { validateEnglishInput, getTypeLabel, getTypeBadgeHTML, getTypeCSSClass, fisherYatesShuffle, getCEFRBadgeHTML } from '../src/core/utils.js';

describe('validateEnglishInput', () => {
    it('accepts valid English text', () => {
        expect(validateEnglishInput('hello').valid).toBe(true);
        expect(validateEnglishInput('Hello World').valid).toBe(true);
        expect(validateEnglishInput("it's").valid).toBe(true);
        expect(validateEnglishInput('test-word').valid).toBe(true);
        expect(validateEnglishInput('').valid).toBe(true);
    });

    it('rejects Turkish characters', () => {
        const result = validateEnglishInput('çay');
        expect(result.valid).toBe(false);
        expect(result.message).toContain('Türkçe');
    });

    it('rejects each Turkish special char', () => {
        const turkishChars = ['ç', 'Ç', 'ş', 'Ş', 'ğ', 'Ğ', 'ı', 'İ', 'ö', 'Ö', 'ü', 'Ü'];
        turkishChars.forEach(ch => {
            expect(validateEnglishInput(`test${ch}`).valid).toBe(false);
        });
    });

    it('allows numbers and punctuation', () => {
        expect(validateEnglishInput('test123').valid).toBe(true);
        expect(validateEnglishInput('Hello, world!').valid).toBe(true);
        expect(validateEnglishInput('What?').valid).toBe(true);
    });
});

describe('getTypeLabel', () => {
    it('returns correct labels for known types', () => {
        expect(getTypeLabel('noun')).toBe('n.');
        expect(getTypeLabel('verb')).toBe('v.');
        expect(getTypeLabel('adjective')).toBe('adj.');
        expect(getTypeLabel('adverb')).toBe('adv.');
    });

    it('returns "oth." for unknown types', () => {
        expect(getTypeLabel('unknown')).toBe('oth.');
        expect(getTypeLabel(undefined)).toBe('oth.');
    });
});

describe('getTypeBadgeHTML', () => {
    it('returns HTML span with correct color', () => {
        const badge = getTypeBadgeHTML('noun');
        expect(badge).toContain('type-badge');
        expect(badge).toContain('#4a90e2');
        expect(badge).toContain('n.');
    });

    it('returns "other" badge for unknown types', () => {
        const badge = getTypeBadgeHTML('xyz');
        expect(badge).toContain('#e2a74a');
        expect(badge).toContain('oth.');
    });
});

describe('getTypeCSSClass', () => {
    it('returns correct CSS class', () => {
        expect(getTypeCSSClass('noun')).toBe('type-noun');
        expect(getTypeCSSClass('verb')).toBe('type-verb');
    });

    it('returns "type-other" for falsy values', () => {
        expect(getTypeCSSClass(undefined)).toBe('type-other');
        expect(getTypeCSSClass(null)).toBe('type-other');
    });
});

describe('fisherYatesShuffle', () => {
    it('returns the same array reference', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = fisherYatesShuffle(arr);
        expect(result).toBe(arr);
    });

    it('preserves all elements', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const original = [...arr];
        fisherYatesShuffle(arr);
        expect(arr.sort()).toEqual(original.sort());
    });

    it('handles empty array', () => {
        const arr = [];
        expect(fisherYatesShuffle(arr)).toEqual([]);
    });

    it('handles single element', () => {
        const arr = [42];
        expect(fisherYatesShuffle(arr)).toEqual([42]);
    });

    it('actually shuffles (statistical test)', () => {
        const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let sameOrderCount = 0;
        for (let i = 0; i < 100; i++) {
            const arr = [...original];
            fisherYatesShuffle(arr);
            if (arr.every((v, idx) => v === original[idx])) sameOrderCount++;
        }
        // Probability of same order: 1/10! ≈ 0.00028%
        // 100 trials: extremely unlikely to get >1 same order
        expect(sameOrderCount).toBeLessThan(5);
    });
});

describe('getCEFRBadgeHTML', () => {
    it('returns correct badge for each CEFR level', () => {
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        levels.forEach(level => {
            const badge = getCEFRBadgeHTML(level);
            expect(badge).toContain('cefr-badge');
            expect(badge).toContain(level);
        });
    });

    it('uses correct colors', () => {
        expect(getCEFRBadgeHTML('A1')).toContain('#27ae60');
        expect(getCEFRBadgeHTML('B2')).toContain('#e74c3c');
        expect(getCEFRBadgeHTML('C1')).toContain('#8e44ad');
    });

    it('handles unknown level gracefully', () => {
        const badge = getCEFRBadgeHTML('X9');
        expect(badge).toContain('cefr-badge');
        expect(badge).toContain('#999');
    });
});
