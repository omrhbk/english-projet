/**
 * Spaced Repetition System — SM-2 Algoritması
 * Anki ile aynı temel algoritma:
 *   - Her kelime için: interval (gün), easeFactor (başlangıç 2.5), repetitions sayısı
 *   - Kullanıcı kalite verirse (0-5): 0-2 = yanlış/zor, 3-5 = doğru/kolay
 *   - Due date geçmiş kelimeler önce gösterilir
 */

const SRS_KEY = 'srs_cards';

/** Bir kartın varsayılan SRS verisi */
function defaultCard(wordId) {
    return {
        wordId,
        interval: 1,        // gün
        easeFactor: 2.5,    // başlangıç kolaylık faktörü
        repetitions: 0,     // art arda doğru sayısı
        dueDate: new Date().toISOString().split('T')[0], // bugün
        lastReviewed: null
    };
}

/** LocalStorage'dan tüm SRS kartlarını yükle */
function loadCards() {
    try {
        return JSON.parse(localStorage.getItem(SRS_KEY) || '{}');
    } catch {
        return {};
    }
}

/** LocalStorage'a kaydet */
function saveCards(cards) {
    localStorage.setItem(SRS_KEY, JSON.stringify(cards));
}

/**
 * SM-2 güncelleme formülü
 * @param {object} card - mevcut kart verisi
 * @param {number} quality - 0-5 (0=tamamen yanlış, 3=doğru zor, 5=mükemmel)
 * @returns {object} güncellenmiş kart
 */
export function sm2Update(card, quality) {
    let { interval, easeFactor, repetitions } = card;

    if (quality >= 3) {
        // Doğru cevap
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions++;
    } else {
        // Yanlış cevap — baştan
        repetitions = 0;
        interval = 1;
    }

    // Ease factor güncelle (minimum 1.3)
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

    // Sonraki tekrar tarihi
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + interval);
    const dueDateStr = dueDate.toISOString().split('T')[0];

    return {
        ...card,
        interval,
        easeFactor: parseFloat(easeFactor.toFixed(2)),
        repetitions,
        dueDate: dueDateStr,
        lastReviewed: new Date().toISOString().split('T')[0]
    };
}

/** Bir kelimeyi gözden geçir ve SM-2 ile güncelle */
export function reviewWord(wordId, quality) {
    const cards = loadCards();
    const card = cards[wordId] || defaultCard(wordId);
    cards[wordId] = sm2Update(card, quality);
    saveCards(cards);
    return cards[wordId];
}

/** Bugün tekrar edilmesi gereken kelimelerin ID listesi */
export function getDueWords(allWordIds) {
    const cards = loadCards();
    const today = new Date().toISOString().split('T')[0];

    return allWordIds.filter(id => {
        const card = cards[id];
        if (!card) return true; // Hiç çalışılmamış = due
        return card.dueDate <= today;
    });
}

/** Bir kelimenin SRS verisini getir */
export function getCardData(wordId) {
    const cards = loadCards();
    return cards[wordId] || defaultCard(wordId);
}

/** Tüm kartların istatistikleri */
export function getSRSStats(allWordIds) {
    const cards = loadCards();
    const today = new Date().toISOString().split('T')[0];

    let due = 0, learning = 0, mastered = 0, newCards = 0;

    allWordIds.forEach(id => {
        const card = cards[id];
        if (!card) {
            newCards++;
        } else if (card.repetitions >= 5 && card.interval > 21) {
            mastered++;
        } else if (card.dueDate <= today) {
            due++;
        } else {
            learning++;
        }
    });

    return { due, learning, mastered, newCards, total: allWordIds.length };
}
