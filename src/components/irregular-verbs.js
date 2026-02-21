/**
 * Irregular Verbs Module — Düzensiz Fiiller
 * Tablo, Drill (V1→V2/V3), Reverse Drill (V3→V1), Skor & XP
 */

import { getCEFRBadgeHTML, fisherYatesShuffle, attachEnglishValidation } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Düzensiz Fiil Veritabanı (80+ fiil, A1–B2) ─────────────────────────────
const irregularVerbs = [
    // ─── A1 — Temel Düzensiz Fiiller (20) ───────────────────
    { v1: 'be',       v2: 'was/were',  v3: 'been',       meaning: 'olmak',                level: 'A1' },
    { v1: 'have',     v2: 'had',       v3: 'had',        meaning: 'sahip olmak',           level: 'A1' },
    { v1: 'do',       v2: 'did',       v3: 'done',       meaning: 'yapmak',                level: 'A1' },
    { v1: 'say',      v2: 'said',      v3: 'said',       meaning: 'söylemek',              level: 'A1' },
    { v1: 'go',       v2: 'went',      v3: 'gone',       meaning: 'gitmek',                level: 'A1' },
    { v1: 'get',      v2: 'got',       v3: 'got',        meaning: 'almak, elde etmek',     level: 'A1' },
    { v1: 'make',     v2: 'made',      v3: 'made',       meaning: 'yapmak, imal etmek',    level: 'A1' },
    { v1: 'come',     v2: 'came',      v3: 'come',       meaning: 'gelmek',                level: 'A1' },
    { v1: 'see',      v2: 'saw',       v3: 'seen',       meaning: 'görmek',                level: 'A1' },
    { v1: 'know',     v2: 'knew',      v3: 'known',      meaning: 'bilmek',                level: 'A1' },
    { v1: 'take',     v2: 'took',      v3: 'taken',      meaning: 'almak',                 level: 'A1' },
    { v1: 'give',     v2: 'gave',      v3: 'given',      meaning: 'vermek',                level: 'A1' },
    { v1: 'find',     v2: 'found',     v3: 'found',      meaning: 'bulmak',                level: 'A1' },
    { v1: 'think',    v2: 'thought',   v3: 'thought',    meaning: 'düşünmek',              level: 'A1' },
    { v1: 'tell',     v2: 'told',      v3: 'told',       meaning: 'anlatmak, söylemek',    level: 'A1' },
    { v1: 'eat',      v2: 'ate',       v3: 'eaten',      meaning: 'yemek',                 level: 'A1' },
    { v1: 'drink',    v2: 'drank',     v3: 'drunk',      meaning: 'içmek',                 level: 'A1' },
    { v1: 'read',     v2: 'read',      v3: 'read',       meaning: 'okumak',                level: 'A1' },
    { v1: 'write',    v2: 'wrote',     v3: 'written',    meaning: 'yazmak',                level: 'A1' },
    { v1: 'run',      v2: 'ran',       v3: 'run',        meaning: 'koşmak',                level: 'A1' },

    // ─── A2 — Temel-Orta Düzensiz Fiiller (20) ──────────────
    { v1: 'buy',      v2: 'bought',    v3: 'bought',     meaning: 'satın almak',           level: 'A2' },
    { v1: 'bring',    v2: 'brought',   v3: 'brought',    meaning: 'getirmek',              level: 'A2' },
    { v1: 'build',    v2: 'built',     v3: 'built',      meaning: 'inşa etmek',            level: 'A2' },
    { v1: 'catch',    v2: 'caught',    v3: 'caught',     meaning: 'yakalamak',             level: 'A2' },
    { v1: 'choose',   v2: 'chose',     v3: 'chosen',     meaning: 'seçmek',                level: 'A2' },
    { v1: 'cut',      v2: 'cut',       v3: 'cut',        meaning: 'kesmek',                level: 'A2' },
    { v1: 'draw',     v2: 'drew',      v3: 'drawn',      meaning: 'çizmek',                level: 'A2' },
    { v1: 'drive',    v2: 'drove',     v3: 'driven',     meaning: 'sürmek (araç)',         level: 'A2' },
    { v1: 'fall',     v2: 'fell',      v3: 'fallen',     meaning: 'düşmek',                level: 'A2' },
    { v1: 'feel',     v2: 'felt',      v3: 'felt',       meaning: 'hissetmek',             level: 'A2' },
    { v1: 'fly',      v2: 'flew',      v3: 'flown',      meaning: 'uçmak',                 level: 'A2' },
    { v1: 'forget',   v2: 'forgot',    v3: 'forgotten',  meaning: 'unutmak',               level: 'A2' },
    { v1: 'grow',     v2: 'grew',      v3: 'grown',      meaning: 'büyümek, yetiştirmek',  level: 'A2' },
    { v1: 'hear',     v2: 'heard',     v3: 'heard',      meaning: 'duymak',                level: 'A2' },
    { v1: 'hold',     v2: 'held',      v3: 'held',       meaning: 'tutmak',                level: 'A2' },
    { v1: 'keep',     v2: 'kept',      v3: 'kept',       meaning: 'saklamak, tutmak',      level: 'A2' },
    { v1: 'leave',    v2: 'left',      v3: 'left',       meaning: 'ayrılmak, bırakmak',   level: 'A2' },
    { v1: 'lose',     v2: 'lost',      v3: 'lost',       meaning: 'kaybetmek',             level: 'A2' },
    { v1: 'meet',     v2: 'met',       v3: 'met',        meaning: 'tanışmak, buluşmak',   level: 'A2' },
    { v1: 'pay',      v2: 'paid',      v3: 'paid',       meaning: 'ödemek',                level: 'A2' },

    // ─── B1 — Orta Düzey Düzensiz Fiiller (25) ──────────────
    { v1: 'begin',    v2: 'began',     v3: 'begun',      meaning: 'başlamak',              level: 'B1' },
    { v1: 'break',    v2: 'broke',     v3: 'broken',     meaning: 'kırmak',                level: 'B1' },
    { v1: 'blow',     v2: 'blew',      v3: 'blown',      meaning: 'üflemek, esmek',        level: 'B1' },
    { v1: 'burn',     v2: 'burnt',     v3: 'burnt',      meaning: 'yanmak, yakmak',        level: 'B1' },
    { v1: 'cost',     v2: 'cost',      v3: 'cost',       meaning: 'mal olmak (fiyat)',     level: 'B1' },
    { v1: 'dig',      v2: 'dug',       v3: 'dug',        meaning: 'kazmak',                level: 'B1' },
    { v1: 'feed',     v2: 'fed',       v3: 'fed',        meaning: 'beslemek',              level: 'B1' },
    { v1: 'fight',    v2: 'fought',    v3: 'fought',     meaning: 'savaşmak, kavga etmek', level: 'B1' },
    { v1: 'freeze',   v2: 'froze',     v3: 'frozen',     meaning: 'donmak, dondurmak',    level: 'B1' },
    { v1: 'hang',     v2: 'hung',      v3: 'hung',       meaning: 'asmak',                 level: 'B1' },
    { v1: 'hide',     v2: 'hid',       v3: 'hidden',     meaning: 'saklamak, gizlemek',    level: 'B1' },
    { v1: 'hit',      v2: 'hit',       v3: 'hit',        meaning: 'vurmak',                level: 'B1' },
    { v1: 'hurt',     v2: 'hurt',      v3: 'hurt',       meaning: 'acıtmak, incitmek',    level: 'B1' },
    { v1: 'lay',      v2: 'laid',      v3: 'laid',       meaning: 'koymak, sermek',        level: 'B1' },
    { v1: 'lead',     v2: 'led',       v3: 'led',        meaning: 'yönetmek, önderlik etmek', level: 'B1' },
    { v1: 'lend',     v2: 'lent',      v3: 'lent',       meaning: 'ödünç vermek',          level: 'B1' },
    { v1: 'lie',      v2: 'lay',       v3: 'lain',       meaning: 'uzanmak, yatmak',       level: 'B1' },
    { v1: 'light',    v2: 'lit',       v3: 'lit',        meaning: 'yakmak, aydınlatmak',   level: 'B1' },
    { v1: 'mean',     v2: 'meant',     v3: 'meant',      meaning: 'anlamına gelmek',       level: 'B1' },
    { v1: 'put',      v2: 'put',       v3: 'put',        meaning: 'koymak',                level: 'B1' },
    { v1: 'ride',     v2: 'rode',      v3: 'ridden',     meaning: 'binmek, sürmek',        level: 'B1' },
    { v1: 'ring',     v2: 'rang',      v3: 'rung',       meaning: 'çalmak (zil)',          level: 'B1' },
    { v1: 'rise',     v2: 'rose',      v3: 'risen',      meaning: 'yükselmek, kalkmak',    level: 'B1' },
    { v1: 'sell',     v2: 'sold',      v3: 'sold',       meaning: 'satmak',                level: 'B1' },
    { v1: 'send',     v2: 'sent',      v3: 'sent',       meaning: 'göndermek',             level: 'B1' },

    // ─── B2 — Üst Orta Düzensiz Fiiller (20) ────────────────
    { v1: 'arise',    v2: 'arose',     v3: 'arisen',     meaning: 'ortaya çıkmak',         level: 'B2' },
    { v1: 'bear',     v2: 'bore',      v3: 'borne',      meaning: 'taşımak, katlanmak',    level: 'B2' },
    { v1: 'beat',     v2: 'beat',      v3: 'beaten',     meaning: 'yenmek, dövmek',        level: 'B2' },
    { v1: 'bend',     v2: 'bent',      v3: 'bent',       meaning: 'bükmek, eğilmek',       level: 'B2' },
    { v1: 'bet',      v2: 'bet',       v3: 'bet',        meaning: 'bahse girmek',          level: 'B2' },
    { v1: 'bind',     v2: 'bound',     v3: 'bound',      meaning: 'bağlamak',              level: 'B2' },
    { v1: 'bite',     v2: 'bit',       v3: 'bitten',     meaning: 'ısırmak',               level: 'B2' },
    { v1: 'bleed',    v2: 'bled',      v3: 'bled',       meaning: 'kanamak',               level: 'B2' },
    { v1: 'breed',    v2: 'bred',      v3: 'bred',       meaning: 'yetiştirmek, üretmek',  level: 'B2' },
    { v1: 'burst',    v2: 'burst',     v3: 'burst',      meaning: 'patlamak',              level: 'B2' },
    { v1: 'cast',     v2: 'cast',      v3: 'cast',       meaning: 'atmak, dökmek',         level: 'B2' },
    { v1: 'cling',    v2: 'clung',     v3: 'clung',      meaning: 'yapışmak, sarılmak',    level: 'B2' },
    { v1: 'creep',    v2: 'crept',     v3: 'crept',      meaning: 'sürünmek, sinsice yürümek', level: 'B2' },
    { v1: 'deal',     v2: 'dealt',     v3: 'dealt',      meaning: 'ilgilenmek, dağıtmak',  level: 'B2' },
    { v1: 'flee',     v2: 'fled',      v3: 'fled',       meaning: 'kaçmak',                level: 'B2' },
    { v1: 'forbid',   v2: 'forbade',   v3: 'forbidden',  meaning: 'yasaklamak',            level: 'B2' },
    { v1: 'forgive',  v2: 'forgave',   v3: 'forgiven',   meaning: 'affetmek',              level: 'B2' },
    { v1: 'grind',    v2: 'ground',    v3: 'ground',     meaning: 'öğütmek',               level: 'B2' },
    { v1: 'overcome', v2: 'overcame',  v3: 'overcome',   meaning: 'üstesinden gelmek',     level: 'B2' },
    { v1: 'withdraw', v2: 'withdrew',  v3: 'withdrawn',  meaning: 'geri çekmek, çekilmek', level: 'B2' },
];

