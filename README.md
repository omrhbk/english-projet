# English Learning App - Backend Setup

## 📁 Proje Yapısı

```
english-projet/
├── src/                # Kaynak kodları
│   ├── components/     # Ana öğrenme modülleri
│   │   ├── vocab.js
│   │   ├── listening.js
│   │   └── grammar.js
│   ├── core/          # Temel sistem dosyaları
│   │   ├── app.js
│   │   ├── progress.js
│   │   └── data.js
│   ├── features/      # Ek özellikler
│   │   ├── achievements.js
│   │   ├── analytics.js
│   │   ├── animations.js
│   │   └── audio.js
│   └── styles/        # CSS dosyaları
│       └── style.css
├── server/            # Backend
│   └── server.js
├── public/            # Frontend giriş noktası
│   └── index.html
├── package.json
└── README.md
```

## Kurulum Adımları

### 1. Node.js Bağımlılıklarını Yükle

Proje klasöründe terminal açın ve çalıştırın:

```bash
npm install
```

Bu komut şu paketleri yükleyecek:

- `express` - Web server
- `cors` - Cross-Origin Resource Sharing
- `better-sqlite3` - SQLite veritabanı
- `nodemon` - Development için otomatik yeniden başlatma

### 2. Sunucuyu Başlat

**Development Mode (Otomatik yeniden başlatma):**

```bash
npm run dev
```

**Production Mode:**

```bash
npm start
```

Sunucu `http://localhost:3000` adresinde çalışacak.

### 3. Uygulamayı Aç

Tarayıcıda `index.html` dosyasını açın veya:

```bash
# Python ile basit HTTP server
python -m http.server 8000
```

Sonra `http://localhost:8000` adresine gidin.

## API Endpoints

### GET /api/progress/:userId

Kullanıcının ilerleme verilerini getirir.

**Response:**

```json
{
  "success": true,
  "data": {
    "xp": 50,
    "level": 2,
    "streak": 3,
    "lastLoginDate": "Fri Feb 14 2026",
    "completedActivities": [1, 2, 3]
  }
}
```

### POST /api/progress/:userId

Kullanıcının ilerleme verilerini kaydeder.

**Request Body:**

```json
{
  "xp": 50,
  "level": 2,
  "streak": 3,
  "lastLoginDate": "Fri Feb 14 2026",
  "completedActivities": [1, 2, 3]
}
```

**Response:**

```json
{
  "success": true,
  "message": "Progress saved successfully"
}
```

### GET /api/health

Sunucu sağlık kontrolü.

## Veritabanı

SQLite veritabanı `progress.db` dosyasında saklanır.

**Tablo Yapısı:**

```sql
CREATE TABLE user_progress (
  user_id TEXT PRIMARY KEY,
  xp INTEGER,
  level INTEGER,
  streak INTEGER,
  last_login_date TEXT,
  completed_activities TEXT,
  created_at DATETIME,
  updated_at DATETIME
)
```

## Hybrid Sistem

Uygulama **hybrid** modda çalışır:

1. Sunucu çalışıyorsa → API'ye kaydet
2. Sunucu çalışmıyorsa → localStorage'a kaydet

Bu sayede backend olmadan da uygulama çalışır!

## Notlar

- User ID otomatik oluşturulur ve `localStorage`'a kaydedilir
- Production'da proper authentication kullanılmalı
- CORS tüm originlere açık (production'da kısıtlanmalı)
