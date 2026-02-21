// Collocations Module — make/do/take/get + isim eslestirme
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';

const COLLOCATIONS = {
    make: ['a decision', 'a mistake', 'money', 'friends', 'an effort', 'progress', 'a promise', 'a plan', 'breakfast', 'a phone call', 'noise', 'an appointment', 'a suggestion', 'a difference', 'sure'],
    do: ['homework', 'the dishes', 'exercise', 'a favor', 'business', 'the laundry', 'research', 'damage', 'your best', 'a job', 'housework', 'well', 'harm', 'an experiment', 'nothing'],
    take: ['a photo', 'a break', 'a shower', 'notes', 'medicine', 'a risk', 'a seat', 'a look', 'action', 'care', 'time', 'a walk', 'a chance', 'turns', 'advice'],
    get: ['ready', 'married', 'lost', 'better', 'worse', 'angry', 'tired', 'dressed', 'home', 'a job', 'permission', 'started', 'rid of', 'used to', 'involved']
};

let currentMode = 'browse';
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;

export function cleanupCollocations() { /* no timers */ }

export function initCollocations() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:700px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="col-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Collocations</h2>
                <span></span>
            </div>
            <div style="display:flex;gap:0.5rem;margin-bottom:1rem;">
                <button id="col-browse" class="btn">Gozat</button>
                <button id="col-match" class="btn secondary">Eslestir</button>
                <button id="col-fill" class="btn secondary">Bosluk Doldur</button>
            </div>
            <div id="col-area"></div>
        </div>
    `;
    document.getElementById('col-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    document.getElementById('col-browse').addEventListener('click', renderBrowse);
    document.getElementById('col-match').addEventListener('click', startMatchQuiz);
    document.getElementById('col-fill').addEventListener('click', startFillQuiz);
    renderBrowse();
}

function renderBrowse() {
    const area = document.getElementById('col-area');
    area.innerHTML = Object.entries(COLLOCATIONS).map(([verb, nouns]) => `
        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);margin-bottom:0.75rem;">
            <h3 style="color:var(--primary-color);margin-bottom:0.5rem;text-transform:uppercase;">${verb}</h3>
            <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
                ${nouns.map(n => `<span class="tag">${verb} ${n}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function startMatchQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizQuestions = [];

    const verbs = Object.keys(COLLOCATIONS);
    for (let i = 0; i < 10; i++) {
        const correctVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const nouns = COLLOCATIONS[correctVerb];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        quizQuestions.push({ noun, correctVerb, options: fisherYatesShuffle([...verbs]) });
    }

    renderMatchQuestion();
}

function renderMatchQuestion() {
    const area = document.getElementById('col-area');
    if (quizIndex >= quizQuestions.length) {
        window.progressManager?.addXP?.(quizScore);
        area.innerHTML = `
            <div class="challenge-result" style="text-align:center;">
                <h3>Quiz Tamamlandi!</h3>
                <p style="font-size:1.5rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${quizScore} / ${quizQuestions.length * 10}</p>
                <button id="col-retry" class="btn" style="margin-top:1rem;">Tekrar</button>
            </div>
        `;
        document.getElementById('col-retry').addEventListener('click', startMatchQuiz);
        return;
    }

    const q = quizQuestions[quizIndex];
    area.innerHTML = `
        <div class="challenge-question-card">
            <p style="color:var(--text-light);">Soru ${quizIndex + 1}/${quizQuestions.length}</p>
            <p class="challenge-question">___ ${q.noun}</p>
            <div class="challenge-options">
                ${q.options.map(v => `<button class="challenge-opt-btn" data-val="${v}">${v}</button>`).join('')}
            </div>
        </div>
    `;

    area.querySelectorAll('.challenge-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            area.querySelectorAll('.challenge-opt-btn').forEach(b => b.disabled = true);
            if (btn.dataset.val === q.correctVerb) {
                btn.classList.add('correct');
                quizScore += 10;
                window.audioManager?.playCorrect?.();
            } else {
                btn.classList.add('wrong');
                area.querySelector(`.challenge-opt-btn[data-val="${q.correctVerb}"]`)?.classList.add('correct');
                window.audioManager?.playWrong?.();
            }
            setTimeout(() => { quizIndex++; renderMatchQuestion(); }, 1000);
        });
    });
}

function startFillQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizQuestions = [];

    const verbs = Object.keys(COLLOCATIONS);
    for (let i = 0; i < 8; i++) {
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const nouns = COLLOCATIONS[verb];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        quizQuestions.push({ verb, noun, full: `${verb} ${noun}` });
    }

    renderFillQuestion();
}

function renderFillQuestion() {
    const area = document.getElementById('col-area');
    if (quizIndex >= quizQuestions.length) {
        window.progressManager?.addXP?.(quizScore);
        area.innerHTML = `
            <div class="challenge-result" style="text-align:center;">
                <h3>Tamamlandi!</h3>
                <p style="font-size:1.5rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${quizScore} / ${quizQuestions.length * 10}</p>
                <button id="col-retry2" class="btn" style="margin-top:1rem;">Tekrar</button>
            </div>
        `;
        document.getElementById('col-retry2').addEventListener('click', startFillQuiz);
        return;
    }

    const q = quizQuestions[quizIndex];
    area.innerHTML = `
        <div class="challenge-question-card">
            <p style="color:var(--text-light);">Soru ${quizIndex + 1}/${quizQuestions.length}</p>
            <p class="challenge-question">_____ ${q.noun}</p>
            <p style="font-size:0.85rem;color:var(--text-light);">Dogru fiili yazin (make/do/take/get)</p>
            <div style="display:flex;gap:0.5rem;margin-top:1rem;">
                <input id="col-input" class="ex-input" type="text" placeholder="Fiili yazin..." style="flex:1;" />
                <button id="col-submit" class="btn small">Kontrol</button>
            </div>
            <div id="col-feedback" class="ex-feedback" style="margin-top:0.5rem;"></div>
        </div>
    `;

    const input = document.getElementById('col-input');
    const submitBtn = document.getElementById('col-submit');

    const check = () => {
        const answer = input.value.trim().toLowerCase();
        const feedback = document.getElementById('col-feedback');
        if (answer === q.verb) {
            quizScore += 10;
            feedback.className = 'ex-feedback success';
            feedback.textContent = `Dogru! "${q.full}"`;
            window.audioManager?.playCorrect?.();
        } else {
            feedback.className = 'ex-feedback error';
            feedback.textContent = `Yanlis! Dogru cevap: "${q.verb}"`;
            window.audioManager?.playWrong?.();
        }
        submitBtn.disabled = true;
        input.disabled = true;
        setTimeout(() => { quizIndex++; renderFillQuestion(); }, 1500);
    };

    submitBtn.addEventListener('click', check);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
}