// ── State ────────────────────────────────────────────────────────────────────
let currentView = 'table';         // 'table' | 'drill' | 'reverse'
let drillQueue = [];
let drillIndex = 0;
let drillScore = 0;
let drillTotal = 0;
let activeLevel = 'all';
let tableSortCol = 'v1';
let tableSortAsc = true;
let searchQuery = '';

const STORAGE_KEY = 'iv_stats';
const DRILL_BATCH = 10;

// ── Persistent Stats ─────────────────────────────────────────────────────────
function loadStats() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveStats(stats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}
function recordAnswer(verb, correct) {
    const stats = loadStats();
    const key = verb.v1;
    if (!stats[key]) stats[key] = { correct: 0, wrong: 0 };
    correct ? stats[key].correct++ : stats[key].wrong++;
    saveStats(stats);
}
function getVerbAccuracy(v1) {
    const stats = loadStats();
    const s = stats[v1];
    if (!s || (s.correct + s.wrong === 0)) return null;
    return Math.round((s.correct / (s.correct + s.wrong)) * 100);
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function getFilteredVerbs() {
    let list = activeLevel === 'all' ? [...irregularVerbs] : irregularVerbs.filter(v => v.level === activeLevel);
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(v =>
            v.v1.toLowerCase().includes(q) ||
            v.v2.toLowerCase().includes(q) ||
            v.v3.toLowerCase().includes(q) ||
            v.meaning.toLowerCase().includes(q)
        );
    }
    return list;
}

