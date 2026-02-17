// Reading Module — kısa İngilizce metinler, kelimeye tıklayınca Türkçe anlam
import { vocabData } from '../core/data.js';

// Okuma parçaları — kelimeler vocabData ile eşleşiyor
const readingTexts = [
    {
        id: 1,
        title: "A Good Morning",
        level: "Başlangıç",
        text: [
            "Every morning, Tom wakes up early and drinks water before breakfast.",
            "He is happy because the weather is beautiful and warm.",
            "He writes in his journal, then eats with his friend Sarah.",
            "Sarah is a teacher who loves to read big books.",
            "Together they think about their future plans and talk about school."
        ],
        questions: [
            {
                q: "What does Tom drink before breakfast?",
                options: ["Coffee", "Water", "Juice", "Milk"],
                answer: "Water"
            },
            {
                q: "What is Sarah's job?",
                options: ["Doctor", "Teacher", "Driver", "Writer"],
                answer: "Teacher"
            },
            {
                q: "How does Tom feel in the morning?",
                options: ["Sad", "Cold", "Happy", "Tired"],
                answer: "Happy"
            }
        ]
    },
    {
        id: 2,
        title: "The Fast Car",
        level: "Başlangıç",
        text: [
            "Alex has a big, fast car that he loves very much.",
            "He thinks the car is strong and beautiful.",
            "Every weekend, Alex and his friend run to the park near their house.",
            "They eat lunch outside and sleep under the big trees.",
            "Alex writes a book about cars and their amazing engines."
        ],
        questions: [
            {
                q: "What does Alex have?",
                options: ["A big house", "A fast car", "A school", "A book"],
                answer: "A fast car"
            },
            {
                q: "Where do Alex and his friend run?",
                options: ["To the beach", "To school", "To the park", "To a restaurant"],
                answer: "To the park"
            },
            {
                q: "What does Alex write?",
                options: ["A diary", "A book about cars", "A letter", "A poem"],
                answer: "A book about cars"
            }
        ]
    }
];

// vocabData'dan arama için hızlı map oluştur
const vocabMap = {};
vocabData.forEach(w => {
    vocabMap[w.word.toLowerCase()] = w.meaning;
});

let activeTooltip = null;

export function initReadingModule() {
    const container = document.getElementById('app');
    renderReadingList(container);
}

function renderReadingList(container) {
    container.innerHTML = `
        <h2>📖 Okuma</h2>
        <p>Metni oku, mavi kelimelere tıklayınca Türkçe anlamını gör.</p>
        <div class="dashboard-grid" style="margin-top:1.5rem;">
            ${readingTexts.map(t => `
                <div class="card reading-list-card" data-id="${t.id}">
                    <div class="card-icon">📄</div>
                    <h3>${t.title}</h3>
                    <p>Seviye: ${t.level}</p>
                    <button class="btn">Okumaya Başla</button>
                </div>
            `).join('')}
        </div>
    `;

    container.querySelectorAll('.reading-list-card button').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.target.closest('.card').dataset.id);
            renderReadingSession(id, container);
        });
    });
}

function renderReadingSession(id, container) {
    const text = readingTexts.find(t => t.id === id);

    // Her paragraftaki kelimeleri işle — vocabData'da olan kelimeleri vurgula
    const processedParagraphs = text.text.map(para => {
        return para.split(/(\s+)/).map(token => {
            const clean = token.replace(/[^a-zA-Z]/g, '').toLowerCase();
            if (vocabMap[clean]) {
                return `<span class="reading-word" data-word="${clean}" data-meaning="${vocabMap[clean]}">${token}</span>`;
            }
            return token;
        }).join('');
    });

    container.innerHTML = `
        <div class="reading-container">
            <button id="reading-back-btn" class="btn secondary" style="margin-bottom:1rem;">❮ Metinlere Dön</button>
            <h2>${text.title} <span style="font-size:0.85rem; color:var(--text-light);">(${text.level})</span></h2>

            <div class="reading-article" id="reading-article">
                ${processedParagraphs.map(p => `<p>${p}</p>`).join('')}
            </div>

            <h3 style="margin-bottom:1rem;">Anlama Soruları</h3>
            <div id="reading-questions"></div>
            <div id="reading-result" style="margin-top:1rem;"></div>
        </div>
    `;

    document.getElementById('reading-back-btn').addEventListener('click', () => {
        removeTooltip();
        renderReadingList(container);
    });

    setupWordTooltips();
    renderReadingQuestions(text.questions);
}

