// Emoji Quiz Module — Emoji Tahmin Oyunu
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { saveToLeaderboard, renderLeaderboardHTML } from '../core/game-helpers.js';

const STORAGE_KEY = 'emoji_quiz_leaderboard';

// Emoji -> vocabData word eslestirme tablosu (ID bazli)
const EMOJI_MAP = [
    { emoji: '🐱', wordId: 1 },    // cat
    { emoji: '🐶', wordId: 2 },    // dog
    { emoji: '🐦', wordId: 3 },    // bird
    { emoji: '🐟', wordId: 4 },    // fish
    { emoji: '🐴', wordId: 5 },    // horse
    { emoji: '🐄', wordId: 6 },    // cow
    { emoji: '🐑', wordId: 7 },    // sheep
    { emoji: '🐷', wordId: 8 },    // pig
    { emoji: '🐔', wordId: 9 },    // chicken
    { emoji: '🐰', wordId: 10 },   // rabbit
    { emoji: '🦁', wordId: 11 },   // lion
    { emoji: '🐯', wordId: 12 },   // tiger
    { emoji: '🐘', wordId: 13 },   // elephant
    { emoji: '🐻', wordId: 14 },   // bear
    { emoji: '🐺', wordId: 15 },   // wolf
    { emoji: '🦊', wordId: 16 },   // fox
    { emoji: '🦌', wordId: 17 },   // deer
    { emoji: '🐒', wordId: 18 },   // monkey
    { emoji: '🐍', wordId: 19 },   // snake
    { emoji: '🐸', wordId: 20 },   // frog
    { emoji: '🍎', wordId: 21 },   // apple
    { emoji: '🍞', wordId: 22 },   // bread
    { emoji: '🥛', wordId: 23 },   // milk
    { emoji: '💧', wordId: 24 },   // water
    { emoji: '🍚', wordId: 25 },   // rice
    { emoji: '🥚', wordId: 26 },   // egg
    { emoji: '🧀', wordId: 27 },   // cheese
    { emoji: '🧈', wordId: 28 },   // butter
    { emoji: '🍬', wordId: 29 },   // sugar
    { emoji: '🧂', wordId: 30 },   // salt
    { emoji: '🥩', wordId: 31 },   // meat
    { emoji: '🍕', wordId: 36 },   // pizza
    { emoji: '🎂', wordId: 37 },   // cake
    { emoji: '☕', wordId: 38 },   // coffee
    { emoji: '🍵', wordId: 39 },   // tea
    { emoji: '🧃', wordId: 40 },   // juice
    { emoji: '☀️', wordId: 116 },  // sun
    { emoji: '🌧️', wordId: 119 },  // rain
    { emoji: '❄️', wordId: 120 },  // snow
    { emoji: '🌈', wordId: 770 },  // rainbow
    { emoji: '📕', wordId: 144 },  // book
    { emoji: '🏫', wordId: 141 },  // school
    { emoji: '👩‍🏫', wordId: 142 },  // teacher
    { emoji: '👨‍🎓', wordId: 143 },  // student
    { emoji: '🏠', wordId: 91 },   // house
    { emoji: '🚗', wordId: 171 },  // car
    { emoji: '✈️', wordId: 174 },  // plane
    { emoji: '🚌', wordId: 172 },  // bus
    { emoji: '🚂', wordId: 173 },  // train
    { emoji: '🚢', wordId: 175 },  // ship
    { emoji: '👁️', wordId: 77 },   // eye
    { emoji: '👃', wordId: 79 },   // nose
    { emoji: '👄', wordId: 80 },   // mouth
    { emoji: '🖐️', wordId: 81 },   // hand
];

let currentRound = 0;
let totalRounds = 10;
let score = 0;
let questionPool = [];

export function cleanupEmojiQuiz() { /* no timers */ }

