/**
 * Word Families Module — Kelime Aileleri
 * Kelime turetme: kok kelimeden turetilmis formlari ogrenme (act -> action, active, activity, actor)
 * Uc mod: Goz At (agac gorunumu), Quiz (4 secenekli), Bosluk Doldurma
 * XP: dogru cevap basina +10 XP
 */

import { getCEFRBadgeHTML, fisherYatesShuffle } from '../core/utils.js';
import { showToast } from '../features/toast.js';

// ── Word Families Data (25+ families, A1-B2) ────────────────────────────────
const wordFamiliesData = [
    // ─── A1 — Temel Kelime Aileleri ──────────────────────────────
    {
        root: 'act',
        meaning: 'hareket etmek, rol yapmak',
        level: 'A1',
        members: [
            { word: 'action',   type: 'noun', meaning: 'eylem, hareket',       suffix: '-tion' },
            { word: 'active',   type: 'adj',  meaning: 'aktif, hareketli',     suffix: '-ive' },
            { word: 'actively', type: 'adv',  meaning: 'aktif olarak',         suffix: '-ive + -ly' },
            { word: 'activity', type: 'noun', meaning: 'aktivite, etkinlik',   suffix: '-ivity' },
            { word: 'actor',    type: 'noun', meaning: 'oyuncu, aktor',        suffix: '-or' }
        ]
    },
    {
        root: 'help',
        meaning: 'yardim etmek',
        level: 'A1',
        members: [
            { word: 'helper',    type: 'noun', meaning: 'yardimci',             suffix: '-er' },
            { word: 'helpful',   type: 'adj',  meaning: 'yardimsever, faydali', suffix: '-ful' },
            { word: 'helpfully', type: 'adv',  meaning: 'yardimci bir sekilde', suffix: '-ful + -ly' },
            { word: 'helpless',  type: 'adj',  meaning: 'caresiz',              suffix: '-less' }
        ]
    },
    {
        root: 'play',
        meaning: 'oynamak',
        level: 'A1',
        members: [
            { word: 'player',    type: 'noun', meaning: 'oyuncu',             suffix: '-er' },
            { word: 'playful',   type: 'adj',  meaning: 'oyuncu, sakaci',     suffix: '-ful' },
            { word: 'playfully', type: 'adv',  meaning: 'oyuncu bir sekilde', suffix: '-ful + -ly' },
            { word: 'playground', type: 'noun', meaning: 'oyun alani',        suffix: '-ground' }
        ]
    },
    {
        root: 'work',
        meaning: 'calismak',
        level: 'A1',
        members: [
            { word: 'worker',    type: 'noun', meaning: 'isci, calisan',        suffix: '-er' },
            { word: 'working',   type: 'adj',  meaning: 'calisan, is ile ilgili', suffix: '-ing' },
            { word: 'workplace', type: 'noun', meaning: 'is yeri',              suffix: '-place' },
            { word: 'workable',  type: 'adj',  meaning: 'uygulanabilir',        suffix: '-able' }
        ]
    },
    {
        root: 'teach',
        meaning: 'ogretmek',
        level: 'A1',
        members: [
            { word: 'teacher',  type: 'noun', meaning: 'ogretmen',             suffix: '-er' },
            { word: 'teaching', type: 'noun', meaning: 'ogretim, ogretmenlik', suffix: '-ing' }
        ]
    },
    // ─── A2 — Temel-Orta Kelime Aileleri ──────────────────────────
    {
        root: 'create',
        meaning: 'yaratmak, olusturmak',
        level: 'A2',
        members: [
            { word: 'creation',    type: 'noun', meaning: 'yaratim, eser',            suffix: '-tion' },
            { word: 'creative',    type: 'adj',  meaning: 'yaratici',                 suffix: '-ive' },
            { word: 'creatively',  type: 'adv',  meaning: 'yaratici bir sekilde',     suffix: '-ive + -ly' },
            { word: 'creativity',  type: 'noun', meaning: 'yaraticilik',              suffix: '-ivity' },
            { word: 'creator',     type: 'noun', meaning: 'yaratici, olusturucu',     suffix: '-or' }
        ]
    },
    {
        root: 'beauty',
        meaning: 'guzellik',
        level: 'A2',
        members: [
            { word: 'beautiful',   type: 'adj',  meaning: 'guzel',                  suffix: '-ful' },
            { word: 'beautifully', type: 'adv',  meaning: 'guzel bir sekilde',      suffix: '-ful + -ly' },
            { word: 'beautify',    type: 'verb', meaning: 'guzellestirmek',         suffix: '-ify' }
        ]
    },
    {
        root: 'success',
        meaning: 'basari',
        level: 'A2',
        members: [
            { word: 'successful',   type: 'adj',  meaning: 'basarili',              suffix: '-ful' },
            { word: 'successfully', type: 'adv',  meaning: 'basarili bir sekilde',  suffix: '-ful + -ly' },
            { word: 'succeed',      type: 'verb', meaning: 'basarmak',              suffix: '-eed' },
            { word: 'unsuccessful', type: 'adj',  meaning: 'basarisiz',             suffix: 'un- + -ful' }
        ]
    },
    {
        root: 'care',
        meaning: 'onem vermek, ilgilenmek',
        level: 'A2',
        members: [
            { word: 'careful',    type: 'adj',  meaning: 'dikkatli',              suffix: '-ful' },
            { word: 'carefully',  type: 'adv',  meaning: 'dikkatli bir sekilde',  suffix: '-ful + -ly' },
            { word: 'careless',   type: 'adj',  meaning: 'dikkatsiz',             suffix: '-less' },
            { word: 'carelessly', type: 'adv',  meaning: 'dikkatsizce',           suffix: '-less + -ly' }
        ]
    },
    {
        root: 'friend',
        meaning: 'arkadas',
        level: 'A2',
        members: [
            { word: 'friendly',    type: 'adj',  meaning: 'arkadas canisi',        suffix: '-ly' },
            { word: 'friendship',  type: 'noun', meaning: 'arkadaslik',            suffix: '-ship' },
            { word: 'unfriendly',  type: 'adj',  meaning: 'sogukkanlı, mesafeli',  suffix: 'un- + -ly' }
        ]
    },
    {
        root: 'happy',
        meaning: 'mutlu',
        level: 'A2',
        members: [
            { word: 'happiness',  type: 'noun', meaning: 'mutluluk',              suffix: '-ness' },
            { word: 'happily',    type: 'adv',  meaning: 'mutlu bir sekilde',     suffix: '-ly' },
            { word: 'unhappy',    type: 'adj',  meaning: 'mutsuz',                suffix: 'un-' },
            { word: 'unhappily',  type: 'adv',  meaning: 'mutsuz bir sekilde',    suffix: 'un- + -ly' }
        ]
    },
    // ─── B1 — Orta Duzey Kelime Aileleri ──────────────────────────
    {
        root: 'educate',
        meaning: 'egitmek',
        level: 'B1',
        members: [
            { word: 'education',    type: 'noun', meaning: 'egitim',              suffix: '-tion' },
            { word: 'educational',  type: 'adj',  meaning: 'egitimsel',           suffix: '-tion + -al' },
            { word: 'educator',     type: 'noun', meaning: 'egitimci',            suffix: '-or' },
            { word: 'uneducated',   type: 'adj',  meaning: 'egitimsiz',           suffix: 'un- + -ed' }
        ]
    },
    {
        root: 'employ',
        meaning: 'istihdam etmek, calıstirmak',
        level: 'B1',
        members: [
            { word: 'employment',   type: 'noun', meaning: 'istihdam, is',         suffix: '-ment' },
            { word: 'employee',     type: 'noun', meaning: 'calisan',              suffix: '-ee' },
            { word: 'employer',     type: 'noun', meaning: 'isveren',              suffix: '-er' },
            { word: 'unemployment', type: 'noun', meaning: 'issizlik',             suffix: 'un- + -ment' }
        ]
    },
    {
        root: 'decide',
        meaning: 'karar vermek',
        level: 'B1',
        members: [
            { word: 'decision',   type: 'noun', meaning: 'karar',              suffix: '-sion' },
            { word: 'decisive',   type: 'adj',  meaning: 'kararlı',            suffix: '-sive' },
            { word: 'indecisive', type: 'adj',  meaning: 'kararsiz',           suffix: 'in- + -sive' }
        ]
    },
    {
        root: 'inform',
        meaning: 'bilgilendirmek',
        level: 'B1',
        members: [
            { word: 'information', type: 'noun', meaning: 'bilgi',                suffix: '-ation' },
            { word: 'informative', type: 'adj',  meaning: 'bilgilendirici',       suffix: '-ative' },
            { word: 'informer',    type: 'noun', meaning: 'muhbir, haber veren',  suffix: '-er' },
            { word: 'misinform',   type: 'verb', meaning: 'yanlis bilgilendirmek', suffix: 'mis-' }
        ]
    },
    {
        root: 'agree',
        meaning: 'ayni fikirde olmak, katilmak',
        level: 'B1',
        members: [
            { word: 'agreement',   type: 'noun', meaning: 'anlasma, mutabakat',   suffix: '-ment' },
            { word: 'agreeable',   type: 'adj',  meaning: 'hos, uyumlu',          suffix: '-able' },
            { word: 'disagree',    type: 'verb', meaning: 'ayni fikirde olmamak',  suffix: 'dis-' },
            { word: 'disagreement', type: 'noun', meaning: 'anlasamazlik',        suffix: 'dis- + -ment' }
        ]
    },
    {
        root: 'collect',
        meaning: 'toplamak, biriktirmek',
        level: 'B1',
        members: [
            { word: 'collection', type: 'noun', meaning: 'koleksiyon, toplama',  suffix: '-tion' },
            { word: 'collective', type: 'adj',  meaning: 'toplu, kolektif',      suffix: '-ive' },
            { word: 'collector',  type: 'noun', meaning: 'koleksiyoncu',         suffix: '-or' }
        ]
    },
    {
        root: 'depend',
        meaning: 'bagimli olmak, guvenip dayanmak',
        level: 'B1',
        members: [
            { word: 'dependence',  type: 'noun', meaning: 'bagimlilik',            suffix: '-ence' },
            { word: 'dependent',   type: 'adj',  meaning: 'bagimli',               suffix: '-ent' },
            { word: 'independent', type: 'adj',  meaning: 'bagimsiz',              suffix: 'in- + -ent' },
            { word: 'independence', type: 'noun', meaning: 'bagimsizlik',          suffix: 'in- + -ence' }
        ]
    },
    // ─── B2 — Ust Orta Duzey Kelime Aileleri ──────────────────────
    {
        root: 'communicate',
        meaning: 'iletisim kurmak',
        level: 'B2',
        members: [
            { word: 'communication', type: 'noun', meaning: 'iletisim',               suffix: '-tion' },
            { word: 'communicative', type: 'adj',  meaning: 'iletisimsel, konuskan',  suffix: '-ive' },
            { word: 'communicator',  type: 'noun', meaning: 'iletisimci',             suffix: '-or' }
        ]
    },
    {
        root: 'produce',
        meaning: 'uretmek',
        level: 'B2',
        members: [
            { word: 'production',  type: 'noun', meaning: 'uretim',                suffix: '-tion' },
            { word: 'productive',  type: 'adj',  meaning: 'verimli, uretken',      suffix: '-ive' },
            { word: 'productively', type: 'adv', meaning: 'verimli bir sekilde',   suffix: '-ive + -ly' },
            { word: 'productivity', type: 'noun', meaning: 'verimlilik',           suffix: '-ivity' },
            { word: 'producer',    type: 'noun', meaning: 'yapimci, uretici',      suffix: '-er' },
            { word: 'product',     type: 'noun', meaning: 'urun',                  suffix: '-uct' }
        ]
    },
    {
        root: 'compete',
        meaning: 'rekabet etmek, yarismak',
        level: 'B2',
        members: [
            { word: 'competition',  type: 'noun', meaning: 'rekabet, yarisma',      suffix: '-tion' },
            { word: 'competitive',  type: 'adj',  meaning: 'rekabetci',             suffix: '-ive' },
            { word: 'competitor',   type: 'noun', meaning: 'rakip',                 suffix: '-or' },
            { word: 'competitively', type: 'adv', meaning: 'rekabetci bir sekilde', suffix: '-ive + -ly' }
        ]
    },
    {
        root: 'imagine',
        meaning: 'hayal etmek',
        level: 'B2',
        members: [
            { word: 'imagination',  type: 'noun', meaning: 'hayal gucu',              suffix: '-tion' },
            { word: 'imaginative',  type: 'adj',  meaning: 'hayal gucu kuvvetli',    suffix: '-ive' },
            { word: 'imaginary',    type: 'adj',  meaning: 'hayali, dusunsel',        suffix: '-ary' },
            { word: 'unimaginable', type: 'adj',  meaning: 'hayal edilemez',          suffix: 'un- + -able' }
        ]
    },
    {
        root: 'organize',
        meaning: 'organize etmek, duzenlemek',
        level: 'B2',
        members: [
            { word: 'organization', type: 'noun', meaning: 'organizasyon, kurum',    suffix: '-tion' },
            { word: 'organizational', type: 'adj', meaning: 'organizasyonel',        suffix: '-tion + -al' },
            { word: 'organizer',    type: 'noun', meaning: 'organizator',            suffix: '-er' },
            { word: 'disorganized', type: 'adj',  meaning: 'duzensiz, dagitik',      suffix: 'dis- + -ed' }
        ]
    },
    {
        root: 'attract',
        meaning: 'cekmek, cezbetmek',
        level: 'B2',
        members: [
            { word: 'attraction',  type: 'noun', meaning: 'cazibe, cekim',           suffix: '-tion' },
            { word: 'attractive',  type: 'adj',  meaning: 'cekici',                  suffix: '-ive' },
            { word: 'attractively', type: 'adv', meaning: 'cekici bir sekilde',      suffix: '-ive + -ly' },
            { word: 'unattractive', type: 'adj', meaning: 'cekici olmayan',          suffix: 'un- + -ive' }
        ]
    },
    {
        root: 'suggest',
        meaning: 'onermek, teklif etmek',
        level: 'B2',
        members: [
            { word: 'suggestion',  type: 'noun', meaning: 'oneri, teklif',           suffix: '-tion' },
            { word: 'suggestive',  type: 'adj',  meaning: 'ima eden, cagristiran',   suffix: '-ive' }
        ]
    }
];

