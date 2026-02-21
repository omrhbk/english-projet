// Idioms & Expressions Module — Deyimler ve İfadeler
import { getCEFRBadgeHTML, fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ─── Idioms Data (30+ common English idioms) ────────────────────
const idiomsData = [
    {
        id: 'idiom-1',
        idiom: 'break the ice',
        literalMeaning: 'Buzu kırmak',
        realMeaning: 'Ortamdaki gerginliği yumuşatmak, sohbet başlatmak',
        example: 'He told a funny joke to break the ice at the meeting.',
        category: 'daily'
    },
    {
        id: 'idiom-2',
        idiom: 'a piece of cake',
        literalMeaning: 'Bir parça kek',
        realMeaning: 'Çok kolay bir iş',
        example: 'The exam was a piece of cake; I finished in 20 minutes.',
        category: 'daily'
    },
    {
        id: 'idiom-3',
        idiom: 'hit the road',
        literalMeaning: 'Yola vurmak',
        realMeaning: 'Yola çıkmak, gitmek',
        example: 'We need to hit the road early tomorrow morning.',
        category: 'daily'
    },
    {
        id: 'idiom-4',
        idiom: 'over the moon',
        literalMeaning: 'Ayın üzerinde',
        realMeaning: 'Çok mutlu, sevinçten uçmak',
        example: 'She was over the moon when she got the promotion.',
        category: 'emotions'
    },
    {
        id: 'idiom-5',
        idiom: 'under the weather',
        literalMeaning: 'Havanın altında',
        realMeaning: 'Hasta hissetmek, keyifsiz olmak',
        example: 'I am feeling a bit under the weather today, so I will stay home.',
        category: 'emotions'
    },
    {
        id: 'idiom-6',
        idiom: 'on cloud nine',
        literalMeaning: 'Dokuzuncu bulutun üstünde',
        realMeaning: 'Son derece mutlu, havalarda uçmak',
        example: 'He has been on cloud nine since he passed the driving test.',
        category: 'emotions'
    },
    {
        id: 'idiom-7',
        idiom: 'think outside the box',
        literalMeaning: 'Kutunun dışında düşünmek',
        realMeaning: 'Yaratıcı düşünmek, alışılmışın dışına çıkmak',
        example: 'Our manager always encourages us to think outside the box.',
        category: 'work'
    },
    {
        id: 'idiom-8',
        idiom: 'go the extra mile',
        literalMeaning: 'Fazladan bir mil gitmek',
        realMeaning: 'Ekstra çaba göstermek, beklenenin ötesine geçmek',
        example: 'She always goes the extra mile to help her customers.',
        category: 'work'
    },
    {
        id: 'idiom-9',
        idiom: 'kill two birds with one stone',
        literalMeaning: 'Bir taşla iki kuş öldürmek',
        realMeaning: 'Bir işle iki sonuç elde etmek',
        example: 'By cycling to work, I kill two birds with one stone: I save money and stay fit.',
        category: 'daily'
    },
    {
        id: 'idiom-10',
        idiom: 'spill the beans',
        literalMeaning: 'Fasulyeleri dökmek',
        realMeaning: 'Sırrı açığa çıkarmak, ağzından kaçırmak',
        example: 'Please do not spill the beans about the surprise party.',
        category: 'daily'
    },
    {
        id: 'idiom-11',
        idiom: 'let the cat out of the bag',
        literalMeaning: 'Kediyi çantadan çıkarmak',
        realMeaning: 'Bir sırrı yanlışlıkla ifşa etmek',
        example: 'He let the cat out of the bag about the wedding plans.',
        category: 'daily'
    },
    {
        id: 'idiom-12',
        idiom: 'once in a blue moon',
        literalMeaning: 'Mavi bir ayda bir kez',
        realMeaning: 'Çok nadiren, kırk yılda bir',
        example: 'We only go to that expensive restaurant once in a blue moon.',
        category: 'daily'
    },
    {
        id: 'idiom-13',
        idiom: 'cost an arm and a leg',
        literalMeaning: 'Bir kol ve bir bacağa mal olmak',
        realMeaning: 'Çok pahalıya mal olmak',
        example: 'That designer handbag costs an arm and a leg.',
        category: 'daily'
    },
    {
        id: 'idiom-14',
        idiom: 'bite the bullet',
        literalMeaning: 'Mermiyi ısırmak',
        realMeaning: 'Zor bir durumu cesaretle kabullenmek',
        example: 'I decided to bite the bullet and start my own business.',
        category: 'work'
    },
    {
        id: 'idiom-15',
        idiom: 'burn the midnight oil',
        literalMeaning: 'Gece yarısı yağını yakmak',
        realMeaning: 'Gece geç saatlere kadar çalışmak',
        example: 'She has been burning the midnight oil to finish her thesis.',
        category: 'work'
    },
    {
        id: 'idiom-16',
        idiom: 'get cold feet',
        literalMeaning: 'Ayakları üşümek',
        realMeaning: 'Son anda korkmak, çekinmek, vazgeçmek',
        example: 'He got cold feet right before the job interview.',
        category: 'emotions'
    },
    {
        id: 'idiom-17',
        idiom: 'hit the nail on the head',
        literalMeaning: 'Çivinin başına vurmak',
        realMeaning: 'Tam isabetli bir şey söylemek, doğruyu bulmak',
        example: 'You hit the nail on the head with your analysis of the problem.',
        category: 'work'
    },
    {
        id: 'idiom-18',
        idiom: 'the ball is in your court',
        literalMeaning: 'Top senin sahandaki',
        realMeaning: 'Sıra sende, karar vermek sana kalmış',
        example: 'I have made my offer; the ball is in your court now.',
        category: 'work'
    },
    {
        id: 'idiom-19',
        idiom: 'barking up the wrong tree',
        literalMeaning: 'Yanlış ağaca havlamak',
        realMeaning: 'Yanlış yere yönelmek, yanlış kişiyi suçlamak',
        example: 'If you think I took your book, you are barking up the wrong tree.',
        category: 'daily'
    },
    {
        id: 'idiom-20',
        idiom: 'beat around the bush',
        literalMeaning: 'Çalının etrafında dövmek',
        realMeaning: 'Lafı dolandırmak, konuya girmemek',
        example: 'Stop beating around the bush and tell me the truth.',
        category: 'daily'
    },
    {
        id: 'idiom-21',
        idiom: 'call it a day',
        literalMeaning: 'Onu bir gün olarak adlandırmak',
        realMeaning: 'İşi bırakmak, bugünlük yeterli demek',
        example: 'We have been working for ten hours; let us call it a day.',
        category: 'work'
    },
    {
        id: 'idiom-22',
        idiom: 'cry over spilt milk',
        literalMeaning: 'Dökülmüş süt için ağlamak',
        realMeaning: 'Olan biten için üzülmek (boşuna)',
        example: 'There is no use crying over spilt milk; let us move on.',
        category: 'emotions'
    },
    {
        id: 'idiom-23',
        idiom: 'feel blue',
        literalMeaning: 'Kendini mavi hissetmek',
        realMeaning: 'Üzgün ve mutsuz hissetmek',
        example: 'She has been feeling blue ever since her best friend moved away.',
        category: 'emotions'
    },
    {
        id: 'idiom-24',
        idiom: 'get out of hand',
        literalMeaning: 'Elden çıkmak',
        realMeaning: 'Kontrolden çıkmak',
        example: 'The party got out of hand and the neighbors called the police.',
        category: 'daily'
    },
    {
        id: 'idiom-25',
        idiom: 'in the same boat',
        literalMeaning: 'Aynı teknede olmak',
        realMeaning: 'Aynı zor durumda olmak',
        example: 'We are all in the same boat when it comes to the new tax rules.',
        category: 'work'
    },
    {
        id: 'idiom-26',
        idiom: 'keep your chin up',
        literalMeaning: 'Çeneni yukarıda tut',
        realMeaning: 'Moralini yüksek tut, pes etme',
        example: 'Keep your chin up; things will get better soon.',
        category: 'emotions'
    },
    {
        id: 'idiom-27',
        idiom: 'miss the boat',
        literalMeaning: 'Tekneyi kaçırmak',
        realMeaning: 'Fırsatı kaçırmak',
        example: 'If you do not apply today, you will miss the boat.',
        category: 'work'
    },
    {
        id: 'idiom-28',
        idiom: 'pull someone\'s leg',
        literalMeaning: 'Birinin bacağını çekmek',
        realMeaning: 'Biriyle dalga geçmek, şaka yapmak',
        example: 'Are you serious or are you just pulling my leg?',
        category: 'daily'
    },
    {
        id: 'idiom-29',
        idiom: 'sit on the fence',
        literalMeaning: 'Çitin üstünde oturmak',
        realMeaning: 'Kararsız kalmak, taraf tutmamak',
        example: 'You cannot sit on the fence forever; you need to make a decision.',
        category: 'emotions'
    },
    {
        id: 'idiom-30',
        idiom: 'the last straw',
        literalMeaning: 'Son saman çöpü',
        realMeaning: 'Bardağı taşıran son damla',
        example: 'Coming late again was the last straw; she was fired.',
        category: 'work'
    },
    {
        id: 'idiom-31',
        idiom: 'wrap your head around',
        literalMeaning: 'Kafanı etrafına sarmak',
        realMeaning: 'Bir şeyi anlamaya çalışmak, kavramak',
        example: 'I still cannot wrap my head around how this machine works.',
        category: 'daily'
    },
    {
        id: 'idiom-32',
        idiom: 'throw in the towel',
        literalMeaning: 'Havluyu atmak',
        realMeaning: 'Pes etmek, vazgeçmek',
        example: 'After months of trying, he finally threw in the towel.',
        category: 'emotions'
    },
    {
        id: 'idiom-33',
        idiom: 'back to the drawing board',
        literalMeaning: 'Çizim tahtasına geri dönmek',
        realMeaning: 'Baştan başlamak, planı yeniden yapmak',
        example: 'The project failed, so it is back to the drawing board.',
        category: 'work'
    },
    {
        id: 'idiom-34',
        idiom: 'cut corners',
        literalMeaning: 'Köşeleri kesmek',
        realMeaning: 'İşin kolayına kaçmak, kaliteden ödün vermek',
        example: 'Do not cut corners on safety; it could be dangerous.',
        category: 'work'
    },
    {
        id: 'idiom-35',
        idiom: 'butterflies in my stomach',
        literalMeaning: 'Karnımda kelebekler',
        realMeaning: 'Heyecandan veya tedirginlikten midem bulanıyor',
        example: 'I always get butterflies in my stomach before a presentation.',
        category: 'emotions'
    }
];

// ─── Category labels & colors ────────────────────────────────────
const CATEGORY_CONFIG = {
    daily:    { label: 'Günlük Hayat', color: '#3498db', icon: '🗣️' },
    emotions: { label: 'Duygular',     color: '#e74c3c', icon: '❤️' },
    work:     { label: 'İş Hayatı',    color: '#27ae60', icon: '💼' }
};

// ─── State ───────────────────────────────────────────────────────
let currentView = 'browse';        // browse | quiz | flipcard
let activeCategory = 'all';
let quizState = null;
let flipCardState = null;

// ─── Main Entry Point ───────────────────────────────────────────
export function initIdiomsModule() {
    currentView = 'browse';
    activeCategory = 'all';
    quizState = null;
    flipCardState = null;
    renderIdiomsModule();
}

function renderIdiomsModule() {
    const container = document.getElementById('app');
    if (!container) return;

    container.innerHTML = `
        <div class="idioms-module">
            <h2>💬 Deyimler & İfadeler</h2>
            <p style="color:var(--text-light);margin-bottom:1rem;">
                İngilizce'nin en yaygın deyimlerini öğren. Gerçek anlamlarını keşfet!
            </p>

            <!-- Mode tabs -->
            <div class="idioms-mode-tabs" style="display:flex;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap;justify-content:center;">
                <button class="btn ${currentView === 'browse' ? '' : 'secondary'}" id="idioms-browse-btn">
                    📖 Göz At
                </button>
                <button class="btn ${currentView === 'quiz' ? '' : 'secondary'}" id="idioms-quiz-btn">
                    🧠 Quiz
                </button>
                <button class="btn ${currentView === 'flipcard' ? '' : 'secondary'}" id="idioms-flip-btn">
                    🔄 Flip Kart
                </button>
            </div>

            <div id="idioms-content"></div>
        </div>
    `;

    // Tab event listeners
    document.getElementById('idioms-browse-btn').addEventListener('click', () => {
        currentView = 'browse';
        renderIdiomsModule();
    });
    document.getElementById('idioms-quiz-btn').addEventListener('click', () => {
        currentView = 'quiz';
        quizState = null;
        renderIdiomsModule();
    });
    document.getElementById('idioms-flip-btn').addEventListener('click', () => {
        currentView = 'flipcard';
        flipCardState = null;
        renderIdiomsModule();
    });

    // Render active view
    const content = document.getElementById('idioms-content');
    switch (currentView) {
        case 'browse':   renderBrowseView(content); break;
        case 'quiz':     renderQuizView(content); break;
        case 'flipcard': renderFlipCardView(content); break;
    }
}

// ═══════════════════════════════════════════════════════════════
// 1. BROWSE VIEW
// ═══════════════════════════════════════════════════════════════
function renderBrowseView(container) {
    // Category filter tabs
    const categoryTabsHTML = `
        <div class="idioms-category-tabs" style="display:flex;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap;justify-content:center;">
            <button class="idioms-cat-btn ${activeCategory === 'all' ? 'active' : ''}" data-cat="all"
                    style="padding:6px 16px;border-radius:20px;border:2px solid var(--border-color);background:${activeCategory === 'all' ? 'var(--primary)' : 'var(--card-bg)'};color:${activeCategory === 'all' ? '#fff' : 'var(--text)'};cursor:pointer;font-weight:600;font-size:0.85rem;transition:all 0.2s;">
                🌍 Tümü (${idiomsData.length})
            </button>
            ${Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => {
                const count = idiomsData.filter(i => i.category === key).length;
                const isActive = activeCategory === key;
                return `<button class="idioms-cat-btn ${isActive ? 'active' : ''}" data-cat="${key}"
                        style="padding:6px 16px;border-radius:20px;border:2px solid ${cfg.color};background:${isActive ? cfg.color : 'var(--card-bg)'};color:${isActive ? '#fff' : cfg.color};cursor:pointer;font-weight:600;font-size:0.85rem;transition:all 0.2s;">
                    ${cfg.icon} ${cfg.label} (${count})
                </button>`;
            }).join('')}
        </div>
    `;

    // Filter idioms
    const filtered = activeCategory === 'all'
        ? idiomsData
        : idiomsData.filter(i => i.category === activeCategory);

    // Idiom cards
    const cardsHTML = filtered.map(item => {
        const cat = CATEGORY_CONFIG[item.category];
        return `
        <div class="idiom-card" style="background:var(--card-bg);border-radius:12px;padding:1.25rem;box-shadow:var(--shadow);border-left:4px solid ${cat.color};transition:transform 0.2s;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
                <h3 style="margin:0;font-size:1.1rem;color:var(--primary);">"${item.idiom}"</h3>
                <span style="background:${cat.color};color:#fff;padding:2px 10px;border-radius:12px;font-size:0.7rem;font-weight:600;">
                    ${cat.icon} ${cat.label}
                </span>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:0.75rem;">
                <div style="display:flex;align-items:flex-start;gap:0.5rem;">
                    <span style="background:#e74c3c;color:#fff;padding:1px 8px;border-radius:8px;font-size:0.7rem;font-weight:600;white-space:nowrap;margin-top:2px;">Kelime Anlamı</span>
                    <span style="font-size:0.9rem;color:var(--text-light);">${item.literalMeaning}</span>
                </div>
                <div style="display:flex;align-items:flex-start;gap:0.5rem;">
                    <span style="background:#27ae60;color:#fff;padding:1px 8px;border-radius:8px;font-size:0.7rem;font-weight:600;white-space:nowrap;margin-top:2px;">Gerçek Anlam</span>
                    <span style="font-size:0.9rem;font-weight:500;">${item.realMeaning}</span>
                </div>
            </div>

            <div style="background:var(--bg);padding:0.6rem 0.8rem;border-radius:8px;font-style:italic;font-size:0.85rem;color:var(--text-light);border:1px solid var(--border-color);">
                📝 "${item.example}"
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
        ${categoryTabsHTML}
        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:1rem;">
            ${cardsHTML}
        </div>
    `;

    // Category filter event listeners
    container.querySelectorAll('.idioms-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.cat;
            renderBrowseView(container);
        });
    });
}

