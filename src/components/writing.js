// Writing Practice Module — CEFR seviyeli yazma alistirmalari, kelime sayaci, anahtar kelime kontrolu
import { getCEFRBadgeHTML, attachEnglishValidation } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Yazma Alishtirmalari — CEFR seviyeli ─────────────────────────
const writingExercises = [
    // ─── A1: Describe (1-2 sentences) ────────────────────────────
    {
        id: 1, level: "A1", type: "describe",
        prompt: "Aileni kisa bir sekilde tanimla. (1-2 cumle)",
        promptEN: "Describe your family in 1-2 sentences.",
        keywords: null,
        minWords: 5, maxWords: 30,
        exampleAnswer: "I have a small family. My mother is a teacher and my father is an engineer.",
        checkKeywords: ["family", "my"]
    },
    {
        id: 2, level: "A1", type: "describe",
        prompt: "Her sabah ne yapiyorsun? (1-2 cumle)",
        promptEN: "What do you do every morning?",
        keywords: null,
        minWords: 5, maxWords: 30,
        exampleAnswer: "Every morning I wake up early and eat breakfast. Then I go to school.",
        checkKeywords: ["morning", "I"]
    },
    {
        id: 3, level: "A1", type: "describe",
        prompt: "En sevdigin yemegi tanimla. (1-2 cumle)",
        promptEN: "Describe your favorite food.",
        keywords: null,
        minWords: 5, maxWords: 30,
        exampleAnswer: "My favorite food is pizza. It is delicious and I eat it every weekend.",
        checkKeywords: ["favorite", "food"]
    },
    {
        id: 4, level: "A1", type: "describe",
        prompt: "Evini kisa bir sekilde tanimla. (1-2 cumle)",
        promptEN: "Describe your house in 1-2 sentences.",
        keywords: null,
        minWords: 5, maxWords: 30,
        exampleAnswer: "I live in a small house. It has three rooms and a nice garden.",
        checkKeywords: ["house", "live"]
    },
    {
        id: 5, level: "A1", type: "describe",
        prompt: "En yakin arkadasini tanimla. (1-2 cumle)",
        promptEN: "Describe your best friend.",
        keywords: null,
        minWords: 5, maxWords: 30,
        exampleAnswer: "My best friend is Ali. He is tall and very funny.",
        checkKeywords: ["friend", "is"]
    },

    // ─── A2: Keywords (use 3 given keywords, 2-3 sentences) ──────
    {
        id: 6, level: "A2", type: "keywords",
        prompt: "Asagidaki 3 kelimeyi kullanarak 2-3 cumle yaz.",
        promptEN: "Write 2-3 sentences using the 3 keywords below.",
        keywords: ["school", "friend", "play"],
        minWords: 10, maxWords: 50,
        exampleAnswer: "I go to school every day with my friend. After school, we play football in the park. It is very fun.",
        checkKeywords: ["school", "friend", "play"]
    },
    {
        id: 7, level: "A2", type: "keywords",
        prompt: "Asagidaki 3 kelimeyi kullanarak 2-3 cumle yaz.",
        promptEN: "Write 2-3 sentences using the 3 keywords below.",
        keywords: ["holiday", "beach", "swim"],
        minWords: 10, maxWords: 50,
        exampleAnswer: "Last holiday, we went to the beach. I love to swim in the sea. The weather was hot and sunny.",
        checkKeywords: ["holiday", "beach", "swim"]
    },
    {
        id: 8, level: "A2", type: "keywords",
        prompt: "Asagidaki 3 kelimeyi kullanarak 2-3 cumle yaz.",
        promptEN: "Write 2-3 sentences using the 3 keywords below.",
        keywords: ["morning", "breakfast", "coffee"],
        minWords: 10, maxWords: 50,
        exampleAnswer: "Every morning I wake up at seven. I eat breakfast with my family. My mother drinks coffee but I prefer tea.",
        checkKeywords: ["morning", "breakfast", "coffee"]
    },
    {
        id: 9, level: "A2", type: "keywords",
        prompt: "Asagidaki 3 kelimeyi kullanarak 2-3 cumle yaz.",
        promptEN: "Write 2-3 sentences using the 3 keywords below.",
        keywords: ["weather", "cold", "jacket"],
        minWords: 10, maxWords: 50,
        exampleAnswer: "The weather is very cold today. I need to wear my jacket when I go outside. I do not like cold days.",
        checkKeywords: ["weather", "cold", "jacket"]
    },
    {
        id: 10, level: "A2", type: "keywords",
        prompt: "Asagidaki 3 kelimeyi kullanarak 2-3 cumle yaz.",
        promptEN: "Write 2-3 sentences using the 3 keywords below.",
        keywords: ["book", "read", "library"],
        minWords: 10, maxWords: 50,
        exampleAnswer: "I like to read a good book in my free time. I go to the library every Saturday. There are many interesting books there.",
        checkKeywords: ["book", "read", "library"]
    },

    // ─── B1: Paragraph (3-5 sentences on a topic) ────────────────
    {
        id: 11, level: "B1", type: "paragraph",
        prompt: "Dil ogrenmenin onemi hakkinda 3-5 cumlelik bir paragraf yaz.",
        promptEN: "Write a 3-5 sentence paragraph about the importance of learning languages.",
        keywords: null,
        minWords: 25, maxWords: 80,
        exampleAnswer: "Learning a new language is very important in today's world. It helps people communicate with others from different countries and cultures. Knowing more than one language can also improve job opportunities. Furthermore, studies show that learning languages makes the brain stronger and more flexible. Everyone should try to learn at least one foreign language.",
        checkKeywords: ["language", "learn", "important"]
    },
    {
        id: 12, level: "B1", type: "paragraph",
        prompt: "En sevdigin hobi hakkinda 3-5 cumlelik bir paragraf yaz.",
        promptEN: "Write a 3-5 sentence paragraph about your favorite hobby.",
        keywords: null,
        minWords: 25, maxWords: 80,
        exampleAnswer: "My favorite hobby is playing the guitar. I started learning when I was twelve years old. Playing music helps me relax after a long day at school. I practice every evening for about thirty minutes. I hope to play in a band one day.",
        checkKeywords: ["hobby", "favorite", "enjoy"]
    },
    {
        id: 13, level: "B1", type: "paragraph",
        prompt: "Teknolojinin gunluk hayatimiza etkileri hakkinda 3-5 cumle yaz.",
        promptEN: "Write 3-5 sentences about how technology affects our daily life.",
        keywords: null,
        minWords: 25, maxWords: 80,
        exampleAnswer: "Technology has changed our daily life in many ways. We use smartphones to communicate, work, and have fun. Online shopping saves time because we do not need to go to stores. However, spending too much time on screens can be harmful to our health. We should use technology wisely and take regular breaks.",
        checkKeywords: ["technology", "life", "use"]
    },
    {
        id: 14, level: "B1", type: "paragraph",
        prompt: "Saglikli yasam hakkinda 3-5 cumlelik bir paragraf yaz.",
        promptEN: "Write a 3-5 sentence paragraph about healthy living.",
        keywords: null,
        minWords: 25, maxWords: 80,
        exampleAnswer: "Healthy living is essential for a happy life. We should eat fruits, vegetables, and drink plenty of water every day. Regular exercise, such as walking or swimming, keeps our body strong. Getting enough sleep is also very important for our health. If we follow these simple rules, we can live a longer and healthier life.",
        checkKeywords: ["healthy", "exercise", "eat"]
    },
    {
        id: 15, level: "B1", type: "paragraph",
        prompt: "Seyahat etmenin faydalari hakkinda 3-5 cumle yaz.",
        promptEN: "Write 3-5 sentences about the benefits of traveling.",
        keywords: null,
        minWords: 25, maxWords: 80,
        exampleAnswer: "Traveling is one of the best ways to learn about the world. When we visit new places, we experience different cultures and traditions. Traveling also helps us relax and forget about our daily problems. Meeting new people during trips can lead to lifelong friendships. I believe everyone should travel as much as possible.",
        checkKeywords: ["travel", "new", "learn"]
    },

    // ─── B2: Compare/Contrast (essay style) ──────────────────────
    {
        id: 16, level: "B2", type: "compare",
        prompt: "Sehir hayati ile koy hayatini karsilastir. (5-8 cumle)",
        promptEN: "Compare city life and village life. Write 5-8 sentences.",
        keywords: null,
        minWords: 40, maxWords: 120,
        exampleAnswer: "City life and village life are very different in many aspects. Cities offer more job opportunities, better education, and a wider range of entertainment. On the other hand, villages provide a peaceful environment with fresh air and close community bonds. While city residents often suffer from traffic and pollution, village people enjoy a slower and healthier pace of life. However, villages may lack modern facilities such as hospitals and shopping centers. In my opinion, both lifestyles have their own advantages, and the best choice depends on personal preferences. Some people prefer the excitement of the city, while others value the tranquility of the countryside.",
        checkKeywords: ["city", "village", "advantage", "however", "life"]
    },
    {
        id: 17, level: "B2", type: "compare",
        prompt: "Sosyal medyanin avantajlari ve dezavantajlarini tartis. (5-8 cumle)",
        promptEN: "Discuss the advantages and disadvantages of social media. Write 5-8 sentences.",
        keywords: null,
        minWords: 40, maxWords: 120,
        exampleAnswer: "Social media has become an essential part of modern communication. One of its biggest advantages is the ability to connect with people from all over the world instantly. It also provides a platform for sharing ideas, news, and creative content. However, social media can be addictive and may lead to decreased productivity. Cyberbullying and privacy concerns are significant disadvantages that affect many users. Furthermore, the constant comparison with others on social media can negatively impact mental health. In conclusion, while social media offers many benefits, it is important to use it responsibly and be aware of its potential drawbacks.",
        checkKeywords: ["social media", "advantage", "disadvantage", "however", "important"]
    },
    {
        id: 18, level: "B2", type: "compare",
        prompt: "Online egitim ile yuz yuze egitimi karsilastir. (5-8 cumle)",
        promptEN: "Compare online education and face-to-face education. Write 5-8 sentences.",
        keywords: null,
        minWords: 40, maxWords: 120,
        exampleAnswer: "Online education and face-to-face education each have their own strengths and weaknesses. Online learning offers flexibility, allowing students to study at their own pace and from any location. It is also often more affordable since there are no transportation or accommodation costs. However, face-to-face education provides better social interaction between students and teachers. Students in traditional classrooms can participate in group activities and build stronger relationships. A major drawback of online education is the lack of direct supervision, which may reduce motivation. Ultimately, a combination of both methods, known as blended learning, might be the most effective approach.",
        checkKeywords: ["online", "education", "advantage", "however", "student"]
    },
    {
        id: 19, level: "B2", type: "compare",
        prompt: "Kitap okumak ile film izlemeyi karsilastir. (5-8 cumle)",
        promptEN: "Compare reading books and watching movies. Write 5-8 sentences.",
        keywords: null,
        minWords: 40, maxWords: 120,
        exampleAnswer: "Reading books and watching movies are two popular forms of entertainment, but they offer different experiences. Books allow readers to use their imagination and create their own mental images of characters and settings. Movies, on the other hand, provide a visual and auditory experience that can be more engaging for some people. Reading tends to improve vocabulary and concentration, while movies can convey emotions more quickly through acting and music. However, books usually contain more detail and depth than their movie adaptations. Both activities have educational value and can be enjoyed in different situations. In my view, the ideal approach is to appreciate both forms of storytelling.",
        checkKeywords: ["book", "movie", "compare", "however", "both"]
    },
    {
        id: 20, level: "B2", type: "compare",
        prompt: "Bireysel calisma ile takim calismasi arasindaki farklari tartis. (5-8 cumle)",
        promptEN: "Discuss the differences between working individually and working in a team. Write 5-8 sentences.",
        keywords: null,
        minWords: 40, maxWords: 120,
        exampleAnswer: "Working individually and working in a team are two common approaches in both education and professional settings. When working alone, a person has full control over decisions and can work at their own pace without distractions. This method is ideal for tasks that require deep concentration and independent thinking. Team work, however, brings together different perspectives and skills, which can lead to more creative solutions. Collaboration also helps people develop communication and leadership abilities. On the downside, team work can sometimes lead to conflicts and unequal distribution of effort. In conclusion, the best approach depends on the nature of the task and the goals involved.",
        checkKeywords: ["individual", "team", "work", "however", "advantage"]
    }
];

