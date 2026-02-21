// Prefixes & Suffixes Module — On/Son Ek Tablo + Drill
import { fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';

const PREFIXES = [
    { affix: 'un-', meaning: 'degil / olumsuz', examples: ['unhappy', 'unfair', 'unlikely', 'unable', 'unclear'] },
    { affix: 're-', meaning: 'tekrar', examples: ['rewrite', 'rebuild', 'restart', 'replay', 'reopen'] },
    { affix: 'pre-', meaning: 'oncesi', examples: ['preview', 'prepay', 'preschool', 'prevent', 'predict'] },
    { affix: 'mis-', meaning: 'yanlis', examples: ['mistake', 'misunderstand', 'mislead', 'misuse', 'misbehave'] },
    { affix: 'dis-', meaning: 'olumsuz / karsi', examples: ['disagree', 'disappear', 'dislike', 'disconnect', 'discover'] },
    { affix: 'over-', meaning: 'asiri / fazla', examples: ['overcook', 'overwork', 'overcome', 'overlook', 'overflow'] },
    { affix: 'im-/in-', meaning: 'degil', examples: ['impossible', 'invisible', 'incomplete', 'incorrect', 'informal'] },
    { affix: 'inter-', meaning: 'arasi', examples: ['international', 'internet', 'interact', 'interview', 'interrupt'] }
];

const SUFFIXES = [
    { affix: '-ful', meaning: 'dolu / -li', examples: ['beautiful', 'careful', 'helpful', 'powerful', 'wonderful'] },
    { affix: '-less', meaning: '-siz', examples: ['homeless', 'careless', 'useless', 'helpless', 'hopeless'] },
    { affix: '-ness', meaning: 'durum / hal', examples: ['happiness', 'sadness', 'darkness', 'kindness', 'weakness'] },
    { affix: '-ment', meaning: 'islem / sonuc', examples: ['movement', 'agreement', 'development', 'payment', 'treatment'] },
    { affix: '-tion/-sion', meaning: 'islem', examples: ['education', 'information', 'decision', 'discussion', 'celebration'] },
    { affix: '-able/-ible', meaning: 'yapilabilir', examples: ['comfortable', 'possible', 'readable', 'flexible', 'visible'] },
    { affix: '-ly', meaning: 'zarflik eki', examples: ['quickly', 'slowly', 'carefully', 'happily', 'suddenly'] },
    { affix: '-er/-or', meaning: 'yapan kisi', examples: ['teacher', 'player', 'actor', 'worker', 'visitor'] }
];

let quizIndex = 0;
let quizScore = 0;
let quizQuestions = [];

export function cleanupPrefixesSuffixes() { /* no timers */ }

export function initPrefixesSuffixes() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <div style="max-width:750px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                <button id="ps-back" class="btn secondary">&#10094; Geri</button>
                <h2 style="margin:0;">Ekler (Prefix & Suffix)</h2>
                <span></span>
            </div>
            <div style="display:flex;gap:0.5rem;margin-bottom:1rem;">
                <button id="ps-browse" class="btn">Tablo</button>
                <button id="ps-drill" class="btn secondary">Alistirma</button>
            </div>
            <div id="ps-area"></div>
        </div>
    `;
    document.getElementById('ps-back').addEventListener('click', () => { window.location.hash = 'dashboard'; });
    document.getElementById('ps-browse').addEventListener('click', renderTable);
    document.getElementById('ps-drill').addEventListener('click', startDrill);
    renderTable();
}

function renderTable() {
    const area = document.getElementById('ps-area');
    area.innerHTML = `
        <h3 style="margin-bottom:0.75rem;color:var(--primary-color);">On Ekler (Prefixes)</h3>
        ${renderAffixTable(PREFIXES)}
        <h3 style="margin:1.5rem 0 0.75rem;color:var(--secondary-color);">Son Ekler (Suffixes)</h3>
        ${renderAffixTable(SUFFIXES)}
    `;
}

function renderAffixTable(data) {
    return data.map(a => `
        <div style="background:var(--card-bg);border-radius:var(--border-radius);padding:1rem;box-shadow:var(--shadow);margin-bottom:0.5rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                <strong style="font-size:1.1rem;color:var(--primary-color);">${a.affix}</strong>
                <span style="color:var(--text-light);font-size:0.85rem;">${a.meaning}</span>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:0.3rem;">
                ${a.examples.map(e => `<span class="tag">${e}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function startDrill() {
    quizIndex = 0;
    quizScore = 0;
    quizQuestions = [];

    const allAffixes = [...PREFIXES.map(p => ({ ...p, type: 'prefix' })), ...SUFFIXES.map(s => ({ ...s, type: 'suffix' }))];

    for (let i = 0; i < 10; i++) {
        const affix = allAffixes[Math.floor(Math.random() * allAffixes.length)];
        const word = affix.examples[Math.floor(Math.random() * affix.examples.length)];
        const wrongs = fisherYatesShuffle(allAffixes.filter(a => a.affix !== affix.affix)).slice(0, 3);
        quizQuestions.push({
            word,
            correctAffix: affix.affix,
            correctMeaning: affix.meaning,
            options: fisherYatesShuffle([affix, ...wrongs].map(a => ({ affix: a.affix, meaning: a.meaning })))
        });
    }

    renderDrillQuestion();
}

function renderDrillQuestion() {
    const area = document.getElementById('ps-area');
    if (quizIndex >= quizQuestions.length) {
        window.progressManager?.addXP?.(quizScore);
        area.innerHTML = `
            <div class="challenge-result" style="text-align:center;">
                <h3>Alistirma Tamamlandi!</h3>
                <p style="font-size:1.5rem;font-weight:700;color:var(--primary-color);margin:1rem 0;">${quizScore} / ${quizQuestions.length * 10}</p>
                <button id="ps-retry" class="btn" style="margin-top:1rem;">Tekrar</button>
            </div>
        `;
        document.getElementById('ps-retry').addEventListener('click', startDrill);
        return;
    }

    const q = quizQuestions[quizIndex];
    area.innerHTML = `
        <div class="challenge-question-card">
            <p style="color:var(--text-light);">Soru ${quizIndex + 1}/${quizQuestions.length}</p>
            <p class="challenge-question">"<strong>${q.word}</strong>" kelimesindeki ek hangisi?</p>
            <div class="challenge-options">
                ${q.options.map(o => `
                    <button class="challenge-opt-btn" data-val="${o.affix}">
                        ${o.affix} <span style="font-size:0.8rem;opacity:0.7;">(${o.meaning})</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    area.querySelectorAll('.challenge-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            area.querySelectorAll('.challenge-opt-btn').forEach(b => b.disabled = true);
            if (btn.dataset.val === q.correctAffix) {
                btn.classList.add('correct');
                quizScore += 10;
                window.audioManager?.playCorrect?.();
            } else {
                btn.classList.add('wrong');
                area.querySelector(`.challenge-opt-btn[data-val="${q.correctAffix}"]`)?.classList.add('correct');
                window.audioManager?.playWrong?.();
            }
            setTimeout(() => { quizIndex++; renderDrillQuestion(); }, 1000);
        });
    });
}