// ═══════════════════════════════════════════════════════════════
// 2. QUIZ VIEW
// ═══════════════════════════════════════════════════════════════
const QUIZ_TOTAL = 10;
const OPTIONS_COUNT = 4;

function initQuizState() {
    const shuffled = fisherYatesShuffle([...idiomsData]);
    return {
        questions: shuffled.slice(0, QUIZ_TOTAL),
        currentIndex: 0,
        score: 0,
        answered: false,
        answers: []   // track user answers for result screen
    };
}

function renderQuizView(container) {
    if (!quizState) {
        quizState = initQuizState();
    }

    // Check if quiz is complete
    if (quizState.currentIndex >= quizState.questions.length) {
        renderQuizResult(container);
        return;
    }

    const q = quizState.questions[quizState.currentIndex];
    const cat = CATEGORY_CONFIG[q.category];

    // Generate 4 options: 1 correct + 3 distractors
    const correctAnswer = q.realMeaning;
    const distractorPool = idiomsData.filter(i => i.id !== q.id);
    const distractors = fisherYatesShuffle([...distractorPool])
        .slice(0, OPTIONS_COUNT - 1)
        .map(i => i.realMeaning);

    // Ensure no duplicates
    const uniqueDistractors = distractors.filter(d => d !== correctAnswer);
    while (uniqueDistractors.length < OPTIONS_COUNT - 1) {
        const fallback = distractorPool[Math.floor(Math.random() * distractorPool.length)];
        if (fallback.realMeaning !== correctAnswer && !uniqueDistractors.includes(fallback.realMeaning)) {
            uniqueDistractors.push(fallback.realMeaning);
        }
    }

    const options = fisherYatesShuffle([...uniqueDistractors.slice(0, OPTIONS_COUNT - 1), correctAnswer]);

    container.innerHTML = `
        <div style="max-width:600px;margin:0 auto;">
            <!-- Progress bar -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                <span style="font-weight:600;color:var(--text-light);">
                    Soru ${quizState.currentIndex + 1} / ${quizState.questions.length}
                </span>
                <span style="font-weight:700;color:var(--primary);">
                    Skor: ${quizState.score * 10} XP
                </span>
            </div>
            <div style="width:100%;background:var(--border-color);border-radius:8px;height:8px;margin-bottom:1.5rem;overflow:hidden;">
                <div style="width:${((quizState.currentIndex) / quizState.questions.length) * 100}%;height:100%;background:var(--primary);border-radius:8px;transition:width 0.4s;"></div>
            </div>

            <!-- Question card -->
            <div style="background:var(--card-bg);border-radius:12px;padding:1.5rem;box-shadow:var(--shadow);border-left:4px solid ${cat.color};margin-bottom:1.5rem;">
                <span style="background:${cat.color};color:#fff;padding:2px 10px;border-radius:12px;font-size:0.7rem;font-weight:600;">
                    ${cat.icon} ${cat.label}
                </span>
                <p style="margin:1rem 0 0.5rem;font-size:0.85rem;color:var(--text-light);">Bu cümledeki deyimin anlamı nedir?</p>
                <p style="font-size:1.1rem;font-style:italic;line-height:1.6;margin:0;">
                    "${q.example}"
                </p>
                <p style="margin:0.75rem 0 0;font-weight:700;color:var(--primary);font-size:1rem;">
                    "${q.idiom}"
                </p>
            </div>

            <!-- Options -->
            <div id="quiz-options" style="display:flex;flex-direction:column;gap:0.75rem;">
                ${options.map((opt, idx) => `
                    <button class="idiom-quiz-opt" data-value="${escapeAttr(opt)}"
                            style="padding:0.85rem 1rem;border-radius:10px;border:2px solid var(--border-color);background:var(--card-bg);color:var(--text);cursor:pointer;text-align:left;font-size:0.95rem;transition:all 0.2s;font-family:inherit;">
                        <strong style="color:var(--primary);margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</strong> ${opt}
                    </button>
                `).join('')}
            </div>

            <!-- Feedback area -->
            <div id="quiz-feedback" style="margin-top:1rem;min-height:48px;"></div>
        </div>
    `;

    // Option click handlers
    container.querySelectorAll('.idiom-quiz-opt').forEach(btn => {
        btn.addEventListener('click', () => handleQuizAnswer(btn, correctAnswer, q, container));
    });
}

