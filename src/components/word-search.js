// Word Search Module — Kelime Avi Oyunu
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { saveToLeaderboard, renderLeaderboardHTML, renderCEFRFilter } from '../core/game-helpers.js';

const STORAGE_KEY = 'word_search_leaderboard';
const GRID_SIZE = 12;
const WORD_COUNT = 6;
const DIRECTIONS = [
    [0, 1],   // yatay sag
    [1, 0],   // dikey asagi
    [1, 1],   // capraz asagi-sag
    [0, -1],  // yatay sol
    [-1, 0],  // dikey yukari
    [-1, -1], // capraz yukari-sol
    [1, -1],  // capraz asagi-sol
    [-1, 1],  // capraz yukari-sag
];

let grid = [];
let placedWords = [];
let foundWords = [];
let selectedCells = [];
let isSelecting = false;
let score = 0;
let selectedLevel = null;

export function cleanupWordSearch() { /* no timers */ }

export function initWordSearch() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:700px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="wse-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Kelime Avi</h2>
                <span id="wse-score" style="font-weight:700;color:var(--primary-color);">0/${WORD_COUNT}</span>
            </div>
            <div id="wse-cefr" class="cefr-filter-bar"></div>
            <div id="wse-area"></div>
        </div>
    `;
    document.getElementById('wse-back').addEventListener('click', () => {
        window.location.hash = 'dashboard';
    });
    renderCEFRFilter('wse-cefr', ['A1','A2','B1','B2'], (level) => {
        selectedLevel = level;
    });
    startGame();
}

function getFilteredWords() {
    return vocabData.filter(w =>
        w.word.length >= 3 &&
        w.word.length <= 8 &&
        /^[a-z]+$/.test(w.word) &&
        (!selectedLevel || w.level === selectedLevel)
    );
}

function startGame() {
    score = 0;
    foundWords = [];
    selectedCells = [];
    isSelecting = false;

    const filtered = getFilteredWords();
    const candidates = fisherYatesShuffle([...filtered]).slice(0, WORD_COUNT * 3);

    // Grid'i bos olustur
    grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
    placedWords = [];

    // Kelimeleri yerlestir
    for (const w of candidates) {
        if (placedWords.length >= WORD_COUNT) break;
        if (tryPlaceWord(w.word.toUpperCase(), w)) {
            placedWords.push({ word: w.word.toUpperCase(), meaning: w.meaning, id: w.id, cells: [] });
        }
    }

    // Kelimelerin hucre pozisyonlarini kaydet
    findWordCells();

    // Bos hucreleri rastgele harflerle doldur
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }

    if (document.getElementById('wse-score')) {
        document.getElementById('wse-score').textContent = `0/${placedWords.length}`;
    }
    renderGrid();
}

function tryPlaceWord(word, data) {
    const dirs = fisherYatesShuffle([...DIRECTIONS]);
    for (const [dr, dc] of dirs) {
        const positions = getRandomPositions(word, dr, dc);
        for (const { startR, startC } of positions) {
            if (canPlace(word, startR, startC, dr, dc)) {
                for (let i = 0; i < word.length; i++) {
                    grid[startR + i * dr][startC + i * dc] = word[i];
                }
                return true;
            }
        }
    }
    return false;
}

function getRandomPositions(word, dr, dc) {
    const positions = [];
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const endR = r + (word.length - 1) * dr;
            const endC = c + (word.length - 1) * dc;
            if (endR >= 0 && endR < GRID_SIZE && endC >= 0 && endC < GRID_SIZE) {
                positions.push({ startR: r, startC: c });
            }
        }
    }
    return fisherYatesShuffle(positions).slice(0, 10);
}

function canPlace(word, startR, startC, dr, dc) {
    for (let i = 0; i < word.length; i++) {
        const r = startR + i * dr;
        const c = startC + i * dc;
        if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) return false;
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) return false;
    }
    return true;
}

function findWordCells() {
    for (const pw of placedWords) {
        pw.cells = [];
        for (const [dr, dc] of DIRECTIONS) {
            for (let r = 0; r < GRID_SIZE; r++) {
                for (let c = 0; c < GRID_SIZE; c++) {
                    let match = true;
                    const cells = [];
                    for (let i = 0; i < pw.word.length; i++) {
                        const nr = r + i * dr;
                        const nc = c + i * dc;
                        if (nr < 0 || nr >= GRID_SIZE || nc < 0 || nc >= GRID_SIZE || grid[nr][nc] !== pw.word[i]) {
                            match = false;
                            break;
                        }
                        cells.push(`${nr}-${nc}`);
                    }
                    if (match && cells.length === pw.word.length) {
                        pw.cells = cells;
                        break;
                    }
                }
                if (pw.cells.length > 0) break;
            }
            if (pw.cells.length > 0) break;
        }
    }
}

function renderGrid() {
    const area = document.getElementById('wse-area');
    const foundSet = new Set();
    foundWords.forEach(fw => {
        const pw = placedWords.find(p => p.word === fw);
        if (pw) pw.cells.forEach(c => foundSet.add(c));
    });

    let gridHTML = '<div class="ws-grid" id="ws-grid">';
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const key = `${r}-${c}`;
            const isFound = foundSet.has(key);
            gridHTML += `<div class="ws-cell${isFound ? ' ws-found' : ''}" data-r="${r}" data-c="${c}">${grid[r][c]}</div>`;
        }
    }
    gridHTML += '</div>';

    // Ipucu listesi
    const hintsHTML = placedWords.map(pw => {
        const found = foundWords.includes(pw.word);
        return `<div style="display:flex;justify-content:space-between;padding:0.3rem 0;${found ? 'text-decoration:line-through;opacity:0.5;' : ''}">
            <span>${pw.meaning}</span>
            <span style="color:var(--text-light);font-size:0.85rem;">${pw.word.length} harf</span>
        </div>`;
    }).join('');

    area.innerHTML = `
        <div style="margin-top:1rem;">
            ${gridHTML}
            <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
                <h4 style="margin-bottom:0.5rem;">Ipuclari (Turkce anlamlari):</h4>
                ${hintsHTML}
            </div>
            <div style="text-align:center;margin-top:1rem;">
                <button id="wse-new" class="btn secondary" style="font-size:0.85rem;">Yeni Oyun</button>
            </div>
        </div>
    `;

    document.getElementById('wse-new').addEventListener('click', startGame);
    setupPointerEvents();
}

function setupPointerEvents() {
    const gridEl = document.getElementById('ws-grid');
    if (!gridEl) return;

    gridEl.addEventListener('pointerdown', (e) => {
        const cell = e.target.closest('.ws-cell');
        if (!cell) return;
        e.preventDefault();
        cell.setPointerCapture?.(e.pointerId);
        isSelecting = true;
        selectedCells = [{ r: parseInt(cell.dataset.r), c: parseInt(cell.dataset.c) }];
        highlightSelection();
    });

    gridEl.addEventListener('pointermove', (e) => {
        if (!isSelecting) return;
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (!el || !el.classList?.contains('ws-cell')) return;
        const r = parseInt(el.dataset.r);
        const c = parseInt(el.dataset.c);

        // Sadece duz cizgi secimi kabul et (yatay, dikey, capraz)
        if (selectedCells.length === 1) {
            if (r !== selectedCells[0].r || c !== selectedCells[0].c) {
                selectedCells = getLineCells(selectedCells[0].r, selectedCells[0].c, r, c);
                highlightSelection();
            }
        } else if (selectedCells.length > 1) {
            const start = selectedCells[0];
            const newLine = getLineCells(start.r, start.c, r, c);
            if (newLine.length > 0) {
                selectedCells = newLine;
                highlightSelection();
            }
        }
    });

    gridEl.addEventListener('pointerup', () => {
        if (!isSelecting) return;
        isSelecting = false;
        checkSelection();
        clearHighlight();
    });

    gridEl.addEventListener('pointercancel', () => {
        isSelecting = false;
        clearHighlight();
    });
}

function getLineCells(r1, c1, r2, c2) {
    const dr = Math.sign(r2 - r1);
    const dc = Math.sign(c2 - c1);
    // Duz cizgi kontrolu: yatay, dikey veya capraz olmali
    if (dr === 0 && dc === 0) return [{ r: r1, c: c1 }];
    if (dr !== 0 && dc !== 0 && Math.abs(r2 - r1) !== Math.abs(c2 - c1)) return [];

    const cells = [];
    let r = r1, c = c1;
    while (true) {
        cells.push({ r, c });
        if (r === r2 && c === c2) break;
        r += dr;
        c += dc;
        if (cells.length > GRID_SIZE) break;
    }
    return cells;
}

function highlightSelection() {
    document.querySelectorAll('.ws-cell.ws-selected').forEach(el => el.classList.remove('ws-selected'));
    selectedCells.forEach(({ r, c }) => {
        const el = document.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
        if (el) el.classList.add('ws-selected');
    });
}

function clearHighlight() {
    document.querySelectorAll('.ws-cell.ws-selected').forEach(el => el.classList.remove('ws-selected'));
    selectedCells = [];
}

function checkSelection() {
    const selectedKeys = selectedCells.map(({ r, c }) => `${r}-${c}`);
    const selectedWord = selectedCells.map(({ r, c }) => grid[r][c]).join('');
    const reversed = [...selectedCells].reverse().map(({ r, c }) => grid[r][c]).join('');

    for (const pw of placedWords) {
        if (foundWords.includes(pw.word)) continue;
        if (
            (selectedWord === pw.word || reversed === pw.word) &&
            selectedKeys.length === pw.cells.length &&
            (selectedKeys.every(k => pw.cells.includes(k)) || selectedKeys.reverse().every(k => pw.cells.includes(k)))
        ) {
            foundWords.push(pw.word);
            score++;
            window.audioManager?.playCorrect?.();
            if (document.getElementById('wse-score')) {
                document.getElementById('wse-score').textContent = `${foundWords.length}/${placedWords.length}`;
            }

            if (foundWords.length === placedWords.length) {
                window.progressManager?.addXP?.(30);
                saveToLeaderboard(STORAGE_KEY, { score: placedWords.length });
                setTimeout(() => showComplete(), 500);
                return;
            }

            renderGrid();
            return;
        }
    }
}

function showComplete() {
    const area = document.getElementById('wse-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Tebrikler!</h3>
            <p style="font-size:1.5rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">Tum kelimeleri buldunuz!</p>
            <p style="color:var(--text-light);">${placedWords.length} kelime bulundu</p>
            <button id="wse-restart" class="btn" style="margin-top:1rem;">Yeni Oyun</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('wse-restart').addEventListener('click', () => {
        if (document.getElementById('wse-score')) {
            document.getElementById('wse-score').textContent = `0/${WORD_COUNT}`;
        }
        startGame();
    });
}