function normalizeAnswer(str) {
    return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

/** Accepts "was/were" style answers — user can type either variant or the full form */
function checkAnswer(userInput, correctAnswer) {
    const input = normalizeAnswer(userInput);
    const correct = normalizeAnswer(correctAnswer);
    if (input === correct) return true;
    // If correct has "/" (e.g. "was/were"), accept any variant
    if (correct.includes('/')) {
        const variants = correct.split('/').map(s => s.trim().toLowerCase());
        return variants.includes(input);
    }
    return false;
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ── Main Entry ───────────────────────────────────────────────────────────────
export function initIrregularVerbs() {
    currentView = 'table';
    activeLevel = 'all';
    searchQuery = '';
    renderShell();
}

function renderShell() {
    const container = document.getElementById('vocab-content') || document.getElementById('app');
    if (!container) return;

    container.innerHTML = `
        <div class="iv-module">
            <div class="iv-header">
                <h3 class="iv-title">Irregular Verbs - Duzensiz Fiiller</h3>
                <div class="iv-nav">
                    <button class="btn ${currentView === 'table' ? '' : 'secondary'} small iv-nav-btn" data-view="table">
                        Tablo
                    </button>
                    <button class="btn ${currentView === 'drill' ? '' : 'secondary'} small iv-nav-btn" data-view="drill">
                        Drill (V1 -> V2/V3)
                    </button>
                    <button class="btn ${currentView === 'reverse' ? '' : 'secondary'} small iv-nav-btn" data-view="reverse">
                        Reverse (V3 -> V1)
                    </button>
                </div>
            </div>
            <div id="iv-content-area"></div>
        </div>
    `;

    // Inject scoped styles
    injectStyles();

    // Nav buttons
    container.querySelectorAll('.iv-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentView = btn.dataset.view;
            renderShell();
        });
    });

    // Render active view
    switch (currentView) {
        case 'table':   renderTable(); break;
        case 'drill':   startDrill('forward'); break;
        case 'reverse': startDrill('reverse'); break;
    }
}

