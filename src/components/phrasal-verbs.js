/**
 * Phrasal Verbs Module — Browse, Matching Game, Fill-in-the-Blank
 * 50 common phrasal verbs with CEFR levels, Turkish meanings, example sentences
 * XP rewards: 10 XP per correct answer
 */

import { getCEFRBadgeHTML, fisherYatesShuffle, attachEnglishValidation } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Phrasal Verbs Data (50 items) ─────────────────────────────────────────────
const phrasalVerbsData = [
    // A1 — Very common, everyday phrasal verbs (12)
    { id: 1,  verb: "get up",      meaning: "kalkmak, uyanmak",          example: "I get up at seven o'clock every morning.",                    level: "A1" },
    { id: 2,  verb: "sit down",    meaning: "oturmak",                   example: "Please sit down and make yourself comfortable.",              level: "A1" },
    { id: 3,  verb: "come in",     meaning: "iceri girmek",              example: "Come in, the door is open.",                                 level: "A1" },
    { id: 4,  verb: "go out",      meaning: "disari cikmak",             example: "We go out every Friday evening.",                            level: "A1" },
    { id: 5,  verb: "turn on",     meaning: "acmak (cihaz)",             example: "Can you turn on the light, please?",                         level: "A1" },
    { id: 6,  verb: "turn off",    meaning: "kapatmak (cihaz)",          example: "Please turn off your phone during the lesson.",               level: "A1" },
    { id: 7,  verb: "put on",      meaning: "giymek",                    example: "Put on your jacket, it is cold outside.",                    level: "A1" },
    { id: 8,  verb: "take off",    meaning: "cikarmak (giysi)",          example: "Take off your shoes before you enter the house.",             level: "A1" },
    { id: 9,  verb: "come back",   meaning: "geri donmek",               example: "She will come back from holiday next week.",                  level: "A1" },
    { id: 10, verb: "go back",     meaning: "geri gitmek",               example: "I want to go back to my hometown someday.",                  level: "A1" },
    { id: 11, verb: "look at",     meaning: "bakmak",                    example: "Look at this beautiful painting on the wall.",                level: "A1" },
    { id: 12, verb: "get out",     meaning: "disari cikmak, inmek",      example: "Get out of the car slowly and carefully.",                    level: "A1" },

    // A2 — Common phrasal verbs with slightly more nuance (13)
    { id: 13, verb: "give up",     meaning: "vazgecmek, birakmak",       example: "Never give up on your dreams.",                               level: "A2" },
    { id: 14, verb: "look for",    meaning: "aramak",                    example: "I am looking for my keys everywhere.",                        level: "A2" },
    { id: 15, verb: "pick up",     meaning: "almak, yerden kaldirmak",   example: "Can you pick up the children from school today?",              level: "A2" },
    { id: 16, verb: "put down",    meaning: "yere koymak, birakmak",     example: "Put down your bag and relax for a while.",                    level: "A2" },
    { id: 17, verb: "find out",    meaning: "ogrenmek, kesfetmek",       example: "I need to find out what time the train leaves.",               level: "A2" },
    { id: 18, verb: "go on",       meaning: "devam etmek",               example: "Please go on, I am listening to you.",                        level: "A2" },
    { id: 19, verb: "carry on",    meaning: "devam etmek, surdurmek",    example: "Carry on with your work, do not stop now.",                   level: "A2" },
    { id: 20, verb: "wake up",     meaning: "uyanmak",                   example: "I usually wake up before the alarm rings.",                   level: "A2" },
    { id: 21, verb: "stand up",    meaning: "ayaga kalkmak",             example: "Please stand up when the teacher enters the room.",            level: "A2" },
    { id: 22, verb: "try on",      meaning: "denemek (giysi)",           example: "Can I try on this dress in a different size?",                level: "A2" },
    { id: 23, verb: "throw away",  meaning: "atmak, cop atmak",          example: "Do not throw away those old books, donate them.",              level: "A2" },
    { id: 24, verb: "fill in",     meaning: "doldurmak (form)",          example: "Please fill in this form with your personal details.",         level: "A2" },
    { id: 25, verb: "wash up",     meaning: "bulasik yikamak",           example: "I always wash up after dinner.",                              level: "A2" },

    // B1 — Intermediate phrasal verbs (13)
    { id: 26, verb: "set up",      meaning: "kurmak, hazirlamak",        example: "They set up a new company last year.",                        level: "B1" },
    { id: 27, verb: "break down",  meaning: "bozulmak, arizalanmak",     example: "Our car broke down on the highway yesterday.",                level: "B1" },
    { id: 28, verb: "run out of",  meaning: "bitmek, tukenmek",          example: "We have run out of milk, can you buy some?",                  level: "B1" },
    { id: 29, verb: "look after",  meaning: "bakmak, ilgilenmek",        example: "She looks after her elderly parents every weekend.",           level: "B1" },
    { id: 30, verb: "give back",   meaning: "geri vermek, iade etmek",   example: "Please give back the book when you finish reading it.",       level: "B1" },
    { id: 31, verb: "take up",     meaning: "baslamak (hobi, is)",       example: "He took up painting during the lockdown.",                    level: "B1" },
    { id: 32, verb: "cut down on", meaning: "azaltmak",                  example: "You should cut down on sugar for better health.",              level: "B1" },
    { id: 33, verb: "come up with",meaning: "bulmak, icat etmek (fikir)",example: "She came up with a brilliant idea for the project.",          level: "B1" },
    { id: 34, verb: "look forward to", meaning: "dort gozle beklemek",   example: "I am looking forward to the summer holiday.",                 level: "B1" },
    { id: 35, verb: "get along with",  meaning: "iyi gecinmek",          example: "She gets along with all her colleagues at work.",             level: "B1" },
    { id: 36, verb: "put off",     meaning: "ertelemek",                 example: "Do not put off your homework until the last minute.",          level: "B1" },
    { id: 37, verb: "call off",    meaning: "iptal etmek",               example: "They called off the meeting due to bad weather.",              level: "B1" },
    { id: 38, verb: "work out",    meaning: "egzersiz yapmak / cozmek",  example: "I work out at the gym three times a week.",                   level: "B1" },

    // B2 — Upper-intermediate phrasal verbs (12)
    { id: 39, verb: "bring up",    meaning: "yetistirmek / gundeme getirmek", example: "She was brought up by her grandparents in the village.",  level: "B2" },
    { id: 40, verb: "turn down",   meaning: "reddetmek",                 example: "He turned down the job offer because the salary was too low.",level: "B2" },
    { id: 41, verb: "point out",   meaning: "belirtmek, dikkat cekmek",  example: "She pointed out several errors in the report.",               level: "B2" },
    { id: 42, verb: "figure out",  meaning: "anlamak, cozmek",           example: "I cannot figure out how to solve this math problem.",          level: "B2" },
    { id: 43, verb: "look into",   meaning: "arastirmak, incelemek",     example: "The police are looking into the cause of the accident.",       level: "B2" },
    { id: 44, verb: "come across",  meaning: "rastlamak, karsilastirmak", example: "I came across an old friend at the supermarket yesterday.",   level: "B2" },
    { id: 45, verb: "break into",  meaning: "zorla girmek",              example: "Someone broke into the office and stole two laptops.",         level: "B2" },
    { id: 46, verb: "take over",   meaning: "devralmak",                 example: "The new manager will take over the department next month.",    level: "B2" },
    { id: 47, verb: "hold on",     meaning: "beklemek, tutunmak",        example: "Hold on a moment, I will check the schedule for you.",        level: "B2" },
    { id: 48, verb: "let down",    meaning: "hayal kirikligi yaratmak",  example: "He let his team down by not showing up for the final match.", level: "B2" },
    { id: 49, verb: "make up",     meaning: "uydurmak / barismak",       example: "They had an argument but made up the next day.",              level: "B2" },
    { id: 50, verb: "fall behind",  meaning: "geride kalmak",            example: "If you miss classes, you will fall behind quickly.",           level: "B2" },
];