// ── State ─────────────────────────────────────────────────────────
let activeFilter = 'all';
let completedIds = [];

function loadCompleted() {
    completedIds = JSON.parse(localStorage.getItem('writing_completed') || '[]');
}

function saveCompleted() {
    localStorage.setItem('writing_completed', JSON.stringify(completedIds));
}

// ── Type Labels ───────────────────────────────────────────────────
const TYPE_LABELS = {
    describe: { tr: 'Tanimlama', icon: 'pencil' },
    keywords: { tr: 'Anahtar Kelime', icon: 'key' },
    paragraph: { tr: 'Paragraf', icon: 'align-left' },
    compare: { tr: 'Karsilastirma', icon: 'columns' }
};

function getTypeTagHTML(type) {
    const cfg = TYPE_LABELS[type] || { tr: type, icon: 'file' };
    return `<span style="background:#6c5ce7;color:#fff;padding:2px 8px;border-radius:12px;font-size:0.7rem;font-weight:600;">${cfg.tr}</span>`;
}

// ── Word Count Helper ─────────────────────────────────────────────
function countWords(text) {
    const trimmed = text.trim();
    if (trimmed === '') return 0;
    return trimmed.split(/\s+/).length;
}

// ── Main Init ─────────────────────────────────────────────────────
export function initWritingPractice() {
    loadCompleted();
    renderExerciseList();
}

