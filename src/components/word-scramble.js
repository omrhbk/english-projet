// Word Scramble Module — Harf Karistirma Oyunu
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { saveToLeaderboard, renderLeaderboardHTML, createCountdown, renderCEFRFilter } from '../core/game-helpers.js';

const STORAGE_KEY = 'word_scramble_leaderboard';

let timerId = null;
let score = 0;
let combo = 0;
let maxCombo = 0;
let wordsAnswered = 0;
let correctCount = 0;
let currentWord = null;
let wordPool = [];
let selectedTime = 60;
let selectedLevel = null;
let roundStartTime = 0;

export function cleanupWordScramble() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

export function initWordScramble() {
    cleanupWordScramble();
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="ws-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Harf Karistirma</h2>
                <span></span>
            </div>
            <div id="ws-cefr" class="cefr-filter-bar"></div>
            <div id="ws-area"></div>
        </div>
    `;
    document.getElementById('ws-back').addEventListener('click', () => {
        cleanupWordScramble();
        window.location.hash = 'dashboard';
    });
    renderCEFRFilter('ws-cefr', ['A1','A2','B1','B2'], (level) => { selectedLevel = level; });
    showConfig();
}

function showConfig() {
    const area = document.getElementById('ws-area');
    area.innerHTML = `
        <div style="text-align:center;padding:2rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);margin-top:1rem;">
            <h3>Sure Secin</h3>
            <div style="display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;">
                <button class="btn ws-time-btn" data-time="30">30s</button>
                <button class="btn ws-time-btn" data-time="60" style="background:var(--accent-color);">60s</button>
                <button class="btn ws-time-btn" data-time="90">90s</button>
            </div>
            <p style="color:var(--text-light);font-size:0.9rem;">Karisik harfleri duzelt, dogru kelimeyi yaz</p>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    area.querySelectorAll('.ws-time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTime = parseInt(btn.dataset.time);
            startGame();
        });
    });
}

function getFilteredWords() {
    return vocabData.filter(w =>
        w.word.length >= 4 &&
        /^[a-z]+$/.test(w.word) &&
        (!selectedLevel || w.level === selectedLevel)
    );
}

function scrambleWord(word) {
    const letters = word.split('');
    let scrambled;
    let attempts = 0;
    do {
        scrambled = fisherYatesShuffle([...letters]);
        attempts++;
    } while (scrambled.join('') === word && attempts < 20);
    return scrambled;
}

function startGame() {
    score = 0;
    combo = 0;
    maxCombo = 0;
    wordsAnswered = 0;
    correctCount = 0;
    const filtered = getFilteredWords();
    wordPool = fisherYatesShuffle([...filtered]);

    const area = document.getElementById('ws-area');
    area.innerHTML = `
        <div style="text-align:center;margin-top:1rem;">
            <div id="ws-timer" class="timer-ring">${selectedTime}</div>
            <div class="challenge-score-row">
                <span class="challenge-stat">Skor: <span id="ws-score">0</span></span>
                <span class="challenge-stat">Seri: <span id="ws-combo">0</span>x</span>
            </div>
        </div>
        <div id="ws-question-area"></div>
    `;

    timerId = createCountdown(selectedTime,
        (sec) => {
            const timerEl = document.getElementById('ws-timer');
            if (timerEl) {
                timerEl.textContent = sec;
                if (sec <= 10) timerEl.classList.add('urgent');
            }
        },
        () => finishGame()
    );

    showNextWord();
}

function showNextWord() {
    if (wordPool.length === 0) {
        const filtered = getFilteredWords();
        wordPool = fisherYatesShuffle([...filtered]);
    }

    currentWord = wordPool.pop();
    const scrambled = scrambleWord(currentWord.word);
    roundStartTime = Date.now();

    const qArea = document.getElementById('ws-question-area');
    if (!qArea) return;
    qArea.innerHTML = `
        <div class="challenge-question-card" style="text-align:center;">
            <p style="color:var(--text-light);margin-bottom:1rem;">Ipucu: <strong>${currentWord.meaning}</strong></p>
            <div style="display:flex;justify-content:center;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap;">
                ${scrambled.map(l => `<span class="letter-tile">${l.toUpperCase()}</span>`).join('')}
            </div>
            <div style="display:flex;gap:0.75rem;justify-content:center;align-items:center;">
                <input type="text" id="ws-input" class="search-input" placeholder="Kelimeyi yaz..." style="max-width:220px;text-transform:lowercase;text-align:center;" autocomplete="off" />
                <button id="ws-submit" class="btn">Kontrol</button>
            </div>
            <div id="ws-feedback" class="feedback-msg" style="margin-top:0.75rem;"></div>
            <button id="ws-skip" class="btn secondary" style="margin-top:0.5rem;font-size:0.85rem;">Atla</button>
        </div>
    `;

    const input = document.getElementById('ws-input');
    input.focus();
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });
    document.getElementById('ws-submit').addEventListener('click', checkAnswer);
    document.getElementById('ws-skip').addEventListener('click', () => {
        combo = 0;
        document.getElementById('ws-combo').textContent = combo;
        showNextWord();
    });
}

function checkAnswer() {
    const input = document.getElementById('ws-input');
    const answer = input.value.trim().toLowerCase();
    if (!answer) return;

    wordsAnswered++;
    const isCorrect = answer === currentWord.word;

    const feedback = document.getElementById('ws-feedback');
    if (isCorrect) {
        correctCount++;
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        const elapsed = (Date.now() - roundStartTime) / 1000;
        const speedBonus = elapsed < 5 ? 5 : elapsed < 10 ? 3 : 0;
        const multiplier = combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
        const points = (10 + speedBonus) * multiplier;
        score += points;
        feedback.textContent = `Dogru! +${points} puan`;
        feedback.className = 'feedback-msg success';
        window.audioManager?.playCorrect?.();
    } else {
        combo = 0;
        feedback.textContent = `Yanlis! Dogru cevap: ${currentWord.word}`;
        feedback.className = 'feedback-msg error';
        window.audioManager?.playWrong?.();
    }

    document.getElementById('ws-score').textContent = score;
    document.getElementById('ws-combo').textContent = combo;

    input.disabled = true;
    document.getElementById('ws-submit').disabled = true;
    document.getElementById('ws-skip').disabled = true;

    setTimeout(showNextWord, 800);
}

function finishGame() {
    cleanupWordScramble();
    window.progressManager?.addXP?.(Math.min(score, 50));
    saveToLeaderboard(STORAGE_KEY, { score, combo: maxCombo, questions: wordsAnswered });

    const area = document.getElementById('ws-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Zaman Doldu!</h3>
            <p style="font-size:2rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} Puan</p>
            <p style="color:var(--text-light);">${correctCount}/${wordsAnswered} dogru - Max seri: ${maxCombo}x</p>
            <button id="ws-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('ws-restart').addEventListener('click', showConfig);
}