// ── State ─────────────────────────────────────────────────────────────────────
let activeTab = 'browse';        // browse | matching | fillin
let activeLevel = 'all';         // all | A1 | A2 | B1 | B2
let matchingState = { pairs: [], selected: null, matchedCount: 0, score: 0 };
let fillState = { current: null, questionNum: 0, score: 0, total: 5, usedIds: new Set() };

// ── Main Init ─────────────────────────────────────────────────────────────────
export function initPhrasalVerbs() {
    activeTab = 'browse';
    activeLevel = 'all';
    renderMainUI();
}

function getContainer() {
    return document.getElementById('vocab-content') || document.getElementById('app');
}

// ── Main UI with Tab Navigation ───────────────────────────────────────────────
function renderMainUI() {
    const container = getContainer();

    container.innerHTML = `
        <div class="phrasal-verbs-module">
            <div class="header-row" style="margin-bottom:1rem;">
                <button id="pv-back-btn" class="btn secondary">&#10094; Geri</button>
                <h3>Phrasal Verbs</h3>
                <span></span>
            </div>

            <div class="pv-tab-bar" style="display:flex;gap:0.5rem;margin-bottom:1.25rem;flex-wrap:wrap;">
                <button class="btn ${activeTab === 'browse' ? '' : 'secondary'} small pv-tab-btn" data-tab="browse">
                    Listele
                </button>
                <button class="btn ${activeTab === 'matching' ? '' : 'secondary'} small pv-tab-btn" data-tab="matching">
                    Eslestirme Oyunu
                </button>
                <button class="btn ${activeTab === 'fillin' ? '' : 'secondary'} small pv-tab-btn" data-tab="fillin">
                    Bosluk Doldurma
                </button>
            </div>

            <div id="pv-content-area"></div>
        </div>
    `;

    // Back button
    document.getElementById('pv-back-btn').addEventListener('click', () => {
        const vocabBtn = document.querySelector('[data-target=vocabulary]');
        if (vocabBtn) vocabBtn.click();
    });

    // Tab buttons
    container.querySelectorAll('.pv-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeTab = btn.dataset.tab;
            renderMainUI();
        });
    });

    // Render active tab content
    if (activeTab === 'browse') {
        renderBrowseView();
    } else if (activeTab === 'matching') {
        renderMatchingGame();
    } else if (activeTab === 'fillin') {
        renderFillInTheBlank();
    }
}

