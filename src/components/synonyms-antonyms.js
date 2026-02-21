// Synonyms & Antonyms Module — Es/Zit Anlamlilar Browse + Quiz
import { vocabData } from '../core/data.js';
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';

const SYNONYM_PAIRS = [
    { word: 'happy', synonyms: ['glad', 'joyful', 'cheerful'], antonyms: ['sad', 'unhappy', 'miserable'] },
    { word: 'big', synonyms: ['large', 'huge', 'enormous'], antonyms: ['small', 'tiny', 'little'] },
    { word: 'fast', synonyms: ['quick', 'rapid', 'swift'], antonyms: ['slow', 'sluggish', 'leisurely'] },
    { word: 'beautiful', synonyms: ['pretty', 'gorgeous', 'attractive'], antonyms: ['ugly', 'hideous', 'unattractive'] },
    { word: 'smart', synonyms: ['clever', 'intelligent', 'bright'], antonyms: ['stupid', 'dull', 'foolish'] },
    { word: 'strong', synonyms: ['powerful', 'mighty', 'sturdy'], antonyms: ['weak', 'feeble', 'frail'] },
    { word: 'old', synonyms: ['ancient', 'elderly', 'aged'], antonyms: ['young', 'new', 'modern'] },
    { word: 'hot', synonyms: ['warm', 'boiling', 'scorching'], antonyms: ['cold', 'cool', 'freezing'] },
    { word: 'easy', synonyms: ['simple', 'effortless', 'straightforward'], antonyms: ['difficult', 'hard', 'challenging'] },
    { word: 'rich', synonyms: ['wealthy', 'affluent', 'prosperous'], antonyms: ['poor', 'needy', 'destitute'] },
    { word: 'brave', synonyms: ['courageous', 'bold', 'fearless'], antonyms: ['cowardly', 'timid', 'fearful'] },
    { word: 'begin', synonyms: ['start', 'commence', 'initiate'], antonyms: ['end', 'finish', 'conclude'] },
    { word: 'love', synonyms: ['adore', 'cherish', 'treasure'], antonyms: ['hate', 'despise', 'loathe'] },
    { word: 'important', synonyms: ['significant', 'crucial', 'vital'], antonyms: ['unimportant', 'trivial', 'insignificant'] },
    { word: 'calm', synonyms: ['peaceful', 'serene', 'tranquil'], antonyms: ['anxious', 'nervous', 'agitated'] },
    { word: 'correct', synonyms: ['right', 'accurate', 'precise'], antonyms: ['wrong', 'incorrect', 'inaccurate'] },
    { word: 'bright', synonyms: ['shiny', 'radiant', 'luminous'], antonyms: ['dark', 'dim', 'gloomy'] },
    { word: 'generous', synonyms: ['kind', 'giving', 'charitable'], antonyms: ['selfish', 'greedy', 'stingy'] },
    { word: 'honest', synonyms: ['truthful', 'sincere', 'genuine'], antonyms: ['dishonest', 'deceitful', 'false'] },
    { word: 'quiet', synonyms: ['silent', 'hushed', 'peaceful'], antonyms: ['loud', 'noisy', 'rowdy'] }
];

let currentMode = 'browse';
let quizIndex = 0;
let quizScore = 0;
let quizQuestions = [];

export function cleanupSynonymsAntonyms() { /* no timers */ }

