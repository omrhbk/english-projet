/**
 * Listening Module — Diyalog tabanlı dinleme alıştırmaları
 * Web Speech API (SpeechSynthesis) ile ses üretimi
 * Video bağımlılığı kaldırıldı
 */

import { speak } from '../core/services.js';
import { getCEFRBadgeHTML } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Diyalog verileri ────────────────────────────────────────
const listeningDialogs = [
    {
        id: 1,
        title: "At the Coffee Shop",
        level: "A1",
        category: "daily-life",
        lines: [
            { speaker: "Waitress", text: "Hi! Welcome. Can I help you?" },
            { speaker: "Customer", text: "Yes, please. I would like a medium latte." },
            { speaker: "Waitress", text: "Anything else?" },
            { speaker: "Customer", text: "No, that is all. Thank you." },
            { speaker: "Waitress", text: "That will be three dollars fifty, please." },
            { speaker: "Customer", text: "Here you go. Have a nice day!" }
        ],
        questions: [
            { q: "What does the customer order?", options: ["Tea", "Medium latte", "Espresso", "Juice"], answer: "Medium latte" },
            { q: "How much does the drink cost?", options: ["$2.50", "$3.50", "$4.00", "$5.00"], answer: "$3.50" }
        ]
    },
    {
        id: 2,
        title: "Asking for Directions",
        level: "A1",
        category: "travel",
        lines: [
            { speaker: "Tourist", text: "Excuse me, where is the train station?" },
            { speaker: "Local", text: "Go straight for two blocks, then turn left." },
            { speaker: "Tourist", text: "Is it far from here?" },
            { speaker: "Local", text: "No, it is about five minutes on foot." },
            { speaker: "Tourist", text: "Thank you very much!" },
            { speaker: "Local", text: "You are welcome. Have a good trip!" }
        ],
        questions: [
            { q: "What is the tourist looking for?", options: ["Bus stop", "Train station", "Airport", "Hotel"], answer: "Train station" },
            { q: "How far is the train station?", options: ["10 minutes", "5 minutes", "15 minutes", "20 minutes"], answer: "5 minutes" },
            { q: "What direction should the tourist turn?", options: ["Right", "Left", "Straight", "Back"], answer: "Left" }
        ]
    },
    {
        id: 3,
        title: "At the Restaurant",
        level: "A1",
        category: "food",
        lines: [
            { speaker: "Waiter", text: "Good evening! Table for two?" },
            { speaker: "Customer", text: "Yes, please. Near the window if possible." },
            { speaker: "Waiter", text: "Of course. Here is the menu." },
            { speaker: "Customer", text: "I will have the chicken salad, please." },
            { speaker: "Waiter", text: "And what would you like to drink?" },
            { speaker: "Customer", text: "Just water, thank you." }
        ],
        questions: [
            { q: "How many people are dining?", options: ["One", "Two", "Three", "Four"], answer: "Two" },
            { q: "What does the customer order to eat?", options: ["Pizza", "Chicken salad", "Steak", "Pasta"], answer: "Chicken salad" },
            { q: "What does the customer order to drink?", options: ["Coffee", "Juice", "Water", "Tea"], answer: "Water" }
        ]
    },
    {
        id: 4,
        title: "Making an Appointment",
        level: "A2",
        category: "health",
        lines: [
            { speaker: "Receptionist", text: "Good morning, City Medical Center. How can I help you?" },
            { speaker: "Patient", text: "Hello, I would like to make an appointment with Doctor Smith." },
            { speaker: "Receptionist", text: "Sure. Is it urgent or a regular check-up?" },
            { speaker: "Patient", text: "It is just a regular check-up." },
            { speaker: "Receptionist", text: "Doctor Smith is available on Thursday at two PM. Does that work?" },
            { speaker: "Patient", text: "Yes, that is perfect. Thank you." },
            { speaker: "Receptionist", text: "Great. Please bring your insurance card." }
        ],
        questions: [
            { q: "Why is the patient calling?", options: ["To cancel", "To make an appointment", "To complain", "To ask about medicine"], answer: "To make an appointment" },
            { q: "When is the appointment?", options: ["Monday 10 AM", "Thursday 2 PM", "Friday 3 PM", "Wednesday 1 PM"], answer: "Thursday 2 PM" },
            { q: "What should the patient bring?", options: ["Passport", "Insurance card", "Money", "ID card"], answer: "Insurance card" }
        ]
    },
    {
        id: 5,
        title: "Checking In at a Hotel",
        level: "A2",
        category: "travel",
        lines: [
            { speaker: "Receptionist", text: "Good afternoon! Welcome to Grand Hotel. Do you have a reservation?" },
            { speaker: "Guest", text: "Yes, I booked a room for two nights. The name is Johnson." },
            { speaker: "Receptionist", text: "Let me check. Yes, a double room with breakfast included." },
            { speaker: "Guest", text: "That is correct. What time is breakfast served?" },
            { speaker: "Receptionist", text: "Breakfast is from seven to ten AM in the restaurant on the ground floor." },
            { speaker: "Guest", text: "Is there free Wi-Fi in the room?" },
            { speaker: "Receptionist", text: "Yes, the password is on the card in your room. Here is your key, room 305." }
        ],
        questions: [
            { q: "How many nights is the guest staying?", options: ["One", "Two", "Three", "Four"], answer: "Two" },
            { q: "What is included with the room?", options: ["Lunch", "Dinner", "Breakfast", "All meals"], answer: "Breakfast" },
            { q: "What room number is the guest in?", options: ["205", "305", "405", "105"], answer: "305" },
            { q: "What time does breakfast end?", options: ["9 AM", "10 AM", "11 AM", "12 PM"], answer: "10 AM" }
        ]
    },
    {
        id: 6,
        title: "Job Interview",
        level: "A2",
        category: "career",
        lines: [
            { speaker: "Interviewer", text: "Nice to meet you. Please sit down. Tell me about yourself." },
            { speaker: "Candidate", text: "Thank you. I graduated from university two years ago. I studied marketing." },
            { speaker: "Interviewer", text: "What experience do you have in this field?" },
            { speaker: "Candidate", text: "I worked as a marketing assistant at a small company for one year." },
            { speaker: "Interviewer", text: "Why do you want to work for our company?" },
            { speaker: "Candidate", text: "I have always admired your company's creative approach to advertising." },
            { speaker: "Interviewer", text: "When can you start if we offer you the position?" },
            { speaker: "Candidate", text: "I can start next month." }
        ],
        questions: [
            { q: "What did the candidate study?", options: ["Engineering", "Marketing", "Medicine", "Law"], answer: "Marketing" },
            { q: "How long did the candidate work as an assistant?", options: ["6 months", "1 year", "2 years", "3 months"], answer: "1 year" },
            { q: "When can the candidate start?", options: ["Immediately", "Next week", "Next month", "In two months"], answer: "Next month" }
        ]
    },
    {
        id: 7,
        title: "Planning a Weekend Trip",
        level: "B1",
        category: "travel",
        lines: [
            { speaker: "Sarah", text: "Have you ever been to the mountains? I am thinking about going this weekend." },
            { speaker: "Mike", text: "Actually, I went hiking there last summer. It was absolutely beautiful." },
            { speaker: "Sarah", text: "How long does it take to get there?" },
            { speaker: "Mike", text: "About three hours by car. But the roads can be tricky in bad weather." },
            { speaker: "Sarah", text: "Should I book a hotel or is there a camping area?" },
            { speaker: "Mike", text: "There are both options. If the weather is nice, camping is much more enjoyable." },
            { speaker: "Sarah", text: "I have never been camping before. Do you think I should try it?" },
            { speaker: "Mike", text: "Definitely! I could come with you and show you the best spots." }
        ],
        questions: [
            { q: "Where does Sarah want to go?", options: ["Beach", "Mountains", "City", "Lake"], answer: "Mountains" },
            { q: "How long is the drive?", options: ["1 hour", "2 hours", "3 hours", "4 hours"], answer: "3 hours" },
            { q: "Has Sarah been camping before?", options: ["Yes, many times", "Yes, once", "No, never", "Not mentioned"], answer: "No, never" },
            { q: "What does Mike suggest about camping?", options: ["Don't try it", "It depends on weather", "Always camp", "Stay in hotel"], answer: "It depends on weather" }
        ]
    },
    {
        id: 8,
        title: "Discussing a News Article",
        level: "B1",
        category: "current-affairs",
        lines: [
            { speaker: "Anna", text: "Did you read the article about electric cars becoming cheaper?" },
            { speaker: "Tom", text: "Yes, it said that by 2030, electric cars could be the same price as regular cars." },
            { speaker: "Anna", text: "I think that would be great for the environment." },
            { speaker: "Tom", text: "True, but the infrastructure needs to improve too. There aren't enough charging stations." },
            { speaker: "Anna", text: "That is a valid point. The government should invest more in charging networks." },
            { speaker: "Tom", text: "Some countries in Europe have already made significant progress in that area." },
            { speaker: "Anna", text: "Maybe we should consider buying an electric car for our next vehicle." },
            { speaker: "Tom", text: "Let us wait and see how the prices change in the next couple of years." }
        ],
        questions: [
            { q: "What is the article about?", options: ["Self-driving cars", "Electric cars getting cheaper", "Car accidents", "Public transport"], answer: "Electric cars getting cheaper" },
            { q: "What year is mentioned for price equality?", options: ["2025", "2028", "2030", "2035"], answer: "2030" },
            { q: "What problem does Tom mention?", options: ["Too expensive", "Not enough charging stations", "Too slow", "Bad design"], answer: "Not enough charging stations" },
            { q: "What do they decide at the end?", options: ["Buy one now", "Wait and see", "Buy a regular car", "Use public transport"], answer: "Wait and see" }
        ]
    },
    {
        id: 9,
        title: "University Lecture on Climate",
        level: "B1",
        category: "education",
        lines: [
            { speaker: "Professor", text: "Today we are going to discuss the relationship between ocean temperatures and weather patterns." },
            { speaker: "Professor", text: "When ocean temperatures rise, it can lead to more intense hurricanes and heavier rainfall." },
            { speaker: "Student", text: "Professor, is this related to El Nino?" },
            { speaker: "Professor", text: "Excellent question. El Nino is one of the most significant ocean-atmosphere phenomena." },
            { speaker: "Professor", text: "It occurs when the Pacific Ocean becomes warmer than usual, which affects weather globally." },
            { speaker: "Student", text: "How often does El Nino happen?" },
            { speaker: "Professor", text: "It typically occurs every two to seven years and can last from nine months to two years." },
            { speaker: "Professor", text: "For your assignment, I want you to research how El Nino has affected your country." }
        ],
        questions: [
            { q: "What is the lecture about?", options: ["Space", "Ocean temperatures and weather", "Earthquakes", "Pollution"], answer: "Ocean temperatures and weather" },
            { q: "What can rising ocean temperatures cause?", options: ["Snow", "More intense hurricanes", "Droughts only", "Lower sea levels"], answer: "More intense hurricanes" },
            { q: "How often does El Nino occur?", options: ["Every year", "Every 2-7 years", "Every 10 years", "Every month"], answer: "Every 2-7 years" },
            { q: "What is the homework assignment?", options: ["Write about hurricanes", "Research El Nino's effect on their country", "Read a textbook", "Watch a documentary"], answer: "Research El Nino's effect on their country" }
        ]
    },
    {
        id: 10,
        title: "Business Meeting Discussion",
        level: "B2",
        category: "business",
        lines: [
            { speaker: "Manager", text: "Thank you all for coming. Let us start by reviewing last quarter's performance." },
            { speaker: "Manager", text: "Overall, our revenue increased by twelve percent, which exceeded our expectations." },
            { speaker: "Sales Lead", text: "The growth was primarily driven by our expansion into the Asian market." },
            { speaker: "Manager", text: "That is correct. However, our operating costs have also risen by eight percent." },
            { speaker: "Finance Director", text: "We need to optimize our supply chain to bring those costs down." },
            { speaker: "Manager", text: "I agree. I would like each department to submit cost reduction proposals by next Friday." },
            { speaker: "Sales Lead", text: "Should we also consider adjusting our pricing strategy for the next quarter?" },
            { speaker: "Manager", text: "Good point. Let us schedule a separate meeting to discuss pricing in detail." }
        ],
        questions: [
            { q: "How much did revenue increase?", options: ["8%", "10%", "12%", "15%"], answer: "12%" },
            { q: "What drove the growth?", options: ["New products", "Asian market expansion", "Price increases", "Marketing"], answer: "Asian market expansion" },
            { q: "What is the concern about costs?", options: ["They decreased", "They stayed the same", "They rose by 8%", "They doubled"], answer: "They rose by 8%" },
            { q: "What is the deadline for proposals?", options: ["Next Monday", "Next Wednesday", "Next Friday", "Next month"], answer: "Next Friday" },
            { q: "What will be discussed in a separate meeting?", options: ["Hiring", "Pricing strategy", "Marketing", "Office relocation"], answer: "Pricing strategy" }
        ]
    }
];

