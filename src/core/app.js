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
import { initPronunciation } from "../components/pronunciation.js";
import { initWordChain } from "../components/word-chain.js";
import { initWordFamilies } from "../components/word-families.js";
import { initVerbConjugation } from "../components/verb-conjugation.js";
import { initCrossword, cleanupCrossword } from "../components/crossword.js";
import { initHangman, cleanupHangman } from "../components/hangman.js";
import { initMemoryCards, cleanupMemoryCards } from "../components/memory-cards.js";
import { initSpeedQuiz, cleanupSpeedQuiz } from "../components/speed-quiz.js";
import { initDailyDialogue, cleanupDailyDialogue } from "../components/daily-dialogue.js";
import { initSentenceBuilder, cleanupSentenceBuilder } from "../components/sentence-builder.js";
import { initChatSimulator, cleanupChatSimulator } from "../components/chat-simulator.js";
import { initSynonymsAntonyms, cleanupSynonymsAntonyms } from "../components/synonyms-antonyms.js";
import { initCollocations, cleanupCollocations } from "../components/collocations.js";
import { initPrefixesSuffixes, cleanupPrefixesSuffixes } from "../components/prefixes-suffixes.js";
import { initMiniQuiz, cleanupMiniQuiz } from "../components/mini-quiz.js";
import { initDailyChallenge, cleanupDailyChallenge } from "../components/daily-challenge.js";
import { initLeaderboard, cleanupLeaderboard } from "../components/leaderboard.js";
import { initBookmarks, cleanupBookmarks } from "../components/bookmarks.js";
import { initNotes, cleanupNotes } from "../components/notes.js";
import { initExportProgress, cleanupExportProgress } from "../components/export-progress.js";
import { initWordScramble, cleanupWordScramble } from "../components/word-scramble.js";
import { initWordSearch, cleanupWordSearch } from "../components/word-search.js";
import { initTrueFalse, cleanupTrueFalse } from "../components/true-false.js";
import { initEmojiQuiz, cleanupEmojiQuiz } from "../components/emoji-quiz.js";
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
const navLinks        = document.querySelectorAll(".nav-links > li, .nav-dropdown li");
const hamburger       = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".nav-links");
const themeToggle     = document.getElementById("theme-toggle");

