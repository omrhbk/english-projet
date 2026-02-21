// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { getBookmarks, toggleBookmark, isBookmarked } from '../src/components/bookmarks.js';

describe('Bookmarks', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('getBookmarks returns empty array initially', () => {
        expect(getBookmarks()).toEqual([]);
    });

    it('toggleBookmark adds a word id', () => {
        toggleBookmark(1);
        expect(getBookmarks()).toContain(1);
    });

    it('toggleBookmark removes when called again', () => {
        toggleBookmark(5);
        expect(getBookmarks()).toContain(5);
        toggleBookmark(5);
        expect(getBookmarks()).not.toContain(5);
    });

    it('isBookmarked returns correct boolean', () => {
        expect(isBookmarked(10)).toBe(false);
        toggleBookmark(10);
        expect(isBookmarked(10)).toBe(true);
        toggleBookmark(10);
        expect(isBookmarked(10)).toBe(false);
    });

    it('handles multiple bookmarks', () => {
        toggleBookmark(1);
        toggleBookmark(2);
        toggleBookmark(3);
        const bm = getBookmarks();
        expect(bm).toContain(1);
        expect(bm).toContain(2);
        expect(bm).toContain(3);
        expect(bm.length).toBe(3);
    });

    it('getBookmarks handles corrupted data', () => {
        localStorage.setItem('bookmarked_words', 'not json');
        expect(getBookmarks()).toEqual([]);
    });
});