// ══════════════════════════════════════════════════════════════════════════════
//  1. BROWSE VIEW — Cards with CEFR filter
// ══════════════════════════════════════════════════════════════════════════════

function renderBrowseView() {
    const area = document.getElementById('pv-content-area');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];

    const filtered = activeLevel === 'all'
        ? phrasalVerbsData
        : phrasalVerbsData.filter(pv => pv.level === activeLevel);

    area.innerHTML = `
        <div class="reading-filters" style="display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap;">
            ${levels.map(l => `
                <button class="btn ${activeLevel === l ? '' : 'secondary'} small pv-level-btn" data-level="${l}">
                    ${l === 'all' ? 'Tumunu Goster' : getCEFRBadgeHTML(l)}
                </button>
            `).join('')}
        </div>
        <div class="pv-filter-info" style="margin-bottom:0.75rem;font-size:0.85rem;color:var(--text-light,#888);">
            ${filtered.length} phrasal verb gosteriliyor (toplam ${phrasalVerbsData.length})
        </div>
        <div class="vocab-results-grid" id="pv-browse-grid">
            ${filtered.map(pv => `
                <div class="vocab-result-card pv-card">
                    <div class="vocab-card-badges">
                        ${getCEFRBadgeHTML(pv.level)}
                    </div>
                    <h3 class="vocab-result-word" style="margin-top:0.5rem;">${pv.verb}</h3>
                    <p class="vocab-result-meaning">${pv.meaning}</p>
                    <p class="card-example" style="font-size:0.8rem;color:var(--text-light,#999);margin-top:0.5rem;font-style:italic;">
                        "${pv.example}"
                    </p>
                </div>
            `).join('')}
        </div>
    `;

    // Level filter buttons
    area.querySelectorAll('.pv-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeLevel = btn.dataset.level;
            renderBrowseView();
        });
    });
}