// ── Exercise List View ────────────────────────────────────────────
function renderExerciseList() {
    const container = document.getElementById('app');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
    const filtered = activeFilter === 'all'
        ? writingExercises
        : writingExercises.filter(ex => ex.level === activeFilter);

    loadCompleted();

    container.innerHTML = `
        <h2>Writing Practice</h2>
        <p>Seviyene uygun yazma alishtirmalariyla Ingilizce yazma becerilini gelishtir.</p>

        <div class="reading-filters" style="display:flex;gap:0.5rem;margin:1rem 0;flex-wrap:wrap;">
            ${levels.map(l => `
                <button class="btn ${activeFilter === l ? '' : 'secondary'} small writing-filter-btn" data-level="${l}">
                    ${l === 'all' ? 'Hepsi' : getCEFRBadgeHTML(l)}
                </button>
            `).join('')}
        </div>

        <div class="dashboard-grid" style="margin-top:1rem;">
            ${filtered.map(ex => {
                const done = completedIds.includes(ex.id);
                return `
                    <div class="card writing-list-card" data-id="${ex.id}">
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <div class="card-icon">&#9997;</div>
                            ${done ? '<span style="color:var(--accent-color);font-weight:bold;">&#10003;</span>' : ''}
                        </div>
                        <h3 style="font-size:0.95rem;margin:0.5rem 0;">${ex.promptEN}</h3>
                        <div style="display:flex;gap:0.5rem;align-items:center;margin:0.5rem 0;flex-wrap:wrap;">
                            ${getCEFRBadgeHTML(ex.level)}
                            ${getTypeTagHTML(ex.type)}
                        </div>
                        <p style="font-size:0.78rem;color:var(--text-light);margin:0.3rem 0;">${ex.minWords}-${ex.maxWords} kelime</p>
                        ${ex.keywords ? `<p style="font-size:0.78rem;color:var(--text-light);">Anahtar kelimeler: <strong>${ex.keywords.join(', ')}</strong></p>` : ''}
                        <button class="btn" style="margin-top:0.5rem;">Yazmaya Basla</button>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Filter buttons
    container.querySelectorAll('.writing-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeFilter = btn.dataset.level;
            renderExerciseList();
        });
    });

    // Card start buttons
    container.querySelectorAll('.writing-list-card button').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.target.closest('.card').dataset.id);
            renderWritingSession(id);
        });
    });
}