function handleQuizAnswer(btn, correctAnswer, question, container) {
    if (quizState.answered) return;
    quizState.answered = true;

    const selectedValue = btn.dataset.value;
    const isCorrect = selectedValue === correctAnswer;

    // Disable all buttons
    container.querySelectorAll('.idiom-quiz-opt').forEach(b => {
        b.style.cursor = 'default';
        b.style.opacity = '0.7';
        if (b.dataset.value === correctAnswer) {
            b.style.border = '2px solid #27ae60';
            b.style.background = 'rgba(39,174,96,0.1)';
            b.style.opacity = '1';
        }
    });

    if (isCorrect) {
        btn.style.border = '2px solid #27ae60';
        btn.style.background = 'rgba(39,174,96,0.15)';
        btn.style.opacity = '1';
        quizState.score++;

        // XP reward
        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
        if (window.audioManager) window.audioManager.playCorrect();
    } else {
        btn.style.border = '2px solid #e74c3c';
        btn.style.background = 'rgba(231,76,60,0.15)';
        btn.style.opacity = '1';

        if (window.audioManager) window.audioManager.playWrong();
    }

    // Save answer
    quizState.answers.push({
        idiom: question.idiom,
        correct: isCorrect,
        realMeaning: question.realMeaning
    });

    // Feedback
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.innerHTML = `
        <div style="padding:0.75rem 1rem;border-radius:10px;background:${isCorrect ? 'rgba(39,174,96,0.1)' : 'rgba(231,76,60,0.1)'};border:1px solid ${isCorrect ? '#27ae60' : '#e74c3c'};">
            <p style="margin:0;font-weight:600;color:${isCorrect ? '#27ae60' : '#e74c3c'};">
                ${isCorrect ? '✅ Doğru! +10 XP' : '❌ Yanlış!'}
            </p>
            ${!isCorrect ? `<p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--text-light);">
                Doğru cevap: <strong>${question.realMeaning}</strong>
            </p>` : ''}
            <p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--text-light);">
                Kelimesi kelimesine: <em>${question.literalMeaning}</em>
            </p>
        </div>
        <button id="quiz-next-btn" class="btn" style="margin-top:0.75rem;width:100%;">
            ${quizState.currentIndex + 1 < quizState.questions.length ? 'Sonraki Soru ❯' : 'Sonuçları Gör 🏁'}
        </button>
    `;

    document.getElementById('quiz-next-btn').addEventListener('click', () => {
        quizState.currentIndex++;
        quizState.answered = false;
        renderQuizView(container);
    });
}