let activeFilter = 'all';
let isSpeaking = false;

export function initListeningModule() {
    renderDialogList();
}

function renderDialogList() {
    const container = document.getElementById('app');
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
    const filtered = activeFilter === 'all' ? listeningDialogs : listeningDialogs.filter(d => d.level === activeFilter);

    container.innerHTML = `
        <h2>🎧 Duyduğunu Anlama</h2>
        <p>Diyalogları dinle, metni takip et ve soruları cevapla.</p>

        <div class="reading-filters" style="display:flex;gap:0.5rem;margin:1rem 0;flex-wrap:wrap;">
            ${levels.map(l => `
                <button class="btn ${activeFilter === l ? '' : 'secondary'} small listening-filter-btn" data-level="${l}">
                    ${l === 'all' ? 'Tümü' : getCEFRBadgeHTML(l)}
                </button>
            `).join('')}
        </div>

        <div class="dashboard-grid">
            ${filtered.map(d => `
                <div class="card listening-card" data-id="${d.id}">
                    <div class="card-icon">🎧</div>
                    <h3>${d.title}</h3>
                    <div style="display:flex;gap:0.5rem;align-items:center;margin:0.5rem 0;">
                        ${getCEFRBadgeHTML(d.level)}
                        <span style="font-size:0.8rem;color:var(--text-light);">${d.lines.length} satır · ${d.questions.length} soru</span>
                    </div>
                    <button class="btn">Dinle & Öğren</button>
                </div>
            `).join('')}
        </div>
    `;

    container.querySelectorAll('.listening-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeFilter = btn.dataset.level;
            renderDialogList();
        });
    });

    container.querySelectorAll('.listening-card button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('.card').dataset.id);
            loadDialogSession(id);
        });
    });
}