function setupWordTooltips() {
    const article = document.getElementById('reading-article');

    article.addEventListener('click', e => {
        const target = e.target;
        if (!target.classList.contains('reading-word')) {
            removeTooltip();
            return;
        }

        removeTooltip();

        const meaning = target.dataset.meaning;
        const rect = target.getBoundingClientRect();

        const tooltip = document.createElement('div');
        tooltip.className = 'word-tooltip';
        tooltip.textContent = meaning;
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 38}px`;
        tooltip.style.transform = 'translateX(-50%)';
        document.body.appendChild(tooltip);
        activeTooltip = tooltip;
    });

    // Dışarı tıklayınca tooltip kapat
    document.addEventListener('click', handleOutsideClick);
}

function handleOutsideClick(e) {
    if (!e.target.classList.contains('reading-word')) {
        removeTooltip();
        document.removeEventListener('click', handleOutsideClick);
    }
}

function removeTooltip() {
    if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
    }
}

function renderReadingQuestions(questions) {
    const container = document.getElementById('reading-questions');
    let answered = 0;
    let correctCount = 0;

    questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'reading-question-card';
        card.innerHTML = `
            <p>${idx + 1}. ${q.q}</p>
            <div class="reading-options">
                ${q.options.map(opt => `
                    <button class="reading-opt-btn" data-value="${opt}">${opt}</button>
                `).join('')}
            </div>
            <p class="ex-feedback" id="rq-feedback-${idx}"></p>
        `;
        container.appendChild(card);

        card.querySelectorAll('.reading-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;

                const selected = btn.dataset.value;
                card.querySelectorAll('.reading-opt-btn').forEach(b => { b.disabled = true; });
                answered++;

                const feedback = document.getElementById(`rq-feedback-${idx}`);
                if (selected === q.answer) {
                    btn.classList.add('correct');
                    feedback.textContent = '✅ Doğru!';
                    feedback.className = 'ex-feedback success';
                    correctCount++;
                    if (window.audioManager) window.audioManager.playCorrect();
                    if (window.progressManager) window.progressManager.addXP(10);
                    if (window.showXPGain) window.showXPGain(10);
                } else {
                    btn.classList.add('wrong');
                    card.querySelectorAll('.reading-opt-btn').forEach(b => {
                        if (b.dataset.value === q.answer) b.classList.add('correct');
                    });
                    feedback.textContent = `❌ Yanlış. Doğru cevap: ${q.answer}`;
                    feedback.className = 'ex-feedback error';
                    if (window.audioManager) window.audioManager.playWrong();
                }

                // Tüm sorular cevaplanınca özet göster
                if (answered === questions.length) {
                    const result = document.getElementById('reading-result');
                    result.innerHTML = `
                        <div class="weak-words-panel" style="border-left: 4px solid var(--accent-color);">
                            <h3 style="color:var(--accent-color);">Sonuç: ${correctCount}/${questions.length} doğru</h3>
                            <p>${correctCount === questions.length ? 'Mükemmel! Tüm soruları doğru yanıtladın.' : 'Metni tekrar okuyarak eksikleri gider.'}</p>
                        </div>
                    `;
                    if (correctCount === questions.length && window.celebrateLevelUp) window.celebrateLevelUp();
                }
            });
        });
    });
}
