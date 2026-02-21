/**
 * Pronunciation Evaluation Module — Telaffuz Degerlendirme
 * Web Speech Recognition API ile kullanicinin telaffuzunu dinler,
 * dogru kelimeyle karsilastirir ve geri bildirim verir.
 */

import { vocabData } from '../core/data.js';
import { getCEFRBadgeHTML, fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Durum degiskenleri ──────────────────────────────────────
let activeTab = 'practice';        // 'practice' | 'drill'
let activeLevel = 'all';           // 'all' | 'A1' | 'A2' | 'B1' | 'B2'
let activeType = 'all';            // 'all' | 'noun' | 'verb' | 'adjective'
let currentWord = null;
let recognition = null;
let isListening = false;

// Drill state
let drillWords = [];
let drillIndex = 0;
let drillCorrect = 0;
let drillTotal = 0;
const DRILL_COUNT = 10;

// ── SpeechRecognition uyumluluk kontrolu ────────────────────
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ── CSS Animasyon Stilleri (bir kez enjekte edilir) ─────────
let stylesInjected = false;

function injectStyles() {
    if (stylesInjected) return;
    stylesInjected = true;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes pron-pulse-green {
            0%   { box-shadow: 0 0 0 0 rgba(39, 174, 96, 0.5); }
            70%  { box-shadow: 0 0 0 16px rgba(39, 174, 96, 0); }
            100% { box-shadow: 0 0 0 0 rgba(39, 174, 96, 0); }
        }
        @keyframes pron-shake {
            0%, 100% { transform: translateX(0); }
            20%      { transform: translateX(-8px); }
            40%      { transform: translateX(8px); }
            60%      { transform: translateX(-6px); }
            80%      { transform: translateX(6px); }
        }
        @keyframes pron-mic-pulse {
            0%   { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.5); }
            50%  { transform: scale(1.08); box-shadow: 0 0 0 12px rgba(231, 76, 60, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
        }
        .pron-correct-pulse {
            animation: pron-pulse-green 0.6s ease-out;
        }
        .pron-wrong-shake {
            animation: pron-shake 0.5s ease-out;
        }
        .pron-mic-listening {
            animation: pron-mic-pulse 1s infinite;
            background: #e74c3c !important;
            color: #fff !important;
        }
    `;
    document.head.appendChild(style);
}

// ── Ana giris noktasi ───────────────────────────────────────
export function initPronunciation() {
    injectStyles();
    render();
}

// ── Filtrelenmis kelime havuzu ──────────────────────────────
function getFilteredWords() {
    return vocabData.filter(w => {
        const matchLevel = activeLevel === 'all' || w.level === activeLevel;
        const matchType = activeType === 'all' || w.type === activeType;
        return matchLevel && matchType;
    });
}

// ── Rastgele kelime sec ─────────────────────────────────────
function pickRandomWord() {
    const pool = getFilteredWords();
    if (pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)];
}

// ── SpeechSynthesis ile kelimeyi seslendir ──────────────────
function speakWord(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && v.localService) ||
                    voices.find(v => v.lang.startsWith('en')) || null;
    if (enVoice) utterance.voice = enVoice;

    window.speechSynthesis.speak(utterance);
}

// ── SpeechRecognition baslat ────────────────────────────────
function startRecognition(onResult) {
    if (!SpeechRecognition) return;

    // Onceki dinlemeyi durdur
    stopRecognition();

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.continuous = false;

    recognition.onstart = () => {
        isListening = true;
        const micBtn = document.getElementById('pron-mic-btn');
        if (micBtn) micBtn.classList.add('pron-mic-listening');
    };

    recognition.onend = () => {
        isListening = false;
        const micBtn = document.getElementById('pron-mic-btn');
        if (micBtn) micBtn.classList.remove('pron-mic-listening');
    };

    recognition.onerror = (e) => {
        isListening = false;
        const micBtn = document.getElementById('pron-mic-btn');
        if (micBtn) micBtn.classList.remove('pron-mic-listening');

        if (e.error === 'no-speech') {
            showToast('Ses algilanamadi. Tekrar deneyin.', 'warning');
        } else if (e.error === 'not-allowed') {
            showToast('Mikrofon erisimi reddedildi. Tarayici ayarlarinizi kontrol edin.', 'error');
        }
    };

    recognition.onresult = (event) => {
        const results = [];
        for (let i = 0; i < event.results[0].length; i++) {
            results.push(event.results[0][i].transcript.toLowerCase().trim());
        }
        onResult(results);
    };

    recognition.start();
}

function stopRecognition() {
    if (recognition) {
        try { recognition.abort(); } catch (e) { /* ignore */ }
        recognition = null;
    }
    isListening = false;
}

// ── Karsilastirma fonksiyonu ────────────────────────────────
function checkPronunciation(recognizedTexts, targetWord) {
    const target = targetWord.toLowerCase().trim();
    // Birden fazla alternatif varsa hepsini kontrol et
    for (const text of recognizedTexts) {
        if (text === target) return true;
        // Bazi kelimeler icin esnek eslesme (noktalama vb.)
        if (text.replace(/[.,!?;:]/g, '') === target) return true;
    }
    return false;
}

// ── Ana render ──────────────────────────────────────────────
function render() {
    const container = document.getElementById('app');
    if (!container) return;

    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
    const types = ['all', 'noun', 'verb', 'adjective'];
    const typeLabels = { all: 'Tumu', noun: 'Isim', verb: 'Fiil', adjective: 'Sifat' };

    // Tarayici uyumluluk uyarisi
    const browserWarning = !SpeechRecognition ? `
        <div style="background:#e74c3c;color:#fff;padding:1rem;border-radius:8px;margin-bottom:1rem;text-align:center;">
            <strong>Uyari:</strong> Tarayiciniz Ses Tanima API'sini desteklemiyor.
            Lutfen Google Chrome veya Microsoft Edge kullanin.
        </div>
    ` : '';

    container.innerHTML = `
        <h2 style="margin-bottom:0.25rem;">Telaffuz Degerlendirme</h2>
        <p style="color:var(--text-light);margin-bottom:1rem;">Kelimeleri dogru telaffuz etme pratiginizi yapin.</p>

        ${browserWarning}

        <!-- Tab Navigation -->
        <div style="display:flex;gap:0;margin-bottom:1.25rem;border-bottom:2px solid var(--border-color);">
            <button class="pron-tab-btn" data-tab="practice"
                style="padding:0.75rem 1.5rem;border:none;background:${activeTab === 'practice' ? 'var(--primary-color)' : 'transparent'};color:${activeTab === 'practice' ? '#fff' : 'var(--text-light)'};font-weight:600;font-size:0.95rem;cursor:pointer;border-radius:8px 8px 0 0;transition:all 0.2s;">
                Pratik
            </button>
            <button class="pron-tab-btn" data-tab="drill"
                style="padding:0.75rem 1.5rem;border:none;background:${activeTab === 'drill' ? 'var(--primary-color)' : 'transparent'};color:${activeTab === 'drill' ? '#fff' : 'var(--text-light)'};font-weight:600;font-size:0.95rem;cursor:pointer;border-radius:8px 8px 0 0;transition:all 0.2s;">
                Drill (10 Kelime)
            </button>
        </div>

        <!-- CEFR Seviye Filtreleri -->
        <div style="display:flex;gap:0.5rem;margin-bottom:0.75rem;flex-wrap:wrap;">
            ${levels.map(l => `
                <button class="btn ${activeLevel === l ? '' : 'secondary'} small pron-level-btn" data-level="${l}">
                    ${l === 'all' ? 'Tumu' : getCEFRBadgeHTML(l)}
                </button>
            `).join('')}
        </div>

        <!-- Kelime Turu Filtreleri -->
        <div style="display:flex;gap:0.5rem;margin-bottom:1.25rem;flex-wrap:wrap;">
            ${types.map(t => `
                <button class="btn ${activeType === t ? '' : 'secondary'} small pron-type-btn" data-type="${t}">
                    ${typeLabels[t]}
                </button>
            `).join('')}
        </div>

        <!-- Icerik alani -->
        <div id="pron-content"></div>
    `;

    // Tab event'leri
    container.querySelectorAll('.pron-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            stopRecognition();
            activeTab = btn.dataset.tab;
            render();
        });
    });

    // Seviye filtre event'leri
    container.querySelectorAll('.pron-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            stopRecognition();
            activeLevel = btn.dataset.level;
            render();
        });
    });

    // Tur filtre event'leri
    container.querySelectorAll('.pron-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            stopRecognition();
            activeType = btn.dataset.type;
            render();
        });
    });

    // Tab icerigini render et
    if (activeTab === 'practice') {
        renderPractice();
    } else {
        renderDrillStart();
    }
}

// ══════════════════════════════════════════════════════════════
//  PRATIK MODU
// ══════════════════════════════════════════════════════════════
function renderPractice() {
    const contentEl = document.getElementById('pron-content');
    if (!contentEl) return;

    currentWord = pickRandomWord();
    if (!currentWord) {
        contentEl.innerHTML = `
            <div style="text-align:center;padding:2rem;color:var(--text-light);">
                Bu filtrelerle kelime bulunamadi. Filtreleri genisletin.
            </div>
        `;
        return;
    }

    contentEl.innerHTML = `
        <div style="max-width:480px;margin:0 auto;background:var(--card-bg);border-radius:12px;padding:2rem;box-shadow:var(--shadow);border:1px solid var(--border-color);text-align:center;">
            <!-- Kelime -->
            <div style="margin-bottom:0.5rem;">
                ${getCEFRBadgeHTML(currentWord.level)}
            </div>
            <h2 id="pron-target-word" style="font-size:2rem;margin:0.5rem 0;color:var(--primary-color);">
                ${currentWord.word}
            </h2>
            <p style="color:var(--text-light);font-size:0.95rem;margin-bottom:1.25rem;">
                ${currentWord.meaning}
            </p>

            <!-- Dinle butonu -->
            <button id="pron-listen-btn" class="btn secondary small" style="margin-bottom:1.25rem;">
                Once Dinle
            </button>

            <!-- Mikrofon butonu -->
            <div style="margin:1.5rem 0;">
                <button id="pron-mic-btn" ${!SpeechRecognition ? 'disabled' : ''}
                    style="width:80px;height:80px;border-radius:50%;border:none;background:var(--primary-color);color:#fff;font-size:2rem;cursor:pointer;transition:all 0.3s;box-shadow:0 4px 16px rgba(74,144,226,0.3);">
                    🎤
                </button>
                <p id="pron-mic-label" style="color:var(--text-light);margin-top:0.5rem;font-size:0.85rem;">
                    ${SpeechRecognition ? 'Mikrofona tikla ve kelimeyi soyle' : 'Tarayici desteklemiyor'}
                </p>
            </div>

            <!-- Sonuc alani -->
            <div id="pron-result" style="min-height:60px;margin-top:1rem;"></div>

            <!-- Sonraki kelime -->
            <button id="pron-next-btn" class="btn" style="margin-top:1rem;">
                Sonraki Kelime
            </button>
        </div>
    `;

    // Event'ler
    document.getElementById('pron-listen-btn').addEventListener('click', () => {
        speakWord(currentWord.word);
    });

    document.getElementById('pron-mic-btn').addEventListener('click', () => {
        if (!SpeechRecognition) return;
        if (isListening) {
            stopRecognition();
            return;
        }
        startRecognition((recognizedTexts) => {
            handlePracticeResult(recognizedTexts);
        });
    });

    document.getElementById('pron-next-btn').addEventListener('click', () => {
        stopRecognition();
        renderPractice();
    });
}

function handlePracticeResult(recognizedTexts) {
    const resultEl = document.getElementById('pron-result');
    const wordCard = document.getElementById('pron-target-word');
    if (!resultEl || !currentWord) return;

    const isCorrect = checkPronunciation(recognizedTexts, currentWord.word);
    const heardText = recognizedTexts[0] || '(algilanamadi)';

    if (isCorrect) {
        resultEl.innerHTML = `
            <div style="background:rgba(39,174,96,0.1);border:1px solid #27ae60;border-radius:8px;padding:1rem;">
                <p style="color:#27ae60;font-weight:600;font-size:1.1rem;margin-bottom:0.25rem;">Dogru Telaffuz!</p>
                <p style="color:var(--text-light);font-size:0.85rem;">Alinan: "${heardText}"</p>
            </div>
        `;
        if (wordCard) {
            wordCard.classList.remove('pron-wrong-shake');
            wordCard.classList.add('pron-correct-pulse');
        }
        speakWord(currentWord.word);

        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
    } else {
        resultEl.innerHTML = `
            <div style="background:rgba(231,76,60,0.1);border:1px solid #e74c3c;border-radius:8px;padding:1rem;">
                <p style="color:#e74c3c;font-weight:600;font-size:1.1rem;margin-bottom:0.25rem;">Tekrar Dene</p>
                <p style="color:var(--text-light);font-size:0.85rem;">Alinan: "${heardText}"</p>
                <p style="color:var(--text-light);font-size:0.85rem;">Beklenen: "${currentWord.word}"</p>
            </div>
        `;
        if (wordCard) {
            wordCard.classList.remove('pron-correct-pulse');
            wordCard.classList.add('pron-wrong-shake');
        }
        // Dogru telaffuzu calar
        setTimeout(() => speakWord(currentWord.word), 600);

        if (window.audioManager) window.audioManager.playWrong();
    }
}

// ══════════════════════════════════════════════════════════════
//  DRILL MODU
// ══════════════════════════════════════════════════════════════
function renderDrillStart() {
    const contentEl = document.getElementById('pron-content');
    if (!contentEl) return;

    const pool = getFilteredWords();
    if (pool.length < DRILL_COUNT) {
        contentEl.innerHTML = `
            <div style="text-align:center;padding:2rem;color:var(--text-light);">
                Bu filtrelerle en az ${DRILL_COUNT} kelime gerekli (mevcut: ${pool.length}).
                Filtreleri genisletin.
            </div>
        `;
        return;
    }

    contentEl.innerHTML = `
        <div style="max-width:480px;margin:0 auto;background:var(--card-bg);border-radius:12px;padding:2rem;box-shadow:var(--shadow);border:1px solid var(--border-color);text-align:center;">
            <div style="font-size:3rem;margin-bottom:1rem;">🎯</div>
            <h3 style="margin-bottom:0.75rem;">Telaffuz Drill</h3>
            <p style="color:var(--text-light);margin-bottom:1.5rem;">
                ${DRILL_COUNT} rastgele kelimeyi dogru telaffuz etmeye calisin.
                Her dogru cevap <strong>+10 XP</strong> kazandirir.
            </p>
            <button id="pron-drill-start-btn" class="btn" style="font-size:1.1rem;padding:0.75rem 2rem;"
                ${!SpeechRecognition ? 'disabled' : ''}>
                ${SpeechRecognition ? 'Basla' : 'Tarayici Desteklemiyor'}
            </button>
        </div>
    `;

    document.getElementById('pron-drill-start-btn')?.addEventListener('click', () => {
        const shuffled = fisherYatesShuffle([...pool]);
        drillWords = shuffled.slice(0, DRILL_COUNT);
        drillIndex = 0;
        drillCorrect = 0;
        drillTotal = 0;
        renderDrillQuestion();
    });
}

function renderDrillQuestion() {
    const contentEl = document.getElementById('pron-content');
    if (!contentEl) return;

    if (drillIndex >= drillWords.length) {
        renderDrillResult();
        return;
    }

    const word = drillWords[drillIndex];
    const progress = drillIndex + 1;

    contentEl.innerHTML = `
        <div style="max-width:480px;margin:0 auto;background:var(--card-bg);border-radius:12px;padding:2rem;box-shadow:var(--shadow);border:1px solid var(--border-color);text-align:center;">
            <!-- Ilerleme -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                <span style="font-size:0.85rem;color:var(--text-light);">${progress} / ${DRILL_COUNT}</span>
                <span style="font-size:0.85rem;color:var(--text-light);">Dogru: ${drillCorrect}</span>
            </div>
            <div style="width:100%;height:6px;background:var(--border-color);border-radius:3px;margin-bottom:1.25rem;overflow:hidden;">
                <div style="width:${(progress / DRILL_COUNT) * 100}%;height:100%;background:var(--primary-color);border-radius:3px;transition:width 0.3s;"></div>
            </div>

            <!-- Kelime -->
            <div style="margin-bottom:0.5rem;">
                ${getCEFRBadgeHTML(word.level)}
            </div>
            <h2 id="pron-target-word" style="font-size:2rem;margin:0.5rem 0;color:var(--primary-color);">
                ${word.word}
            </h2>
            <p style="color:var(--text-light);font-size:0.95rem;margin-bottom:1.25rem;">
                ${word.meaning}
            </p>

            <!-- Dinle butonu -->
            <button id="pron-listen-btn" class="btn secondary small" style="margin-bottom:1rem;">
                Once Dinle
            </button>

            <!-- Mikrofon butonu -->
            <div style="margin:1.25rem 0;">
                <button id="pron-mic-btn"
                    style="width:80px;height:80px;border-radius:50%;border:none;background:var(--primary-color);color:#fff;font-size:2rem;cursor:pointer;transition:all 0.3s;box-shadow:0 4px 16px rgba(74,144,226,0.3);">
                    🎤
                </button>
                <p style="color:var(--text-light);margin-top:0.5rem;font-size:0.85rem;">
                    Mikrofona tikla ve kelimeyi soyle
                </p>
            </div>

            <!-- Sonuc alani -->
            <div id="pron-result" style="min-height:60px;"></div>

            <!-- Atla butonu -->
            <button id="pron-drill-skip-btn" class="btn secondary small" style="margin-top:0.75rem;">
                Atla
            </button>
        </div>
    `;

    // Event'ler
    document.getElementById('pron-listen-btn').addEventListener('click', () => {
        speakWord(word.word);
    });

    document.getElementById('pron-mic-btn').addEventListener('click', () => {
        if (isListening) {
            stopRecognition();
            return;
        }
        startRecognition((recognizedTexts) => {
            handleDrillResult(recognizedTexts, word);
        });
    });

    document.getElementById('pron-drill-skip-btn').addEventListener('click', () => {
        stopRecognition();
        drillTotal++;
        drillIndex++;
        renderDrillQuestion();
    });
}

function handleDrillResult(recognizedTexts, word) {
    const resultEl = document.getElementById('pron-result');
    const wordCard = document.getElementById('pron-target-word');
    if (!resultEl) return;

    const isCorrect = checkPronunciation(recognizedTexts, word.word);
    const heardText = recognizedTexts[0] || '(algilanamadi)';

    drillTotal++;

    if (isCorrect) {
        drillCorrect++;
        resultEl.innerHTML = `
            <div style="background:rgba(39,174,96,0.1);border:1px solid #27ae60;border-radius:8px;padding:0.75rem;">
                <p style="color:#27ae60;font-weight:600;margin-bottom:0.15rem;">Dogru! +10 XP</p>
                <p style="color:var(--text-light);font-size:0.85rem;">Alinan: "${heardText}"</p>
            </div>
        `;
        if (wordCard) {
            wordCard.classList.add('pron-correct-pulse');
        }
        speakWord(word.word);

        if (window.audioManager) window.audioManager.playCorrect();
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
    } else {
        resultEl.innerHTML = `
            <div style="background:rgba(231,76,60,0.1);border:1px solid #e74c3c;border-radius:8px;padding:0.75rem;">
                <p style="color:#e74c3c;font-weight:600;margin-bottom:0.15rem;">Yanlis</p>
                <p style="color:var(--text-light);font-size:0.85rem;">Alinan: "${heardText}"</p>
                <p style="color:var(--text-light);font-size:0.85rem;">Beklenen: "${word.word}"</p>
            </div>
        `;
        if (wordCard) {
            wordCard.classList.add('pron-wrong-shake');
        }
        setTimeout(() => speakWord(word.word), 600);

        if (window.audioManager) window.audioManager.playWrong();
    }

    // Otomatik sonraki kelimeye gec
    setTimeout(() => {
        drillIndex++;
        renderDrillQuestion();
    }, 1800);
}

function renderDrillResult() {
    const contentEl = document.getElementById('pron-content');
    if (!contentEl) return;

    const accuracy = drillTotal > 0 ? Math.round((drillCorrect / drillTotal) * 100) : 0;
    const totalXP = drillCorrect * 10;

    let emoji = '😔';
    let message = 'Daha fazla pratik yaparak gelistirebilirsin.';
    if (accuracy >= 90) {
        emoji = '🏆';
        message = 'Muhtesem! Telaffuzun neredeyse kusursuz.';
    } else if (accuracy >= 70) {
        emoji = '😊';
        message = 'Harika! Telaffuzun iyi durumda.';
    } else if (accuracy >= 50) {
        emoji = '💪';
        message = 'Fena degil! Biraz daha pratikle cok daha iyi olacaksin.';
    }

    if (accuracy >= 80) {
        showToast(`Harika! %${accuracy} dogruluk orani!`, 'success');
    }

    contentEl.innerHTML = `
        <div style="max-width:480px;margin:0 auto;background:var(--card-bg);border-radius:12px;padding:2rem;box-shadow:var(--shadow);border:1px solid var(--border-color);text-align:center;">
            <div style="font-size:3rem;margin-bottom:0.75rem;">${emoji}</div>
            <h2 style="margin-bottom:1rem;">Drill Tamamlandi!</h2>

            <!-- Istatistikler -->
            <div style="display:flex;justify-content:center;gap:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap;">
                <div style="text-align:center;">
                    <div style="font-size:1.8rem;font-weight:700;color:#27ae60;">${drillCorrect}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Dogru</div>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:1.8rem;font-weight:700;color:#e74c3c;">${drillTotal - drillCorrect}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Yanlis</div>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:1.8rem;font-weight:700;color:var(--primary-color);">%${accuracy}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Dogruluk</div>
                </div>
            </div>

            <p style="color:var(--text-light);margin-bottom:0.5rem;">${message}</p>
            <p style="color:var(--text-light);margin-bottom:1.5rem;">Kazanilan XP: <strong>+${totalXP}</strong></p>

            <!-- Kelime bazli sonuclar -->
            <div style="text-align:left;margin-bottom:1.5rem;">
                <h4 style="margin-bottom:0.5rem;">Kelime Detaylari:</h4>
                <div style="background:var(--card-bg);border-radius:8px;overflow:hidden;border:1px solid var(--border-color);">
                    ${drillWords.map((w, i) => {
                        const attempted = i < drillTotal;
                        const icon = !attempted ? '⏭️' : (i < drillCorrect ? '✅' : '❌');
                        return `
                            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.75rem;border-bottom:1px solid var(--border-color);">
                                <span>${icon} <strong>${w.word}</strong></span>
                                <span style="color:var(--text-light);font-size:0.85rem;">${w.meaning}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Butonlar -->
            <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
                <button id="pron-drill-retry-btn" class="btn">Tekrar Oyna</button>
                <button id="pron-drill-back-btn" class="btn secondary">Pratik Moduna Don</button>
            </div>
        </div>
    `;

    // Aktivite tamamlama
    if (window.progressManager) {
        window.progressManager.completeActivity?.(`pronunciation-drill-${Date.now()}`);
    }

    document.getElementById('pron-drill-retry-btn').addEventListener('click', () => {
        activeTab = 'drill';
        renderDrillStart();
    });

    document.getElementById('pron-drill-back-btn').addEventListener('click', () => {
        activeTab = 'practice';
        render();
    });
}
