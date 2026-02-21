// Hangman Module — Adam Asmaca Oyunu
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';
import { saveToLeaderboard, renderLeaderboardHTML } from '../core/game-helpers.js';

const STORAGE_KEY = 'hangman_leaderboard';
const MAX_MISTAKES = 6;

let currentWord = null;
let guessedLetters = [];
let mistakes = 0;
let score = 0;
let wordsCompleted = 0;

export function cleanupHangman() { /* no timers */ }

export function initHangman() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="hm-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Adam Asmaca</h2>
                <span id="hm-score" style="font-weight:700;color:var(--primary-color);">Skor: 0</span>
            </div>
            <div id="hm-area"></div>
        </div>
    `;
    document.getElementById('hm-back').addEventListener('click', () => {
        window.location.hash = 'dashboard';
    });
    score = 0;
    wordsCompleted = 0;
    startNewRound();
}

function startNewRound() {
    const words = vocabData.filter(w => w.word.length >= 4 && w.word.length <= 10 && /^[a-z]+$/.test(w.word));
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    mistakes = 0;
    renderGame();
}

function renderGame() {
    const area = document.getElementById('hm-area');
    const wordDisplay = currentWord.word.split('').map(l =>
        guessedLetters.includes(l) ? `<span class="hm-letter-revealed">${l.toUpperCase()}</span>` : `<span class="hm-letter-blank">_</span>`
    ).join('');

    const keyboard = 'abcdefghijklmnopqrstuvwxyz'.split('').map(l => {
        const used = guessedLetters.includes(l);
        const isCorrect = used && currentWord.word.includes(l);
        const isWrong = used && !currentWord.word.includes(l);
        const cls = isCorrect ? 'hm-key correct' : isWrong ? 'hm-key wrong' : 'hm-key';
        return `<button class="${cls}" data-letter="${l}" ${used ? 'disabled' : ''}>${l.toUpperCase()}</button>`;
    }).join('');

    area.innerHTML = `
        <div style="text-align:center;margin-bottom:1.5rem;">
            <svg id="hm-svg" width="200" height="200" viewBox="0 0 200 200" style="margin:0 auto;">
                <line x1="20" y1="180" x2="80" y2="180" stroke="var(--text-color)" stroke-width="3"/>
                <line x1="50" y1="180" x2="50" y2="30" stroke="var(--text-color)" stroke-width="3"/>
                <line x1="50" y1="30" x2="130" y2="30" stroke="var(--text-color)" stroke-width="3"/>
                <line x1="130" y1="30" x2="130" y2="50" stroke="var(--text-color)" stroke-width="3"/>
                ${mistakes >= 1 ? '<circle cx="130" cy="65" r="15" stroke="var(--danger-color)" stroke-width="3" fill="none"/>' : ''}
                ${mistakes >= 2 ? '<line x1="130" y1="80" x2="130" y2="120" stroke="var(--danger-color)" stroke-width="3"/>' : ''}
                ${mistakes >= 3 ? '<line x1="130" y1="90" x2="110" y2="110" stroke="var(--danger-color)" stroke-width="3"/>' : ''}
                ${mistakes >= 4 ? '<line x1="130" y1="90" x2="150" y2="110" stroke="var(--danger-color)" stroke-width="3"/>' : ''}
                ${mistakes >= 5 ? '<line x1="130" y1="120" x2="110" y2="150" stroke="var(--danger-color)" stroke-width="3"/>' : ''}
                ${mistakes >= 6 ? '<line x1="130" y1="120" x2="150" y2="150" stroke="var(--danger-color)" stroke-width="3"/>' : ''}
            </svg>
        </div>
        <p style="text-align:center;color:var(--text-light);margin-bottom:0.5rem;">Ipucu: <strong>${currentWord.meaning}</strong></p>
        <div style="display:flex;justify-content:center;gap:0.5rem;font-size:1.8rem;font-weight:700;margin-bottom:1.5rem;letter-spacing:0.3rem;">
            ${wordDisplay}
        </div>
        <div class="hm-keyboard">${keyboard}</div>
        <p style="text-align:center;margin-top:1rem;color:var(--text-light);">Kalan hak: ${MAX_MISTAKES - mistakes}</p>
    `;

    area.querySelectorAll('.hm-key:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => handleGuess(btn.dataset.letter));
    });
}

function handleGuess(letter) {
    if (guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);

    if (!currentWord.word.includes(letter)) {
        mistakes++;
        window.audioManager?.playWrong?.();
    } else {
        window.audioManager?.playCorrect?.();
    }

    const allRevealed = currentWord.word.split('').every(l => guessedLetters.includes(l));

    if (allRevealed) {
        wordsCompleted++;
        const wordScore = (MAX_MISTAKES - mistakes) * 10 + 20;
        score += wordScore;
        document.getElementById('hm-score').textContent = `Skor: ${score}`;
        window.progressManager?.addXP?.(15);
        showToast(`Dogru! +${wordScore} puan`, 'success');
        setTimeout(startNewRound, 1500);
        return;
    }

    if (mistakes >= MAX_MISTAKES) {
        showToast(`Kaybettiniz! Kelime: ${currentWord.word}`, 'error');
        saveToLeaderboard(STORAGE_KEY, { score, words: wordsCompleted });
        setTimeout(() => showGameOver(), 1000);
        return;
    }

    renderGame();
}

function showGameOver() {
    const area = document.getElementById('hm-area');
    area.innerHTML = `
        <div style="text-align:center;padding:2rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);">
            <h3>Oyun Bitti!</h3>
            <p style="font-size:1.5rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} Puan</p>
            <p style="color:var(--text-light);">${wordsCompleted} kelime bildiniz</p>
            <button id="hm-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
        </div>
        <div style="margin-top:1.5rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('hm-restart').addEventListener('click', () => {
        score = 0;
        wordsCompleted = 0;
        startNewRound();
    });
}
