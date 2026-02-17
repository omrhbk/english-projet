// ─────────────────────────────────────────────────────────
//  Static Data — English Learning App
// ─────────────────────────────────────────────────────────

// Kelimeler artık Free Dictionary API + Unsplash üzerinden dinamik yükleniyor.
// Bu liste sadece offline/fallback ve ilk yükleme için kullanılır.
export const vocabData = [
    { id: 1,  word: "Apple",    meaning: "Elma",      synonyms: ["Fruit", "Red fruit"],        type: "noun",      image: null },
    { id: 2,  word: "Run",      meaning: "Koşmak",    synonyms: ["Jog", "Sprint"],             type: "verb",      image: null },
    { id: 3,  word: "Happy",    meaning: "Mutlu",     synonyms: ["Joyful", "Cheerful"],        type: "adjective", image: null },
    { id: 4,  word: "School",   meaning: "Okul",      synonyms: ["Academy", "Institution"],    type: "noun",      image: null },
    { id: 5,  word: "Book",     meaning: "Kitap",     synonyms: ["Volume", "Text"],            type: "noun",      image: null },
    { id: 6,  word: "Beautiful",meaning: "Güzel",     synonyms: ["Pretty", "Attractive"],      type: "adjective", image: null },
    { id: 7,  word: "Water",    meaning: "Su",        synonyms: ["H2O", "Liquid"],             type: "noun",      image: null },
    { id: 8,  word: "Eat",      meaning: "Yemek",     synonyms: ["Consume", "Dine"],           type: "verb",      image: null },
    { id: 9,  word: "Fast",     meaning: "Hızlı",     synonyms: ["Quick", "Rapid"],            type: "adjective", image: null },
    { id: 10, word: "Friend",   meaning: "Arkadaş",   synonyms: ["Buddy", "Pal"],              type: "noun",      image: null },
    { id: 11, word: "Sleep",    meaning: "Uyumak",    synonyms: ["Rest", "Slumber"],           type: "verb",      image: null },
    { id: 12, word: "Big",      meaning: "Büyük",     synonyms: ["Large", "Huge"],             type: "adjective", image: null },
    { id: 13, word: "Car",      meaning: "Araba",     synonyms: ["Vehicle", "Automobile"],     type: "noun",      image: null },
    { id: 14, word: "Think",    meaning: "Düşünmek",  synonyms: ["Ponder", "Consider"],        type: "verb",      image: null },
    { id: 15, word: "Cold",     meaning: "Soğuk",     synonyms: ["Chilly", "Freezing"],        type: "adjective", image: null },
    { id: 16, word: "House",    meaning: "Ev",        synonyms: ["Home", "Residence"],         type: "noun",      image: null },
    { id: 17, word: "Write",    meaning: "Yazmak",    synonyms: ["Compose", "Author"],         type: "verb",      image: null },
    { id: 18, word: "Strong",   meaning: "Güçlü",     synonyms: ["Powerful", "Robust"],        type: "adjective", image: null },
    { id: 19, word: "Teacher",  meaning: "Öğretmen",  synonyms: ["Educator", "Instructor"],    type: "noun",      image: null },
    { id: 20, word: "Love",     meaning: "Sevmek",    synonyms: ["Adore", "Cherish"],          type: "verb",      image: null }
];

// ─────────────────────────────────────────────────────────
//  Listening Data
// ─────────────────────────────────────────────────────────
export const listeningData = [
    {
        id: 1,
        title: "At the Coffee Shop",
        description: "Kahve siparişi verme diyaloğu.",
        transcript: "W: Hi, can I help you? \nM: Yes, I'd like a medium latte, please. \nW: Anything else? \nM: No, that's all. Thanks.",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        questions: [
            {
                id: 1,
                time: 15,
                question: "What is the atmosphere like?",
                options: ["Happy", "Tense/Action", "Calm"],
                answer: "Tense/Action"
            }
        ]
    },
    {
        id: 2,
        title: "Nature Documentary",
        description: "Doğa ve hayvanlar hakkında kısa belgesel.",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        questions: [
            {
                id: 1,
                time: 10,
                question: "What functionality is being demonstrated?",
                options: ["Running", "Animation", "Sleeping"],
                answer: "Animation"
            }
        ]
    }
];