export function initEmojiQuiz() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="eq-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Emoji Quiz</h2>
                <span></span>
            </div>
            <div id="eq-area"></div>
        </div>
    `;
    document.getElementById('eq-back').addEventListener('click', () => {
        window.location.hash = 'dashboard';
    });
    showConfig();
}

function showConfig() {
    const area = document.getElementById('eq-area');
    area.innerHTML = `
        <div style="text-align:center;padding:2rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);">
            <h3>Tur Sayisi Secin</h3>
            <div style="display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;">
                <button class="btn eq-round-btn" data-rounds="10">10 Tur</button>
                <button class="btn eq-round-btn" data-rounds="15" style="background:var(--accent-color);">15 Tur</button>
                <button class="btn eq-round-btn" data-rounds="20">20 Tur</button>
            </div>
            <p style="color:var(--text-light);font-size:0.9rem;">Emoji'nin hangi kelimeye ait oldugunu tahmin et</p>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    area.querySelectorAll('.eq-round-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            totalRounds = parseInt(btn.dataset.rounds);
            startGame();
        });
    });
}

function buildPool() {
    // Sadece vocabData'da bulunan emoji eslestirmelerini kullan
    const valid = EMOJI_MAP.filter(e => vocabData.find(w => w.id === e.wordId));
    return fisherYatesShuffle([...valid]);
}

function startGame() {
    score = 0;
    currentRound = 0;
    questionPool = buildPool();
    showNextRound();
}

function showNextRound() {
    if (currentRound >= totalRounds) {
        finishGame();
        return;
    }

    if (questionPool.length === 0) questionPool = buildPool();
    const item = questionPool.pop();
    const correctWord = vocabData.find(w => w.id === item.wordId);
    if (!correctWord) { currentRound++; showNextRound(); return; }

    // 3 yanlis sik olustur
    const wrongs = fisherYatesShuffle(
        vocabData.filter(w => w.id !== correctWord.id)
    ).slice(0, 3);
    const options = fisherYatesShuffle([correctWord, ...wrongs]);

    currentRound++;
    const area = document.getElementById('eq-area');
    area.innerHTML = `
        <div style="text-align:center;margin-bottom:0.5rem;">
            <span class="challenge-stat">Tur: ${currentRound}/${totalRounds}</span>
            <span class="challenge-stat" style="margin-left:1.5rem;">Skor: <span id="eq-score">${score}</span></span>
        </div>
        <div class="challenge-question-card" style="text-align:center;">
            <div style="font-size:4rem;margin-bottom:1rem;">${item.emoji}</div>
            <p style="color:var(--text-light);margin-bottom:1rem;">Bu emoji hangi kelimeyi temsil ediyor?</p>
            <div class="challenge-options">
                ${options.map(o => `<button class="challenge-opt-btn eq-opt" data-id="${o.id}">${o.word} <span style="font-size:0.8rem;color:var(--text-light);">(${o.meaning})</span></button>`).join('')}
            </div>
        </div>
    `;

    area.querySelectorAll('.eq-opt').forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.id), correctWord.id, btn));
    });
}

function handleAnswer(selectedId, correctId, btnEl) {
    const isCorrect = selectedId === correctId;

    document.querySelectorAll('.eq-opt').forEach(b => b.disabled = true);

    if (isCorrect) {
        btnEl.classList.add('correct');
        score += 10;
        window.audioManager?.playCorrect?.();
    } else {
        btnEl.classList.add('wrong');
        document.querySelector(`.eq-opt[data-id="${correctId}"]`)?.classList.add('correct');
        window.audioManager?.playWrong?.();
    }

    setTimeout(showNextRound, 700);
}

function finishGame() {
    window.progressManager?.addXP?.(Math.min(score, 50));
    saveToLeaderboard(STORAGE_KEY, { score, rounds: totalRounds });

    const area = document.getElementById('eq-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Quiz Bitti!</h3>
            <p style="font-size:2rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} Puan</p>
            <p style="color:var(--text-light);">${totalRounds} turda ${score / 10}/${totalRounds} dogru</p>
            <button id="eq-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('eq-restart').addEventListener('click', showConfig);
}