function loadDialogSession(id) {
    const dialog = listeningDialogs.find(d => d.id === id);
    const container = document.getElementById('app');

    container.innerHTML = `
        <div class="listening-session-container">
            <div style="display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap;">
                <button id="listening-back-btn" class="btn secondary">❮ Listeye Dön</button>
                <button id="play-all-btn" class="btn">▶ Tümünü Dinle</button>
                <button id="stop-btn" class="btn secondary">⏹ Durdur</button>
            </div>

            <h2>${dialog.title} ${getCEFRBadgeHTML(dialog.level)}</h2>

            <div id="transcript-toggle" style="margin:1rem 0;">
                <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer;">
                    <input type="checkbox" id="show-transcript" checked />
                    <span>Metni Göster</span>
                </label>
            </div>

            <div class="dialog-lines" id="dialog-lines">
                ${dialog.lines.map((line, i) => `
                    <div class="dialog-line" data-index="${i}" style="display:flex;gap:0.75rem;align-items:flex-start;margin-bottom:0.75rem;padding:0.75rem;border-radius:8px;background:var(--card-bg);border:1px solid var(--border-color);cursor:pointer;transition:all 0.3s;">
                        <div style="min-width:90px;font-weight:600;color:var(--primary-color);">${line.speaker}:</div>
                        <div class="dialog-text" style="flex:1;">${line.text}</div>
                        <button class="btn secondary small play-line-btn" data-index="${i}" title="Bu satırı dinle">🔊</button>
                    </div>
                `).join('')}
            </div>

            <div id="dictation-section" style="margin-top:1.5rem;display:none;">
                <h3>✍️ Dikte Modu</h3>
                <p style="color:var(--text-light);margin-bottom:0.5rem;">Satırı dinle ve duyduğunu yaz:</p>
                <div id="dictation-area"></div>
            </div>

            <button id="start-dictation-btn" class="btn secondary" style="margin-top:1rem;">✍️ Dikte Modunu Başlat</button>

            <h3 style="margin:1.5rem 0 1rem;">Anlama Soruları</h3>
            <div id="listening-questions"></div>
            <div id="listening-result" style="margin-top:1rem;"></div>
        </div>
    `;

    // Back button
    document.getElementById('listening-back-btn').addEventListener('click', () => {
        window.speechSynthesis?.cancel();
        isSpeaking = false;
        renderDialogList();
    });

    // Play all lines sequentially
    document.getElementById('play-all-btn').addEventListener('click', () => {
        playAllLines(dialog.lines, 0);
    });

    // Stop
    document.getElementById('stop-btn').addEventListener('click', () => {
        window.speechSynthesis?.cancel();
        isSpeaking = false;
        document.querySelectorAll('.dialog-line').forEach(el => el.style.background = 'var(--card-bg)');
    });

    // Play individual lines
    document.querySelectorAll('.play-line-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(btn.dataset.index);
            speakLine(dialog.lines[idx].text, idx);
        });
    });

    // Click on line to play
    document.querySelectorAll('.dialog-line').forEach(el => {
        el.addEventListener('click', () => {
            const idx = parseInt(el.dataset.index);
            speakLine(dialog.lines[idx].text, idx);
        });
    });

    // Transcript toggle
    document.getElementById('show-transcript').addEventListener('change', (e) => {
        const texts = document.querySelectorAll('.dialog-text');
        texts.forEach(t => {
            t.style.visibility = e.target.checked ? 'visible' : 'hidden';
        });
    });

    // Dictation mode
    document.getElementById('start-dictation-btn').addEventListener('click', () => {
        startDictation(dialog);
    });

    // Questions
    renderListeningQuestions(dialog);
}

