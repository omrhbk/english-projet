// Bookmarks Module — Favori kelimeler yonetimi
import { vocabData } from '../core/data.js';
import { getCEFRBadgeHTML } from '../core/utils.js';
import { showToast } from '../features/toast.js';

const STORAGE_KEY = 'bookmarked_words';

export function cleanupBookmarks() { /* no timers */ }

export function getBookmarks() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
}

export function toggleBookmark(wordId) {
    const bookmarks = getBookmarks();
    const idx = bookmarks.indexOf(wordId);
    if (idx === -1) {
        bookmarks.push(wordId);
        showToast('Favorilere eklendi!', 'success');
    } else {
        bookmarks.splice(idx, 1);
        showToast('Favorilerden cikarildi.', 'info');
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    return bookmarks;
}

export function isBookmarked(wordId) {
    return getBookmarks().includes(wordId);
}

export function initBookmarks() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:800px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="bm-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Favorilerim</h2>
                <span id="bm-count" style="font-weight:600;color:var(--text-light);"></span>
            </div>
            <div id="bm-search-row" style="margin-bottom:1rem;">
                <input id="bm-search" class="search-input" type="text" placeholder="Favori kelimelerde ara..." style="width:100%;" />
            </div>
            <div id="bm-area"></div>
        </div>
    `;
    document.getElementById('bm-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    document.getElementById('bm-search').addEventListener('input', renderBookmarks);
    renderBookmarks();
}

function renderBookmarks() {
    const area = document.getElementById('bm-area');
    const countEl = document.getElementById('bm-count');
    const search = document.getElementById('bm-search').value.toLowerCase();
    const bookmarks = getBookmarks();

    const words = bookmarks
        .map(id => vocabData.find(w => w.id === id))
        .filter(w => w)
        .filter(w => !search || w.word.toLowerCase().includes(search) || w.meaning.toLowerCase().includes(search));

    countEl.textContent = `${words.length} kelime`;

    if (words.length === 0) {
        area.innerHTML = `
            <div style="text-align:center;padding:3rem;color:var(--text-light);">
                <div style="font-size:3rem;margin-bottom:1rem;">⭐</div>
                <p>${bookmarks.length === 0 ? 'Henuz favori kelime eklemediniz.' : 'Arama sonucu bulunamadi.'}</p>
                <p style="font-size:0.85rem;margin-top:0.5rem;">Kelime kartlarinda ⭐ ikonuna tiklayarak favori ekleyebilirsiniz.</p>
            </div>
        `;
        return;
    }

    area.innerHTML = `
        <div class="vocab-results-grid">
            ${words.map(w => `
                <div class="vocab-result-card" style="position:relative;">
                    <button class="bm-remove-btn" data-id="${w.id}" title="Favorilerden cikar"
                        style="position:absolute;top:0.5rem;right:0.5rem;background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--secondary-color);">⭐</button>
                    ${getCEFRBadgeHTML(w.level)}
                    <div class="vocab-result-word">${w.word}</div>
                    <div class="vocab-result-meaning">${w.meaning}</div>
                    <button class="bm-speak-btn tts-btn" data-word="${w.word}" style="margin-top:0.5rem;">🔊</button>
                </div>
            `).join('')}
        </div>
    `;

    // Remove handlers
    area.querySelectorAll('.bm-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBookmark(parseInt(btn.dataset.id));
            renderBookmarks();
        });
    });

    // TTS handlers
    area.querySelectorAll('.bm-speak-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                const utter = new SpeechSynthesisUtterance(btn.dataset.word);
                utter.lang = 'en-US';
                speechSynthesis.speak(utter);
            }
        });
    });
}
