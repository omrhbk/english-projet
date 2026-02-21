/**
 * Verb Conjugation Drill Module — Fiil Cekimleri
 * Tense Table, Fill-in Drill, Tense Identifier
 * 30 fiil (20 regular + 10 irregular), A1-B2 seviyeleri
 * XP: Her dogru cevap +10 XP
 */

import { getCEFRBadgeHTML, fisherYatesShuffle, attachEnglishValidation } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Yardimci: 3. tekil sahis (he/she/it) -s/-es/-ies kurallari ──────────────
function thirdPersonS(base) {
    if (['go', 'do'].includes(base)) return base + 'es';
    if (base.endsWith('ss') || base.endsWith('sh') || base.endsWith('ch') || base.endsWith('x') || base.endsWith('z') || base.endsWith('o')) {
        return base + 'es';
    }
    if (base.endsWith('y') && !['a','e','i','o','u'].includes(base[base.length - 2])) {
        return base.slice(0, -1) + 'ies';
    }
    return base + 's';
}

// ── Yardimci: -ing kurallari ────────────────────────────────────────────────
function ingForm(base) {
    if (base === 'be') return 'being';
    if (base === 'lie') return 'lying';
    if (base === 'die') return 'dying';
    if (base === 'tie') return 'tying';
    if (base.endsWith('ie')) return base.slice(0, -2) + 'ying';
    if (base.endsWith('ee')) return base + 'ing';
    if (base.endsWith('e') && base !== 'be') return base.slice(0, -1) + 'ing';
    // CVC doubling for short verbs
    const vowels = 'aeiou';
    if (base.length >= 2 && base.length <= 4) {
        const last = base[base.length - 1];
        const secondLast = base[base.length - 2];
        if (!vowels.includes(last) && last !== 'w' && last !== 'x' && last !== 'y' && vowels.includes(secondLast)) {
            // Check it's not already doubled or a long vowel pair
            if (base.length >= 3 && vowels.includes(base[base.length - 3])) {
                return base + 'ing'; // e.g. "cook" -> "cooking"
            }
            return base + last + 'ing';
        }
    }
    return base + 'ing';
}