// ── Suffix Legend Data ───────────────────────────────────────────────────────
const suffixLegend = [
    { suffix: '-tion / -sion', meaning: 'Fiilden isim yapar',          example: 'act -> action' },
    { suffix: '-ment',         meaning: 'Fiilden isim yapar',          example: 'employ -> employment' },
    { suffix: '-ness',         meaning: 'Sifattan isim yapar',         example: 'happy -> happiness' },
    { suffix: '-ity / -ivity', meaning: 'Sifattan isim yapar',         example: 'creative -> creativity' },
    { suffix: '-er / -or',     meaning: 'Yapan kisi (isim)',           example: 'act -> actor' },
    { suffix: '-ee',           meaning: 'Yapilan kisi (isim)',         example: 'employ -> employee' },
    { suffix: '-ful',          meaning: 'Dolu, sahip (sifat)',         example: 'help -> helpful' },
    { suffix: '-less',         meaning: 'Siz, -sizin (sifat)',        example: 'help -> helpless' },
    { suffix: '-ive',          meaning: 'Nitelik bildiren sifat',      example: 'act -> active' },
    { suffix: '-able / -ible', meaning: 'Yapilabilir (sifat)',         example: 'agree -> agreeable' },
    { suffix: '-al',           meaning: 'Ile ilgili (sifat)',          example: 'education -> educational' },
    { suffix: '-ous',          meaning: 'Nitelik bildiren sifat',      example: 'danger -> dangerous' },
    { suffix: '-ly',           meaning: 'Sifattan zarf yapar',         example: 'careful -> carefully' },
    { suffix: '-ify',          meaning: 'Isimden fiil yapar',          example: 'beauty -> beautify' },
    { suffix: 'un- / in- / dis-', meaning: 'Olumsuzluk oneki',        example: 'happy -> unhappy' }
];