// ── Writing Session View ──────────────────────────────────────────
function renderWritingSession(exerciseId) {
    const container = document.getElementById('app');
    const ex = writingExercises.find(e => e.id === exerciseId);
    if (!ex) return;

    container.innerHTML = `
        <div class="writing-session-container">
            <div style="display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap;">
                <button id="writing-back-btn" class="btn secondary">&#10094; Listeye Don</button>
            </div>

            <h2 style="margin-bottom:0.25rem;">Writing Practice ${getCEFRBadgeHTML(ex.level)} ${getTypeTagHTML(ex.type)}</h2>

            <!-- Instructions -->
            <div class="card" style="margin:1rem 0;padding:1.25rem;">
                <p style="font-weight:600;color:var(--primary-color);margin-bottom:0.3rem;">${ex.prompt}</p>
                <p style="font-size:0.88rem;color:var(--text-light);">${ex.promptEN}</p>
                ${ex.keywords ? `
                    <div style="margin-top:0.75rem;padding:0.5rem 0.75rem;background:rgba(108,92,231,0.1);border-radius:8px;">
                        <span style="font-weight:600;font-size:0.85rem;">Anahtar Kelimeler:</span>
                        <span style="font-size:0.9rem;margin-left:0.5rem;">${ex.keywords.map(k => `<span style="background:#6c5ce7;color:#fff;padding:2px 8px;border-radius:12px;font-size:0.8rem;font-weight:500;margin:0 2px;">${k}</span>`).join(' ')}</span>
                    </div>
                ` : ''}
                <p style="font-size:0.78rem;color:var(--text-light);margin-top:0.5rem;">Kelime limiti: <strong>${ex.minWords} - ${ex.maxWords}</strong> kelime</p>
            </div>

            <!-- Writing Area -->
            <div style="position:relative;">
                <textarea
                    id="writing-textarea"
                    class="ex-input full-width"
                    rows="8"
                    placeholder="Ingilizce yazmaya basla..."
                    style="width:100%;padding:1rem;font-size:0.95rem;border-radius:8px;border:1px solid var(--border-color);background:var(--card-bg);color:var(--text-color);resize:vertical;font-family:'Poppins',sans-serif;line-height:1.6;"
                ></textarea>
            </div>

            <!-- Word Counter -->
            <div id="writing-word-counter" style="display:flex;justify-content:space-between;align-items:center;margin-top:0.5rem;font-size:0.85rem;">
                <span id="word-count-display" style="font-weight:600;">0 kelime</span>
                <span id="word-count-indicator" style="color:var(--text-light);">Min: ${ex.minWords} / Max: ${ex.maxWords}</span>
            </div>

            <!-- Word Count Bar -->
            <div style="margin-top:0.5rem;height:6px;background:var(--border-color);border-radius:3px;overflow:hidden;">
                <div id="word-count-bar" style="height:100%;width:0%;background:#e74c3c;border-radius:3px;transition:all 0.3s;"></div>
            </div>

            <!-- Submit Button -->
            <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
                <button id="writing-submit-btn" class="btn" disabled>Gonder ve Kontrol Et</button>
                <button id="writing-clear-btn" class="btn secondary">Temizle</button>
            </div>

            <!-- Result Area -->
            <div id="writing-result" style="margin-top:1.5rem;"></div>
        </div>
    `;

    // References
    const textarea = document.getElementById('writing-textarea');
    const wordCountDisplay = document.getElementById('word-count-display');
    const wordCountIndicator = document.getElementById('word-count-indicator');
    const wordCountBar = document.getElementById('word-count-bar');
    const submitBtn = document.getElementById('writing-submit-btn');

    // Attach English validation
    attachEnglishValidation(textarea);

    // Live word counter
    textarea.addEventListener('input', () => {
        const wc = countWords(textarea.value);
        wordCountDisplay.textContent = `${wc} kelime`;

        // Update bar
        const pct = Math.min((wc / ex.maxWords) * 100, 100);
        wordCountBar.style.width = `${pct}%`;

        // Color coding
        if (wc < ex.minWords) {
            wordCountBar.style.background = '#e74c3c';
            wordCountDisplay.style.color = '#e74c3c';
            wordCountIndicator.textContent = `${ex.minWords - wc} kelime daha yaz (Min: ${ex.minWords})`;
        } else if (wc > ex.maxWords) {
            wordCountBar.style.background = '#e74c3c';
            wordCountDisplay.style.color = '#e74c3c';
            wordCountIndicator.textContent = `${wc - ex.maxWords} kelime fazla! (Max: ${ex.maxWords})`;
        } else {
            wordCountBar.style.background = '#27ae60';
            wordCountDisplay.style.color = '#27ae60';
            wordCountIndicator.textContent = `Uygun aralikta (${ex.minWords}-${ex.maxWords})`;
        }

        // Enable/disable submit
        submitBtn.disabled = wc < ex.minWords;
    });

    // Back button
    document.getElementById('writing-back-btn').addEventListener('click', () => {
        renderExerciseList();
    });

    // Clear button
    document.getElementById('writing-clear-btn').addEventListener('click', () => {
        textarea.value = '';
        textarea.dispatchEvent(new Event('input'));
        document.getElementById('writing-result').innerHTML = '';
    });

    // Submit button
    submitBtn.addEventListener('click', () => {
        handleSubmit(ex, textarea.value);
    });
}