// ── Fiil Veritabani (30 fiil) ───────────────────────────────────────────────
const verbsData = [
    // ─── Regular Verbs (20) ─────────────────────────────────────
    {
        verb: 'play', meaning: 'oynamak', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'play', you: 'play', he: 'plays', we: 'play', they: 'play' },
            pastSimple: 'played',
            presentContinuous: 'playing',
            presentPerfect: 'played',
            future: 'will play'
        }
    },
    {
        verb: 'work', meaning: 'calismak', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'work', you: 'work', he: 'works', we: 'work', they: 'work' },
            pastSimple: 'worked',
            presentContinuous: 'working',
            presentPerfect: 'worked',
            future: 'will work'
        }
    },
    {
        verb: 'study', meaning: 'ders calismak', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'study', you: 'study', he: 'studies', we: 'study', they: 'study' },
            pastSimple: 'studied',
            presentContinuous: 'studying',
            presentPerfect: 'studied',
            future: 'will study'
        }
    },
    {
        verb: 'live', meaning: 'yasamak', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'live', you: 'live', he: 'lives', we: 'live', they: 'live' },
            pastSimple: 'lived',
            presentContinuous: 'living',
            presentPerfect: 'lived',
            future: 'will live'
        }
    },
    {
        verb: 'watch', meaning: 'izlemek', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'watch', you: 'watch', he: 'watches', we: 'watch', they: 'watch' },
            pastSimple: 'watched',
            presentContinuous: 'watching',
            presentPerfect: 'watched',
            future: 'will watch'
        }
    },
    {
        verb: 'cook', meaning: 'yemek yapmak', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'cook', you: 'cook', he: 'cooks', we: 'cook', they: 'cook' },
            pastSimple: 'cooked',
            presentContinuous: 'cooking',
            presentPerfect: 'cooked',
            future: 'will cook'
        }
    },
    {
        verb: 'clean', meaning: 'temizlemek', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'clean', you: 'clean', he: 'cleans', we: 'clean', they: 'clean' },
            pastSimple: 'cleaned',
            presentContinuous: 'cleaning',
            presentPerfect: 'cleaned',
            future: 'will clean'
        }
    },
    {
        verb: 'help', meaning: 'yardim etmek', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'help', you: 'help', he: 'helps', we: 'help', they: 'help' },
            pastSimple: 'helped',
            presentContinuous: 'helping',
            presentPerfect: 'helped',
            future: 'will help'
        }
    },
    {
        verb: 'walk', meaning: 'yurumek', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'walk', you: 'walk', he: 'walks', we: 'walk', they: 'walk' },
            pastSimple: 'walked',
            presentContinuous: 'walking',
            presentPerfect: 'walked',
            future: 'will walk'
        }
    },
    {
        verb: 'talk', meaning: 'konusmak', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'talk', you: 'talk', he: 'talks', we: 'talk', they: 'talk' },
            pastSimple: 'talked',
            presentContinuous: 'talking',
            presentPerfect: 'talked',
            future: 'will talk'
        }
    },
    {
        verb: 'open', meaning: 'acmak', level: 'A2', type: 'regular',
        conjugations: {
            presentSimple: { I: 'open', you: 'open', he: 'opens', we: 'open', they: 'open' },
            pastSimple: 'opened',
            presentContinuous: 'opening',
            presentPerfect: 'opened',
            future: 'will open'
        }
    },
    {
        verb: 'close', meaning: 'kapatmak', level: 'A2', type: 'regular',
        conjugations: {
            presentSimple: { I: 'close', you: 'close', he: 'closes', we: 'close', they: 'close' },
            pastSimple: 'closed',
            presentContinuous: 'closing',
            presentPerfect: 'closed',
            future: 'will close'
        }
    },
    {
        verb: 'start', meaning: 'baslamak', level: 'A2', type: 'regular',
        conjugations: {
            presentSimple: { I: 'start', you: 'start', he: 'starts', we: 'start', they: 'start' },
            pastSimple: 'started',
            presentContinuous: 'starting',
            presentPerfect: 'started',
            future: 'will start'
        }
    },
    {
        verb: 'finish', meaning: 'bitirmek', level: 'A2', type: 'regular',
        conjugations: {
            presentSimple: { I: 'finish', you: 'finish', he: 'finishes', we: 'finish', they: 'finish' },
            pastSimple: 'finished',
            presentContinuous: 'finishing',
            presentPerfect: 'finished',
            future: 'will finish'
        }
    },
    {
        verb: 'need', meaning: 'ihtiyac duymak', level: 'A2', type: 'regular',
        conjugations: {
            presentSimple: { I: 'need', you: 'need', he: 'needs', we: 'need', they: 'need' },
            pastSimple: 'needed',
            presentContinuous: 'needing',
            presentPerfect: 'needed',
            future: 'will need'
        }
    },
    {
        verb: 'want', meaning: 'istemek', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'want', you: 'want', he: 'wants', we: 'want', they: 'want' },
            pastSimple: 'wanted',
            presentContinuous: 'wanting',
            presentPerfect: 'wanted',
            future: 'will want'
        }
    },
    {
        verb: 'like', meaning: 'sevmek, begenmek', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'like', you: 'like', he: 'likes', we: 'like', they: 'like' },
            pastSimple: 'liked',
            presentContinuous: 'liking',
            presentPerfect: 'liked',
            future: 'will like'
        }
    },
    {
        verb: 'love', meaning: 'sevmek, asik olmak', level: 'A1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'love', you: 'love', he: 'loves', we: 'love', they: 'love' },
            pastSimple: 'loved',
            presentContinuous: 'loving',
            presentPerfect: 'loved',
            future: 'will love'
        }
    },
    {
        verb: 'hope', meaning: 'ummak, umit etmek', level: 'B1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'hope', you: 'hope', he: 'hopes', we: 'hope', they: 'hope' },
            pastSimple: 'hoped',
            presentContinuous: 'hoping',
            presentPerfect: 'hoped',
            future: 'will hope'
        }
    },
    {
        verb: 'plan', meaning: 'planlamak', level: 'B1', type: 'regular',
        conjugations: {
            presentSimple: { I: 'plan', you: 'plan', he: 'plans', we: 'plan', they: 'plan' },
            pastSimple: 'planned',
            presentContinuous: 'planning',
            presentPerfect: 'planned',
            future: 'will plan'
        }
    },

    // ─── Irregular Verbs (10) ────────────────────────────────────
    {
        verb: 'be', meaning: 'olmak', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'am', you: 'are', he: 'is', we: 'are', they: 'are' },
            pastSimple: 'was/were',
            presentContinuous: 'being',
            presentPerfect: 'been',
            future: 'will be'
        }
    },
    {
        verb: 'have', meaning: 'sahip olmak', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'have', you: 'have', he: 'has', we: 'have', they: 'have' },
            pastSimple: 'had',
            presentContinuous: 'having',
            presentPerfect: 'had',
            future: 'will have'
        }
    },
    {
        verb: 'do', meaning: 'yapmak', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'do', you: 'do', he: 'does', we: 'do', they: 'do' },
            pastSimple: 'did',
            presentContinuous: 'doing',
            presentPerfect: 'done',
            future: 'will do'
        }
    },
    {
        verb: 'go', meaning: 'gitmek', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'go', you: 'go', he: 'goes', we: 'go', they: 'go' },
            pastSimple: 'went',
            presentContinuous: 'going',
            presentPerfect: 'gone',
            future: 'will go'
        }
    },
    {
        verb: 'get', meaning: 'almak, elde etmek', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'get', you: 'get', he: 'gets', we: 'get', they: 'get' },
            pastSimple: 'got',
            presentContinuous: 'getting',
            presentPerfect: 'got',
            future: 'will get'
        }
    },
    {
        verb: 'make', meaning: 'yapmak, imal etmek', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'make', you: 'make', he: 'makes', we: 'make', they: 'make' },
            pastSimple: 'made',
            presentContinuous: 'making',
            presentPerfect: 'made',
            future: 'will make'
        }
    },
    {
        verb: 'come', meaning: 'gelmek', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'come', you: 'come', he: 'comes', we: 'come', they: 'come' },
            pastSimple: 'came',
            presentContinuous: 'coming',
            presentPerfect: 'come',
            future: 'will come'
        }
    },
    {
        verb: 'see', meaning: 'gormek', level: 'A1', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'see', you: 'see', he: 'sees', we: 'see', they: 'see' },
            pastSimple: 'saw',
            presentContinuous: 'seeing',
            presentPerfect: 'seen',
            future: 'will see'
        }
    },
    {
        verb: 'take', meaning: 'almak', level: 'A2', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'take', you: 'take', he: 'takes', we: 'take', they: 'take' },
            pastSimple: 'took',
            presentContinuous: 'taking',
            presentPerfect: 'taken',
            future: 'will take'
        }
    },
    {
        verb: 'give', meaning: 'vermek', level: 'A2', type: 'irregular',
        conjugations: {
            presentSimple: { I: 'give', you: 'give', he: 'gives', we: 'give', they: 'give' },
            pastSimple: 'gave',
            presentContinuous: 'giving',
            presentPerfect: 'given',
            future: 'will give'
        }
    },
];

// ── Zaman aciklamalari (Turkce) ─────────────────────────────────────────────
const tenseExplanations = {
    presentSimple: {
        name: 'Present Simple',
        turkish: 'Genis Zaman',
        explanation: 'Genel dogrulari, aliskanlik ve rutinleri ifade eder. "Every day, always, usually" gibi zaman zarflariyla kullanilir. Ornek: "She plays tennis every day."'
    },
    pastSimple: {
        name: 'Past Simple',
        turkish: 'Gecmis Zaman',
        explanation: 'Gecmiste bitmis olaylari ifade eder. "Yesterday, last week, ago" gibi zaman zarflariyla kullanilir. Ornek: "I played football yesterday."'
    },
    presentContinuous: {
        name: 'Present Continuous',
        turkish: 'Simdiki Zaman',
        explanation: 'Su anda devam eden eylemleri ifade eder. "Now, right now, at the moment" gibi zaman zarflariyla kullanilir. Ornek: "She is playing tennis now."'
    },
    presentPerfect: {
        name: 'Present Perfect',
        turkish: 'Yakin Gecmis / Deneyim Zamani',
        explanation: 'Gecmiste baslayip simdiyi etkileyen olaylari veya deneyimleri ifade eder. "Already, just, ever, never, yet" gibi zarflarla kullanilir. Ornek: "I have played tennis before."'
    },
    futureSimple: {
        name: 'Future Simple',
        turkish: 'Gelecek Zaman',
        explanation: 'Gelecekte yapilacak eylemleri ifade eder. "Tomorrow, next week, soon" gibi zaman zarflariyla kullanilir. Ornek: "She will play tennis tomorrow."'
    }
};