// ══════════════════════════════════════════════════════════════════════════════
//  TABLE VIEW
// ══════════════════════════════════════════════════════════════════════════════
function renderTable() {
    const area = document.getElementById('iv-content-area');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];

    area.innerHTML = `
        <div class="iv-table-controls">
            <input type="text" id="iv-search" class="search-input" placeholder="Fiil veya anlam ara..." value="${escapeHTML(searchQuery)}" autocomplete="off" />
            <div class="iv-level-filters">
                ${levels.map(l => `
                    <button class="btn ${activeLevel === l ? '' : 'secondary'} small iv-level-btn" data-level="${l}">
                        ${l === 'all' ? 'Tumü' : getCEFRBadgeHTML(l)}
                    </button>
                `).join('')}
            </div>
            <div class="iv-filter-info" id="iv-filter-info"></div>
        </div>
        <div class="iv-table-wrapper">
            <table class="iv-table" id="iv-table">
                <thead>
                    <tr>
                        <th class="iv-sortable" data-col="v1">V1 (Base) <span class="iv-sort-icon">${getSortIcon('v1')}</span></th>
                        <th class="iv-sortable" data-col="v2">V2 (Past) <span class="iv-sort-icon">${getSortIcon('v2')}</span></th>
                        <th class="iv-sortable" data-col="v3">V3 (P.P.) <span class="iv-sort-icon">${getSortIcon('v3')}</span></th>
                        <th class="iv-sortable" data-col="meaning">Anlam <span class="iv-sort-icon">${getSortIcon('meaning')}</span></th>
                        <th class="iv-sortable" data-col="level">Seviye <span class="iv-sort-icon">${getSortIcon('level')}</span></th>
                        <th>Basari</th>
                    </tr>
                </thead>
                <tbody id="iv-tbody"></tbody>
            </table>
        </div>
    `;

    // Render rows
    renderTableRows();

    // Search
    const searchInput = document.getElementById('iv-search');
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
        renderTableRows();
    });

    // Level filter
    area.querySelectorAll('.iv-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeLevel = btn.dataset.level;
            renderTable();
        });
    });

    // Sort headers
    area.querySelectorAll('.iv-sortable').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.dataset.col;
            if (tableSortCol === col) {
                tableSortAsc = !tableSortAsc;
            } else {
                tableSortCol = col;
                tableSortAsc = true;
            }
            renderTable();
        });
    });
}

function getSortIcon(col) {
    if (tableSortCol !== col) return '';
    return tableSortAsc ? ' ↑' : ' ↓';
}

function renderTableRows() {
    const tbody = document.getElementById('iv-tbody');
    const info = document.getElementById('iv-filter-info');
    let verbs = getFilteredVerbs();

    // Sort
    const levelOrder = { A1: 1, A2: 2, B1: 3, B2: 4 };
    verbs.sort((a, b) => {
        let va, vb;
        if (tableSortCol === 'level') {
            va = levelOrder[a.level] || 99;
            vb = levelOrder[b.level] || 99;
        } else {
            va = a[tableSortCol].toLowerCase();
            vb = b[tableSortCol].toLowerCase();
        }
        if (va < vb) return tableSortAsc ? -1 : 1;
        if (va > vb) return tableSortAsc ? 1 : -1;
        return 0;
    });

    if (info) {
        info.textContent = verbs.length < irregularVerbs.length
            ? `${verbs.length} fiil gösteriliyor (toplam ${irregularVerbs.length})`
            : `${irregularVerbs.length} fiil`;
    }

    if (verbs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--text-light);">Sonuc bulunamadi.</td></tr>';
        return;
    }

    tbody.innerHTML = verbs.map(v => {
        const acc = getVerbAccuracy(v.v1);
        const accHTML = acc === null
            ? '<span class="iv-acc iv-acc-none">--</span>'
            : acc >= 80
                ? `<span class="iv-acc iv-acc-good">${acc}%</span>`
                : acc >= 50
                    ? `<span class="iv-acc iv-acc-mid">${acc}%</span>`
                    : `<span class="iv-acc iv-acc-bad">${acc}%</span>`;

        return `
            <tr>
                <td class="iv-cell-v1"><strong>${escapeHTML(v.v1)}</strong></td>
                <td>${escapeHTML(v.v2)}</td>
                <td>${escapeHTML(v.v3)}</td>
                <td class="iv-cell-meaning">${escapeHTML(v.meaning)}</td>
                <td>${getCEFRBadgeHTML(v.level)}</td>
                <td>${accHTML}</td>
            </tr>
        `;
    }).join('');
}