// ── Type Colors ──────────────────────────────────────────────────────────────
const TYPE_COLORS = {
    noun: { bg: '#3498db', label: 'isim' },
    verb: { bg: '#e74c3c', label: 'fiil' },
    adj:  { bg: '#27ae60', label: 'sifat' },
    adv:  { bg: '#9b59b6', label: 'zarf' }
};

// ── Fill-in Sentences ────────────────────────────────────────────────────────
const fillInSentences = [
    { root: 'act',         target: 'action',       type: 'noun', sentence: 'We need to take _____ immediately to solve this problem.' },
    { root: 'act',         target: 'active',       type: 'adj',  sentence: 'She is very _____ in class and always participates.' },
    { root: 'act',         target: 'activity',     type: 'noun', sentence: 'Swimming is my favourite outdoor _____.' },
    { root: 'act',         target: 'actor',        type: 'noun', sentence: 'He is a famous _____ who has starred in many films.' },
    { root: 'create',      target: 'creation',     type: 'noun', sentence: 'The _____ of this painting took three months.' },
    { root: 'create',      target: 'creative',     type: 'adj',  sentence: 'She is very _____ and always comes up with new ideas.' },
    { root: 'create',      target: 'creativity',   type: 'noun', sentence: 'This job requires a lot of _____ and imagination.' },
    { root: 'educate',     target: 'education',    type: 'noun', sentence: '_____ is the key to a better future.' },
    { root: 'educate',     target: 'educational',  type: 'adj',  sentence: 'This is a very _____ programme for children.' },
    { root: 'employ',      target: 'employment',   type: 'noun', sentence: 'Finding _____ is difficult in this economy.' },
    { root: 'employ',      target: 'employee',     type: 'noun', sentence: 'Every _____ must attend the meeting tomorrow.' },
    { root: 'employ',      target: 'employer',     type: 'noun', sentence: 'My _____ gave me a raise this year.' },
    { root: 'employ',      target: 'unemployment', type: 'noun', sentence: '_____ is a serious problem in many countries.' },
    { root: 'decide',      target: 'decision',     type: 'noun', sentence: 'Making the right _____ is not always easy.' },
    { root: 'decide',      target: 'decisive',     type: 'adj',  sentence: 'A good leader needs to be _____ and confident.' },
    { root: 'beauty',      target: 'beautiful',    type: 'adj',  sentence: 'What a _____ sunset over the sea!' },
    { root: 'beauty',      target: 'beautifully',  type: 'adv',  sentence: 'She sang _____ at the concert last night.' },
    { root: 'success',     target: 'successful',   type: 'adj',  sentence: 'He became a very _____ businessman.' },
    { root: 'success',     target: 'successfully', type: 'adv',  sentence: 'They _____ completed the project on time.' },
    { root: 'success',     target: 'succeed',      type: 'verb', sentence: 'If you work hard, you will _____ in life.' },
    { root: 'help',        target: 'helpful',      type: 'adj',  sentence: 'The staff at the hotel were very _____.' },
    { root: 'help',        target: 'helpless',     type: 'adj',  sentence: 'The little kitten looked _____ in the rain.' },
    { root: 'care',        target: 'careful',      type: 'adj',  sentence: 'Be _____ when you cross the road.' },
    { root: 'care',        target: 'careless',     type: 'adj',  sentence: 'His _____ driving caused the accident.' },
    { root: 'happy',       target: 'happiness',    type: 'noun', sentence: '_____ is more important than money.' },
    { root: 'agree',       target: 'agreement',    type: 'noun', sentence: 'They finally reached an _____ after long discussions.' },
    { root: 'agree',       target: 'disagree',     type: 'verb', sentence: 'I _____ with your opinion on this matter.' },
    { root: 'inform',      target: 'information',  type: 'noun', sentence: 'Can you give me some _____ about the course?' },
    { root: 'depend',      target: 'independent',  type: 'adj',  sentence: 'She is very _____ and likes to do things on her own.' },
    { root: 'depend',      target: 'dependence',   type: 'noun', sentence: 'Drug _____ is a serious health issue.' },
    { root: 'imagine',     target: 'imagination',  type: 'noun', sentence: 'Children have a wonderful _____.' },
    { root: 'imagine',     target: 'imaginative',  type: 'adj',  sentence: 'She is an _____ writer who creates fantastic worlds.' },
    { root: 'produce',     target: 'production',   type: 'noun', sentence: 'The _____ of electric cars has increased rapidly.' },
    { root: 'produce',     target: 'productive',   type: 'adj',  sentence: 'It was a very _____ meeting and we made many decisions.' },
    { root: 'compete',     target: 'competition',  type: 'noun', sentence: 'She won first place in the swimming _____.' },
    { root: 'compete',     target: 'competitive',  type: 'adj',  sentence: 'The market is very _____ and prices keep dropping.' },
    { root: 'attract',     target: 'attractive',   type: 'adj',  sentence: 'The city centre is very _____ with its old buildings.' },
    { root: 'attract',     target: 'attraction',   type: 'noun', sentence: 'The Eiffel Tower is a famous tourist _____.' },
    { root: 'organize',    target: 'organization', type: 'noun', sentence: 'This _____ helps children in need around the world.' },
    { root: 'communicate', target: 'communication', type: 'noun', sentence: 'Good _____ is essential in a relationship.' },
    { root: 'friend',      target: 'friendship',   type: 'noun', sentence: 'Their _____ has lasted for over twenty years.' },
    { root: 'friend',      target: 'friendly',     type: 'adj',  sentence: 'The people in this town are very _____.' },
    { root: 'suggest',     target: 'suggestion',   type: 'noun', sentence: 'Thank you for your _____, I will think about it.' },
    { root: 'collect',     target: 'collection',   type: 'noun', sentence: 'He has an impressive stamp _____ from around the world.' },
    { root: 'work',        target: 'worker',       type: 'noun', sentence: 'Every _____ in the factory wears a safety helmet.' },
    { root: 'teach',       target: 'teacher',      type: 'noun', sentence: 'Our English _____ is very kind and patient.' },
    { root: 'play',        target: 'player',       type: 'noun', sentence: 'He is the best _____ on the football team.' }
];