// ── Fill-in Drill cumle sablonlari ──────────────────────────────────────────
function generateDrillSentences(verb) {
    const c = verb.conjugations;
    const subjects = ['I', 'You', 'He', 'She', 'We', 'They'];
    const sentences = [];

    // Present Simple (he/she)
    sentences.push({
        sentence: `She ___ (${verb.verb}) tennis every weekend.`,
        answer: c.presentSimple.he,
        tense: 'presentSimple',
        verb: verb
    });
    sentences.push({
        sentence: `He ___ (${verb.verb}) very hard at school.`,
        answer: c.presentSimple.he,
        tense: 'presentSimple',
        verb: verb
    });

    // Present Simple (I/they)
    sentences.push({
        sentence: `They ___ (${verb.verb}) at the park every day.`,
        answer: c.presentSimple.they,
        tense: 'presentSimple',
        verb: verb
    });

    // Past Simple
    sentences.push({
        sentence: `I ___ (${verb.verb}) a lot yesterday.`,
        answer: c.pastSimple,
        tense: 'pastSimple',
        verb: verb
    });
    sentences.push({
        sentence: `She ___ (${verb.verb}) last weekend.`,
        answer: c.pastSimple,
        tense: 'pastSimple',
        verb: verb
    });

    // Present Continuous
    sentences.push({
        sentence: `Look! She is ___ (${verb.verb}) right now.`,
        answer: c.presentContinuous,
        tense: 'presentContinuous',
        verb: verb
    });
    sentences.push({
        sentence: `They are ___ (${verb.verb}) at the moment.`,
        answer: c.presentContinuous,
        tense: 'presentContinuous',
        verb: verb
    });

    // Present Perfect
    sentences.push({
        sentence: `I have ___ (${verb.verb}) this before.`,
        answer: c.presentPerfect,
        tense: 'presentPerfect',
        verb: verb
    });
    sentences.push({
        sentence: `She has already ___ (${verb.verb}).`,
        answer: c.presentPerfect,
        tense: 'presentPerfect',
        verb: verb
    });

    // Future Simple
    sentences.push({
        sentence: `He ___ (${verb.verb}) tomorrow.`,
        answer: c.future,
        tense: 'futureSimple',
        verb: verb
    });

    return sentences;
}

// ── Tense Identifier cumleleri ──────────────────────────────────────────────
const tenseIdentifierSentences = [
    // Present Simple
    { sentence: 'She plays tennis every weekend.', tense: 'presentSimple', level: 'A1' },
    { sentence: 'He works at a hospital.', tense: 'presentSimple', level: 'A1' },
    { sentence: 'They study English every day.', tense: 'presentSimple', level: 'A1' },
    { sentence: 'I like reading books.', tense: 'presentSimple', level: 'A1' },
    { sentence: 'We cook dinner together.', tense: 'presentSimple', level: 'A1' },
    { sentence: 'The cat sleeps on the sofa.', tense: 'presentSimple', level: 'A1' },

    // Past Simple
    { sentence: 'I played football yesterday.', tense: 'pastSimple', level: 'A1' },
    { sentence: 'She watched a movie last night.', tense: 'pastSimple', level: 'A1' },
    { sentence: 'They went to the park last weekend.', tense: 'pastSimple', level: 'A2' },
    { sentence: 'He made a cake for his birthday.', tense: 'pastSimple', level: 'A2' },
    { sentence: 'We studied hard for the exam.', tense: 'pastSimple', level: 'A2' },
    { sentence: 'She gave me a beautiful gift.', tense: 'pastSimple', level: 'A2' },

    // Present Continuous
    { sentence: 'She is playing the piano right now.', tense: 'presentContinuous', level: 'A1' },
    { sentence: 'They are watching TV at the moment.', tense: 'presentContinuous', level: 'A1' },
    { sentence: 'I am studying English right now.', tense: 'presentContinuous', level: 'A1' },
    { sentence: 'He is cooking dinner in the kitchen.', tense: 'presentContinuous', level: 'A2' },
    { sentence: 'We are walking to school today.', tense: 'presentContinuous', level: 'A2' },
    { sentence: 'The children are playing in the garden.', tense: 'presentContinuous', level: 'A1' },

    // Present Perfect
    { sentence: 'I have already finished my homework.', tense: 'presentPerfect', level: 'B1' },
    { sentence: 'She has just come home.', tense: 'presentPerfect', level: 'B1' },
    { sentence: 'They have lived here since 2010.', tense: 'presentPerfect', level: 'B1' },
    { sentence: 'He has never seen the ocean.', tense: 'presentPerfect', level: 'B1' },
    { sentence: 'We have taken three exams this week.', tense: 'presentPerfect', level: 'B1' },
    { sentence: 'I have been to London twice.', tense: 'presentPerfect', level: 'B1' },

    // Future Simple
    { sentence: 'She will play tennis tomorrow.', tense: 'futureSimple', level: 'A2' },
    { sentence: 'I will help you with your homework.', tense: 'futureSimple', level: 'A2' },
    { sentence: 'They will go to the cinema next Friday.', tense: 'futureSimple', level: 'A2' },
    { sentence: 'He will start a new job next month.', tense: 'futureSimple', level: 'B1' },
    { sentence: 'We will visit our grandparents this weekend.', tense: 'futureSimple', level: 'A2' },
    { sentence: 'She will give a presentation tomorrow.', tense: 'futureSimple', level: 'B1' },
];

// ── State ───────────────────────────────────────────────────────────────────
let currentTab = 'table';          // 'table' | 'drill' | 'identifier'
let activeLevel = 'all';           // 'all' | 'A1' | 'A2' | 'B1' | 'B2'
let activeType = 'all';            // 'all' | 'regular' | 'irregular'
let tableSortCol = 'verb';
let tableSortAsc = true;
let searchQuery = '';

let drillQueue = [];
let drillIndex = 0;
let drillScore = 0;
let drillTotal = 0;

let idQueue = [];
let idIndex = 0;
let idScore = 0;
let idTotal = 0;

const DRILL_BATCH = 10;
const STORAGE_KEY = 'vc_stats';

