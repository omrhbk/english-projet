// Mini Quiz Module — Karisik Soru Tipleri
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';
import { saveToLeaderboard, renderLeaderboardHTML } from '../core/game-helpers.js';

const STORAGE_KEY = 'mini_quiz_leaderboard';
const QUESTION_COUNT = 10;

let questions = [];
let currentIdx = 0;
let score = 0;
let answers = [];

export function cleanupMiniQuiz() { /* no timers */ }

export function initMiniQuiz() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:650px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="mq-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Mini Quiz</h2>
                <span id="mq-progress" style="font-weight:600;color:var(--text-light);"></span>
            </div>
            <div id="mq-area"></div>
        </div>
    `;
    document.getElementById('mq-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    generateQuiz();
}

function generateQuiz() {
    currentIdx = 0;
    score = 0;
    answers = [];
    questions = [];

    const pool = fisherYatesShuffle([...vocabData]);

    for (let i = 0; i < QUESTION_COUNT && i < pool.length; i++) {
        const word = pool[i];
        const type = i % 3; // Rotate question types

        if (type === 0) {
            // Multiple choice: Turkce → Ingilizce
            const wrongs = fisherYatesShuffle(vocabData.filter(w => w.id !== word.id)).slice(0, 3);
            const options = fisherYatesShuffle([word, ...wrongs]);
            questions.push({
                type: 'multiple',
                question: `"${word.meaning}" kelimesinin Ingilizcesi nedir?`,
                options: options.map(o => o.word),
                correct: word.word
            });
        } else if (type === 1) {
            // True/False
            const isTrueQ = Math.random() > 0.5;
            const shownMeaning = isTrueQ ? word.meaning : vocabData.filter(w => w.id !== word.id)[0].meaning;
            questions.push({
                type: 'truefalse',
                question: `"${word.word}" = "${shownMeaning}" — Dogru mu?`,
                correct: isTrueQ ? 'true' : 'false'
            });
        } else {
            // Fill in the blank
            questions.push({
                type: 'fill',
                question: `"${word.meaning}" kelimesini Ingilizce yazin:`,
                correct: word.word.toLowerCase()
            });
        }
    }

    renderQuestion();
}

function renderQuestion() {
    const area = document.getElementById('mq-area');
    const progressEl = document.getElementById('mq-progress');
    progressEl.textContent = `${currentIdx + 1}/${questions.length}`;

    if (currentIdx >= questions.length) {
        showResults();
        return;
    }

    const q = questions[currentIdx];
    let html = `
        <div class="challenge-question-card">
            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:0.25rem;">
                ${q.type === 'multiple' ? 'Coktan Secmeli' : q.type === 'truefalse' ? 'Dogru / Yanlis' : 'Bosluk Doldurma'}
            </p>
            <p class="challenge-question">${q.question}</p>
    `;

    if (q.type === 'multiple') {
        html += `<div class="challenge-options">
            ${q.options.map(o => `<button class="challenge-opt-btn mq-opt" data-val="${o}">${o}</button>`).join('')}
        </div>`;
    } else if (q.type === 'truefalse') {
        html += `<div class="challenge-options">
            <button class="challenge-opt-btn mq-opt" data-val="true">Dogru ✓</button>
            <button class="challenge-opt-btn mq-opt" data-val="false">Yanlis ✗</button>
        </div>`;
    } else {
        html += `
            <div style="display:flex;gap:0.5rem;margin-top:1rem;">
                <input id="mq-input" class="ex-input" type="text" placeholder="Ingilizce yazin..." style="flex:1;" />
                <button id="mq-submit" class="btn small">Gonder</button>
            </div>
        `;
    }

    html += `<div id="mq-feedback" class="ex-feedback" style="text-align:center;margin-top:0.75rem;"></div></div>`;
    area.innerHTML = html;

    // Event listeners
    area.querySelectorAll('.mq-opt').forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(btn.dataset.val, btn));
    });

    const input = document.getElementById('mq-input');
    const submitBtn = document.getElementById('mq-submit');
    if (submitBtn) {
        const check = () => checkAnswer(input.value.trim().toLowerCase(), null);
        submitBtn.addEventListener('click', check);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
    }
}

function checkAnswer(answer, btnEl) {
    const q = questions[currentIdx];
    const isCorrect = answer === q.correct;
    const feedback = document.getElementById('mq-feedback');

    // Disable all inputs
    document.querySelectorAll('.mq-opt').forEach(b => b.disabled = true);
    const input = document.getElementById('mq-input');
    if (input) input.disabled = true;
    const submitBtn = document.getElementById('mq-submit');
    if (submitBtn) submitBtn.disabled = true;

    if (isCorrect) {
        score += 10;
        feedback.className = 'ex-feedback success';
        feedback.textContent = 'Dogru!';
        if (btnEl) btnEl.classList.add('correct');
        window.audioManager?.playCorrect?.();
    } else {
        feedback.className = 'ex-feedback error';
        feedback.textContent = `Yanlis! Dogru cevap: ${q.correct}`;
        if (btnEl) btnEl.classList.add('wrong');
        if (q.type === 'multiple' || q.type === 'truefalse') {
            document.querySelector(`.mq-opt[data-val="${q.correct}"]`)?.classList.add('correct');
        }
        window.audioManager?.playWrong?.();
    }

    answers.push({ question: q.question, userAnswer: answer, correct: q.correct, isCorrect });
    setTimeout(() => { currentIdx++; renderQuestion(); }, 1200);
}

function showResults() {
    const pct = Math.round((score / (questions.length * 10)) * 100);
    window.progressManager?.addXP?.(Math.min(score, 50));
    saveToLeaderboard(STORAGE_KEY, { score, correct: answers.filter(a => a.isCorrect).length });

    const area = document.getElementById('mq-area');
    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;">
            <h3>Quiz Tamamlandi!</h3>
            <p style="font-size:2rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${score} Puan</p>
            <p style="color:var(--text-light);">%${pct} basari - ${answers.filter(a => a.isCorrect).length}/${questions.length} dogru</p>
            <button id="mq-restart" class="btn" style="margin-top:1rem;">Tekrar Dene</button>
        </div>
        <div style="margin-top:1rem;background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);">
            ${renderLeaderboardHTML(STORAGE_KEY)}
        </div>
    `;
    document.getElementById('mq-restart').addEventListener('click', generateQuiz);
}
