// ─────────────────────────────────────────────────────────
//  Static Data — English Learning App
// ─────────────────────────────────────────────────────────

// İngilizce'nin en çok kullanılan 1000 kelimesi — konulara göre gruplandırılmış + CEFR seviyeli
// Free Dictionary API + Unsplash ile zenginleştirilir (online modda)
export const vocabData = [
    // ── 🐾 Animals (Hayvanlar) — A1 ────────────────────────
    { id: 1,   word: "cat",         meaning: "kedi",          synonyms: ["feline","kitty"],          type: "noun",      level: "A1", image: null },
    { id: 2,   word: "dog",         meaning: "köpek",         synonyms: ["hound","pup"],             type: "noun",      level: "A1", image: null },
    { id: 3,   word: "bird",        meaning: "kuş",           synonyms: ["fowl","avian"],            type: "noun",      level: "A1", image: null },
    { id: 4,   word: "fish",        meaning: "balık",         synonyms: ["aquatic animal"],          type: "noun",      level: "A1", image: null },
    { id: 5,   word: "horse",       meaning: "at",            synonyms: ["stallion","mare"],         type: "noun",      level: "A1", image: null },
    { id: 6,   word: "cow",         meaning: "inek",          synonyms: ["cattle","bovine"],         type: "noun",      level: "A1", image: null },
    { id: 7,   word: "sheep",       meaning: "koyun",         synonyms: ["lamb","ewe"],              type: "noun",      level: "A1", image: null },
    { id: 8,   word: "pig",         meaning: "domuz",         synonyms: ["hog","swine"],             type: "noun",      level: "A1", image: null },
    { id: 9,   word: "chicken",     meaning: "tavuk",         synonyms: ["hen","poultry"],           type: "noun",      level: "A1", image: null },
    { id: 10,  word: "rabbit",      meaning: "tavşan",        synonyms: ["bunny","hare"],            type: "noun",      level: "A1", image: null },
    { id: 11,  word: "lion",        meaning: "aslan",         synonyms: ["big cat"],                 type: "noun",      level: "A2", image: null },
    { id: 12,  word: "tiger",       meaning: "kaplan",        synonyms: ["big cat","feline"],        type: "noun",      level: "A2", image: null },
    { id: 13,  word: "elephant",    meaning: "fil",           synonyms: ["pachyderm"],               type: "noun",      level: "A2", image: null },
    { id: 14,  word: "bear",        meaning: "ayı",           synonyms: ["grizzly","polar bear"],    type: "noun",      level: "A2", image: null },
    { id: 15,  word: "wolf",        meaning: "kurt",          synonyms: ["canine","predator"],       type: "noun",      level: "A2", image: null },
    { id: 16,  word: "fox",         meaning: "tilki",         synonyms: ["vixen","canine"],          type: "noun",      level: "A2", image: null },
    { id: 17,  word: "deer",        meaning: "geyik",         synonyms: ["stag","doe"],              type: "noun",      level: "B1", image: null },
    { id: 18,  word: "monkey",      meaning: "maymun",        synonyms: ["primate","ape"],           type: "noun",      level: "A2", image: null },
    { id: 19,  word: "snake",       meaning: "yılan",         synonyms: ["serpent","reptile"],       type: "noun",      level: "A2", image: null },
    { id: 20,  word: "frog",        meaning: "kurbağa",       synonyms: ["amphibian","toad"],        type: "noun",      level: "A2", image: null },

    // ── 🍎 Food & Drinks (Yiyecek & İçecek) — A1 ────────────
    { id: 21,  word: "apple",       meaning: "elma",          synonyms: ["fruit","pome"],            type: "noun",      level: "A1", image: null },
    { id: 22,  word: "bread",       meaning: "ekmek",         synonyms: ["loaf","bun"],              type: "noun",      level: "A1", image: null },
    { id: 23,  word: "milk",        meaning: "süt",           synonyms: ["dairy","beverage"],        type: "noun",      level: "A1", image: null },
    { id: 24,  word: "water",       meaning: "su",            synonyms: ["H2O","liquid"],            type: "noun",      level: "A1", image: null },
    { id: 25,  word: "rice",        meaning: "pirinç",        synonyms: ["grain","staple"],          type: "noun",      level: "A1", image: null },
    { id: 26,  word: "egg",         meaning: "yumurta",       synonyms: ["ovum"],                    type: "noun",      level: "A1", image: null },
    { id: 27,  word: "cheese",      meaning: "peynir",        synonyms: ["dairy","curd"],            type: "noun",      level: "A1", image: null },
    { id: 28,  word: "butter",      meaning: "tereyağı",      synonyms: ["spread","dairy"],          type: "noun",      level: "A1", image: null },
    { id: 29,  word: "sugar",       meaning: "şeker",         synonyms: ["sweetener","sucrose"],     type: "noun",      level: "A1", image: null },
    { id: 30,  word: "salt",        meaning: "tuz",           synonyms: ["seasoning","sodium"],      type: "noun",      level: "A1", image: null },
    { id: 31,  word: "meat",        meaning: "et",            synonyms: ["flesh","protein"],         type: "noun",      level: "A1", image: null },
    { id: 32,  word: "chicken",     meaning: "tavuk eti",     synonyms: ["poultry","fowl"],          type: "noun",      level: "A1", image: null },
    { id: 33,  word: "fish",        meaning: "balık eti",     synonyms: ["seafood"],                 type: "noun",      level: "A1", image: null },
    { id: 34,  word: "soup",        meaning: "çorba",         synonyms: ["broth","stew"],            type: "noun",      level: "A2", image: null },
    { id: 35,  word: "salad",       meaning: "salata",        synonyms: ["greens","vegetables"],     type: "noun",      level: "A2", image: null },
    { id: 36,  word: "pizza",       meaning: "pizza",         synonyms: ["pie","flatbread"],         type: "noun",      level: "A1", image: null },
    { id: 37,  word: "cake",        meaning: "pasta",         synonyms: ["dessert","pastry"],        type: "noun",      level: "A1", image: null },
    { id: 38,  word: "coffee",      meaning: "kahve",         synonyms: ["espresso","brew"],         type: "noun",      level: "A1", image: null },
    { id: 39,  word: "tea",         meaning: "çay",           synonyms: ["herbal","brew"],           type: "noun",      level: "A1", image: null },
    { id: 40,  word: "juice",       meaning: "meyve suyu",    synonyms: ["drink","beverage"],        type: "noun",      level: "A1", image: null },

    // ── 🎨 Colors (Renkler) — A1 ────────────────────────────
    { id: 41,  word: "red",         meaning: "kırmızı",       synonyms: ["crimson","scarlet"],       type: "adjective", level: "A1", image: null },
    { id: 42,  word: "blue",        meaning: "mavi",          synonyms: ["azure","navy"],            type: "adjective", level: "A1", image: null },
    { id: 43,  word: "green",       meaning: "yeşil",         synonyms: ["emerald","olive"],         type: "adjective", level: "A1", image: null },
    { id: 44,  word: "yellow",      meaning: "sarı",          synonyms: ["golden","amber"],          type: "adjective", level: "A1", image: null },
    { id: 45,  word: "white",       meaning: "beyaz",         synonyms: ["ivory","pale"],            type: "adjective", level: "A1", image: null },
    { id: 46,  word: "black",       meaning: "siyah",         synonyms: ["dark","ebony"],            type: "adjective", level: "A1", image: null },
    { id: 47,  word: "orange",      meaning: "turuncu",       synonyms: ["amber","tangerine"],       type: "adjective", level: "A1", image: null },
    { id: 48,  word: "purple",      meaning: "mor",           synonyms: ["violet","lavender"],       type: "adjective", level: "A1", image: null },
    { id: 49,  word: "pink",        meaning: "pembe",         synonyms: ["rose","magenta"],          type: "adjective", level: "A1", image: null },
    { id: 50,  word: "brown",       meaning: "kahverengi",    synonyms: ["tan","beige"],             type: "adjective", level: "A1", image: null },

    // ── 🔢 Numbers & Quantities (Sayılar) — A1 ───────────────
    { id: 51,  word: "one",         meaning: "bir",           synonyms: ["single","unity"],          type: "other",     level: "A1", image: null },
    { id: 52,  word: "two",         meaning: "iki",           synonyms: ["pair","couple"],           type: "other",     level: "A1", image: null },
    { id: 53,  word: "three",       meaning: "üç",            synonyms: ["trio","triple"],           type: "other",     level: "A1", image: null },
    { id: 54,  word: "four",        meaning: "dört",          synonyms: ["quartet"],                 type: "other",     level: "A1", image: null },
    { id: 55,  word: "five",        meaning: "beş",           synonyms: ["quintet"],                 type: "other",     level: "A1", image: null },
    { id: 56,  word: "ten",         meaning: "on",            synonyms: ["decade"],                  type: "other",     level: "A1", image: null },
    { id: 57,  word: "hundred",     meaning: "yüz",           synonyms: ["century"],                 type: "other",     level: "A1", image: null },
    { id: 58,  word: "thousand",    meaning: "bin",           synonyms: ["millennium"],              type: "other",     level: "A2", image: null },
    { id: 59,  word: "many",        meaning: "çok",           synonyms: ["numerous","plenty"],       type: "adjective", level: "A1", image: null },
    { id: 60,  word: "few",         meaning: "az",            synonyms: ["little","scarce"],         type: "adjective", level: "A1", image: null },

    // ── 👨‍👩‍👧 Family (Aile) — A1 ──────────────────────────────
    { id: 61,  word: "mother",      meaning: "anne",          synonyms: ["mom","mum"],               type: "noun",      level: "A1", image: null },
    { id: 62,  word: "father",      meaning: "baba",          synonyms: ["dad","pop"],               type: "noun",      level: "A1", image: null },
    { id: 63,  word: "brother",     meaning: "erkek kardeş",  synonyms: ["sibling"],                 type: "noun",      level: "A1", image: null },
    { id: 64,  word: "sister",      meaning: "kız kardeş",    synonyms: ["sibling"],                 type: "noun",      level: "A1", image: null },
    { id: 65,  word: "son",         meaning: "oğul",          synonyms: ["boy","child"],             type: "noun",      level: "A1", image: null },
    { id: 66,  word: "daughter",    meaning: "kız evlat",     synonyms: ["girl","child"],            type: "noun",      level: "A1", image: null },
    { id: 67,  word: "husband",     meaning: "koca",          synonyms: ["spouse","partner"],        type: "noun",      level: "A2", image: null },
    { id: 68,  word: "wife",        meaning: "eş",            synonyms: ["spouse","partner"],        type: "noun",      level: "A2", image: null },
    { id: 69,  word: "grandfather", meaning: "büyükbaba",     synonyms: ["grandpa","elder"],         type: "noun",      level: "A1", image: null },
    { id: 70,  word: "grandmother", meaning: "büyükanne",     synonyms: ["grandma","elder"],         type: "noun",      level: "A1", image: null },
    { id: 71,  word: "uncle",       meaning: "amca/dayı",     synonyms: ["relative"],                type: "noun",      level: "A2", image: null },
    { id: 72,  word: "aunt",        meaning: "hala/teyze",    synonyms: ["relative"],                type: "noun",      level: "A2", image: null },
    { id: 73,  word: "cousin",      meaning: "kuzen",         synonyms: ["relative","kin"],          type: "noun",      level: "A2", image: null },
    { id: 74,  word: "baby",        meaning: "bebek",         synonyms: ["infant","toddler"],        type: "noun",      level: "A1", image: null },
    { id: 75,  word: "child",       meaning: "çocuk",         synonyms: ["kid","youngster"],         type: "noun",      level: "A1", image: null },

    // ── 🧍 Body Parts (Vücut) — A1 ──────────────────────────
    { id: 76,  word: "head",        meaning: "kafa",          synonyms: ["skull","noggin"],          type: "noun",      level: "A1", image: null },
    { id: 77,  word: "eye",         meaning: "göz",           synonyms: ["vision","sight"],          type: "noun",      level: "A1", image: null },
    { id: 78,  word: "ear",         meaning: "kulak",         synonyms: ["hearing"],                 type: "noun",      level: "A1", image: null },
    { id: 79,  word: "nose",        meaning: "burun",         synonyms: ["snout"],                   type: "noun",      level: "A1", image: null },
    { id: 80,  word: "mouth",       meaning: "ağız",          synonyms: ["lips","oral"],             type: "noun",      level: "A1", image: null },
    { id: 81,  word: "hand",        meaning: "el",            synonyms: ["palm","fist"],             type: "noun",      level: "A1", image: null },
    { id: 82,  word: "foot",        meaning: "ayak",          synonyms: ["feet","sole"],             type: "noun",      level: "A1", image: null },
    { id: 83,  word: "leg",         meaning: "bacak",         synonyms: ["limb"],                    type: "noun",      level: "A1", image: null },
    { id: 84,  word: "arm",         meaning: "kol",           synonyms: ["limb","forearm"],          type: "noun",      level: "A1", image: null },
    { id: 85,  word: "heart",       meaning: "kalp",          synonyms: ["cardiac","core"],          type: "noun",      level: "A2", image: null },
    { id: 86,  word: "back",        meaning: "sırt",          synonyms: ["spine","rear"],            type: "noun",      level: "A1", image: null },
    { id: 87,  word: "shoulder",    meaning: "omuz",          synonyms: ["joint"],                   type: "noun",      level: "A2", image: null },
    { id: 88,  word: "knee",        meaning: "diz",           synonyms: ["joint"],                   type: "noun",      level: "A2", image: null },
    { id: 89,  word: "finger",      meaning: "parmak",        synonyms: ["digit"],                   type: "noun",      level: "A1", image: null },
    { id: 90,  word: "tooth",       meaning: "diş",           synonyms: ["teeth","molar"],           type: "noun",      level: "A1", image: null },

    // ── 🏠 Home & Furniture (Ev & Mobilya) — A1 ─────────────
    { id: 91,  word: "house",       meaning: "ev",            synonyms: ["home","residence"],        type: "noun",      level: "A1", image: null },
    { id: 92,  word: "room",        meaning: "oda",           synonyms: ["chamber","space"],         type: "noun",      level: "A1", image: null },
    { id: 93,  word: "door",        meaning: "kapı",          synonyms: ["entrance","gate"],         type: "noun",      level: "A1", image: null },
    { id: 94,  word: "window",      meaning: "pencere",       synonyms: ["pane","glass"],            type: "noun",      level: "A1", image: null },
    { id: 95,  word: "bed",         meaning: "yatak",         synonyms: ["cot","bunk"],              type: "noun",      level: "A1", image: null },
    { id: 96,  word: "chair",       meaning: "sandalye",      synonyms: ["seat","stool"],            type: "noun",      level: "A1", image: null },
    { id: 97,  word: "table",       meaning: "masa",          synonyms: ["desk","counter"],          type: "noun",      level: "A1", image: null },
    { id: 98,  word: "kitchen",     meaning: "mutfak",        synonyms: ["cookroom"],                type: "noun",      level: "A1", image: null },
    { id: 99,  word: "bathroom",    meaning: "banyo",         synonyms: ["restroom","lavatory"],     type: "noun",      level: "A1", image: null },
    { id: 100, word: "garden",      meaning: "bahçe",         synonyms: ["yard","park"],             type: "noun",      level: "A1", image: null },

    // ── 👕 Clothes (Kıyafetler) — A1 ────────────────────────
    { id: 101, word: "shirt",       meaning: "gömlek",        synonyms: ["top","blouse"],            type: "noun",      level: "A1", image: null },
    { id: 102, word: "trousers",    meaning: "pantolon",      synonyms: ["pants","slacks"],          type: "noun",      level: "A1", image: null },
    { id: 103, word: "dress",       meaning: "elbise",        synonyms: ["gown","frock"],            type: "noun",      level: "A1", image: null },
    { id: 104, word: "shoes",       meaning: "ayakkabı",      synonyms: ["footwear","boots"],        type: "noun",      level: "A1", image: null },
    { id: 105, word: "hat",         meaning: "şapka",         synonyms: ["cap","beret"],             type: "noun",      level: "A1", image: null },
    { id: 106, word: "coat",        meaning: "palto",         synonyms: ["jacket","overcoat"],       type: "noun",      level: "A1", image: null },
    { id: 107, word: "sock",        meaning: "çorap",         synonyms: ["stocking","hosiery"],      type: "noun",      level: "A1", image: null },
    { id: 108, word: "glove",       meaning: "eldiven",       synonyms: ["mitten"],                  type: "noun",      level: "A2", image: null },
    { id: 109, word: "scarf",       meaning: "eşarp",         synonyms: ["wrap","shawl"],            type: "noun",      level: "A2", image: null },
    { id: 110, word: "belt",        meaning: "kemer",         synonyms: ["strap","band"],            type: "noun",      level: "A2", image: null },

    // ── 🌿 Nature (Doğa) — A1/A2 ────────────────────────────
    { id: 111, word: "tree",        meaning: "ağaç",          synonyms: ["oak","plant"],             type: "noun",      level: "A1", image: null },
    { id: 112, word: "flower",      meaning: "çiçek",         synonyms: ["blossom","bloom"],         type: "noun",      level: "A1", image: null },
    { id: 113, word: "river",       meaning: "nehir",         synonyms: ["stream","creek"],          type: "noun",      level: "A1", image: null },
    { id: 114, word: "sea",         meaning: "deniz",         synonyms: ["ocean","waters"],          type: "noun",      level: "A1", image: null },
    { id: 115, word: "mountain",    meaning: "dağ",           synonyms: ["hill","peak"],             type: "noun",      level: "A1", image: null },
    { id: 116, word: "sun",         meaning: "güneş",         synonyms: ["star","solar"],            type: "noun",      level: "A1", image: null },
    { id: 117, word: "moon",        meaning: "ay",            synonyms: ["lunar","crescent"],        type: "noun",      level: "A1", image: null },
    { id: 118, word: "star",        meaning: "yıldız",        synonyms: ["celestial","galaxy"],      type: "noun",      level: "A1", image: null },
    { id: 119, word: "rain",        meaning: "yağmur",        synonyms: ["shower","drizzle"],        type: "noun",      level: "A1", image: null },
    { id: 120, word: "snow",        meaning: "kar",           synonyms: ["blizzard","frost"],        type: "noun",      level: "A1", image: null },
    { id: 121, word: "wind",        meaning: "rüzgar",        synonyms: ["breeze","gust"],           type: "noun",      level: "A1", image: null },
    { id: 122, word: "cloud",       meaning: "bulut",         synonyms: ["mist","fog"],              type: "noun",      level: "A1", image: null },
    { id: 123, word: "earth",       meaning: "toprak/dünya",  synonyms: ["ground","soil"],           type: "noun",      level: "A1", image: null },
    { id: 124, word: "fire",        meaning: "ateş",          synonyms: ["flame","blaze"],           type: "noun",      level: "A1", image: null },
    { id: 125, word: "stone",       meaning: "taş",           synonyms: ["rock","pebble"],           type: "noun",      level: "A1", image: null },

    // ── 🕐 Time (Zaman) — A1 ────────────────────────────────
    { id: 126, word: "day",         meaning: "gün",           synonyms: ["daytime","date"],          type: "noun",      level: "A1", image: null },
    { id: 127, word: "night",       meaning: "gece",          synonyms: ["evening","dark"],          type: "noun",      level: "A1", image: null },
    { id: 128, word: "morning",     meaning: "sabah",         synonyms: ["dawn","AM"],               type: "noun",      level: "A1", image: null },
    { id: 129, word: "afternoon",   meaning: "öğleden sonra", synonyms: ["midday","PM"],             type: "noun",      level: "A1", image: null },
    { id: 130, word: "week",        meaning: "hafta",         synonyms: ["seven days"],              type: "noun",      level: "A1", image: null },
    { id: 131, word: "month",       meaning: "ay",            synonyms: ["period","calendar"],       type: "noun",      level: "A1", image: null },
    { id: 132, word: "year",        meaning: "yıl",           synonyms: ["annual","365 days"],       type: "noun",      level: "A1", image: null },
    { id: 133, word: "today",       meaning: "bugün",         synonyms: ["this day","now"],          type: "other",     level: "A1", image: null },
    { id: 134, word: "yesterday",   meaning: "dün",           synonyms: ["last day","prior day"],    type: "other",     level: "A1", image: null },
    { id: 135, word: "tomorrow",    meaning: "yarın",         synonyms: ["next day","future"],       type: "other",     level: "A1", image: null },
    { id: 136, word: "hour",        meaning: "saat",          synonyms: ["60 minutes","period"],     type: "noun",      level: "A1", image: null },
    { id: 137, word: "minute",      meaning: "dakika",        synonyms: ["60 seconds","moment"],     type: "noun",      level: "A1", image: null },
    { id: 138, word: "second",      meaning: "saniye",        synonyms: ["instant","moment"],        type: "noun",      level: "A1", image: null },
    { id: 139, word: "always",      meaning: "her zaman",     synonyms: ["forever","constantly"],    type: "other",     level: "A1", image: null },
    { id: 140, word: "never",       meaning: "asla",          synonyms: ["not ever","no time"],      type: "other",     level: "A1", image: null },

    // ── 🏫 Education (Eğitim) — A1/A2 ──────────────────────
    { id: 141, word: "school",      meaning: "okul",          synonyms: ["academy","institution"],   type: "noun",      level: "A1", image: null },
    { id: 142, word: "teacher",     meaning: "öğretmen",      synonyms: ["instructor","educator"],   type: "noun",      level: "A1", image: null },
    { id: 143, word: "student",     meaning: "öğrenci",       synonyms: ["pupil","learner"],         type: "noun",      level: "A1", image: null },
    { id: 144, word: "book",        meaning: "kitap",         synonyms: ["volume","text"],           type: "noun",      level: "A1", image: null },
    { id: 145, word: "pen",         meaning: "kalem",         synonyms: ["biro","ballpoint"],        type: "noun",      level: "A1", image: null },
    { id: 146, word: "paper",       meaning: "kağıt",         synonyms: ["sheet","page"],            type: "noun",      level: "A1", image: null },
    { id: 147, word: "class",       meaning: "sınıf",         synonyms: ["classroom","lesson"],      type: "noun",      level: "A1", image: null },
    { id: 148, word: "exam",        meaning: "sınav",         synonyms: ["test","assessment"],       type: "noun",      level: "A1", image: null },
    { id: 149, word: "answer",      meaning: "cevap",         synonyms: ["reply","response"],        type: "noun",      level: "A1", image: null },
    { id: 150, word: "question",    meaning: "soru",          synonyms: ["query","inquiry"],         type: "noun",      level: "A1", image: null },
    { id: 151, word: "university",  meaning: "üniversite",    synonyms: ["college","campus"],        type: "noun",      level: "A2", image: null },
    { id: 152, word: "lesson",      meaning: "ders",          synonyms: ["class","lecture"],         type: "noun",      level: "A1", image: null },
    { id: 153, word: "library",     meaning: "kütüphane",     synonyms: ["archive","reading room"],  type: "noun",      level: "A2", image: null },
    { id: 154, word: "homework",    meaning: "ödev",          synonyms: ["assignment","task"],       type: "noun",      level: "A1", image: null },
    { id: 155, word: "dictionary",  meaning: "sözlük",        synonyms: ["lexicon","glossary"],      type: "noun",      level: "A2", image: null },

    // ── 🏙️ City & Places (Şehir) — A1/A2 ──────────────────
    { id: 156, word: "city",        meaning: "şehir",         synonyms: ["town","metropolis"],       type: "noun",      level: "A1", image: null },
    { id: 157, word: "street",      meaning: "sokak",         synonyms: ["road","avenue"],           type: "noun",      level: "A1", image: null },
    { id: 158, word: "shop",        meaning: "dükkan",        synonyms: ["store","market"],          type: "noun",      level: "A1", image: null },
    { id: 159, word: "hospital",    meaning: "hastane",       synonyms: ["clinic","infirmary"],      type: "noun",      level: "A1", image: null },
    { id: 160, word: "hotel",       meaning: "otel",          synonyms: ["inn","motel"],             type: "noun",      level: "A1", image: null },
    { id: 161, word: "airport",     meaning: "havalimanı",    synonyms: ["airfield","terminal"],     type: "noun",      level: "A2", image: null },
    { id: 162, word: "bank",        meaning: "banka",         synonyms: ["financial institution"],   type: "noun",      level: "A1", image: null },
    { id: 163, word: "restaurant",  meaning: "restoran",      synonyms: ["diner","eatery"],          type: "noun",      level: "A1", image: null },
    { id: 164, word: "park",        meaning: "park",          synonyms: ["garden","green space"],    type: "noun",      level: "A1", image: null },
    { id: 165, word: "station",     meaning: "istasyon",      synonyms: ["terminal","depot"],        type: "noun",      level: "A1", image: null },
    { id: 166, word: "bridge",      meaning: "köprü",         synonyms: ["overpass","viaduct"],      type: "noun",      level: "A2", image: null },
    { id: 167, word: "market",      meaning: "çarşı",         synonyms: ["bazaar","mall"],           type: "noun",      level: "A1", image: null },
    { id: 168, word: "museum",      meaning: "müze",          synonyms: ["gallery","exhibition"],    type: "noun",      level: "A2", image: null },
    { id: 169, word: "church",      meaning: "kilise",        synonyms: ["chapel","cathedral"],      type: "noun",      level: "A2", image: null },
    { id: 170, word: "village",     meaning: "köy",           synonyms: ["hamlet","settlement"],     type: "noun",      level: "A1", image: null },

    // ── 🚗 Transport (Ulaşım) — A1/A2 ───────────────────────
    { id: 171, word: "car",         meaning: "araba",         synonyms: ["vehicle","automobile"],    type: "noun",      level: "A1", image: null },
    { id: 172, word: "bus",         meaning: "otobüs",        synonyms: ["coach","transit"],         type: "noun",      level: "A1", image: null },
    { id: 173, word: "train",       meaning: "tren",          synonyms: ["rail","locomotive"],       type: "noun",      level: "A1", image: null },
    { id: 174, word: "plane",       meaning: "uçak",          synonyms: ["aircraft","jet"],          type: "noun",      level: "A1", image: null },
    { id: 175, word: "ship",        meaning: "gemi",          synonyms: ["vessel","boat"],           type: "noun",      level: "A2", image: null },
    { id: 176, word: "bicycle",     meaning: "bisiklet",      synonyms: ["bike","cycle"],            type: "noun",      level: "A1", image: null },
    { id: 177, word: "road",        meaning: "yol",           synonyms: ["street","highway"],        type: "noun",      level: "A1", image: null },
    { id: 178, word: "ticket",      meaning: "bilet",         synonyms: ["pass","token"],            type: "noun",      level: "A1", image: null },
    { id: 179, word: "journey",     meaning: "yolculuk",      synonyms: ["trip","travel"],           type: "noun",      level: "A2", image: null },
    { id: 180, word: "map",         meaning: "harita",        synonyms: ["chart","atlas"],           type: "noun",      level: "A1", image: null },

    // ── 💻 Technology (Teknoloji) — A2/B1 ───────────────────
    { id: 181, word: "computer",    meaning: "bilgisayar",    synonyms: ["PC","laptop"],             type: "noun",      level: "A1", image: null },
    { id: 182, word: "phone",       meaning: "telefon",       synonyms: ["mobile","cell"],           type: "noun",      level: "A1", image: null },
    { id: 183, word: "internet",    meaning: "internet",      synonyms: ["web","network"],           type: "noun",      level: "A2", image: null },
    { id: 184, word: "screen",      meaning: "ekran",         synonyms: ["monitor","display"],       type: "noun",      level: "A2", image: null },
    { id: 185, word: "camera",      meaning: "kamera",        synonyms: ["lens","recorder"],         type: "noun",      level: "A2", image: null },
    { id: 186, word: "television",  meaning: "televizyon",    synonyms: ["TV","screen"],             type: "noun",      level: "A1", image: null },
    { id: 187, word: "radio",       meaning: "radyo",         synonyms: ["broadcast","receiver"],    type: "noun",      level: "A1", image: null },
    { id: 188, word: "keyboard",    meaning: "klavye",        synonyms: ["input device"],            type: "noun",      level: "A2", image: null },
    { id: 189, word: "password",    meaning: "şifre",         synonyms: ["pin","code"],              type: "noun",      level: "B1", image: null },
    { id: 190, word: "message",     meaning: "mesaj",         synonyms: ["text","note"],             type: "noun",      level: "A1", image: null },

    // ── ⚽ Sports & Hobbies (Spor & Hobiler) — A1/A2 ────────
    { id: 191, word: "sport",       meaning: "spor",          synonyms: ["athletics","game"],        type: "noun",      level: "A1", image: null },
    { id: 192, word: "football",    meaning: "futbol",        synonyms: ["soccer","ball game"],      type: "noun",      level: "A1", image: null },
    { id: 193, word: "music",       meaning: "müzik",         synonyms: ["melody","sound"],          type: "noun",      level: "A1", image: null },
    { id: 194, word: "dance",       meaning: "dans",          synonyms: ["move","groove"],           type: "noun",      level: "A1", image: null },
    { id: 195, word: "game",        meaning: "oyun",          synonyms: ["play","match"],            type: "noun",      level: "A1", image: null },
    { id: 196, word: "movie",       meaning: "film",          synonyms: ["film","cinema"],           type: "noun",      level: "A1", image: null },
    { id: 197, word: "art",         meaning: "sanat",         synonyms: ["craft","creativity"],      type: "noun",      level: "A2", image: null },
    { id: 198, word: "painting",    meaning: "resim",         synonyms: ["drawing","artwork"],       type: "noun",      level: "A2", image: null },
    { id: 199, word: "reading",     meaning: "okuma",         synonyms: ["studying","literacy"],     type: "noun",      level: "A1", image: null },
    { id: 200, word: "swimming",    meaning: "yüzme",         synonyms: ["diving","aquatics"],       type: "noun",      level: "A2", image: null },

    // ── 💼 Work & Professions (İş & Meslekler) — A2/B1 ──────
    { id: 201, word: "work",        meaning: "çalışmak",      synonyms: ["labor","job"],             type: "verb",      level: "A1", image: null },
    { id: 202, word: "job",         meaning: "iş",            synonyms: ["career","occupation"],     type: "noun",      level: "A1", image: null },
    { id: 203, word: "office",      meaning: "ofis",          synonyms: ["workplace","bureau"],      type: "noun",      level: "A2", image: null },
    { id: 204, word: "meeting",     meaning: "toplantı",      synonyms: ["conference","gathering"],  type: "noun",      level: "A2", image: null },
    { id: 205, word: "boss",        meaning: "patron",        synonyms: ["manager","chief"],         type: "noun",      level: "A2", image: null },
    { id: 206, word: "salary",      meaning: "maaş",          synonyms: ["wage","pay"],              type: "noun",      level: "B1", image: null },
    { id: 207, word: "doctor",      meaning: "doktor",        synonyms: ["physician","MD"],          type: "noun",      level: "A1", image: null },
    { id: 208, word: "nurse",       meaning: "hemşire",       synonyms: ["caregiver","medic"],       type: "noun",      level: "A2", image: null },
    { id: 209, word: "engineer",    meaning: "mühendis",      synonyms: ["designer","builder"],      type: "noun",      level: "B1", image: null },
    { id: 210, word: "lawyer",      meaning: "avukat",        synonyms: ["attorney","counsel"],      type: "noun",      level: "B1", image: null },
    { id: 211, word: "police",      meaning: "polis",         synonyms: ["officer","cop"],           type: "noun",      level: "A1", image: null },
    { id: 212, word: "soldier",     meaning: "asker",         synonyms: ["warrior","trooper"],       type: "noun",      level: "A2", image: null },
    { id: 213, word: "farmer",      meaning: "çiftçi",        synonyms: ["grower","agriculturist"],  type: "noun",      level: "A2", image: null },
    { id: 214, word: "cook",        meaning: "aşçı",          synonyms: ["chef","baker"],            type: "noun",      level: "A1", image: null },
    { id: 215, word: "driver",      meaning: "sürücü",        synonyms: ["chauffeur","motorist"],    type: "noun",      level: "A2", image: null },

    // ── 💊 Health (Sağlık) — A2/B1 ──────────────────────────
    { id: 216, word: "health",      meaning: "sağlık",        synonyms: ["wellness","fitness"],      type: "noun",      level: "A2", image: null },
    { id: 217, word: "medicine",    meaning: "ilaç",          synonyms: ["drug","remedy"],           type: "noun",      level: "A2", image: null },
    { id: 218, word: "pain",        meaning: "ağrı",          synonyms: ["ache","hurt"],             type: "noun",      level: "A2", image: null },
    { id: 219, word: "fever",       meaning: "ateş",          synonyms: ["temperature","heat"],      type: "noun",      level: "A2", image: null },
    { id: 220, word: "cold",        meaning: "soğuk algınlığı",synonyms: ["flu","illness"],          type: "noun",      level: "A2", image: null },
    { id: 221, word: "tired",       meaning: "yorgun",        synonyms: ["exhausted","weary"],       type: "adjective", level: "A1", image: null },
    { id: 222, word: "sick",        meaning: "hasta",         synonyms: ["ill","unwell"],            type: "adjective", level: "A1", image: null },
    { id: 223, word: "strong",      meaning: "güçlü",         synonyms: ["powerful","robust"],       type: "adjective", level: "A1", image: null },
    { id: 224, word: "weak",        meaning: "zayıf",         synonyms: ["feeble","frail"],          type: "adjective", level: "A2", image: null },
    { id: 225, word: "exercise",    meaning: "egzersiz",      synonyms: ["workout","training"],      type: "noun",      level: "A2", image: null },

    // ── 🧠 Mind & Emotions (Duygular) — A1/A2 ───────────────
    { id: 226, word: "happy",       meaning: "mutlu",         synonyms: ["joyful","cheerful"],       type: "adjective", level: "A1", image: null },
    { id: 227, word: "sad",         meaning: "üzgün",         synonyms: ["unhappy","sorrowful"],     type: "adjective", level: "A1", image: null },
    { id: 228, word: "angry",       meaning: "sinirli",       synonyms: ["furious","mad"],           type: "adjective", level: "A1", image: null },
    { id: 229, word: "afraid",      meaning: "korkmuş",       synonyms: ["scared","fearful"],        type: "adjective", level: "A2", image: null },
    { id: 230, word: "surprised",   meaning: "şaşırmış",      synonyms: ["astonished","shocked"],    type: "adjective", level: "A2", image: null },
    { id: 231, word: "excited",     meaning: "heyecanlı",     synonyms: ["thrilled","eager"],        type: "adjective", level: "A2", image: null },
    { id: 232, word: "bored",       meaning: "sıkılmış",      synonyms: ["uninterested","dull"],     type: "adjective", level: "A2", image: null },
    { id: 233, word: "love",        meaning: "sevgi",         synonyms: ["affection","adore"],       type: "noun",      level: "A1", image: null },
    { id: 234, word: "hate",        meaning: "nefret",        synonyms: ["dislike","loathe"],        type: "noun",      level: "A2", image: null },
    { id: 235, word: "hope",        meaning: "umut",          synonyms: ["wish","expect"],           type: "noun",      level: "A2", image: null },
    { id: 236, word: "dream",       meaning: "rüya/hayal",    synonyms: ["vision","fantasy"],        type: "noun",      level: "A2", image: null },
    { id: 237, word: "worry",       meaning: "endişelenmek",  synonyms: ["anxiety","fret"],          type: "verb",      level: "B1", image: null },
    { id: 238, word: "laugh",       meaning: "gülmek",        synonyms: ["chuckle","giggle"],        type: "verb",      level: "A1", image: null },
    { id: 239, word: "cry",         meaning: "ağlamak",       synonyms: ["weep","sob"],              type: "verb",      level: "A1", image: null },
    { id: 240, word: "smile",       meaning: "gülümsemek",    synonyms: ["grin","beam"],             type: "verb",      level: "A1", image: null },

    // ── 🔤 Common Verbs (Yaygın Fiiller) ────────────────────
    { id: 241, word: "go",          meaning: "gitmek",        synonyms: ["travel","move"],           type: "verb",      level: "A1", image: null },
    { id: 242, word: "come",        meaning: "gelmek",        synonyms: ["arrive","approach"],       type: "verb",      level: "A1", image: null },
    { id: 243, word: "see",         meaning: "görmek",        synonyms: ["observe","view"],          type: "verb",      level: "A1", image: null },
    { id: 244, word: "know",        meaning: "bilmek",        synonyms: ["understand","realize"],    type: "verb",      level: "A1", image: null },
    { id: 245, word: "think",       meaning: "düşünmek",      synonyms: ["ponder","consider"],       type: "verb",      level: "A1", image: null },
    { id: 246, word: "want",        meaning: "istemek",       synonyms: ["desire","wish"],           type: "verb",      level: "A1", image: null },
    { id: 247, word: "give",        meaning: "vermek",        synonyms: ["offer","provide"],         type: "verb",      level: "A1", image: null },
    { id: 248, word: "take",        meaning: "almak",         synonyms: ["grab","receive"],          type: "verb",      level: "A1", image: null },
    { id: 249, word: "make",        meaning: "yapmak",        synonyms: ["create","produce"],        type: "verb",      level: "A1", image: null },
    { id: 250, word: "say",         meaning: "söylemek",      synonyms: ["tell","state"],            type: "verb",      level: "A1", image: null },
    { id: 251, word: "get",         meaning: "almak/olmak",   synonyms: ["obtain","receive"],        type: "verb",      level: "A1", image: null },
    { id: 252, word: "use",         meaning: "kullanmak",     synonyms: ["employ","utilize"],        type: "verb",      level: "A1", image: null },
    { id: 253, word: "find",        meaning: "bulmak",        synonyms: ["discover","locate"],       type: "verb",      level: "A1", image: null },
    { id: 254, word: "tell",        meaning: "anlatmak",      synonyms: ["narrate","inform"],        type: "verb",      level: "A1", image: null },
    { id: 255, word: "ask",         meaning: "sormak",        synonyms: ["inquire","question"],      type: "verb",      level: "A1", image: null },
    { id: 256, word: "seem",        meaning: "görünmek",      synonyms: ["appear","look"],           type: "verb",      level: "A2", image: null },
    { id: 257, word: "feel",        meaning: "hissetmek",     synonyms: ["sense","experience"],      type: "verb",      level: "A1", image: null },
    { id: 258, word: "try",         meaning: "denemek",       synonyms: ["attempt","effort"],        type: "verb",      level: "A1", image: null },
    { id: 259, word: "call",        meaning: "aramak/çağırmak",synonyms: ["phone","ring"],           type: "verb",      level: "A1", image: null },
    { id: 260, word: "keep",        meaning: "tutmak",        synonyms: ["hold","retain"],           type: "verb",      level: "A1", image: null },
    { id: 261, word: "let",         meaning: "izin vermek",   synonyms: ["allow","permit"],          type: "verb",      level: "A1", image: null },
    { id: 262, word: "begin",       meaning: "başlamak",      synonyms: ["start","commence"],        type: "verb",      level: "A1", image: null },
    { id: 263, word: "show",        meaning: "göstermek",     synonyms: ["display","present"],       type: "verb",      level: "A1", image: null },
    { id: 264, word: "hear",        meaning: "duymak",        synonyms: ["listen","perceive"],       type: "verb",      level: "A1", image: null },
    { id: 265, word: "play",        meaning: "oynamak",       synonyms: ["compete","perform"],       type: "verb",      level: "A1", image: null },
    { id: 266, word: "run",         meaning: "koşmak",        synonyms: ["sprint","jog"],            type: "verb",      level: "A1", image: null },
    { id: 267, word: "move",        meaning: "hareket etmek", synonyms: ["shift","relocate"],        type: "verb",      level: "A1", image: null },
    { id: 268, word: "live",        meaning: "yaşamak",       synonyms: ["reside","exist"],          type: "verb",      level: "A1", image: null },
    { id: 269, word: "hold",        meaning: "tutmak",        synonyms: ["grip","grasp"],            type: "verb",      level: "A1", image: null },
    { id: 270, word: "bring",       meaning: "getirmek",      synonyms: ["carry","fetch"],           type: "verb",      level: "A1", image: null },
    { id: 271, word: "happen",      meaning: "olmak",         synonyms: ["occur","take place"],      type: "verb",      level: "A2", image: null },
    { id: 272, word: "write",       meaning: "yazmak",        synonyms: ["compose","author"],        type: "verb",      level: "A1", image: null },
    { id: 273, word: "read",        meaning: "okumak",        synonyms: ["study","browse"],          type: "verb",      level: "A1", image: null },
    { id: 274, word: "speak",       meaning: "konuşmak",      synonyms: ["talk","chat"],             type: "verb",      level: "A1", image: null },
    { id: 275, word: "listen",      meaning: "dinlemek",      synonyms: ["hear","attend"],           type: "verb",      level: "A1", image: null },
    { id: 276, word: "eat",         meaning: "yemek yemek",   synonyms: ["consume","dine"],          type: "verb",      level: "A1", image: null },
    { id: 277, word: "drink",       meaning: "içmek",         synonyms: ["sip","swallow"],           type: "verb",      level: "A1", image: null },
    { id: 278, word: "sleep",       meaning: "uyumak",        synonyms: ["rest","slumber"],          type: "verb",      level: "A1", image: null },
    { id: 279, word: "wake",        meaning: "uyanmak",       synonyms: ["arise","stir"],            type: "verb",      level: "A1", image: null },
    { id: 280, word: "sit",         meaning: "oturmak",       synonyms: ["rest","perch"],            type: "verb",      level: "A1", image: null },

    // ── 📝 Common Adjectives (Sıfatlar) ─────────────────────
    { id: 281, word: "good",        meaning: "iyi",           synonyms: ["great","fine"],            type: "adjective", level: "A1", image: null },
    { id: 282, word: "bad",         meaning: "kötü",          synonyms: ["poor","terrible"],         type: "adjective", level: "A1", image: null },
    { id: 283, word: "big",         meaning: "büyük",         synonyms: ["large","huge"],            type: "adjective", level: "A1", image: null },
    { id: 284, word: "small",       meaning: "küçük",         synonyms: ["little","tiny"],           type: "adjective", level: "A1", image: null },
    { id: 285, word: "long",        meaning: "uzun",          synonyms: ["lengthy","extended"],      type: "adjective", level: "A1", image: null },
    { id: 286, word: "short",       meaning: "kısa",          synonyms: ["brief","compact"],         type: "adjective", level: "A1", image: null },
    { id: 287, word: "old",         meaning: "eski/yaşlı",    synonyms: ["aged","ancient"],          type: "adjective", level: "A1", image: null },
    { id: 288, word: "new",         meaning: "yeni",          synonyms: ["fresh","modern"],          type: "adjective", level: "A1", image: null },
    { id: 289, word: "young",       meaning: "genç",          synonyms: ["youthful","juvenile"],     type: "adjective", level: "A1", image: null },
    { id: 290, word: "hot",         meaning: "sıcak",         synonyms: ["warm","burning"],          type: "adjective", level: "A1", image: null },
    { id: 291, word: "cold",        meaning: "soğuk",         synonyms: ["chilly","freezing"],       type: "adjective", level: "A1", image: null },
    { id: 292, word: "beautiful",   meaning: "güzel",         synonyms: ["pretty","attractive"],     type: "adjective", level: "A1", image: null },
    { id: 293, word: "ugly",        meaning: "çirkin",        synonyms: ["unattractive","hideous"],  type: "adjective", level: "A2", image: null },
    { id: 294, word: "fast",        meaning: "hızlı",         synonyms: ["quick","rapid"],           type: "adjective", level: "A1", image: null },
    { id: 295, word: "slow",        meaning: "yavaş",         synonyms: ["sluggish","gradual"],      type: "adjective", level: "A1", image: null },
    { id: 296, word: "easy",        meaning: "kolay",         synonyms: ["simple","effortless"],     type: "adjective", level: "A1", image: null },
    { id: 297, word: "difficult",   meaning: "zor",           synonyms: ["hard","challenging"],      type: "adjective", level: "A1", image: null },
    { id: 298, word: "clean",       meaning: "temiz",         synonyms: ["neat","tidy"],             type: "adjective", level: "A1", image: null },
    { id: 299, word: "dirty",       meaning: "kirli",         synonyms: ["messy","filthy"],          type: "adjective", level: "A1", image: null },
    { id: 300, word: "rich",        meaning: "zengin",        synonyms: ["wealthy","affluent"],      type: "adjective", level: "A2", image: null },
    { id: 301, word: "poor",        meaning: "fakir",         synonyms: ["needy","broke"],           type: "adjective", level: "A2", image: null },
    { id: 302, word: "right",       meaning: "doğru",         synonyms: ["correct","proper"],        type: "adjective", level: "A1", image: null },
    { id: 303, word: "wrong",       meaning: "yanlış",        synonyms: ["incorrect","mistaken"],    type: "adjective", level: "A1", image: null },
    { id: 304, word: "free",        meaning: "özgür/ücretsiz",synonyms: ["open","liberated"],        type: "adjective", level: "A1", image: null },
    { id: 305, word: "safe",        meaning: "güvenli",       synonyms: ["secure","protected"],      type: "adjective", level: "A2", image: null },
    { id: 306, word: "dangerous",   meaning: "tehlikeli",     synonyms: ["risky","hazardous"],       type: "adjective", level: "A2", image: null },
    { id: 307, word: "important",   meaning: "önemli",        synonyms: ["significant","crucial"],   type: "adjective", level: "A2", image: null },
    { id: 308, word: "interesting", meaning: "ilginç",        synonyms: ["fascinating","engaging"],  type: "adjective", level: "A2", image: null },
    { id: 309, word: "boring",      meaning: "sıkıcı",        synonyms: ["dull","tedious"],          type: "adjective", level: "A2", image: null },
    { id: 310, word: "funny",       meaning: "komik",         synonyms: ["humorous","amusing"],      type: "adjective", level: "A2", image: null },

    // ── 🔗 Common Words (Bağlaçlar & Zarflar) ───────────────
    { id: 311, word: "and",         meaning: "ve",            synonyms: ["also","plus"],             type: "other",     level: "A1", image: null },
    { id: 312, word: "but",         meaning: "ama",           synonyms: ["however","yet"],           type: "other",     level: "A1", image: null },
    { id: 313, word: "or",          meaning: "veya",          synonyms: ["either","otherwise"],      type: "other",     level: "A1", image: null },
    { id: 314, word: "because",     meaning: "çünkü",         synonyms: ["since","as"],              type: "other",     level: "A1", image: null },
    { id: 315, word: "if",          meaning: "eğer",          synonyms: ["whether","provided"],      type: "other",     level: "A1", image: null },
    { id: 316, word: "when",        meaning: "ne zaman",      synonyms: ["while","during"],          type: "other",     level: "A1", image: null },
    { id: 317, word: "where",       meaning: "nerede",        synonyms: ["location","place"],        type: "other",     level: "A1", image: null },
    { id: 318, word: "who",         meaning: "kim",           synonyms: ["person","which person"],   type: "other",     level: "A1", image: null },
    { id: 319, word: "what",        meaning: "ne",            synonyms: ["which","that"],            type: "other",     level: "A1", image: null },
    { id: 320, word: "how",         meaning: "nasıl",         synonyms: ["in what way","manner"],    type: "other",     level: "A1", image: null },
    { id: 321, word: "very",        meaning: "çok",           synonyms: ["extremely","really"],      type: "other",     level: "A1", image: null },
    { id: 322, word: "also",        meaning: "ayrıca",        synonyms: ["too","as well"],           type: "other",     level: "A1", image: null },
    { id: 323, word: "just",        meaning: "sadece",        synonyms: ["only","merely"],           type: "other",     level: "A1", image: null },
    { id: 324, word: "still",       meaning: "hala",          synonyms: ["yet","even now"],          type: "other",     level: "A2", image: null },
    { id: 325, word: "already",     meaning: "zaten",         synonyms: ["previously","before"],     type: "other",     level: "A2", image: null },
    { id: 326, word: "again",       meaning: "tekrar",        synonyms: ["once more","anew"],        type: "other",     level: "A1", image: null },
    { id: 327, word: "now",         meaning: "şimdi",         synonyms: ["currently","at present"],  type: "other",     level: "A1", image: null },
    { id: 328, word: "here",        meaning: "burada",        synonyms: ["at this place"],           type: "other",     level: "A1", image: null },
    { id: 329, word: "there",       meaning: "orada",         synonyms: ["at that place"],           type: "other",     level: "A1", image: null },
    { id: 330, word: "soon",        meaning: "yakında",       synonyms: ["shortly","before long"],   type: "other",     level: "A1", image: null },

    // ── 🌍 Countries & People (Ülkeler & İnsanlar) ──────────
    { id: 331, word: "people",      meaning: "insanlar",      synonyms: ["persons","humans"],        type: "noun",      level: "A1", image: null },
    { id: 332, word: "man",         meaning: "adam",          synonyms: ["male","gentleman"],        type: "noun",      level: "A1", image: null },
    { id: 333, word: "woman",       meaning: "kadın",         synonyms: ["female","lady"],           type: "noun",      level: "A1", image: null },
    { id: 334, word: "boy",         meaning: "oğlan",         synonyms: ["lad","youth"],             type: "noun",      level: "A1", image: null },
    { id: 335, word: "girl",        meaning: "kız",           synonyms: ["lass","maiden"],           type: "noun",      level: "A1", image: null },
    { id: 336, word: "friend",      meaning: "arkadaş",       synonyms: ["buddy","pal"],             type: "noun",      level: "A1", image: null },
    { id: 337, word: "stranger",    meaning: "yabancı",       synonyms: ["outsider","foreigner"],    type: "noun",      level: "A2", image: null },
    { id: 338, word: "neighbor",    meaning: "komşu",         synonyms: ["adjacent person"],         type: "noun",      level: "A2", image: null },
    { id: 339, word: "guest",       meaning: "misafir",       synonyms: ["visitor","company"],       type: "noun",      level: "A2", image: null },
    { id: 340, word: "leader",      meaning: "lider",         synonyms: ["chief","head"],            type: "noun",      level: "A2", image: null },

    // ── 🏋️ Personality (Kişilik) ─────────────────────────────
    { id: 341, word: "kind",        meaning: "nazik",         synonyms: ["gentle","caring"],         type: "adjective", level: "A2", image: null },
    { id: 342, word: "brave",       meaning: "cesur",         synonyms: ["courageous","bold"],       type: "adjective", level: "B1", image: null },
    { id: 343, word: "clever",      meaning: "zeki",          synonyms: ["smart","intelligent"],     type: "adjective", level: "A2", image: null },
    { id: 344, word: "lazy",        meaning: "tembel",        synonyms: ["idle","sluggish"],         type: "adjective", level: "A2", image: null },
    { id: 345, word: "honest",      meaning: "dürüst",        synonyms: ["truthful","sincere"],      type: "adjective", level: "B1", image: null },
    { id: 346, word: "polite",      meaning: "kibar",         synonyms: ["courteous","respectful"],  type: "adjective", level: "B1", image: null },
    { id: 347, word: "shy",         meaning: "utangaç",       synonyms: ["timid","reserved"],        type: "adjective", level: "A2", image: null },
    { id: 348, word: "confident",   meaning: "kendinden emin",synonyms: ["assured","self-reliant"],  type: "adjective", level: "B1", image: null },
    { id: 349, word: "patient",     meaning: "sabırlı",       synonyms: ["calm","tolerant"],         type: "adjective", level: "B1", image: null },
    { id: 350, word: "generous",    meaning: "cömert",        synonyms: ["giving","charitable"],     type: "adjective", level: "B1", image: null },

    // ── 🍽️ Kitchen & Cooking (Mutfak) ─────────────────────────
    { id: 351, word: "cook",        meaning: "pişirmek",      synonyms: ["prepare","heat"],          type: "verb",      level: "A1", image: null },
    { id: 352, word: "boil",        meaning: "kaynatmak",     synonyms: ["simmer","heat"],           type: "verb",      level: "A2", image: null },
    { id: 353, word: "fry",         meaning: "kızartmak",     synonyms: ["sauté","sear"],            type: "verb",      level: "A2", image: null },
    { id: 354, word: "bake",        meaning: "fırında pişirmek",synonyms: ["roast","oven"],          type: "verb",      level: "A2", image: null },
    { id: 355, word: "cut",         meaning: "kesmek",        synonyms: ["slice","chop"],            type: "verb",      level: "A1", image: null },
    { id: 356, word: "knife",       meaning: "bıçak",         synonyms: ["blade","cutter"],          type: "noun",      level: "A1", image: null },
    { id: 357, word: "plate",       meaning: "tabak",         synonyms: ["dish","bowl"],             type: "noun",      level: "A1", image: null },
    { id: 358, word: "cup",         meaning: "fincan",        synonyms: ["mug","glass"],             type: "noun",      level: "A1", image: null },
    { id: 359, word: "spoon",       meaning: "kaşık",         synonyms: ["utensil","ladle"],         type: "noun",      level: "A1", image: null },
    { id: 360, word: "fork",        meaning: "çatal",         synonyms: ["utensil","prong"],         type: "noun",      level: "A1", image: null },
    { id: 361, word: "bottle",      meaning: "şişe",          synonyms: ["flask","container"],       type: "noun",      level: "A1", image: null },
    { id: 362, word: "glass",       meaning: "bardak",        synonyms: ["cup","goblet"],            type: "noun",      level: "A1", image: null },
    { id: 363, word: "pot",         meaning: "tencere",       synonyms: ["pan","vessel"],            type: "noun",      level: "A2", image: null },
    { id: 364, word: "oven",        meaning: "fırın",         synonyms: ["stove","range"],           type: "noun",      level: "A1", image: null },
    { id: 365, word: "fridge",      meaning: "buzdolabı",     synonyms: ["refrigerator","cooler"],   type: "noun",      level: "A2", image: null },

    // ── 🌾 Vegetables & Fruits (Sebze & Meyve) ───────────────
    { id: 366, word: "tomato",      meaning: "domates",       synonyms: ["fruit","vegetable"],       type: "noun",      level: "A1", image: null },
    { id: 367, word: "potato",      meaning: "patates",       synonyms: ["spud","tuber"],            type: "noun",      level: "A1", image: null },
    { id: 368, word: "onion",       meaning: "soğan",         synonyms: ["bulb","vegetable"],        type: "noun",      level: "A1", image: null },
    { id: 369, word: "carrot",      meaning: "havuç",         synonyms: ["root vegetable"],          type: "noun",      level: "A1", image: null },
    { id: 370, word: "cucumber",    meaning: "salatalık",     synonyms: ["vegetable","green"],       type: "noun",      level: "A2", image: null },
    { id: 371, word: "pepper",      meaning: "biber",         synonyms: ["capsicum","spice"],        type: "noun",      level: "A2", image: null },
    { id: 372, word: "banana",      meaning: "muz",           synonyms: ["tropical fruit"],          type: "noun",      level: "A1", image: null },
    { id: 373, word: "orange",      meaning: "portakal",      synonyms: ["citrus","fruit"],          type: "noun",      level: "A1", image: null },
    { id: 374, word: "grape",       meaning: "üzüm",          synonyms: ["berry","vine fruit"],      type: "noun",      level: "A2", image: null },
    { id: 375, word: "strawberry",  meaning: "çilek",         synonyms: ["berry","fruit"],           type: "noun",      level: "A2", image: null },
    { id: 376, word: "lemon",       meaning: "limon",         synonyms: ["citrus","sour fruit"],     type: "noun",      level: "A2", image: null },
    { id: 377, word: "watermelon",  meaning: "karpuz",        synonyms: ["melon","fruit"],           type: "noun",      level: "A2", image: null },
    { id: 378, word: "cherry",      meaning: "kiraz",         synonyms: ["berry","stone fruit"],     type: "noun",      level: "A2", image: null },
    { id: 379, word: "pear",        meaning: "armut",         synonyms: ["fruit","pome"],            type: "noun",      level: "A2", image: null },
    { id: 380, word: "peach",       meaning: "şeftali",       synonyms: ["stone fruit","fuzzy"],     type: "noun",      level: "A2", image: null },

    // ── 🌦️ Weather (Hava Durumu) ─────────────────────────────
    { id: 381, word: "weather",     meaning: "hava durumu",   synonyms: ["climate","atmosphere"],    type: "noun",      level: "A1", image: null },
    { id: 382, word: "sunny",       meaning: "güneşli",       synonyms: ["bright","clear"],          type: "adjective", level: "A1", image: null },
    { id: 383, word: "rainy",       meaning: "yağmurlu",      synonyms: ["wet","showery"],           type: "adjective", level: "A1", image: null },
    { id: 384, word: "cloudy",      meaning: "bulutlu",       synonyms: ["overcast","grey"],         type: "adjective", level: "A1", image: null },
    { id: 385, word: "windy",       meaning: "rüzgarlı",      synonyms: ["breezy","gusty"],          type: "adjective", level: "A2", image: null },
    { id: 386, word: "foggy",       meaning: "sisli",         synonyms: ["misty","hazy"],            type: "adjective", level: "A2", image: null },
    { id: 387, word: "storm",       meaning: "fırtına",       synonyms: ["tempest","hurricane"],     type: "noun",      level: "A2", image: null },
    { id: 388, word: "thunder",     meaning: "gök gürültüsü", synonyms: ["lightning","storm"],       type: "noun",      level: "B1", image: null },
    { id: 389, word: "flood",       meaning: "sel",           synonyms: ["overflow","deluge"],       type: "noun",      level: "B1", image: null },
    { id: 390, word: "drought",     meaning: "kuraklık",      synonyms: ["dryness","aridity"],       type: "noun",      level: "B2", image: null },

    // ── 🗺️ Directions (Yönler) ──────────────────────────────
    { id: 391, word: "north",       meaning: "kuzey",         synonyms: ["N","direction"],           type: "noun",      level: "A1", image: null },
    { id: 392, word: "south",       meaning: "güney",         synonyms: ["S","direction"],           type: "noun",      level: "A1", image: null },
    { id: 393, word: "east",        meaning: "doğu",          synonyms: ["E","direction"],           type: "noun",      level: "A1", image: null },
    { id: 394, word: "west",        meaning: "batı",          synonyms: ["W","direction"],           type: "noun",      level: "A1", image: null },
    { id: 395, word: "left",        meaning: "sol",           synonyms: ["port side"],               type: "other",     level: "A1", image: null },
    { id: 396, word: "right",       meaning: "sağ",           synonyms: ["starboard side"],          type: "other",     level: "A1", image: null },
    { id: 397, word: "straight",    meaning: "düz",           synonyms: ["direct","forward"],        type: "other",     level: "A1", image: null },
    { id: 398, word: "near",        meaning: "yakın",         synonyms: ["close","adjacent"],        type: "adjective", level: "A1", image: null },
    { id: 399, word: "far",         meaning: "uzak",          synonyms: ["distant","remote"],        type: "adjective", level: "A1", image: null },
    { id: 400, word: "between",     meaning: "arasında",      synonyms: ["amid","in the middle"],    type: "other",     level: "A2", image: null },

    // ── 💰 Money & Shopping (Para & Alışveriş) ───────────────
    { id: 401, word: "money",       meaning: "para",          synonyms: ["cash","currency"],         type: "noun",      level: "A1", image: null },
    { id: 402, word: "price",       meaning: "fiyat",         synonyms: ["cost","value"],            type: "noun",      level: "A1", image: null },
    { id: 403, word: "buy",         meaning: "satın almak",   synonyms: ["purchase","acquire"],      type: "verb",      level: "A1", image: null },
    { id: 404, word: "sell",        meaning: "satmak",        synonyms: ["trade","exchange"],        type: "verb",      level: "A1", image: null },
    { id: 405, word: "cheap",       meaning: "ucuz",          synonyms: ["affordable","low-cost"],   type: "adjective", level: "A2", image: null },
    { id: 406, word: "expensive",   meaning: "pahalı",        synonyms: ["costly","pricey"],         type: "adjective", level: "A2", image: null },
    { id: 407, word: "discount",    meaning: "indirim",       synonyms: ["sale","reduction"],        type: "noun",      level: "B1", image: null },
    { id: 408, word: "receipt",     meaning: "fiş",           synonyms: ["invoice","bill"],          type: "noun",      level: "B1", image: null },
    { id: 409, word: "wallet",      meaning: "cüzdan",        synonyms: ["purse","billfold"],        type: "noun",      level: "A2", image: null },
    { id: 410, word: "coin",        meaning: "bozuk para",    synonyms: ["change","cent"],           type: "noun",      level: "A2", image: null },
    { id: 411, word: "credit",      meaning: "kredi",         synonyms: ["loan","debit"],            type: "noun",      level: "B1", image: null },
    { id: 412, word: "tax",         meaning: "vergi",         synonyms: ["duty","levy"],             type: "noun",      level: "B1", image: null },
    { id: 413, word: "spend",       meaning: "harcamak",      synonyms: ["pay","use"],               type: "verb",      level: "A2", image: null },
    { id: 414, word: "save",        meaning: "biriktirmek",   synonyms: ["conserve","store"],        type: "verb",      level: "A2", image: null },
    { id: 415, word: "borrow",      meaning: "ödünç almak",   synonyms: ["loan","rent"],             type: "verb",      level: "B1", image: null },

    // ── 📱 Social & Communication (İletişim) ─────────────────
    { id: 416, word: "talk",        meaning: "konuşmak",      synonyms: ["speak","chat"],            type: "verb",      level: "A1", image: null },
    { id: 417, word: "news",        meaning: "haber",         synonyms: ["report","update"],         type: "noun",      level: "A1", image: null },
    { id: 418, word: "story",       meaning: "hikaye",        synonyms: ["tale","narrative"],        type: "noun",      level: "A1", image: null },
    { id: 419, word: "letter",      meaning: "mektup",        synonyms: ["mail","correspondence"],   type: "noun",      level: "A1", image: null },
    { id: 420, word: "email",       meaning: "e-posta",       synonyms: ["electronic mail","inbox"], type: "noun",      level: "A1", image: null },
    { id: 421, word: "post",        meaning: "gönderi/posta", synonyms: ["mail","publish"],          type: "noun",      level: "A2", image: null },
    { id: 422, word: "share",       meaning: "paylaşmak",     synonyms: ["distribute","post"],       type: "verb",      level: "A2", image: null },
    { id: 423, word: "follow",      meaning: "takip etmek",   synonyms: ["track","subscribe"],       type: "verb",      level: "A2", image: null },
    { id: 424, word: "agree",       meaning: "katılmak",      synonyms: ["accept","consent"],        type: "verb",      level: "A2", image: null },
    { id: 425, word: "disagree",    meaning: "katılmamak",    synonyms: ["oppose","differ"],         type: "verb",      level: "B1", image: null },
    { id: 426, word: "discuss",     meaning: "tartışmak",     synonyms: ["debate","talk about"],     type: "verb",      level: "B1", image: null },
    { id: 427, word: "explain",     meaning: "açıklamak",     synonyms: ["describe","clarify"],      type: "verb",      level: "A2", image: null },
    { id: 428, word: "promise",     meaning: "söz vermek",    synonyms: ["pledge","vow"],            type: "verb",      level: "A2", image: null },
    { id: 429, word: "invite",      meaning: "davet etmek",   synonyms: ["call","welcome"],          type: "verb",      level: "A2", image: null },
    { id: 430, word: "greet",       meaning: "selamlamak",    synonyms: ["welcome","salute"],        type: "verb",      level: "A2", image: null },

    // ── 🏡 House Rooms & Objects (Oda & Eşyalar) ─────────────
    { id: 431, word: "living room", meaning: "oturma odası",  synonyms: ["lounge","sitting room"],   type: "noun",      level: "A1", image: null },
    { id: 432, word: "bedroom",     meaning: "yatak odası",   synonyms: ["sleeping room"],           type: "noun",      level: "A1", image: null },
    { id: 433, word: "floor",       meaning: "zemin/kat",     synonyms: ["ground","storey"],         type: "noun",      level: "A1", image: null },
    { id: 434, word: "ceiling",     meaning: "tavan",         synonyms: ["top","overhead"],          type: "noun",      level: "A2", image: null },
    { id: 435, word: "wall",        meaning: "duvar",         synonyms: ["partition","barrier"],     type: "noun",      level: "A1", image: null },
    { id: 436, word: "stairs",      meaning: "merdiven",      synonyms: ["steps","staircase"],       type: "noun",      level: "A1", image: null },
    { id: 437, word: "lamp",        meaning: "lamba",         synonyms: ["light","bulb"],            type: "noun",      level: "A1", image: null },
    { id: 438, word: "clock",       meaning: "saat",          synonyms: ["watch","timepiece"],       type: "noun",      level: "A1", image: null },
    { id: 439, word: "mirror",      meaning: "ayna",          synonyms: ["glass","reflector"],       type: "noun",      level: "A2", image: null },
    { id: 440, word: "sofa",        meaning: "kanepe",        synonyms: ["couch","settee"],          type: "noun",      level: "A2", image: null },
    { id: 441, word: "carpet",      meaning: "halı",          synonyms: ["rug","mat"],               type: "noun",      level: "A2", image: null },
    { id: 442, word: "curtain",     meaning: "perde",         synonyms: ["drape","blind"],           type: "noun",      level: "A2", image: null },
    { id: 443, word: "shelf",       meaning: "raf",           synonyms: ["rack","ledge"],            type: "noun",      level: "A2", image: null },
    { id: 444, word: "drawer",      meaning: "çekmece",       synonyms: ["compartment","bin"],       type: "noun",      level: "B1", image: null },
    { id: 445, word: "wardrobe",    meaning: "gardırop",      synonyms: ["closet","cabinet"],        type: "noun",      level: "A2", image: null },

    // ── ✈️ Travel & Tourism (Seyahat) ────────────────────────
    { id: 446, word: "travel",      meaning: "seyahat etmek", synonyms: ["journey","tour"],          type: "verb",      level: "A1", image: null },
    { id: 447, word: "holiday",     meaning: "tatil",         synonyms: ["vacation","break"],        type: "noun",      level: "A1", image: null },
    { id: 448, word: "passport",    meaning: "pasaport",      synonyms: ["ID","travel document"],    type: "noun",      level: "A2", image: null },
    { id: 449, word: "suitcase",    meaning: "valiz",         synonyms: ["luggage","bag"],           type: "noun",      level: "A2", image: null },
    { id: 450, word: "hotel",       meaning: "otel",          synonyms: ["inn","motel"],             type: "noun",      level: "A1", image: null },
    { id: 451, word: "tourist",     meaning: "turist",        synonyms: ["visitor","traveler"],      type: "noun",      level: "A2", image: null },
    { id: 452, word: "guide",       meaning: "rehber",        synonyms: ["escort","leader"],         type: "noun",      level: "A2", image: null },
    { id: 453, word: "visa",        meaning: "vize",          synonyms: ["permit","authorization"],  type: "noun",      level: "B1", image: null },
    { id: 454, word: "customs",     meaning: "gümrük",        synonyms: ["border control"],          type: "noun",      level: "B1", image: null },
    { id: 455, word: "departure",   meaning: "kalkış",        synonyms: ["leaving","exit"],          type: "noun",      level: "B1", image: null },
    { id: 456, word: "arrival",     meaning: "varış",         synonyms: ["landing","reaching"],      type: "noun",      level: "B1", image: null },
    { id: 457, word: "reservation", meaning: "rezervasyon",   synonyms: ["booking","appointment"],   type: "noun",      level: "B1", image: null },
    { id: 458, word: "destination", meaning: "varış noktası", synonyms: ["endpoint","target"],       type: "noun",      level: "B1", image: null },
    { id: 459, word: "tour",        meaning: "tur",           synonyms: ["trip","excursion"],        type: "noun",      level: "A2", image: null },
    { id: 460, word: "backpack",    meaning: "sırt çantası",  synonyms: ["rucksack","bag"],          type: "noun",      level: "A2", image: null },

    // ── 🎓 Academic & Abstract (Akademik & Soyut) ────────────
    { id: 461, word: "idea",        meaning: "fikir",         synonyms: ["concept","thought"],       type: "noun",      level: "A2", image: null },
    { id: 462, word: "knowledge",   meaning: "bilgi",         synonyms: ["information","wisdom"],    type: "noun",      level: "B1", image: null },
    { id: 463, word: "education",   meaning: "eğitim",        synonyms: ["learning","schooling"],    type: "noun",      level: "A2", image: null },
    { id: 464, word: "science",     meaning: "bilim",         synonyms: ["research","study"],        type: "noun",      level: "A2", image: null },
    { id: 465, word: "history",     meaning: "tarih",         synonyms: ["past","chronicle"],        type: "noun",      level: "A2", image: null },
    { id: 466, word: "culture",     meaning: "kültür",        synonyms: ["society","tradition"],     type: "noun",      level: "B1", image: null },
    { id: 467, word: "language",    meaning: "dil",           synonyms: ["tongue","speech"],         type: "noun",      level: "A1", image: null },
    { id: 468, word: "literature",  meaning: "edebiyat",      synonyms: ["writing","fiction"],       type: "noun",      level: "B1", image: null },
    { id: 469, word: "mathematics", meaning: "matematik",     synonyms: ["math","numbers"],          type: "noun",      level: "A2", image: null },
    { id: 470, word: "philosophy",  meaning: "felsefe",       synonyms: ["thinking","wisdom"],       type: "noun",      level: "B2", image: null },
    { id: 471, word: "research",    meaning: "araştırma",     synonyms: ["study","investigation"],   type: "noun",      level: "B1", image: null },
    { id: 472, word: "theory",      meaning: "teori",         synonyms: ["hypothesis","idea"],       type: "noun",      level: "B1", image: null },
    { id: 473, word: "fact",        meaning: "gerçek/bilgi",  synonyms: ["truth","reality"],         type: "noun",      level: "A2", image: null },
    { id: 474, word: "example",     meaning: "örnek",         synonyms: ["sample","instance"],       type: "noun",      level: "A1", image: null },
    { id: 475, word: "problem",     meaning: "sorun",         synonyms: ["issue","challenge"],       type: "noun",      level: "A1", image: null },
    { id: 476, word: "solution",    meaning: "çözüm",         synonyms: ["answer","resolution"],     type: "noun",      level: "A2", image: null },
    { id: 477, word: "result",      meaning: "sonuç",         synonyms: ["outcome","effect"],        type: "noun",      level: "A2", image: null },
    { id: 478, word: "success",     meaning: "başarı",        synonyms: ["achievement","victory"],   type: "noun",      level: "A2", image: null },
    { id: 479, word: "failure",     meaning: "başarısızlık",  synonyms: ["loss","defeat"],           type: "noun",      level: "B1", image: null },
    { id: 480, word: "change",      meaning: "değişim",       synonyms: ["shift","transformation"],  type: "noun",      level: "A2", image: null },

    // ── 🌐 Society & Politics (Toplum) ──────────────────────
    { id: 481, word: "government",  meaning: "hükümet",       synonyms: ["state","authority"],       type: "noun",      level: "B1", image: null },
    { id: 482, word: "country",     meaning: "ülke",          synonyms: ["nation","state"],          type: "noun",      level: "A1", image: null },
    { id: 483, word: "war",         meaning: "savaş",         synonyms: ["conflict","battle"],       type: "noun",      level: "A2", image: null },
    { id: 484, word: "peace",       meaning: "barış",         synonyms: ["harmony","truce"],         type: "noun",      level: "A2", image: null },
    { id: 485, word: "law",         meaning: "yasa",          synonyms: ["rule","regulation"],       type: "noun",      level: "B1", image: null },
    { id: 486, word: "rights",      meaning: "haklar",        synonyms: ["freedom","liberty"],       type: "noun",      level: "B1", image: null },
    { id: 487, word: "vote",        meaning: "oy vermek",     synonyms: ["elect","ballot"],          type: "verb",      level: "B1", image: null },
    { id: 488, word: "economy",     meaning: "ekonomi",       synonyms: ["finance","trade"],         type: "noun",      level: "B1", image: null },
    { id: 489, word: "society",     meaning: "toplum",        synonyms: ["community","public"],      type: "noun",      level: "B1", image: null },
    { id: 490, word: "environment", meaning: "çevre",         synonyms: ["nature","ecosystem"],      type: "noun",      level: "B1", image: null },

    // ── 🎵 Arts & Entertainment (Sanat & Eğlence) ────────────
    { id: 491, word: "song",        meaning: "şarkı",         synonyms: ["melody","tune"],           type: "noun",      level: "A1", image: null },
    { id: 492, word: "singer",      meaning: "şarkıcı",       synonyms: ["vocalist","artist"],       type: "noun",      level: "A2", image: null },
    { id: 493, word: "instrument",  meaning: "enstrüman",     synonyms: ["tool","device"],           type: "noun",      level: "A2", image: null },
    { id: 494, word: "guitar",      meaning: "gitar",         synonyms: ["string instrument"],       type: "noun",      level: "A1", image: null },
    { id: 495, word: "piano",       meaning: "piyano",        synonyms: ["keyboard","keys"],         type: "noun",      level: "A1", image: null },
    { id: 496, word: "concert",     meaning: "konser",        synonyms: ["performance","show"],      type: "noun",      level: "A2", image: null },
    { id: 497, word: "theater",     meaning: "tiyatro",       synonyms: ["stage","drama"],           type: "noun",      level: "A2", image: null },
    { id: 498, word: "actor",       meaning: "aktör",         synonyms: ["performer","player"],      type: "noun",      level: "A2", image: null },
    { id: 499, word: "director",    meaning: "yönetmen",      synonyms: ["filmmaker","producer"],    type: "noun",      level: "B1", image: null },
    { id: 500, word: "exhibition",  meaning: "sergi",         synonyms: ["show","display"],          type: "noun",      level: "B1", image: null },

    // ── 🔬 Science & Nature (Bilim) ──────────────────────────
    { id: 501, word: "energy",      meaning: "enerji",        synonyms: ["power","force"],           type: "noun",      level: "A2", image: null },
    { id: 502, word: "light",       meaning: "ışık",          synonyms: ["glow","illumination"],     type: "noun",      level: "A1", image: null },
    { id: 503, word: "heat",        meaning: "ısı",           synonyms: ["warmth","temperature"],    type: "noun",      level: "A2", image: null },
    { id: 504, word: "space",       meaning: "uzay/alan",     synonyms: ["universe","cosmos"],       type: "noun",      level: "A2", image: null },
    { id: 505, word: "planet",      meaning: "gezegen",       synonyms: ["world","celestial body"],  type: "noun",      level: "A2", image: null },
    { id: 506, word: "gravity",     meaning: "yerçekimi",     synonyms: ["force","pull"],            type: "noun",      level: "B1", image: null },
    { id: 507, word: "atom",        meaning: "atom",          synonyms: ["particle","element"],      type: "noun",      level: "B1", image: null },
    { id: 508, word: "chemical",    meaning: "kimyasal",      synonyms: ["compound","substance"],    type: "noun",      level: "B1", image: null },
    { id: 509, word: "experiment",  meaning: "deney",         synonyms: ["test","trial"],            type: "noun",      level: "B1", image: null },
    { id: 510, word: "discovery",   meaning: "keşif",         synonyms: ["finding","invention"],     type: "noun",      level: "B1", image: null },
    { id: 511, word: "technology",  meaning: "teknoloji",     synonyms: ["innovation","science"],    type: "noun",      level: "A2", image: null },
    { id: 512, word: "machine",     meaning: "makine",        synonyms: ["device","engine"],         type: "noun",      level: "A2", image: null },
    { id: 513, word: "robot",       meaning: "robot",         synonyms: ["android","automaton"],     type: "noun",      level: "A2", image: null },
    { id: 514, word: "data",        meaning: "veri",          synonyms: ["information","stats"],     type: "noun",      level: "B1", image: null },
    { id: 515, word: "software",    meaning: "yazılım",       synonyms: ["program","app"],           type: "noun",      level: "B1", image: null },

    // ── 🌳 Environment (Çevre) ───────────────────────────────
    { id: 516, word: "forest",      meaning: "orman",         synonyms: ["woods","jungle"],          type: "noun",      level: "A1", image: null },
    { id: 517, word: "desert",      meaning: "çöl",           synonyms: ["wasteland","dunes"],       type: "noun",      level: "A2", image: null },
    { id: 518, word: "island",      meaning: "ada",           synonyms: ["isle","atoll"],            type: "noun",      level: "A2", image: null },
    { id: 519, word: "ocean",       meaning: "okyanus",       synonyms: ["sea","deep water"],        type: "noun",      level: "A1", image: null },
    { id: 520, word: "lake",        meaning: "göl",           synonyms: ["pond","reservoir"],        type: "noun",      level: "A1", image: null },
    { id: 521, word: "valley",      meaning: "vadi",          synonyms: ["glen","gorge"],            type: "noun",      level: "B1", image: null },
    { id: 522, word: "hill",        meaning: "tepe",          synonyms: ["mound","slope"],           type: "noun",      level: "A2", image: null },
    { id: 523, word: "plain",       meaning: "ova",           synonyms: ["flatland","prairie"],      type: "noun",      level: "B1", image: null },
    { id: 524, word: "soil",        meaning: "toprak",        synonyms: ["ground","earth"],          type: "noun",      level: "A2", image: null },
    { id: 525, word: "plant",       meaning: "bitki",         synonyms: ["vegetation","flora"],      type: "noun",      level: "A1", image: null },
    { id: 526, word: "grass",       meaning: "çimen",         synonyms: ["lawn","turf"],             type: "noun",      level: "A1", image: null },
    { id: 527, word: "leaf",        meaning: "yaprak",        synonyms: ["foliage","frond"],         type: "noun",      level: "A1", image: null },
    { id: 528, word: "root",        meaning: "kök",           synonyms: ["base","origin"],           type: "noun",      level: "A2", image: null },
    { id: 529, word: "branch",      meaning: "dal",           synonyms: ["bough","limb"],            type: "noun",      level: "A2", image: null },
    { id: 530, word: "seed",        meaning: "tohum",         synonyms: ["grain","kernel"],          type: "noun",      level: "A2", image: null },

    // ── 🏃 Actions & Movement (Hareketler) ──────────────────
    { id: 531, word: "walk",        meaning: "yürümek",       synonyms: ["stroll","stride"],         type: "verb",      level: "A1", image: null },
    { id: 532, word: "jump",        meaning: "atlamak",       synonyms: ["leap","hop"],              type: "verb",      level: "A1", image: null },
    { id: 533, word: "climb",       meaning: "tırmanmak",     synonyms: ["ascend","scale"],          type: "verb",      level: "A2", image: null },
    { id: 534, word: "swim",        meaning: "yüzmek",        synonyms: ["float","paddle"],          type: "verb",      level: "A1", image: null },
    { id: 535, word: "fly",         meaning: "uçmak",         synonyms: ["soar","glide"],            type: "verb",      level: "A1", image: null },
    { id: 536, word: "drive",       meaning: "araba sürmek",  synonyms: ["operate","steer"],         type: "verb",      level: "A1", image: null },
    { id: 537, word: "push",        meaning: "itmek",         synonyms: ["shove","press"],           type: "verb",      level: "A1", image: null },
    { id: 538, word: "pull",        meaning: "çekmek",        synonyms: ["drag","tug"],              type: "verb",      level: "A1", image: null },
    { id: 539, word: "throw",       meaning: "atmak",         synonyms: ["toss","hurl"],             type: "verb",      level: "A1", image: null },
    { id: 540, word: "catch",       meaning: "yakalamak",     synonyms: ["grab","seize"],            type: "verb",      level: "A1", image: null },
    { id: 541, word: "carry",       meaning: "taşımak",       synonyms: ["bear","transport"],        type: "verb",      level: "A1", image: null },
    { id: 542, word: "lift",        meaning: "kaldırmak",     synonyms: ["raise","hoist"],           type: "verb",      level: "A2", image: null },
    { id: 543, word: "drop",        meaning: "düşürmek",      synonyms: ["fall","release"],          type: "verb",      level: "A1", image: null },
    { id: 544, word: "open",        meaning: "açmak",         synonyms: ["unlock","uncover"],        type: "verb",      level: "A1", image: null },
    { id: 545, word: "close",       meaning: "kapatmak",      synonyms: ["shut","seal"],             type: "verb",      level: "A1", image: null },

    // ── 🎯 Abstract Concepts (Soyut Kavramlar) ───────────────
    { id: 546, word: "time",        meaning: "zaman",         synonyms: ["period","moment"],         type: "noun",      level: "A1", image: null },
    { id: 547, word: "life",        meaning: "hayat",         synonyms: ["existence","living"],      type: "noun",      level: "A1", image: null },
    { id: 548, word: "death",       meaning: "ölüm",          synonyms: ["end","passing"],           type: "noun",      level: "A2", image: null },
    { id: 549, word: "power",       meaning: "güç",           synonyms: ["force","strength"],        type: "noun",      level: "A2", image: null },
    { id: 550, word: "truth",       meaning: "gerçek",        synonyms: ["fact","reality"],          type: "noun",      level: "B1", image: null },
    { id: 551, word: "freedom",     meaning: "özgürlük",      synonyms: ["liberty","independence"],  type: "noun",      level: "B1", image: null },
    { id: 552, word: "justice",     meaning: "adalet",        synonyms: ["fairness","equity"],       type: "noun",      level: "B2", image: null },
    { id: 553, word: "beauty",      meaning: "güzellik",      synonyms: ["elegance","grace"],        type: "noun",      level: "B1", image: null },
    { id: 554, word: "memory",      meaning: "hafıza/anı",    synonyms: ["recollection","recall"],   type: "noun",      level: "A2", image: null },
    { id: 555, word: "future",      meaning: "gelecek",       synonyms: ["ahead","tomorrow"],        type: "noun",      level: "A1", image: null },
    { id: 556, word: "past",        meaning: "geçmiş",        synonyms: ["history","before"],        type: "noun",      level: "A2", image: null },
    { id: 557, word: "present",     meaning: "şimdiki zaman", synonyms: ["now","current"],           type: "noun",      level: "A2", image: null },
    { id: 558, word: "world",       meaning: "dünya",         synonyms: ["earth","globe"],           type: "noun",      level: "A1", image: null },
    { id: 559, word: "nature",      meaning: "doğa",          synonyms: ["wilderness","environment"],type: "noun",      level: "A1", image: null },
    { id: 560, word: "universe",    meaning: "evren",         synonyms: ["cosmos","space"],          type: "noun",      level: "B1", image: null },

    // ── 🔑 Key Prepositions & Phrases (Edatlar) ─────────────
    { id: 561, word: "in",          meaning: "içinde",        synonyms: ["inside","within"],         type: "other",     level: "A1", image: null },
    { id: 562, word: "on",          meaning: "üzerinde",      synonyms: ["atop","above"],            type: "other",     level: "A1", image: null },
    { id: 563, word: "at",          meaning: "-de/-da",       synonyms: ["by","located"],            type: "other",     level: "A1", image: null },
    { id: 564, word: "from",        meaning: "-den/-dan",     synonyms: ["out of","since"],          type: "other",     level: "A1", image: null },
    { id: 565, word: "to",          meaning: "-e/-a",         synonyms: ["toward","until"],          type: "other",     level: "A1", image: null },
    { id: 566, word: "with",        meaning: "ile",           synonyms: ["together","alongside"],    type: "other",     level: "A1", image: null },
    { id: 567, word: "without",     meaning: "olmadan",       synonyms: ["lacking","minus"],         type: "other",     level: "A1", image: null },
    { id: 568, word: "about",       meaning: "hakkında",      synonyms: ["regarding","concerning"],  type: "other",     level: "A1", image: null },
    { id: 569, word: "after",       meaning: "sonra",         synonyms: ["following","later"],       type: "other",     level: "A1", image: null },
    { id: 570, word: "before",      meaning: "önce",          synonyms: ["prior","earlier"],         type: "other",     level: "A1", image: null },
    { id: 571, word: "during",      meaning: "sırasında",     synonyms: ["while","throughout"],      type: "other",     level: "A2", image: null },
    { id: 572, word: "through",     meaning: "boyunca",       synonyms: ["across","via"],            type: "other",     level: "A2", image: null },
    { id: 573, word: "above",       meaning: "yukarıda",      synonyms: ["over","beyond"],           type: "other",     level: "A1", image: null },
    { id: 574, word: "below",       meaning: "aşağıda",       synonyms: ["under","beneath"],         type: "other",     level: "A1", image: null },
    { id: 575, word: "behind",      meaning: "arkasında",     synonyms: ["after","in back of"],      type: "other",     level: "A1", image: null },

    // ── 🏆 Achievement & Progress (Başarı) ──────────────────
    { id: 576, word: "goal",        meaning: "hedef",         synonyms: ["aim","objective"],         type: "noun",      level: "A2", image: null },
    { id: 577, word: "plan",        meaning: "plan",          synonyms: ["strategy","scheme"],       type: "noun",      level: "A1", image: null },
    { id: 578, word: "effort",      meaning: "çaba",          synonyms: ["attempt","try"],           type: "noun",      level: "B1", image: null },
    { id: 579, word: "practice",    meaning: "pratik yapmak", synonyms: ["rehearse","train"],        type: "verb",      level: "A2", image: null },
    { id: 580, word: "improve",     meaning: "geliştirmek",   synonyms: ["enhance","better"],        type: "verb",      level: "B1", image: null },
    { id: 581, word: "learn",       meaning: "öğrenmek",      synonyms: ["study","acquire"],         type: "verb",      level: "A1", image: null },
    { id: 582, word: "teach",       meaning: "öğretmek",      synonyms: ["instruct","educate"],      type: "verb",      level: "A1", image: null },
    { id: 583, word: "understand",  meaning: "anlamak",       synonyms: ["grasp","comprehend"],      type: "verb",      level: "A1", image: null },
    { id: 584, word: "remember",    meaning: "hatırlamak",    synonyms: ["recall","memorize"],       type: "verb",      level: "A1", image: null },
    { id: 585, word: "forget",      meaning: "unutmak",       synonyms: ["omit","overlook"],         type: "verb",      level: "A1", image: null },
    { id: 586, word: "choose",      meaning: "seçmek",        synonyms: ["select","pick"],           type: "verb",      level: "A2", image: null },
    { id: 587, word: "decide",      meaning: "karar vermek",  synonyms: ["determine","conclude"],    type: "verb",      level: "A2", image: null },
    { id: 588, word: "achieve",     meaning: "başarmak",      synonyms: ["accomplish","attain"],     type: "verb",      level: "B1", image: null },
    { id: 589, word: "complete",    meaning: "tamamlamak",    synonyms: ["finish","finalize"],       type: "verb",      level: "A2", image: null },
    { id: 590, word: "fail",        meaning: "başarısız olmak",synonyms: ["lose","miss"],            type: "verb",      level: "A2", image: null },

    // ── 🎪 Daily Life Phrases (Günlük Yaşam) ─────────────────
    { id: 591, word: "hello",       meaning: "merhaba",       synonyms: ["hi","greetings"],          type: "other",     level: "A1", image: null },
    { id: 592, word: "goodbye",     meaning: "hoşça kal",     synonyms: ["bye","farewell"],          type: "other",     level: "A1", image: null },
    { id: 593, word: "please",      meaning: "lütfen",        synonyms: ["kindly","if you will"],    type: "other",     level: "A1", image: null },
    { id: 594, word: "thank you",   meaning: "teşekkür ederim",synonyms: ["thanks","grateful"],      type: "other",     level: "A1", image: null },
    { id: 595, word: "sorry",       meaning: "özür dilerim",  synonyms: ["excuse me","apologize"],   type: "other",     level: "A1", image: null },
    { id: 596, word: "help",        meaning: "yardım",        synonyms: ["assist","support"],        type: "noun",      level: "A1", image: null },
    { id: 597, word: "yes",         meaning: "evet",          synonyms: ["indeed","correct"],        type: "other",     level: "A1", image: null },
    { id: 598, word: "no",          meaning: "hayır",         synonyms: ["nope","negative"],         type: "other",     level: "A1", image: null },
    { id: 599, word: "maybe",       meaning: "belki",         synonyms: ["perhaps","possibly"],      type: "other",     level: "A1", image: null },
    { id: 600, word: "welcome",     meaning: "hoş geldiniz",  synonyms: ["greet","receive"],         type: "other",     level: "A1", image: null },

    // ── 🧪 Materials & Objects (Malzemeler) ─────────────────
    { id: 601, word: "wood",        meaning: "ahşap",         synonyms: ["timber","lumber"],         type: "noun",      level: "A1", image: null },
    { id: 602, word: "metal",       meaning: "metal",         synonyms: ["steel","iron"],            type: "noun",      level: "A2", image: null },
    { id: 603, word: "glass",       meaning: "cam",           synonyms: ["crystal","pane"],          type: "noun",      level: "A1", image: null },
    { id: 604, word: "plastic",     meaning: "plastik",       synonyms: ["synthetic","polymer"],     type: "noun",      level: "A2", image: null },
    { id: 605, word: "paper",       meaning: "kağıt",         synonyms: ["sheet","page"],            type: "noun",      level: "A1", image: null },
    { id: 606, word: "cloth",       meaning: "kumaş",         synonyms: ["fabric","textile"],        type: "noun",      level: "A2", image: null },
    { id: 607, word: "leather",     meaning: "deri",          synonyms: ["hide","skin"],             type: "noun",      level: "B1", image: null },
    { id: 608, word: "gold",        meaning: "altın",         synonyms: ["precious metal","Au"],     type: "noun",      level: "A1", image: null },
    { id: 609, word: "silver",      meaning: "gümüş",         synonyms: ["metal","Ag"],              type: "noun",      level: "A2", image: null },
    { id: 610, word: "iron",        meaning: "demir",         synonyms: ["metal","Fe"],              type: "noun",      level: "A2", image: null },
    { id: 611, word: "box",         meaning: "kutu",          synonyms: ["container","case"],        type: "noun",      level: "A1", image: null },
    { id: 612, word: "bag",         meaning: "çanta",         synonyms: ["pouch","sack"],            type: "noun",      level: "A1", image: null },
    { id: 613, word: "rope",        meaning: "ip",            synonyms: ["cord","cable"],            type: "noun",      level: "A2", image: null },
    { id: 614, word: "key",         meaning: "anahtar",       synonyms: ["opener","pass"],           type: "noun",      level: "A1", image: null },
    { id: 615, word: "lock",        meaning: "kilit",         synonyms: ["bolt","latch"],            type: "noun",      level: "A2", image: null },

    // ── 🔧 Tools & Equipment (Aletler) ──────────────────────
    { id: 616, word: "tool",        meaning: "alet",          synonyms: ["instrument","device"],     type: "noun",      level: "A2", image: null },
    { id: 617, word: "hammer",      meaning: "çekiç",         synonyms: ["mallet","striker"],        type: "noun",      level: "A2", image: null },
    { id: 618, word: "saw",         meaning: "testere",       synonyms: ["blade","cutter"],          type: "noun",      level: "B1", image: null },
    { id: 619, word: "nail",        meaning: "çivi",          synonyms: ["pin","spike"],             type: "noun",      level: "A2", image: null },
    { id: 620, word: "screw",       meaning: "vida",          synonyms: ["bolt","fastener"],         type: "noun",      level: "B1", image: null },
    { id: 621, word: "wire",        meaning: "tel/kablo",     synonyms: ["cable","cord"],            type: "noun",      level: "A2", image: null },
    { id: 622, word: "engine",      meaning: "motor",         synonyms: ["motor","power unit"],      type: "noun",      level: "A2", image: null },
    { id: 623, word: "battery",     meaning: "pil/batarya",   synonyms: ["cell","power source"],     type: "noun",      level: "A2", image: null },
    { id: 624, word: "switch",      meaning: "düğme/anahtar", synonyms: ["button","toggle"],         type: "noun",      level: "A2", image: null },
    { id: 625, word: "button",      meaning: "düğme",         synonyms: ["switch","control"],        type: "noun",      level: "A1", image: null },

    // ── 📐 Size & Shape (Boyut & Şekil) ─────────────────────
    { id: 626, word: "size",        meaning: "boyut",         synonyms: ["dimension","scale"],       type: "noun",      level: "A1", image: null },
    { id: 627, word: "shape",       meaning: "şekil",         synonyms: ["form","figure"],           type: "noun",      level: "A2", image: null },
    { id: 628, word: "circle",      meaning: "daire",         synonyms: ["round","ring"],            type: "noun",      level: "A1", image: null },
    { id: 629, word: "square",      meaning: "kare",          synonyms: ["rectangle","box"],         type: "noun",      level: "A1", image: null },
    { id: 630, word: "triangle",    meaning: "üçgen",         synonyms: ["three-sided","delta"],     type: "noun",      level: "A2", image: null },
    { id: 631, word: "line",        meaning: "çizgi",         synonyms: ["stripe","mark"],           type: "noun",      level: "A1", image: null },
    { id: 632, word: "point",       meaning: "nokta",         synonyms: ["dot","spot"],              type: "noun",      level: "A1", image: null },
    { id: 633, word: "edge",        meaning: "kenar",         synonyms: ["border","rim"],            type: "noun",      level: "A2", image: null },
    { id: 634, word: "corner",      meaning: "köşe",          synonyms: ["angle","turn"],            type: "noun",      level: "A1", image: null },
    { id: 635, word: "surface",     meaning: "yüzey",         synonyms: ["face","side"],             type: "noun",      level: "B1", image: null },
    { id: 636, word: "center",      meaning: "merkez",        synonyms: ["middle","core"],           type: "noun",      level: "A2", image: null },
    { id: 637, word: "length",      meaning: "uzunluk",       synonyms: ["extent","distance"],       type: "noun",      level: "A2", image: null },
    { id: 638, word: "width",       meaning: "genişlik",      synonyms: ["breadth","span"],          type: "noun",      level: "B1", image: null },
    { id: 639, word: "height",      meaning: "yükseklik",     synonyms: ["altitude","elevation"],    type: "noun",      level: "A2", image: null },
    { id: 640, word: "depth",       meaning: "derinlik",      synonyms: ["profundity","deepness"],   type: "noun",      level: "B1", image: null },

    // ── 🌙 Daily Routine (Günlük Rutin) ─────────────────────
    { id: 641, word: "wake up",     meaning: "uyanmak",       synonyms: ["rise","stir"],             type: "verb",      level: "A1", image: null },
    { id: 642, word: "brush",       meaning: "fırçalamak",    synonyms: ["clean","sweep"],           type: "verb",      level: "A1", image: null },
    { id: 643, word: "shower",      meaning: "duş almak",     synonyms: ["wash","bathe"],            type: "noun",      level: "A1", image: null },
    { id: 644, word: "dress",       meaning: "giyinmek",      synonyms: ["wear","put on"],           type: "verb",      level: "A1", image: null },
    { id: 645, word: "breakfast",   meaning: "kahvaltı",      synonyms: ["morning meal","brunch"],   type: "noun",      level: "A1", image: null },
    { id: 646, word: "lunch",       meaning: "öğle yemeği",   synonyms: ["midday meal","noon"],      type: "noun",      level: "A1", image: null },
    { id: 647, word: "dinner",      meaning: "akşam yemeği",  synonyms: ["supper","evening meal"],   type: "noun",      level: "A1", image: null },
    { id: 648, word: "rest",        meaning: "dinlenmek",     synonyms: ["relax","repose"],          type: "verb",      level: "A1", image: null },
    { id: 649, word: "exercise",    meaning: "egzersiz yapmak",synonyms: ["train","work out"],       type: "verb",      level: "A2", image: null },
    { id: 650, word: "go to bed",   meaning: "yatmak",        synonyms: ["sleep","retire"],          type: "verb",      level: "A1", image: null },

    // ── 🎨 Describing Things (Tanımlama) ─────────────────────
    { id: 651, word: "loud",        meaning: "gürültülü",     synonyms: ["noisy","roaring"],         type: "adjective", level: "A2", image: null },
    { id: 652, word: "quiet",       meaning: "sessiz",        synonyms: ["silent","calm"],           type: "adjective", level: "A1", image: null },
    { id: 653, word: "bright",      meaning: "parlak",        synonyms: ["shiny","vivid"],           type: "adjective", level: "A2", image: null },
    { id: 654, word: "dark",        meaning: "karanlık",      synonyms: ["dim","gloomy"],            type: "adjective", level: "A1", image: null },
    { id: 655, word: "thick",       meaning: "kalın",         synonyms: ["dense","solid"],           type: "adjective", level: "A2", image: null },
    { id: 656, word: "thin",        meaning: "ince",          synonyms: ["slim","narrow"],           type: "adjective", level: "A2", image: null },
    { id: 657, word: "heavy",       meaning: "ağır",          synonyms: ["weighty","massive"],       type: "adjective", level: "A1", image: null },
    { id: 658, word: "light",       meaning: "hafif",         synonyms: ["featherweight","airy"],    type: "adjective", level: "A1", image: null },
    { id: 659, word: "round",       meaning: "yuvarlak",      synonyms: ["circular","oval"],         type: "adjective", level: "A1", image: null },
    { id: 660, word: "flat",        meaning: "düz",           synonyms: ["level","plane"],           type: "adjective", level: "A2", image: null },
    { id: 661, word: "rough",       meaning: "pürüzlü",       synonyms: ["coarse","uneven"],         type: "adjective", level: "B1", image: null },
    { id: 662, word: "smooth",      meaning: "pürüzsüz",      synonyms: ["sleek","silky"],           type: "adjective", level: "B1", image: null },
    { id: 663, word: "wet",         meaning: "ıslak",         synonyms: ["damp","soaked"],           type: "adjective", level: "A1", image: null },
    { id: 664, word: "dry",         meaning: "kuru",          synonyms: ["arid","parched"],          type: "adjective", level: "A1", image: null },
    { id: 665, word: "sharp",       meaning: "keskin",        synonyms: ["pointed","acute"],         type: "adjective", level: "A2", image: null },

    // ── 🗓️ Calendar & Seasons (Takvim & Mevsimler) ──────────
    { id: 666, word: "spring",      meaning: "ilkbahar",      synonyms: ["blossom time","March-May"],type: "noun",      level: "A1", image: null },
    { id: 667, word: "summer",      meaning: "yaz",           synonyms: ["hot season","sunny"],      type: "noun",      level: "A1", image: null },
    { id: 668, word: "autumn",      meaning: "sonbahar",      synonyms: ["fall","harvest"],          type: "noun",      level: "A1", image: null },
    { id: 669, word: "winter",      meaning: "kış",           synonyms: ["cold season","snowy"],     type: "noun",      level: "A1", image: null },
    { id: 670, word: "Monday",      meaning: "Pazartesi",     synonyms: ["first weekday"],           type: "noun",      level: "A1", image: null },
    { id: 671, word: "Tuesday",     meaning: "Salı",          synonyms: ["second weekday"],          type: "noun",      level: "A1", image: null },
    { id: 672, word: "Wednesday",   meaning: "Çarşamba",      synonyms: ["midweek"],                 type: "noun",      level: "A1", image: null },
    { id: 673, word: "Thursday",    meaning: "Perşembe",      synonyms: ["fourth weekday"],          type: "noun",      level: "A1", image: null },
    { id: 674, word: "Friday",      meaning: "Cuma",          synonyms: ["last weekday","TGIF"],     type: "noun",      level: "A1", image: null },
    { id: 675, word: "weekend",     meaning: "hafta sonu",    synonyms: ["Saturday-Sunday"],         type: "noun",      level: "A1", image: null },
    { id: 676, word: "January",     meaning: "Ocak",          synonyms: ["first month"],             type: "noun",      level: "A1", image: null },
    { id: 677, word: "February",    meaning: "Şubat",         synonyms: ["second month"],            type: "noun",      level: "A1", image: null },
    { id: 678, word: "March",       meaning: "Mart",          synonyms: ["third month"],             type: "noun",      level: "A1", image: null },
    { id: 679, word: "April",       meaning: "Nisan",         synonyms: ["fourth month"],            type: "noun",      level: "A1", image: null },
    { id: 680, word: "May",         meaning: "Mayıs",         synonyms: ["fifth month"],             type: "noun",      level: "A1", image: null },

    // ── 💬 Language & Grammar (Dil Bilgisi) ─────────────────
    { id: 681, word: "word",        meaning: "kelime",        synonyms: ["term","vocabulary"],       type: "noun",      level: "A1", image: null },
    { id: 682, word: "sentence",    meaning: "cümle",         synonyms: ["phrase","clause"],         type: "noun",      level: "A1", image: null },
    { id: 683, word: "paragraph",   meaning: "paragraf",      synonyms: ["passage","section"],       type: "noun",      level: "A2", image: null },
    { id: 684, word: "grammar",     meaning: "dilbilgisi",    synonyms: ["syntax","rules"],          type: "noun",      level: "A2", image: null },
    { id: 685, word: "verb",        meaning: "fiil",          synonyms: ["action word"],             type: "noun",      level: "A2", image: null },
    { id: 686, word: "noun",        meaning: "isim",          synonyms: ["name","object word"],      type: "noun",      level: "A2", image: null },
    { id: 687, word: "adjective",   meaning: "sıfat",         synonyms: ["describing word"],         type: "noun",      level: "B1", image: null },
    { id: 688, word: "pronunciation",meaning: "telaffuz",     synonyms: ["accent","articulation"],   type: "noun",      level: "B1", image: null },
    { id: 689, word: "vocabulary",  meaning: "kelime bilgisi",synonyms: ["lexis","words"],           type: "noun",      level: "A2", image: null },
    { id: 690, word: "spelling",    meaning: "yazım",         synonyms: ["orthography","letters"],   type: "noun",      level: "A2", image: null },
    { id: 691, word: "meaning",     meaning: "anlam",         synonyms: ["definition","sense"],      type: "noun",      level: "A1", image: null },
    { id: 692, word: "translate",   meaning: "çevirmek",      synonyms: ["interpret","convert"],     type: "verb",      level: "A2", image: null },
    { id: 693, word: "accent",      meaning: "aksan",         synonyms: ["tone","inflection"],       type: "noun",      level: "B1", image: null },
    { id: 694, word: "phrase",      meaning: "ifade",         synonyms: ["expression","idiom"],      type: "noun",      level: "B1", image: null },
    { id: 695, word: "idiom",       meaning: "deyim",         synonyms: ["expression","saying"],     type: "noun",      level: "B2", image: null },

    // ── 🌱 Verbs of Change (Değişim Fiilleri) ───────────────
    { id: 696, word: "grow",        meaning: "büyümek",       synonyms: ["develop","expand"],        type: "verb",      level: "A1", image: null },
    { id: 697, word: "build",       meaning: "inşa etmek",    synonyms: ["construct","create"],      type: "verb",      level: "A2", image: null },
    { id: 698, word: "break",       meaning: "kırmak",        synonyms: ["smash","crack"],           type: "verb",      level: "A1", image: null },
    { id: 699, word: "fix",         meaning: "tamir etmek",   synonyms: ["repair","mend"],           type: "verb",      level: "A2", image: null },
    { id: 700, word: "clean",       meaning: "temizlemek",    synonyms: ["wash","tidy"],             type: "verb",      level: "A1", image: null },
    { id: 701, word: "destroy",     meaning: "yıkmak",        synonyms: ["demolish","ruin"],         type: "verb",      level: "B1", image: null },
    { id: 702, word: "create",      meaning: "yaratmak",      synonyms: ["make","invent"],           type: "verb",      level: "A2", image: null },
    { id: 703, word: "increase",    meaning: "artmak",        synonyms: ["rise","grow"],             type: "verb",      level: "A2", image: null },
    { id: 704, word: "decrease",    meaning: "azalmak",       synonyms: ["reduce","drop"],           type: "verb",      level: "B1", image: null },
    { id: 705, word: "mix",         meaning: "karıştırmak",   synonyms: ["blend","combine"],         type: "verb",      level: "A2", image: null },
    { id: 706, word: "separate",    meaning: "ayırmak",       synonyms: ["divide","split"],          type: "verb",      level: "B1", image: null },
    { id: 707, word: "connect",     meaning: "bağlamak",      synonyms: ["link","attach"],           type: "verb",      level: "A2", image: null },
    { id: 708, word: "fill",        meaning: "doldurmak",     synonyms: ["pack","load"],             type: "verb",      level: "A1", image: null },
    { id: 709, word: "empty",       meaning: "boşaltmak",     synonyms: ["drain","clear"],           type: "verb",      level: "A2", image: null },
    { id: 710, word: "turn",        meaning: "dönmek",        synonyms: ["rotate","spin"],           type: "verb",      level: "A1", image: null },

    // ── 🎁 Special Events (Özel Günler) ─────────────────────
    { id: 711, word: "birthday",    meaning: "doğum günü",    synonyms: ["anniversary","celebration"],type: "noun",     level: "A1", image: null },
    { id: 712, word: "party",       meaning: "parti",         synonyms: ["celebration","event"],     type: "noun",      level: "A1", image: null },
    { id: 713, word: "gift",        meaning: "hediye",        synonyms: ["present","donation"],      type: "noun",      level: "A1", image: null },
    { id: 714, word: "wedding",     meaning: "düğün",         synonyms: ["marriage","ceremony"],     type: "noun",      level: "A2", image: null },
    { id: 715, word: "ceremony",    meaning: "tören",         synonyms: ["ritual","event"],          type: "noun",      level: "B1", image: null },
    { id: 716, word: "festival",    meaning: "festival",      synonyms: ["celebration","fair"],      type: "noun",      level: "A2", image: null },
    { id: 717, word: "celebrate",   meaning: "kutlamak",      synonyms: ["honor","rejoice"],         type: "verb",      level: "A2", image: null },
    { id: 718, word: "invite",      meaning: "davet etmek",   synonyms: ["call","ask"],              type: "verb",      level: "A2", image: null },
    { id: 719, word: "surprise",    meaning: "sürpriz",       synonyms: ["shock","astonish"],        type: "noun",      level: "A2", image: null },
    { id: 720, word: "candle",      meaning: "mum",           synonyms: ["taper","wax light"],       type: "noun",      level: "A2", image: null },

    // ── 🐝 Insects & Small Animals (Böcekler) ───────────────
    { id: 721, word: "bee",         meaning: "arı",           synonyms: ["insect","honeybee"],       type: "noun",      level: "A1", image: null },
    { id: 722, word: "butterfly",   meaning: "kelebek",       synonyms: ["insect","moth"],           type: "noun",      level: "A1", image: null },
    { id: 723, word: "ant",         meaning: "karınca",       synonyms: ["insect","colony"],         type: "noun",      level: "A2", image: null },
    { id: 724, word: "fly",         meaning: "sinek",         synonyms: ["insect","pest"],           type: "noun",      level: "A2", image: null },
    { id: 725, word: "spider",      meaning: "örümcek",       synonyms: ["arachnid","web"],          type: "noun",      level: "A2", image: null },
    { id: 726, word: "mosquito",    meaning: "sivrisinek",    synonyms: ["insect","pest"],           type: "noun",      level: "A2", image: null },
    { id: 727, word: "worm",        meaning: "solucan",       synonyms: ["earthworm","larva"],       type: "noun",      level: "B1", image: null },
    { id: 728, word: "turtle",      meaning: "kaplumbağa",    synonyms: ["reptile","tortoise"],      type: "noun",      level: "A2", image: null },
    { id: 729, word: "crocodile",   meaning: "timsah",        synonyms: ["reptile","alligator"],     type: "noun",      level: "A2", image: null },
    { id: 730, word: "parrot",      meaning: "papağan",       synonyms: ["bird","tropical bird"],    type: "noun",      level: "A2", image: null },

    // ── 🏅 Sports Actions (Spor Hareketleri) ─────────────────
    { id: 731, word: "score",       meaning: "gol/puan atmak",synonyms: ["goal","point"],            type: "verb",      level: "A2", image: null },
    { id: 732, word: "win",         meaning: "kazanmak",      synonyms: ["triumph","succeed"],       type: "verb",      level: "A1", image: null },
    { id: 733, word: "lose",        meaning: "kaybetmek",     synonyms: ["defeat","fail"],           type: "verb",      level: "A1", image: null },
    { id: 734, word: "team",        meaning: "takım",         synonyms: ["group","squad"],           type: "noun",      level: "A1", image: null },
    { id: 735, word: "player",      meaning: "oyuncu",        synonyms: ["athlete","competitor"],    type: "noun",      level: "A1", image: null },
    { id: 736, word: "coach",       meaning: "antrenör",      synonyms: ["trainer","mentor"],        type: "noun",      level: "A2", image: null },
    { id: 737, word: "stadium",     meaning: "stadyum",       synonyms: ["arena","ground"],          type: "noun",      level: "A2", image: null },
    { id: 738, word: "race",        meaning: "yarış",         synonyms: ["contest","sprint"],        type: "noun",      level: "A2", image: null },
    { id: 739, word: "medal",       meaning: "madalya",       synonyms: ["award","trophy"],          type: "noun",      level: "A2", image: null },
    { id: 740, word: "champion",    meaning: "şampiyon",      synonyms: ["winner","title holder"],   type: "noun",      level: "B1", image: null },

    // ── 🔐 Safety & Emergency (Güvenlik) ────────────────────
    { id: 741, word: "danger",      meaning: "tehlike",       synonyms: ["risk","hazard"],           type: "noun",      level: "A2", image: null },
    { id: 742, word: "accident",    meaning: "kaza",          synonyms: ["incident","crash"],        type: "noun",      level: "A2", image: null },
    { id: 743, word: "emergency",   meaning: "acil durum",    synonyms: ["crisis","urgency"],        type: "noun",      level: "B1", image: null },
    { id: 744, word: "fire",        meaning: "yangın",        synonyms: ["blaze","flame"],           type: "noun",      level: "A1", image: null },
    { id: 745, word: "ambulance",   meaning: "ambulans",      synonyms: ["rescue vehicle"],          type: "noun",      level: "A2", image: null },
    { id: 746, word: "alarm",       meaning: "alarm",         synonyms: ["warning","alert"],         type: "noun",      level: "A2", image: null },
    { id: 747, word: "escape",      meaning: "kaçmak",        synonyms: ["flee","run away"],         type: "verb",      level: "B1", image: null },
    { id: 748, word: "rescue",      meaning: "kurtarmak",     synonyms: ["save","recover"],          type: "verb",      level: "B1", image: null },
    { id: 749, word: "protect",     meaning: "korumak",       synonyms: ["guard","defend"],          type: "verb",      level: "B1", image: null },
    { id: 750, word: "warn",        meaning: "uyarmak",       synonyms: ["alert","caution"],         type: "verb",      level: "B1", image: null },

    // ── 🍳 More Food & Cooking (Daha Fazla Yiyecek) ──────────
    { id: 751, word: "flour",       meaning: "un",            synonyms: ["powder","wheat"],          type: "noun",      level: "A2", image: null },
    { id: 752, word: "oil",         meaning: "yağ",           synonyms: ["fat","grease"],            type: "noun",      level: "A1", image: null },
    { id: 753, word: "vinegar",     meaning: "sirke",         synonyms: ["acid","sour liquid"],      type: "noun",      level: "B1", image: null },
    { id: 754, word: "sauce",       meaning: "sos",           synonyms: ["gravy","dressing"],        type: "noun",      level: "A2", image: null },
    { id: 755, word: "spice",       meaning: "baharat",       synonyms: ["seasoning","herb"],        type: "noun",      level: "A2", image: null },
    { id: 756, word: "honey",       meaning: "bal",           synonyms: ["sweetener","nectar"],      type: "noun",      level: "A1", image: null },
    { id: 757, word: "jam",         meaning: "reçel",         synonyms: ["preserve","jelly"],        type: "noun",      level: "A2", image: null },
    { id: 758, word: "chocolate",   meaning: "çikolata",      synonyms: ["cocoa","candy"],           type: "noun",      level: "A1", image: null },
    { id: 759, word: "ice cream",   meaning: "dondurma",      synonyms: ["gelato","dessert"],        type: "noun",      level: "A1", image: null },
    { id: 760, word: "popcorn",     meaning: "patlamış mısır",synonyms: ["snack","corn"],            type: "noun",      level: "A2", image: null },

    // ── 🌺 More Nature & Animals (Daha Fazla Doğa) ──────────
    { id: 761, word: "rose",        meaning: "gül",           synonyms: ["flower","bloom"],          type: "noun",      level: "A1", image: null },
    { id: 762, word: "tulip",       meaning: "lale",          synonyms: ["flower","bulb plant"],     type: "noun",      level: "A2", image: null },
    { id: 763, word: "pine",        meaning: "çam",           synonyms: ["conifer","evergreen"],     type: "noun",      level: "B1", image: null },
    { id: 764, word: "sand",        meaning: "kum",           synonyms: ["granule","beach"],         type: "noun",      level: "A1", image: null },
    { id: 765, word: "mud",         meaning: "çamur",         synonyms: ["dirt","sludge"],           type: "noun",      level: "A2", image: null },
    { id: 766, word: "wave",        meaning: "dalga",         synonyms: ["ripple","surge"],          type: "noun",      level: "A2", image: null },
    { id: 767, word: "cliff",       meaning: "uçurum",        synonyms: ["ledge","precipice"],       type: "noun",      level: "B1", image: null },
    { id: 768, word: "cave",        meaning: "mağara",        synonyms: ["grotto","cavern"],         type: "noun",      level: "B1", image: null },
    { id: 769, word: "waterfall",   meaning: "şelale",        synonyms: ["cascade","falls"],         type: "noun",      level: "B1", image: null },
    { id: 770, word: "rainbow",     meaning: "gökkuşağı",     synonyms: ["arc","spectrum"],          type: "noun",      level: "A2", image: null },

    // ── 🏗️ Construction & Architecture (Mimari) ─────────────
    { id: 771, word: "building",    meaning: "bina",          synonyms: ["structure","construction"],type: "noun",      level: "A1", image: null },
    { id: 772, word: "apartment",   meaning: "daire",         synonyms: ["flat","unit"],             type: "noun",      level: "A2", image: null },
    { id: 773, word: "roof",        meaning: "çatı",          synonyms: ["top","cover"],             type: "noun",      level: "A1", image: null },
    { id: 774, word: "basement",    meaning: "bodrum",        synonyms: ["cellar","underground"],    type: "noun",      level: "B1", image: null },
    { id: 775, word: "balcony",     meaning: "balkon",        synonyms: ["terrace","veranda"],       type: "noun",      level: "A2", image: null },
    { id: 776, word: "tower",       meaning: "kule",          synonyms: ["spire","column"],          type: "noun",      level: "A2", image: null },
    { id: 777, word: "castle",      meaning: "kale",          synonyms: ["fortress","citadel"],      type: "noun",      level: "A2", image: null },
    { id: 778, word: "palace",      meaning: "saray",         synonyms: ["mansion","estate"],        type: "noun",      level: "B1", image: null },
    { id: 779, word: "temple",      meaning: "tapınak",       synonyms: ["shrine","sanctuary"],      type: "noun",      level: "B1", image: null },
    { id: 780, word: "fountain",    meaning: "çeşme",         synonyms: ["spring","jet"],            type: "noun",      level: "A2", image: null },

    // ── 📊 Numbers & Math (Matematik) ───────────────────────
    { id: 781, word: "add",         meaning: "eklemek",       synonyms: ["plus","combine"],          type: "verb",      level: "A1", image: null },
    { id: 782, word: "subtract",    meaning: "çıkarmak",      synonyms: ["minus","deduct"],          type: "verb",      level: "A2", image: null },
    { id: 783, word: "multiply",    meaning: "çarpmak",       synonyms: ["times","product"],         type: "verb",      level: "A2", image: null },
    { id: 784, word: "divide",      meaning: "bölmek",        synonyms: ["split","fraction"],        type: "verb",      level: "A2", image: null },
    { id: 785, word: "calculate",   meaning: "hesaplamak",    synonyms: ["compute","figure"],        type: "verb",      level: "B1", image: null },
    { id: 786, word: "count",       meaning: "saymak",        synonyms: ["enumerate","tally"],       type: "verb",      level: "A1", image: null },
    { id: 787, word: "measure",     meaning: "ölçmek",        synonyms: ["gauge","assess"],          type: "verb",      level: "A2", image: null },
    { id: 788, word: "number",      meaning: "sayı",          synonyms: ["figure","digit"],          type: "noun",      level: "A1", image: null },
    { id: 789, word: "half",        meaning: "yarım",         synonyms: ["50%","mid"],               type: "noun",      level: "A1", image: null },
    { id: 790, word: "quarter",     meaning: "çeyrek",        synonyms: ["25%","fourth"],            type: "noun",      level: "A2", image: null },

    // ── 🌍 Global & Modern (Küresel & Modern) ────────────────
    { id: 791, word: "global",      meaning: "küresel",       synonyms: ["worldwide","universal"],   type: "adjective", level: "B1", image: null },
    { id: 792, word: "digital",     meaning: "dijital",       synonyms: ["electronic","online"],     type: "adjective", level: "A2", image: null },
    { id: 793, word: "online",      meaning: "çevrimiçi",     synonyms: ["internet","connected"],    type: "adjective", level: "A2", image: null },
    { id: 794, word: "network",     meaning: "ağ",            synonyms: ["system","connection"],     type: "noun",      level: "B1", image: null },
    { id: 795, word: "virus",       meaning: "virüs",         synonyms: ["malware","infection"],     type: "noun",      level: "A2", image: null },
    { id: 796, word: "app",         meaning: "uygulama",      synonyms: ["application","program"],   type: "noun",      level: "A2", image: null },
    { id: 797, word: "download",    meaning: "indirmek",      synonyms: ["save","fetch"],            type: "verb",      level: "A2", image: null },
    { id: 798, word: "upload",      meaning: "yüklemek",      synonyms: ["post","send"],             type: "verb",      level: "A2", image: null },
    { id: 799, word: "update",      meaning: "güncellemek",   synonyms: ["upgrade","refresh"],       type: "verb",      level: "A2", image: null },
    { id: 800, word: "delete",      meaning: "silmek",        synonyms: ["remove","erase"],          type: "verb",      level: "A2", image: null },

    // ── 🌟 Advanced Verbs (İleri Fiiller) ────────────────────
    { id: 801, word: "accept",      meaning: "kabul etmek",   synonyms: ["approve","receive"],       type: "verb",      level: "B1", image: null },
    { id: 802, word: "refuse",      meaning: "reddetmek",     synonyms: ["decline","reject"],        type: "verb",      level: "B1", image: null },
    { id: 803, word: "allow",       meaning: "izin vermek",   synonyms: ["permit","enable"],         type: "verb",      level: "A2", image: null },
    { id: 804, word: "prevent",     meaning: "önlemek",       synonyms: ["stop","block"],            type: "verb",      level: "B1", image: null },
    { id: 805, word: "support",     meaning: "desteklemek",   synonyms: ["back","assist"],           type: "verb",      level: "B1", image: null },
    { id: 806, word: "oppose",      meaning: "karşı çıkmak",  synonyms: ["resist","object"],         type: "verb",      level: "B2", image: null },
    { id: 807, word: "suggest",     meaning: "önermek",       synonyms: ["propose","recommend"],     type: "verb",      level: "B1", image: null },
    { id: 808, word: "confirm",     meaning: "onaylamak",     synonyms: ["verify","approve"],        type: "verb",      level: "B1", image: null },
    { id: 809, word: "deny",        meaning: "inkar etmek",   synonyms: ["reject","contradict"],     type: "verb",      level: "B1", image: null },
    { id: 810, word: "admit",       meaning: "kabul etmek",   synonyms: ["confess","acknowledge"],   type: "verb",      level: "B1", image: null },
    { id: 811, word: "prove",       meaning: "kanıtlamak",    synonyms: ["demonstrate","verify"],    type: "verb",      level: "B1", image: null },
    { id: 812, word: "compare",     meaning: "karşılaştırmak",synonyms: ["contrast","relate"],       type: "verb",      level: "B1", image: null },
    { id: 813, word: "describe",    meaning: "tanımlamak",    synonyms: ["define","portray"],        type: "verb",      level: "A2", image: null },
    { id: 814, word: "produce",     meaning: "üretmek",       synonyms: ["manufacture","generate"],  type: "verb",      level: "B1", image: null },
    { id: 815, word: "consume",     meaning: "tüketmek",      synonyms: ["use up","devour"],         type: "verb",      level: "B2", image: null },
    { id: 816, word: "develop",     meaning: "geliştirmek",   synonyms: ["advance","expand"],        type: "verb",      level: "B1", image: null },
    { id: 817, word: "reduce",      meaning: "azaltmak",      synonyms: ["decrease","cut"],          type: "verb",      level: "B1", image: null },
    { id: 818, word: "extend",      meaning: "uzatmak",       synonyms: ["prolong","expand"],        type: "verb",      level: "B1", image: null },
    { id: 819, word: "replace",     meaning: "değiştirmek",   synonyms: ["substitute","swap"],       type: "verb",      level: "B1", image: null },
    { id: 820, word: "reflect",     meaning: "yansıtmak",     synonyms: ["mirror","consider"],       type: "verb",      level: "B2", image: null },

    // ── 💡 Advanced Adjectives (İleri Sıfatlar) ──────────────
    { id: 821, word: "ancient",     meaning: "antik/eski",    synonyms: ["old","historic"],          type: "adjective", level: "B1", image: null },
    { id: 822, word: "modern",      meaning: "modern",        synonyms: ["contemporary","current"],  type: "adjective", level: "A2", image: null },
    { id: 823, word: "popular",     meaning: "popüler",       synonyms: ["famous","well-known"],     type: "adjective", level: "A2", image: null },
    { id: 824, word: "rare",        meaning: "nadir",         synonyms: ["scarce","unusual"],        type: "adjective", level: "B1", image: null },
    { id: 825, word: "common",      meaning: "yaygın",        synonyms: ["frequent","ordinary"],     type: "adjective", level: "A2", image: null },
    { id: 826, word: "specific",    meaning: "belirli",       synonyms: ["particular","exact"],      type: "adjective", level: "B1", image: null },
    { id: 827, word: "general",     meaning: "genel",         synonyms: ["broad","universal"],       type: "adjective", level: "A2", image: null },
    { id: 828, word: "official",    meaning: "resmi",         synonyms: ["formal","authorized"],     type: "adjective", level: "B1", image: null },
    { id: 829, word: "private",     meaning: "özel",          synonyms: ["personal","confidential"], type: "adjective", level: "B1", image: null },
    { id: 830, word: "public",      meaning: "kamusal",       synonyms: ["open","communal"],         type: "adjective", level: "A2", image: null },
    { id: 831, word: "necessary",   meaning: "gerekli",       synonyms: ["essential","required"],    type: "adjective", level: "B1", image: null },
    { id: 832, word: "possible",    meaning: "mümkün",        synonyms: ["feasible","achievable"],   type: "adjective", level: "A2", image: null },
    { id: 833, word: "impossible",  meaning: "imkansız",      synonyms: ["unfeasible","unachievable"],type: "adjective", level: "B1", image: null },
    { id: 834, word: "similar",     meaning: "benzer",        synonyms: ["alike","comparable"],      type: "adjective", level: "B1", image: null },
    { id: 835, word: "different",   meaning: "farklı",        synonyms: ["distinct","unlike"],       type: "adjective", level: "A2", image: null },
    { id: 836, word: "complete",    meaning: "tam",           synonyms: ["whole","full"],            type: "adjective", level: "A2", image: null },
    { id: 837, word: "empty",       meaning: "boş",           synonyms: ["vacant","hollow"],         type: "adjective", level: "A2", image: null },
    { id: 838, word: "perfect",     meaning: "mükemmel",      synonyms: ["flawless","ideal"],        type: "adjective", level: "A2", image: null },
    { id: 839, word: "terrible",    meaning: "korkunç",       synonyms: ["awful","dreadful"],        type: "adjective", level: "A2", image: null },
    { id: 840, word: "wonderful",   meaning: "harika",        synonyms: ["amazing","fantastic"],     type: "adjective", level: "A2", image: null },

    // ── 🏦 Business & Economics (İş Dünyası) ─────────────────
    { id: 841, word: "business",    meaning: "iş/ticaret",    synonyms: ["trade","commerce"],        type: "noun",      level: "A2", image: null },
    { id: 842, word: "company",     meaning: "şirket",        synonyms: ["firm","corporation"],      type: "noun",      level: "A2", image: null },
    { id: 843, word: "product",     meaning: "ürün",          synonyms: ["item","good"],             type: "noun",      level: "A2", image: null },
    { id: 844, word: "service",     meaning: "hizmet",        synonyms: ["assistance","aid"],        type: "noun",      level: "A2", image: null },
    { id: 845, word: "customer",    meaning: "müşteri",       synonyms: ["client","buyer"],          type: "noun",      level: "A2", image: null },
    { id: 846, word: "profit",      meaning: "kar",           synonyms: ["gain","earnings"],         type: "noun",      level: "B1", image: null },
    { id: 847, word: "loss",        meaning: "zarar",         synonyms: ["deficit","shortage"],      type: "noun",      level: "B1", image: null },
    { id: 848, word: "investment",  meaning: "yatırım",       synonyms: ["fund","stake"],            type: "noun",      level: "B2", image: null },
    { id: 849, word: "contract",    meaning: "sözleşme",      synonyms: ["agreement","deal"],        type: "noun",      level: "B1", image: null },
    { id: 850, word: "market",      meaning: "piyasa",        synonyms: ["trade","exchange"],        type: "noun",      level: "B1", image: null },
    { id: 851, word: "supply",      meaning: "arz",           synonyms: ["provide","stock"],         type: "noun",      level: "B2", image: null },
    { id: 852, word: "demand",      meaning: "talep",         synonyms: ["need","request"],          type: "noun",      level: "B1", image: null },
    { id: 853, word: "export",      meaning: "ihracat",       synonyms: ["ship out","send abroad"],  type: "noun",      level: "B2", image: null },
    { id: 854, word: "import",      meaning: "ithalat",       synonyms: ["bring in","receive"],      type: "noun",      level: "B2", image: null },
    { id: 855, word: "budget",      meaning: "bütçe",         synonyms: ["funds","finances"],        type: "noun",      level: "B1", image: null },

    // ── 🧬 Science Terms (Bilim Terimleri) ──────────────────
    { id: 856, word: "biology",     meaning: "biyoloji",      synonyms: ["life science","ecology"],  type: "noun",      level: "B1", image: null },
    { id: 857, word: "physics",     meaning: "fizik",         synonyms: ["natural science","forces"],type: "noun",      level: "B1", image: null },
    { id: 858, word: "chemistry",   meaning: "kimya",         synonyms: ["elements","reactions"],    type: "noun",      level: "B1", image: null },
    { id: 859, word: "oxygen",      meaning: "oksijen",       synonyms: ["O2","gas"],                type: "noun",      level: "B1", image: null },
    { id: 860, word: "carbon",      meaning: "karbon",        synonyms: ["C","element"],             type: "noun",      level: "B1", image: null },
    { id: 861, word: "cell",        meaning: "hücre",         synonyms: ["unit","organism"],         type: "noun",      level: "B1", image: null },
    { id: 862, word: "gene",        meaning: "gen",           synonyms: ["DNA","heredity"],          type: "noun",      level: "B2", image: null },
    { id: 863, word: "evolution",   meaning: "evrim",         synonyms: ["development","change"],    type: "noun",      level: "B2", image: null },
    { id: 864, word: "fossil",      meaning: "fosil",         synonyms: ["remains","artifact"],      type: "noun",      level: "B1", image: null },
    { id: 865, word: "mineral",     meaning: "mineral",       synonyms: ["rock","element"],          type: "noun",      level: "B1", image: null },

    // ── 🎭 Character & Values (Karakter & Değerler) ──────────
    { id: 866, word: "respect",     meaning: "saygı",         synonyms: ["honor","esteem"],          type: "noun",      level: "A2", image: null },
    { id: 867, word: "trust",       meaning: "güven",         synonyms: ["faith","confidence"],      type: "noun",      level: "B1", image: null },
    { id: 868, word: "loyalty",     meaning: "sadakat",       synonyms: ["faithfulness","devotion"], type: "noun",      level: "B2", image: null },
    { id: 869, word: "courage",     meaning: "cesaret",       synonyms: ["bravery","boldness"],      type: "noun",      level: "B1", image: null },
    { id: 870, word: "wisdom",      meaning: "bilgelik",      synonyms: ["insight","judgment"],      type: "noun",      level: "B2", image: null },
    { id: 871, word: "creativity",  meaning: "yaratıcılık",   synonyms: ["innovation","originality"],type: "noun",      level: "B2", image: null },
    { id: 872, word: "responsibility",meaning: "sorumluluk",  synonyms: ["duty","obligation"],       type: "noun",      level: "B1", image: null },
    { id: 873, word: "discipline",  meaning: "disiplin",      synonyms: ["control","order"],         type: "noun",      level: "B1", image: null },
    { id: 874, word: "ambition",    meaning: "hırs/hedef",    synonyms: ["drive","aspiration"],      type: "noun",      level: "B2", image: null },
    { id: 875, word: "attitude",    meaning: "tutum",         synonyms: ["behavior","approach"],     type: "noun",      level: "B1", image: null },

    // ── 🌐 More Places & Geography (Coğrafya) ────────────────
    { id: 876, word: "continent",   meaning: "kıta",          synonyms: ["landmass","region"],       type: "noun",      level: "B1", image: null },
    { id: 877, word: "border",      meaning: "sınır",         synonyms: ["boundary","frontier"],     type: "noun",      level: "B1", image: null },
    { id: 878, word: "capital",     meaning: "başkent",       synonyms: ["main city","metropolis"],  type: "noun",      level: "A2", image: null },
    { id: 879, word: "population",  meaning: "nüfus",         synonyms: ["inhabitants","residents"], type: "noun",      level: "B1", image: null },
    { id: 880, word: "region",      meaning: "bölge",         synonyms: ["area","district"],         type: "noun",      level: "B1", image: null },
    { id: 881, word: "coast",       meaning: "kıyı",          synonyms: ["shore","seaside"],         type: "noun",      level: "A2", image: null },
    { id: 882, word: "port",        meaning: "liman",         synonyms: ["harbor","dock"],           type: "noun",      level: "B1", image: null },
    { id: 883, word: "canal",       meaning: "kanal",         synonyms: ["waterway","channel"],      type: "noun",      level: "B2", image: null },
    { id: 884, word: "dam",         meaning: "baraj",         synonyms: ["barrier","reservoir"],     type: "noun",      level: "B2", image: null },
    { id: 885, word: "territory",   meaning: "toprak",        synonyms: ["land","domain"],           type: "noun",      level: "B2", image: null },

    // ── 🎓 More Academic (Daha Fazla Akademik) ───────────────
    { id: 886, word: "argument",    meaning: "tartışma/sav",  synonyms: ["debate","claim"],          type: "noun",      level: "B1", image: null },
    { id: 887, word: "evidence",    meaning: "kanıt",         synonyms: ["proof","data"],            type: "noun",      level: "B1", image: null },
    { id: 888, word: "conclusion",  meaning: "sonuç",         synonyms: ["finding","outcome"],       type: "noun",      level: "B1", image: null },
    { id: 889, word: "analysis",    meaning: "analiz",        synonyms: ["examination","study"],     type: "noun",      level: "B2", image: null },
    { id: 890, word: "opinion",     meaning: "görüş",         synonyms: ["view","perspective"],      type: "noun",      level: "A2", image: null },
    { id: 891, word: "topic",       meaning: "konu",          synonyms: ["subject","theme"],         type: "noun",      level: "A2", image: null },
    { id: 892, word: "introduction",meaning: "giriş",         synonyms: ["opening","preface"],       type: "noun",      level: "B1", image: null },
    { id: 893, word: "summary",     meaning: "özet",          synonyms: ["overview","abstract"],     type: "noun",      level: "B1", image: null },
    { id: 894, word: "reference",   meaning: "kaynak",        synonyms: ["source","citation"],       type: "noun",      level: "B2", image: null },
    { id: 895, word: "method",      meaning: "yöntem",        synonyms: ["approach","technique"],    type: "noun",      level: "B1", image: null },

    // ── 🌈 Positive Qualities (Pozitif Nitelikler) ───────────
    { id: 896, word: "amazing",     meaning: "muhteşem",      synonyms: ["awesome","incredible"],    type: "adjective", level: "A2", image: null },
    { id: 897, word: "brilliant",   meaning: "parlak/zeki",   synonyms: ["bright","gifted"],         type: "adjective", level: "B1", image: null },
    { id: 898, word: "creative",    meaning: "yaratıcı",      synonyms: ["imaginative","original"],  type: "adjective", level: "B1", image: null },
    { id: 899, word: "efficient",   meaning: "verimli",       synonyms: ["productive","effective"],  type: "adjective", level: "B2", image: null },
    { id: 900, word: "flexible",    meaning: "esnek",         synonyms: ["adaptable","versatile"],   type: "adjective", level: "B1", image: null },
    { id: 901, word: "reliable",    meaning: "güvenilir",     synonyms: ["trustworthy","dependable"],type: "adjective", level: "B1", image: null },
    { id: 902, word: "enthusiastic",meaning: "hevesli",       synonyms: ["eager","passionate"],      type: "adjective", level: "B2", image: null },
    { id: 903, word: "professional",meaning: "profesyonel",   synonyms: ["skilled","expert"],        type: "adjective", level: "B1", image: null },
    { id: 904, word: "logical",     meaning: "mantıklı",      synonyms: ["rational","sensible"],     type: "adjective", level: "B1", image: null },
    { id: 905, word: "accurate",    meaning: "doğru/kesin",   synonyms: ["precise","correct"],       type: "adjective", level: "B1", image: null },

    // ── 🔄 Transition Words (Geçiş Kelimeleri) ───────────────
    { id: 906, word: "however",     meaning: "ancak",         synonyms: ["but","yet"],               type: "other",     level: "B1", image: null },
    { id: 907, word: "therefore",   meaning: "bu yüzden",     synonyms: ["thus","so"],               type: "other",     level: "B1", image: null },
    { id: 908, word: "furthermore", meaning: "ayrıca",        synonyms: ["moreover","besides"],      type: "other",     level: "B2", image: null },
    { id: 909, word: "although",    meaning: "her ne kadar",  synonyms: ["though","even if"],        type: "other",     level: "B1", image: null },
    { id: 910, word: "meanwhile",   meaning: "bu arada",      synonyms: ["at the same time"],        type: "other",     level: "B1", image: null },
    { id: 911, word: "otherwise",   meaning: "aksi halde",    synonyms: ["or else","if not"],        type: "other",     level: "B2", image: null },
    { id: 912, word: "instead",     meaning: "bunun yerine",  synonyms: ["alternatively","rather"],  type: "other",     level: "B1", image: null },
    { id: 913, word: "finally",     meaning: "sonunda",       synonyms: ["lastly","at last"],        type: "other",     level: "A2", image: null },
    { id: 914, word: "suddenly",    meaning: "aniden",        synonyms: ["abruptly","unexpectedly"], type: "other",     level: "A2", image: null },
    { id: 915, word: "gradually",   meaning: "yavaş yavaş",   synonyms: ["slowly","step by step"],   type: "other",     level: "B1", image: null },

    // ── 🧩 Miscellaneous Nouns (Çeşitli İsimler) ─────────────
    { id: 916, word: "event",       meaning: "olay/etkinlik", synonyms: ["occasion","happening"],    type: "noun",      level: "A2", image: null },
    { id: 917, word: "experience",  meaning: "deneyim",       synonyms: ["encounter","practice"],    type: "noun",      level: "B1", image: null },
    { id: 918, word: "opportunity", meaning: "fırsat",        synonyms: ["chance","opening"],        type: "noun",      level: "B1", image: null },
    { id: 919, word: "challenge",   meaning: "zorluk/meydan okuma",synonyms: ["obstacle","trial"],   type: "noun",      level: "B1", image: null },
    { id: 920, word: "risk",        meaning: "risk",          synonyms: ["danger","hazard"],         type: "noun",      level: "B1", image: null },
    { id: 921, word: "reward",      meaning: "ödül",          synonyms: ["prize","incentive"],       type: "noun",      level: "B1", image: null },
    { id: 922, word: "skill",       meaning: "beceri",        synonyms: ["ability","talent"],        type: "noun",      level: "A2", image: null },
    { id: 923, word: "talent",      meaning: "yetenek",       synonyms: ["gift","aptitude"],         type: "noun",      level: "A2", image: null },
    { id: 924, word: "ability",     meaning: "yetenek",       synonyms: ["capability","skill"],      type: "noun",      level: "B1", image: null },
    { id: 925, word: "advantage",   meaning: "avantaj",       synonyms: ["benefit","gain"],          type: "noun",      level: "B1", image: null },
    { id: 926, word: "disadvantage",meaning: "dezavantaj",    synonyms: ["drawback","weakness"],     type: "noun",      level: "B1", image: null },
    { id: 927, word: "benefit",     meaning: "fayda",         synonyms: ["gain","advantage"],        type: "noun",      level: "B1", image: null },
    { id: 928, word: "effect",      meaning: "etki",          synonyms: ["impact","consequence"],    type: "noun",      level: "B1", image: null },
    { id: 929, word: "cause",       meaning: "neden",         synonyms: ["reason","source"],         type: "noun",      level: "B1", image: null },
    { id: 930, word: "purpose",     meaning: "amaç",          synonyms: ["goal","intention"],        type: "noun",      level: "B1", image: null },

    // ── 🌊 More Verbs (Daha Fazla Fiil) ─────────────────────
    { id: 931, word: "search",      meaning: "aramak",        synonyms: ["look for","seek"],         type: "verb",      level: "A2", image: null },
    { id: 932, word: "check",       meaning: "kontrol etmek", synonyms: ["verify","inspect"],        type: "verb",      level: "A2", image: null },
    { id: 933, word: "send",        meaning: "göndermek",     synonyms: ["deliver","transmit"],      type: "verb",      level: "A1", image: null },
    { id: 934, word: "receive",     meaning: "almak",         synonyms: ["get","accept"],            type: "verb",      level: "A2", image: null },
    { id: 935, word: "wait",        meaning: "beklemek",      synonyms: ["stay","pause"],            type: "verb",      level: "A1", image: null },
    { id: 936, word: "stop",        meaning: "durmak",        synonyms: ["halt","cease"],            type: "verb",      level: "A1", image: null },
    { id: 937, word: "start",       meaning: "başlamak",      synonyms: ["begin","initiate"],        type: "verb",      level: "A1", image: null },
    { id: 938, word: "continue",    meaning: "devam etmek",   synonyms: ["proceed","persist"],       type: "verb",      level: "A2", image: null },
    { id: 939, word: "repeat",      meaning: "tekrarlamak",   synonyms: ["redo","duplicate"],        type: "verb",      level: "A2", image: null },
    { id: 940, word: "check",       meaning: "bakmak",        synonyms: ["glance","review"],         type: "verb",      level: "A2", image: null },
    { id: 941, word: "enter",       meaning: "girmek",        synonyms: ["go in","access"],          type: "verb",      level: "A2", image: null },
    { id: 942, word: "exit",        meaning: "çıkmak",        synonyms: ["leave","depart"],          type: "verb",      level: "A2", image: null },
    { id: 943, word: "add",         meaning: "eklemek",       synonyms: ["insert","append"],         type: "verb",      level: "A1", image: null },
    { id: 944, word: "remove",      meaning: "kaldırmak",     synonyms: ["take away","eliminate"],   type: "verb",      level: "A2", image: null },
    { id: 945, word: "report",      meaning: "bildirmek",     synonyms: ["announce","inform"],       type: "verb",      level: "B1", image: null },

    // ── 📣 Communication Verbs (İletişim Fiilleri) ───────────
    { id: 946, word: "announce",    meaning: "duyurmak",      synonyms: ["declare","broadcast"],     type: "verb",      level: "B1", image: null },
    { id: 947, word: "warn",        meaning: "uyarmak",       synonyms: ["caution","alert"],         type: "verb",      level: "B1", image: null },
    { id: 948, word: "convince",    meaning: "ikna etmek",    synonyms: ["persuade","influence"],    type: "verb",      level: "B2", image: null },
    { id: 949, word: "argue",       meaning: "tartışmak",     synonyms: ["debate","dispute"],        type: "verb",      level: "B1", image: null },
    { id: 950, word: "complain",    meaning: "şikayet etmek", synonyms: ["protest","object"],        type: "verb",      level: "B1", image: null },
    { id: 951, word: "apologize",   meaning: "özür dilemek",  synonyms: ["sorry","regret"],          type: "verb",      level: "A2", image: null },
    { id: 952, word: "congratulate",meaning: "tebrik etmek",  synonyms: ["praise","commend"],        type: "verb",      level: "B1", image: null },
    { id: 953, word: "encourage",   meaning: "teşvik etmek",  synonyms: ["motivate","inspire"],      type: "verb",      level: "B1", image: null },
    { id: 954, word: "advise",      meaning: "tavsiye etmek", synonyms: ["counsel","guide"],         type: "verb",      level: "B1", image: null },
    { id: 955, word: "interview",   meaning: "mülakat yapmak",synonyms: ["question","examine"],      type: "verb",      level: "B1", image: null },

    // ── 🔍 Thinking Verbs (Düşünce Fiilleri) ─────────────────
    { id: 956, word: "analyze",     meaning: "analiz etmek",  synonyms: ["examine","study"],         type: "verb",      level: "B2", image: null },
    { id: 957, word: "consider",    meaning: "düşünmek",      synonyms: ["think about","ponder"],    type: "verb",      level: "B1", image: null },
    { id: 958, word: "imagine",     meaning: "hayal etmek",   synonyms: ["picture","envision"],      type: "verb",      level: "A2", image: null },
    { id: 959, word: "realize",     meaning: "fark etmek",    synonyms: ["understand","grasp"],      type: "verb",      level: "B1", image: null },
    { id: 960, word: "assume",      meaning: "varsaymak",     synonyms: ["suppose","presume"],       type: "verb",      level: "B2", image: null },
    { id: 961, word: "conclude",    meaning: "sonuca varmak", synonyms: ["determine","decide"],      type: "verb",      level: "B2", image: null },
    { id: 962, word: "estimate",    meaning: "tahmin etmek",  synonyms: ["guess","approximate"],     type: "verb",      level: "B1", image: null },
    { id: 963, word: "expect",      meaning: "beklemek",      synonyms: ["anticipate","hope"],       type: "verb",      level: "A2", image: null },
    { id: 964, word: "notice",      meaning: "fark etmek",    synonyms: ["observe","perceive"],      type: "verb",      level: "B1", image: null },
    { id: 965, word: "recognize",   meaning: "tanımak",       synonyms: ["identify","acknowledge"],  type: "verb",      level: "B1", image: null },

    // ── 🎯 Final Vocabulary Set (Son Kelime Grubu) ───────────
    { id: 966, word: "interview",   meaning: "röportaj/mülakat",synonyms: ["meeting","session"],     type: "noun",      level: "B1", image: null },
    { id: 967, word: "career",      meaning: "kariyer",       synonyms: ["profession","vocation"],   type: "noun",      level: "B1", image: null },
    { id: 968, word: "project",     meaning: "proje",         synonyms: ["plan","task"],             type: "noun",      level: "A2", image: null },
    { id: 969, word: "deadline",    meaning: "son tarih",     synonyms: ["due date","cutoff"],       type: "noun",      level: "B1", image: null },
    { id: 970, word: "progress",    meaning: "ilerleme",      synonyms: ["advancement","growth"],    type: "noun",      level: "B1", image: null },
    { id: 971, word: "feedback",    meaning: "geri bildirim", synonyms: ["response","evaluation"],   type: "noun",      level: "B1", image: null },
    { id: 972, word: "performance", meaning: "performans",    synonyms: ["output","execution"],      type: "noun",      level: "B1", image: null },
    { id: 973, word: "priority",    meaning: "öncelik",       synonyms: ["importance","urgency"],    type: "noun",      level: "B2", image: null },
    { id: 974, word: "schedule",    meaning: "program/takvim",synonyms: ["timetable","agenda"],      type: "noun",      level: "B1", image: null },
    { id: 975, word: "strategy",    meaning: "strateji",      synonyms: ["plan","approach"],         type: "noun",      level: "B2", image: null },
    { id: 976, word: "tradition",   meaning: "gelenek",       synonyms: ["custom","heritage"],       type: "noun",      level: "B1", image: null },
    { id: 977, word: "generation",  meaning: "nesil",         synonyms: ["era","age group"],         type: "noun",      level: "B1", image: null },
    { id: 978, word: "influence",   meaning: "etki/tesir",    synonyms: ["impact","sway"],           type: "noun",      level: "B2", image: null },
    { id: 979, word: "attitude",    meaning: "davranış",      synonyms: ["manner","conduct"],        type: "noun",      level: "B1", image: null },
    { id: 980, word: "relationship",meaning: "ilişki",        synonyms: ["bond","connection"],       type: "noun",      level: "B1", image: null },
    { id: 981, word: "communication",meaning: "iletişim",     synonyms: ["exchange","dialogue"],     type: "noun",      level: "B1", image: null },
    { id: 982, word: "difference",  meaning: "fark",          synonyms: ["distinction","contrast"],  type: "noun",      level: "A2", image: null },
    { id: 983, word: "connection",  meaning: "bağlantı",      synonyms: ["link","tie"],              type: "noun",      level: "B1", image: null },
    { id: 984, word: "pattern",     meaning: "desen/örüntü",  synonyms: ["design","model"],          type: "noun",      level: "B1", image: null },
    { id: 985, word: "structure",   meaning: "yapı",          synonyms: ["framework","format"],      type: "noun",      level: "B1", image: null },
    { id: 986, word: "process",     meaning: "süreç",         synonyms: ["procedure","method"],      type: "noun",      level: "B1", image: null },
    { id: 987, word: "system",      meaning: "sistem",        synonyms: ["structure","mechanism"],   type: "noun",      level: "A2", image: null },
    { id: 988, word: "function",    meaning: "işlev",         synonyms: ["role","purpose"],          type: "noun",      level: "B1", image: null },
    { id: 989, word: "feature",     meaning: "özellik",       synonyms: ["characteristic","trait"],  type: "noun",      level: "B1", image: null },
    { id: 990, word: "detail",      meaning: "ayrıntı",       synonyms: ["particular","specifics"],  type: "noun",      level: "B1", image: null },
    { id: 991, word: "quality",     meaning: "kalite",        synonyms: ["standard","grade"],        type: "noun",      level: "B1", image: null },
    { id: 992, word: "quantity",    meaning: "miktar",        synonyms: ["amount","number"],         type: "noun",      level: "B1", image: null },
    { id: 993, word: "category",    meaning: "kategori",      synonyms: ["class","group"],           type: "noun",      level: "B1", image: null },
    { id: 994, word: "element",     meaning: "unsur/element", synonyms: ["component","part"],        type: "noun",      level: "B1", image: null },
    { id: 995, word: "condition",   meaning: "durum/koşul",   synonyms: ["state","requirement"],     type: "noun",      level: "B1", image: null },
    { id: 996, word: "option",      meaning: "seçenek",       synonyms: ["choice","alternative"],    type: "noun",      level: "B1", image: null },
    { id: 997, word: "situation",   meaning: "durum",         synonyms: ["circumstance","case"],     type: "noun",      level: "A2", image: null },
    { id: 998, word: "version",     meaning: "sürüm/versiyon",synonyms: ["edition","variant"],       type: "noun",      level: "B1", image: null },
    { id: 999, word: "approach",    meaning: "yaklaşım",      synonyms: ["method","way"],            type: "noun",      level: "B2", image: null },
    { id: 1000,word: "achievement", meaning: "başarı/kazanım",synonyms: ["accomplishment","success"],type: "noun",      level: "B1", image: null }
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