// ── Persistent Stats ────────────────────────────────────────────────────────
function loadStats() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveStats(stats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}
function recordAnswer(verbName, correct) {
    const stats = loadStats();
    if (!stats[verbName]) stats[verbName] = { correct: 0, wrong: 0 };
    correct ? stats[verbName].correct++ : stats[verbName].wrong++;
    saveStats(stats);
}
function getVerbAccuracy(verbName) {
    const stats = loadStats();
    const s = stats[verbName];
    if (!s || (s.correct + s.wrong === 0)) return null;
    return Math.round((s.correct / (s.correct + s.wrong)) * 100);
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function getFilteredVerbs() {
    let list = [...verbsData];
    if (activeLevel !== 'all') list = list.filter(v => v.level === activeLevel);
    if (activeType !== 'all') list = list.filter(v => v.type === activeType);
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(v =>
            v.verb.toLowerCase().includes(q) ||
            v.meaning.toLowerCase().includes(q)
        );
    }
    return list;
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function normalizeAnswer(str) {
    return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

function checkAnswer(userInput, correctAnswer) {
    const input = normalizeAnswer(userInput);
    const correct = normalizeAnswer(correctAnswer);
    if (input === correct) return true;
    if (correct.includes('/')) {
        const variants = correct.split('/').map(s => s.trim().toLowerCase());
        return variants.includes(input);
    }
    return false;
}

// ══════════════════════════════════════════════════════════════════════════════
//  MAIN ENTRY
// ══════════════════════════════════════════════════════════════════════════════
export function initVerbConjugation() {
    currentTab = 'table';
    activeLevel = 'all';
    activeType = 'all';
    searchQuery = '';
    renderShell();
}

function renderShell() {
    const container = document.getElementById('app');
    if (!container) return;

    container.innerHTML = `
        <div class="vc-module">
            <div class="vc-header">
                <h3 class="vc-title">Verb Conjugation - Fiil Cekimleri</h3>
                <div class="vc-nav">
                    <button class="btn ${currentTab === 'table' ? '' : 'secondary'} small vc-nav-btn" data-tab="table">
                        Zaman Tablosu
                    </button>
                    <button class="btn ${currentTab === 'drill' ? '' : 'secondary'} small vc-nav-btn" data-tab="drill">
                        Bosluk Doldurma
                    </button>
                    <button class="btn ${currentTab === 'identifier' ? '' : 'secondary'} small vc-nav-btn" data-tab="identifier">
                        Zaman Tanima
                    </button>
                </div>
            </div>
            <div id="vc-content-area"></div>
        </div>
    `;

    injectStyles();

    container.querySelectorAll('.vc-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentTab = btn.dataset.tab;
            renderShell();
        });
    });

    switch (currentTab) {
        case 'table':      renderTenseTable(); break;
        case 'drill':      renderDrillSetup(); break;
        case 'identifier': renderIdentifierSetup(); break;
    }
}

// ══════════════════════════════════════════════════════════════════════════════
//  1. TENSE TABLE
// ══════════════════════════════════════════════════════════════════════════════
function renderTenseTable() {
    const area = document.getElementById('vc-content-area');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
    const types = ['all', 'regular', 'irregular'];
    const typeLabels = { all: 'Tumu', regular: 'Duzenli', irregular: 'Duzensiz' };

    area.innerHTML = `
        <div class="vc-table-controls">
            <input type="text" id="vc-search" class="search-input" placeholder="Fiil veya anlam ara..." value="${escapeHTML(searchQuery)}" autocomplete="off" />
            <div class="vc-filter-row">
                <div class="vc-level-filters">
                    ${levels.map(l => `
                        <button class="btn ${activeLevel === l ? '' : 'secondary'} small vc-level-btn" data-level="${l}">
                            ${l === 'all' ? 'Tumu' : getCEFRBadgeHTML(l)}
                        </button>
                    `).join('')}
                </div>
                <div class="vc-type-filters">
                    ${types.map(t => `
                        <button class="btn ${activeType === t ? '' : 'secondary'} small vc-type-btn" data-type="${t}">
                            ${typeLabels[t]}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="vc-filter-info" id="vc-filter-info"></div>
        </div>

        <!-- Zaman Aciklamalari -->
        <div class="vc-tense-tips">
            ${Object.entries(tenseExplanations).map(([key, t]) => `
                <div class="vc-tip-card" data-tense="${key}">
                    <div class="vc-tip-header">
                        <strong>${t.name}</strong>
                        <span class="vc-tip-turkish">(${t.turkish})</span>
                        <button class="vc-tip-toggle" data-target="vc-tip-body-${key}">?</button>
                    </div>
                    <div class="vc-tip-body" id="vc-tip-body-${key}" style="display:none;">
                        <p>${t.explanation}</p>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="vc-table-wrapper">
            <table class="vc-table" id="vc-table">
                <thead>
                    <tr>
                        <th class="vc-sortable" data-col="verb">Fiil <span class="vc-sort-icon">${getSortIcon('verb')}</span></th>
                        <th>Anlam</th>
                        <th class="vc-sortable" data-col="presentSimple">Present Simple (he/she) <span class="vc-sort-icon">${getSortIcon('presentSimple')}</span></th>
                        <th class="vc-sortable" data-col="pastSimple">Past Simple <span class="vc-sort-icon">${getSortIcon('pastSimple')}</span></th>
                        <th>Present Cont.</th>
                        <th>Present Perfect</th>
                        <th class="vc-sortable" data-col="level">Seviye <span class="vc-sort-icon">${getSortIcon('level')}</span></th>
                        <th>Tur</th>
                    </tr>
                </thead>
                <tbody id="vc-tbody"></tbody>
            </table>
        </div>
    `;

    renderTableRows();

    // Search
    const searchInput = document.getElementById('vc-search');
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
        renderTableRows();
    });

    // Level filter
    area.querySelectorAll('.vc-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeLevel = btn.dataset.level;
            renderTenseTable();
        });
    });

    // Type filter
    area.querySelectorAll('.vc-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeType = btn.dataset.type;
            renderTenseTable();
        });
    });

    // Sort headers
    area.querySelectorAll('.vc-sortable').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.dataset.col;
            if (tableSortCol === col) {
                tableSortAsc = !tableSortAsc;
            } else {
                tableSortCol = col;
                tableSortAsc = true;
            }
            renderTenseTable();
        });
    });

    // Tip toggles
    area.querySelectorAll('.vc-tip-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = document.getElementById(btn.dataset.target);
            if (target) {
                const isOpen = target.style.display !== 'none';
                target.style.display = isOpen ? 'none' : 'block';
                btn.textContent = isOpen ? '?' : 'x';
            }
        });
    });
}

function getSortIcon(col) {
    if (tableSortCol !== col) return '';
    return tableSortAsc ? ' ^' : ' v';
}

