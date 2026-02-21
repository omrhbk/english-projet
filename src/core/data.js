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
    { id: 604, word: "plastic",     meaning: "plastik",       synonyms: ["synthetic","polymer"],     type: "noun",      level: "A2", image: null },
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
    { id: 941, word: "enter",       meaning: "girmek",        synonyms: ["go in","access"],          type: "verb",      level: "A2", image: null },
    { id: 942, word: "exit",        meaning: "çıkmak",        synonyms: ["leave","depart"],          type: "verb",      level: "A2", image: null },
    { id: 944, word: "remove",      meaning: "kaldırmak",     synonyms: ["take away","eliminate"],   type: "verb",      level: "A2", image: null },
    { id: 945, word: "report",      meaning: "bildirmek",     synonyms: ["announce","inform"],       type: "verb",      level: "B1", image: null },

    // ── 📣 Communication Verbs (İletişim Fiilleri) ───────────
    { id: 946, word: "announce",    meaning: "duyurmak",      synonyms: ["declare","broadcast"],     type: "verb",      level: "B1", image: null },
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
    { id: 1000,word: "achievement", meaning: "başarı/kazanım",synonyms: ["accomplishment","success"],type: "noun",      level: "B1", image: null },

    // ── NEW WORDS 1001–1550 ─────────────────────────────────

    // ── Emotions & Psychology (Duygular & Psikoloji) ────────
    { id: 1001, word: "anxious",      meaning: "endişeli",        synonyms: ["worried","nervous","uneasy"],     type: "adjective", level: "B1", image: null, example: "She felt anxious before the job interview." },
    { id: 1002, word: "grateful",     meaning: "minnettar",       synonyms: ["thankful","appreciative","obliged"], type: "adjective", level: "B1", image: null, example: "I am grateful for your help during the move." },
    { id: 1003, word: "jealous",      meaning: "kıskanç",         synonyms: ["envious","covetous","resentful"],  type: "adjective", level: "B1", image: null, example: "He was jealous of his colleague's promotion." },
    { id: 1004, word: "ashamed",      meaning: "utanmış",         synonyms: ["embarrassed","humiliated","guilty"], type: "adjective", level: "B1", image: null, example: "She felt ashamed of her rude behavior." },
    { id: 1005, word: "proud",        meaning: "gururlu",         synonyms: ["dignified","satisfied","honored"],  type: "adjective", level: "A2", image: null, example: "Her parents were proud of her graduation." },
    { id: 1006, word: "furious",      meaning: "çok kızgın",      synonyms: ["enraged","livid","irate"],         type: "adjective", level: "B2", image: null, example: "He was furious when he discovered the lie." },
    { id: 1007, word: "content",      meaning: "memnun",          synonyms: ["satisfied","pleased","happy"],     type: "adjective", level: "B1", image: null, example: "She was content with her simple life." },
    { id: 1008, word: "overwhelmed",  meaning: "bunalmış",        synonyms: ["overloaded","swamped","stressed"], type: "adjective", level: "B2", image: null, example: "He felt overwhelmed by the amount of work." },
    { id: 1009, word: "nostalgic",    meaning: "nostaljik",       synonyms: ["sentimental","wistful","longing"], type: "adjective", level: "B2", image: null, example: "The old photograph made her feel nostalgic." },
    { id: 1010, word: "empathy",      meaning: "empati",          synonyms: ["understanding","compassion","sympathy"], type: "noun", level: "B2", image: null, example: "Empathy is the ability to understand others' feelings." },
    { id: 1011, word: "grief",        meaning: "keder",           synonyms: ["sorrow","mourning","anguish"],     type: "noun",      level: "B2", image: null, example: "She was consumed by grief after the loss." },
    { id: 1012, word: "despair",      meaning: "umutsuzluk",      synonyms: ["hopelessness","desperation","misery"], type: "noun", level: "C1", image: null, example: "He fell into despair after losing everything." },
    { id: 1013, word: "frustration",  meaning: "hayal kırıklığı", synonyms: ["annoyance","exasperation","irritation"], type: "noun", level: "B2", image: null, example: "The constant delays caused great frustration." },
    { id: 1014, word: "enthusiasm",   meaning: "coşku",           synonyms: ["eagerness","passion","zeal"],      type: "noun",      level: "B1", image: null, example: "She approached the project with great enthusiasm." },
    { id: 1015, word: "compassion",   meaning: "merhamet",        synonyms: ["kindness","pity","sympathy"],      type: "noun",      level: "B2", image: null, example: "The nurse showed compassion to every patient." },
    { id: 1016, word: "resentment",   meaning: "gücenme",         synonyms: ["bitterness","grudge","hostility"], type: "noun",      level: "C1", image: null, example: "Years of resentment built up between the siblings." },
    { id: 1017, word: "contentment",  meaning: "huzur",           synonyms: ["satisfaction","fulfillment","peace"], type: "noun",  level: "C1", image: null, example: "He found contentment in his quiet garden." },
    { id: 1018, word: "melancholy",   meaning: "hüzün",           synonyms: ["sadness","gloom","depression"],    type: "noun",      level: "C1", image: null, example: "A feeling of melancholy washed over him on rainy days." },

    // ── Business & Finance (İş & Finans) ────────────────────
    { id: 1019, word: "negotiate",    meaning: "müzakere etmek",  synonyms: ["bargain","discuss","mediate"],     type: "verb",      level: "B2", image: null, example: "They had to negotiate the terms of the contract." },
    { id: 1020, word: "revenue",      meaning: "gelir",           synonyms: ["income","earnings","proceeds"],    type: "noun",      level: "B2", image: null, example: "The company's revenue increased by 20% this year." },
    { id: 1021, word: "entrepreneur", meaning: "girişimci",       synonyms: ["businessperson","founder","innovator"], type: "noun", level: "B2", image: null, example: "The young entrepreneur started her own tech company." },
    { id: 1022, word: "mortgage",     meaning: "ipotek",          synonyms: ["loan","lien","pledge"],            type: "noun",      level: "C1", image: null, example: "They took out a mortgage to buy their first house." },
    { id: 1023, word: "bankrupt",     meaning: "iflas etmiş",     synonyms: ["insolvent","broke","ruined"],      type: "adjective", level: "C1", image: null, example: "The company went bankrupt after years of losses." },
    { id: 1024, word: "inflation",    meaning: "enflasyon",       synonyms: ["price rise","devaluation","increase"], type: "noun", level: "B2", image: null, example: "Inflation made everyday items much more expensive." },
    { id: 1025, word: "shareholder",  meaning: "hissedar",        synonyms: ["stockholder","investor","partner"], type: "noun",   level: "C1", image: null, example: "The shareholders voted on the company merger." },
    { id: 1026, word: "merchandise",  meaning: "ticari mal",      synonyms: ["goods","products","commodities"],  type: "noun",      level: "B2", image: null, example: "The store displayed its merchandise attractively." },
    { id: 1027, word: "audit",        meaning: "denetim",         synonyms: ["inspection","review","examination"], type: "noun",   level: "C1", image: null, example: "The annual audit revealed some accounting errors." },
    { id: 1028, word: "stakeholder",  meaning: "paydaş",          synonyms: ["interested party","participant","investor"], type: "noun", level: "C1", image: null, example: "All stakeholders were invited to the planning meeting." },
    { id: 1029, word: "commodity",    meaning: "emtia",           synonyms: ["goods","product","resource"],      type: "noun",      level: "C1", image: null, example: "Oil is one of the most traded commodities in the world." },
    { id: 1030, word: "headquarters", meaning: "merkez",          synonyms: ["main office","base","HQ"],         type: "noun",      level: "B2", image: null, example: "The company moved its headquarters to London." },
    { id: 1031, word: "asset",        meaning: "varlık/mal",      synonyms: ["property","resource","possession"], type: "noun",   level: "B2", image: null, example: "The building is the company's most valuable asset." },
    { id: 1032, word: "liability",    meaning: "yükümlülük",      synonyms: ["obligation","debt","responsibility"], type: "noun", level: "C1", image: null, example: "The company had more liabilities than assets." },

    // ── Technology & Computing (Teknoloji & Bilişim) ────────
    { id: 1033, word: "algorithm",    meaning: "algoritma",       synonyms: ["procedure","formula","method"],    type: "noun",      level: "B2", image: null, example: "The search engine uses a complex algorithm to rank results." },
    { id: 1034, word: "database",     meaning: "veritabanı",      synonyms: ["data store","repository","archive"], type: "noun",  level: "B2", image: null, example: "All customer information is stored in a secure database." },
    { id: 1035, word: "bandwidth",    meaning: "bant genişliği",  synonyms: ["capacity","speed","throughput"],   type: "noun",      level: "C1", image: null, example: "Video streaming requires high bandwidth." },
    { id: 1036, word: "encryption",   meaning: "şifreleme",       synonyms: ["encoding","coding","cipher"],      type: "noun",      level: "C1", image: null, example: "Encryption protects sensitive data from hackers." },
    { id: 1037, word: "interface",    meaning: "arayüz",          synonyms: ["display","dashboard","connection"], type: "noun",   level: "B2", image: null, example: "The user interface is clean and easy to navigate." },
    { id: 1038, word: "backup",       meaning: "yedekleme",       synonyms: ["copy","reserve","duplicate"],      type: "noun",      level: "B1", image: null, example: "Always create a backup of your important files." },
    { id: 1039, word: "debug",        meaning: "hata ayıklamak",  synonyms: ["fix","troubleshoot","repair"],     type: "verb",      level: "C1", image: null, example: "The programmer spent hours trying to debug the code." },
    { id: 1040, word: "compatible",   meaning: "uyumlu",          synonyms: ["harmonious","matching","suitable"], type: "adjective", level: "B2", image: null, example: "This software is compatible with all operating systems." },
    { id: 1041, word: "hardware",     meaning: "donanım",         synonyms: ["equipment","machinery","device"],  type: "noun",      level: "B1", image: null, example: "The hardware needs to be upgraded to run the new software." },
    { id: 1042, word: "cybersecurity",meaning: "siber güvenlik",  synonyms: ["digital security","IT security","data protection"], type: "noun", level: "C1", image: null, example: "Cybersecurity is crucial for protecting online transactions." },
    { id: 1043, word: "automation",   meaning: "otomasyon",       synonyms: ["mechanization","robotics","computerization"], type: "noun", level: "B2", image: null, example: "Automation has transformed the manufacturing industry." },
    { id: 1044, word: "pixel",        meaning: "piksel",          synonyms: ["dot","point","unit"],              type: "noun",      level: "B1", image: null, example: "The image has a resolution of 1920 by 1080 pixels." },
    { id: 1045, word: "browse",       meaning: "göz atmak",       synonyms: ["surf","scan","explore"],           type: "verb",      level: "A2", image: null, example: "She likes to browse the internet before going to sleep." },
    { id: 1046, word: "crash",        meaning: "çökmek",          synonyms: ["fail","collapse","malfunction"],   type: "verb",      level: "B1", image: null, example: "The computer crashed in the middle of the presentation." },
    { id: 1047, word: "stream",       meaning: "yayın/akış",      synonyms: ["broadcast","flow","transmission"], type: "noun",      level: "B1", image: null, example: "Millions of people watched the live stream of the concert." },
    { id: 1048, word: "virtual",      meaning: "sanal",           synonyms: ["digital","simulated","online"],    type: "adjective", level: "B1", image: null, example: "The meeting was held in a virtual environment." },
    { id: 1049, word: "portable",     meaning: "taşınabilir",     synonyms: ["mobile","lightweight","compact"],  type: "adjective", level: "B1", image: null, example: "She bought a portable charger for her phone." },
    { id: 1050, word: "innovative",   meaning: "yenilikçi",       synonyms: ["creative","original","groundbreaking"], type: "adjective", level: "B2", image: null, example: "The company is known for its innovative products." },

    // ── Science & Research (Bilim & Araştırma) ──────────────
    { id: 1051, word: "hypothesis",   meaning: "hipotez",         synonyms: ["theory","assumption","conjecture"], type: "noun",  level: "B2", image: null },
    { id: 1052, word: "specimen",     meaning: "örnek/numune",    synonyms: ["sample","model","example"],        type: "noun",      level: "C1", image: null },
    { id: 1053, word: "microscope",   meaning: "mikroskop",       synonyms: ["magnifier","lens","instrument"],   type: "noun",      level: "B1", image: null },
    { id: 1054, word: "laboratory",   meaning: "laboratuvar",     synonyms: ["lab","research center","workshop"], type: "noun",   level: "B1", image: null },
    { id: 1055, word: "molecule",     meaning: "molekül",         synonyms: ["particle","compound","unit"],      type: "noun",      level: "B2", image: null },
    { id: 1056, word: "nucleus",      meaning: "çekirdek",        synonyms: ["core","center","heart"],           type: "noun",      level: "C1", image: null },
    { id: 1057, word: "radiation",    meaning: "radyasyon",       synonyms: ["emission","rays","energy"],        type: "noun",      level: "B2", image: null },
    { id: 1058, word: "vaccine",      meaning: "aşı",             synonyms: ["inoculation","immunization","shot"], type: "noun",  level: "B1", image: null },
    { id: 1059, word: "bacteria",     meaning: "bakteri",         synonyms: ["germ","microbe","organism"],       type: "noun",      level: "B2", image: null },
    { id: 1060, word: "symptom",      meaning: "belirti",         synonyms: ["sign","indication","signal"],      type: "noun",      level: "B1", image: null },
    { id: 1061, word: "diagnosis",    meaning: "teşhis",          synonyms: ["identification","analysis","assessment"], type: "noun", level: "B2", image: null },
    { id: 1062, word: "genome",       meaning: "genom",           synonyms: ["DNA sequence","genetic code","heredity"], type: "noun", level: "C1", image: null },
    { id: 1063, word: "ecosystem",    meaning: "ekosistem",       synonyms: ["habitat","biome","environment"],   type: "noun",      level: "B2", image: null },
    { id: 1064, word: "phenomenon",   meaning: "olgu/fenomen",    synonyms: ["occurrence","event","marvel"],     type: "noun",      level: "B2", image: null },
    { id: 1065, word: "asteroid",     meaning: "asteroit",        synonyms: ["meteor","space rock","celestial body"], type: "noun", level: "C1", image: null },

    // ── Health & Medicine (Sağlık & Tıp) ────────────────────
    { id: 1066, word: "surgery",      meaning: "ameliyat",        synonyms: ["operation","procedure","intervention"], type: "noun", level: "B1", image: null },
    { id: 1067, word: "prescription", meaning: "reçete",          synonyms: ["medication order","formula","script"], type: "noun", level: "B2", image: null },
    { id: 1068, word: "therapy",      meaning: "terapi",          synonyms: ["treatment","counseling","healing"], type: "noun",   level: "B2", image: null },
    { id: 1069, word: "chronic",      meaning: "kronik",          synonyms: ["persistent","long-term","ongoing"], type: "adjective", level: "B2", image: null },
    { id: 1070, word: "allergy",      meaning: "alerji",          synonyms: ["sensitivity","reaction","intolerance"], type: "noun", level: "B1", image: null },
    { id: 1071, word: "infection",    meaning: "enfeksiyon",      synonyms: ["contamination","disease","illness"], type: "noun",  level: "B1", image: null },
    { id: 1072, word: "immune",       meaning: "bağışık",         synonyms: ["resistant","protected","unaffected"], type: "adjective", level: "B2", image: null },
    { id: 1073, word: "nutrition",    meaning: "beslenme",        synonyms: ["nourishment","diet","sustenance"],  type: "noun",     level: "B1", image: null },
    { id: 1074, word: "obesity",      meaning: "obezite",         synonyms: ["overweight","fatness","corpulence"], type: "noun",  level: "C1", image: null },
    { id: 1075, word: "trauma",       meaning: "travma",          synonyms: ["injury","shock","wound"],          type: "noun",      level: "B2", image: null },
    { id: 1076, word: "rehabilitation",meaning: "rehabilitasyon", synonyms: ["recovery","restoration","therapy"], type: "noun",  level: "C1", image: null },
    { id: 1077, word: "paramedic",    meaning: "sağlık görevlisi",synonyms: ["medic","first responder","EMT"],   type: "noun",      level: "B2", image: null },
    { id: 1078, word: "contagious",   meaning: "bulaşıcı",        synonyms: ["infectious","communicable","spreading"], type: "adjective", level: "C1", image: null },
    { id: 1079, word: "dosage",       meaning: "dozaj",           synonyms: ["dose","amount","quantity"],        type: "noun",      level: "C1", image: null },
    { id: 1080, word: "wellness",     meaning: "sağlıklı yaşam",  synonyms: ["well-being","health","fitness"],   type: "noun",      level: "B1", image: null },

    // ── Travel & Tourism (Seyahat & Turizm) ─────────────────
    { id: 1081, word: "itinerary",    meaning: "güzergah",        synonyms: ["route","schedule","plan"],         type: "noun",      level: "B2", image: null },
    { id: 1082, word: "accommodation",meaning: "konaklama",       synonyms: ["lodging","housing","shelter"],     type: "noun",      level: "B1", image: null },
    { id: 1083, word: "excursion",    meaning: "gezi",            synonyms: ["trip","outing","expedition"],      type: "noun",      level: "B2", image: null },
    { id: 1084, word: "souvenir",     meaning: "hatıra",          synonyms: ["memento","keepsake","token"],      type: "noun",      level: "B1", image: null },
    { id: 1085, word: "scenery",      meaning: "manzara",         synonyms: ["landscape","view","panorama"],     type: "noun",      level: "B1", image: null },
    { id: 1086, word: "cruise",       meaning: "kruvaziyer",      synonyms: ["voyage","sail","expedition"],      type: "noun",      level: "B2", image: null },
    { id: 1087, word: "resort",       meaning: "tatil köyü",      synonyms: ["retreat","spa","hotel complex"],   type: "noun",      level: "B1", image: null },
    { id: 1088, word: "terminal",     meaning: "terminal",        synonyms: ["station","gate","hub"],            type: "noun",      level: "B1", image: null },
    { id: 1089, word: "currency",     meaning: "para birimi",     synonyms: ["money","denomination","coinage"],  type: "noun",      level: "B1", image: null },
    { id: 1090, word: "embassy",      meaning: "büyükelçilik",    synonyms: ["consulate","legation","mission"],  type: "noun",      level: "B2", image: null },
    { id: 1091, word: "landmark",     meaning: "simge yapı",      synonyms: ["monument","attraction","icon"],    type: "noun",      level: "B2", image: null },
    { id: 1092, word: "expedition",   meaning: "sefer/keşif gezisi",synonyms: ["journey","exploration","voyage"], type: "noun",   level: "B2", image: null },
    { id: 1093, word: "layover",      meaning: "aktarma molası",  synonyms: ["stopover","transit","connection"], type: "noun",      level: "C1", image: null },
    { id: 1094, word: "hitchhike",    meaning: "otostop yapmak",  synonyms: ["thumb a ride","bum a ride","flag down"], type: "verb", level: "B2", image: null },
    { id: 1095, word: "abroad",       meaning: "yurt dışı",       synonyms: ["overseas","foreign","internationally"], type: "adverb", level: "A2", image: null },

    // ── Food & Cuisine (Yiyecek & Mutfak) ───────────────────
    { id: 1096, word: "ingredient",   meaning: "malzeme",         synonyms: ["component","element","item"],      type: "noun",      level: "B1", image: null },
    { id: 1097, word: "recipe",       meaning: "tarif",           synonyms: ["formula","instructions","method"], type: "noun",      level: "A2", image: null },
    { id: 1098, word: "appetizer",    meaning: "başlangıç",       synonyms: ["starter","hors d'oeuvre","snack"], type: "noun",      level: "B2", image: null },
    { id: 1099, word: "cuisine",      meaning: "mutfak kültürü",  synonyms: ["cooking","gastronomy","fare"],     type: "noun",      level: "B2", image: null },
    { id: 1100, word: "grill",        meaning: "ızgara",          synonyms: ["barbecue","broil","roast"],        type: "verb",      level: "A2", image: null },
    { id: 1101, word: "stir",         meaning: "karıştırmak",     synonyms: ["mix","blend","whisk"],             type: "verb",      level: "A2", image: null },
    { id: 1102, word: "marinate",     meaning: "marine etmek",    synonyms: ["soak","season","baste"],           type: "verb",      level: "B2", image: null },
    { id: 1103, word: "organic",      meaning: "organik",         synonyms: ["natural","chemical-free","pure"],  type: "adjective", level: "B1", image: null },
    { id: 1104, word: "vegan",        meaning: "vegan",           synonyms: ["plant-based","vegetarian","herbivorous"], type: "adjective", level: "B1", image: null },
    { id: 1105, word: "portion",      meaning: "porsiyon",        synonyms: ["serving","piece","helping"],       type: "noun",      level: "A2", image: null },
    { id: 1106, word: "delicious",    meaning: "lezzetli",        synonyms: ["tasty","yummy","scrumptious"],     type: "adjective", level: "A1", image: null },
    { id: 1107, word: "bland",        meaning: "tatsız",          synonyms: ["tasteless","dull","insipid"],      type: "adjective", level: "B2", image: null },
    { id: 1108, word: "savory",       meaning: "tuzlu lezzetli",  synonyms: ["salty","flavorful","spicy"],       type: "adjective", level: "B2", image: null },
    { id: 1109, word: "beverage",     meaning: "içecek",          synonyms: ["drink","refreshment","liquid"],    type: "noun",      level: "B1", image: null },
    { id: 1110, word: "feast",        meaning: "ziyafet",         synonyms: ["banquet","celebration","spread"],  type: "noun",      level: "B2", image: null },

    // ── Nature & Environment (Doğa & Çevre) ─────────────────
    { id: 1111, word: "biodiversity", meaning: "biyoçeşitlilik",  synonyms: ["variety","ecological diversity","species richness"], type: "noun", level: "C1", image: null },
    { id: 1112, word: "deforestation",meaning: "ormansızlaştırma", synonyms: ["logging","clearing","destruction"], type: "noun",  level: "B2", image: null },
    { id: 1113, word: "sustainability",meaning: "sürdürülebilirlik",synonyms: ["durability","viability","conservation"], type: "noun", level: "B2", image: null },
    { id: 1114, word: "pollution",    meaning: "kirlilik",        synonyms: ["contamination","smog","waste"],    type: "noun",      level: "B1", image: null },
    { id: 1115, word: "recycle",      meaning: "geri dönüştürmek",synonyms: ["reuse","repurpose","recover"],     type: "verb",      level: "A2", image: null },
    { id: 1116, word: "endangered",   meaning: "nesli tehlikede",  synonyms: ["threatened","at risk","vulnerable"], type: "adjective", level: "B2", image: null },
    { id: 1117, word: "renewable",    meaning: "yenilenebilir",   synonyms: ["sustainable","replenishable","green"], type: "adjective", level: "B2", image: null },
    { id: 1118, word: "glacier",      meaning: "buzul",           synonyms: ["ice sheet","icecap","frozen river"], type: "noun",  level: "C1", image: null },
    { id: 1119, word: "eruption",     meaning: "patlama/püskürme",synonyms: ["explosion","outburst","blast"],    type: "noun",      level: "B2", image: null },
    { id: 1120, word: "habitat",      meaning: "yaşam alanı",     synonyms: ["environment","territory","dwelling"], type: "noun", level: "B2", image: null },
    { id: 1121, word: "extinction",   meaning: "yok olma",        synonyms: ["disappearance","annihilation","dying out"], type: "noun", level: "C1", image: null },
    { id: 1122, word: "harvest",      meaning: "hasat",           synonyms: ["crop","yield","reaping"],          type: "noun",      level: "B1", image: null },
    { id: 1123, word: "wilderness",   meaning: "vahşi doğa",      synonyms: ["wild","backcountry","untamed land"], type: "noun",  level: "B2", image: null },
    { id: 1124, word: "carbon footprint",meaning: "karbon ayak izi",synonyms: ["emissions","environmental impact","CO2 output"], type: "noun", level: "C1", image: null },
    { id: 1125, word: "ozone",        meaning: "ozon",            synonyms: ["O3","atmospheric layer","gas"],    type: "noun",      level: "C1", image: null },

    // ── Education & Learning (Eğitim & Öğrenme) ─────────────
    { id: 1126, word: "curriculum",   meaning: "müfredat",        synonyms: ["syllabus","program","coursework"], type: "noun",      level: "B2", image: null },
    { id: 1127, word: "scholarship",  meaning: "burs",            synonyms: ["grant","fellowship","funding"],    type: "noun",      level: "B1", image: null },
    { id: 1128, word: "diploma",      meaning: "diploma",         synonyms: ["certificate","degree","credential"], type: "noun",  level: "A2", image: null },
    { id: 1129, word: "thesis",       meaning: "tez",             synonyms: ["dissertation","paper","argument"], type: "noun",      level: "B2", image: null },
    { id: 1130, word: "semester",     meaning: "dönem",           synonyms: ["term","session","quarter"],        type: "noun",      level: "A2", image: null },
    { id: 1131, word: "tutor",        meaning: "özel öğretmen",   synonyms: ["mentor","instructor","coach"],     type: "noun",      level: "B1", image: null },
    { id: 1132, word: "enrollment",   meaning: "kayıt",           synonyms: ["registration","admission","entry"], type: "noun",  level: "B2", image: null },
    { id: 1133, word: "dormitory",    meaning: "yurt",            synonyms: ["dorm","hostel","residence hall"],  type: "noun",      level: "B1", image: null },
    { id: 1134, word: "lecture",      meaning: "ders/konferans",  synonyms: ["presentation","talk","seminar"],   type: "noun",      level: "B1", image: null },
    { id: 1135, word: "plagiarism",   meaning: "intihal",         synonyms: ["copying","theft","piracy"],        type: "noun",      level: "C1", image: null },
    { id: 1136, word: "literate",     meaning: "okuryazar",       synonyms: ["educated","learned","lettered"],   type: "adjective", level: "B2", image: null },
    { id: 1137, word: "comprehension",meaning: "kavrama",         synonyms: ["understanding","grasp","perception"], type: "noun", level: "B2", image: null },
    { id: 1138, word: "proficiency",  meaning: "yeterlilik",      synonyms: ["competence","skill","mastery"],    type: "noun",      level: "C1", image: null },

    // ── Sports & Fitness (Spor & Fitness) ────────────────────
    { id: 1139, word: "tournament",   meaning: "turnuva",         synonyms: ["competition","championship","contest"], type: "noun", level: "B1", image: null },
    { id: 1140, word: "referee",      meaning: "hakem",           synonyms: ["umpire","judge","official"],       type: "noun",      level: "B1", image: null },
    { id: 1141, word: "spectator",    meaning: "seyirci",         synonyms: ["viewer","onlooker","audience"],    type: "noun",      level: "B2", image: null },
    { id: 1142, word: "opponent",     meaning: "rakip",           synonyms: ["rival","competitor","adversary"],  type: "noun",      level: "B1", image: null },
    { id: 1143, word: "marathon",     meaning: "maraton",         synonyms: ["long-distance race","endurance run","road race"], type: "noun", level: "B1", image: null },
    { id: 1144, word: "league",       meaning: "lig",             synonyms: ["division","conference","association"], type: "noun", level: "B1", image: null },
    { id: 1145, word: "gymnasium",    meaning: "spor salonu",     synonyms: ["gym","fitness center","arena"],    type: "noun",      level: "A2", image: null },
    { id: 1146, word: "trophy",       meaning: "kupa",            synonyms: ["cup","award","prize"],             type: "noun",      level: "B1", image: null },
    { id: 1147, word: "sprint",       meaning: "sürat koşusu",    synonyms: ["dash","run","burst"],              type: "noun",      level: "B2", image: null },
    { id: 1148, word: "endurance",    meaning: "dayanıklılık",    synonyms: ["stamina","persistence","resilience"], type: "noun", level: "B2", image: null },
    { id: 1149, word: "agile",        meaning: "çevik",           synonyms: ["nimble","quick","flexible"],       type: "adjective", level: "C1", image: null },
    { id: 1150, word: "athletic",     meaning: "atletik",         synonyms: ["sporty","fit","muscular"],         type: "adjective", level: "B1", image: null },

    // ── Arts & Culture (Sanat & Kültür) ──────────────────────
    { id: 1151, word: "masterpiece",  meaning: "şaheser",         synonyms: ["magnum opus","classic","gem"],     type: "noun",      level: "B2", image: null },
    { id: 1152, word: "sculpture",    meaning: "heykel",          synonyms: ["statue","carving","figure"],       type: "noun",      level: "B1", image: null },
    { id: 1153, word: "gallery",      meaning: "galeri",          synonyms: ["museum","showroom","exhibition hall"], type: "noun", level: "A2", image: null },
    { id: 1154, word: "portrait",     meaning: "portre",          synonyms: ["painting","likeness","image"],     type: "noun",      level: "B1", image: null },
    { id: 1155, word: "abstract",     meaning: "soyut",           synonyms: ["theoretical","conceptual","nonrepresentational"], type: "adjective", level: "B2", image: null },
    { id: 1156, word: "aesthetic",    meaning: "estetik",         synonyms: ["artistic","visual","pleasing"],    type: "adjective", level: "C1", image: null },
    { id: 1157, word: "rehearsal",    meaning: "prova",           synonyms: ["practice","run-through","drill"],  type: "noun",      level: "B2", image: null },
    { id: 1158, word: "choreography", meaning: "koreografi",      synonyms: ["dance composition","staging","movement design"], type: "noun", level: "C1", image: null },
    { id: 1159, word: "manuscript",   meaning: "el yazması",      synonyms: ["document","script","text"],        type: "noun",      level: "C1", image: null },
    { id: 1160, word: "pottery",      meaning: "çömlek",          synonyms: ["ceramics","earthenware","clay work"], type: "noun", level: "B2", image: null },
    { id: 1161, word: "mural",        meaning: "duvar resmi",     synonyms: ["wall painting","fresco","artwork"], type: "noun",  level: "C1", image: null },
    { id: 1162, word: "lyric",        meaning: "şarkı sözü",      synonyms: ["words","verse","text"],            type: "noun",      level: "B1", image: null },
    { id: 1163, word: "compose",      meaning: "bestelemek",      synonyms: ["write","create","arrange"],        type: "verb",      level: "B2", image: null },

    // ── Law & Justice (Hukuk & Adalet) ───────────────────────
    { id: 1164, word: "verdict",      meaning: "karar",           synonyms: ["judgment","ruling","decision"],    type: "noun",      level: "C1", image: null },
    { id: 1165, word: "defendant",    meaning: "sanık",           synonyms: ["accused","suspect","respondent"],  type: "noun",      level: "C1", image: null },
    { id: 1166, word: "plaintiff",    meaning: "davacı",          synonyms: ["complainant","accuser","claimant"], type: "noun",  level: "C1", image: null },
    { id: 1167, word: "attorney",     meaning: "avukat",          synonyms: ["lawyer","counsel","solicitor"],    type: "noun",      level: "B2", image: null },
    { id: 1168, word: "legislation",  meaning: "mevzuat",         synonyms: ["law","statute","regulation"],      type: "noun",      level: "C1", image: null },
    { id: 1169, word: "prosecution",  meaning: "savcılık/kovuşturma",synonyms: ["charge","indictment","trial"],  type: "noun",      level: "C1", image: null },
    { id: 1170, word: "testimony",    meaning: "tanıklık",        synonyms: ["statement","evidence","declaration"], type: "noun", level: "C1", image: null },
    { id: 1171, word: "acquit",       meaning: "beraat ettirmek", synonyms: ["clear","exonerate","discharge"],   type: "verb",      level: "C1", image: null },
    { id: 1172, word: "convict",      meaning: "mahkum etmek",    synonyms: ["condemn","sentence","find guilty"], type: "verb",  level: "C1", image: null },
    { id: 1173, word: "allegation",   meaning: "iddia",           synonyms: ["accusation","claim","charge"],     type: "noun",      level: "C1", image: null },
    { id: 1174, word: "lawsuit",      meaning: "dava",            synonyms: ["litigation","case","suit"],        type: "noun",      level: "B2", image: null },
    { id: 1175, word: "penalty",      meaning: "ceza",            synonyms: ["punishment","fine","sanction"],    type: "noun",      level: "B2", image: null },
    { id: 1176, word: "juvenile",     meaning: "genç/küçük",      synonyms: ["young","minor","adolescent"],      type: "adjective", level: "C1", image: null },
    { id: 1177, word: "legitimate",   meaning: "meşru",           synonyms: ["lawful","legal","valid"],          type: "adjective", level: "C1", image: null },

    // ── Politics & Governance (Siyaset & Yönetim) ───────────
    { id: 1178, word: "democracy",    meaning: "demokrasi",       synonyms: ["republic","self-government","freedom"], type: "noun", level: "B2", image: null },
    { id: 1179, word: "parliament",   meaning: "parlamento",      synonyms: ["congress","assembly","legislature"], type: "noun", level: "B2", image: null },
    { id: 1180, word: "constitution", meaning: "anayasa",         synonyms: ["charter","fundamental law","statute"], type: "noun", level: "C1", image: null },
    { id: 1181, word: "campaign",     meaning: "kampanya",        synonyms: ["movement","drive","initiative"],   type: "noun",      level: "B1", image: null },
    { id: 1182, word: "reform",       meaning: "reform",          synonyms: ["change","improvement","amendment"], type: "noun",   level: "B2", image: null },
    { id: 1183, word: "diplomat",     meaning: "diplomat",        synonyms: ["ambassador","envoy","representative"], type: "noun", level: "B2", image: null },
    { id: 1184, word: "sovereignty",  meaning: "egemenlik",       synonyms: ["independence","autonomy","authority"], type: "noun", level: "C1", image: null },
    { id: 1185, word: "ideology",     meaning: "ideoloji",        synonyms: ["belief system","doctrine","philosophy"], type: "noun", level: "C1", image: null },
    { id: 1186, word: "bureaucracy",  meaning: "bürokrasi",       synonyms: ["red tape","administration","officialdom"], type: "noun", level: "C1", image: null },
    { id: 1187, word: "sanction",     meaning: "yaptırım",        synonyms: ["penalty","restriction","embargo"],  type: "noun",     level: "C1", image: null },
    { id: 1188, word: "treaty",       meaning: "antlaşma",        synonyms: ["agreement","pact","accord"],       type: "noun",      level: "B2", image: null },
    { id: 1189, word: "ballot",       meaning: "oy pusulası",     synonyms: ["vote","poll","election"],          type: "noun",      level: "C1", image: null },
    { id: 1190, word: "coalition",    meaning: "koalisyon",       synonyms: ["alliance","union","partnership"],  type: "noun",      level: "C1", image: null },

    // ── Common Verbs (Yaygın Fiiller) ────────────────────────
    { id: 1191, word: "abandon",      meaning: "terk etmek",      synonyms: ["leave","desert","forsake"],        type: "verb",      level: "B2", image: null },
    { id: 1192, word: "acquire",      meaning: "edinmek",         synonyms: ["obtain","gain","get"],             type: "verb",      level: "B2", image: null },
    { id: 1193, word: "adapt",        meaning: "uyum sağlamak",   synonyms: ["adjust","modify","acclimate"],     type: "verb",      level: "B1", image: null },
    { id: 1194, word: "allocate",     meaning: "tahsis etmek",    synonyms: ["assign","distribute","designate"], type: "verb",      level: "C1", image: null },
    { id: 1195, word: "anticipate",   meaning: "öngörmek",        synonyms: ["expect","predict","foresee"],      type: "verb",      level: "B2", image: null },
    { id: 1196, word: "assess",       meaning: "değerlendirmek",  synonyms: ["evaluate","judge","appraise"],     type: "verb",      level: "B2", image: null },
    { id: 1197, word: "collaborate",  meaning: "işbirliği yapmak",synonyms: ["cooperate","work together","partner"], type: "verb", level: "B2", image: null },
    { id: 1198, word: "compensate",   meaning: "tazmin etmek",    synonyms: ["reimburse","repay","reward"],      type: "verb",      level: "C1", image: null },
    { id: 1199, word: "comply",       meaning: "uymak",           synonyms: ["obey","follow","adhere"],          type: "verb",      level: "C1", image: null },
    { id: 1200, word: "comprise",     meaning: "kapsamak",        synonyms: ["consist of","include","contain"],  type: "verb",      level: "C1", image: null },
    { id: 1201, word: "confront",     meaning: "yüzleşmek",       synonyms: ["face","challenge","encounter"],    type: "verb",      level: "B2", image: null },
    { id: 1202, word: "contemplate",  meaning: "düşünmek",        synonyms: ["ponder","reflect","meditate"],     type: "verb",      level: "C1", image: null },
    { id: 1203, word: "contradict",   meaning: "çelişmek",        synonyms: ["oppose","deny","dispute"],         type: "verb",      level: "B2", image: null },
    { id: 1204, word: "convert",      meaning: "dönüştürmek",     synonyms: ["transform","change","alter"],      type: "verb",      level: "B2", image: null },
    { id: 1205, word: "dedicate",     meaning: "adamak",          synonyms: ["devote","commit","pledge"],        type: "verb",      level: "B2", image: null },
    { id: 1206, word: "demolish",     meaning: "yıkmak",          synonyms: ["destroy","tear down","raze"],      type: "verb",      level: "C1", image: null },
    { id: 1207, word: "depict",       meaning: "tasvir etmek",    synonyms: ["portray","illustrate","represent"], type: "verb",  level: "C1", image: null },
    { id: 1208, word: "diminish",     meaning: "azaltmak",        synonyms: ["decrease","reduce","lessen"],      type: "verb",      level: "C1", image: null },
    { id: 1209, word: "disclose",     meaning: "ifşa etmek",      synonyms: ["reveal","expose","divulge"],       type: "verb",      level: "C1", image: null },
    { id: 1210, word: "dominate",     meaning: "hakim olmak",     synonyms: ["control","rule","govern"],         type: "verb",      level: "B2", image: null },
    { id: 1211, word: "elaborate",    meaning: "detaylandırmak",  synonyms: ["expand","explain","develop"],      type: "verb",      level: "B2", image: null },
    { id: 1212, word: "eliminate",    meaning: "ortadan kaldırmak",synonyms: ["remove","eradicate","abolish"],   type: "verb",      level: "B2", image: null },
    { id: 1213, word: "emphasize",    meaning: "vurgulamak",      synonyms: ["stress","highlight","underline"],  type: "verb",      level: "B2", image: null },
    { id: 1214, word: "enable",       meaning: "olanak sağlamak", synonyms: ["allow","empower","facilitate"],    type: "verb",      level: "B2", image: null },
    { id: 1215, word: "endure",       meaning: "dayanmak",        synonyms: ["bear","withstand","tolerate"],     type: "verb",      level: "B2", image: null },
    { id: 1216, word: "enforce",      meaning: "uygulatmak",      synonyms: ["implement","impose","execute"],    type: "verb",      level: "C1", image: null },
    { id: 1217, word: "enhance",      meaning: "geliştirmek",     synonyms: ["improve","boost","strengthen"],    type: "verb",      level: "B2", image: null },
    { id: 1218, word: "ensure",       meaning: "sağlamak",        synonyms: ["guarantee","confirm","secure"],    type: "verb",      level: "B1", image: null },
    { id: 1219, word: "establish",    meaning: "kurmak",          synonyms: ["found","create","set up"],         type: "verb",      level: "B1", image: null },
    { id: 1220, word: "exhibit",      meaning: "sergilemek",      synonyms: ["display","show","demonstrate"],    type: "verb",      level: "B2", image: null },

    // ── Common Adjectives (Yaygın Sıfatlar) ──────────────────
    { id: 1221, word: "abundant",     meaning: "bol",             synonyms: ["plentiful","copious","ample"],     type: "adjective", level: "C1", image: null },
    { id: 1222, word: "adequate",     meaning: "yeterli",         synonyms: ["sufficient","enough","satisfactory"], type: "adjective", level: "B2", image: null },
    { id: 1223, word: "ambiguous",    meaning: "belirsiz",        synonyms: ["unclear","vague","equivocal"],     type: "adjective", level: "C1", image: null },
    { id: 1224, word: "authentic",    meaning: "otantik",         synonyms: ["genuine","real","original"],       type: "adjective", level: "B2", image: null },
    { id: 1226, word: "coherent",     meaning: "tutarlı",         synonyms: ["logical","consistent","clear"],    type: "adjective", level: "C1", image: null },
    { id: 1227, word: "comprehensive",meaning: "kapsamlı",        synonyms: ["thorough","complete","extensive"], type: "adjective", level: "B2", image: null },
    { id: 1228, word: "controversial",meaning: "tartışmalı",      synonyms: ["debatable","disputed","contentious"], type: "adjective", level: "B2", image: null },
    { id: 1229, word: "crucial",      meaning: "çok önemli",      synonyms: ["critical","vital","essential"],    type: "adjective", level: "B2", image: null },
    { id: 1230, word: "deliberate",   meaning: "kasıtlı",         synonyms: ["intentional","planned","purposeful"], type: "adjective", level: "C1", image: null },
    { id: 1231, word: "diverse",      meaning: "çeşitli",         synonyms: ["varied","assorted","different"],   type: "adjective", level: "B2", image: null },
    { id: 1232, word: "dominant",     meaning: "baskın",          synonyms: ["prevailing","ruling","leading"],   type: "adjective", level: "B2", image: null },
    { id: 1233, word: "eligible",     meaning: "uygun/ehil",      synonyms: ["qualified","entitled","worthy"],   type: "adjective", level: "C1", image: null },
    { id: 1234, word: "enormous",     meaning: "devasa",          synonyms: ["huge","massive","immense"],        type: "adjective", level: "B1", image: null },
    { id: 1235, word: "explicit",     meaning: "açık/belirgin",   synonyms: ["clear","direct","specific"],       type: "adjective", level: "C1", image: null },
    { id: 1236, word: "fragile",      meaning: "kırılgan",        synonyms: ["delicate","brittle","frail"],      type: "adjective", level: "B2", image: null },
    { id: 1237, word: "genuine",      meaning: "gerçek/samimi",   synonyms: ["authentic","real","sincere"],      type: "adjective", level: "B2", image: null },
    { id: 1238, word: "hostile",      meaning: "düşmanca",        synonyms: ["aggressive","unfriendly","antagonistic"], type: "adjective", level: "C1", image: null },
    { id: 1239, word: "immense",      meaning: "muazzam",         synonyms: ["vast","enormous","tremendous"],    type: "adjective", level: "B2", image: null },
    { id: 1240, word: "inevitable",   meaning: "kaçınılmaz",      synonyms: ["unavoidable","certain","inescapable"], type: "adjective", level: "C1", image: null },

    // ── Adverbs (Zarflar) ───────────────────────────────────
    { id: 1241, word: "approximately",meaning: "yaklaşık",        synonyms: ["roughly","about","nearly"],        type: "adverb",    level: "B1", image: null },
    { id: 1242, word: "consequently", meaning: "sonuç olarak",    synonyms: ["therefore","thus","hence"],        type: "adverb",    level: "B2", image: null },
    { id: 1243, word: "deliberately", meaning: "kasıtlı olarak",  synonyms: ["intentionally","purposely","knowingly"], type: "adverb", level: "B2", image: null },
    { id: 1244, word: "essentially",  meaning: "aslında",         synonyms: ["basically","fundamentally","primarily"], type: "adverb", level: "B2", image: null },
    { id: 1245, word: "frequently",   meaning: "sık sık",         synonyms: ["often","regularly","repeatedly"],  type: "adverb",    level: "B1", image: null },
    { id: 1246, word: "inevitably",   meaning: "kaçınılmaz olarak",synonyms: ["unavoidably","certainly","surely"], type: "adverb", level: "C1", image: null },
    { id: 1247, word: "merely",       meaning: "yalnızca",        synonyms: ["simply","only","just"],            type: "adverb",    level: "B2", image: null },
    { id: 1248, word: "precisely",    meaning: "tam olarak",      synonyms: ["exactly","accurately","specifically"], type: "adverb", level: "B2", image: null },
    { id: 1249, word: "presumably",   meaning: "muhtemelen",      synonyms: ["probably","supposedly","likely"],   type: "adverb",    level: "C1", image: null },
    { id: 1250, word: "simultaneously",meaning: "aynı anda",      synonyms: ["concurrently","at once","together"], type: "adverb", level: "B2", image: null },
    { id: 1251, word: "thoroughly",   meaning: "iyice",           synonyms: ["completely","entirely","fully"],   type: "adverb",    level: "B2", image: null },
    { id: 1252, word: "virtually",    meaning: "neredeyse",       synonyms: ["practically","almost","nearly"],   type: "adverb",    level: "B2", image: null },
    { id: 1253, word: "significantly",meaning: "önemli ölçüde",   synonyms: ["considerably","notably","substantially"], type: "adverb", level: "B2", image: null },
    { id: 1254, word: "occasionally", meaning: "ara sıra",        synonyms: ["sometimes","now and then","periodically"], type: "adverb", level: "B1", image: null },
    { id: 1255, word: "reluctantly",  meaning: "isteksizce",      synonyms: ["unwillingly","hesitantly","grudgingly"], type: "adverb", level: "C1", image: null },

    // ── A1 Level Basics (Temel Kelimeler) ────────────────────
    { id: 1256, word: "address",      meaning: "adres",           synonyms: ["location","residence","place"],    type: "noun",      level: "A1", image: null },
    { id: 1257, word: "age",          meaning: "yaş",             synonyms: ["years","era","period"],            type: "noun",      level: "A1", image: null },
    { id: 1258, word: "air",          meaning: "hava",            synonyms: ["atmosphere","breeze","oxygen"],    type: "noun",      level: "A1", image: null },
    { id: 1260, word: "alone",        meaning: "yalnız",          synonyms: ["by oneself","solo","solitary"],    type: "adjective", level: "A1", image: null },
    { id: 1262, word: "arrive",       meaning: "varmak",          synonyms: ["reach","get to","come"],           type: "verb",      level: "A1", image: null },
    { id: 1264, word: "bath",         meaning: "banyo",           synonyms: ["tub","wash","soak"],               type: "noun",      level: "A1", image: null },
    { id: 1265, word: "beach",        meaning: "plaj",            synonyms: ["shore","seaside","coast"],         type: "noun",      level: "A1", image: null },
    { id: 1268, word: "bowl",         meaning: "kase",            synonyms: ["dish","basin","container"],        type: "noun",      level: "A1", image: null },
    { id: 1269, word: "busy",         meaning: "meşgul",          synonyms: ["occupied","engaged","active"],     type: "adjective", level: "A1", image: null },
    { id: 1270, word: "calendar",     meaning: "takvim",          synonyms: ["schedule","planner","diary"],      type: "noun",      level: "A1", image: null },
    { id: 1271, word: "candy",        meaning: "şekerleme",       synonyms: ["sweet","confection","treat"],      type: "noun",      level: "A1", image: null },
    { id: 1272, word: "close",        meaning: "yakın",           synonyms: ["near","nearby","adjacent"],        type: "adjective", level: "A1", image: null },
    { id: 1273, word: "clothes",      meaning: "kıyafetler",      synonyms: ["garments","apparel","outfits"],    type: "noun",      level: "A1", image: null },
    { id: 1276, word: "dance",        meaning: "dans etmek",      synonyms: ["move","groove","sway"],            type: "verb",      level: "A1", image: null },
    { id: 1277, word: "date",         meaning: "tarih",           synonyms: ["day","time","appointment"],        type: "noun",      level: "A1", image: null },
    { id: 1278, word: "desk",         meaning: "masa/sıra",       synonyms: ["table","workstation","bureau"],    type: "noun",      level: "A1", image: null },
    { id: 1279, word: "draw",         meaning: "çizmek",          synonyms: ["sketch","illustrate","design"],    type: "verb",      level: "A1", image: null },
    { id: 1280, word: "enjoy",        meaning: "keyif almak",     synonyms: ["like","love","appreciate"],        type: "verb",      level: "A1", image: null },
    { id: 1281, word: "evening",      meaning: "akşam",           synonyms: ["night","dusk","twilight"],         type: "noun",      level: "A1", image: null },
    { id: 1282, word: "exciting",     meaning: "heyecan verici",  synonyms: ["thrilling","stimulating","exhilarating"], type: "adjective", level: "A1", image: null },
    { id: 1283, word: "famous",       meaning: "ünlü",            synonyms: ["well-known","renowned","celebrated"], type: "adjective", level: "A1", image: null },
    { id: 1284, word: "favorite",     meaning: "favori",          synonyms: ["preferred","beloved","top"],       type: "adjective", level: "A1", image: null },
    { id: 1288, word: "hobby",        meaning: "hobi",            synonyms: ["pastime","interest","leisure"],    type: "noun",      level: "A1", image: null },
    { id: 1289, word: "hungry",       meaning: "aç",              synonyms: ["starving","famished","peckish"],   type: "adjective", level: "A1", image: null },
    { id: 1291, word: "jacket",       meaning: "ceket",           synonyms: ["coat","blazer","windbreaker"],     type: "noun",      level: "A1", image: null },
    { id: 1292, word: "kind",         meaning: "tür/çeşit",       synonyms: ["type","sort","variety"],           type: "noun",      level: "A1", image: null },
    { id: 1293, word: "kiss",         meaning: "öpmek",           synonyms: ["peck","smooch","embrace"],         type: "verb",      level: "A1", image: null },
    { id: 1294, word: "late",         meaning: "geç",             synonyms: ["delayed","overdue","behind"],      type: "adjective", level: "A1", image: null },
    { id: 1296, word: "lovely",       meaning: "sevimli",         synonyms: ["charming","delightful","adorable"], type: "adjective", level: "A1", image: null },
    { id: 1297, word: "marry",        meaning: "evlenmek",        synonyms: ["wed","unite","tie the knot"],      type: "verb",      level: "A1", image: null },
    { id: 1299, word: "noisy",        meaning: "gürültülü",       synonyms: ["loud","rowdy","boisterous"],       type: "adjective", level: "A1", image: null },
    { id: 1300, word: "often",        meaning: "sık sık",         synonyms: ["frequently","regularly","usually"], type: "adverb", level: "A1", image: null },

    // ── A2 Level Words ──────────────────────────────────────
    { id: 1301, word: "adventure",    meaning: "macera",          synonyms: ["expedition","quest","escapade"],   type: "noun",      level: "A2", image: null },
    { id: 1303, word: "attend",       meaning: "katılmak",        synonyms: ["participate","join","be present"], type: "verb",      level: "A2", image: null },
    { id: 1304, word: "belong",       meaning: "ait olmak",       synonyms: ["own","possess","be part of"],      type: "verb",      level: "A2", image: null },
    { id: 1305, word: "campfire",     meaning: "kamp ateşi",      synonyms: ["bonfire","fire pit","blaze"],      type: "noun",      level: "A2", image: null },
    { id: 1306, word: "cinema",       meaning: "sinema",          synonyms: ["movie theater","film house","multiplex"], type: "noun", level: "A2", image: null },
    { id: 1307, word: "collect",      meaning: "toplamak",        synonyms: ["gather","accumulate","assemble"],  type: "verb",      level: "A2", image: null },
    { id: 1308, word: "comfortable",  meaning: "rahat",           synonyms: ["cozy","snug","pleasant"],          type: "adjective", level: "A2", image: null },
    { id: 1309, word: "compete",      meaning: "yarışmak",        synonyms: ["contest","rival","vie"],           type: "verb",      level: "A2", image: null },
    { id: 1311, word: "complicated",  meaning: "karmaşık",        synonyms: ["complex","intricate","involved"],  type: "adjective", level: "A2", image: null },
    { id: 1313, word: "convenient",   meaning: "uygun/pratik",    synonyms: ["handy","accessible","suitable"],   type: "adjective", level: "A2", image: null },
    { id: 1314, word: "creature",     meaning: "yaratık",         synonyms: ["being","animal","organism"],       type: "noun",      level: "A2", image: null },
    { id: 1315, word: "crowd",        meaning: "kalabalık",       synonyms: ["mob","throng","mass"],             type: "noun",      level: "A2", image: null },
    { id: 1316, word: "curious",      meaning: "meraklı",         synonyms: ["inquisitive","interested","nosy"], type: "adjective", level: "A2", image: null },
    { id: 1317, word: "decorate",     meaning: "süslemek",        synonyms: ["adorn","embellish","ornament"],    type: "verb",      level: "A2", image: null },
    { id: 1318, word: "deliver",      meaning: "teslim etmek",    synonyms: ["bring","hand over","transport"],   type: "verb",      level: "A2", image: null },
    { id: 1320, word: "diary",        meaning: "günlük",          synonyms: ["journal","notebook","log"],        type: "noun",      level: "A2", image: null },
    { id: 1321, word: "disappointed", meaning: "hayal kırıklığına uğramış", synonyms: ["let down","disheartened","upset"], type: "adjective", level: "A2", image: null },
    { id: 1322, word: "discover",     meaning: "keşfetmek",       synonyms: ["find","uncover","reveal"],         type: "verb",      level: "A2", image: null },
    { id: 1324, word: "experience",   meaning: "tecrübe etmek",   synonyms: ["undergo","encounter","face"],     type: "verb",      level: "A2", image: null },
    { id: 1325, word: "explore",      meaning: "keşfetmek",       synonyms: ["investigate","discover","search"], type: "verb",      level: "A2", image: null },
    { id: 1326, word: "factory",      meaning: "fabrika",         synonyms: ["plant","workshop","mill"],         type: "noun",      level: "A2", image: null },
    { id: 1327, word: "furniture",    meaning: "mobilya",         synonyms: ["furnishings","fittings","equipment"], type: "noun", level: "A2", image: null },
    { id: 1328, word: "gentle",       meaning: "nazik/yumuşak",   synonyms: ["soft","tender","mild"],            type: "adjective", level: "A2", image: null },
    { id: 1330, word: "helmet",       meaning: "kask",            synonyms: ["headgear","protection","hard hat"], type: "noun",  level: "A2", image: null },
    { id: 1331, word: "hero",         meaning: "kahraman",        synonyms: ["champion","savior","idol"],        type: "noun",      level: "A2", image: null },
    { id: 1333, word: "horror",       meaning: "korku",           synonyms: ["terror","dread","fright"],         type: "noun",      level: "A2", image: null },
    { id: 1335, word: "industry",     meaning: "sanayi",          synonyms: ["manufacturing","production","sector"], type: "noun", level: "A2", image: null },
    { id: 1336, word: "insect",       meaning: "böcek",           synonyms: ["bug","pest","creepy-crawly"],      type: "noun",      level: "A2", image: null },
    { id: 1337, word: "jewelry",      meaning: "mücevher",        synonyms: ["gems","ornaments","accessories"],  type: "noun",      level: "A2", image: null },
    { id: 1339, word: "keen",         meaning: "istekli/hevesli", synonyms: ["eager","enthusiastic","willing"],  type: "adjective", level: "A2", image: null },
    { id: 1340, word: "kingdom",      meaning: "krallık",         synonyms: ["realm","empire","domain"],         type: "noun",      level: "A2", image: null },
    { id: 1341, word: "knock",        meaning: "vurmak/çalmak",   synonyms: ["tap","rap","bang"],                type: "verb",      level: "A2", image: null },
    { id: 1342, word: "landscape",    meaning: "manzara/peyzaj",  synonyms: ["scenery","terrain","vista"],       type: "noun",      level: "A2", image: null },
    { id: 1343, word: "luggage",      meaning: "bagaj",           synonyms: ["baggage","suitcases","bags"],      type: "noun",      level: "A2", image: null },
    { id: 1344, word: "magic",        meaning: "sihir",           synonyms: ["sorcery","wizardry","enchantment"], type: "noun",  level: "A2", image: null },
    { id: 1345, word: "massage",      meaning: "masaj",           synonyms: ["rub","kneading","therapy"],        type: "noun",      level: "A2", image: null },

    // ── B1 Level Words ──────────────────────────────────────
    { id: 1347, word: "absence",      meaning: "yokluk",          synonyms: ["lack","void","nonattendance"],     type: "noun",      level: "B1", image: null },
    { id: 1348, word: "abuse",        meaning: "istismar",        synonyms: ["misuse","mistreatment","exploitation"], type: "noun", level: "B1", image: null },
    { id: 1349, word: "adolescent",   meaning: "ergen",           synonyms: ["teenager","youth","juvenile"],     type: "noun",      level: "B1", image: null },
    { id: 1350, word: "afford",       meaning: "karşılayabilmek", synonyms: ["manage","bear","sustain"],         type: "verb",      level: "B1", image: null },
    { id: 1351, word: "agency",       meaning: "ajans/kurum",     synonyms: ["organization","bureau","office"],  type: "noun",      level: "B1", image: null },
    { id: 1352, word: "aggressive",   meaning: "saldırgan",       synonyms: ["hostile","combative","forceful"],  type: "adjective", level: "B1", image: null },
    { id: 1353, word: "anniversary",  meaning: "yıl dönümü",      synonyms: ["celebration","commemoration","milestone"], type: "noun", level: "B1", image: null },
    { id: 1354, word: "apparent",     meaning: "bariz/açık",      synonyms: ["obvious","evident","clear"],       type: "adjective", level: "B1", image: null },
    { id: 1355, word: "appetite",     meaning: "iştah",           synonyms: ["hunger","craving","desire"],       type: "noun",      level: "B1", image: null },
    { id: 1356, word: "architecture", meaning: "mimari",          synonyms: ["design","construction","building art"], type: "noun", level: "B1", image: null },
    { id: 1357, word: "authority",    meaning: "otorite",         synonyms: ["power","control","jurisdiction"],  type: "noun",      level: "B1", image: null },
    { id: 1358, word: "automatic",    meaning: "otomatik",        synonyms: ["self-operating","mechanical","robotic"], type: "adjective", level: "B1", image: null },
    { id: 1359, word: "aware",        meaning: "farkında",        synonyms: ["conscious","informed","mindful"],  type: "adjective", level: "B1", image: null },
    { id: 1360, word: "behavior",     meaning: "davranış",        synonyms: ["conduct","manner","actions"],      type: "noun",      level: "B1", image: null },
    { id: 1361, word: "beloved",      meaning: "sevgili/sevilen", synonyms: ["dear","cherished","adored"],       type: "adjective", level: "B1", image: null },
    { id: 1362, word: "boundary",     meaning: "sınır",           synonyms: ["border","limit","edge"],           type: "noun",      level: "B1", image: null },
    { id: 1363, word: "capable",      meaning: "yetenekli",       synonyms: ["able","competent","skilled"],      type: "adjective", level: "B1", image: null },
    { id: 1365, word: "collapse",     meaning: "çökmek",          synonyms: ["fall","crumble","break down"],     type: "verb",      level: "B1", image: null },
    { id: 1366, word: "conflict",     meaning: "çatışma",         synonyms: ["dispute","clash","disagreement"],  type: "noun",      level: "B1", image: null },
    { id: 1367, word: "conscious",    meaning: "bilinçli",        synonyms: ["aware","alert","mindful"],         type: "adjective", level: "B1", image: null },
    { id: 1368, word: "constant",     meaning: "sürekli",         synonyms: ["continuous","steady","unchanging"], type: "adjective", level: "B1", image: null },
    { id: 1369, word: "construct",    meaning: "inşa etmek",      synonyms: ["build","erect","assemble"],         type: "verb",      level: "B1", image: null },
    { id: 1370, word: "consumer",     meaning: "tüketici",        synonyms: ["buyer","customer","purchaser"],    type: "noun",      level: "B1", image: null },
    { id: 1371, word: "contrary",     meaning: "aksine/zıt",      synonyms: ["opposite","reverse","conflicting"], type: "adjective", level: "B1", image: null },
    { id: 1372, word: "cope",         meaning: "başa çıkmak",     synonyms: ["handle","manage","deal with"],     type: "verb",      level: "B1", image: null },
    { id: 1373, word: "crisis",       meaning: "kriz",            synonyms: ["emergency","disaster","catastrophe"], type: "noun", level: "B1", image: null },
    { id: 1374, word: "decade",       meaning: "on yıl",          synonyms: ["ten years","period","era"],        type: "noun",      level: "B1", image: null },
    { id: 1375, word: "declare",      meaning: "ilan etmek",      synonyms: ["announce","proclaim","state"],     type: "verb",      level: "B1", image: null },
    { id: 1376, word: "defeat",       meaning: "yenmek",          synonyms: ["beat","conquer","overcome"],       type: "verb",      level: "B1", image: null },
    { id: 1377, word: "demonstrate",  meaning: "göstermek",       synonyms: ["show","prove","illustrate"],       type: "verb",      level: "B1", image: null },
    { id: 1378, word: "desperate",    meaning: "çaresiz",         synonyms: ["hopeless","frantic","dire"],       type: "adjective", level: "B1", image: null },
    { id: 1379, word: "determination",meaning: "kararlılık",      synonyms: ["resolve","willpower","persistence"], type: "noun", level: "B1", image: null },
    { id: 1380, word: "device",       meaning: "cihaz",           synonyms: ["gadget","tool","instrument"],      type: "noun",      level: "B1", image: null },
    { id: 1381, word: "disaster",     meaning: "felaket",         synonyms: ["catastrophe","calamity","tragedy"], type: "noun",  level: "B1", image: null },
    { id: 1382, word: "domestic",     meaning: "yerli/ev içi",    synonyms: ["home","internal","national"],      type: "adjective", level: "B1", image: null },
    { id: 1383, word: "elegant",      meaning: "zarif",           synonyms: ["graceful","stylish","refined"],    type: "adjective", level: "B1", image: null },
    { id: 1384, word: "emotion",      meaning: "duygu",           synonyms: ["feeling","sentiment","passion"],   type: "noun",      level: "B1", image: null },
    { id: 1385, word: "employee",     meaning: "çalışan",         synonyms: ["worker","staff","personnel"],      type: "noun",      level: "B1", image: null },
    { id: 1388, word: "eventually",   meaning: "sonunda",         synonyms: ["ultimately","finally","in time"],  type: "adverb",    level: "B1", image: null },
    { id: 1390, word: "exaggerate",   meaning: "abartmak",        synonyms: ["overstate","magnify","inflate"],   type: "verb",      level: "B1", image: null },
    { id: 1391, word: "exchange",     meaning: "değiş tokuş",     synonyms: ["swap","trade","barter"],           type: "noun",      level: "B1", image: null },
    { id: 1392, word: "exhaust",      meaning: "tüketmek/yormak",synonyms: ["drain","deplete","tire"],           type: "verb",      level: "B1", image: null },
    { id: 1393, word: "expand",       meaning: "genişletmek",     synonyms: ["grow","extend","enlarge"],         type: "verb",      level: "B1", image: null },
    { id: 1394, word: "explosion",    meaning: "patlama",         synonyms: ["blast","detonation","eruption"],   type: "noun",      level: "B1", image: null },
    { id: 1395, word: "extraordinary",meaning: "olağanüstü",      synonyms: ["remarkable","exceptional","incredible"], type: "adjective", level: "B1", image: null },

    // ── B2 Level Words ──────────────────────────────────────
    { id: 1396, word: "abolish",      meaning: "kaldırmak",       synonyms: ["eliminate","end","annul"],         type: "verb",      level: "B2", image: null },
    { id: 1397, word: "accumulate",   meaning: "biriktirmek",     synonyms: ["gather","amass","collect"],        type: "verb",      level: "B2", image: null },
    { id: 1398, word: "acknowledge",  meaning: "kabul etmek",     synonyms: ["recognize","admit","accept"],      type: "verb",      level: "B2", image: null },
    { id: 1399, word: "adversity",    meaning: "zorluk",          synonyms: ["hardship","difficulty","misfortune"], type: "noun", level: "B2", image: null },
    { id: 1400, word: "advocate",     meaning: "savunucu",        synonyms: ["supporter","champion","proponent"], type: "noun",  level: "B2", image: null },
    { id: 1401, word: "alleviate",    meaning: "hafifletmek",     synonyms: ["relieve","ease","mitigate"],       type: "verb",      level: "B2", image: null },
    { id: 1402, word: "anonymous",    meaning: "anonim",          synonyms: ["unnamed","unknown","unidentified"], type: "adjective", level: "B2", image: null },
    { id: 1403, word: "aspiration",   meaning: "arzu/hedef",      synonyms: ["ambition","goal","dream"],         type: "noun",      level: "B2", image: null },
    { id: 1404, word: "bias",         meaning: "önyargı",         synonyms: ["prejudice","partiality","favoritism"], type: "noun", level: "B2", image: null },
    { id: 1405, word: "boast",        meaning: "övünmek",         synonyms: ["brag","flaunt","show off"],        type: "verb",      level: "B2", image: null },
    { id: 1406, word: "breakthrough", meaning: "çığır açan gelişme",synonyms: ["advance","discovery","innovation"], type: "noun", level: "B2", image: null },
    { id: 1407, word: "captivate",    meaning: "büyülemek",       synonyms: ["fascinate","enchant","charm"],     type: "verb",      level: "B2", image: null },
    { id: 1408, word: "censorship",   meaning: "sansür",          synonyms: ["suppression","restriction","ban"], type: "noun",      level: "B2", image: null },
    { id: 1409, word: "coincidence",  meaning: "tesadüf",         synonyms: ["chance","accident","fluke"],       type: "noun",      level: "B2", image: null },
    { id: 1410, word: "commitment",   meaning: "bağlılık/taahhüt",synonyms: ["dedication","obligation","pledge"], type: "noun",  level: "B2", image: null },
    { id: 1411, word: "compelling",   meaning: "ikna edici",      synonyms: ["convincing","persuasive","forceful"], type: "adjective", level: "B2", image: null },
    { id: 1412, word: "conceal",      meaning: "gizlemek",        synonyms: ["hide","cover","disguise"],         type: "verb",      level: "B2", image: null },
    { id: 1413, word: "consciousness",meaning: "bilinç",          synonyms: ["awareness","perception","cognizance"], type: "noun", level: "B2", image: null },
    { id: 1414, word: "corruption",   meaning: "yolsuzluk",       synonyms: ["fraud","dishonesty","bribery"],    type: "noun",      level: "B2", image: null },
    { id: 1415, word: "curiosity",    meaning: "merak",           synonyms: ["inquisitiveness","interest","wonder"], type: "noun", level: "B2", image: null },
    { id: 1416, word: "deceive",      meaning: "aldatmak",        synonyms: ["trick","fool","mislead"],          type: "verb",      level: "B2", image: null },
    { id: 1417, word: "dignity",      meaning: "onur",            synonyms: ["honor","pride","self-respect"],    type: "noun",      level: "B2", image: null },
    { id: 1418, word: "dilemma",      meaning: "ikilem",          synonyms: ["predicament","quandary","puzzle"], type: "noun",      level: "B2", image: null },
    { id: 1420, word: "dispute",      meaning: "anlaşmazlık",     synonyms: ["argument","conflict","disagreement"], type: "noun", level: "B2", image: null },
    { id: 1422, word: "empowerment",  meaning: "güçlendirme",     synonyms: ["authorization","enablement","liberation"], type: "noun", level: "B2", image: null },
    { id: 1424, word: "exquisite",    meaning: "enfes",           synonyms: ["beautiful","elegant","delicate"],  type: "adjective", level: "B2", image: null },
    { id: 1425, word: "flourish",     meaning: "gelişmek",        synonyms: ["thrive","prosper","bloom"],        type: "verb",      level: "B2", image: null },
    { id: 1426, word: "fulfill",      meaning: "yerine getirmek", synonyms: ["achieve","accomplish","satisfy"],  type: "verb",      level: "B2", image: null },
    { id: 1428, word: "heritage",     meaning: "miras",           synonyms: ["legacy","inheritance","tradition"], type: "noun",  level: "B2", image: null },
    { id: 1429, word: "hierarchy",    meaning: "hiyerarşi",       synonyms: ["ranking","order","structure"],     type: "noun",      level: "B2", image: null },
    { id: 1430, word: "humiliate",    meaning: "aşağılamak",      synonyms: ["embarrass","shame","degrade"],     type: "verb",      level: "B2", image: null },
    { id: 1431, word: "illuminate",   meaning: "aydınlatmak",     synonyms: ["light up","brighten","clarify"],   type: "verb",      level: "B2", image: null },
    { id: 1432, word: "implement",    meaning: "uygulamak",       synonyms: ["execute","carry out","put into practice"], type: "verb", level: "B2", image: null },
    { id: 1433, word: "implication",  meaning: "ima/sonuç",       synonyms: ["consequence","suggestion","effect"], type: "noun",  level: "B2", image: null },
    { id: 1434, word: "incentive",    meaning: "teşvik",          synonyms: ["motivation","encouragement","stimulus"], type: "noun", level: "B2", image: null },
    { id: 1435, word: "integrate",    meaning: "entegre etmek",   synonyms: ["combine","merge","incorporate"],  type: "verb",      level: "B2", image: null },
    { id: 1436, word: "integrity",    meaning: "dürüstlük",       synonyms: ["honesty","morality","ethics"],     type: "noun",      level: "B2", image: null },
    { id: 1437, word: "intervene",    meaning: "müdahale etmek",  synonyms: ["interfere","mediate","step in"],   type: "verb",      level: "B2", image: null },
    { id: 1438, word: "intuition",    meaning: "sezgi",           synonyms: ["instinct","gut feeling","perception"], type: "noun", level: "B2", image: null },
    { id: 1440, word: "magnificent",  meaning: "muhteşem",        synonyms: ["splendid","grand","majestic"],     type: "adjective", level: "B2", image: null },

    // ── C1 Level Words ──────────────────────────────────────
    { id: 1441, word: "abolition",    meaning: "kaldırma/ilga",   synonyms: ["elimination","termination","annulment"], type: "noun", level: "C1", image: null },
    { id: 1442, word: "abstain",      meaning: "kaçınmak",        synonyms: ["refrain","avoid","forgo"],         type: "verb",      level: "C1", image: null },
    { id: 1443, word: "acclaim",      meaning: "beğeni/alkış",    synonyms: ["praise","applause","recognition"], type: "noun",      level: "C1", image: null },
    { id: 1444, word: "acute",        meaning: "akut/keskin",     synonyms: ["severe","sharp","intense"],        type: "adjective", level: "C1", image: null },
    { id: 1445, word: "adversary",    meaning: "hasım",           synonyms: ["opponent","enemy","rival"],        type: "noun",      level: "C1", image: null },
    { id: 1446, word: "aftermath",    meaning: "sonuç/artçı",     synonyms: ["consequence","result","repercussion"], type: "noun", level: "C1", image: null },
    { id: 1447, word: "allegiance",   meaning: "bağlılık",        synonyms: ["loyalty","devotion","fidelity"],   type: "noun",      level: "C1", image: null },
    { id: 1448, word: "allude",       meaning: "ima etmek",       synonyms: ["hint","suggest","refer to"],       type: "verb",      level: "C1", image: null },
    { id: 1449, word: "anomaly",      meaning: "anormallik",      synonyms: ["irregularity","aberration","deviation"], type: "noun", level: "C1", image: null },
    { id: 1450, word: "apathy",       meaning: "ilgisizlik",      synonyms: ["indifference","disinterest","passivity"], type: "noun", level: "C1", image: null },
    { id: 1451, word: "apprehensive", meaning: "endişeli",        synonyms: ["anxious","worried","fearful"],     type: "adjective", level: "C1", image: null },
    { id: 1452, word: "arbitrary",    meaning: "keyfi",           synonyms: ["random","capricious","subjective"], type: "adjective", level: "C1", image: null },
    { id: 1453, word: "articulate",   meaning: "açıkça ifade etmek",synonyms: ["express","convey","enunciate"], type: "verb",      level: "C1", image: null },
    { id: 1454, word: "assertive",    meaning: "iddialı/kararlı", synonyms: ["confident","forceful","decisive"], type: "adjective", level: "C1", image: null },
    { id: 1455, word: "benevolent",   meaning: "hayırsever",      synonyms: ["kind","charitable","generous"],    type: "adjective", level: "C1", image: null },
    { id: 1456, word: "candid",       meaning: "samimi/açık sözlü",synonyms: ["frank","honest","straightforward"], type: "adjective", level: "C1", image: null },
    { id: 1457, word: "catalyze",     meaning: "hızlandırmak",    synonyms: ["accelerate","trigger","stimulate"], type: "verb",  level: "C1", image: null },
    { id: 1459, word: "circumvent",   meaning: "atlatmak/aşmak", synonyms: ["bypass","evade","avoid"],          type: "verb",      level: "C1", image: null },
    { id: 1460, word: "clandestine",  meaning: "gizli",           synonyms: ["secret","covert","undercover"],    type: "adjective", level: "C1", image: null },
    { id: 1461, word: "coerce",       meaning: "zorlamak",        synonyms: ["force","compel","pressure"],       type: "verb",      level: "C1", image: null },
    { id: 1462, word: "complacent",   meaning: "kayıtsız",        synonyms: ["smug","self-satisfied","contented"], type: "adjective", level: "C1", image: null },
    { id: 1463, word: "concede",      meaning: "kabullenmek",     synonyms: ["admit","acknowledge","yield"],     type: "verb",      level: "C1", image: null },
    { id: 1464, word: "conducive",    meaning: "elverişli",       synonyms: ["favorable","beneficial","helpful"], type: "adjective", level: "C1", image: null },
    { id: 1465, word: "confiscate",   meaning: "el koymak",       synonyms: ["seize","impound","appropriate"],   type: "verb",      level: "C1", image: null },
    { id: 1466, word: "conscientious",meaning: "vicdanlı",        synonyms: ["diligent","careful","thorough"],   type: "adjective", level: "C1", image: null },
    { id: 1467, word: "contingency",  meaning: "olasılık",        synonyms: ["possibility","eventuality","emergency"], type: "noun", level: "C1", image: null },
    { id: 1468, word: "conventional", meaning: "geleneksel",      synonyms: ["traditional","orthodox","standard"], type: "adjective", level: "C1", image: null },
    { id: 1469, word: "credible",     meaning: "güvenilir/inandırıcı",synonyms: ["believable","plausible","trustworthy"], type: "adjective", level: "C1", image: null },
    { id: 1470, word: "culminate",    meaning: "doruğa ulaşmak",  synonyms: ["peak","climax","conclude"],        type: "verb",      level: "C1", image: null },
    { id: 1471, word: "deter",        meaning: "caydırmak",       synonyms: ["discourage","prevent","dissuade"], type: "verb",      level: "C1", image: null },
    { id: 1472, word: "discrepancy",  meaning: "tutarsızlık",     synonyms: ["inconsistency","difference","gap"], type: "noun",  level: "C1", image: null },
    { id: 1473, word: "elicit",       meaning: "ortaya çıkarmak", synonyms: ["extract","provoke","evoke"],       type: "verb",      level: "C1", image: null },
    { id: 1474, word: "eloquent",     meaning: "belagatli",       synonyms: ["articulate","fluent","expressive"], type: "adjective", level: "C1", image: null },
    { id: 1475, word: "emphatically", meaning: "kesinlikle",      synonyms: ["forcefully","strongly","firmly"],  type: "adverb",    level: "C1", image: null },
    { id: 1476, word: "encompass",    meaning: "kapsamak",        synonyms: ["include","contain","embrace"],     type: "verb",      level: "C1", image: null },
    { id: 1477, word: "endorse",      meaning: "onaylamak",       synonyms: ["approve","support","back"],        type: "verb",      level: "C1", image: null },
    { id: 1478, word: "exemplary",    meaning: "örnek teşkil eden",synonyms: ["model","outstanding","admirable"], type: "adjective", level: "C1", image: null },
    { id: 1479, word: "exert",        meaning: "uygulamak/sarf etmek",synonyms: ["apply","exercise","use"],      type: "verb",      level: "C1", image: null },
    { id: 1480, word: "feasible",     meaning: "uygulanabilir",   synonyms: ["possible","practical","achievable"], type: "adjective", level: "C1", image: null },
    { id: 1481, word: "fiasco",       meaning: "fiyasko",         synonyms: ["failure","disaster","debacle"],    type: "noun",      level: "C1", image: null },
    { id: 1482, word: "formidable",   meaning: "zorlu/etkileyici",synonyms: ["impressive","daunting","powerful"], type: "adjective", level: "C1", image: null },
    { id: 1483, word: "futile",       meaning: "boşuna",          synonyms: ["useless","pointless","vain"],      type: "adjective", level: "C1", image: null },
    { id: 1484, word: "imminent",     meaning: "yakın/an meselesi",synonyms: ["impending","approaching","looming"], type: "adjective", level: "C1", image: null },
    { id: 1485, word: "indispensable",meaning: "vazgeçilmez",     synonyms: ["essential","vital","necessary"],   type: "adjective", level: "C1", image: null },
    { id: 1486, word: "innate",       meaning: "doğuştan",        synonyms: ["inborn","natural","inherent"],     type: "adjective", level: "C1", image: null },
    { id: 1487, word: "intricate",    meaning: "karmaşık",        synonyms: ["complex","elaborate","detailed"],  type: "adjective", level: "C1", image: null },
    { id: 1488, word: "invoke",       meaning: "başvurmak",       synonyms: ["call upon","appeal to","cite"],    type: "verb",      level: "C1", image: null },
    { id: 1489, word: "lucrative",    meaning: "kârlı",           synonyms: ["profitable","rewarding","gainful"], type: "adjective", level: "C1", image: null },
    { id: 1490, word: "mandate",      meaning: "yetki/zorunluluk",synonyms: ["order","decree","directive"],      type: "noun",      level: "C1", image: null },
    { id: 1491, word: "meticulous",   meaning: "titiz",           synonyms: ["thorough","careful","precise"],    type: "adjective", level: "C1", image: null },
    { id: 1492, word: "mitigate",     meaning: "hafifletmek",     synonyms: ["alleviate","reduce","lessen"],     type: "verb",      level: "C1", image: null },
    { id: 1493, word: "nuance",       meaning: "nüans",           synonyms: ["subtlety","shade","distinction"],  type: "noun",      level: "C1", image: null },
    { id: 1494, word: "obsolete",     meaning: "modası geçmiş",   synonyms: ["outdated","antiquated","archaic"], type: "adjective", level: "C1", image: null },
    { id: 1495, word: "paramount",    meaning: "en önemli",       synonyms: ["supreme","chief","foremost"],      type: "adjective", level: "C1", image: null },
    { id: 1496, word: "paradigm",     meaning: "paradigma",       synonyms: ["model","pattern","framework"],     type: "noun",      level: "C1", image: null },
    { id: 1497, word: "perpetuate",   meaning: "sürdürmek",       synonyms: ["continue","maintain","preserve"],  type: "verb",      level: "C1", image: null },
    { id: 1498, word: "plausible",    meaning: "makul",           synonyms: ["credible","reasonable","believable"], type: "adjective", level: "C1", image: null },
    { id: 1499, word: "precedent",    meaning: "emsal",           synonyms: ["example","model","standard"],      type: "noun",      level: "C1", image: null },
    { id: 1500, word: "prevalent",    meaning: "yaygın",          synonyms: ["common","widespread","dominant"],   type: "adjective", level: "C1", image: null },
    { id: 1501, word: "profound",     meaning: "derin",           synonyms: ["deep","intense","thorough"],        type: "adjective", level: "C1", image: null },
    { id: 1502, word: "proliferate",  meaning: "çoğalmak",        synonyms: ["multiply","spread","increase"],    type: "verb",      level: "C1", image: null },
    { id: 1503, word: "provocative",  meaning: "kışkırtıcı",     synonyms: ["stimulating","challenging","controversial"], type: "adjective", level: "C1", image: null },
    { id: 1504, word: "reconcile",    meaning: "uzlaştırmak",     synonyms: ["resolve","settle","harmonize"],    type: "verb",      level: "C1", image: null },
    { id: 1505, word: "redundant",    meaning: "gereksiz/fazla",  synonyms: ["unnecessary","surplus","superfluous"], type: "adjective", level: "C1", image: null },
    { id: 1506, word: "relentless",   meaning: "amansız",         synonyms: ["persistent","unyielding","unceasing"], type: "adjective", level: "C1", image: null },
    { id: 1507, word: "relinquish",   meaning: "vazgeçmek",       synonyms: ["surrender","abandon","yield"],     type: "verb",      level: "C1", image: null },
    { id: 1508, word: "repercussion", meaning: "yansıma/sonuç",   synonyms: ["consequence","effect","aftermath"], type: "noun",  level: "C1", image: null },
    { id: 1509, word: "resilient",    meaning: "dayanıklı",       synonyms: ["tough","strong","adaptable"],      type: "adjective", level: "C1", image: null },
    { id: 1510, word: "rigorous",     meaning: "katı/titiz",      synonyms: ["strict","thorough","demanding"],   type: "adjective", level: "C1", image: null },
    { id: 1511, word: "scrutinize",   meaning: "incelemek",       synonyms: ["examine","inspect","analyze"],     type: "verb",      level: "C1", image: null },
    { id: 1512, word: "sentiment",    meaning: "duygu/görüş",     synonyms: ["feeling","opinion","attitude"],    type: "noun",      level: "C1", image: null },
    { id: 1513, word: "skeptical",    meaning: "şüpheci",         synonyms: ["doubtful","questioning","cynical"], type: "adjective", level: "C1", image: null },
    { id: 1514, word: "spontaneous",  meaning: "kendiliğinden",   synonyms: ["impromptu","unplanned","natural"], type: "adjective", level: "C1", image: null },
    { id: 1515, word: "stagnant",     meaning: "durgun",          synonyms: ["static","inactive","sluggish"],    type: "adjective", level: "C1", image: null },
    { id: 1516, word: "stringent",    meaning: "katı/sıkı",       synonyms: ["strict","rigorous","severe"],      type: "adjective", level: "C1", image: null },
    { id: 1517, word: "subordinate",  meaning: "ast/ikincil",     synonyms: ["inferior","junior","secondary"],   type: "noun",      level: "C1", image: null },
    { id: 1518, word: "substantiate", meaning: "kanıtlamak",      synonyms: ["prove","verify","confirm"],        type: "verb",      level: "C1", image: null },
    { id: 1519, word: "succinct",     meaning: "kısa ve öz",      synonyms: ["concise","brief","compact"],       type: "adjective", level: "C1", image: null },
    { id: 1520, word: "superficial",  meaning: "yüzeysel",        synonyms: ["shallow","surface-level","cursory"], type: "adjective", level: "C1", image: null },
    { id: 1521, word: "surplus",      meaning: "fazlalık",        synonyms: ["excess","extra","remainder"],      type: "noun",      level: "C1", image: null },
    { id: 1522, word: "tangible",     meaning: "somut",           synonyms: ["concrete","real","palpable"],      type: "adjective", level: "C1", image: null },
    { id: 1523, word: "tenacious",    meaning: "inatçı/azimli",   synonyms: ["persistent","determined","resolute"], type: "adjective", level: "C1", image: null },
    { id: 1524, word: "tentative",    meaning: "geçici/deneme",   synonyms: ["provisional","uncertain","preliminary"], type: "adjective", level: "C1", image: null },
    { id: 1525, word: "ubiquitous",   meaning: "her yerde olan",  synonyms: ["omnipresent","universal","pervasive"], type: "adjective", level: "C1", image: null },
    { id: 1526, word: "undermine",    meaning: "baltalamak",      synonyms: ["weaken","sabotage","subvert"],     type: "verb",      level: "C1", image: null },
    { id: 1527, word: "unprecedented",meaning: "benzeri görülmemiş",synonyms: ["unmatched","unparalleled","novel"], type: "adjective", level: "C1", image: null },
    { id: 1528, word: "versatile",    meaning: "çok yönlü",       synonyms: ["adaptable","flexible","multifaceted"], type: "adjective", level: "C1", image: null },
    { id: 1529, word: "vindicate",    meaning: "haklı çıkarmak",  synonyms: ["justify","clear","exonerate"],     type: "verb",      level: "C1", image: null },
    { id: 1530, word: "volatile",     meaning: "değişken/oynak",  synonyms: ["unstable","unpredictable","erratic"], type: "adjective", level: "C1", image: null },
    { id: 1531, word: "vulnerable",   meaning: "savunmasız",      synonyms: ["exposed","susceptible","defenseless"], type: "adjective", level: "C1", image: null },
    { id: 1532, word: "warrant",      meaning: "garantilemek",    synonyms: ["justify","authorize","merit"],     type: "verb",      level: "C1", image: null },
    { id: 1533, word: "wholesome",    meaning: "sağlıklı",        synonyms: ["healthy","nutritious","beneficial"], type: "adjective", level: "C1", image: null },
    { id: 1534, word: "yield",        meaning: "vermek/boyun eğmek",synonyms: ["produce","surrender","give in"], type: "verb",   level: "C1", image: null },
    { id: 1535, word: "zeal",         meaning: "şevk",            synonyms: ["enthusiasm","passion","fervor"],   type: "noun",      level: "C1", image: null },
    { id: 1536, word: "adjacent",     meaning: "bitişik",         synonyms: ["neighboring","next to","adjoining"], type: "adjective", level: "C1", image: null },
    { id: 1537, word: "benign",       meaning: "iyi huylu",       synonyms: ["harmless","gentle","mild"],        type: "adjective", level: "C1", image: null },
    { id: 1538, word: "brevity",      meaning: "kısalık",         synonyms: ["conciseness","shortness","succinctness"], type: "noun", level: "C1", image: null },
    { id: 1539, word: "coercion",     meaning: "zorlama",         synonyms: ["compulsion","force","pressure"],   type: "noun",      level: "C1", image: null },
    { id: 1540, word: "corroborate",  meaning: "doğrulamak",      synonyms: ["confirm","verify","validate"],     type: "verb",      level: "C1", image: null },
    { id: 1541, word: "detrimental",  meaning: "zararlı",         synonyms: ["harmful","damaging","injurious"],  type: "adjective", level: "C1", image: null },
    { id: 1542, word: "diligent",     meaning: "çalışkan",        synonyms: ["hardworking","industrious","assiduous"], type: "adjective", level: "C1", image: null },
    { id: 1543, word: "disposition",  meaning: "mizaç",           synonyms: ["temperament","character","nature"], type: "noun",  level: "C1", image: null },
    { id: 1544, word: "exemplify",    meaning: "örneklemek",      synonyms: ["illustrate","demonstrate","represent"], type: "verb", level: "C1", image: null },
    { id: 1545, word: "fiscal",       meaning: "mali",            synonyms: ["financial","monetary","economic"],  type: "adjective", level: "C1", image: null },
    { id: 1546, word: "gratitude",    meaning: "minnettarlık",    synonyms: ["thankfulness","appreciation","gratefulness"], type: "noun", level: "C1", image: null },
    { id: 1547, word: "imperative",   meaning: "zorunlu",         synonyms: ["essential","critical","mandatory"], type: "adjective", level: "C1", image: null },
    { id: 1548, word: "lament",       meaning: "yas tutmak",      synonyms: ["mourn","grieve","bewail"],         type: "verb",      level: "C1", image: null },
    { id: 1549, word: "mediocre",     meaning: "vasat",           synonyms: ["average","ordinary","middling"],   type: "adjective", level: "C1", image: null },
    { id: 1550, word: "pervasive",    meaning: "yaygın/sirayet eden",synonyms: ["prevalent","widespread","omnipresent"], type: "adjective", level: "C1", image: null }
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
            <p><strong>3. Program/Takvimler:</strong> The train leaves at 9 AM.</p>

            <table class="grammar-rule-table">
                <tr><th>Yapı</th><th>Olumlu</th><th>Olumsuz</th><th>Soru</th></tr>
                <tr><td>I/You/We/They</td><td>work</td><td>don't work</td><td>Do ... work?</td></tr>
                <tr><td>He/She/It</td><td>works</td><td>doesn't work</td><td>Does ... work?</td></tr>
            </table>

            <div class="grammar-formula">Özne + Fiil (he/she/it → +s/es)</div>

            <div class="grammar-note">
                <strong>Zaman İfadeleri:</strong> always, usually, often, sometimes, rarely, never, every day/week/month
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank",  question: "She ____ (like) visual arts.",           answer: "likes",   hint: "3. tekil şahıs → -s ekle." },
            { id: 2, type: "true-false",  question: "We uses the internet everyday. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'We use' doğrudur." },
            { id: 3, type: "writing",     question: "Write a sentence using 'always'.",        keywords: ["always"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: "goes", hint: "3. tekil şahıs → -s" },
            { id: 5, type: "fill-blank", question: "My father ____ (not/drink) tea.", answer: "doesn't drink", hint: "Olumsuz: doesn't + fiil" },
            { id: 6, type: "multiple-choice", question: "_____ they play tennis on Sundays?", options: ["Does", "Do", "Is", "Are"], answer: "Do", hint: "They → Do" },
            { id: 7, type: "fill-blank", question: "The sun ____ (rise) in the east.", answer: "rises", hint: "Genel doğru, 3. tekil → -s" }
        ],
        examples: [
            { sentence: "She works at a hospital.", translation: "Hastanede çalışır.", correct: true },
            { sentence: "She work at a hospital.", translation: "Hastanede çalışır.", correct: false, note: "3. tekil şahıs → works" },
            { sentence: "They play football on Sundays.", translation: "Pazar günleri futbol oynarlar.", correct: true },
            { sentence: "He don't like coffee.", translation: "Kahveyi sevmez.", correct: false, note: "He doesn't like (does + not)" },
            { sentence: "Do you speak English?", translation: "İngilizce konuşuyor musun?", correct: true },
            { sentence: "Water boils at 100°C.", translation: "Su 100°C'de kaynar.", correct: true }
        ],
        test: [
            { id: 1, question: "She ___ coffee every morning.", options: ["drink", "drinks", "drinking", "drank"], answer: 1 },
            { id: 2, question: "Which sentence is correct?", options: ["He go to school.", "He goes to school.", "He going to school.", "He goed to school."], answer: 1 },
            { id: 3, question: "They ___ football on weekends.", options: ["plays", "playing", "play", "played"], answer: 2 },
            { id: 4, question: "___ she like pizza?", options: ["Do", "Does", "Is", "Are"], answer: 1 },
            { id: 5, question: "The Earth ___ around the Sun.", options: ["move", "moves", "moving", "moved"], answer: 1 }
        ]
    },
    {
        id: "a1-to-be",
        level: "A1",
        title: "To Be (Am / Is / Are)",
        description: "İngilizce'nin en temel yardımcı fiili.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Özne</th><th>Olumlu</th><th>Kısa</th><th>Olumsuz</th></tr>
                <tr><td>I</td><td>am</td><td>I'm</td><td>am not</td></tr>
                <tr><td>He/She/It</td><td>is</td><td>He's</td><td>isn't</td></tr>
                <tr><td>You/We/They</td><td>are</td><td>You're</td><td>aren't</td></tr>
            </table>

            <div class="grammar-formula">Özne + am/is/are + isim/sıfat/yer</div>

            <div class="grammar-note">
                <strong>Dikkat:</strong> "I amn't" kullanılmaz, olumsuz hali "I'm not" şeklindedir.
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "She ____ a doctor.", answer: "is",  hint: "He/She/It → is" },
            { id: 2, type: "fill-blank", question: "They ____ from Turkey.", answer: "are", hint: "They → are" },
            { id: 3, type: "true-false", question: "I are 20 years old. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "I am doğrudur." },
            { id: 4, type: "multiple-choice", question: "We ___ happy today.", options: ["am", "is", "are", "be"], answer: "are", hint: "We → are" },
            { id: 5, type: "fill-blank", question: "It ____ cold outside.", answer: "is", hint: "It → is" },
            { id: 6, type: "multiple-choice", question: "I ___ a student.", options: ["is", "am", "are", "be"], answer: "am", hint: "I → am" },
            { id: 7, type: "fill-blank", question: "You ____ my best friend.", answer: "are", hint: "You → are" }
        ],
        examples: [
            { sentence: "I am a student.", translation: "Ben bir öğrenciyim.", correct: true },
            { sentence: "She is happy today.", translation: "Bugün mutlu.", correct: true },
            { sentence: "We is friends.", translation: "Biz arkadaşız.", correct: false, note: "We → are (We are friends)" },
            { sentence: "They aren't at home.", translation: "Evde değiller.", correct: true },
            { sentence: "Is he a teacher?", translation: "O bir öğretmen mi?", correct: true }
        ],
        test: [
            { id: 1, question: "I ___ 15 years old.", options: ["am", "is", "are", "be"], answer: 0 },
            { id: 2, question: "She ___ from Istanbul.", options: ["am", "are", "is", "be"], answer: 2 },
            { id: 3, question: "They ___ students.", options: ["is", "am", "are", "was"], answer: 2 },
            { id: 4, question: "___ you tired?", options: ["Am", "Is", "Are", "Do"], answer: 2 },
            { id: 5, question: "It ___ a beautiful day.", options: ["are", "am", "is", "were"], answer: 2 }
        ]
    },
    {
        id: "a1-articles",
        level: "A1",
        title: "Articles (a / an / the)",
        description: "Belirsiz ve belirli artikel kullanımı.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Artikel</th><th>Kullanım</th><th>Örnek</th></tr>
                <tr><td><strong>a</strong></td><td>Ünsüz sesle başlayan tekil isimler</td><td>a book, a car, a university</td></tr>
                <tr><td><strong>an</strong></td><td>Ünlü sesle başlayan tekil isimler</td><td>an apple, an hour, an umbrella</td></tr>
                <tr><td><strong>the</strong></td><td>Belirli / bilinen nesneler</td><td>the sun, the book (on the table)</td></tr>
            </table>

            <div class="grammar-formula">a/an = ilk kez bahsedilen &nbsp;|&nbsp; the = bilinen / tek olan</div>

            <div class="grammar-note">
                <strong>Dikkat:</strong> "University" ünlüyle başlar ama /juː/ sesiyle okunur → <strong>a</strong> university. "Hour" ünsüzle başlar ama /aʊ/ sesiyle okunur → <strong>an</strong> hour.
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "I have ____ umbrella.", answer: "an", hint: "Umbrella ünlü harfle başlar." },
            { id: 2, type: "fill-blank", question: "She is ____ engineer.", answer: "an", hint: "Engineer ünlü harfle başlar." },
            { id: 3, type: "true-false", question: "He is a honest man. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'Honest' h harfi okunmaz, 'an' kullanılır." },
            { id: 4, type: "multiple-choice", question: "I saw ___ cat in the garden.", options: ["a", "an", "the", "—"], answer: "a", hint: "İlk kez bahsedilen → a" },
            { id: 5, type: "multiple-choice", question: "___ sun is very hot today.", options: ["A", "An", "The", "—"], answer: "The", hint: "Tek olan şey → the" },
            { id: 6, type: "fill-blank", question: "He waited for ____ hour.", answer: "an", hint: "Hour → /aʊ/ ünlü ses" },
            { id: 7, type: "fill-blank", question: "She goes to ____ university.", answer: "a", hint: "University → /juː/ ünsüz ses" }
        ],
        examples: [
            { sentence: "I have a dog.", translation: "Bir köpeğim var.", correct: true },
            { sentence: "She ate an apple.", translation: "Bir elma yedi.", correct: true },
            { sentence: "I saw a elephant.", translation: "Bir fil gördüm.", correct: false, note: "Elephant → ünlü ses → an elephant" },
            { sentence: "The moon is beautiful tonight.", translation: "Ay bu gece güzel.", correct: true },
            { sentence: "He is an honest man.", translation: "O dürüst bir adam.", correct: true }
        ],
        test: [
            { id: 1, question: "I need ___ pen.", options: ["a", "an", "the", "—"], answer: 0 },
            { id: 2, question: "She is ___ artist.", options: ["a", "an", "the", "—"], answer: 1 },
            { id: 3, question: "___ Earth goes around the Sun.", options: ["A", "An", "The", "—"], answer: 2 },
            { id: 4, question: "He bought ___ orange.", options: ["a", "an", "the", "—"], answer: 1 },
            { id: 5, question: "She goes to ___ university in London.", options: ["a", "an", "the", "—"], answer: 0 }
        ]
    },

    // ── A2 ────────────────────────────────────────────────
    {
        id: "a2-past-simple",
        level: "A2",
        title: "Past Simple (Geçmiş Zaman)",
        description: "Geçmişte tamamlanmış eylemler.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Yapı</th><th>Olumlu</th><th>Olumsuz</th><th>Soru</th></tr>
                <tr><td>Düzenli</td><td>verb + -ed</td><td>didn't + verb</td><td>Did + S + verb?</td></tr>
                <tr><td>Düzensiz</td><td>V2 (went, saw)</td><td>didn't + verb</td><td>Did + S + verb?</td></tr>
            </table>

            <div class="grammar-formula">Özne + Fiil-2 (düzenli: -ed / düzensiz: özel hali)</div>

            <div class="grammar-note">
                <strong>Zaman İfadeleri:</strong> yesterday, last week/month/year, ago, in 2020, when I was young
            </div>

            <h3>Sık Kullanılan Düzensiz Fiiller</h3>
            <table class="grammar-rule-table">
                <tr><th>Base</th><th>Past (V2)</th><th>Türkçe</th></tr>
                <tr><td>go</td><td>went</td><td>gitmek</td></tr>
                <tr><td>see</td><td>saw</td><td>görmek</td></tr>
                <tr><td>have</td><td>had</td><td>sahip olmak</td></tr>
                <tr><td>eat</td><td>ate</td><td>yemek</td></tr>
                <tr><td>come</td><td>came</td><td>gelmek</td></tr>
            </table>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "They ____ (visit) London last year.", answer: "visited", hint: "Düzenli fiil → -ed." },
            { id: 2, type: "fill-blank", question: "I ____ (see) a movie yesterday.", answer: "saw", hint: "'See' düzensiz bir fiildir." },
            { id: 3, type: "true-false", question: "She goed to school. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'Go' düzensiz: went." },
            { id: 4, type: "multiple-choice", question: "We ___ dinner at a restaurant last night.", options: ["eat", "ate", "eaten", "eating"], answer: "ate", hint: "eat → ate (düzensiz)" },
            { id: 5, type: "fill-blank", question: "He ____ (not/come) to the party.", answer: "didn't come", hint: "Olumsuz: didn't + yalın fiil" },
            { id: 6, type: "multiple-choice", question: "___ you see the movie?", options: ["Do", "Did", "Does", "Was"], answer: "Did", hint: "Geçmiş zaman sorusu → Did" },
            { id: 7, type: "fill-blank", question: "She ____ (buy) a new dress.", answer: "bought", hint: "buy → bought (düzensiz)" }
        ],
        examples: [
            { sentence: "I walked to school yesterday.", translation: "Dün okula yürüdüm.", correct: true },
            { sentence: "She went to the cinema last night.", translation: "Dün gece sinemaya gitti.", correct: true },
            { sentence: "He didn't went home.", translation: "Eve gitmedi.", correct: false, note: "didn't + yalın fiil → didn't go" },
            { sentence: "Did you eat breakfast?", translation: "Kahvaltı yedin mi?", correct: true },
            { sentence: "They played football yesterday.", translation: "Dün futbol oynadılar.", correct: true },
            { sentence: "She buyed a book.", translation: "Bir kitap aldı.", correct: false, note: "buy → bought (düzensiz fiil)" }
        ],
        test: [
            { id: 1, question: "I ___ to Istanbul last summer.", options: ["go", "went", "gone", "going"], answer: 1 },
            { id: 2, question: "She ___ her homework yesterday.", options: ["do", "does", "did", "done"], answer: 2 },
            { id: 3, question: "They ___ TV last night.", options: ["watch", "watches", "watched", "watching"], answer: 2 },
            { id: 4, question: "___ he play football yesterday?", options: ["Do", "Does", "Did", "Was"], answer: 2 },
            { id: 5, question: "We ___ a great time at the party.", options: ["have", "has", "had", "having"], answer: 2 }
        ]
    },
    {
        id: "a2-future-simple",
        level: "A2",
        title: "Future Simple (Gelecek Zaman — will)",
        description: "Gelecekteki kararlar ve tahminler.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Yapı</th><th>Olumlu</th><th>Olumsuz</th><th>Soru</th></tr>
                <tr><td>Tüm özneler</td><td>will + verb</td><td>won't + verb</td><td>Will + S + verb?</td></tr>
            </table>

            <div class="grammar-formula">Özne + will + Fiil (yalın hali)</div>

            <h3>Kullanım Alanları</h3>
            <p><strong>Anlık karar:</strong> I'll take the bus.</p>
            <p><strong>Tahmin:</strong> It will rain tomorrow.</p>
            <p><strong>Söz/teklif:</strong> I will help you.</p>

            <div class="grammar-note">
                <strong>Kısaltma:</strong> will → 'll (I'll, He'll, We'll) &nbsp;|&nbsp; will not → won't
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "They ____ (arrive) tomorrow morning.", answer: "will arrive", hint: "will + fiil" },
            { id: 2, type: "true-false", question: "I will going to the party. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'will go' doğrudur." },
            { id: 3, type: "writing",    question: "Write a future plan using 'will'.", keywords: ["will"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "She ___ come tomorrow.", options: ["will", "wills", "willing", "willed"], answer: "will", hint: "will hiç çekim eki almaz" },
            { id: 5, type: "fill-blank", question: "I ____ (not/tell) anyone your secret.", answer: "won't tell", hint: "will not = won't" },
            { id: 6, type: "multiple-choice", question: "___ you help me with this?", options: ["Will", "Do", "Are", "Did"], answer: "Will", hint: "Gelecek zaman sorusu → Will" },
            { id: 7, type: "fill-blank", question: "It ____ (rain) tomorrow, I think.", answer: "will rain", hint: "Tahmin → will + fiil" }
        ],
        examples: [
            { sentence: "I will help you with your homework.", translation: "Ödevinde sana yardım edeceğim.", correct: true },
            { sentence: "She will comes tomorrow.", translation: "Yarın gelecek.", correct: false, note: "will + yalın fiil → will come" },
            { sentence: "It won't rain today.", translation: "Bugün yağmur yağmayacak.", correct: true },
            { sentence: "Will you marry me?", translation: "Benimle evlenir misin?", correct: true },
            { sentence: "They'll arrive at 6 PM.", translation: "Akşam 6'da varacaklar.", correct: true }
        ],
        test: [
            { id: 1, question: "I think it ___ snow tonight.", options: ["will", "is", "does", "was"], answer: 0 },
            { id: 2, question: "She ___ be 18 next month.", options: ["is", "will", "was", "does"], answer: 1 },
            { id: 3, question: "___ they come to the party?", options: ["Do", "Are", "Will", "Did"], answer: 2 },
            { id: 4, question: "I ___ not forget your birthday.", options: ["do", "will", "am", "did"], answer: 1 },
            { id: 5, question: "We ___ travel to Japan next year.", options: ["will", "are", "do", "were"], answer: 0 }
        ]
    },
    {
        id: "a2-present-continuous",
        level: "A2",
        title: "Present Continuous (Şimdiki Zaman)",
        description: "Şu an olmakta olan eylemler.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Özne</th><th>Olumlu</th><th>Olumsuz</th><th>Soru</th></tr>
                <tr><td>I</td><td>am + V-ing</td><td>am not + V-ing</td><td>Am I + V-ing?</td></tr>
                <tr><td>He/She/It</td><td>is + V-ing</td><td>isn't + V-ing</td><td>Is he + V-ing?</td></tr>
                <tr><td>You/We/They</td><td>are + V-ing</td><td>aren't + V-ing</td><td>Are they + V-ing?</td></tr>
            </table>

            <div class="grammar-formula">Özne + am/is/are + Fiil-ing</div>

            <div class="grammar-note">
                <strong>Zaman İfadeleri:</strong> now, right now, at the moment, currently, Look! Listen!
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "She ____ (study) for her exam now.", answer: "is studying", hint: "is + study + -ing" },
            { id: 2, type: "fill-blank", question: "They ____ (not/watch) TV at the moment.", answer: "are not watching", hint: "are + not + fiil-ing" },
            { id: 3, type: "true-false", question: "He is play football now. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'is playing' doğrudur." },
            { id: 4, type: "multiple-choice", question: "Look! The baby ___.", options: ["cry", "cries", "is crying", "cried"], answer: "is crying", hint: "Şu an olan eylem → is + V-ing" },
            { id: 5, type: "fill-blank", question: "I ____ (read) a very interesting book.", answer: "am reading", hint: "I → am + V-ing" },
            { id: 6, type: "multiple-choice", question: "___ you listening to me?", options: ["Do", "Are", "Is", "Did"], answer: "Are", hint: "You → Are" },
            { id: 7, type: "fill-blank", question: "We ____ (have) lunch right now.", answer: "are having", hint: "We → are + V-ing" }
        ],
        examples: [
            { sentence: "I am reading a book right now.", translation: "Şu an bir kitap okuyorum.", correct: true },
            { sentence: "She is talking on the phone.", translation: "Telefonda konuşuyor.", correct: true },
            { sentence: "He is play football now.", translation: "Şu an futbol oynuyor.", correct: false, note: "is + playing (-ing unutulmamalı)" },
            { sentence: "They are not sleeping.", translation: "Uyumuyorlar.", correct: true },
            { sentence: "Are you coming to the party?", translation: "Partiye geliyor musun?", correct: true }
        ],
        test: [
            { id: 1, question: "She ___ to music right now.", options: ["listen", "listens", "is listening", "listened"], answer: 2 },
            { id: 2, question: "We ___ dinner at the moment.", options: ["cook", "are cooking", "cooks", "cooked"], answer: 1 },
            { id: 3, question: "___ he sleeping?", options: ["Does", "Do", "Is", "Are"], answer: 2 },
            { id: 4, question: "I ___ not working today.", options: ["do", "am", "is", "are"], answer: 1 },
            { id: 5, question: "Look! The children ___ in the park.", options: ["play", "plays", "are playing", "played"], answer: 2 }
        ]
    },

    // ── B1 ────────────────────────────────────────────────
    {
        id: "b1-present-perfect",
        level: "B1",
        title: "Present Perfect (Yakın Geçmiş)",
        description: "Geçmişte başlayan, şimdiye etkisi olan eylemler.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Özne</th><th>Olumlu</th><th>Olumsuz</th><th>Soru</th></tr>
                <tr><td>I/You/We/They</td><td>have + V3</td><td>haven't + V3</td><td>Have ... V3?</td></tr>
                <tr><td>He/She/It</td><td>has + V3</td><td>hasn't + V3</td><td>Has ... V3?</td></tr>
            </table>

            <div class="grammar-formula">Özne + have/has + Past Participle (V3)</div>

            <h3>Kullanım Alanları</h3>
            <p><strong>Deneyim:</strong> I <strong>have visited</strong> Paris. (ever/never)</p>
            <p><strong>Sonuç:</strong> She <strong>has lost</strong> her keys. (just/already/yet)</p>
            <p><strong>Devam:</strong> I <strong>have lived</strong> here for 5 years. (for/since)</p>

            <div class="grammar-note">
                <strong>for</strong> = süre boyunca (for 3 years) &nbsp;|&nbsp; <strong>since</strong> = başlangıç noktası (since 2020)
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "I ____ (never/see) the ocean.", answer: "have never seen", hint: "have + never + past participle" },
            { id: 2, type: "fill-blank", question: "She ____ (just/finish) her homework.", answer: "has just finished", hint: "has + just + past participle" },
            { id: 3, type: "true-false", question: "He has went to London twice. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'gone' kullanılır, 'went' değil." },
            { id: 4, type: "multiple-choice", question: "I ___ this movie before.", options: ["see", "saw", "have seen", "seeing"], answer: "have seen", hint: "Deneyim → have + V3" },
            { id: 5, type: "fill-blank", question: "They ____ (live) here since 2018.", answer: "have lived", hint: "since → Present Perfect" },
            { id: 6, type: "multiple-choice", question: "She ___ already left.", options: ["have", "has", "had", "is"], answer: "has", hint: "She → has" },
            { id: 7, type: "fill-blank", question: "____ you ever been to Japan?", answer: "Have", hint: "Soru: Have + you + ever + V3" },
            { id: 8, type: "multiple-choice", question: "We haven't finished ___.", options: ["already", "yet", "since", "just"], answer: "yet", hint: "Olumsuzda → yet" }
        ],
        examples: [
            { sentence: "I have visited Paris twice.", translation: "Paris'i iki kez ziyaret ettim.", correct: true },
            { sentence: "She has lost her keys.", translation: "Anahtarlarını kaybetti.", correct: true },
            { sentence: "He has went to London.", translation: "Londra'ya gitti.", correct: false, note: "went → gone (V3 kullanılmalı)" },
            { sentence: "We have known each other since 2015.", translation: "2015'ten beri birbirimizi tanıyoruz.", correct: true },
            { sentence: "Have you ever eaten sushi?", translation: "Hiç suşi yedin mi?", correct: true },
            { sentence: "I have already did my homework.", translation: "Ödevimi çoktan yaptım.", correct: false, note: "did → done (have + V3)" }
        ],
        test: [
            { id: 1, question: "She ___ never been to Italy.", options: ["have", "has", "had", "is"], answer: 1 },
            { id: 2, question: "I ___ just finished my exam.", options: ["am", "have", "was", "did"], answer: 1 },
            { id: 3, question: "They have lived here ___ 10 years.", options: ["since", "for", "ago", "before"], answer: 1 },
            { id: 4, question: "___ you ever tried Turkish food?", options: ["Did", "Do", "Have", "Are"], answer: 2 },
            { id: 5, question: "He hasn't called me ___.", options: ["just", "already", "yet", "ever"], answer: 2 }
        ]
    },
    {
        id: "b1-modal-verbs",
        level: "B1",
        title: "Modal Verbs (can, must, should, might)",
        description: "Yetenek, zorunluluk, tavsiye ve olasılık ifadeleri.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Modal</th><th>Anlam</th><th>Örnek</th></tr>
                <tr><td><strong>can</strong></td><td>Yetenek / İzin</td><td>She can swim.</td></tr>
                <tr><td><strong>could</strong></td><td>Geçmiş yetenek / Kibar istek</td><td>Could you help me?</td></tr>
                <tr><td><strong>must</strong></td><td>Zorunluluk</td><td>You must wear a seatbelt.</td></tr>
                <tr><td><strong>should</strong></td><td>Tavsiye</td><td>You should sleep early.</td></tr>
                <tr><td><strong>might</strong></td><td>Olasılık</td><td>It might rain tomorrow.</td></tr>
            </table>

            <div class="grammar-formula">Özne + modal + Fiil (yalın hali)</div>

            <div class="grammar-note">
                <strong>Dikkat:</strong> Modal fiillerden sonra "to" gelmez! ❌ can to swim ✅ can swim. Ayrıca 3. tekil şahısta -s almaz: ❌ She cans ✅ She can
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "You ____ (should) exercise more.", answer: "should", hint: "Tavsiye için 'should' kullanılır." },
            { id: 2, type: "true-false", question: "She can to drive a car. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "Modal'dan sonra 'to' gelmez: 'can drive'." },
            { id: 3, type: "writing",    question: "Write a sentence using 'must' or 'should'.", keywords: ["must","should"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "You ___ see a doctor. You look sick.", options: ["should", "can", "might", "will"], answer: "should", hint: "Tavsiye → should" },
            { id: 5, type: "fill-blank", question: "Students ____ not use phones in class.", answer: "must", hint: "Zorunluluk/yasak → must" },
            { id: 6, type: "multiple-choice", question: "It ___ snow tomorrow. I'm not sure.", options: ["must", "should", "might", "can"], answer: "might", hint: "Belirsiz olasılık → might" },
            { id: 7, type: "fill-blank", question: "____ I open the window?", answer: "Can", hint: "İzin isteme → Can" }
        ],
        examples: [
            { sentence: "She can speak three languages.", translation: "Üç dil konuşabilir.", correct: true },
            { sentence: "She can to speak three languages.", translation: "Üç dil konuşabilir.", correct: false, note: "Modal + to gelmez → can speak" },
            { sentence: "You should eat more vegetables.", translation: "Daha fazla sebze yemelisin.", correct: true },
            { sentence: "You must stop at a red light.", translation: "Kırmızı ışıkta durmalısın.", correct: true },
            { sentence: "He mights come later.", translation: "Daha sonra gelebilir.", correct: false, note: "Modal fiil -s almaz → might come" }
        ],
        test: [
            { id: 1, question: "You ___ wear a helmet when riding a bike.", options: ["can", "should", "might", "will"], answer: 1 },
            { id: 2, question: "___ you swim?", options: ["Must", "Should", "Can", "Might"], answer: 2 },
            { id: 3, question: "She ___ be at home. I'm not sure.", options: ["must", "might", "can", "should"], answer: 1 },
            { id: 4, question: "You ___ not park here. It's illegal.", options: ["should", "might", "can", "must"], answer: 3 },
            { id: 5, question: "I think you ___ try the local food.", options: ["must", "should", "might", "can"], answer: 1 }
        ]
    },

    // ── B2 ────────────────────────────────────────────────
    {
        id: "b2-passive-voice",
        level: "B2",
        title: "Passive Voice (Edilgen Yapı)",
        description: "Eylemin faillini gizlemek veya vurguyu nesneye taşımak.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Zaman</th><th>Aktif</th><th>Pasif</th></tr>
                <tr><td>Present Simple</td><td>writes</td><td>is written</td></tr>
                <tr><td>Past Simple</td><td>wrote</td><td>was written</td></tr>
                <tr><td>Present Perfect</td><td>has written</td><td>has been written</td></tr>
                <tr><td>Future (will)</td><td>will write</td><td>will be written</td></tr>
            </table>

            <div class="grammar-formula">Özne + be (zamana göre) + Past Participle (V3)</div>

            <div class="grammar-note">
                <strong>Ne zaman kullanılır?</strong> Yapan kişi bilinmediğinde, önemsiz olduğunda veya nesneyi vurgulamak istediğimizde. Fail belirtmek için "by" kullanılır.
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "The window ____ (break) by the storm.", answer: "was broken", hint: "Past passive: was + past participle." },
            { id: 2, type: "fill-blank", question: "English ____ (speak) all over the world.", answer: "is spoken", hint: "Present passive: is + past participle." },
            { id: 3, type: "true-false", question: "The book was wrote by Orwell. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'written' kullanılmalı." },
            { id: 4, type: "multiple-choice", question: "The cake ___ by my mother.", options: ["baked", "was baked", "is baking", "bakes"], answer: "was baked", hint: "Past passive → was + V3" },
            { id: 5, type: "fill-blank", question: "The new hospital ____ (build) next year.", answer: "will be built", hint: "Future passive: will be + V3" },
            { id: 6, type: "multiple-choice", question: "The letter ___ already ___.", options: ["has / sent", "has / been sent", "was / sent", "is / sending"], answer: "has / been sent", hint: "Present Perfect passive → has been + V3" },
            { id: 7, type: "fill-blank", question: "Many languages ____ (speak) in India.", answer: "are spoken", hint: "Present passive: are + V3" }
        ],
        examples: [
            { sentence: "The letter is written by him.", translation: "Mektup onun tarafından yazılır.", correct: true },
            { sentence: "The cake was ate by the children.", translation: "Pasta çocuklar tarafından yendi.", correct: false, note: "ate → eaten (V3 kullanılmalı)" },
            { sentence: "The project will be completed tomorrow.", translation: "Proje yarın tamamlanacak.", correct: true },
            { sentence: "The report has been submitted.", translation: "Rapor gönderildi.", correct: true },
            { sentence: "Coffee is grown in Brazil.", translation: "Kahve Brezilya'da yetiştirilir.", correct: true }
        ],
        test: [
            { id: 1, question: "English ___ in many countries.", options: ["speak", "speaks", "is spoken", "speaking"], answer: 2 },
            { id: 2, question: "The Mona Lisa ___ by Leonardo da Vinci.", options: ["painted", "was painted", "is painting", "paints"], answer: 1 },
            { id: 3, question: "The bridge ___ next month.", options: ["will build", "will be built", "is building", "built"], answer: 1 },
            { id: 4, question: "The homework ___ already ___ submitted.", options: ["has / been", "was / —", "is / being", "have / been"], answer: 0 },
            { id: 5, question: "Rice ___ in Asia.", options: ["grows", "is grown", "growing", "grew"], answer: 1 }
        ]
    },
    {
        id: "b2-conditionals",
        level: "B2",
        title: "Conditionals (If Clauses)",
        description: "Koşul cümleleri: 0, 1, 2 ve 3. tip.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Tip</th><th>If Cümlesi</th><th>Ana Cümle</th><th>Kullanım</th></tr>
                <tr><td>0</td><td>If + Present Simple</td><td>Present Simple</td><td>Genel gerçekler</td></tr>
                <tr><td>1</td><td>If + Present Simple</td><td>will + Verb</td><td>Gerçek olası</td></tr>
                <tr><td>2</td><td>If + Past Simple</td><td>would + Verb</td><td>Hayal / gerçek dışı</td></tr>
                <tr><td>3</td><td>If + Past Perfect</td><td>would have + V3</td><td>Geçmişe pişmanlık</td></tr>
            </table>

            <div class="grammar-formula">
                0: If + V1, V1 &nbsp;|&nbsp; 1: If + V1, will + V &nbsp;|&nbsp; 2: If + V2, would + V &nbsp;|&nbsp; 3: If + had V3, would have V3
            </div>

            <div class="grammar-note">
                <strong>Dikkat:</strong> 2. tip'te "If I was" yerine "If I <strong>were</strong>" tercih edilir (formal). 3. tip geçmiş değiştirilemez, pişmanlık ifade eder.
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "If it rains, she ____ (stay) home. (1st conditional)", answer: "will stay", hint: "1. tip: will + fiil" },
            { id: 2, type: "fill-blank", question: "If I ____ (be) rich, I would buy a yacht. (2nd conditional)", answer: "were", hint: "2. tip: were kullanılır (was yerine)." },
            { id: 3, type: "writing",    question: "Write a 2nd conditional sentence starting with 'If I...'.", keywords: ["if","would"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "If you heat ice, it ___. (0th)", options: ["melts", "will melt", "would melt", "melted"], answer: "melts", hint: "0. tip: Present Simple + Present Simple" },
            { id: 5, type: "fill-blank", question: "If she ____ (study) harder, she would have passed. (3rd)", answer: "had studied", hint: "3. tip: If + had + V3" },
            { id: 6, type: "multiple-choice", question: "If I ___ you, I would apologize. (2nd)", options: ["am", "was", "were", "be"], answer: "were", hint: "2. tip → were" },
            { id: 7, type: "fill-blank", question: "If you come early, we ____ (go) together. (1st)", answer: "will go", hint: "1. tip: will + fiil" }
        ],
        examples: [
            { sentence: "If you heat water, it boils.", translation: "Suyu ısıtırsan kaynar. (0. tip)", correct: true },
            { sentence: "If it rains, I will stay home.", translation: "Yağmur yağarsa evde kalacağım. (1. tip)", correct: true },
            { sentence: "If I had money, I would travel.", translation: "Param olsaydı seyahat ederdim. (2. tip)", correct: true },
            { sentence: "If I would be rich, I would buy a car.", translation: "Zengin olsam araba alırdım.", correct: false, note: "If + would olmaz → If I were rich" },
            { sentence: "If she had studied, she would have passed.", translation: "Çalışsaydı geçerdi. (3. tip)", correct: true }
        ],
        test: [
            { id: 1, question: "If you ___ water, it boils. (0th)", options: ["heat", "will heat", "heated", "would heat"], answer: 0 },
            { id: 2, question: "If it rains, I ___ at home. (1st)", options: ["stay", "will stay", "would stay", "stayed"], answer: 1 },
            { id: 3, question: "If I ___ a bird, I would fly. (2nd)", options: ["am", "was", "were", "be"], answer: 2 },
            { id: 4, question: "If he ___ earlier, he wouldn't have been late. (3rd)", options: ["leaves", "left", "had left", "would leave"], answer: 2 },
            { id: 5, question: "Which sentence is 2nd conditional?", options: ["If it rains, I'll stay home.", "If I were you, I'd study.", "If he comes, tell him.", "If you heat ice, it melts."], answer: 1 }
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
            <table class="grammar-rule-table">
                <tr><th>Zarf</th><th>Devrik Yapı</th><th>Normal Yapı</th></tr>
                <tr><td>Never</td><td>Never <strong>have I</strong> seen...</td><td>I have never seen...</td></tr>
                <tr><td>Rarely</td><td>Rarely <strong>does she</strong> make...</td><td>She rarely makes...</td></tr>
                <tr><td>Not only</td><td>Not only <strong>did he</strong> win...</td><td>He not only won...</td></tr>
                <tr><td>Hardly</td><td>Hardly <strong>had I</strong> arrived...</td><td>I had hardly arrived...</td></tr>
            </table>

            <div class="grammar-formula">Negatif zarf + yardımcı fiil + özne + ana fiil</div>

            <h3>Koşul Cümlelerinde Devrik Yapı</h3>
            <p><strong>Should</strong> you need help → (If you should need help)</p>
            <p><strong>Were</strong> I you → (If I were you)</p>
            <p><strong>Had</strong> she known → (If she had known)</p>

            <div class="grammar-note">
                <strong>Dikkat:</strong> Devrik yapı formal yazımda ve edebiyatta kullanılır. Günlük konuşmada nadir görülür.
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "Never ____ I seen such a beautiful view. (inversion)", answer: "have", hint: "Never + have + subject + PP." },
            { id: 2, type: "fill-blank", question: "____ he known the truth, he would have acted differently.", answer: "Had", hint: "Had + subject = If he had." },
            { id: 3, type: "writing",    question: "Rewrite using inversion: 'If you need help, call me.'", keywords: ["should","you"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "Rarely ___ she make mistakes.", options: ["do", "does", "did", "has"], answer: "does", hint: "Present → does" },
            { id: 5, type: "fill-blank", question: "Not only ____ he pass the exam, but he also got the highest mark.", answer: "did", hint: "Not only + did + subject" },
            { id: 6, type: "multiple-choice", question: "___ I you, I would accept the offer.", options: ["Was", "Were", "Am", "Had"], answer: "Were", hint: "If I were you → Were I you" },
            { id: 7, type: "fill-blank", question: "Hardly ____ she finished speaking when everyone applauded.", answer: "had", hint: "Hardly + had + subject" }
        ],
        examples: [
            { sentence: "Never have I seen such beauty.", translation: "Böyle bir güzellik hiç görmedim.", correct: true },
            { sentence: "Rarely does she make mistakes.", translation: "Nadiren hata yapar.", correct: true },
            { sentence: "Never I have seen such beauty.", translation: "Böyle bir güzellik hiç görmedim.", correct: false, note: "Devrik yapı: Never have I (yardımcı fiil özneden önce)" },
            { sentence: "Should you need anything, call me.", translation: "Bir şeye ihtiyacın olursa ara.", correct: true },
            { sentence: "Not only did he win, but he also broke a record.", translation: "Sadece kazanmadı, ayrıca rekor kırdı.", correct: true }
        ],
        test: [
            { id: 1, question: "Never ___ I experienced such kindness.", options: ["have", "has", "did", "do"], answer: 0 },
            { id: 2, question: "___ he known earlier, he would have helped.", options: ["If", "Had", "Would", "Did"], answer: 1 },
            { id: 3, question: "Rarely ___ we see such talent.", options: ["do", "does", "did", "have"], answer: 0 },
            { id: 4, question: "Not only ___ she sing, but she also dances.", options: ["do", "does", "did", "can"], answer: 1 },
            { id: 5, question: "___ I you, I'd take the job.", options: ["Was", "Am", "Were", "If"], answer: 2 }
        ]
    },
    {
        id: "c1-subjunctive",
        level: "C1",
        title: "Subjunctive Mood (Dilek Kipi)",
        description: "Resmi öneri, dilek ve zorunluluk ifadelerinde kullanılır.",
        content: `
            <h3>Yapı</h3>
            <table class="grammar-rule-table">
                <tr><th>Kalıp</th><th>Örnek</th></tr>
                <tr><td>It is essential/vital that + S + <strong>V (yalın)</strong></td><td>It is vital that he <strong>be</strong> present.</td></tr>
                <tr><td>I suggest/recommend that + S + <strong>V (yalın)</strong></td><td>I suggest that she <strong>leave</strong> early.</td></tr>
                <tr><td>The committee demands that + S + <strong>V (yalın)</strong></td><td>...that she <strong>resign</strong>.</td></tr>
            </table>

            <div class="grammar-formula">...that + Özne + Fiil (yalın — 3. şahıs -s ALMAZ)</div>

            <div class="grammar-note">
                <strong>Dikkat:</strong> Subjunctive'de "be" her zaman "be"dir → "It is vital that he <strong>be</strong> present" (not "is"). Olumsuzda: "...that he <strong>not go</strong>" (not "doesn't go")
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "It is essential that every student ____ (submit) the form.", answer: "submit", hint: "Subjunctive: 3. şahıs -s almaz." },
            { id: 2, type: "true-false", question: "The doctor recommended that she rests more. (Doğru mu?)", options: ["True","False"], answer: "False", hint: "'rest' (yalın hal) kullanılmalı." },
            { id: 3, type: "writing",    question: "Write a sentence: 'It is vital that...'", keywords: ["vital","that"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "I suggest that he ___ on time.", options: ["comes", "come", "came", "coming"], answer: "come", hint: "Subjunctive: yalın fiil" },
            { id: 5, type: "fill-blank", question: "It is important that she ____ (be) there by noon.", answer: "be", hint: "Subjunctive: be (not is)" },
            { id: 6, type: "multiple-choice", question: "The board demands that the CEO ___.", options: ["resigns", "resign", "resigned", "resigning"], answer: "resign", hint: "Subjunctive: yalın fiil" },
            { id: 7, type: "fill-blank", question: "I recommend that he ____ (not/go) alone.", answer: "not go", hint: "Olumsuz: not + yalın fiil" }
        ],
        examples: [
            { sentence: "It is vital that he be present.", translation: "Orada bulunması hayati önem taşır.", correct: true },
            { sentence: "It is vital that he is present.", translation: "Orada bulunması hayati önem taşır.", correct: false, note: "Subjunctive → 'be' kullanılır, 'is' değil" },
            { sentence: "The committee demands that she resign.", translation: "Komite istifa etmesini talep ediyor.", correct: true },
            { sentence: "I suggest that we leave early.", translation: "Erken ayrılmamızı öneririm.", correct: true },
            { sentence: "It is crucial that he not be late.", translation: "Geç kalmaması çok önemli.", correct: true }
        ],
        test: [
            { id: 1, question: "It is essential that she ___ the report.", options: ["submits", "submit", "submitted", "submitting"], answer: 1 },
            { id: 2, question: "I suggest that he ___ a doctor.", options: ["sees", "see", "saw", "seeing"], answer: 1 },
            { id: 3, question: "It is vital that the meeting ___ on time.", options: ["starts", "start", "started", "starting"], answer: 1 },
            { id: 4, question: "The manager insists that everyone ___ present.", options: ["is", "be", "are", "being"], answer: 1 },
            { id: 5, question: "I recommend that she ___ not go alone.", options: ["do", "does", "—", "did"], answer: 2 }
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
            <table class="grammar-rule-table">
                <tr><th>Yapı</th><th>Örnek</th><th>Vurgulanan</th></tr>
                <tr><td>It was/is + X + who/that ...</td><td>It was <strong>John</strong> who broke the window.</td><td>Kişi</td></tr>
                <tr><td>It was/is + X + that ...</td><td>It was <strong>yesterday</strong> that she called.</td><td>Zaman</td></tr>
            </table>

            <h3>Wh-cleft (Pseudo-cleft)</h3>
            <div class="grammar-formula">What + cümle + is/was + vurgulanan öğe</div>
            <p><strong>What I need</strong> is a long holiday.</p>
            <p><strong>What surprised me</strong> was his calmness.</p>

            <h3>Reversed Wh-cleft</h3>
            <p>A long holiday is <strong>what I need</strong>.</p>

            <div class="grammar-note">
                <strong>Ne zaman kullanılır?</strong> Akademik yazımda, edebiyatta ve belirli bir öğeyi vurgulamak istediğinizde.
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "It was the noise ____ woke me up.", answer: "that", hint: "It-cleft: It was ... that ..." },
            { id: 2, type: "fill-blank", question: "____ I love most about England is the weather.", answer: "What", hint: "Wh-cleft: What + clause + is ..." },
            { id: 3, type: "writing",    question: "Rewrite emphasising 'the music': 'The music made her cry.'", keywords: ["it","that"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "It ___ Mary who found the answer.", options: ["is", "was", "were", "has"], answer: "was", hint: "It-cleft: It was + kişi + who" },
            { id: 5, type: "fill-blank", question: "What surprised me ____ his reaction.", answer: "was", hint: "Wh-cleft: What + clause + was" },
            { id: 6, type: "multiple-choice", question: "___ I want is some peace and quiet.", options: ["That", "Which", "What", "It"], answer: "What", hint: "Wh-cleft: What + I want + is" },
            { id: 7, type: "fill-blank", question: "It was in Paris ____ they first met.", answer: "that", hint: "It-cleft: It was + yer + that" }
        ],
        examples: [
            { sentence: "It was John who broke the window.", translation: "Pencereyi kıran John'du.", correct: true },
            { sentence: "What I need is a long holiday.", translation: "İhtiyacım olan uzun bir tatil.", correct: true },
            { sentence: "It was yesterday when she called.", translation: "Dün aradı.", correct: false, note: "It-cleft'te 'that' kullanılır → It was yesterday that she called." },
            { sentence: "What surprised me was his calmness.", translation: "Beni şaşırtan şey sakinliğiydi.", correct: true },
            { sentence: "A long holiday is what I need.", translation: "Uzun bir tatil tam ihtiyacım olan şey.", correct: true }
        ],
        test: [
            { id: 1, question: "It was ___ who helped me.", options: ["she", "her", "hers", "herself"], answer: 0 },
            { id: 2, question: "___ I really want is a cup of tea.", options: ["That", "Which", "What", "It"], answer: 2 },
            { id: 3, question: "It was in London ___ the event took place.", options: ["where", "which", "that", "when"], answer: 2 },
            { id: 4, question: "___ annoys me is the constant noise.", options: ["That", "It", "What", "Which"], answer: 2 },
            { id: 5, question: "It ___ the children who ate the cake.", options: ["is", "was", "were", "has"], answer: 1 }
        ]
    },
    {
        id: "c2-discourse-markers",
        level: "C2",
        title: "Advanced Discourse Markers",
        description: "Akademik ve ileri yazımda bağlantı ifadeleri.",
        content: `
            <table class="grammar-rule-table">
                <tr><th>Kategori</th><th>Marker</th><th>Örnek</th></tr>
                <tr><td>Zıtlık</td><td>nevertheless, nonetheless</td><td>The evidence is weak; <strong>nevertheless</strong>, the jury convicted him.</td></tr>
                <tr><td>Zıtlık</td><td>notwithstanding</td><td><strong>Notwithstanding</strong> the risks, she proceeded.</td></tr>
                <tr><td>Taviz</td><td>admittedly, granted</td><td><strong>Admittedly</strong>, the plan has flaws.</td></tr>
                <tr><td>Sonuç</td><td>hence, thereby, consequently</td><td>Prices rose; <strong>hence</strong> demand fell.</td></tr>
                <tr><td>Ekleme</td><td>furthermore, moreover</td><td><strong>Furthermore</strong>, the data supports our theory.</td></tr>
            </table>

            <div class="grammar-formula">Cümle 1; discourse marker, Cümle 2</div>

            <div class="grammar-note">
                <strong>Dikkat:</strong> Discourse markers genellikle virgülle ayrılır. Cümle başında veya iki cümle arasında (noktalı virgülden sonra) kullanılır.
            </div>
        `,
        exercises: [
            { id: 1, type: "fill-blank", question: "The results were inconclusive; ____, the study was published.", answer: "nevertheless", hint: "Zıtlık için nevertheless." },
            { id: 2, type: "fill-blank", question: "He failed the test, ____ losing his scholarship.", answer: "thereby", hint: "Sonuç: thereby + -ing" },
            { id: 3, type: "writing",    question: "Write two sentences connected with 'notwithstanding'.", keywords: ["notwithstanding"], answer: "check-keywords" },
            { id: 4, type: "multiple-choice", question: "The plan has risks; ___, we should proceed.", options: ["nevertheless", "thereby", "hence", "admittedly"], answer: "nevertheless", hint: "Zıtlık → nevertheless" },
            { id: 5, type: "fill-blank", question: "____, the theory is not perfect, but it is the best we have.", answer: "Admittedly", hint: "Taviz → Admittedly" },
            { id: 6, type: "multiple-choice", question: "Costs increased; ___, profits fell.", options: ["nevertheless", "hence", "admittedly", "notwithstanding"], answer: "hence", hint: "Sonuç → hence" },
            { id: 7, type: "fill-blank", question: "The experiment was a success; ____, it opened new research areas.", answer: "furthermore", hint: "Ekleme → furthermore" }
        ],
        examples: [
            { sentence: "The evidence is weak; nevertheless, the jury convicted him.", translation: "Kanıtlar zayıf; yine de jüri onu mahkum etti.", correct: true },
            { sentence: "Notwithstanding the risks, she proceeded.", translation: "Risklere rağmen devam etti.", correct: true },
            { sentence: "Admittedly, the plan has flaws.", translation: "Kabul etmek gerekir ki, planın kusurları var.", correct: true },
            { sentence: "Prices rose, hence demand fell.", translation: "Fiyatlar arttı, dolayısıyla talep düştü.", correct: true },
            { sentence: "He failed the test, thereby losing his scholarship.", translation: "Sınavda başarısız oldu, böylece bursunu kaybetti.", correct: true }
        ],
        test: [
            { id: 1, question: "The data is limited; ___, it provides useful insights.", options: ["hence", "thereby", "nevertheless", "admittedly"], answer: 2 },
            { id: 2, question: "___ the difficulties, the team succeeded.", options: ["Nevertheless", "Hence", "Notwithstanding", "Thereby"], answer: 2 },
            { id: 3, question: "She resigned, ___ ending her 20-year career.", options: ["nevertheless", "hence", "thereby", "admittedly"], answer: 2 },
            { id: 4, question: "The method is flawed; ___, we need a new approach.", options: ["thereby", "hence", "notwithstanding", "admittedly"], answer: 1 },
            { id: 5, question: "___, the results were disappointing.", options: ["Hence", "Thereby", "Notwithstanding", "Admittedly"], answer: 3 }
        ]
    }
];
