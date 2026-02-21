// Reading Module — CEFR seviyeli okuma parçaları, kelime vurgulama, TTS, progress tracking
import { vocabData } from '../core/data.js';
import { speak } from '../core/services.js';
import { getCEFRBadgeHTML, getTypeBadgeHTML } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Okuma Metinleri — CEFR seviyeli ─────────────────────────
const readingTexts = [
    {
        id: 1, title: "A Good Morning", level: "A1", category: "daily-life",
        wordCount: 45, readingTime: 1,
        text: [
            "Every morning, Tom wakes up early and drinks water before breakfast.",
            "He is happy because the weather is beautiful and warm.",
            "He writes in his journal, then eats with his friend Sarah.",
            "Sarah is a teacher who loves to read big books.",
            "Together they think about their future plans and talk about school."
        ],
        questions: [
            { q: "What does Tom drink before breakfast?", type: "multiple-choice", options: ["Coffee", "Water", "Juice", "Milk"], answer: "Water" },
            { q: "What is Sarah's job?", type: "multiple-choice", options: ["Doctor", "Teacher", "Driver", "Writer"], answer: "Teacher" },
            { q: "How does Tom feel in the morning?", type: "multiple-choice", options: ["Sad", "Cold", "Happy", "Tired"], answer: "Happy" }
        ],
        keyVocab: ["wake", "drink", "happy", "beautiful", "warm", "write", "eat", "think"]
    },
    {
        id: 2, title: "The Fast Car", level: "A1", category: "daily-life",
        wordCount: 48, readingTime: 1,
        text: [
            "Alex has a big, fast car that he loves very much.",
            "He thinks the car is strong and beautiful.",
            "Every weekend, Alex and his friend run to the park near their house.",
            "They eat lunch outside and sleep under the big trees.",
            "Alex writes a book about cars and their amazing engines."
        ],
        questions: [
            { q: "What does Alex have?", type: "multiple-choice", options: ["A big house", "A fast car", "A school", "A book"], answer: "A fast car" },
            { q: "Where do Alex and his friend run?", type: "multiple-choice", options: ["To the beach", "To school", "To the park", "To a restaurant"], answer: "To the park" },
            { q: "What does Alex write?", type: "multiple-choice", options: ["A diary", "A book about cars", "A letter", "A poem"], answer: "A book about cars" }
        ],
        keyVocab: ["big", "fast", "strong", "beautiful", "run", "eat", "sleep", "write"]
    },
    {
        id: 3, title: "My Family", level: "A1", category: "family",
        wordCount: 52, readingTime: 1,
        text: [
            "My name is Emma and I have a small family.",
            "My mother is a nurse and my father is a driver.",
            "I have one brother and one sister.",
            "My brother likes to play football and my sister loves music.",
            "We live in a small house near the school.",
            "Every evening, we eat dinner together and watch television."
        ],
        questions: [
            { q: "What is Emma's mother's job?", type: "multiple-choice", options: ["Teacher", "Nurse", "Doctor", "Driver"], answer: "Nurse" },
            { q: "How many siblings does Emma have?", type: "multiple-choice", options: ["One", "Two", "Three", "None"], answer: "Two" },
            { q: "What does the family do every evening?", type: "multiple-choice", options: ["Go to park", "Play games", "Eat dinner together", "Go shopping"], answer: "Eat dinner together" }
        ],
        keyVocab: ["family", "mother", "father", "brother", "sister", "house", "school", "evening"]
    },
    {
        id: 4, title: "At the Supermarket", level: "A1", category: "shopping",
        wordCount: 55, readingTime: 1,
        text: [
            "Today is Saturday and Lisa goes to the supermarket.",
            "She needs to buy milk, bread, eggs, and some fruit.",
            "The supermarket is very big and has many different things.",
            "Lisa also buys some chicken for dinner tonight.",
            "She pays with her credit card and walks home.",
            "Lisa is happy because she found everything she needed."
        ],
        questions: [
            { q: "What day is it?", type: "multiple-choice", options: ["Monday", "Friday", "Saturday", "Sunday"], answer: "Saturday" },
            { q: "What does Lisa NOT buy?", type: "multiple-choice", options: ["Milk", "Bread", "Fish", "Eggs"], answer: "Fish" },
            { q: "How does Lisa pay?", type: "multiple-choice", options: ["Cash", "Credit card", "Phone", "Check"], answer: "Credit card" }
        ],
        keyVocab: ["buy", "milk", "bread", "fruit", "chicken", "dinner", "happy", "walk"]
    },
    {
        id: 5, title: "Travel to London", level: "A2", category: "travel",
        wordCount: 68, readingTime: 2,
        text: [
            "Last summer, my family traveled to London for a holiday.",
            "We stayed in a hotel near the famous Big Ben clock tower.",
            "On the first day, we visited the British Museum and saw many old things.",
            "The weather was cloudy but we still enjoyed walking around the city.",
            "We tried fish and chips, which is a traditional English food.",
            "My favorite part was riding the London Eye because you can see the whole city.",
            "I want to visit London again next year."
        ],
        questions: [
            { q: "When did the family travel to London?", type: "multiple-choice", options: ["Last winter", "Last summer", "Last spring", "Last month"], answer: "Last summer" },
            { q: "What did they visit on the first day?", type: "multiple-choice", options: ["London Eye", "Big Ben", "British Museum", "Tower Bridge"], answer: "British Museum" },
            { q: "What traditional food did they try?", type: "multiple-choice", options: ["Pizza", "Sushi", "Fish and chips", "Hamburger"], answer: "Fish and chips" },
            { q: "Why was the London Eye the favorite part?", type: "multiple-choice", options: ["It was free", "You can see the whole city", "It was fast", "It had food"], answer: "You can see the whole city" }
        ],
        keyVocab: ["travel", "hotel", "visit", "museum", "weather", "enjoy", "walk", "city", "food", "favorite"]
    },
    {
        id: 6, title: "Cooking Dinner", level: "A2", category: "daily-life",
        wordCount: 72, readingTime: 2,
        text: [
            "Yesterday evening, I decided to cook dinner for my family.",
            "I looked at a recipe online and chose to make pasta with tomato sauce.",
            "First, I boiled water in a large pot and added the pasta.",
            "Then, I cut some onions, garlic, and tomatoes for the sauce.",
            "While the pasta was cooking, I prepared a simple salad with lettuce and cucumber.",
            "Everyone said the dinner was delicious and asked me to cook again.",
            "I felt proud because it was my first time cooking a full meal."
        ],
        questions: [
            { q: "What did the narrator cook?", type: "multiple-choice", options: ["Rice", "Pasta", "Soup", "Pizza"], answer: "Pasta" },
            { q: "Where did they find the recipe?", type: "multiple-choice", options: ["A cookbook", "Online", "From mother", "Television"], answer: "Online" },
            { q: "What did they prepare besides pasta?", type: "multiple-choice", options: ["Soup", "Salad", "Dessert", "Bread"], answer: "Salad" },
            { q: "How did the family react?", type: "multiple-choice", options: ["They were angry", "They were sad", "They said it was delicious", "They didn't eat"], answer: "They said it was delicious" }
        ],
        keyVocab: ["cook", "dinner", "recipe", "choose", "water", "cut", "prepare", "delicious", "proud"]
    },
    {
        id: 7, title: "My Best Friend", level: "A2", category: "relationships",
        wordCount: 65, readingTime: 2,
        text: [
            "My best friend is called David and we have known each other since primary school.",
            "He is tall with brown hair and always wears a blue jacket.",
            "David is very funny and makes everyone laugh with his jokes.",
            "We often play basketball together after school.",
            "Sometimes we go to the cinema on weekends to watch action movies.",
            "I am lucky to have such a good friend in my life."
        ],
        questions: [
            { q: "How long have they been friends?", type: "multiple-choice", options: ["Since last year", "Since primary school", "Since high school", "Two months"], answer: "Since primary school" },
            { q: "What sport do they play?", type: "multiple-choice", options: ["Football", "Tennis", "Basketball", "Swimming"], answer: "Basketball" },
            { q: "What kind of movies do they watch?", type: "multiple-choice", options: ["Comedy", "Horror", "Action", "Romance"], answer: "Action" },
            { q: "What is David's personality like?", type: "multiple-choice", options: ["Serious", "Shy", "Funny", "Quiet"], answer: "Funny" }
        ],
        keyVocab: ["friend", "know", "tall", "funny", "laugh", "play", "watch", "lucky", "life"]
    },
    {
        id: 8, title: "A Weekend in the Park", level: "A2", category: "leisure",
        wordCount: 70, readingTime: 2,
        text: [
            "Last weekend, the weather was sunny so we went to the park.",
            "There were many people enjoying the beautiful day.",
            "Children were playing on the swings and running on the grass.",
            "My parents sat on a bench and read their newspapers.",
            "I took my dog for a walk around the lake.",
            "We also had a picnic with sandwiches, juice, and cake.",
            "It was a perfect day and everyone was very relaxed."
        ],
        questions: [
            { q: "How was the weather?", type: "multiple-choice", options: ["Rainy", "Cloudy", "Sunny", "Snowy"], answer: "Sunny" },
            { q: "What were the children doing?", type: "multiple-choice", options: ["Swimming", "Playing and running", "Reading", "Sleeping"], answer: "Playing and running" },
            { q: "What did the narrator do with the dog?", type: "multiple-choice", options: ["Fed it", "Walked around the lake", "Played fetch", "Washed it"], answer: "Walked around the lake" },
            { q: "What did they eat at the picnic?", type: "multiple-choice", options: ["Pizza", "Burgers", "Sandwiches and cake", "Pasta"], answer: "Sandwiches and cake" }
        ],
        keyVocab: ["weather", "sunny", "beautiful", "children", "play", "walk", "lake", "perfect", "relax"]
    },
    {
        id: 9, title: "Social Media and Young People", level: "B1", category: "technology",
        wordCount: 95, readingTime: 3,
        text: [
            "Social media has become an important part of young people's lives in the modern world.",
            "Platforms like Instagram, TikTok, and YouTube allow users to share photos, videos, and ideas with millions of people.",
            "Many young people spend several hours each day scrolling through their feeds.",
            "While social media can be useful for staying connected with friends and learning new things, it also has some negative effects.",
            "Studies have shown that too much screen time can lead to problems with sleep and concentration.",
            "Some experts believe that young people should limit their social media use to less than two hours per day.",
            "It is important to find a healthy balance between online and offline activities.",
            "Parents and teachers can help by encouraging young people to spend more time reading, exercising, and socializing in person."
        ],
        questions: [
            { q: "What is one benefit of social media mentioned in the text?", type: "multiple-choice", options: ["Making money", "Staying connected with friends", "Getting better grades", "Learning to cook"], answer: "Staying connected with friends" },
            { q: "What problems can too much screen time cause?", type: "multiple-choice", options: ["Hunger", "Sleep and concentration problems", "Better eyesight", "More friends"], answer: "Sleep and concentration problems" },
            { q: "How much social media use do experts recommend?", type: "multiple-choice", options: ["No limit", "Less than 1 hour", "Less than 2 hours", "More than 3 hours"], answer: "Less than 2 hours" },
            { q: "What can parents and teachers do to help?", type: "multiple-choice", options: ["Ban social media", "Encourage reading and exercising", "Buy more phones", "Nothing"], answer: "Encourage reading and exercising" }
        ],
        keyVocab: ["important", "share", "spend", "useful", "connect", "negative", "believe", "balance", "encourage", "exercise"]
    },
    {
        id: 10, title: "Job Interview Tips", level: "B1", category: "career",
        wordCount: 90, readingTime: 3,
        text: [
            "Getting a job interview can be exciting but also stressful.",
            "The most important thing is to prepare well before the interview day.",
            "Research the company and understand what they do and what they are looking for.",
            "Practice answering common questions like 'Tell me about yourself' and 'What are your strengths?'",
            "On the day of the interview, dress professionally and arrive at least ten minutes early.",
            "During the interview, make eye contact, speak clearly, and show confidence.",
            "After the interview, send a thank-you email to show your appreciation.",
            "Remember that even if you don't get the job, every interview is a learning experience."
        ],
        questions: [
            { q: "What is the most important thing before an interview?", type: "multiple-choice", options: ["Buying new clothes", "Preparing well", "Calling the company", "Relaxing"], answer: "Preparing well" },
            { q: "How early should you arrive?", type: "multiple-choice", options: ["On time", "5 minutes early", "10 minutes early", "30 minutes early"], answer: "10 minutes early" },
            { q: "What should you do after the interview?", type: "multiple-choice", options: ["Call them immediately", "Send a thank-you email", "Visit the office", "Do nothing"], answer: "Send a thank-you email" },
            { q: "What should you do during the interview?", type: "multiple-choice", options: ["Look at the floor", "Speak quietly", "Make eye contact and show confidence", "Talk about salary first"], answer: "Make eye contact and show confidence" }
        ],
        keyVocab: ["interview", "prepare", "research", "company", "practice", "answer", "confidence", "experience", "professional"]
    },
    {
        id: 11, title: "Climate Change", level: "B1", category: "environment",
        wordCount: 100, readingTime: 3,
        text: [
            "Climate change is one of the biggest challenges facing our planet today.",
            "The Earth's temperature has been rising because of greenhouse gases like carbon dioxide.",
            "These gases come from burning fossil fuels such as coal, oil, and natural gas.",
            "The effects of climate change include more extreme weather events, rising sea levels, and melting ice caps.",
            "Many countries have agreed to reduce their carbon emissions to slow down global warming.",
            "Individuals can also help by using less energy, recycling, and choosing public transport.",
            "Scientists say that we need to act quickly because the situation is getting worse every year.",
            "If we work together, we can protect the environment for future generations."
        ],
        questions: [
            { q: "What causes the Earth's temperature to rise?", type: "multiple-choice", options: ["The sun getting bigger", "Greenhouse gases", "Too many people", "Volcanoes"], answer: "Greenhouse gases" },
            { q: "What is one effect of climate change?", type: "multiple-choice", options: ["Colder winters", "Rising sea levels", "More trees", "Less rain"], answer: "Rising sea levels" },
            { q: "How can individuals help?", type: "multiple-choice", options: ["Drive more cars", "Use less energy", "Build more factories", "Cut down trees"], answer: "Use less energy" },
            { q: "What do scientists say we need to do?", type: "multiple-choice", options: ["Wait and see", "Act quickly", "Move to another planet", "Ignore the problem"], answer: "Act quickly" }
        ],
        keyVocab: ["change", "challenge", "temperature", "energy", "reduce", "environment", "protect", "future", "situation"]
    },
    {
        id: 12, title: "The Future of Artificial Intelligence", level: "B2", category: "technology",
        wordCount: 120, readingTime: 4,
        text: [
            "Artificial intelligence, commonly known as AI, has made remarkable progress in recent years.",
            "From virtual assistants to self-driving cars, AI technology is transforming the way we live and work.",
            "In healthcare, AI algorithms can analyze medical images and detect diseases earlier than human doctors in some cases.",
            "However, the rapid development of AI also raises important ethical questions.",
            "One major concern is the potential impact on employment, as machines may replace human workers in many industries.",
            "Another issue is the possibility of bias in AI systems, which can lead to unfair decisions.",
            "Experts emphasize the importance of developing AI responsibly, with proper regulations and transparency.",
            "Despite these challenges, most researchers believe that AI will ultimately benefit humanity if used wisely.",
            "The key is to ensure that AI development prioritizes human values and serves the common good."
        ],
        questions: [
            { q: "How can AI help in healthcare?", type: "multiple-choice", options: ["Replace all doctors", "Analyze medical images", "Build hospitals", "Create new diseases"], answer: "Analyze medical images" },
            { q: "What is a major concern about AI?", type: "multiple-choice", options: ["It's too slow", "Impact on employment", "It costs nothing", "It's boring"], answer: "Impact on employment" },
            { q: "What do experts emphasize about AI development?", type: "multiple-choice", options: ["Speed above all", "Responsible development with regulations", "No rules needed", "Only big companies should use it"], answer: "Responsible development with regulations" },
            { q: "What should AI development prioritize?", type: "multiple-choice", options: ["Profit", "Human values", "Entertainment", "Military use"], answer: "Human values" },
            { q: "What is the author's overall view of AI?", type: "multiple-choice", options: ["Very negative", "Completely neutral", "Beneficial if used wisely", "Dangerous and should be stopped"], answer: "Beneficial if used wisely" }
        ],
        keyVocab: ["artificial", "intelligence", "progress", "technology", "transform", "concern", "impact", "responsible", "benefit", "humanity"]
    },
    {
        id: 13, title: "Cultural Differences in Communication", level: "B2", category: "culture",
        wordCount: 115, readingTime: 4,
        text: [
            "Communication styles vary significantly across different cultures around the world.",
            "In some Western countries, people tend to be direct and say exactly what they mean.",
            "In contrast, many Asian cultures value indirect communication, where the real meaning may be implied rather than stated openly.",
            "Body language also differs greatly between cultures.",
            "For example, maintaining strong eye contact is considered respectful in many Western countries, but it can be seen as rude or aggressive in some Asian and Middle Eastern cultures.",
            "Understanding these differences is crucial for anyone working in an international environment.",
            "Misunderstandings can easily occur when people from different cultural backgrounds interact without awareness of these variations.",
            "Learning about other cultures' communication styles can help build stronger relationships and avoid unnecessary conflicts.",
            "In our increasingly connected world, cultural awareness has become an essential skill."
        ],
        questions: [
            { q: "How do many Western countries communicate?", type: "multiple-choice", options: ["Indirectly", "Through art", "Directly", "Only in writing"], answer: "Directly" },
            { q: "How is eye contact viewed in some Asian cultures?", type: "multiple-choice", options: ["Respectful", "Possibly rude", "Required", "Funny"], answer: "Possibly rude" },
            { q: "Why is understanding cultural differences important?", type: "multiple-choice", options: ["For tourism only", "To avoid misunderstandings", "It's not important", "For language learning only"], answer: "To avoid misunderstandings" },
            { q: "What has cultural awareness become?", type: "multiple-choice", options: ["Unnecessary", "Optional", "An essential skill", "A hobby"], answer: "An essential skill" },
            { q: "What can learning about other cultures help with?", type: "multiple-choice", options: ["Making money", "Building stronger relationships", "Learning languages", "Traveling cheaper"], answer: "Building stronger relationships" }
        ],
        keyVocab: ["culture", "communication", "direct", "value", "consider", "understand", "crucial", "environment", "awareness", "essential"]
    },
    {
        id: 14, title: "How Music Affects the Brain", level: "B2", category: "science",
        wordCount: 110, readingTime: 4,
        text: [
            "Scientists have discovered that music has a profound effect on the human brain.",
            "When we listen to music, multiple areas of the brain are activated simultaneously.",
            "Research shows that music can improve memory, reduce stress, and even help with pain management.",
            "Musicians' brains tend to be different from non-musicians, with stronger connections between the left and right hemispheres.",
            "Studies have also found that learning to play a musical instrument at a young age can enhance cognitive development.",
            "Music therapy is now used in hospitals and clinics to help patients recover from various conditions.",
            "Interestingly, the type of music matters — classical music has been shown to improve concentration, while upbeat music can boost mood and energy.",
            "These findings suggest that music is not just entertainment but a powerful tool for health and well-being."
        ],
        questions: [
            { q: "What happens when we listen to music?", type: "multiple-choice", options: ["Only one brain area activates", "Multiple brain areas activate", "The brain shuts down", "Nothing happens"], answer: "Multiple brain areas activate" },
            { q: "What can music help with?", type: "multiple-choice", options: ["Only entertainment", "Memory, stress, and pain", "Only stress", "Only sleeping"], answer: "Memory, stress, and pain" },
            { q: "What type of music improves concentration?", type: "multiple-choice", options: ["Rock", "Pop", "Classical", "Jazz"], answer: "Classical" },
            { q: "Where is music therapy now used?", type: "multiple-choice", options: ["Only schools", "Hospitals and clinics", "Only at home", "Nowhere"], answer: "Hospitals and clinics" },
            { q: "What do the findings suggest about music?", type: "multiple-choice", options: ["It's just noise", "It's only for young people", "It's a powerful tool for health", "It has no real effect"], answer: "It's a powerful tool for health" }
        ],
        keyVocab: ["discover", "brain", "improve", "memory", "reduce", "stress", "develop", "condition", "concentration", "powerful"]
    }
];