function renderTableRows() {
    const tbody = document.getElementById('vc-tbody');
    const info = document.getElementById('vc-filter-info');
    let verbs = getFilteredVerbs();

    // Sort
    const levelOrder = { A1: 1, A2: 2, B1: 3, B2: 4 };
    verbs.sort((a, b) => {
        let va, vb;
        if (tableSortCol === 'level') {
            va = levelOrder[a.level] || 99;
            vb = levelOrder[b.level] || 99;
        } else if (tableSortCol === 'presentSimple') {
            va = a.conjugations.presentSimple.he.toLowerCase();
            vb = b.conjugations.presentSimple.he.toLowerCase();
        } else if (tableSortCol === 'pastSimple') {
            va = a.conjugations.pastSimple.toLowerCase();
            vb = b.conjugations.pastSimple.toLowerCase();
        } else {
            va = a[tableSortCol]?.toLowerCase?.() || '';
            vb = b[tableSortCol]?.toLowerCase?.() || '';
        }
        if (va < vb) return tableSortAsc ? -1 : 1;
        if (va > vb) return tableSortAsc ? 1 : -1;
        return 0;
    });

    if (info) {
        info.textContent = verbs.length < verbsData.length
            ? `${verbs.length} fiil gosteriliyor (toplam ${verbsData.length})`
            : `${verbsData.length} fiil`;
    }

    if (verbs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--text-light);">Sonuc bulunamadi.</td></tr>';
        return;
    }

    tbody.innerHTML = verbs.map(v => {
        const typeBadge = v.type === 'irregular'
            ? '<span class="vc-type-badge vc-type-irregular">Duzensiz</span>'
            : '<span class="vc-type-badge vc-type-regular">Duzenli</span>';

        return `
            <tr>
                <td class="vc-cell-verb"><strong>${escapeHTML(v.verb)}</strong></td>
                <td class="vc-cell-meaning">${escapeHTML(v.meaning)}</td>
                <td>${escapeHTML(v.conjugations.presentSimple.he)}</td>
                <td>${escapeHTML(v.conjugations.pastSimple)}</td>
                <td>${escapeHTML(v.conjugations.presentContinuous)}</td>
                <td>${escapeHTML(v.conjugations.presentPerfect)}</td>
                <td>${getCEFRBadgeHTML(v.level)}</td>
                <td>${typeBadge}</td>
            </tr>
        `;
    }).join('');
}

// ══════════════════════════════════════════════════════════════════════════════
//  2. FILL-IN DRILL
// ══════════════════════════════════════════════════════════════════════════════
function renderDrillSetup() {
    const area = document.getElementById('vc-content-area');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];

    area.innerHTML = `
        <div class="vc-drill-setup">
            <h4>Bosluk Doldurma - Fill-in Drill</h4>
            <p class="vc-drill-desc">Cumledeki bosluga fiili dogru zaman cekimiyle yazin. Her dogru cevap <strong>+10 XP</strong> kazandirir.</p>
            <div class="vc-level-filters" style="margin:1rem 0;justify-content:center;">
                ${levels.map(l => `
                    <button class="btn ${activeLevel === l ? '' : 'secondary'} small vc-drill-level-btn" data-level="${l}">
                        ${l === 'all' ? 'Tumu' : getCEFRBadgeHTML(l)}
                    </button>
                `).join('')}
            </div>
            <div class="vc-drill-batch-info" id="vc-drill-batch-info"></div>
            <button class="btn vc-start-btn" id="vc-start-drill">Baslat (${DRILL_BATCH} soru)</button>
        </div>
    `;

    updateDrillBatchInfo();

    area.querySelectorAll('.vc-drill-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeLevel = btn.dataset.level;
            area.querySelectorAll('.vc-drill-level-btn').forEach(b => {
                if (b.dataset.level === activeLevel) {
                    b.classList.remove('secondary');
                } else {
                    b.classList.add('secondary');
                }
            });
            updateDrillBatchInfo();
        });
    });

    document.getElementById('vc-start-drill').addEventListener('click', () => {
        const pool = getFilteredVerbs();
        if (pool.length === 0) {
            showToast('Bu seviyede fiil bulunamadi.', 'warning');
            return;
        }

        // Generate sentences from filtered verbs
        let allSentences = [];
        pool.forEach(v => {
            allSentences = allSentences.concat(generateDrillSentences(v));
        });

        drillQueue = fisherYatesShuffle([...allSentences]).slice(0, DRILL_BATCH);
        drillIndex = 0;
        drillScore = 0;
        drillTotal = drillQueue.length;
        renderDrillQuestion();
    });
}

function updateDrillBatchInfo() {
    const info = document.getElementById('vc-drill-batch-info');
    if (!info) return;
    const pool = getFilteredVerbs();
    info.textContent = `${pool.length} fiil mevcut — ${Math.min(DRILL_BATCH, pool.length * 10)} soru havuzu.`;
}

function renderDrillQuestion() {
    const area = document.getElementById('vc-content-area');
    const item = drillQueue[drillIndex];
    if (!item) { showDrillResults(); return; }

    const progress = `${drillIndex + 1} / ${drillTotal}`;
    const tenseInfo = tenseExplanations[item.tense] || tenseExplanations.presentSimple;

    area.innerHTML = `
        <div class="vc-drill-card">
            <div class="vc-drill-progress">
                <span>${progress}</span>
                <span class="vc-drill-score-inline">Dogru: ${drillScore}</span>
            </div>
            <div class="vc-drill-tense-info">
                <span class="vc-tense-label">${tenseInfo.name}</span>
                <span class="vc-tense-turkish">(${tenseInfo.turkish})</span>
            </div>
            <div class="vc-drill-prompt">
                ${getCEFRBadgeHTML(item.verb.level)}
                <span class="vc-type-badge ${item.verb.type === 'irregular' ? 'vc-type-irregular' : 'vc-type-regular'}">${item.verb.type === 'irregular' ? 'Duzensiz' : 'Duzenli'}</span>
            </div>
            <p class="vc-drill-sentence">${escapeHTML(item.sentence)}</p>
            <p class="vc-drill-hint">Anlam: <em>${escapeHTML(item.verb.meaning)}</em></p>
            <div class="vc-drill-inputs">
                <div class="vc-input-group">
                    <label>Cevabiniz:</label>
                    <input type="text" id="vc-drill-input" class="vc-drill-input" placeholder="Fiili dogru sekilde yazin..." autocomplete="off" />
                </div>
            </div>
            <div class="vc-drill-actions">
                <button class="btn" id="vc-check-btn">Kontrol Et</button>
                <button class="btn secondary" id="vc-skip-btn">Atla</button>
            </div>
            <div id="vc-drill-feedback" class="vc-drill-feedback"></div>
        </div>
    `;

    const input = document.getElementById('vc-drill-input');
    attachEnglishValidation(input);
    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.getElementById('vc-check-btn').click();
    });

    document.getElementById('vc-check-btn').addEventListener('click', () => {
        handleDrillCheck(item);
    });

    document.getElementById('vc-skip-btn').addEventListener('click', () => {
        showDrillSkip(item);
    });
}