// ══════════════════════════════════════════════════════════════════════════════
//  DRILL MODE (Forward & Reverse)
// ══════════════════════════════════════════════════════════════════════════════
function startDrill(mode) {
    const area = document.getElementById('iv-content-area');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
    const isReverse = mode === 'reverse';

    area.innerHTML = `
        <div class="iv-drill-setup">
            <h4>${isReverse ? 'Reverse Drill: V3 verilecek, V1 yazacaksin' : 'Drill: V1 verilecek, V2 ve V3 yazacaksin'}</h4>
            <p class="iv-drill-desc">Seviye sec ve basla. Her dogru cevap <strong>+10 XP</strong> kazandirir.</p>
            <div class="iv-level-filters" style="margin:1rem 0;">
                ${levels.map(l => `
                    <button class="btn ${activeLevel === l ? '' : 'secondary'} small iv-drill-level-btn" data-level="${l}">
                        ${l === 'all' ? 'Tumü' : getCEFRBadgeHTML(l)}
                    </button>
                `).join('')}
            </div>
            <div class="iv-drill-batch-info" id="iv-drill-batch-info"></div>
            <button class="btn iv-start-drill-btn" id="iv-start-drill">Baslat (${DRILL_BATCH} soru)</button>
        </div>
    `;

    updateBatchInfo();

    area.querySelectorAll('.iv-drill-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeLevel = btn.dataset.level;
            // Update button styling
            area.querySelectorAll('.iv-drill-level-btn').forEach(b => {
                b.classList.toggle('secondary', b.dataset.level !== activeLevel);
                b.classList.toggle('', b.dataset.level === activeLevel);
            });
            // Remove 'secondary' from active, add to others
            area.querySelectorAll('.iv-drill-level-btn').forEach(b => {
                if (b.dataset.level === activeLevel) {
                    b.classList.remove('secondary');
                } else {
                    b.classList.add('secondary');
                }
            });
            updateBatchInfo();
        });
    });

    document.getElementById('iv-start-drill').addEventListener('click', () => {
        const pool = getFilteredVerbs();
        if (pool.length === 0) {
            showToast('Bu seviyede fiil bulunamadi.', 'warning');
            return;
        }
        drillQueue = fisherYatesShuffle([...pool]).slice(0, DRILL_BATCH);
        drillIndex = 0;
        drillScore = 0;
        drillTotal = drillQueue.length;
        renderDrillQuestion(isReverse);
    });
}

function updateBatchInfo() {
    const info = document.getElementById('iv-drill-batch-info');
    if (!info) return;
    const pool = getFilteredVerbs();
    info.textContent = `${pool.length} fiil mevcut — ${Math.min(DRILL_BATCH, pool.length)} soru sorulacak.`;
}