// ── State ────────────────────────────────────────────────────────────────────
let currentView = 'browse';        // browse | quiz | fillin
let activeLevel = 'all';           // all | A1 | A2 | B1 | B2
let showLegend = false;
let quizState = null;
let fillState = null;

const QUIZ_TOTAL = 10;
const FILL_TOTAL = 10;

// ── Main Entry Point ─────────────────────────────────────────────────────────
export function initWordFamilies() {
    currentView = 'browse';
    activeLevel = 'all';
    showLegend = false;
    quizState = null;
    fillState = null;
    renderModule();
}

function getContainer() {
    return document.getElementById('app');
}

// ── Inject Scoped Styles ─────────────────────────────────────────────────────
function injectStyles() {
    if (document.getElementById('wf-styles')) return;
    const style = document.createElement('style');
    style.id = 'wf-styles';
    style.textContent = `
        /* ── Module Container ──────────────────────────── */
        .wf-module {
            max-width: 960px;
            margin: 0 auto;
            padding: 0.5rem;
        }
        .wf-header {
            text-align: center;
            margin-bottom: 1.5rem;
        }
        .wf-header h2 {
            margin: 0 0 0.25rem;
            font-size: 1.4rem;
        }
        .wf-header p {
            color: var(--text-light, #999);
            margin: 0;
            font-size: 0.9rem;
        }

        /* ── Tab Bar ───────────────────────────────────── */
        .wf-tabs {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            justify-content: center;
        }

        /* ── Level Filters ─────────────────────────────── */
        .wf-level-filters {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;
            justify-content: center;
        }

        /* ── Family Tree Card ──────────────────────────── */
        .wf-tree-card {
            background: var(--card-bg, rgba(255,255,255,0.04));
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: var(--shadow, 0 2px 12px rgba(0,0,0,0.15));
            transition: transform 0.2s;
            position: relative;
            overflow: hidden;
        }
        .wf-tree-card:hover {
            transform: translateY(-2px);
        }
        .wf-tree-root {
            text-align: center;
            margin-bottom: 1rem;
        }
        .wf-tree-root-word {
            display: inline-block;
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--primary, #4a90e2);
            background: rgba(74, 144, 226, 0.12);
            padding: 0.5rem 1.25rem;
            border-radius: 25px;
            border: 2px solid var(--primary, #4a90e2);
        }
        .wf-tree-meaning {
            display: block;
            margin-top: 0.4rem;
            font-size: 0.85rem;
            color: var(--text-light, #999);
            font-style: italic;
        }
        .wf-tree-connector {
            width: 2px;
            height: 16px;
            background: var(--border-color, rgba(255,255,255,0.15));
            margin: 0 auto;
        }
        .wf-tree-members {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            justify-content: center;
            margin-top: 0.75rem;
        }
        .wf-member-chip {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;
            padding: 0.5rem 0.75rem;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            border: 2px solid;
            min-width: 90px;
            transition: transform 0.15s;
        }
        .wf-member-chip:hover {
            transform: scale(1.05);
        }
        .wf-member-word {
            font-size: 0.95rem;
        }
        .wf-member-info {
            font-size: 0.7rem;
            font-weight: 400;
            opacity: 0.8;
        }
        .wf-member-suffix {
            font-size: 0.65rem;
            font-weight: 500;
            opacity: 0.7;
            font-style: italic;
        }

        /* Type-based chip colors */
        .wf-chip-noun {
            border-color: #3498db;
            background: rgba(52, 152, 219, 0.1);
            color: #3498db;
        }
        .wf-chip-verb {
            border-color: #e74c3c;
            background: rgba(231, 76, 60, 0.1);
            color: #e74c3c;
        }
        .wf-chip-adj {
            border-color: #27ae60;
            background: rgba(39, 174, 96, 0.1);
            color: #27ae60;
        }
        .wf-chip-adv {
            border-color: #9b59b6;
            background: rgba(155, 89, 182, 0.1);
            color: #9b59b6;
        }

        /* ── Browse Grid ───────────────────────────────── */
        .wf-browse-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.25rem;
        }

        /* ── Suffix Legend ─────────────────────────────── */
        .wf-legend {
            background: var(--card-bg, rgba(255,255,255,0.04));
            border-radius: 12px;
            padding: 1rem 1.25rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow, 0 2px 12px rgba(0,0,0,0.15));
            border: 1px solid var(--border-color, rgba(255,255,255,0.1));
        }
        .wf-legend-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }
        .wf-legend-header h4 {
            margin: 0;
            font-size: 1rem;
        }
        .wf-legend-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 0.5rem;
            margin-top: 0.75rem;
        }
        .wf-legend-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.4rem 0.6rem;
            border-radius: 8px;
            background: var(--bg, rgba(0,0,0,0.15));
            font-size: 0.82rem;
        }
        .wf-legend-suffix {
            font-weight: 700;
            color: var(--primary, #4a90e2);
            min-width: 100px;
            font-family: monospace;
            font-size: 0.85rem;
        }
        .wf-legend-meaning {
            color: var(--text-light, #aaa);
            flex: 1;
        }
        .wf-legend-example {
            color: var(--text-light, #777);
            font-style: italic;
            font-size: 0.75rem;
        }

        /* ── Type Legend (inline) ──────────────────────── */
        .wf-type-legend {
            display: flex;
            gap: 0.75rem;
            justify-content: center;
            margin-bottom: 1rem;
            flex-wrap: wrap;
        }
        .wf-type-dot {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-size: 0.8rem;
            color: var(--text-light, #999);
        }
        .wf-type-dot-circle {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
        }

        /* ── Quiz / Fill-in Card ───────────────────────── */
        .wf-quiz-card {
            max-width: 600px;
            margin: 0 auto;
            background: var(--card-bg, rgba(255,255,255,0.04));
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: var(--shadow, 0 4px 20px rgba(0,0,0,0.2));
        }
        .wf-quiz-progress {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            font-size: 0.85rem;
        }
        .wf-quiz-progress-bar {
            width: 100%;
            background: var(--border-color, rgba(255,255,255,0.15));
            border-radius: 8px;
            height: 8px;
            margin-bottom: 1.25rem;
            overflow: hidden;
        }
        .wf-quiz-progress-fill {
            height: 100%;
            background: var(--primary, #4a90e2);
            border-radius: 8px;
            transition: width 0.4s;
        }
        .wf-quiz-prompt {
            text-align: center;
            margin-bottom: 1.25rem;
        }
        .wf-quiz-root-display {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary, #4a90e2);
            margin-bottom: 0.3rem;
        }
        .wf-quiz-root-meaning {
            font-size: 0.9rem;
            color: var(--text-light, #aaa);
            font-style: italic;
        }
        .wf-quiz-question-text {
            font-size: 1rem;
            margin: 1rem 0;
            line-height: 1.6;
            color: var(--text, #fff);
        }
        .wf-quiz-options {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }
        .wf-quiz-option {
            padding: 0.8rem 1rem;
            border-radius: 10px;
            border: 2px solid var(--border-color, rgba(255,255,255,0.15));
            background: var(--card-bg, rgba(255,255,255,0.04));
            color: var(--text, #fff);
            cursor: pointer;
            text-align: left;
            font-size: 0.95rem;
            transition: all 0.2s;
            font-family: inherit;
        }
        .wf-quiz-option:hover {
            border-color: var(--primary, #4a90e2);
            background: rgba(74, 144, 226, 0.08);
        }
        .wf-quiz-feedback {
            margin-top: 1rem;
            min-height: 48px;
        }

        /* ── Fill-in Input ─────────────────────────────── */
        .wf-fill-input {
            width: 100%;
            padding: 0.7rem 0.85rem;
            border: 2px solid var(--border-color, rgba(255,255,255,0.15));
            border-radius: 10px;
            font-size: 1rem;
            font-family: inherit;
            background: var(--input-bg, rgba(255,255,255,0.06));
            color: var(--text, #fff);
            transition: border-color 0.2s, box-shadow 0.2s;
            box-sizing: border-box;
        }
        .wf-fill-input:focus {
            outline: none;
            border-color: var(--primary, #4a90e2);
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
        }
        .wf-fill-hint {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-bottom: 0.75rem;
            font-size: 0.85rem;
            color: var(--text-light, #aaa);
            flex-wrap: wrap;
        }

        /* ── Results ───────────────────────────────────── */
        .wf-results {
            text-align: center;
            padding: 2rem 1rem;
        }
        .wf-results-emoji {
            font-size: 3rem;
            margin-bottom: 0.75rem;
        }
        .wf-results h2 {
            margin-bottom: 0.5rem;
        }
        .wf-results-stats {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin: 1.5rem 0;
        }
        .wf-stat {
            background: var(--card-bg, rgba(255,255,255,0.04));
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: var(--shadow, 0 2px 12px rgba(0,0,0,0.15));
            min-width: 100px;
        }
        .wf-stat-num {
            font-size: 1.8rem;
            font-weight: 700;
            display: block;
        }
        .wf-stat-label {
            font-size: 0.8rem;
            color: var(--text-light, #999);
        }
        .wf-results-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1.5rem;
        }

        /* ── Filter Info ───────────────────────────────── */
        .wf-filter-info {
            text-align: center;
            font-size: 0.85rem;
            color: var(--text-light, #888);
            margin-bottom: 1rem;
        }

        /* ── Shake animation ───────────────────────────── */
        @keyframes wf-shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-6px); }
            40% { transform: translateX(6px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
        }
        .wf-shake {
            animation: wf-shake 0.4s ease;
        }

        /* ── Responsive ────────────────────────────────── */
        @media (max-width: 600px) {
            .wf-browse-grid {
                grid-template-columns: 1fr;
            }
            .wf-tree-card {
                padding: 1rem;
            }
            .wf-tree-root-word {
                font-size: 1.1rem;
            }
            .wf-member-chip {
                min-width: 75px;
                padding: 0.4rem 0.5rem;
            }
            .wf-quiz-card {
                padding: 1rem;
            }
            .wf-legend-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
}

// ── Main Render ──────────────────────────────────────────────────────────────
function renderModule() {
    const container = getContainer();
    if (!container) return;

    injectStyles();

    container.innerHTML = `
        <div class="wf-module">
            <div class="wf-header">
                <h2>Kelime Aileleri (Word Families)</h2>
                <p>Kok kelimelerden turetilmis formlari ogren. Kelime dagarcigini genislet!</p>
            </div>

            <!-- Mode Tabs -->
            <div class="wf-tabs">
                <button class="btn ${currentView === 'browse' ? '' : 'secondary'} wf-tab-btn" data-tab="browse">
                    Goz At
                </button>
                <button class="btn ${currentView === 'quiz' ? '' : 'secondary'} wf-tab-btn" data-tab="quiz">
                    Quiz
                </button>
                <button class="btn ${currentView === 'fillin' ? '' : 'secondary'} wf-tab-btn" data-tab="fillin">
                    Bosluk Doldurma
                </button>
            </div>

            <div id="wf-content-area"></div>
        </div>
    `;

    // Tab event listeners
    container.querySelectorAll('.wf-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentView = btn.dataset.tab;
            if (currentView === 'quiz') quizState = null;
            if (currentView === 'fillin') fillState = null;
            renderModule();
        });
    });

    // Render active view
    const content = document.getElementById('wf-content-area');
    switch (currentView) {
        case 'browse': renderBrowseView(content); break;
        case 'quiz':   renderQuizView(content); break;
        case 'fillin': renderFillInView(content); break;
    }
}

// ══════════════════════════════════════════════════════════════════════════════
//  1. BROWSE VIEW — Family Tree Cards with CEFR Filter
// ══════════════════════════════════════════════════════════════════════════════
function renderBrowseView(container) {
    const levels = ['all', 'A1', 'A2', 'B1', 'B2'];
    const filtered = activeLevel === 'all'
        ? wordFamiliesData
        : wordFamiliesData.filter(f => f.level === activeLevel);

    container.innerHTML = `
        <!-- Type Legend -->
        <div class="wf-type-legend">
            ${Object.entries(TYPE_COLORS).map(([type, cfg]) => `
                <span class="wf-type-dot">
                    <span class="wf-type-dot-circle" style="background:${cfg.bg};"></span>
                    ${cfg.label}
                </span>
            `).join('')}
        </div>

        <!-- Suffix Legend -->
        <div class="wf-legend">
            <div class="wf-legend-header" id="wf-legend-toggle">
                <h4>Ek Bilgisi (Suffix Legend)</h4>
                <span style="font-size:1.2rem;transition:transform 0.3s;display:inline-block;${showLegend ? 'transform:rotate(180deg);' : ''}">${showLegend ? '&#9650;' : '&#9660;'}</span>
            </div>
            <div id="wf-legend-body" style="${showLegend ? '' : 'display:none;'}">
                <div class="wf-legend-grid">
                    ${suffixLegend.map(s => `
                        <div class="wf-legend-item">
                            <span class="wf-legend-suffix">${escapeHTML(s.suffix)}</span>
                            <span class="wf-legend-meaning">${escapeHTML(s.meaning)}</span>
                            <span class="wf-legend-example">${escapeHTML(s.example)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Level Filters -->
        <div class="wf-level-filters">
            ${levels.map(l => `
                <button class="btn ${activeLevel === l ? '' : 'secondary'} small wf-level-btn" data-level="${l}">
                    ${l === 'all' ? 'Tumunu Goster' : getCEFRBadgeHTML(l)}
                </button>
            `).join('')}
        </div>

        <!-- Filter Info -->
        <div class="wf-filter-info">
            ${filtered.length} kelime ailesi gosteriliyor (toplam ${wordFamiliesData.length})
        </div>

        <!-- Family Tree Grid -->
        <div class="wf-browse-grid" id="wf-browse-grid">
            ${filtered.map(family => renderFamilyTreeCard(family)).join('')}
        </div>
    `;

    // Legend toggle
    document.getElementById('wf-legend-toggle').addEventListener('click', () => {
        showLegend = !showLegend;
        renderBrowseView(container);
    });

    // Level filter buttons
    container.querySelectorAll('.wf-level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeLevel = btn.dataset.level;
            renderBrowseView(container);
        });
    });
}