// ─────────────────────────────────────────────────────────
//  Grammar Data — CEFR Seviyeli (A1 → C2)
// ─────────────────────────────────────────────────────────

export const cefrLevels = [
    { id: "A1", label: "A1 – Başlangıç (Beginner)",              color: "#4caf50", emoji: "🌱" },
    { id: "A2", label: "A2 – Orta (Elementary)",                  color: "#8bc34a", emoji: "🌿" },
    { id: "B1", label: "B1 – Orta Üstü (Pre-Intermediate)",       color: "#ff9800", emoji: "🌟" },
    { id: "B2", label: "B2 – İleri (Upper-Intermediate)",          color: "#f44336", emoji: "🔥" },
    { id: "C1", label: "C1 – Üst Düzey (Advanced)",               color: "#9c27b0", emoji: "💎" },
    { id: "C2", label: "C2 – Ana Dil Seviyesi (Mastery)",          color: "#3f51b5", emoji: "👑" }
];

export const grammarData = [

    // ── A1 ────────────────────────────────────────────────
    {
        id: "a1-present-simple",
        level: "A1",
        title: "Present Simple (Geniş Zaman)",
        description: "Günlük rutinler ve genel doğrular için kullanılır.",
        content: `
            <h3>Kullanım Alanları</h3>
            <p><strong>1. Alışkanlıklar:</strong> I drink coffee every morning.</p>
            <p><strong>2. Genel Doğrular:</strong> The sun rises in the east.</p>
            <br>
            <h3>Yapı</h3>
            <p>I/You/We/They + <strong>Fiil</strong></p>
            <p>He/She/It + <strong>Fiil + -s/es</strong></p>
            <br>
            <h3>Örnekler</h3>
            <p>✅ She <strong>works</strong> at a hospital.</p>
            <p>✅ They <strong>play</strong> football on Sundays.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank",  question: "She ____ (like) visual arts.",           answer: "likes",   hint: "3. tekil şahıs → -s ekle." },
            { id: 2, type: "true-false",  question: "We uses the internet everyday. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'We use' doğrudur." },
            { id: 3, type: "writing",     question: "Write a sentence using 'always'.",        keywords: ["always"], answer: "check-keywords" }
        ]
    },
    {
        id: "a1-to-be",
        level: "A1",
        title: "To Be (Am / Is / Are)",
        description: "İngilizce'nin en temel yardımcı fiili.",
        content: `
            <h3>Yapı</h3>
            <p>I <strong>am</strong> → I'm</p>
            <p>He/She/It <strong>is</strong> → He's</p>
            <p>You/We/They <strong>are</strong> → You're</p>
            <br>
            <h3>Örnekler</h3>
            <p>✅ I <strong>am</strong> a student.</p>
            <p>✅ She <strong>is</strong> happy today.</p>
            <p>✅ We <strong>are</strong> friends.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "She ____ a doctor.", answer: "is",  hint: "He/She/It → is" },
            { id: 2, type: "fill-blank", question: "They ____ from Turkey.", answer: "are", hint: "They → are" },
            { id: 3, type: "true-false", question: "I are 20 years old. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "I am doğrudur." }
        ]
    },
    {
        id: "a1-articles",
        level: "A1",
        title: "Articles (a / an / the)",
        description: "Belirsiz ve belirli artikel kullanımı.",
        content: `
            <h3>a / an — Belirsiz Artikel</h3>
            <p><strong>a</strong>: ünsüz harfle başlayan isimler → a book, a car</p>
            <p><strong>an</strong>: ünlü harfle başlayan isimler → an apple, an hour</p>
            <br>
            <h3>the — Belirli Artikel</h3>
            <p>Daha önce bahsedilen veya tek olan nesneler için:</p>
            <p>✅ I saw <strong>a</strong> dog. <strong>The</strong> dog was big.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "I have ____ umbrella.", answer: "an", hint: "Umbrella ünlü harfle başlar." },
            { id: 2, type: "fill-blank", question: "She is ____ engineer.", answer: "an", hint: "Engineer ünlü harfle başlar." },
            { id: 3, type: "true-false", question: "He is a honest man. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'Honest' h harfi okunmaz, 'an' kullanılır." }
        ]
    },

    // ── A2 ────────────────────────────────────────────────
    {
        id: "a2-past-simple",
        level: "A2",
        title: "Past Simple (Geçmiş Zaman)",
        description: "Geçmişte tamamlanmış eylemler.",
        content: `
            <h3>Yapı</h3>
            <p>Özne + <strong>Fiil-2 (düzenli: -ed / düzensiz: özel hali)</strong></p>
            <br>
            <h3>Düzenli Fiiller</h3>
            <p>walk → <strong>walked</strong>, play → <strong>played</strong></p>
            <h3>Düzensiz Fiiller</h3>
            <p>go → <strong>went</strong>, see → <strong>saw</strong>, have → <strong>had</strong></p>
            <br>
            <h3>Örnekler</h3>
            <p>✅ I <strong>walked</strong> to school yesterday.</p>
            <p>✅ She <strong>went</strong> to the cinema last night.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "They ____ (visit) London last year.", answer: "visited", hint: "Düzenli fiil → -ed." },
            { id: 2, type: "fill-blank", question: "I ____ (see) a movie yesterday.", answer: "saw", hint: "'See' düzensiz bir fiildir." },
            { id: 3, type: "true-false", question: "She goed to school. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'Go' düzensiz: went." }
        ]
    },
    {
        id: "a2-future-simple",
        level: "A2",
        title: "Future Simple (Gelecek Zaman — will)",
        description: "Gelecekteki kararlar ve tahminler.",
        content: `
            <h3>Yapı</h3>
            <p>Özne + <strong>will</strong> + Fiil (yalın)</p>
            <br>
            <h3>Kullanım</h3>
            <p><strong>Anlık karar:</strong> I'll take the bus.</p>
            <p><strong>Tahmin:</strong> It will rain tomorrow.</p>
            <p><strong>Söz/teklif:</strong> I will help you.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "They ____ (arrive) tomorrow morning.", answer: "will arrive", hint: "will + fiil" },
            { id: 2, type: "true-false", question: "I will going to the party. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'will go' doğrudur." },
            { id: 3, type: "writing",    question: "Write a future plan using 'will'.", keywords: ["will"], answer: "check-keywords" }
        ]
    },
    {
        id: "a2-present-continuous",
        level: "A2",
        title: "Present Continuous (Şimdiki Zaman)",
        description: "Şu an olmakta olan eylemler.",
        content: `
            <h3>Yapı</h3>
            <p>Özne + <strong>am/is/are + Fiil-ing</strong></p>
            <br>
            <h3>Örnekler</h3>
            <p>✅ I <strong>am reading</strong> a book right now.</p>
            <p>✅ She <strong>is talking</strong> on the phone.</p>
            <p>✅ They <strong>are playing</strong> football.</p>
            <br>
            <h3>Zaman İfadeleri</h3>
            <p>now, right now, at the moment, currently, look! listen!</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "She ____ (study) for her exam now.", answer: "is studying", hint: "is + study + -ing" },
            { id: 2, type: "fill-blank", question: "They ____ (not/watch) TV at the moment.", answer: "are not watching", hint: "are + not + fiil-ing" },
            { id: 3, type: "true-false", question: "He is play football now. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'is playing' doğrudur." }
        ]
    },

    // ── B1 ────────────────────────────────────────────────
    {
        id: "b1-present-perfect",
        level: "B1",
        title: "Present Perfect (Yakın Geçmiş)",
        description: "Geçmişte başlayan, şimdiye etkisi olan eylemler.",
        content: `
            <h3>Yapı</h3>
            <p>Özne + <strong>have/has + Past Participle (3. hal)</strong></p>
            <br>
            <h3>Kullanım</h3>
            <p><strong>Deneyim:</strong> I <strong>have visited</strong> Paris. (ever/never)</p>
            <p><strong>Sonuç:</strong> She <strong>has lost</strong> her keys. (just/already/yet)</p>
            <p><strong>Devam:</strong> I <strong>have lived</strong> here for 5 years. (for/since)</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "I ____ (never/see) the ocean.", answer: "have never seen", hint: "have + never + past participle" },
            { id: 2, type: "fill-blank", question: "She ____ (just/finish) her homework.", answer: "has just finished", hint: "has + just + past participle" },
            { id: 3, type: "true-false", question: "He has went to London twice. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'gone' kullanılır, 'went' değil." }
        ]
    },
    {
        id: "b1-modal-verbs",
        level: "B1",
        title: "Modal Verbs (can, must, should, might)",
        description: "Yetenek, zorunluluk, tavsiye ve olasılık ifadeleri.",
        content: `
            <h3>Kullanım</h3>
            <p><strong>can</strong>: yetenek/izin → She <strong>can</strong> swim.</p>
            <p><strong>must</strong>: zorunluluk → You <strong>must</strong> wear a seatbelt.</p>
            <p><strong>should</strong>: tavsiye → You <strong>should</strong> sleep early.</p>
            <p><strong>might</strong>: olasılık → It <strong>might</strong> rain tomorrow.</p>
            <br>
            <h3>Yapı</h3>
            <p>Özne + <strong>modal + fiil (yalın hali)</strong></p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "You ____ (should) exercise more.", answer: "should", hint: "Tavsiye için 'should' kullanılır." },
            { id: 2, type: "true-false", question: "She can to drive a car. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "Modal'dan sonra 'to' gelmez: 'can drive'." },
            { id: 3, type: "writing",    question: "Write a sentence using 'must' or 'should'.", keywords: ["must","should"], answer: "check-keywords" }
        ]
    },

    // ── B2 ────────────────────────────────────────────────
    {
        id: "b2-passive-voice",
        level: "B2",
        title: "Passive Voice (Edilgen Yapı)",
        description: "Eylemin faillini gizlemek veya vurguyu nesneye taşımak.",
        content: `
            <h3>Yapı</h3>
            <p>Özne + <strong>be (doğru zaman) + Past Participle</strong></p>
            <br>
            <h3>Zamanlarla Örnekler</h3>
            <p>Present: The letter <strong>is written</strong> by him.</p>
            <p>Past: The cake <strong>was eaten</strong>.</p>
            <p>Future: The project <strong>will be completed</strong> tomorrow.</p>
            <p>Perfect: The report <strong>has been submitted</strong>.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "The window ____ (break) by the storm.", answer: "was broken", hint: "Past passive: was + past participle." },
            { id: 2, type: "fill-blank", question: "English ____ (speak) all over the world.", answer: "is spoken", hint: "Present passive: is + past participle." },
            { id: 3, type: "true-false", question: "The book was wrote by Orwell. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'written' kullanılmalı." }
        ]
    },
    {
        id: "b2-conditionals",
        level: "B2",
        title: "Conditionals (If Clauses)",
        description: "Koşul cümleleri: 0, 1, 2 ve 3. tip.",
        content: `
            <h3>0. Tip — Genel Gerçekler</h3>
            <p>If + Present Simple, Present Simple</p>
            <p>If you <strong>heat</strong> water, it <strong>boils</strong>.</p>
            <h3>1. Tip — Gerçek Olası</h3>
            <p>If + Present Simple, will + Verb</p>
            <p>If it <strong>rains</strong>, I <strong>will stay</strong> home.</p>
            <h3>2. Tip — Gerçek Dışı</h3>
            <p>If + Past Simple, would + Verb</p>
            <p>If I <strong>had</strong> money, I <strong>would travel</strong>.</p>
            <h3>3. Tip — Geçmişe Pişmanlık</h3>
            <p>If + Past Perfect, would have + PP</p>
            <p>If she <strong>had studied</strong>, she <strong>would have passed</strong>.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "If it rains, she ____ (stay) home. (1st conditional)", answer: "will stay", hint: "1. tip: will + fiil" },
            { id: 2, type: "fill-blank", question: "If I ____ (be) rich, I would buy a yacht. (2nd conditional)", answer: "were", hint: "2. tip: were kullanılır (was yerine)." },
            { id: 3, type: "writing",    question: "Write a 2nd conditional sentence starting with 'If I...'.", keywords: ["if","would"], answer: "check-keywords" }
        ]
    },

    // ── C1 ────────────────────────────────────────────────
    {
        id: "c1-inversion",
        level: "C1",
        title: "Inversion (Devrik Yapılar)",
        description: "Vurgu ve resmiyet için cümle yapısını tersine çevirme.",
        content: `
            <h3>Negatif Zarflarla Devrik Yapı</h3>
            <p><strong>Never</strong> have I seen such beauty.</p>
            <p><strong>Rarely</strong> does she make mistakes.</p>
            <p><strong>Not only</strong> did he win, but he also broke a record.</p>
            <br>
            <h3>Koşul Cümlelerinde Devrik Yapı</h3>
            <p>Should you need help → (If you should need help)</p>
            <p>Were I you → (If I were you)</p>
            <p>Had she known → (If she had known)</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "Never ____ I seen such a beautiful view. (inversion)", answer: "have", hint: "Never + have + subject + PP." },
            { id: 2, type: "fill-blank", question: "____ he known the truth, he would have acted differently.", answer: "Had", hint: "Had + subject = If he had." },
            { id: 3, type: "writing",    question: "Rewrite using inversion: 'If you need help, call me.'", keywords: ["should","you"], answer: "check-keywords" }
        ]
    },
    {
        id: "c1-subjunctive",
        level: "C1",
        title: "Subjunctive Mood (Dilek Kipi)",
        description: "Resmi öneri, dilek ve zorunluluk ifadelerinde kullanılır.",
        content: `
            <h3>Yapı</h3>
            <p>It is essential/vital/important that + Özne + <strong>Fiil (yalın)</strong></p>
            <p>I suggest/recommend/demand that + Özne + <strong>Fiil (yalın)</strong></p>
            <br>
            <h3>Örnekler</h3>
            <p>It is vital that he <strong>be</strong> present. (not 'is')</p>
            <p>The committee demands that she <strong>resign</strong>. (not 'resigns')</p>
            <p>I suggest that we <strong>leave</strong> early.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "It is essential that every student ____ (submit) the form.", answer: "submit", hint: "Subjunctive: 3. şahıs -s almaz." },
            { id: 2, type: "true-false", question: "The doctor recommended that she rests more. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'rest' (yalın hal) kullanılmalı." },
            { id: 3, type: "writing",    question: "Write a sentence: 'It is vital that...'", keywords: ["vital","that"], answer: "check-keywords" }
        ]
    },

    // ── C2 ────────────────────────────────────────────────
    {
        id: "c2-cleft-sentences",
        level: "C2",
        title: "Cleft Sentences (Bölünmüş Cümleler)",
        description: "Bir unsuru vurgulamak için cümleyi yeniden yapılandırma.",
        content: `
            <h3>It-cleft</h3>
            <p>It was <strong>John</strong> who broke the window. (Kim kırdı?)</p>
            <p>It was <strong>yesterday</strong> that she called. (Ne zaman?)</p>
            <br>
            <h3>Wh-cleft (Pseudo-cleft)</h3>
            <p><strong>What I need</strong> is a long holiday.</p>
            <p><strong>What surprised me</strong> was his calmness.</p>
            <br>
            <h3>Reversed Wh-cleft</h3>
            <p>A long holiday is <strong>what I need</strong>.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "It was the noise ____ woke me up.", answer: "that", hint: "It-cleft: It was ... that ..." },
            { id: 2, type: "fill-blank", question: "____ I love most about England is the weather.", answer: "What", hint: "Wh-cleft: What + clause + is ..." },
            { id: 3, type: "writing",    question: "Rewrite emphasising 'the music': 'The music made her cry.'", keywords: ["it","that"], answer: "check-keywords" }
        ]
    },
    {
        id: "c2-discourse-markers",
        level: "C2",
        title: "Advanced Discourse Markers",
        description: "Akademik ve ileri yazımda bağlantı ifadeleri.",
        content: `
            <h3>Contrast</h3>
            <p><strong>Nevertheless, nonetheless</strong>: The evidence is weak; <strong>nevertheless</strong>, the jury convicted him.</p>
            <p><strong>Notwithstanding</strong>: <strong>Notwithstanding</strong> the risks, she proceeded.</p>
            <h3>Concession</h3>
            <p><strong>Admittedly, granted</strong>: <strong>Admittedly</strong>, the plan has flaws.</p>
            <h3>Result</h3>
            <p><strong>Hence, thereby, consequently</strong>: Prices rose; <strong>hence</strong> demand fell.</p>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "The results were inconclusive; ____, the study was published.", answer: "nevertheless", hint: "Zıtlık için nevertheless." },
            { id: 2, type: "fill-blank", question: "He failed the test, ____ losing his scholarship.", answer: "thereby", hint: "Sonuç: thereby + -ing" },
            { id: 3, type: "writing",    question: "Write two sentences connected with 'notwithstanding'.", keywords: ["notwithstanding"], answer: "check-keywords" }
        ]
    }
];