// ══════════════════════════════════════════════════════════════════════════════
//  2. MATCHING GAME — Phrasal verb <-> Turkish meaning (5 pairs)
// ══════════════════════════════════════════════════════════════════════════════

function renderMatchingGame() {
    matchingState = { pairs: [], selected: null, matchedCount: 0, score: 0 };
    const area = document.getElementById('pv-content-area');

    area.innerHTML = `
        <div class="matching-container">
            <div class="header-row" style="margin-bottom:1rem;">
                <h4>Eslestirme Oyunu</h4>
                <span id="pv-match-score">Eslesen: 0 / 5</span>
            </div>
            <p style="font-size:0.85rem;color:var(--text-light,#888);margin-bottom:1rem;">
                Phrasal verb ile Turkce anlamini eslestirin.
            </p>
            <div class="matching-grid" id="pv-matching-grid"></div>
            <div id="pv-match-message" class="hidden" style="text-align:center;margin-top:1.5rem;">
                <h2>Tebrikler!</h2>
                <p id="pv-match-result-text"></p>
                <button id="pv-match-restart" class="btn" style="margin-top:1rem;">Tekrar Oyna</button>
            </div>
        </div>
    `;

    startMatchingRound();
}

function startMatchingRound() {
    const grid = document.getElementById('pv-matching-grid');
    const message = document.getElementById('pv-match-message');
    if (message) message.classList.add('hidden');

    matchingState = { pairs: [], selected: null, matchedCount: 0, score: 0 };
    updateMatchScore();

    // Pick 5 random phrasal verbs
    const gameVerbs = fisherYatesShuffle([...phrasalVerbsData]).slice(0, 5);
    matchingState.pairs = gameVerbs;

    // Create cards: verb cards + meaning cards
    let cards = [];
    gameVerbs.forEach(pv => {
        cards.push({ id: pv.id, type: 'verb',    content: pv.verb });
        cards.push({ id: pv.id, type: 'meaning', content: pv.meaning });
    });

    fisherYatesShuffle(cards);

    grid.innerHTML = cards.map(card => `
        <div class="match-card pv-match-card" data-id="${card.id}" data-type="${card.type}">
            ${card.content}
        </div>
    `).join('');

    // Attach click handlers
    grid.querySelectorAll('.pv-match-card').forEach(cardEl => {
        cardEl.addEventListener('click', () => handleMatchClick(cardEl));
    });
}

function handleMatchClick(cardEl) {
    // Ignore if already matched or already selected
    if (cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) return;
    // Ignore if 2 cards already selected and waiting
    if (matchingState.selected && matchingState.selected.classList.contains('selected') &&
        document.querySelectorAll('.pv-match-card.selected').length >= 2) return;

    cardEl.classList.add('selected');

    if (!matchingState.selected) {
        // First card selection
        matchingState.selected = cardEl;
    } else {
        // Second card selection — check for match
        const first = matchingState.selected;
        const second = cardEl;
        matchingState.selected = null;

        const isMatch = first.dataset.id === second.dataset.id &&
                        first.dataset.type !== second.dataset.type;

        if (isMatch) {
            first.classList.add('matched');
            second.classList.add('matched');
            first.classList.remove('selected');
            second.classList.remove('selected');
            matchingState.matchedCount++;
            matchingState.score++;
            updateMatchScore();

            // XP reward
            if (window.progressManager) window.progressManager.addXP(10);
            if (window.showXPGain) window.showXPGain(10);
            if (window.audioManager) window.audioManager.playCorrect();

            // Check if game complete
            if (matchingState.matchedCount === 5) {
                setTimeout(() => showMatchComplete(), 500);
            }
        } else {
            // Mismatch
            first.classList.add('mismatch');
            second.classList.add('mismatch');
            if (window.audioManager) window.audioManager.playWrong();

            setTimeout(() => {
                first.classList.remove('selected', 'mismatch');
                second.classList.remove('selected', 'mismatch');
            }, 1000);
        }
    }
}