function handleDrillCheck(item) {
    const input = document.getElementById('vc-drill-input');
    const feedback = document.getElementById('vc-drill-feedback');
    const checkBtn = document.getElementById('vc-check-btn');
    const skipBtn = document.getElementById('vc-skip-btn');

    const correct = checkAnswer(input.value, item.answer);

    input.classList.add(correct ? 'vc-input-correct' : 'vc-input-wrong');
    input.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;

    if (correct) {
        drillScore++;
        recordAnswer(item.verb.verb, true);
        feedback.innerHTML = `<span class="vc-fb-correct">Dogru! "${escapeHTML(item.answer)}" +10 XP</span>`;
        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
    } else {
        recordAnswer(item.verb.verb, false);
        feedback.innerHTML = `
            <span class="vc-fb-wrong">Yanlis!</span>
            <span class="vc-fb-answer">Dogru cevap: <strong>${escapeHTML(item.answer)}</strong></span>
        `;
        if (window.audioManager) window.audioManager.playWrong();
    }

    setTimeout(() => {
        drillIndex++;
        renderDrillQuestion();
    }, correct ? 1200 : 2500);
}

function showDrillSkip(item) {
    const feedback = document.getElementById('vc-drill-feedback');
    const checkBtn = document.getElementById('vc-check-btn');
    const skipBtn = document.getElementById('vc-skip-btn');
    const input = document.getElementById('vc-drill-input');

    input.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;

    recordAnswer(item.verb.verb, false);
    feedback.innerHTML = `
        <span class="vc-fb-skip">Atlandi.</span>
        <span class="vc-fb-answer">Cevap: <strong>${escapeHTML(item.answer)}</strong></span>
    `;
    if (window.audioManager) window.audioManager.playWrong();

    setTimeout(() => {
        drillIndex++;
        renderDrillQuestion();
    }, 2000);
}

function showDrillResults() {
    const area = document.getElementById('vc-content-area');
    const pct = drillTotal > 0 ? Math.round((drillScore / drillTotal) * 100) : 0;
    const xpEarned = drillScore * 10;

    let emoji = '';
    let message = '';
    if (pct === 100) { emoji = '&#127942;'; message = 'Mukemmel! Hepsini bildin!'; }
    else if (pct >= 80) { emoji = '&#127775;'; message = 'Harika! Neredeyse hepsini bildin!'; }
    else if (pct >= 60) { emoji = '&#128170;'; message = 'Iyi gidiyorsun, pratik yapmaya devam!'; }
    else if (pct >= 40) { emoji = '&#128214;'; message = 'Daha fazla calisma gerekli.'; }
    else { emoji = '&#128260;'; message = 'Tablodan tekrar et ve yeniden dene!'; }

    if (window.progressManager) {
        window.progressManager.completeActivity(`verb-conjugation-drill-${Date.now()}`);
    }

    area.innerHTML = `
        <div class="vc-results">
            <div class="vc-results-emoji">${emoji}</div>
            <h2>${message}</h2>
            <div class="vc-results-stats">
                <div class="vc-stat">
                    <span class="vc-stat-num">${drillScore}</span>
                    <span class="vc-stat-label">Dogru</span>
                </div>
                <div class="vc-stat">
                    <span class="vc-stat-num">${drillTotal - drillScore}</span>
                    <span class="vc-stat-label">Yanlis</span>
                </div>
                <div class="vc-stat">
                    <span class="vc-stat-num">${pct}%</span>
                    <span class="vc-stat-label">Basari</span>
                </div>
                <div class="vc-stat">
                    <span class="vc-stat-num">+${xpEarned}</span>
                    <span class="vc-stat-label">XP</span>
                </div>
            </div>
            <div class="vc-results-actions">
                <button class="btn" id="vc-retry-btn">Tekrar Oyna</button>
                <button class="btn secondary" id="vc-table-btn">Tabloya Don</button>
            </div>
        </div>
    `;

    if (pct >= 80) {
        showToast(`Harika! %${pct} basari ile tamamladin!`, 'success');
    }

    document.getElementById('vc-retry-btn').addEventListener('click', () => {
        renderDrillSetup();
    });
    document.getElementById('vc-table-btn').addEventListener('click', () => {
        currentTab = 'table';
        renderShell();
    });
}

// ══════════════════════════════════════════════════════════════════════════════
//  3. TENSE IDENTIFIER
// ══════════════════════════════════════════════════════════════════════════════
function renderIdentifierSetup() {
    const area = document.getElementById('vc-content-area');

    area.innerHTML = `
        <div class="vc-drill-setup">
            <h4>Zaman Tanima - Tense Identifier</h4>
            <p class="vc-drill-desc">Cumlenin hangi zamanda oldugunu secin. Her dogru cevap <strong>+10 XP</strong> kazandirir.</p>
            <p class="vc-drill-batch-info">${tenseIdentifierSentences.length} cumle mevcut — ${DRILL_BATCH} soru sorulacak.</p>
            <button class="btn vc-start-btn" id="vc-start-identifier">Baslat (${DRILL_BATCH} soru)</button>
        </div>
    `;

    document.getElementById('vc-start-identifier').addEventListener('click', () => {
        idQueue = fisherYatesShuffle([...tenseIdentifierSentences]).slice(0, DRILL_BATCH);
        idIndex = 0;
        idScore = 0;
        idTotal = idQueue.length;
        renderIdentifierQuestion();
    });
}

function renderIdentifierQuestion() {
    const area = document.getElementById('vc-content-area');
    const item = idQueue[idIndex];
    if (!item) { showIdentifierResults(); return; }

    const progress = `${idIndex + 1} / ${idTotal}`;

    // Generate 4 options: correct + 3 random wrong
    const allTenses = ['presentSimple', 'pastSimple', 'presentContinuous', 'presentPerfect', 'futureSimple'];
    const wrongTenses = fisherYatesShuffle(allTenses.filter(t => t !== item.tense)).slice(0, 3);
    const options = fisherYatesShuffle([item.tense, ...wrongTenses]);

    area.innerHTML = `
        <div class="vc-drill-card">
            <div class="vc-drill-progress">
                <span>${progress}</span>
                <span class="vc-drill-score-inline">Dogru: ${idScore}</span>
            </div>
            <div class="vc-drill-prompt" style="margin-bottom:0.5rem;">
                ${getCEFRBadgeHTML(item.level)}
            </div>
            <p class="vc-id-sentence">"${escapeHTML(item.sentence)}"</p>
            <p class="vc-id-question">Bu cumle hangi zamanda?</p>
            <div class="vc-id-options" id="vc-id-options">
                ${options.map(t => {
                    const info = tenseExplanations[t];
                    return `
                        <button class="btn secondary vc-id-option" data-tense="${t}">
                            ${info.name} <small>(${info.turkish})</small>
                        </button>
                    `;
                }).join('')}
            </div>
            <div id="vc-id-feedback" class="vc-drill-feedback"></div>
        </div>
    `;

    area.querySelectorAll('.vc-id-option').forEach(btn => {
        btn.addEventListener('click', () => {
            handleIdentifierCheck(btn, item);
        });
    });
}