function renderQuizResult(container) {
    const total = quizState.questions.length;
    const correct = quizState.score;
    const accuracy = Math.round((correct / total) * 100);
    const xpEarned = correct * 10;

    const wrongAnswers = quizState.answers.filter(a => !a.correct);

    if (accuracy >= 80) {
        showToast(`Harika! %${accuracy} dogruluk orani ile tamamladin!`, 'success');
    }

    container.innerHTML = `
        <div style="max-width:500px;margin:0 auto;text-align:center;">
            <div style="font-size:3rem;margin-bottom:0.5rem;">${accuracy >= 80 ? '🏆' : accuracy >= 50 ? '👍' : '💪'}</div>
            <h2 style="margin:0 0 0.5rem;">Quiz Tamamlandi!</h2>
            <p style="color:var(--text-light);margin-bottom:1.5rem;">Deyimler konusundaki bilgini test ettin.</p>

            <div style="display:flex;justify-content:center;gap:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap;">
                <div style="background:var(--card-bg);padding:1rem 1.5rem;border-radius:12px;box-shadow:var(--shadow);min-width:100px;">
                    <div style="font-size:1.8rem;font-weight:700;color:#27ae60;">${correct}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Dogru</div>
                </div>
                <div style="background:var(--card-bg);padding:1rem 1.5rem;border-radius:12px;box-shadow:var(--shadow);min-width:100px;">
                    <div style="font-size:1.8rem;font-weight:700;color:#e74c3c;">${total - correct}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Yanlis</div>
                </div>
                <div style="background:var(--card-bg);padding:1rem 1.5rem;border-radius:12px;box-shadow:var(--shadow);min-width:100px;">
                    <div style="font-size:1.8rem;font-weight:700;color:var(--primary);">%${accuracy}</div>
                    <div style="font-size:0.8rem;color:var(--text-light);">Basari</div>
                </div>
            </div>

            <p style="font-size:1rem;margin-bottom:1.5rem;">Kazanilan XP: <strong style="color:var(--primary);">+${xpEarned}</strong></p>

            ${wrongAnswers.length > 0 ? `
                <div style="text-align:left;margin-bottom:1.5rem;">
                    <h4 style="margin-bottom:0.5rem;">❌ Yanlis Bilinenler:</h4>
                    <div style="background:var(--card-bg);border-radius:8px;overflow:hidden;border:1px solid var(--border-color);">
                        ${wrongAnswers.map(a => `
                            <div style="display:flex;justify-content:space-between;padding:0.5rem 0.75rem;border-bottom:1px solid var(--border-color);gap:0.5rem;flex-wrap:wrap;">
                                <strong style="color:var(--primary);">"${a.idiom}"</strong>
                                <span style="color:var(--text-light);font-size:0.85rem;">${a.realMeaning}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
                <button id="quiz-retry-btn" class="btn">Tekrar Dene</button>
                <button id="quiz-browse-btn" class="btn secondary">Goz At Moduna Don</button>
            </div>
        </div>
    `;

    document.getElementById('quiz-retry-btn').addEventListener('click', () => {
        currentView = 'quiz';
        quizState = null;
        renderIdiomsModule();
    });
    document.getElementById('quiz-browse-btn').addEventListener('click', () => {
        currentView = 'browse';
        renderIdiomsModule();
    });
}

// ═══════════════════════════════════════════════════════════════
// 3. FLIP CARD VIEW
// ═══════════════════════════════════════════════════════════════
function initFlipCardState() {
    const filtered = activeCategory === 'all'
        ? [...idiomsData]
        : idiomsData.filter(i => i.category === activeCategory);
    return {
        cards: fisherYatesShuffle([...filtered]),
        currentIndex: 0,
        isFlipped: false
    };
}

function renderFlipCardView(container) {
    if (!flipCardState) {
        flipCardState = initFlipCardState();
    }

    if (flipCardState.cards.length === 0) {
        container.innerHTML = `<p class="no-results" style="text-align:center;color:var(--text-light);">Bu kategoride deyim bulunamadi.</p>`;
        return;
    }

    const card = flipCardState.cards[flipCardState.currentIndex];
    const cat = CATEGORY_CONFIG[card.category];
    const flipped = flipCardState.isFlipped;

    // Category filter tabs
    const categoryTabsHTML = `
        <div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap;justify-content:center;">
            <button class="flip-cat-btn ${activeCategory === 'all' ? 'active' : ''}" data-cat="all"
                    style="padding:4px 12px;border-radius:16px;border:2px solid var(--border-color);background:${activeCategory === 'all' ? 'var(--primary)' : 'var(--card-bg)'};color:${activeCategory === 'all' ? '#fff' : 'var(--text)'};cursor:pointer;font-weight:600;font-size:0.8rem;">
                Tumunu
            </button>
            ${Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => {
                const isActive = activeCategory === key;
                return `<button class="flip-cat-btn ${isActive ? 'active' : ''}" data-cat="${key}"
                        style="padding:4px 12px;border-radius:16px;border:2px solid ${cfg.color};background:${isActive ? cfg.color : 'var(--card-bg)'};color:${isActive ? '#fff' : cfg.color};cursor:pointer;font-weight:600;font-size:0.8rem;">
                    ${cfg.icon} ${cfg.label}
                </button>`;
            }).join('')}
        </div>
    `;

    container.innerHTML = `
        ${categoryTabsHTML}
        <div style="max-width:480px;margin:0 auto;">
            <!-- Flip Card -->
            <div id="idiom-flipcard" style="perspective:1000px;cursor:pointer;margin-bottom:1.5rem;">
                <div id="idiom-flipcard-inner" style="
                    position:relative;
                    width:100%;
                    min-height:280px;
                    transition:transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-style:preserve-3d;
                    ${flipped ? 'transform:rotateY(180deg);' : ''}
                ">
                    <!-- Front -->
                    <div style="
                        position:absolute;
                        width:100%;
                        min-height:280px;
                        backface-visibility:hidden;
                        background:var(--card-bg);
                        border-radius:16px;
                        box-shadow:var(--shadow);
                        border-top:4px solid ${cat.color};
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                        padding:2rem;
                        box-sizing:border-box;
                    ">
                        <span style="background:${cat.color};color:#fff;padding:2px 12px;border-radius:12px;font-size:0.7rem;font-weight:600;margin-bottom:1rem;">
                            ${cat.icon} ${cat.label}
                        </span>
                        <h2 style="margin:0 0 1rem;font-size:1.6rem;color:var(--primary);text-align:center;">
                            "${card.idiom}"
                        </h2>
                        <p style="margin:0;color:var(--text-light);font-size:0.85rem;">
                            Anlami gormek icin tikla
                        </p>
                    </div>

                    <!-- Back -->
                    <div style="
                        position:absolute;
                        width:100%;
                        min-height:280px;
                        backface-visibility:hidden;
                        transform:rotateY(180deg);
                        background:var(--card-bg);
                        border-radius:16px;
                        box-shadow:var(--shadow);
                        border-top:4px solid ${cat.color};
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                        padding:2rem;
                        box-sizing:border-box;
                    ">
                        <h3 style="margin:0 0 1rem;font-size:1.2rem;color:var(--primary);text-align:center;">
                            "${card.idiom}"
                        </h3>
                        <div style="width:100%;display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1rem;">
                            <div style="display:flex;align-items:flex-start;gap:0.5rem;">
                                <span style="background:#e74c3c;color:#fff;padding:1px 8px;border-radius:8px;font-size:0.7rem;font-weight:600;white-space:nowrap;margin-top:2px;">Kelime</span>
                                <span style="font-size:0.9rem;color:var(--text-light);">${card.literalMeaning}</span>
                            </div>
                            <div style="display:flex;align-items:flex-start;gap:0.5rem;">
                                <span style="background:#27ae60;color:#fff;padding:1px 8px;border-radius:8px;font-size:0.7rem;font-weight:600;white-space:nowrap;margin-top:2px;">Gercek</span>
                                <span style="font-size:0.9rem;font-weight:600;">${card.realMeaning}</span>
                            </div>
                        </div>
                        <div style="background:var(--bg);padding:0.6rem 0.8rem;border-radius:8px;font-style:italic;font-size:0.85rem;color:var(--text-light);border:1px solid var(--border-color);width:100%;box-sizing:border-box;text-align:center;">
                            "${card.example}"
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation controls -->
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;">
                <button id="flip-prev-btn" class="btn secondary" ${flipCardState.currentIndex === 0 ? 'disabled' : ''}>
                    ❮ Onceki
                </button>
                <span style="font-weight:600;color:var(--text-light);font-size:0.9rem;">
                    ${flipCardState.currentIndex + 1} / ${flipCardState.cards.length}
                </span>
                <button id="flip-next-btn" class="btn" ${flipCardState.currentIndex >= flipCardState.cards.length - 1 ? 'disabled' : ''}>
                    Sonraki ❯
                </button>
            </div>

            <!-- Shuffle button -->
            <div style="text-align:center;margin-top:1rem;">
                <button id="flip-shuffle-btn" class="btn secondary" style="font-size:0.85rem;">
                    🔀 Karistir
                </button>
            </div>
        </div>
    `;

    // Flip card click
    document.getElementById('idiom-flipcard').addEventListener('click', () => {
        flipCardState.isFlipped = !flipCardState.isFlipped;
        const inner = document.getElementById('idiom-flipcard-inner');
        if (inner) {
            inner.style.transform = flipCardState.isFlipped ? 'rotateY(180deg)' : '';
        }
    });

    // Navigation
    document.getElementById('flip-prev-btn').addEventListener('click', () => {
        if (flipCardState.currentIndex > 0) {
            flipCardState.currentIndex--;
            flipCardState.isFlipped = false;
            renderFlipCardView(container);
        }
    });

    document.getElementById('flip-next-btn').addEventListener('click', () => {
        if (flipCardState.currentIndex < flipCardState.cards.length - 1) {
            flipCardState.currentIndex++;
            flipCardState.isFlipped = false;
            renderFlipCardView(container);
        }
    });

    // Shuffle
    document.getElementById('flip-shuffle-btn').addEventListener('click', () => {
        flipCardState.cards = fisherYatesShuffle([...flipCardState.cards]);
        flipCardState.currentIndex = 0;
        flipCardState.isFlipped = false;
        renderFlipCardView(container);
        showToast('Kartlar karistirildi!', 'info', 2000);
    });

    // Category filter for flip cards
    container.querySelectorAll('.flip-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.cat;
            flipCardState = null; // reset with new category
            renderFlipCardView(container);
        });
    });

    // Keyboard navigation
    const keyHandler = (e) => {
        if (e.key === 'ArrowLeft' && flipCardState.currentIndex > 0) {
            flipCardState.currentIndex--;
            flipCardState.isFlipped = false;
            renderFlipCardView(container);
        } else if (e.key === 'ArrowRight' && flipCardState.currentIndex < flipCardState.cards.length - 1) {
            flipCardState.currentIndex++;
            flipCardState.isFlipped = false;
            renderFlipCardView(container);
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flipCardState.isFlipped = !flipCardState.isFlipped;
            const inner = document.getElementById('idiom-flipcard-inner');
            if (inner) {
                inner.style.transform = flipCardState.isFlipped ? 'rotateY(180deg)' : '';
            }
        }
    };

    // Remove old handler and add new one
    document.removeEventListener('keydown', flipCardKeyHandler);
    flipCardKeyHandler = keyHandler;
    document.addEventListener('keydown', flipCardKeyHandler);
}

let flipCardKeyHandler = () => {};

// ─── Helper: escape attribute value ──────────────────────────────
function escapeAttr(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