// ── vocabMap — word + type + id ─────────────────────────────
const vocabMap = {};
vocabData.forEach(w => {
    vocabMap[w.word.toLowerCase()] = {
        meaning: w.meaning,
        type: w.type,
        id: w.id
    };
});

let activeTooltip = null;
let activeFilter = 'all';

export function initReadingModule() {
    const container = document.getElementById('app');
    renderReadingList(container);
}

function renderReadingList(container) {
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
    const filtered = activeFilter === 'all' ? readingTexts : readingTexts.filter(t => t.level === activeFilter);

    // Check completed texts
    const completedIds = JSON.parse(localStorage.getItem('reading_completed') || '[]');

    container.innerHTML = `
        <h2>📖 Okuma</h2>
        <p>Metni oku, mavi kelimelere tıklayınca Türkçe anlamını gör.</p>

        <div class="reading-filters" style="display:flex;gap:0.5rem;margin:1rem 0;flex-wrap:wrap;">
            ${levels.map(l => `
                <button class="btn ${activeFilter === l ? '' : 'secondary'} small reading-filter-btn" data-level="${l}">
                    ${l === 'all' ? 'Tümü' : getCEFRBadgeHTML(l)}
                </button>
            `).join('')}
        </div>

        <div class="dashboard-grid" style="margin-top:1rem;">
            ${filtered.map(t => {
                const completed = completedIds.includes(t.id);
                return `
                <div class="card reading-list-card" data-id="${t.id}">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <div class="card-icon">📄</div>
                        ${completed ? '<span style="color:var(--accent-color);font-weight:bold;">✅</span>' : ''}
                    </div>
                    <h3>${t.title}</h3>
                    <div style="display:flex;gap:0.5rem;align-items:center;margin:0.5rem 0;">
                        ${getCEFRBadgeHTML(t.level)}
                        <span style="font-size:0.8rem;color:var(--text-light);">${t.wordCount} kelime · ~${t.readingTime} dk</span>
                    </div>
                    <button class="btn" style="margin-top:0.5rem;">Okumaya Başla</button>
                </div>
            `}).join('')}
        </div>
    `;

    // Filter buttons
    container.querySelectorAll('.reading-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeFilter = btn.dataset.level;
            renderReadingList(container);
        });
    });

    // Card buttons
    container.querySelectorAll('.reading-list-card button').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.target.closest('.card').dataset.id);
            renderReadingSession(id, container);
        });
    });
}

