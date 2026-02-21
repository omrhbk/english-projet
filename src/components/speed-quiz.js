// Speed Quiz Module — Zamanli Hiz Testi
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';
import { saveToLeaderboard, renderLeaderboardHTML, createCountdown } from '../core/game-helpers.js';

const STORAGE_KEY = 'speed_quiz_leaderboard';

let timerId = null;
let score = 0;
let combo = 0;
let maxCombo = 0;
let questionsAnswered = 0;
let currentQuestion = null;
let wordPool = [];
let selectedTime = 60;

export function cleanupSpeedQuiz() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

export function initSpeedQuiz() {
    cleanupSpeedQuiz();
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="sq-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Hiz Testi</h2>
                <span></span>
            </div>
            <div id="sq-area"></div>
        </div>
    `;
    document.getElementById('sq-back').addEventListener('click', () => {
        cleanupSpeedQuiz();
        window.location.hash = 'dashboard';
    });
    showConfig();
}

function showConfig() {
    const area = document.getElementById('sq-area');
    area.innerHTML = `
        <div style="text-align:center;padding:2rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);">
            <h3>Sure Secin</h3>
            <div style="display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;">
                <button class="btn sq-time-btn" data-time="30">30s</button>
                <button class="btn sq-time-btn" data-time="60" style="background:var(--accent-color);">60s</button>
                <button class="btn sq-time-btn" data-time="90">90s</button>
            </div>
            <p style="color:var(--text-light);font-size:0.9rem;">Turkce anlami gosterilen kelimenin Ingilizce karsiligini secin</p>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    area.querySelectorAll('.sq-time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTime = parseInt(btn.dataset.time);
            startQuiz();
        });
    });
}

function startQuiz() {
    score = 0;
    combo = 0;
    maxCombo = 0;
    questionsAnswered = 0;
    wordPool = fisherYatesShuffle([...vocabData]);

    const area = document.getElementById('sq-area');
    area.innerHTML = `
        <div style="text-align:center;">
            <div id="sq-timer" class="timer-ring">${selectedTime}</div>
            <div class="challenge-score-row">
                <span class="challenge-stat">Skor: <span id="sq-score">0</span></span>
                <span class="challenge-stat">Combo: <span id="sq-combo">0</span>x</span>
            </div>
        </div>
        <div id="sq-question-area"></div>
    `;

    timerId = createCountdown(selectedTime,
        (sec) => {
            const timerEl = document.getElementById('sq-timer');
            if (timerEl) {
                timerEl.textContent = sec;
                if (sec <= 10) timerEl.classList.add('urgent');
            }
        },
        () => finishQuiz()
    );

    showNextQuestion();
}

function showNextQuestion() {
    if (wordPool.length < 4) wordPool = fisherYatesShuffle([...vocabData]);

    const correct = wordPool.pop();
    const wrongs = fisherYatesShuffle(vocabData.filter(w => w.id !== correct.id)).slice(0, 3);
    const options = fisherYatesShuffle([correct, ...wrongs]);
    currentQuestion = correct;

    const qArea = document.getElementById('sq-question-area');
    if (!qArea) return;
    qArea.innerHTML = `
        <div class="challenge-question-card">
            <p class="challenge-question">"${correct.meaning}" kelimesinin Ingilizcesi?</p>
            <div class="challenge-options">
                ${options.map(o => `<button class="challenge-opt-btn" data-id="${o.id}">${o.word}</button>`).join('')}
            </div>
        </div>
    `;

    qArea.querySelectorAll('.challenge-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.id), btn));
    });
}

function handleAnswer(selectedId, btnEl) {
    const isCorrect = selectedId === currentQuestion.id;
    questionsAnswered++;

    document.querySelectorAll('.challenge-opt-btn').forEach(b => b.disabled = true);

    if (isCorrect) {
        btnEl.classList.add('correct');
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        const multiplier = combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
        const points = 10 * multiplier;
        score += points;
        window.audioManager?.playCorrect?.();
    } else {
        btnEl.classList.add('wrong');
        document.querySelector(`.challenge-opt-btn[data-id="${currentQuestion.id}"]`)?.classList.add('correct');
        combo = 0;
        window.audioManager?.playWrong?.();
    }

    document.getElementById('sq-score').textContent = score;
    document.getElementById('sq-combo').textContent = combo;

    setTimeout(showNextQuestion, 600);
}

function finishQuiz() {
    cleanupSpeedQuiz();
    window.progressManager?.addXP?.(Math.min(score, 50));
    saveToLeaderboard(STORAGE_KEY, { score, combo: maxCombo, questions: questionsAnswered, time: selectedTime });

    const area = document.getElementById('sq-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Zaman Doldu!</h3>
            <p style="font-size:2rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} Puan</p>
            <p style="color:var(--text-light);">${questionsAnswered} soru - Max combo: ${maxCombo}x</p>
            <button id="sq-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('sq-restart').addEventListener('click', showConfig);
}