function speakLine(text, index) {
    window.speechSynthesis?.cancel();

    // Highlight active line
    document.querySelectorAll('.dialog-line').forEach(el => {
        el.style.background = 'var(--card-bg)';
    });
    const activeLine = document.querySelector(`.dialog-line[data-index="${index}"]`);
    if (activeLine) {
        activeLine.style.background = 'rgba(74, 144, 226, 0.1)';
    }

    speak(text, 0.85);
}

function playAllLines(lines, index) {
    if (index >= lines.length) {
        isSpeaking = false;
        document.querySelectorAll('.dialog-line').forEach(el => el.style.background = 'var(--card-bg)');
        return;
    }

    isSpeaking = true;

    // Highlight current line
    document.querySelectorAll('.dialog-line').forEach(el => el.style.background = 'var(--card-bg)');
    const activeLine = document.querySelector(`.dialog-line[data-index="${index}"]`);
    if (activeLine) {
        activeLine.style.background = 'rgba(74, 144, 226, 0.1)';
        activeLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const utterance = new SpeechSynthesisUtterance(lines[index].text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;

    utterance.onend = () => {
        if (isSpeaking) {
            setTimeout(() => playAllLines(lines, index + 1), 500);
        }
    };

    window.speechSynthesis.speak(utterance);
}

function startDictation(dialog) {
    const section = document.getElementById('dictation-section');
    section.style.display = 'block';
    document.getElementById('start-dictation-btn').style.display = 'none';

    // Pick random line
    const randomIdx = Math.floor(Math.random() * dialog.lines.length);
    const line = dialog.lines[randomIdx];

    const area = document.getElementById('dictation-area');
    area.innerHTML = `
        <div style="padding:1rem;background:var(--card-bg);border-radius:8px;border:1px solid var(--border-color);">
            <button id="dictation-play-btn" class="btn">🔊 Dinle</button>
            <div style="margin-top:1rem;">
                <textarea id="dictation-input" class="ex-input full-width" placeholder="Duyduğunu buraya yaz..." rows="2"></textarea>
                <button id="dictation-check-btn" class="btn small" style="margin-top:0.5rem;">Kontrol Et</button>
            </div>
            <p id="dictation-feedback" class="feedback-msg" style="margin-top:0.5rem;"></p>
        </div>
    `;

    document.getElementById('dictation-play-btn').addEventListener('click', () => {
        speak(line.text, 0.8);
    });

    document.getElementById('dictation-check-btn').addEventListener('click', () => {
        const input = document.getElementById('dictation-input').value.trim().toLowerCase();
        const correct = line.text.toLowerCase().replace(/[.,!?]/g, '');
        const feedback = document.getElementById('dictation-feedback');

        if (input === correct || input === line.text.toLowerCase()) {
            feedback.textContent = 'Mükemmel! Doğru yazdın!';
            feedback.className = 'feedback-msg success';
            if (window.audioManager) window.audioManager.playCorrect();
            if (window.progressManager) window.progressManager.addXP(15);
            if (window.showXPGain) window.showXPGain(15);
        } else {
            // Show similarity
            const words = correct.split(' ');
            const inputWords = input.split(' ');
            const correctWords = words.filter((w, i) => inputWords[i] === w).length;
            const pct = Math.round((correctWords / words.length) * 100);
            feedback.innerHTML = `Doğruluk: %${pct}<br>Doğru cevap: <strong>"${line.text}"</strong>`;
            feedback.className = 'feedback-msg error';
            if (window.audioManager) window.audioManager.playWrong();
        }
    });

    // Auto play
    setTimeout(() => speak(line.text, 0.8), 500);
}

function renderListeningQuestions(dialog) {
    const container = document.getElementById('listening-questions');
    const questions = dialog.questions;
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
            <p class="ex-feedback" id="lq-feedback-${idx}"></p>
        `;
        container.appendChild(card);

        card.querySelectorAll('.reading-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                card.querySelectorAll('.reading-opt-btn').forEach(b => { b.disabled = true; });
                answered++;

                const feedback = document.getElementById(`lq-feedback-${idx}`);
                if (btn.dataset.value === q.answer) {
                    btn.classList.add('correct');
                    feedback.textContent = 'Doğru!';
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
                    feedback.textContent = `Yanlış. Doğru cevap: ${q.answer}`;
                    feedback.className = 'ex-feedback error';
                    if (window.audioManager) window.audioManager.playWrong();
                }

                if (answered === questions.length) {
                    const result = document.getElementById('listening-result');
                    result.innerHTML = `
                        <div class="weak-words-panel" style="border-left: 4px solid var(--accent-color);">
                            <h3 style="color:var(--accent-color);">Sonuç: ${correctCount}/${questions.length} doğru</h3>
                            <p>${correctCount === questions.length ? 'Mükemmel! Tüm soruları doğru yanıtladın.' : 'Diyalogu tekrar dinleyerek pratik yap.'}</p>
                        </div>
                    `;

                    if (correctCount === questions.length) {
                        showToast('Harika! Tüm soruları doğru yanıtladın!', 'success');
                    }

                    if (window.progressManager) {
                        window.progressManager.completeActivity(`listening-${dialog.id}`);
                    }
                }
            });
        });
    });
}