function updateMatchScore() {
    const el = document.getElementById('pv-match-score');
    if (el) el.textContent = `Eslesen: ${matchingState.matchedCount} / 5`;
}

function showMatchComplete() {
    const message = document.getElementById('pv-match-message');
    const resultText = document.getElementById('pv-match-result-text');
    if (message) message.classList.remove('hidden');
    if (resultText) resultText.textContent = `5 / 5 eslestirme tamamlandi! +${matchingState.score * 10} XP kazandiniz.`;

    showToast('Eslestirme oyunu tamamlandi! Harika!', 'success');

    const restartBtn = document.getElementById('pv-match-restart');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            renderMatchingGame();
        });
    }
}

// ══════════════════════════════════════════════════════════════════════════════
//  3. FILL-IN-THE-BLANK — Type the phrasal verb
// ══════════════════════════════════════════════════════════════════════════════

function renderFillInTheBlank() {
    fillState = { current: null, questionNum: 0, score: 0, total: 5, usedIds: new Set() };
    const area = document.getElementById('pv-content-area');

    area.innerHTML = `
        <div class="puzzle-container">
            <div class="header-row" style="margin-bottom:1rem;">
                <h4>Bosluk Doldurma</h4>
                <span>Skor: <span id="pv-fill-score">0</span> | Soru: <span id="pv-fill-qnum">0</span>/${fillState.total}</span>
            </div>
            <p style="font-size:0.85rem;color:var(--text-light,#888);margin-bottom:1rem;">
                Cumledeki bosluga uygun phrasal verb'i yazin.
            </p>
            <div id="pv-fill-area"></div>
        </div>
    `;

    loadNextFillQuestion();
}

function loadNextFillQuestion() {
    // Check if all questions answered
    if (fillState.questionNum >= fillState.total) {
        showFillResult();
        return;
    }

    // Pick a random phrasal verb not yet used
    let pool = phrasalVerbsData.filter(pv => !fillState.usedIds.has(pv.id));
    if (pool.length === 0) {
        fillState.usedIds.clear();
        pool = [...phrasalVerbsData];
    }

    const pv = pool[Math.floor(Math.random() * pool.length)];
    fillState.current = pv;
    fillState.usedIds.add(pv.id);
    fillState.questionNum++;

    // Update question counter
    const qNumEl = document.getElementById('pv-fill-qnum');
    if (qNumEl) qNumEl.textContent = fillState.questionNum;

    // Create blank sentence: replace the phrasal verb with _____
    const blankSentence = createBlankSentence(pv.example, pv.verb);

    const area = document.getElementById('pv-fill-area');
    area.innerHTML = `
        <div class="exercise-card" style="margin-bottom:1rem;">
            <span class="ex-number">Soru ${fillState.questionNum}</span>
            <div style="margin-bottom:0.5rem;">
                ${getCEFRBadgeHTML(pv.level)}
            </div>
            <p class="ex-question" style="font-size:1.1rem;margin:0.75rem 0;">
                ${blankSentence}
            </p>
            <p style="font-size:0.85rem;color:var(--text-light,#888);margin-bottom:0.75rem;">
                Ipucu: <em>${pv.meaning}</em>
            </p>
            <div class="answer-area" style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                <input type="text" id="pv-fill-input" class="ex-input" placeholder="Phrasal verb yazin..." autocomplete="off" style="flex:1;min-width:180px;" />
                <button id="pv-fill-check" class="btn small">Kontrol Et</button>
            </div>
            <p id="pv-fill-feedback" class="ex-feedback" style="margin-top:0.5rem;"></p>
            <button id="pv-fill-next" class="btn hidden" style="margin-top:0.75rem;">Sonraki Soru</button>
        </div>
    `;

    const input = document.getElementById('pv-fill-input');
    const checkBtn = document.getElementById('pv-fill-check');
    const nextBtn = document.getElementById('pv-fill-next');

    // Attach English validation
    attachEnglishValidation(input);

    // Auto focus
    input.focus();

    // Clear placeholder on focus
    input.addEventListener('focus', () => input.setAttribute('placeholder', ''));
    input.addEventListener('blur', () => input.setAttribute('placeholder', 'Phrasal verb yazin...'));

    // Enter key to submit
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkFillAnswer();
    });

    checkBtn.addEventListener('click', checkFillAnswer);
    nextBtn.addEventListener('click', loadNextFillQuestion);
}