export function initSynonymsAntonyms() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:700px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="sa-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Es & Zit Anlamlilar</h2>
                <span></span>
            </div>
            <div style="display:flex;gap:0.5rem;margin-bottom:1rem;">
                <button id="sa-browse-btn" class="btn">Gozat</button>
                <button id="sa-quiz-btn" class="btn secondary">Quiz</button>
            </div>
            <div id="sa-area"></div>
        </div>
    `;
    document.getElementById('sa-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    document.getElementById('sa-browse-btn').addEventListener('click', () => { currentMode = 'browse'; renderBrowse(); });
    document.getElementById('sa-quiz-btn').addEventListener('click', () => { currentMode = 'quiz'; startQuiz(); });
    renderBrowse();
}

function renderBrowse() {
    const area = document.getElementById('sa-area');
    area.innerHTML = SYNONYM_PAIRS.map(p => `
        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);margin-bottom:0.75rem;">
            <h3 style="color:var(--primary-color);margin-bottom:0.5rem;font-size:1.2rem;">${p.word}</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;">
                <div style="flex:1;min-width:150px;">
                    <p style="font-weight:600;color:var(--accent-color);font-size:0.85rem;">Es Anlamlilar</p>
                    <div style="display:flex;flex-wrap:wrap;gap:0.3rem;">
                        ${p.synonyms.map(s => `<span class="tag" style="background:rgba(126,211,33,0.15);color:var(--accent-color);border:1px solid var(--accent-color);">${s}</span>`).join('')}
                    </div>
                </div>
                <div style="flex:1;min-width:150px;">
                    <p style="font-weight:600;color:var(--danger-color);font-size:0.85rem;">Zit Anlamlilar</p>
                    <div style="display:flex;flex-wrap:wrap;gap:0.3rem;">
                        ${p.antonyms.map(a => `<span class="tag" style="background:rgba(208,2,27,0.1);color:var(--danger-color);border:1px solid var(--danger-color);">${a}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function startQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizQuestions = fisherYatesShuffle([...SYNONYM_PAIRS]).slice(0, 10).map(p => {
        const isSynonym = Math.random() > 0.5;
        const correctList = isSynonym ? p.synonyms : p.antonyms;
        const wrongList = isSynonym ? p.antonyms : p.synonyms;
        const correct = correctList[Math.floor(Math.random() * correctList.length)];
        const wrongs = fisherYatesShuffle([
            wrongList[0],
            wrongList[1] || wrongList[0],
            SYNONYM_PAIRS[Math.floor(Math.random() * SYNONYM_PAIRS.length)].word
        ]).slice(0, 3);
        return {
            word: p.word,
            type: isSynonym ? 'es anlamlisi' : 'zit anlamlisi',
            correct,
            options: fisherYatesShuffle([correct, ...wrongs])
        };
    });
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const area = document.getElementById('sa-area');
    if (quizIndex >= quizQuestions.length) {
        window.progressManager?.addXP?.(quizScore);
        area.innerHTML = `
            <div class="challenge-result" style="text-align:center;">
                <h3>Quiz Tamamlandi!</h3>
                <p style="font-size:1.5rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${quizScore} / ${quizQuestions.length * 10}</p>
                <p style="color:var(--text-light);">${quizQuestions.length} sorudan ${quizScore / 10} dogru</p>
                <button id="sa-retry" class="btn" style="margin-top:1rem;">Tekrar Dene</button>
            </div>
        `;
        document.getElementById('sa-retry').addEventListener('click', startQuiz);
        return;
    }

    const q = quizQuestions[quizIndex];
    area.innerHTML = `
        <div class="challenge-question-card">
            <p style="color:var(--text-light);">Soru ${quizIndex + 1}/${quizQuestions.length}</p>
            <p class="challenge-question">"<strong>${q.word}</strong>" kelimesinin <strong>${q.type}</strong> hangisi?</p>
            <div class="challenge-options">
                ${q.options.map(o => `<button class="challenge-opt-btn" data-val="${o}">${o}</button>`).join('')}
            </div>
            <div id="sa-qfeedback" class="ex-feedback" style="text-align:center;margin-top:0.75rem;"></div>
        </div>
    `;

    area.querySelectorAll('.challenge-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.dataset.val === q.correct;
            area.querySelectorAll('.challenge-opt-btn').forEach(b => b.disabled = true);
            if (isCorrect) {
                btn.classList.add('correct');
                quizScore += 10;
                window.audioManager?.playCorrect?.();
            } else {
                btn.classList.add('wrong');
                area.querySelector(`.challenge-opt-btn[data-val="${q.correct}"]`)?.classList.add('correct');
                window.audioManager?.playWrong?.();
            }
            setTimeout(() => { quizIndex++; renderQuizQuestion(); }, 1000);
        });
    });
}
