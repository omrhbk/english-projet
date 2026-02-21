// Memory Cards Module — Kart Cevirme Eslestirme Oyunu
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';
import { saveToLeaderboard, renderLeaderboardHTML } from '../core/game-helpers.js';

const STORAGE_KEY = 'memory_cards_leaderboard';
const GRID_SIZE = 8; // 4x4 = 16 kart, 8 cift

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let startTime = 0;
let locked = false;

export function cleanupMemoryCards() { /* no timers */ }

export function initMemoryCards() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:700px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="mc-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Hafiza Kartlari</h2>
                <span id="mc-moves" style="font-weight:700;color:var(--primary-color);">0 Hamle</span>
            </div>
            <div id="mc-grid" class="memory-grid"></div>
            <div id="mc-result" style="margin-top:1rem;"></div>
        </div>
    `;
    document.getElementById('mc-back').addEventListener('click', () => {
        window.location.hash = 'dashboard';
    });
    setupGame();
}

function setupGame() {
    const words = fisherYatesShuffle([...vocabData].filter(w => w.word.length <= 8)).slice(0, GRID_SIZE);
    cards = [];
    words.forEach(w => {
        cards.push({ id: w.id + '-en', pairId: w.id, text: w.word, type: 'en' });
        cards.push({ id: w.id + '-tr', pairId: w.id, text: w.meaning, type: 'tr' });
    });
    fisherYatesShuffle(cards);
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    locked = false;
    startTime = Date.now();
    renderGrid();
}

function renderGrid() {
    const grid = document.getElementById('mc-grid');
    grid.innerHTML = cards.map((c, i) => `
        <div class="memory-card ${c.matched ? 'matched' : ''}" data-index="${i}">
            <div class="memory-card-inner">
                <div class="memory-card-front">?</div>
                <div class="memory-card-back">${c.text}</div>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.memory-card:not(.matched)').forEach(card => {
        card.addEventListener('click', () => handleCardClick(parseInt(card.dataset.index)));
    });
}

function handleCardClick(index) {
    if (locked) return;
    const card = cards[index];
    if (!card || card.matched || flippedCards.find(f => f.index === index)) return;

    flippedCards.push({ index, card });
    const el = document.querySelectorAll('.memory-card')[index];
    el.classList.add('flipped');

    if (flippedCards.length === 2) {
        locked = true;
        moves++;
        document.getElementById('mc-moves').textContent = `${moves} Hamle`;

        const [first, second] = flippedCards;
        if (first.card.pairId === second.card.pairId && first.card.type !== second.card.type) {
            cards[first.index].matched = true;
            cards[second.index].matched = true;
            matchedPairs++;
            window.audioManager?.playCorrect?.();

            setTimeout(() => {
                document.querySelectorAll('.memory-card')[first.index].classList.add('matched');
                document.querySelectorAll('.memory-card')[second.index].classList.add('matched');
                flippedCards = [];
                locked = false;

                if (matchedPairs === GRID_SIZE) {
                    finishGame();
                }
            }, 500);
        } else {
            window.audioManager?.playWrong?.();
            setTimeout(() => {
                document.querySelectorAll('.memory-card')[first.index].classList.remove('flipped');
                document.querySelectorAll('.memory-card')[second.index].classList.remove('flipped');
                flippedCards = [];
                locked = false;
            }, 800);
        }
    }
}

function finishGame() {
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    const score = Math.max(10, 200 - moves * 5 - elapsed);
    window.progressManager?.addXP?.(20);
    saveToLeaderboard(STORAGE_KEY, { score, moves, time: elapsed });
    showToast(`Tebrikler! ${moves} hamlede ${elapsed}s'de tamamladiniz!`, 'success');

    const result = document.getElementById('mc-result');
    result.innerHTML = `
        <div style="text-align:center;padding:1.5rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);">
            <h3>Tebrikler!</h3>
            <p style="font-size:1.3rem;font-weight:700;color:var(--primary-color);">${score} Puan</p>
            <p style="color:var(--text-light);">${moves} hamle - ${elapsed} saniye</p>
            <button id="mc-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('mc-restart').addEventListener('click', () => {
        result.innerHTML = '';
        setupGame();
    });
}