function renderDrillQuestion(isReverse) {
    const area = document.getElementById('iv-content-area');
    const verb = drillQueue[drillIndex];
    if (!verb) { showDrillResults(isReverse); return; }

    const progress = `${drillIndex + 1} / ${drillTotal}`;

    if (isReverse) {
        // Reverse: show V3, ask V1
        area.innerHTML = `
            <div class="iv-drill-card">
                <div class="iv-drill-progress">
                    <span>${progress}</span>
                    <span class="iv-drill-score-inline">Dogru: ${drillScore}</span>
                </div>
                <div class="iv-drill-prompt">
                    <span class="iv-drill-label">V3 (Past Participle):</span>
                    <span class="iv-drill-word">${escapeHTML(verb.v3)}</span>
                    ${getCEFRBadgeHTML(verb.level)}
                </div>
                <p class="iv-drill-hint">Anlam: <em>${escapeHTML(verb.meaning)}</em></p>
                <div class="iv-drill-inputs">
                    <div class="iv-input-group">
                        <label>V1 (Base Form):</label>
                        <input type="text" id="iv-input-v1" class="iv-drill-input" placeholder="V1 yaz..." autocomplete="off" />
                    </div>
                </div>
                <div class="iv-drill-actions">
                    <button class="btn" id="iv-check-btn">Kontrol Et</button>
                    <button class="btn secondary" id="iv-skip-btn">Atla</button>
                </div>
                <div id="iv-drill-feedback" class="iv-drill-feedback"></div>
            </div>
        `;

        const v1Input = document.getElementById('iv-input-v1');
        attachEnglishValidation(v1Input);
        v1Input.focus();

        v1Input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') document.getElementById('iv-check-btn').click();
        });

        document.getElementById('iv-check-btn').addEventListener('click', () => {
            handleReverseDrillCheck(verb);
        });

        document.getElementById('iv-skip-btn').addEventListener('click', () => {
            showSkipFeedback(verb, isReverse);
        });

    } else {
        // Forward: show V1, ask V2 & V3
        area.innerHTML = `
            <div class="iv-drill-card">
                <div class="iv-drill-progress">
                    <span>${progress}</span>
                    <span class="iv-drill-score-inline">Dogru: ${drillScore}</span>
                </div>
                <div class="iv-drill-prompt">
                    <span class="iv-drill-label">V1 (Base Form):</span>
                    <span class="iv-drill-word">${escapeHTML(verb.v1)}</span>
                    ${getCEFRBadgeHTML(verb.level)}
                </div>
                <p class="iv-drill-hint">Anlam: <em>${escapeHTML(verb.meaning)}</em></p>
                <div class="iv-drill-inputs">
                    <div class="iv-input-group">
                        <label>V2 (Past Simple):</label>
                        <input type="text" id="iv-input-v2" class="iv-drill-input" placeholder="V2 yaz..." autocomplete="off" />
                    </div>
                    <div class="iv-input-group">
                        <label>V3 (Past Participle):</label>
                        <input type="text" id="iv-input-v3" class="iv-drill-input" placeholder="V3 yaz..." autocomplete="off" />
                    </div>
                </div>
                <div class="iv-drill-actions">
                    <button class="btn" id="iv-check-btn">Kontrol Et</button>
                    <button class="btn secondary" id="iv-skip-btn">Atla</button>
                </div>
                <div id="iv-drill-feedback" class="iv-drill-feedback"></div>
            </div>
        `;

        const v2Input = document.getElementById('iv-input-v2');
        const v3Input = document.getElementById('iv-input-v3');
        attachEnglishValidation(v2Input);
        attachEnglishValidation(v3Input);
        v2Input.focus();

        v2Input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') v3Input.focus();
        });
        v3Input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') document.getElementById('iv-check-btn').click();
        });

        document.getElementById('iv-check-btn').addEventListener('click', () => {
            handleForwardDrillCheck(verb);
        });

        document.getElementById('iv-skip-btn').addEventListener('click', () => {
            showSkipFeedback(verb, isReverse);
        });
    }
}

function handleForwardDrillCheck(verb) {
    const v2Input = document.getElementById('iv-input-v2');
    const v3Input = document.getElementById('iv-input-v3');
    const feedback = document.getElementById('iv-drill-feedback');
    const checkBtn = document.getElementById('iv-check-btn');
    const skipBtn = document.getElementById('iv-skip-btn');

    const v2Correct = checkAnswer(v2Input.value, verb.v2);
    const v3Correct = checkAnswer(v3Input.value, verb.v3);
    const allCorrect = v2Correct && v3Correct;

    // Color feedback on inputs
    v2Input.classList.add(v2Correct ? 'iv-input-correct' : 'iv-input-wrong');
    v3Input.classList.add(v3Correct ? 'iv-input-correct' : 'iv-input-wrong');
    v2Input.disabled = true;
    v3Input.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;

    if (allCorrect) {
        drillScore++;
        recordAnswer(verb, true);
        feedback.innerHTML = `<span class="iv-fb-correct">Dogru! ${escapeHTML(verb.v1)} - ${escapeHTML(verb.v2)} - ${escapeHTML(verb.v3)}</span>`;
        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
    } else {
        recordAnswer(verb, false);
        feedback.innerHTML = `
            <span class="iv-fb-wrong">Yanlis!</span>
            <span class="iv-fb-answer">Dogru cevap: <strong>${escapeHTML(verb.v1)} - ${escapeHTML(verb.v2)} - ${escapeHTML(verb.v3)}</strong></span>
        `;
        if (window.audioManager) window.audioManager.playWrong();
    }

    // Next question after delay
    setTimeout(() => {
        drillIndex++;
        renderDrillQuestion(false);
    }, allCorrect ? 1200 : 2500);
}

function handleReverseDrillCheck(verb) {
    const v1Input = document.getElementById('iv-input-v1');
    const feedback = document.getElementById('iv-drill-feedback');
    const checkBtn = document.getElementById('iv-check-btn');
    const skipBtn = document.getElementById('iv-skip-btn');

    const correct = checkAnswer(v1Input.value, verb.v1);

    v1Input.classList.add(correct ? 'iv-input-correct' : 'iv-input-wrong');
    v1Input.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;

    if (correct) {
        drillScore++;
        recordAnswer(verb, true);
        feedback.innerHTML = `<span class="iv-fb-correct">Dogru! ${escapeHTML(verb.v1)} - ${escapeHTML(verb.v2)} - ${escapeHTML(verb.v3)}</span>`;
        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
    } else {
        recordAnswer(verb, false);
        feedback.innerHTML = `
            <span class="iv-fb-wrong">Yanlis!</span>
            <span class="iv-fb-answer">Dogru cevap: <strong>${escapeHTML(verb.v1)}</strong> (${escapeHTML(verb.v1)} - ${escapeHTML(verb.v2)} - ${escapeHTML(verb.v3)})</span>
        `;
        if (window.audioManager) window.audioManager.playWrong();
    }

    setTimeout(() => {
        drillIndex++;
        renderDrillQuestion(true);
    }, correct ? 1200 : 2500);
}