function handleIdentifierCheck(selectedBtn, item) {
    const feedback = document.getElementById('vc-id-feedback');
    const allBtns = document.querySelectorAll('.vc-id-option');
    const selectedTense = selectedBtn.dataset.tense;
    const correct = selectedTense === item.tense;

    // Disable all buttons
    allBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.tense === item.tense) {
            btn.classList.add('vc-option-correct');
            btn.classList.remove('secondary');
        }
        if (!correct && btn.dataset.tense === selectedTense) {
            btn.classList.add('vc-option-wrong');
        }
    });

    const correctInfo = tenseExplanations[item.tense];

    if (correct) {
        idScore++;
        feedback.innerHTML = `<span class="vc-fb-correct">Dogru! ${correctInfo.name} (${correctInfo.turkish}) +10 XP</span>`;
        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
    } else {
        feedback.innerHTML = `
            <span class="vc-fb-wrong">Yanlis!</span>
            <span class="vc-fb-answer">Dogru cevap: <strong>${correctInfo.name} (${correctInfo.turkish})</strong></span>
        `;
        if (window.audioManager) window.audioManager.playWrong();
    }

    setTimeout(() => {
        idIndex++;
        renderIdentifierQuestion();
    }, correct ? 1200 : 2500);
}

function showIdentifierResults() {
    const area = document.getElementById('vc-content-area');
    const pct = idTotal > 0 ? Math.round((idScore / idTotal) * 100) : 0;
    const xpEarned = idScore * 10;

    let emoji = '';
    let message = '';
    if (pct === 100) { emoji = '&#127942;'; message = 'Mukemmel! Tum zamanlari taniyorsun!'; }
    else if (pct >= 80) { emoji = '&#127775;'; message = 'Harika! Zamanlari cok iyi biliyorsun!'; }
    else if (pct >= 60) { emoji = '&#128170;'; message = 'Iyi gidiyorsun, pratik yapmaya devam!'; }
    else if (pct >= 40) { emoji = '&#128214;'; message = 'Zaman aciklamalarini tekrar oku.'; }
    else { emoji = '&#128260;'; message = 'Tablodan zamanlari incele ve tekrar dene!'; }

    if (window.progressManager) {
        window.progressManager.completeActivity(`verb-conjugation-identifier-${Date.now()}`);
    }

    area.innerHTML = `
        <div class="vc-results">
            <div class="vc-results-emoji">${emoji}</div>
            <h2>${message}</h2>
            <div class="vc-results-stats">
                <div class="vc-stat">
                    <span class="vc-stat-num">${idScore}</span>
                    <span class="vc-stat-label">Dogru</span>
                </div>
                <div class="vc-stat">
                    <span class="vc-stat-num">${idTotal - idScore}</span>
                    <span class="vc-stat-label">Yanlis</span>
                </div>
                <div class="vc-stat">
                    <span class="vc-stat-num">${pct}%</span>
                    <span class="vc-stat-label">Basari</span>
                </div>
                <div class="vc-stat">
                    <span class="vc-stat-num">+${xpEarned}</span>
                    <span class="vc-stat-label">XP</span>
                </div>
            </div>
            <div class="vc-results-actions">
                <button class="btn" id="vc-id-retry-btn">Tekrar Oyna</button>
                <button class="btn secondary" id="vc-id-table-btn">Tabloya Don</button>
            </div>
        </div>
    `;

    if (pct >= 80) {
        showToast(`Harika! %${pct} basari ile tamamladin!`, 'success');
    }

    document.getElementById('vc-id-retry-btn').addEventListener('click', () => {
        renderIdentifierSetup();
    });
    document.getElementById('vc-id-table-btn').addEventListener('click', () => {
        currentTab = 'table';
        renderShell();
    });
}

