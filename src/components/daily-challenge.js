// Daily Challenge Module — Gunluk 5 soru, streak takibi, deterministik seed
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';
import { saveToLeaderboard, renderLeaderboardHTML } from '../core/game-helpers.js';

const STORAGE_KEY = 'daily_challenge_leaderboard';
const STREAK_KEY = 'daily_challenge_streak';
const LAST_DATE_KEY = 'daily_challenge_last_date';
const QUESTION_COUNT = 5;

let questions = [];
let currentIdx = 0;
let score = 0;

export function cleanupDailyChallenge() { /* no timers */ }

function getTodaySeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function seededRandom(seed) {
    let s = seed;
    return () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

function seededShuffle(arr, rand) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getStreak() {
    try {
        return JSON.parse(localStorage.getItem(STREAK_KEY)) || { count: 0, best: 0 };
    } catch { return { count: 0, best: 0 }; }
}

function checkAndUpdateStreak() {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem(LAST_DATE_KEY);
    const streak = getStreak();

    if (lastDate === today) return false; // Already played today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastDate === yesterday.toDateString()) {
        streak.count++;
    } else if (lastDate !== today) {
        streak.count = 1;
    }

    if (streak.count > streak.best) streak.best = streak.count;
    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
    localStorage.setItem(LAST_DATE_KEY, today);
    return true;
}

function hasPlayedToday() {
    return localStorage.getItem(LAST_DATE_KEY) === new Date().toDateString();
}

export function initDailyChallenge() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:650px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="dc-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Gunun Sorusu</h2>
                <span></span>
            </div>
            <div id="dc-area"></div>
        </div>
    `;
    document.getElementById('dc-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });

    if (hasPlayedToday()) {
        showAlreadyPlayed();
    } else {
        showStartScreen();
    }
}

function showStartScreen() {
    const streak = getStreak();
    const area = document.getElementById('dc-area');
    area.innerHTML = `
        <div style="text-align:center;padding:2rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);">
            <div style="font-size:3rem;margin-bottom:0.5rem;">📅</div>
            <h3>Gunluk Meydan Okuma</h3>
            <p style="color:var(--text-light);margin:0.5rem 0;">Her gun 5 soru cevapla, serini koru!</p>
            <div style="display:flex;justify-content:center;gap:1.5rem;margin:1rem 0;">
                <div><span style="font-size:1.5rem;font-weight:700;color:#ff6b35;">${streak.count}</span><br><span style="font-size:0.8rem;color:var(--text-light);">Mevcut Seri</span></div>
                <div><span style="font-size:1.5rem;font-weight:700;color:var(--primary-color);">${streak.best}</span><br><span style="font-size:0.8rem;color:var(--text-light);">En Iyi Seri</span></div>
            </div>
            <button id="dc-start" class="btn" style="margin-top:1rem;">Basla</button>
        </div>
    `;
    document.getElementById('dc-start').addEventListener('click', startChallenge);
}

function showAlreadyPlayed() {
    const streak = getStreak();
    const area = document.getElementById('dc-area');
    area.innerHTML = `
        <div style="text-align:center;padding:2rem;background:var(--card-bg);border-radius:var(--border-radius);box-shadow:var(--shadow);">
            <div style="font-size:3rem;margin-bottom:0.5rem;">✅</div>
            <h3>Bugunku sorulari tamamladiniz!</h3>
            <p style="color:var(--text-light);">Yarin tekrar gelin.</p>
            <div style="display:flex;justify-content:center;gap:1.5rem;margin:1rem 0;">
                <div><span style="font-size:1.5rem;font-weight:700;color:#ff6b35;">${streak.count}</span><br><span style="font-size:0.8rem;color:var(--text-light);">Seri</span></div>
                <div><span style="font-size:1.5rem;font-weight:700;color:var(--primary-color);">${streak.best}</span><br><span style="font-size:0.8rem;color:var(--text-light);">En Iyi</span></div>
            </div>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
}

function startChallenge() {
    const seed = getTodaySeed();
    const rand = seededRandom(seed);
    const shuffledVocab = seededShuffle(vocabData, rand);

    questions = [];
    for (let i = 0; i < QUESTION_COUNT && i < shuffledVocab.length; i++) {
        const word = shuffledVocab[i];
        const wrongs = seededShuffle(vocabData.filter(w => w.id !== word.id), rand).slice(0, 3);
        const options = seededShuffle([word, ...wrongs], rand);
        questions.push({
            word,
            question: `"${word.meaning}" kelimesinin Ingilizcesi?`,
            options: options.map(o => ({ id: o.id, text: o.word })),
            correctId: word.id
        });
    }

    currentIdx = 0;
    score = 0;
    renderChallengeQuestion();
}

function renderChallengeQuestion() {
    const area = document.getElementById('dc-area');

    if (currentIdx >= questions.length) {
        finishChallenge();
        return;
    }

    const q = questions[currentIdx];
    area.innerHTML = `
        <div class="challenge-question-card">
            <p style="color:var(--text-light);">Soru ${currentIdx + 1}/${questions.length}</p>
            <p class="challenge-question">${q.question}</p>
            <div class="challenge-options">
                ${q.options.map(o => `<button class="challenge-opt-btn" data-id="${o.id}">${o.text}</button>`).join('')}
            </div>
        </div>
    `;

    area.querySelectorAll('.challenge-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            area.querySelectorAll('.challenge-opt-btn').forEach(b => b.disabled = true);
            const chosen = parseInt(btn.dataset.id);
            if (chosen === q.correctId) {
                btn.classList.add('correct');
                score += 20;
                window.audioManager?.playCorrect?.();
            } else {
                btn.classList.add('wrong');
                area.querySelector(`.challenge-opt-btn[data-id="${q.correctId}"]`)?.classList.add('correct');
                window.audioManager?.playWrong?.();
            }
            setTimeout(() => { currentIdx++; renderChallengeQuestion(); }, 1000);
        });
    });
}

function finishChallenge() {
    checkAndUpdateStreak();
    window.progressManager?.addXP?.(score);
    saveToLeaderboard(STORAGE_KEY, { score, date: new Date().toDateString() });

    const streak = getStreak();
    const area = document.getElementById('dc-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Gunluk Meydan Okuma Tamamlandi!</h3>
            <p style="font-size:2rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} / ${questions.length * 20}</p>
            <p style="color:#ff6b35;font-weight:700;font-size:1.1rem;">🔥 ${streak.count} gunluk seri!</p>
            <p style="color:var(--text-light);font-size:0.85rem;">Yarin tekrar gelin!</p>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
}
