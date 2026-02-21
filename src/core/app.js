import { initFlashcards, initMatchingGame, initPuzzleGame, initVocabSearch } from "../components/vocab.js";
import { initDictionary } from "../components/dictionary.js";
import { initTimedChallenge, cleanupChallenge } from "../components/challenge.js";
import { initSentenceOrder } from "../components/sentence-order.js";
import { initListeningModule } from "../components/listening.js";
import { initGrammarModule } from "../components/grammar.js";
import { initReadingModule } from "../components/reading.js";
import { initIrregularVerbs } from "../components/irregular-verbs.js";
import { initPhrasalVerbs } from "../components/phrasal-verbs.js";
import { initIdiomsModule } from "../components/idioms.js";
import { initWritingPractice } from "../components/writing.js";
import { initStatistics } from "../components/statistics.js";
import { renderWordOfTheDay, setupWordOfTheDayEvents } from "../features/word-of-the-day.js";
import { progressManager, setAchievementManager } from "./progress.js";
import { renderWeeklyChart, renderStreakHeatmap } from "../features/progress-chart.js";
import { initAuth, isLoggedIn, showAuthModal } from "./auth.js";
import { achievementManager, achievements } from "../features/achievements.js";
import { showXPGain, celebrateLevelUp } from "../features/animations.js";
import { errorAnalytics } from "../features/analytics.js";
import { audioManager } from "../features/audio.js";
import { showToast } from '../features/toast.js';
import { vocabData } from "./data.js";

// Alt modüllerin window üzerinden erişebilmesi için global yap
// @ts-ignore — custom property on window
window.progressManager = progressManager;
window.showXPGain     = showXPGain;
window.celebrateLevelUp = celebrateLevelUp;
window.errorAnalytics = errorAnalytics;
window.audioManager   = audioManager;

setAchievementManager(achievementManager);

// DOM
const appContainer    = document.getElementById("app");
const navLinks        = document.querySelectorAll(".nav-links li");
const hamburger       = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".nav-links");
const themeToggle     = document.getElementById("theme-toggle");

// ── Init ────────────────────────────────────────────────────────────────────
function init() {
    progressManager.init();
    setupNavigation();
    setupUIControls();
    setupHashRouter();          // MED-1: hash router
    navigateTo(_currentView);   // İlk render
    initAuth();                 // Auth durumunu kontrol et ve navbar'ı güncelle
}

// ── Hash Router (MED-1) ─────────────────────────────────────────────────────
let _currentView = "dashboard";

function navigateTo(view) {
    // Sayfa değişiminde aktif modülleri temizle
    cleanupChallenge();

    _currentView = view;
    window.location.hash = view;

    navLinks.forEach(l => l.classList.remove("active"));
    const activeLink = document.querySelector(`[data-target="${view}"]`);
    if (activeLink) activeLink.classList.add("active");

    switch (view) {
        case "vocabulary":      renderVocabulary();     break;
        case "listening":       renderListening();      break;
        case "grammar":         renderGrammar();        break;
        case "reading":         renderReading();        break;
        case "dictionary":      initDictionary();       break;
        case "irregular-verbs": initIrregularVerbs();   break;
        case "phrasal-verbs":   initPhrasalVerbs();     break;
        case "idioms":          initIdiomsModule();     break;
        case "writing":         initWritingPractice();  break;
        case "statistics":      initStatistics();       break;
        default:                renderDashboard();      break;
    }
}

function setupHashRouter() {
    // Sayfa yenilenince hash'ten geri yükle
    const hash = window.location.hash.replace("#", "") || "dashboard";
    _currentView = hash;

    window.addEventListener("hashchange", () => {
        const view = window.location.hash.replace("#", "") || "dashboard";
        if (view !== _currentView) navigateTo(view);
    });
}

// ── UI Controls ─────────────────────────────────────────────────────────────
function setupUIControls() {
    // Hamburger
    hamburger.addEventListener("click", () => navLinksContainer.classList.toggle("active"));
    navLinks.forEach(l => l.addEventListener("click", () => navLinksContainer.classList.remove("active")));

    // Dark mode
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    // MED-3: Ses toggle butonu — navbar'a ekle
    const navControls = document.querySelector(".nav-controls");
    const soundBtn = document.createElement("button");
    soundBtn.id = "sound-toggle";
    soundBtn.className = "btn-icon";
    soundBtn.setAttribute("aria-label", "Sesi Aç/Kapat");
    soundBtn.textContent = "🔊";
    soundBtn.title = "Sesi Aç/Kapat";
    navControls.insertBefore(soundBtn, themeToggle);

    soundBtn.addEventListener("click", () => {
        const isOn = audioManager.toggle();
        soundBtn.textContent = isOn ? "🔊" : "🔇";
        localStorage.setItem("sound", isOn ? "on" : "off");
    });
    // Kayıtlı tercih
    if (localStorage.getItem("sound") === "off") {
        audioManager.toggle();
        soundBtn.textContent = "🔇";
    }
}