function showSkipFeedback(verb, isReverse) {
    const feedback = document.getElementById('iv-drill-feedback');
    const checkBtn = document.getElementById('iv-check-btn');
    const skipBtn = document.getElementById('iv-skip-btn');

    // Disable all inputs
    document.querySelectorAll('.iv-drill-input').forEach(inp => { inp.disabled = true; });
    checkBtn.disabled = true;
    skipBtn.disabled = true;

    recordAnswer(verb, false);
    feedback.innerHTML = `
        <span class="iv-fb-skip">Atlandi.</span>
        <span class="iv-fb-answer">Cevap: <strong>${escapeHTML(verb.v1)} - ${escapeHTML(verb.v2)} - ${escapeHTML(verb.v3)}</strong></span>
    `;
    if (window.audioManager) window.audioManager.playWrong();

    setTimeout(() => {
        drillIndex++;
        renderDrillQuestion(isReverse);
    }, 2000);
}

// ── Drill Results ────────────────────────────────────────────────────────────
function showDrillResults(isReverse) {
    const area = document.getElementById('iv-content-area');
    const pct = drillTotal > 0 ? Math.round((drillScore / drillTotal) * 100) : 0;
    const xpEarned = drillScore * 10;

    let emoji = '';
    let message = '';
    if (pct === 100) { emoji = '🏆'; message = 'Mukemmel! Hepsini bildin!'; }
    else if (pct >= 80) { emoji = '🌟'; message = 'Harika! Neredeyse hepsini bildin!'; }
    else if (pct >= 60) { emoji = '💪'; message = 'Iyi gidiyorsun, pratik yapmaya devam!'; }
    else if (pct >= 40) { emoji = '📖'; message = 'Daha fazla calisma gerekli.'; }
    else { emoji = '🔄'; message = 'Tablodan tekrar et ve yeniden dene!'; }

    // Track activity completion
    if (window.progressManager) {
        window.progressManager.completeActivity(`irregular-verbs-${isReverse ? 'reverse' : 'drill'}-${Date.now()}`);
    }

    area.innerHTML = `
        <div class="iv-results">
            <div class="iv-results-emoji">${emoji}</div>
            <h2>${message}</h2>
            <div class="iv-results-stats">
                <div class="iv-stat">
                    <span class="iv-stat-num">${drillScore}</span>
                    <span class="iv-stat-label">Dogru</span>
                </div>
                <div class="iv-stat">
                    <span class="iv-stat-num">${drillTotal - drillScore}</span>
                    <span class="iv-stat-label">Yanlis</span>
                </div>
                <div class="iv-stat">
                    <span class="iv-stat-num">${pct}%</span>
                    <span class="iv-stat-label">Basari</span>
                </div>
                <div class="iv-stat">
                    <span class="iv-stat-num">+${xpEarned}</span>
                    <span class="iv-stat-label">XP</span>
                </div>
            </div>
            <div class="iv-results-actions">
                <button class="btn" id="iv-retry-btn">Tekrar Oyna</button>
                <button class="btn secondary" id="iv-table-btn">Tabloya Don</button>
            </div>
        </div>
    `;

    if (pct >= 80) {
        showToast(`Harika! %${pct} basari ile tamamladin!`, 'success');
    }

    document.getElementById('iv-retry-btn').addEventListener('click', () => {
        startDrill(isReverse ? 'reverse' : 'forward');
    });
    document.getElementById('iv-table-btn').addEventListener('click', () => {
        currentView = 'table';
        renderShell();
    });
}

