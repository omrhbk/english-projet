// Crossword Module — Bulmaca Grid
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';
import { saveToLeaderboard, renderLeaderboardHTML } from '../core/game-helpers.js';

const STORAGE_KEY = 'crossword_leaderboard';
const WORD_COUNT = 6;
const GRID_SIZE = 12;

let grid = [];
let placedWords = [];
let revealedCells = new Set();
let hintsUsed = 0;

export function cleanupCrossword() { /* no timers */ }

export function initCrossword() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:700px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="cw-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Bulmaca</h2>
                <button id="cw-hint" class="btn small">Ipucu</button>
            </div>
            <div id="cw-clues" style="margin-bottom:1rem;"></div>
            <div id="cw-grid" class="crossword-grid-wrap"></div>
            <div style="text-align:center;margin-top:1rem;">
                <button id="cw-check" class="btn">Kontrol Et</button>
                <button id="cw-new" class="btn secondary" style="margin-left:0.5rem;">Yeni Bulmaca</button>
            </div>
            <div id="cw-result" style="margin-top:1rem;"></div>
        </div>
    `;

    document.getElementById('cw-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    document.getElementById('cw-check').addEventListener('click', checkAnswers);
    document.getElementById('cw-new').addEventListener('click', generatePuzzle);
    document.getElementById('cw-hint').addEventListener('click', giveHint);

    generatePuzzle();
}

function generatePuzzle() {
    grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
    placedWords = [];
    revealedCells = new Set();
    hintsUsed = 0;

    const candidates = fisherYatesShuffle(
        vocabData.filter(w => w.word.length >= 3 && w.word.length <= 9 && /^[a-z]+$/.test(w.word))
    );

    for (const word of candidates) {
        if (placedWords.length >= WORD_COUNT) break;
        if (tryPlaceWord(word)) {
            placedWords.push(word);
        }
    }

    renderPuzzle();
}

function tryPlaceWord(wordObj) {
    const word = wordObj.word.toUpperCase();
    const directions = fisherYatesShuffle([
        { dr: 0, dc: 1 },  // horizontal
        { dr: 1, dc: 0 }   // vertical
    ]);

    for (const { dr, dc } of directions) {
        const maxR = dr === 0 ? GRID_SIZE : GRID_SIZE - word.length;
        const maxC = dc === 0 ? GRID_SIZE : GRID_SIZE - word.length;

        for (let attempt = 0; attempt < 30; attempt++) {
            const r = Math.floor(Math.random() * maxR);
            const c = Math.floor(Math.random() * maxC);

            if (canPlace(word, r, c, dr, dc)) {
                for (let i = 0; i < word.length; i++) {
                    grid[r + i * dr][c + i * dc] = { letter: word[i], wordId: wordObj.id };
                }
                return true;
            }
        }
    }
    return false;
}

function canPlace(word, r, c, dr, dc) {
    for (let i = 0; i < word.length; i++) {
        const nr = r + i * dr;
        const nc = c + i * dc;
        if (nr >= GRID_SIZE || nc >= GRID_SIZE) return false;
        const cell = grid[nr][nc];
        if (cell !== null && cell.letter !== word[i]) return false;
    }
    return true;
}

function renderPuzzle() {
    // Clues
    const clues = document.getElementById('cw-clues');
    clues.innerHTML = `
        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            <h4 style="margin-bottom:0.5rem;">Ipuclari (Turkce → Ingilizce)</h4>
            ${placedWords.map((w, i) => `<p style="margin:0.25rem 0;"><strong>${i + 1}.</strong> ${w.meaning} <span style="color:var(--text-light);">(${w.word.length} harf)</span></p>`).join('')}
        </div>
    `;

    // Grid
    const gridEl = document.getElementById('cw-grid');
    let html = '<div class="crossword-grid">';
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = grid[r][c];
            if (cell) {
                const revealed = revealedCells.has(`${r}-${c}`);
                html += `<input class="cw-cell" data-r="${r}" data-c="${c}" maxlength="1" value="${revealed ? cell.letter : ''}" ${revealed ? 'disabled' : ''} />`;
            } else {
                html += '<div class="cw-cell cw-black"></div>';
            }
        }
    }
    html += '</div>';
    gridEl.innerHTML = html;

    gridEl.querySelectorAll('input.cw-cell').forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
            if (e.target.value) {
                const next = e.target.nextElementSibling;
                if (next && next.tagName === 'INPUT') next.focus();
            }
        });
    });
}

function giveHint() {
    const emptyCells = [];
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] && !revealedCells.has(`${r}-${c}`)) {
                emptyCells.push({ r, c });
            }
        }
    }
    if (emptyCells.length === 0) return;
    const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    revealedCells.add(`${r}-${c}`);
    hintsUsed++;
    renderPuzzle();
    showToast('Bir harf acildi!', 'info');
}

function checkAnswers() {
    let correct = 0;
    let total = 0;

    document.querySelectorAll('input.cw-cell').forEach(input => {
        const r = parseInt(input.dataset.r);
        const c = parseInt(input.dataset.c);
        const cell = grid[r][c];
        if (!cell) return;
        total++;

        if (input.value.toUpperCase() === cell.letter) {
            correct++;
            input.style.background = 'rgba(126,211,33,0.2)';
            input.style.borderColor = 'var(--accent-color)';
        } else {
            input.style.background = 'rgba(208,2,27,0.1)';
            input.style.borderColor = 'var(--danger-color)';
        }
    });

    const pct = Math.round((correct / total) * 100);

    if (pct === 100) {
        const score = Math.max(10, 100 - hintsUsed * 10);
        window.progressManager?.addXP?.(20);
        saveToLeaderboard(STORAGE_KEY, { score, hints: hintsUsed });
        showToast(`Muhteesem! Tum bulmaca dogru! +${score} puan`, 'success');
    } else {
        showToast(`%${pct} dogru (${correct}/${total})`, pct >= 50 ? 'warning' : 'error');
    }
}