function renderFamilyTreeCard(family) {
    const membersHTML = family.members.map(m => {
        const tc = TYPE_COLORS[m.type] || { bg: '#888', label: '?' };
        return `
            <div class="wf-member-chip wf-chip-${m.type}" title="${escapeHTML(m.meaning)}">
                <span class="wf-member-word">${escapeHTML(m.word)}</span>
                <span class="wf-member-info">${tc.label} - ${escapeHTML(m.meaning)}</span>
                <span class="wf-member-suffix">${escapeHTML(m.suffix)}</span>
            </div>
        `;
    }).join('');

    return `
        <div class="wf-tree-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                <span></span>
                ${getCEFRBadgeHTML(family.level)}
            </div>
            <div class="wf-tree-root">
                <span class="wf-tree-root-word">${escapeHTML(family.root)}</span>
                <span class="wf-tree-meaning">${escapeHTML(family.meaning)}</span>
            </div>
            <div class="wf-tree-connector"></div>
            <div class="wf-tree-members">
                ${membersHTML}
            </div>
        </div>
    `;
}

// ══════════════════════════════════════════════════════════════════════════════
//  2. QUIZ VIEW — Root word + meaning shown, select correct derived form
// ══════════════════════════════════════════════════════════════════════════════
function initQuizState() {
    // Build a flat list of all members with their family info
    const allMembers = [];
    wordFamiliesData.forEach(family => {
        family.members.forEach(member => {
            allMembers.push({
                root: family.root,
                rootMeaning: family.meaning,
                level: family.level,
                word: member.word,
                type: member.type,
                meaning: member.meaning,
                suffix: member.suffix
            });
        });
    });

    const shuffled = fisherYatesShuffle([...allMembers]);

    return {
        questions: shuffled.slice(0, QUIZ_TOTAL),
        allMembers: allMembers,
        currentIndex: 0,
        score: 0,
        answered: false,
        answers: []
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
    const tc = TYPE_COLORS[q.type] || { bg: '#888', label: '?' };

    // Generate 4 options: 1 correct + 3 distractors
    const correctAnswer = q.word;
    const distractorPool = quizState.allMembers.filter(m => m.word !== correctAnswer);
    const distractors = fisherYatesShuffle([...distractorPool])
        .slice(0, 3)
        .map(m => m.word);

    // Ensure uniqueness
    const uniqueDistractors = distractors.filter(d => d !== correctAnswer);
    while (uniqueDistractors.length < 3) {
        const fallback = distractorPool[Math.floor(Math.random() * distractorPool.length)];
        if (fallback.word !== correctAnswer && !uniqueDistractors.includes(fallback.word)) {
            uniqueDistractors.push(fallback.word);
        }
    }

    const options = fisherYatesShuffle([...uniqueDistractors.slice(0, 3), correctAnswer]);

    container.innerHTML = `
        <div class="wf-quiz-card">
            <!-- Progress -->
            <div class="wf-quiz-progress">
                <span style="font-weight:600;color:var(--text-light,#999);">
                    Soru ${quizState.currentIndex + 1} / ${quizState.questions.length}
                </span>
                <span style="font-weight:700;color:var(--primary,#4a90e2);">
                    Skor: ${quizState.score * 10} XP
                </span>
            </div>
            <div class="wf-quiz-progress-bar">
                <div class="wf-quiz-progress-fill" style="width:${((quizState.currentIndex) / quizState.questions.length) * 100}%;"></div>
            </div>

            <!-- Prompt -->
            <div class="wf-quiz-prompt">
                <div class="wf-quiz-root-display">${escapeHTML(q.root)}</div>
                <div class="wf-quiz-root-meaning">${escapeHTML(q.rootMeaning)}</div>
            </div>

            <!-- Question -->
            <div class="wf-quiz-question-text" style="text-align:center;">
                Bu kok kelimenin <strong style="color:${tc.bg};">${tc.label}</strong> turetmesi hangisidir?
                <br/>
                <span style="font-size:0.85rem;color:var(--text-light,#888);">
                    (${escapeHTML(q.meaning)})
                </span>
            </div>

            <!-- Options -->
            <div class="wf-quiz-options" id="wf-quiz-options">
                ${options.map((opt, idx) => `
                    <button class="wf-quiz-option" data-value="${escapeAttr(opt)}">
                        <strong style="color:var(--primary,#4a90e2);margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</strong> ${escapeHTML(opt)}
                    </button>
                `).join('')}
            </div>

            <!-- Feedback -->
            <div class="wf-quiz-feedback" id="wf-quiz-feedback"></div>
        </div>
    `;

    // Option click handlers
    container.querySelectorAll('.wf-quiz-option').forEach(btn => {
        btn.addEventListener('click', () => handleQuizAnswer(btn, correctAnswer, q, container));
    });
}

function handleQuizAnswer(btn, correctAnswer, question, container) {
    if (quizState.answered) return;
    quizState.answered = true;

    const selectedValue = btn.dataset.value;
    const isCorrect = selectedValue === correctAnswer;

    // Disable all buttons and show correct answer
    container.querySelectorAll('.wf-quiz-option').forEach(b => {
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
        root: question.root,
        word: question.word,
        correct: isCorrect,
        meaning: question.meaning
    });

    // Feedback
    const feedbackEl = document.getElementById('wf-quiz-feedback');
    feedbackEl.innerHTML = `
        <div style="padding:0.75rem 1rem;border-radius:10px;background:${isCorrect ? 'rgba(39,174,96,0.1)' : 'rgba(231,76,60,0.1)'};border:1px solid ${isCorrect ? '#27ae60' : '#e74c3c'};">
            <p style="margin:0;font-weight:600;color:${isCorrect ? '#27ae60' : '#e74c3c'};">
                ${isCorrect ? 'Dogru! +10 XP' : 'Yanlis!'}
            </p>
            ${!isCorrect ? `<p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--text-light,#aaa);">
                Dogru cevap: <strong>${escapeHTML(correctAnswer)}</strong>
            </p>` : ''}
            <p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--text-light,#aaa);">
                ${escapeHTML(question.root)} &rarr; ${escapeHTML(question.word)} (${escapeHTML(question.suffix)})
            </p>
        </div>
        <button id="wf-quiz-next-btn" class="btn" style="margin-top:0.75rem;width:100%;">
            ${quizState.currentIndex + 1 < quizState.questions.length ? 'Sonraki Soru' : 'Sonuclari Gor'}
        </button>
    `;

    document.getElementById('wf-quiz-next-btn').addEventListener('click', () => {
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

    if (window.progressManager) {
        window.progressManager.completeActivity(`word-families-quiz-${Date.now()}`);
    }

    if (accuracy >= 80) {
        showToast(`Harika! %${accuracy} dogruluk orani ile tamamladin!`, 'success');
    } else if (accuracy >= 50) {
        showToast(`Iyi is! %${accuracy} basari orani. Pratik yapmaya devam edin.`, 'info');
    }

    container.innerHTML = `
        <div class="wf-results">
            <div class="wf-results-emoji">${accuracy >= 80 ? '&#127942;' : accuracy >= 50 ? '&#128170;' : '&#128218;'}</div>
            <h2>Quiz Tamamlandi!</h2>
            <p style="color:var(--text-light,#999);">Kelime aileleri bilgini test ettin.</p>

            <div class="wf-results-stats">
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:#27ae60;">${correct}</span>
                    <span class="wf-stat-label">Dogru</span>
                </div>
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:#e74c3c;">${total - correct}</span>
                    <span class="wf-stat-label">Yanlis</span>
                </div>
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:var(--primary,#4a90e2);">%${accuracy}</span>
                    <span class="wf-stat-label">Basari</span>
                </div>
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:var(--primary,#4a90e2);">+${xpEarned}</span>
                    <span class="wf-stat-label">XP</span>
                </div>
            </div>

            ${wrongAnswers.length > 0 ? `
                <div style="text-align:left;margin-bottom:1.5rem;max-width:500px;margin-left:auto;margin-right:auto;">
                    <h4 style="margin-bottom:0.5rem;">Yanlis Bilinenler:</h4>
                    <div style="background:var(--card-bg,rgba(255,255,255,0.04));border-radius:8px;overflow:hidden;border:1px solid var(--border-color,rgba(255,255,255,0.1));">
                        ${wrongAnswers.map(a => `
                            <div style="display:flex;justify-content:space-between;padding:0.5rem 0.75rem;border-bottom:1px solid var(--border-color,rgba(255,255,255,0.1));gap:0.5rem;flex-wrap:wrap;">
                                <strong style="color:var(--primary,#4a90e2);">${escapeHTML(a.root)} &rarr; ${escapeHTML(a.word)}</strong>
                                <span style="color:var(--text-light,#999);font-size:0.85rem;">${escapeHTML(a.meaning)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="wf-results-actions">
                <button class="btn" id="wf-quiz-retry">Tekrar Dene</button>
                <button class="btn secondary" id="wf-quiz-browse">Goz At Moduna Don</button>
            </div>
        </div>
    `;

    document.getElementById('wf-quiz-retry').addEventListener('click', () => {
        currentView = 'quiz';
        quizState = null;
        renderModule();
    });
    document.getElementById('wf-quiz-browse').addEventListener('click', () => {
        currentView = 'browse';
        renderModule();
    });
}

// ══════════════════════════════════════════════════════════════════════════════
//  3. FILL-IN VIEW — Show sentence with blank, type the correct derived form
// ══════════════════════════════════════════════════════════════════════════════
function initFillState() {
    const shuffled = fisherYatesShuffle([...fillInSentences]);
    return {
        questions: shuffled.slice(0, FILL_TOTAL),
        currentIndex: 0,
        score: 0,
        answered: false
    };
}

function renderFillInView(container) {
    if (!fillState) {
        fillState = initFillState();
    }

    // Check if fill-in is complete
    if (fillState.currentIndex >= fillState.questions.length) {
        renderFillResult(container);
        return;
    }

    const q = fillState.questions[fillState.currentIndex];
    const tc = TYPE_COLORS[q.type] || { bg: '#888', label: '?' };

    // Create sentence with blank
    const blankSentence = q.sentence.replace('_____', '<strong style="color:var(--primary,#4a90e2);letter-spacing:2px;">_____</strong>');

    container.innerHTML = `
        <div class="wf-quiz-card">
            <!-- Progress -->
            <div class="wf-quiz-progress">
                <span style="font-weight:600;color:var(--text-light,#999);">
                    Soru ${fillState.currentIndex + 1} / ${fillState.questions.length}
                </span>
                <span style="font-weight:700;color:var(--primary,#4a90e2);">
                    Skor: ${fillState.score * 10} XP
                </span>
            </div>
            <div class="wf-quiz-progress-bar">
                <div class="wf-quiz-progress-fill" style="width:${((fillState.currentIndex) / fillState.questions.length) * 100}%;"></div>
            </div>

            <!-- Sentence -->
            <div class="wf-quiz-question-text" style="margin:1.25rem 0;text-align:center;font-size:1.05rem;line-height:1.8;">
                ${blankSentence}
            </div>

            <!-- Hint -->
            <div class="wf-fill-hint">
                <span>Kok kelime: <strong style="color:var(--primary,#4a90e2);">${escapeHTML(q.root)}</strong></span>
                <span style="color:${tc.bg};font-weight:600;background:rgba(0,0,0,0.2);padding:2px 8px;border-radius:8px;">
                    Hedef: ${tc.label}
                </span>
            </div>

            <!-- Input Area -->
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                <input type="text" id="wf-fill-input" class="wf-fill-input" placeholder="Turetilmis kelimeyi yazin..." autocomplete="off" style="flex:1;min-width:180px;" />
                <button id="wf-fill-check" class="btn">Kontrol Et</button>
            </div>

            <!-- Feedback -->
            <div id="wf-fill-feedback" class="wf-quiz-feedback"></div>
        </div>
    `;

    const input = document.getElementById('wf-fill-input');
    const checkBtn = document.getElementById('wf-fill-check');

    input.focus();

    // Enter key to submit
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkFillAnswer(container);
    });

    checkBtn.addEventListener('click', () => checkFillAnswer(container));
}

function checkFillAnswer(container) {
    if (fillState.answered) return;

    const input = document.getElementById('wf-fill-input');
    const feedback = document.getElementById('wf-fill-feedback');
    const checkBtn = document.getElementById('wf-fill-check');
    const q = fillState.questions[fillState.currentIndex];

    if (!input || !q) return;

    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = q.target.toLowerCase();

    if (!userAnswer) {
        showToast('Lutfen bir cevap yazin.', 'warning');
        return;
    }

    if (userAnswer === correctAnswer) {
        // Correct
        fillState.answered = true;
        fillState.score++;

        input.disabled = true;
        checkBtn.disabled = true;
        input.style.borderColor = '#27ae60';
        input.style.background = 'rgba(39,174,96,0.1)';

        if (window.progressManager) window.progressManager.addXP(10);
        if (window.showXPGain) window.showXPGain(10);
        if (window.audioManager) window.audioManager.playCorrect();

        feedback.innerHTML = `
            <div style="padding:0.75rem 1rem;border-radius:10px;background:rgba(39,174,96,0.1);border:1px solid #27ae60;margin-top:0.75rem;">
                <p style="margin:0;font-weight:600;color:#27ae60;">
                    Dogru! "${escapeHTML(q.target)}" +10 XP
                </p>
                <p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--text-light,#aaa);">
                    ${escapeHTML(q.root)} &rarr; ${escapeHTML(q.target)} (${escapeHTML(q.type)})
                </p>
            </div>
            <button id="wf-fill-next" class="btn" style="margin-top:0.75rem;width:100%;">
                ${fillState.currentIndex + 1 < fillState.questions.length ? 'Sonraki Soru' : 'Sonuclari Gor'}
            </button>
        `;

        document.getElementById('wf-fill-next').addEventListener('click', () => {
            fillState.currentIndex++;
            fillState.answered = false;
            renderFillInView(container);
        });

    } else {
        // Wrong — allow retry
        input.style.borderColor = '#e74c3c';
        input.style.background = 'rgba(231,76,60,0.1)';
        input.classList.add('wf-shake');
        setTimeout(() => {
            input.classList.remove('wf-shake');
            input.style.borderColor = '';
            input.style.background = '';
        }, 600);

        if (window.audioManager) window.audioManager.playWrong();

        feedback.innerHTML = `
            <div style="padding:0.5rem 0.75rem;border-radius:8px;background:rgba(231,76,60,0.1);border:1px solid #e74c3c;margin-top:0.75rem;">
                <p style="margin:0;font-size:0.9rem;color:#e74c3c;">
                    Yanlis. Tekrar deneyin!
                </p>
                <p style="margin:0.25rem 0 0;font-size:0.8rem;color:var(--text-light,#888);">
                    Ipucu: "${escapeHTML(q.root)}" kokunden bir ${TYPE_COLORS[q.type]?.label || q.type} turetmesi (${q.target.length} harf)
                </p>
            </div>
        `;

        // Keep showing give up button after 2 wrong tries
        const giveUpArea = document.getElementById('wf-fill-giveup-area');
        if (!giveUpArea) {
            const giveUpDiv = document.createElement('div');
            giveUpDiv.id = 'wf-fill-giveup-area';
            giveUpDiv.style.cssText = 'text-align:center;margin-top:0.5rem;';
            giveUpDiv.innerHTML = `
                <button id="wf-fill-giveup" class="btn secondary" style="font-size:0.85rem;">Cevabi Goster</button>
            `;
            feedback.appendChild(giveUpDiv);

            document.getElementById('wf-fill-giveup').addEventListener('click', () => {
                fillState.answered = true;
                input.disabled = true;
                checkBtn.disabled = true;
                input.value = q.target;
                input.style.borderColor = '#f39c12';
                input.style.background = 'rgba(243,156,18,0.1)';

                feedback.innerHTML = `
                    <div style="padding:0.75rem 1rem;border-radius:10px;background:rgba(243,156,18,0.1);border:1px solid #f39c12;margin-top:0.75rem;">
                        <p style="margin:0;font-weight:600;color:#f39c12;">
                            Cevap: "${escapeHTML(q.target)}"
                        </p>
                        <p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--text-light,#aaa);">
                            ${escapeHTML(q.root)} &rarr; ${escapeHTML(q.target)} (${escapeHTML(q.type)})
                        </p>
                    </div>
                    <button id="wf-fill-next" class="btn" style="margin-top:0.75rem;width:100%;">
                        ${fillState.currentIndex + 1 < fillState.questions.length ? 'Sonraki Soru' : 'Sonuclari Gor'}
                    </button>
                `;

                document.getElementById('wf-fill-next').addEventListener('click', () => {
                    fillState.currentIndex++;
                    fillState.answered = false;
                    renderFillInView(container);
                });
            });
        }
    }
}

function renderFillResult(container) {
    const total = fillState.questions.length;
    const correct = fillState.score;
    const accuracy = Math.round((correct / total) * 100);
    const xpEarned = correct * 10;

    if (window.progressManager) {
        window.progressManager.completeActivity(`word-families-fill-${Date.now()}`);
    }

    if (accuracy >= 80) {
        showToast(`Harika! %${accuracy} basari orani!`, 'success');
    } else if (accuracy >= 50) {
        showToast(`Iyi is! %${accuracy} basari orani. Pratik yapmaya devam edin.`, 'info');
    }

    container.innerHTML = `
        <div class="wf-results">
            <div class="wf-results-emoji">${accuracy >= 80 ? '&#127942;' : accuracy >= 50 ? '&#128170;' : '&#128218;'}</div>
            <h2>Bosluk Doldurma Tamamlandi!</h2>
            <p style="color:var(--text-light,#999);">Kelime turetme becerilerin test edildi.</p>

            <div class="wf-results-stats">
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:#27ae60;">${correct}</span>
                    <span class="wf-stat-label">Dogru</span>
                </div>
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:#e74c3c;">${total - correct}</span>
                    <span class="wf-stat-label">Yanlis</span>
                </div>
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:var(--primary,#4a90e2);">%${accuracy}</span>
                    <span class="wf-stat-label">Basari</span>
                </div>
                <div class="wf-stat">
                    <span class="wf-stat-num" style="color:var(--primary,#4a90e2);">+${xpEarned}</span>
                    <span class="wf-stat-label">XP</span>
                </div>
            </div>

            <div class="wf-results-actions">
                <button class="btn" id="wf-fill-retry">Tekrar Oyna</button>
                <button class="btn secondary" id="wf-fill-browse">Goz At Moduna Don</button>
            </div>
        </div>
    `;

    document.getElementById('wf-fill-retry').addEventListener('click', () => {
        currentView = 'fillin';
        fillState = null;
        renderModule();
    });
    document.getElementById('wf-fill-browse').addEventListener('click', () => {
        currentView = 'browse';
        renderModule();
    });
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeAttr(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