// ══════════════════════════════════════════════════════════════════════════════
//  SCOPED STYLES
// ══════════════════════════════════════════════════════════════════════════════
function injectStyles() {
    if (document.getElementById('iv-styles')) return;
    const style = document.createElement('style');
    style.id = 'iv-styles';
    style.textContent = `
        /* ── Module Container ──────────────────────────── */
        .iv-module {
            max-width: 960px;
            margin: 0 auto;
            padding: 0.5rem;
        }
        .iv-header {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }
        .iv-title {
            margin: 0;
            font-size: 1.3rem;
        }
        .iv-nav {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        /* ── Table Controls ────────────────────────────── */
        .iv-table-controls {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1rem;
        }
        .iv-level-filters {
            display: flex;
            gap: 0.4rem;
            flex-wrap: wrap;
        }
        .iv-filter-info {
            font-size: 0.85rem;
            color: var(--text-light, #999);
        }

        /* ── Table ─────────────────────────────────────── */
        .iv-table-wrapper {
            overflow-x: auto;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.15);
        }
        .iv-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }
        .iv-table thead {
            background: var(--primary, #4a90e2);
            color: #fff;
        }
        .iv-table th {
            padding: 0.75rem 0.6rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.8rem;
            white-space: nowrap;
            user-select: none;
        }
        .iv-sortable {
            cursor: pointer;
            transition: background 0.15s;
        }
        .iv-sortable:hover {
            background: rgba(255,255,255,0.1);
        }
        .iv-sort-icon {
            font-size: 0.7rem;
        }
        .iv-table td {
            padding: 0.6rem;
            border-bottom: 1px solid var(--border, rgba(255,255,255,0.08));
        }
        .iv-table tbody tr:hover {
            background: rgba(74, 144, 226, 0.06);
        }
        .iv-cell-v1 {
            font-weight: 600;
            color: var(--primary, #4a90e2);
        }
        .iv-cell-meaning {
            color: var(--text-light, #aaa);
            font-style: italic;
        }

        /* Accuracy badges */
        .iv-acc {
            font-size: 0.75rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 10px;
        }
        .iv-acc-none { color: var(--text-light, #777); }
        .iv-acc-good { background: #27ae60; color: #fff; }
        .iv-acc-mid  { background: #f39c12; color: #fff; }
        .iv-acc-bad  { background: #e74c3c; color: #fff; }

        /* ── Drill Setup ───────────────────────────────── */
        .iv-drill-setup {
            text-align: center;
            padding: 2rem 1rem;
        }
        .iv-drill-setup h4 {
            font-size: 1.15rem;
            margin-bottom: 0.5rem;
        }
        .iv-drill-desc {
            color: var(--text-light, #aaa);
            margin-bottom: 0.5rem;
        }
        .iv-drill-batch-info {
            font-size: 0.85rem;
            color: var(--text-light, #999);
            margin-bottom: 1rem;
        }

        /* ── Drill Card ────────────────────────────────── */
        .iv-drill-card {
            max-width: 560px;
            margin: 0 auto;
            padding: 1.5rem;
            border-radius: 16px;
            background: var(--card-bg, rgba(255,255,255,0.04));
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .iv-drill-progress {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            color: var(--text-light, #999);
            margin-bottom: 1rem;
        }
        .iv-drill-score-inline {
            font-weight: 600;
            color: #27ae60;
        }
        .iv-drill-prompt {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-bottom: 0.5rem;
        }
        .iv-drill-label {
            font-size: 0.85rem;
            color: var(--text-light, #999);
        }
        .iv-drill-word {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--primary, #4a90e2);
        }
        .iv-drill-hint {
            font-size: 0.9rem;
            color: var(--text-light, #aaa);
            margin-bottom: 1.25rem;
        }
        .iv-drill-inputs {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }
        .iv-input-group {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        .iv-input-group label {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-light, #bbb);
        }
        .iv-drill-input {
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
        .iv-drill-input:focus {
            outline: none;
            border-color: var(--primary, #4a90e2);
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
        }
        .iv-input-correct {
            border-color: #27ae60 !important;
            background: rgba(39, 174, 96, 0.1) !important;
            box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.2) !important;
        }
        .iv-input-wrong {
            border-color: #e74c3c !important;
            background: rgba(231, 76, 60, 0.1) !important;
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2) !important;
        }
        .iv-drill-actions {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 1rem;
        }
        .iv-drill-actions .btn {
            flex: 1;
        }

        /* ── Drill Feedback ────────────────────────────── */
        .iv-drill-feedback {
            min-height: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.95rem;
        }
        .iv-fb-correct {
            color: #27ae60;
            font-weight: 700;
        }
        .iv-fb-wrong {
            color: #e74c3c;
            font-weight: 700;
        }
        .iv-fb-skip {
            color: #f39c12;
            font-weight: 600;
        }
        .iv-fb-answer {
            color: var(--text-light, #bbb);
            font-size: 0.85rem;
        }

        /* ── Results ───────────────────────────────────── */
        .iv-results {
            text-align: center;
            padding: 2rem 1rem;
        }
        .iv-results-emoji {
            font-size: 3rem;
            margin-bottom: 0.75rem;
        }
        .iv-results h2 {
            margin-bottom: 1.5rem;
        }
        .iv-results-stats {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }
        .iv-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
        }
        .iv-stat-num {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--primary, #4a90e2);
        }
        .iv-stat-label {
            font-size: 0.8rem;
            color: var(--text-light, #999);
        }
        .iv-results-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* ── Responsive ────────────────────────────────── */
        @media (max-width: 600px) {
            .iv-table { font-size: 0.78rem; }
            .iv-table th, .iv-table td { padding: 0.45rem 0.35rem; }
            .iv-drill-word { font-size: 1.3rem; }
            .iv-drill-card { padding: 1rem; }
            .iv-results-stats { gap: 1rem; }
            .iv-stat-num { font-size: 1.3rem; }
        }
    `;
    document.head.appendChild(style);
}