function createBlankSentence(sentence, verb) {
    // Case-insensitive replacement of the phrasal verb with blanks
    const escaped = verb.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'i');
    const blank = '_'.repeat(Math.max(verb.length, 5));
    return sentence.replace(regex, `<strong style="letter-spacing:2px;">${blank}</strong>`);
}

function checkFillAnswer() {
    const input = document.getElementById('pv-fill-input');
    const feedback = document.getElementById('pv-fill-feedback');
    const checkBtn = document.getElementById('pv-fill-check');
    const nextBtn = document.getElementById('pv-fill-next');
    const pv = fillState.current;

    if (!input || !pv) return;

    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = pv.verb.toLowerCase();

    if (userAnswer === correctAnswer) {
        // Correct
        feedback.textContent = `Dogru! "${pv.verb}" +10 XP`;
        feedback.className = 'ex-feedback success';
        fillState.score++;

        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
        if (window.audioManager) window.audioManager.playCorrect();

        // Update score display
        const scoreEl = document.getElementById('pv-fill-score');
        if (scoreEl) scoreEl.textContent = fillState.score;

        input.disabled = true;
        checkBtn.disabled = true;
        nextBtn.classList.remove('hidden');
        nextBtn.focus();
    } else {
        // Wrong
        feedback.textContent = `Yanlis. Tekrar deneyin. Ipucu: "${pv.verb.charAt(0)}..." (${pv.verb.split(' ').length} kelime)`;
        feedback.className = 'ex-feedback error';
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);

        if (window.audioManager) window.audioManager.playWrong();
    }
}

function showFillResult() {
    const area = document.getElementById('pv-fill-area');
    const pct = Math.round((fillState.score / fillState.total) * 100);

    // Track activity
    if (window.progressManager) {
        window.progressManager.completeActivity(`phrasal-verbs-fill-${Date.now()}`);
    }

    area.innerHTML = `
        <div class="challenge-result" style="text-align:center;padding:2rem;">
            <div style="font-size:3rem;margin-bottom:1rem;">${pct >= 80 ? '&#127881;' : pct >= 50 ? '&#128170;' : '&#128218;'}</div>
            <h2>Bosluk Doldurma Tamamlandi!</h2>
            <div class="challenge-score-row" style="margin-top:1.5rem;display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;">
                <div class="challenge-stat">Dogru: <span>${fillState.score}</span></div>
                <div class="challenge-stat">Toplam: <span>${fillState.total}</span></div>
                <div class="challenge-stat">Basari: <span>${pct}%</span></div>
            </div>
            <div style="margin-top:1.5rem;display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
                <button id="pv-fill-retry" class="btn">Tekrar Oyna</button>
                <button id="pv-fill-browse" class="btn secondary">Listeye Don</button>
            </div>
        </div>
    `;

    if (pct >= 80) {
        showToast(`Harika! %${pct} basari orani!`, 'success');
    } else if (pct >= 50) {
        showToast(`Iyi is! %${pct} basari orani. Pratik yapmaya devam edin.`, 'info');
    }

    document.getElementById('pv-fill-retry').addEventListener('click', renderFillInTheBlank);
    document.getElementById('pv-fill-browse').addEventListener('click', () => {
        activeTab = 'browse';
        renderMainUI();
    });
}