function renderReadingSession(id, container) {
    const text = readingTexts.find(t => t.id === id);

    // Process paragraphs — highlight words in vocabData
    const processedParagraphs = text.text.map(para => {
        return para.split(/(\s+)/).map(token => {
            const clean = token.replace(/[^a-zA-Z]/g, '').toLowerCase();
            const entry = vocabMap[clean];
            if (entry) {
                return `<span class="reading-word" data-word="${clean}" data-meaning="${entry.meaning}" data-type="${entry.type}" data-id="${entry.id}">${token}</span>`;
            }
            return token;
        }).join('');
    });

    container.innerHTML = `
        <div class="reading-container">
            <div style="display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap;">
                <button id="reading-back-btn" class="btn secondary">❮ Metinlere Dön</button>
                <button id="reading-tts-btn" class="btn secondary">🔊 Metni Dinle</button>
            </div>
            <h2>${text.title} ${getCEFRBadgeHTML(text.level)}</h2>
            <p style="font-size:0.85rem;color:var(--text-light);margin-bottom:1rem;">${text.wordCount} kelime · ~${text.readingTime} dk okuma</p>

            <div class="reading-article" id="reading-article" style="position:relative;">
                ${processedParagraphs.map(p => `<p>${p}</p>`).join('')}
            </div>

            <h3 style="margin:1.5rem 0 1rem;">Anlama Soruları</h3>
            <div id="reading-questions"></div>
            <div id="reading-result" style="margin-top:1rem;"></div>
        </div>
    `;

    document.getElementById('reading-back-btn').addEventListener('click', () => {
        removeTooltip();
        window.speechSynthesis?.cancel();
        renderReadingList(container);
    });

    // TTS — read full text
    document.getElementById('reading-tts-btn').addEventListener('click', () => {
        const fullText = text.text.join(' ');
        speak(fullText, 0.85);
    });

    setupWordTooltips();
    renderReadingQuestions(text, container);
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
        const type = target.dataset.type;
        const rect = target.getBoundingClientRect();

        const tooltip = document.createElement('div');
        tooltip.className = 'word-tooltip';
        tooltip.innerHTML = `${meaning} ${getTypeBadgeHTML(type)}`;

        // Position relative to viewport with scroll offset
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const scrollX = window.scrollX || document.documentElement.scrollLeft;

        tooltip.style.position = 'absolute';
        tooltip.style.left = `${rect.left + scrollX + rect.width / 2}px`;
        tooltip.style.transform = 'translateX(-50%)';

        // Check if tooltip would go above viewport
        const topPos = rect.top + scrollY - 42;
        if (rect.top < 50) {
            tooltip.style.top = `${rect.bottom + scrollY + 8}px`;
        } else {
            tooltip.style.top = `${topPos}px`;
        }

        document.body.appendChild(tooltip);
        activeTooltip = tooltip;
    });

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

