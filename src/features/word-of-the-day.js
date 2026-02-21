/**
 * Word of the Day — Dashboard'da her gün farklı bir kelime
 * Tarihe göre deterministik seçim
 */

import { vocabData } from '../core/data.js';
import { getTypeBadgeHTML, getCEFRBadgeHTML } from '../core/utils.js';
import { playPronunciation } from '../core/services.js';
import { showToast } from '../features/toast.js';

/**
 * Returns today's word deterministically based on date
 */
function getTodaysWord() {
    const today = new Date();
    // Deterministic seed from date
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % vocabData.length;
    return vocabData[index];
}

/**
 * Renders the Word of the Day card HTML
 */
export function renderWordOfTheDay() {
    const word = getTodaysWord();
    if (!word) return '';

    const today = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

    return `
        <div class="card wotd-card" style="border-left:4px solid var(--primary-color);margin-top:1.5rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
                <h3>📅 Günün Kelimesi</h3>
                <span style="font-size:0.8rem;color:var(--text-light);">${today}</span>
            </div>

            <div style="margin-top:1rem;padding:1.25rem;background:rgba(74,144,226,0.06);border-radius:10px;">
                <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
                    <span style="font-size:1.6rem;font-weight:700;">${word.word}</span>
                    ${getTypeBadgeHTML(word.type)}
                    ${getCEFRBadgeHTML(word.level)}
                    <button class="btn secondary small wotd-speak-btn" data-word="${word.word}" title="Telaffuzu Dinle">🔊</button>
                </div>

                <p style="margin-top:0.75rem;font-size:1.1rem;color:var(--text-color);">
                    🇹🇷 <strong>${word.meaning}</strong>
                </p>

                ${word.synonyms && word.synonyms.length > 0 ? `
                <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-light);">
                    Eş anlamlılar: ${word.synonyms.join(', ')}
                </p>
                ` : ''}
            </div>

            <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
                <button class="btn small wotd-know-btn" data-id="${word.id}">✅ Biliyorum</button>
                <button class="btn secondary small wotd-dont-know-btn" data-id="${word.id}">❌ Bilmiyorum</button>
            </div>
        </div>
    `;
}

/**
 * Sets up event listeners for WOTD card (call after rendering dashboard)
 */
export function setupWordOfTheDayEvents() {
    const speakBtn = document.querySelector('.wotd-speak-btn');
    if (speakBtn) {
        speakBtn.addEventListener('click', () => {
            playPronunciation(speakBtn.dataset.word);
        });
    }

    const knowBtn = document.querySelector('.wotd-know-btn');
    if (knowBtn) {
        knowBtn.addEventListener('click', async () => {
            const id = parseInt(knowBtn.dataset.id);
            try {
                const { reviewWord } = await import('../features/srs.js');
                reviewWord(id, 5); // 5 = biliyorum
                showToast('Harika! Kelimeyi bildiğin kaydedildi.', 'success');
                if (window.progressManager) window.progressManager.addXP(5);
                if (window.showXPGain) window.showXPGain(5);
            } catch { /* */ }
            knowBtn.disabled = true;
            const dontKnowBtn = document.querySelector('.wotd-dont-know-btn');
            if (dontKnowBtn) dontKnowBtn.disabled = true;
        });
    }

    const dontKnowBtn = document.querySelector('.wotd-dont-know-btn');
    if (dontKnowBtn) {
        dontKnowBtn.addEventListener('click', async () => {
            const id = parseInt(dontKnowBtn.dataset.id);
            try {
                const { reviewWord } = await import('../features/srs.js');
                reviewWord(id, 0); // 0 = bilmiyorum
                showToast('Kelime tekrar kuyruğuna eklendi!', 'info');
            } catch { /* */ }
            dontKnowBtn.disabled = true;
            const knowBtnEl = document.querySelector('.wotd-know-btn');
            if (knowBtnEl) knowBtnEl.disabled = true;
        });
    }
}
