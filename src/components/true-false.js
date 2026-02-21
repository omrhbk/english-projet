// True/False Module — Dogru/Yanlis Oyunu
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { saveToLeaderboard, renderLeaderboardHTML, createCountdown } from '../core/game-helpers.js';

const STORAGE_KEY = 'true_false_leaderboard';

let timerId = null;
let score = 0;
let combo = 0;
let maxCombo = 0;
let questionsAnswered = 0;
let correctAnswers = 0;
let currentPair = null;
let isCorrectPair = false;
let wordPool = [];
let selectedTime = 60;

export function cleanupTrueFalse() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

export function initTrueFalse() {
    cleanupTrueFalse();
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="tf-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Dogru / Yanlis</h2>
                <span></span>
            </div>
            <div id="tf-area"></div>
        </div>
    `;
    document.getElementById('tf-back').addEventListener('click', () => {
        cleanupTrueFalse();
        window.location.hash = 'dashboard';
    });
    showConfig();
}

function showConfig() {
    const area = document.getElementById('tf-area');
    area.innerHTML = `
        <div style="text-align:center;padding:2rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);">
            <h3>Sure Secin</h3>
            <div style="display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;">
                <button class="btn tf-time-btn" data-time="30">30s</button>
                <button class="btn tf-time-btn" data-time="60" style="background:var(--accent-color);">60s</button>
                <button class="btn tf-time-btn" data-time="90">90s</button>
            </div>
            <p style="color:var(--text-light);font-size:0.9rem;">Ingilizce kelime ve Turkce anlam gosterilir. Eslestirme dogru mu yanlis mi?</p>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    area.querySelectorAll('.tf-time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTime = parseInt(btn.dataset.time);
            startGame();
        });
    });
}

function startGame() {
    score = 0;
    combo = 0;
    maxCombo = 0;
    questionsAnswered = 0;
    correctAnswers = 0;
    wordPool = fisherYatesShuffle([...vocabData]);

    const area = document.getElementById('tf-area');
    area.innerHTML = `
        <div style="text-align:center;">
            <div id="tf-timer" class="timer-ring">${selectedTime}</div>
            <div class="challenge-score-row">
                <span class="challenge-stat">Skor: <span id="tf-score">0</span></span>
                <span class="challenge-stat">Seri: <span id="tf-combo">0</span>x</span>
            </div>
        </div>
        <div id="tf-question-area"></div>
    `;

    timerId = createCountdown(selectedTime,
        (sec) => {
            const timerEl = document.getElementById('tf-timer');
            if (timerEl) {
                timerEl.textContent = sec;
                if (sec <= 10) timerEl.classList.add('urgent');
            }
        },
        () => finishGame()
    );

    showNextQuestion();
}

function showNextQuestion() {
    if (wordPool.length < 2) wordPool = fisherYatesShuffle([...vocabData]);

    const word = wordPool.pop();
    // %50 dogru, %50 yanlis ceviri goster
    isCorrectPair = Math.random() < 0.5;

    let displayMeaning;
    if (isCorrectPair) {
        displayMeaning = word.meaning;
    } else {
        const others = vocabData.filter(w => w.id !== word.id);
        const wrong = others[Math.floor(Math.random() * others.length)];
        displayMeaning = wrong.meaning;
    }
    currentPair = { word: word.word, meaning: displayMeaning };

    const qArea = document.getElementById('tf-question-area');
    if (!qArea) return;
    qArea.innerHTML = `
        <div class="challenge-question-card" style="text-align:center;">
            <p style="font-size:2rem;font-weight:700;color:var(--primary-color);margin-bottom:0.5rem;">${word.word}</p>
            <p style="font-size:1.3rem;color:var(--text-color);margin-bottom:1.5rem;">${displayMeaning}</p>
            <div class="tf-btn-row" style="display:flex;justify-content:center;gap:1rem;">
                <button class="btn tf-answer-btn" data-answer="true" style="background:#27ae60;padding:0.75rem 2rem;font-size:1.1rem;min-width:120px;">Dogru</button>
                <button class="btn tf-answer-btn" data-answer="false" style="background:#e74c3c;padding:0.75rem 2rem;font-size:1.1rem;min-width:120px;">Yanlis</button>
            </div>
        </div>
    `;

    qArea.querySelectorAll('.tf-answer-btn').forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(btn.dataset.answer === 'true', btn));
    });
}

function handleAnswer(answeredTrue, btnEl) {
    const correct = answeredTrue === isCorrectPair;
    questionsAnswered++;

    document.querySelectorAll('.tf-answer-btn').forEach(b => b.disabled = true);

    if (correct) {
        correctAnswers++;
        btnEl.style.boxShadow = '0 0 0 3px var(--accent-color)';
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        const multiplier = combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
        score += 10 * multiplier;
        window.audioManager?.playCorrect?.();
    } else {
        btnEl.style.opacity = '0.5';
        combo = 0;
        window.audioManager?.playWrong?.();
    }

    document.getElementById('tf-score').textContent = score;
    document.getElementById('tf-combo').textContent = combo;

    setTimeout(showNextQuestion, 500);
}

function finishGame() {
    cleanupTrueFalse();
    window.progressManager?.addXP?.(Math.min(score, 50));
    saveToLeaderboard(STORAGE_KEY, { score, combo: maxCombo, questions: questionsAnswered });

    const area = document.getElementById('tf-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Zaman Doldu!</h3>
            <p style="font-size:2rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} Puan</p>
            <p style="color:var(--text-light);">${correctAnswers}/${questionsAnswered} dogru - Max seri: ${maxCombo}x</p>
            <button id="tf-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('tf-restart').addEventListener('click', showConfig);
}