// ══════════════════════════════════════════════════════════════════════════════
//  SCOPED STYLES
// ══════════════════════════════════════════════════════════════════════════════
function injectStyles() {
    if (document.getElementById('vc-styles')) return;
    const style = document.createElement('style');
    style.id = 'vc-styles';
    style.textContent = `
        /* ── Module Container ──────────────────────────── */
        .vc-module {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0.5rem;
        }
        .vc-header {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }
        .vc-title {
            margin: 0;
            font-size: 1.3rem;
        }
        .vc-nav {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        /* ── Table Controls ────────────────────────────── */
        .vc-table-controls {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1rem;
        }
        .vc-filter-row {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            align-items: center;
        }
        .vc-level-filters, .vc-type-filters {
            display: flex;
            gap: 0.4rem;
            flex-wrap: wrap;
        }
        .vc-filter-info {
            font-size: 0.85rem;
            color: var(--text-light, #999);
        }

        /* ── Tense Tips ────────────────────────────────── */
        .vc-tense-tips {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-bottom: 1rem;
        }
        .vc-tip-card {
            flex: 1 1 180px;
            padding: 0.5rem 0.75rem;
            border-radius: 10px;
            background: var(--card-bg, rgba(255,255,255,0.04));
            border: 1px solid var(--border, rgba(255,255,255,0.08));
            font-size: 0.8rem;
        }
        .vc-tip-header {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            flex-wrap: wrap;
        }
        .vc-tip-turkish {
            color: var(--text-light, #999);
            font-size: 0.75rem;
        }
        .vc-tip-toggle {
            margin-left: auto;
            background: var(--primary, #4a90e2);
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 0.7rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }
        .vc-tip-body {
            margin-top: 0.5rem;
            color: var(--text-light, #bbb);
            font-size: 0.78rem;
            line-height: 1.5;
        }

        /* ── Table ─────────────────────────────────────── */
        .vc-table-wrapper {
            overflow-x: auto;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.15);
        }
        .vc-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.85rem;
        }
        .vc-table thead {
            background: var(--primary, #4a90e2);
            color: #fff;
        }
        .vc-table th {
            padding: 0.7rem 0.5rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.75rem;
            white-space: nowrap;
            user-select: none;
        }
        .vc-sortable {
            cursor: pointer;
            transition: background 0.15s;
        }
        .vc-sortable:hover {
            background: rgba(255,255,255,0.1);
        }
        .vc-sort-icon {
            font-size: 0.7rem;
        }
        .vc-table td {
            padding: 0.55rem 0.5rem;
            border-bottom: 1px solid var(--border, rgba(255,255,255,0.08));
        }
        .vc-table tbody tr:hover {
            background: rgba(74, 144, 226, 0.06);
        }
        .vc-cell-verb {
            font-weight: 600;
            color: var(--primary, #4a90e2);
        }
        .vc-cell-meaning {
            color: var(--text-light, #aaa);
            font-style: italic;
        }

        /* ── Type Badges ───────────────────────────────── */
        .vc-type-badge {
            font-size: 0.68rem;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 10px;
            display: inline-block;
        }
        .vc-type-regular {
            background: #27ae60;
            color: #fff;
        }
        .vc-type-irregular {
            background: #e74c3c;
            color: #fff;
        }

        /* ── Drill Setup ───────────────────────────────── */
        .vc-drill-setup {
            text-align: center;
            padding: 2rem 1rem;
        }
        .vc-drill-setup h4 {
            font-size: 1.15rem;
            margin-bottom: 0.5rem;
        }
        .vc-drill-desc {
            color: var(--text-light, #aaa);
            margin-bottom: 0.5rem;
        }
        .vc-drill-batch-info {
            font-size: 0.85rem;
            color: var(--text-light, #999);
            margin-bottom: 1rem;
        }
        .vc-start-btn {
            font-size: 1rem;
        }

        /* ── Drill Card ────────────────────────────────── */
        .vc-drill-card {
            max-width: 600px;
            margin: 0 auto;
            padding: 1.5rem;
            border-radius: 16px;
            background: var(--card-bg, rgba(255,255,255,0.04));
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .vc-drill-progress {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            color: var(--text-light, #999);
            margin-bottom: 1rem;
        }
        .vc-drill-score-inline {
            font-weight: 600;
            color: #27ae60;
        }
        .vc-drill-tense-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
        }
        .vc-tense-label {
            font-size: 1rem;
            font-weight: 700;
            color: var(--primary, #4a90e2);
        }
        .vc-tense-turkish {
            font-size: 0.85rem;
            color: var(--text-light, #999);
        }
        .vc-drill-prompt {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-bottom: 0.75rem;
        }
        .vc-drill-sentence {
            font-size: 1.2rem;
            font-weight: 600;
            line-height: 1.6;
            margin-bottom: 0.5rem;
            padding: 0.75rem;
            background: rgba(74, 144, 226, 0.08);
            border-radius: 10px;
            border-left: 3px solid var(--primary, #4a90e2);
        }
        .vc-drill-hint {
            font-size: 0.9rem;
            color: var(--text-light, #aaa);
            margin-bottom: 1.25rem;
        }
        .vc-drill-inputs {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }
        .vc-input-group {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        .vc-input-group label {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-light, #bbb);
        }
        .vc-drill-input {
            width: 100%;
            padding: 0.65rem 0.75rem;
            border: 2px solid var(--border, rgba(255,255,255,0.15));
            border-radius: 10px;
            font-size: 1rem;
            font-family: inherit;
            background: var(--input-bg, rgba(255,255,255,0.06));
            color: var(--text, #fff);
            transition: border-color 0.2s, box-shadow 0.2s;
            box-sizing: border-box;
        }
        .vc-drill-input:focus {
            outline: none;
            border-color: var(--primary, #4a90e2);
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
        }
        .vc-input-correct {
            border-color: #27ae60 !important;
            background: rgba(39, 174, 96, 0.1) !important;
            box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.2) !important;
        }
        .vc-input-wrong {
            border-color: #e74c3c !important;
            background: rgba(231, 76, 60, 0.1) !important;
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2) !important;
        }
        .vc-drill-actions {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 1rem;
        }
        .vc-drill-actions .btn {
            flex: 1;
        }

        /* ── Drill Feedback ────────────────────────────── */
        .vc-drill-feedback {
            min-height: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.95rem;
        }
        .vc-fb-correct {
            color: #27ae60;
            font-weight: 700;
        }
        .vc-fb-wrong {
            color: #e74c3c;
            font-weight: 700;
        }
        .vc-fb-skip {
            color: #f39c12;
            font-weight: 600;
        }
        .vc-fb-answer {
            color: var(--text-light, #bbb);
            font-size: 0.85rem;
        }

        /* ── Identifier ───────────────────────────────── */
        .vc-id-sentence {
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 1.6;
            margin-bottom: 0.75rem;
            padding: 1rem;
            background: rgba(74, 144, 226, 0.08);
            border-radius: 10px;
            border-left: 3px solid var(--primary, #4a90e2);
            font-style: italic;
        }
        .vc-id-question {
            font-size: 1rem;
            color: var(--text-light, #bbb);
            margin-bottom: 1rem;
        }
        .vc-id-options {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            margin-bottom: 1rem;
        }
        .vc-id-option {
            text-align: left;
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
            border-radius: 10px;
            transition: all 0.2s;
        }
        .vc-id-option:hover:not(:disabled) {
            transform: translateX(4px);
        }
        .vc-id-option small {
            color: var(--text-light, #999);
            margin-left: 0.25rem;
        }
        .vc-option-correct {
            background: #27ae60 !important;
            color: #fff !important;
            border-color: #27ae60 !important;
        }
        .vc-option-correct small {
            color: rgba(255,255,255,0.8) !important;
        }
        .vc-option-wrong {
            background: #e74c3c !important;
            color: #fff !important;
            border-color: #e74c3c !important;
        }
        .vc-option-wrong small {
            color: rgba(255,255,255,0.8) !important;
        }

        /* ── Results ───────────────────────────────────── */
        .vc-results {
            text-align: center;
            padding: 2rem 1rem;
        }
        .vc-results-emoji {
            font-size: 3rem;
            margin-bottom: 0.75rem;
        }
        .vc-results h2 {
            margin-bottom: 1.5rem;
        }
        .vc-results-stats {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }
        .vc-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
        }
        .vc-stat-num {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--primary, #4a90e2);
        }
        .vc-stat-label {
            font-size: 0.8rem;
            color: var(--text-light, #999);
        }
        .vc-results-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* ── Responsive ────────────────────────────────── */
        @media (max-width: 600px) {
            .vc-table { font-size: 0.73rem; }
            .vc-table th, .vc-table td { padding: 0.4rem 0.3rem; }
            .vc-drill-sentence { font-size: 1rem; }
            .vc-id-sentence { font-size: 1rem; }
            .vc-drill-card { padding: 1rem; }
            .vc-results-stats { gap: 1rem; }
            .vc-stat-num { font-size: 1.3rem; }
            .vc-tense-tips { flex-direction: column; }
            .vc-tip-card { flex: 1 1 100%; }
        }
    `;
    document.head.appendChild(style);
}