function renderReadingQuestions(text, mainContainer) {
    const container = document.getElementById('reading-questions');
    const questions = text.questions;
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
                    feedback.textContent = 'Doğru!';
                    feedback.className = 'ex-feedback success';
                    correctCount++;
                    if (window.audioManager) window.audioManager.playCorrect();
                    // Only give XP on first completion
                    const completedIds = JSON.parse(localStorage.getItem('reading_completed') || '[]');
                    if (!completedIds.includes(text.id)) {
                        if (window.progressManager) window.progressManager.addXP(10);
                        if (window.showXPGain) window.showXPGain(10);
                    }
                } else {
                    btn.classList.add('wrong');
                    card.querySelectorAll('.reading-opt-btn').forEach(b => {
                        if (b.dataset.value === q.answer) b.classList.add('correct');
                    });
                    feedback.textContent = `Yanlış. Doğru cevap: ${q.answer}`;
                    feedback.className = 'ex-feedback error';
                    if (window.audioManager) window.audioManager.playWrong();
                }

                // Summary when all questions answered
                if (answered === questions.length) {
                    const result = document.getElementById('reading-result');
                    result.innerHTML = `
                        <div class="weak-words-panel" style="border-left: 4px solid var(--accent-color);">
                            <h3 style="color:var(--accent-color);">Sonuç: ${correctCount}/${questions.length} doğru</h3>
                            <p>${correctCount === questions.length ? 'Mükemmel! Tüm soruları doğru yanıtladın.' : 'Metni tekrar okuyarak eksikleri gider.'}</p>
                        </div>
                    `;

                    // Mark as completed + progress tracking
                    const completedIds = JSON.parse(localStorage.getItem('reading_completed') || '[]');
                    if (!completedIds.includes(text.id)) {
                        completedIds.push(text.id);
                        localStorage.setItem('reading_completed', JSON.stringify(completedIds));
                        if (window.progressManager) {
                            window.progressManager.completeActivity(`reading-${text.id}`);
                        }
                    }

                    if (correctCount === questions.length) {
                        showToast('Mükemmel! Tüm soruları doğru yanıtladın!', 'success');
                    }
                }
            });
        });
    });
}