// ── Navigation ───────────────────────────────────────────────────────────────
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener("click", () => navigateTo(link.dataset.target));
    });
}

// ── Views ────────────────────────────────────────────────────────────────────
function renderDashboard() {
    const stats = progressManager.getStats();
    const xpInLevel = stats.xp % 100;

    appContainer.innerHTML = `
        <div class="dashboard-header">
            <div>
                <h1>Hoş Geldiniz! 🎓</h1>
                <p>İngilizce öğrenme yolculuğuna devam et.</p>
            </div>
            <div class="stats-bar">
                <span class="stat-item">⭐ ${stats.xp} XP</span>
                <span class="stat-item">🏆 Seviye ${stats.level}</span>
                <span class="stat-item streak-badge">🔥 ${stats.streak} Gün</span>
                <button id="share-progress-btn" class="btn secondary small" style="margin-left:1rem;">📤 Paylaş</button>
            </div>
            <div class="xp-progress-bar-wrap" style="margin-top:0.75rem;">
                <span class="xp-bar-label" id="xp-bar-label">${xpInLevel}/100 XP</span>
                <div class="xp-bar-track">
                    <div class="xp-bar-fill" id="xp-bar-fill" style="width:${xpInLevel}%"></div>
                </div>
                <span class="xp-bar-label">Sonraki Seviye</span>
            </div>
        </div>

        <div class="dashboard-grid">
            <div class="card" id="dash-vocab">
                <div class="card-icon">🧠</div>
                <h3>Kelime Bilgisi</h3>
                <p>Kartlar, Bulmacalar ve Eşleştirme</p>
            </div>
            <div class="card" id="dash-listening">
                <div class="card-icon">🎧</div>
                <h3>Duyduğunu Anlama</h3>
                <p>Videolar ve Diyaloglar</p>
            </div>
            <div class="card" id="dash-grammar">
                <div class="card-icon">✍️</div>
                <h3>Gramer</h3>
                <p>Dersler ve Testler</p>
            </div>
            <div class="card" id="dash-reading">
                <div class="card-icon">📖</div>
                <h3>Okuma</h3>
                <p>Metin oku, kelimeleri keşfet</p>
            </div>
            <div class="card" id="dash-irregular">
                <div class="card-icon">🔀</div>
                <h3>Düzensiz Fiiller</h3>
                <p>V1-V2-V3 tablo ve drill</p>
            </div>
            <div class="card" id="dash-phrasal">
                <div class="card-icon">🔗</div>
                <h3>Phrasal Verbs</h3>
                <p>Deyimsel fiiller ve testler</p>
            </div>
            <div class="card" id="dash-idioms">
                <div class="card-icon">💬</div>
                <h3>Deyimler</h3>
                <p>İngilizce deyimler ve kalıplar</p>
            </div>
            <div class="card" id="dash-writing">
                <div class="card-icon">✏️</div>
                <h3>Yazma Pratiği</h3>
                <p>Paragraf ve cümle yazma</p>
            </div>
            <div class="card" id="dash-statistics">
                <div class="card-icon">📊</div>
                <h3>İstatistikler</h3>
                <p>Detaylı ilerleme analizi</p>
            </div>
        </div>

        ${renderWordOfTheDay()}
        ${renderWeakWordsPanel()}
        ${renderBadgesPanel()}
        ${renderWeeklyChart()}
        ${renderStreakHeatmap()}
    `;

    document.getElementById('dash-vocab').addEventListener('click',     () => navigateTo('vocabulary'));
    document.getElementById('dash-listening').addEventListener('click', () => navigateTo('listening'));
    document.getElementById('dash-grammar').addEventListener('click',   () => navigateTo('grammar'));
    document.getElementById('dash-reading').addEventListener('click',   () => navigateTo('reading'));
    document.getElementById('dash-irregular').addEventListener('click', () => navigateTo('irregular-verbs'));
    document.getElementById('dash-phrasal').addEventListener('click',   () => navigateTo('phrasal-verbs'));
    document.getElementById('dash-idioms').addEventListener('click',    () => navigateTo('idioms'));
    document.getElementById('dash-writing').addEventListener('click',   () => navigateTo('writing'));
    document.getElementById('dash-statistics').addEventListener('click',() => navigateTo('statistics'));
    document.getElementById('share-progress-btn').addEventListener('click', shareProgress);
    setupWordOfTheDayEvents();
}