// ── Submit & Check ────────────────────────────────────────────────
function handleSubmit(exercise, text) {
    const resultContainer = document.getElementById('writing-result');
    const wc = countWords(text);
    const textLower = text.toLowerCase();
    const issues = [];
    const successes = [];

    // 1. Word count validation
    if (wc < exercise.minWords) {
        issues.push(`Minimum ${exercise.minWords} kelime gerekli. Simdi: ${wc} kelime.`);
    } else if (wc > exercise.maxWords) {
        issues.push(`Maximum ${exercise.maxWords} kelime olmali. Simdi: ${wc} kelime.`);
    } else {
        successes.push(`Kelime sayisi uygun: ${wc} kelime`);
    }

    // 2. Keyword presence check
    const foundKeywords = [];
    const missingKeywords = [];

    if (exercise.checkKeywords && exercise.checkKeywords.length > 0) {
        exercise.checkKeywords.forEach(kw => {
            if (textLower.includes(kw.toLowerCase())) {
                foundKeywords.push(kw);
            } else {
                missingKeywords.push(kw);
            }
        });

        if (foundKeywords.length === exercise.checkKeywords.length) {
            successes.push(`Tum anahtar kelimeler bulundu!`);
        }
    }

    // 3. Check for any pass (minimum: word count OK)
    const wordCountOK = wc >= exercise.minWords && wc <= exercise.maxWords;
    const allKeywordsFound = missingKeywords.length === 0;
    const passed = wordCountOK;

    // 4. Grant XP (first time only)
    const isFirstTime = !completedIds.includes(exercise.id);
    if (passed && isFirstTime) {
        completedIds.push(exercise.id);
        saveCompleted();
        if (window.progressManager) {
            window.progressManager.addXP(15);
            window.progressManager.completeActivity(`writing-${exercise.id}`);
        }
        if (window.showXPGain) window.showXPGain(15);
        if (window.audioManager) window.audioManager.playCorrect();
        showToast('Yazma alishtirmasi tamamlandi! +15 XP', 'success');
    } else if (passed && !isFirstTime) {
        if (window.audioManager) window.audioManager.playCorrect();
        showToast('Tebrikler! Alishtirmayi basariyla tamamladin.', 'info');
    } else {
        if (window.audioManager) window.audioManager.playWrong();
    }

    // 5. Build result HTML
    resultContainer.innerHTML = `
        <div class="weak-words-panel" style="border-left:4px solid ${passed ? 'var(--accent-color)' : '#e74c3c'};padding:1.25rem;">

            <!-- Status -->
            <h3 style="color:${passed ? 'var(--accent-color)' : '#e74c3c'};margin-bottom:0.75rem;">
                ${passed ? 'Basarili!' : 'Tamamlanmadi'}
            </h3>

            <!-- Issues -->
            ${issues.length > 0 ? `
                <div style="margin-bottom:0.75rem;">
                    ${issues.map(iss => `
                        <p style="color:#e74c3c;font-size:0.88rem;margin:0.2rem 0;">&#10060; ${iss}</p>
                    `).join('')}
                </div>
            ` : ''}

            <!-- Successes -->
            ${successes.length > 0 ? `
                <div style="margin-bottom:0.75rem;">
                    ${successes.map(s => `
                        <p style="color:#27ae60;font-size:0.88rem;margin:0.2rem 0;">&#10004; ${s}</p>
                    `).join('')}
                </div>
            ` : ''}

            <!-- Keyword Analysis -->
            ${exercise.checkKeywords && exercise.checkKeywords.length > 0 ? `
                <div style="margin:0.75rem 0;padding:0.75rem;background:rgba(108,92,231,0.06);border-radius:8px;">
                    <p style="font-weight:600;font-size:0.88rem;margin-bottom:0.5rem;">Anahtar Kelime Analizi:</p>
                    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
                        ${exercise.checkKeywords.map(kw => {
                            const found = foundKeywords.includes(kw);
                            return `<span style="
                                padding:3px 10px;
                                border-radius:12px;
                                font-size:0.8rem;
                                font-weight:600;
                                background:${found ? 'rgba(39,174,96,0.15)' : 'rgba(231,76,60,0.15)'};
                                color:${found ? '#27ae60' : '#e74c3c'};
                                border:1px solid ${found ? '#27ae60' : '#e74c3c'};
                            ">${found ? '&#10004;' : '&#10060;'} ${kw}</span>`;
                        }).join('')}
                    </div>
                    ${missingKeywords.length > 0 ? `
                        <p style="font-size:0.8rem;color:#e74c3c;margin-top:0.5rem;">
                            Eksik kelimeler: ${missingKeywords.join(', ')}
                        </p>
                    ` : ''}
                </div>
            ` : ''}

            ${isFirstTime && passed ? `
                <div style="margin:0.75rem 0;padding:0.5rem 0.75rem;background:rgba(39,174,96,0.1);border-radius:8px;">
                    <p style="color:#27ae60;font-weight:600;font-size:0.88rem;">+15 XP kazandin!</p>
                </div>
            ` : ''}

            <!-- Example Answer -->
            <div style="margin-top:1rem;padding:1rem;background:var(--card-bg);border:1px solid var(--border-color);border-radius:8px;">
                <p style="font-weight:600;font-size:0.88rem;margin-bottom:0.5rem;color:var(--primary-color);">Ornek Cevap:</p>
                <p style="font-size:0.88rem;line-height:1.6;color:var(--text-color);font-style:italic;">"${exercise.exampleAnswer}"</p>
            </div>

            <!-- Your Answer (for review) -->
            <div style="margin-top:0.75rem;padding:1rem;background:var(--card-bg);border:1px solid var(--border-color);border-radius:8px;">
                <p style="font-weight:600;font-size:0.88rem;margin-bottom:0.5rem;color:var(--primary-color);">Senin Cevabin:</p>
                <p style="font-size:0.88rem;line-height:1.6;color:var(--text-color);">"${escapeHTML(text)}"</p>
                <p style="font-size:0.78rem;color:var(--text-light);margin-top:0.3rem;">${wc} kelime</p>
            </div>

            <!-- Action buttons -->
            <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
                <button id="writing-retry-btn" class="btn secondary">Tekrar Yaz</button>
                <button id="writing-list-btn" class="btn">Listeye Don</button>
            </div>
        </div>
    `;

    // Retry button
    document.getElementById('writing-retry-btn').addEventListener('click', () => {
        renderWritingSession(exercise.id);
    });

    // Back to list button
    document.getElementById('writing-list-btn').addEventListener('click', () => {
        renderExerciseList();
    });

    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── HTML Escape ───────────────────────────────────────────────────
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