// ── Init ────────────────────────────────────────────────────────────────────
async function init() {
    await progressManager.init();
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
    cleanupSpeedQuiz();
    cleanupWordScramble();
    cleanupWordSearch();
    cleanupTrueFalse();
    cleanupEmojiQuiz();

    _currentView = view;
    window.location.hash = view;

    navLinks.forEach(l => l.classList.remove("active"));
    const activeLink = document.querySelector(`[data-target="${view}"]`);
    if (activeLink) activeLink.classList.add("active");

    switch (view) {
        case "vocabulary":        renderVocabulary();       break;
        case "listening":         renderListening();        break;
        case "grammar":           renderGrammar();          break;
        case "reading":           renderReading();          break;
        case "dictionary":        initDictionary();         break;
        case "irregular-verbs":   initIrregularVerbs();     break;
        case "phrasal-verbs":     initPhrasalVerbs();       break;
        case "idioms":            initIdiomsModule();       break;
        case "writing":           initWritingPractice();    break;
        case "pronunciation":     initPronunciation();      break;
        case "word-chain":        initWordChain();          break;
        case "word-families":     initWordFamilies();       break;
        case "verb-conjugation":  initVerbConjugation();    break;
        case "statistics":        initStatistics();         break;
        case "crossword":         initCrossword();          break;
        case "hangman":           initHangman();            break;
        case "memory-cards":      initMemoryCards();        break;
        case "speed-quiz":        initSpeedQuiz();          break;
        case "daily-dialogue":    initDailyDialogue();      break;
        case "sentence-builder":  initSentenceBuilder();    break;
        case "chat-simulator":    initChatSimulator();      break;
        case "synonyms-antonyms": initSynonymsAntonyms();   break;
        case "collocations":      initCollocations();       break;
        case "prefixes-suffixes": initPrefixesSuffixes();   break;
        case "mini-quiz":         initMiniQuiz();           break;
        case "daily-challenge":   initDailyChallenge();     break;
        case "leaderboard":       initLeaderboard();        break;
        case "bookmarks":         initBookmarks();          break;
        case "notes":             initNotes();              break;
        case "export-progress":   initExportProgress();     break;
        case "word-scramble":     initWordScramble();       break;
        case "word-search":       initWordSearch();         break;
        case "true-false":        initTrueFalse();          break;
        case "emoji-quiz":        initEmojiQuiz();          break;
        default:                  renderDashboard();        break;
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
        if (link.dataset.target) {
            link.addEventListener("click", (e) => {
                e.stopPropagation();
                navigateTo(link.dataset.target);
                // Mobilde menüyü kapat
                navLinksContainer.classList.remove("active");
                // Dropdown'u kapat
                document.querySelectorAll('.nav-group.open').forEach(g => g.classList.remove('open'));
            });
        }
    });

    // Dropdown toggle (mobilde)
    document.querySelectorAll('.nav-group').forEach(group => {
        const title = group.querySelector('.nav-group-title');
        if (title) {
            title.addEventListener('click', (e) => {
                e.stopPropagation();
                // Diğerlerini kapat
                document.querySelectorAll('.nav-group.open').forEach(g => {
                    if (g !== group) g.classList.remove('open');
                });
                group.classList.toggle('open');
            });
        }
    });

    // Sayfa tıklamada dropdown kapat
    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-group.open').forEach(g => g.classList.remove('open'));
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

        <!-- Kelime Kategorisi -->
        <div class="category-section">
            <h2 class="category-title category-vocab">📚 Kelime</h2>
            <div class="dashboard-grid">
                <div class="card card-vocab" id="dash-vocab">
                    <div class="card-icon">🧠</div>
                    <h3>Kelime Bilgisi</h3>
                    <p>Kartlar, Bulmacalar ve Eşleştirme</p>
                </div>
                <div class="card card-vocab" id="dash-word-chain">
                    <div class="card-icon">⛓️</div>
                    <h3>Kelime Zinciri</h3>
                    <p>Son harfle kelime bul</p>
                </div>
                <div class="card card-vocab" id="dash-word-families">
                    <div class="card-icon">🌳</div>
                    <h3>Kelime Aileleri</h3>
                    <p>Kök ve türetilmiş kelimeler</p>
                </div>
                <div class="card card-vocab" id="dash-synonyms-antonyms">
                    <div class="card-icon">🔄</div>
                    <h3>Eş & Zıt Anlam</h3>
                    <p>Eş ve zıt anlamlı kelimeler</p>
                </div>
                <div class="card card-vocab" id="dash-collocations">
                    <div class="card-icon">🤝</div>
                    <h3>Collocations</h3>
                    <p>make/do/take/get kalıpları</p>
                </div>
                <div class="card card-vocab" id="dash-prefixes-suffixes">
                    <div class="card-icon">🔠</div>
                    <h3>Ön & Son Ekler</h3>
                    <p>Prefix ve suffix öğren</p>
                </div>
            </div>
        </div>

        <!-- Dil Bilgisi Kategorisi -->
        <div class="category-section">
            <h2 class="category-title category-grammar">✍️ Dil Bilgisi</h2>
            <div class="dashboard-grid">
                <div class="card card-grammar" id="dash-grammar">
                    <div class="card-icon">📝</div>
                    <h3>Gramer</h3>
                    <p>Dersler ve Testler</p>
                </div>
                <div class="card card-grammar" id="dash-irregular">
                    <div class="card-icon">🔀</div>
                    <h3>Düzensiz Fiiller</h3>
                    <p>V1-V2-V3 tablo ve drill</p>
                </div>
                <div class="card card-grammar" id="dash-phrasal">
                    <div class="card-icon">🔗</div>
                    <h3>Phrasal Verbs</h3>
                    <p>Deyimsel fiiller ve testler</p>
                </div>
                <div class="card card-grammar" id="dash-verb-conjugation">
                    <div class="card-icon">📐</div>
                    <h3>Fiil Çekim</h3>
                    <p>Tense ve çekim egzersizleri</p>
                </div>
                <div class="card card-grammar" id="dash-idioms">
                    <div class="card-icon">💬</div>
                    <h3>Deyimler</h3>
                    <p>İngilizce deyimler ve kalıplar</p>
                </div>
            </div>
        </div>

        <!-- Beceriler Kategorisi -->
        <div class="category-section">
            <h2 class="category-title category-skills">🎯 Beceriler</h2>
            <div class="dashboard-grid">
                <div class="card card-skills" id="dash-listening">
                    <div class="card-icon">🎧</div>
                    <h3>Duyduğunu Anlama</h3>
                    <p>Videolar ve Diyaloglar</p>
                </div>
                <div class="card card-skills" id="dash-reading">
                    <div class="card-icon">📖</div>
                    <h3>Okuma</h3>
                    <p>Metin oku, kelimeleri keşfet</p>
                </div>
                <div class="card card-skills" id="dash-writing">
                    <div class="card-icon">✏️</div>
                    <h3>Yazma Pratiği</h3>
                    <p>Paragraf ve cümle yazma</p>
                </div>
                <div class="card card-skills" id="dash-pronunciation">
                    <div class="card-icon">🎤</div>
                    <h3>Telaffuz</h3>
                    <p>Konuşarak pratik yap</p>
                </div>
                <div class="card card-skills" id="dash-daily-dialogue">
                    <div class="card-icon">💬</div>
                    <h3>Günlük Diyalog</h3>
                    <p>Senaryo bazlı konuşma</p>
                </div>
                <div class="card card-skills" id="dash-sentence-builder">
                    <div class="card-icon">🔤</div>
                    <h3>Cümle Kurma</h3>
                    <p>Kelimeleri sırala, cümle kur</p>
                </div>
                <div class="card card-skills" id="dash-chat-simulator">
                    <div class="card-icon">📱</div>
                    <h3>Sohbet Simülatörü</h3>
                    <p>WhatsApp tarzı sohbet</p>
                </div>
            </div>
        </div>

        <!-- Oyunlar -->
        <div class="category-section">
            <h2 class="category-title category-games">🎮 Oyunlar</h2>
            <div class="dashboard-grid">
                <div class="card card-games" id="dash-crossword">
                    <div class="card-icon">📰</div>
                    <h3>Bulmaca</h3>
                    <p>Türkçe ipucu → İngilizce cevap</p>
                </div>
                <div class="card card-games" id="dash-hangman">
                    <div class="card-icon">🪢</div>
                    <h3>Adam Asmaca</h3>
                    <p>Harfleri tahmin et</p>
                </div>
                <div class="card card-games" id="dash-memory-cards">
                    <div class="card-icon">🃏</div>
                    <h3>Hafıza Kartları</h3>
                    <p>Eşleştirme oyunu</p>
                </div>
                <div class="card card-games" id="dash-speed-quiz">
                    <div class="card-icon">⚡</div>
                    <h3>Hız Testi</h3>
                    <p>Zamanlı 4 şıklı quiz</p>
                </div>
                <div class="card card-games" id="dash-word-scramble">
                    <div class="card-icon">🔀</div>
                    <h3>Harf Karıştırma</h3>
                    <p>Karışık harfleri düzelt</p>
                </div>
                <div class="card card-games" id="dash-word-search">
                    <div class="card-icon">🔍</div>
                    <h3>Kelime Avı</h3>
                    <p>Izgarada gizli kelimeleri bul</p>
                </div>
                <div class="card card-games" id="dash-true-false">
                    <div class="card-icon">✅</div>
                    <h3>Doğru / Yanlış</h3>
                    <p>Çeviri doğru mu yanlış mı?</p>
                </div>
                <div class="card card-games" id="dash-emoji-quiz">
                    <div class="card-icon">😀</div>
                    <h3>Emoji Quiz</h3>
                    <p>Emoji'den kelime tahmin et</p>
                </div>
            </div>
        </div>

        <!-- Sınav & Test -->
        <div class="category-section">
            <h2 class="category-title category-exams">📋 Sınav & Test</h2>
            <div class="dashboard-grid">
                <div class="card card-exams" id="dash-mini-quiz">
                    <div class="card-icon">📝</div>
                    <h3>Mini Quiz</h3>
                    <p>Karışık soru tipleri</p>
                </div>
                <div class="card card-exams" id="dash-daily-challenge">
                    <div class="card-icon">📅</div>
                    <h3>Günün Sorusu</h3>
                    <p>Günlük 5 soru, seri takibi</p>
                </div>
                <div class="card card-exams" id="dash-leaderboard">
                    <div class="card-icon">🏆</div>
                    <h3>Skor Tablosu</h3>
                    <p>Genel sıralama</p>
                </div>
            </div>
        </div>

        <!-- Araçlar -->
        <div class="category-section">
            <h2 class="category-title category-tools">🔧 Araçlar</h2>
            <div class="dashboard-grid">
                <div class="card card-tools" id="dash-dictionary">
                    <div class="card-icon">📖</div>
                    <h3>Sözlük</h3>
                    <p>Kelime ara ve tanım bul</p>
                </div>
                <div class="card card-tools" id="dash-statistics">
                    <div class="card-icon">📊</div>
                    <h3>İstatistikler</h3>
                    <p>Detaylı ilerleme analizi</p>
                </div>
                <div class="card card-tools" id="dash-bookmarks">
                    <div class="card-icon">⭐</div>
                    <h3>Favorilerim</h3>
                    <p>Favori kelimeleriniz</p>
                </div>
                <div class="card card-tools" id="dash-notes">
                    <div class="card-icon">📝</div>
                    <h3>Notlarım</h3>
                    <p>Kişisel not defteri</p>
                </div>
                <div class="card card-tools" id="dash-export-progress">
                    <div class="card-icon">📤</div>
                    <h3>İlerleme Aktar</h3>
                    <p>CSV/JSON dışa aktarma</p>
                </div>
            </div>
        </div>

        ${renderWordOfTheDay()}
        ${renderWeakWordsPanel()}
        ${renderBadgesPanel()}
        ${renderWeeklyChart()}
        ${renderStreakHeatmap()}
    `;

    document.getElementById('dash-vocab').addEventListener('click',           () => navigateTo('vocabulary'));
    document.getElementById('dash-word-chain').addEventListener('click',      () => navigateTo('word-chain'));
    document.getElementById('dash-word-families').addEventListener('click',   () => navigateTo('word-families'));
    document.getElementById('dash-grammar').addEventListener('click',         () => navigateTo('grammar'));
    document.getElementById('dash-irregular').addEventListener('click',       () => navigateTo('irregular-verbs'));
    document.getElementById('dash-phrasal').addEventListener('click',         () => navigateTo('phrasal-verbs'));
    document.getElementById('dash-verb-conjugation').addEventListener('click',() => navigateTo('verb-conjugation'));
    document.getElementById('dash-idioms').addEventListener('click',          () => navigateTo('idioms'));
    document.getElementById('dash-listening').addEventListener('click',       () => navigateTo('listening'));
    document.getElementById('dash-reading').addEventListener('click',         () => navigateTo('reading'));
    document.getElementById('dash-writing').addEventListener('click',         () => navigateTo('writing'));
    document.getElementById('dash-pronunciation').addEventListener('click',   () => navigateTo('pronunciation'));
    document.getElementById('dash-synonyms-antonyms').addEventListener('click', () => navigateTo('synonyms-antonyms'));
    document.getElementById('dash-collocations').addEventListener('click',    () => navigateTo('collocations'));
    document.getElementById('dash-prefixes-suffixes').addEventListener('click',() => navigateTo('prefixes-suffixes'));
    document.getElementById('dash-daily-dialogue').addEventListener('click',  () => navigateTo('daily-dialogue'));
    document.getElementById('dash-sentence-builder').addEventListener('click',() => navigateTo('sentence-builder'));
    document.getElementById('dash-chat-simulator').addEventListener('click',  () => navigateTo('chat-simulator'));
    document.getElementById('dash-crossword').addEventListener('click',       () => navigateTo('crossword'));
    document.getElementById('dash-hangman').addEventListener('click',         () => navigateTo('hangman'));
    document.getElementById('dash-memory-cards').addEventListener('click',    () => navigateTo('memory-cards'));
    document.getElementById('dash-speed-quiz').addEventListener('click',      () => navigateTo('speed-quiz'));
    document.getElementById('dash-word-scramble').addEventListener('click',  () => navigateTo('word-scramble'));
    document.getElementById('dash-word-search').addEventListener('click',    () => navigateTo('word-search'));
    document.getElementById('dash-true-false').addEventListener('click',     () => navigateTo('true-false'));
    document.getElementById('dash-emoji-quiz').addEventListener('click',     () => navigateTo('emoji-quiz'));
    document.getElementById('dash-mini-quiz').addEventListener('click',       () => navigateTo('mini-quiz'));
    document.getElementById('dash-daily-challenge').addEventListener('click', () => navigateTo('daily-challenge'));
    document.getElementById('dash-leaderboard').addEventListener('click',     () => navigateTo('leaderboard'));
    document.getElementById('dash-dictionary').addEventListener('click',      () => navigateTo('dictionary'));
    document.getElementById('dash-statistics').addEventListener('click',      () => navigateTo('statistics'));
    document.getElementById('dash-bookmarks').addEventListener('click',       () => navigateTo('bookmarks'));
    document.getElementById('dash-notes').addEventListener('click',           () => navigateTo('notes'));
    document.getElementById('dash-export-progress').addEventListener('click', () => navigateTo('export-progress'));
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