// HIGH-5: Hatalı kelimeler paneli
function renderWeakWordsPanel() {
    const weakIds = errorAnalytics.getWeakWords(5);
    if (weakIds.length === 0) return '';

    const items = weakIds.map(({ id, mistakes }) => {
        const word = vocabData.find(w => w.id === id);
        if (!word) return '';
        return `
            <div class="weak-word-item">
                <span class="weak-word-name">${word.word}</span>
                <span class="weak-word-meaning">${word.meaning}</span>
                <span class="weak-word-count">${mistakes}x hata</span>
            </div>
        `;
    }).join('');

    return `
        <div class="weak-words-panel">
            <h3>⚠️ Tekrar Edilmesi Gereken Kelimeler</h3>
            ${items}
        </div>
    `;
}

// MED-2: Rozet galerisi
function renderBadgesPanel() {
    const earnedIds = achievementManager.getEarnedBadges().map(a => a.id);
    const { earned, total } = achievementManager.getProgress();

    const badgeItems = achievements.map(ach => {
        const isEarned = earnedIds.includes(ach.id);
        return `
            <div class="badge-item ${isEarned ? 'earned' : 'locked'}" title="${ach.description}">
                <span class="badge-item-icon">${ach.icon}</span>
                <span class="badge-item-name">${ach.title}</span>
            </div>
        `;
    }).join('');

    return `
        <div class="badges-panel">
            <h3>🏅 Rozetler (${earned}/${total})</h3>
            <div class="badges-grid">${badgeItems}</div>
        </div>
    `;
}

function renderVocabulary() {
    appContainer.innerHTML = `
        <h2>🧠 Kelime Bilgisi</h2>
        <div id="vocab-content">
            <div class="dashboard-grid">
                <div class="card" id="btn-flashcards">
                    <div class="card-icon">🃏</div>
                    <h3>Kartlar (Flashcards)</h3>
                    <p>Kelime hazineni geliştir.</p>
                </div>
                <div class="card" id="btn-matching">
                    <div class="card-icon">🧩</div>
                    <h3>Eşleştirme</h3>
                    <p>Kelimeleri anlamlarıyla eşleştir.</p>
                </div>
                <div class="card" id="btn-puzzle">
                    <div class="card-icon">🔍</div>
                    <h3>Bulmaca</h3>
                    <p>Eğlenceli kelime bulmacaları.</p>
                </div>
                <div class="card" id="btn-search">
                    <div class="card-icon">🔎</div>
                    <h3>Kelime Listesi</h3>
                    <p>Tüm kelimelere göz at ve ara.</p>
                </div>
                <div class="card" id="btn-challenge">
                    <div class="card-icon">⏱️</div>
                    <h3>60s Hız Testi</h3>
                    <p>60 saniyede ne kadar doğru?</p>
                </div>
                <div class="card" id="btn-sentence">
                    <div class="card-icon">📝</div>
                    <h3>Cümle Sıralama</h3>
                    <p>Kelimeleri sürükle, cümleyi oluştur.</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('btn-flashcards').addEventListener('click', initFlashcards);
    document.getElementById('btn-matching').addEventListener('click', initMatchingGame);
    document.getElementById('btn-puzzle').addEventListener('click', initPuzzleGame);
    document.getElementById('btn-search').addEventListener('click', initVocabSearch);
    document.getElementById('btn-challenge').addEventListener('click', initTimedChallenge);
    document.getElementById('btn-sentence').addEventListener('click', initSentenceOrder);
}

function renderListening() {
    initListeningModule();
}

function renderGrammar() {
    initGrammarModule();
}

function renderReading() {
    initReadingModule();
}

// ── Share Progress ───────────────────────────────────────────────────────────
function shareProgress() {
    const stats = progressManager.getStats();
    const text = `🎓 English Master İlerlememiz!\n\n⭐ ${stats.xp} XP kazandım\n🏆 Seviye ${stats.level}\n🔥 ${stats.streak} günlük seri\n\nSen de katıl ve İngilizce öğren! 🚀`;
    if (navigator.share) {
        navigator.share({ title: 'English Master - İlerleme', text }).catch(() => copyToClipboard(text));
    } else {
        copyToClipboard(text);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('İlerlemeniz kopyalandı! Sosyal medyada paylaşabilirsiniz.', 'success');
    }).catch(() => {
        showToast('Kopyalama başarısız oldu.', 'warning');
    });
}

// ── Start ────────────────────────────────────────────────────────────────────
init();
