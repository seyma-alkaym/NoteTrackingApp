# Öğrenci Not Takip Uygulaması

Bu uygulama, öğretmenlerin öğrenci notlarını görüntüleyebilecekleri, not ekleyebilecekleri, notları silebilecekleri ve notların detaylarını görebilecekleri bir uygulamadır.

## Kullanılan Teknolojiler

- **Backend:** Spring Boot
- **Frontend:** React.js
- **Veritabanı:** PostgreSQL

## Backend API'ları

- **Listeleme:** Mevcut notları getirir. Sıralama için `orderBy` parametresi kullanılabilir.

   `/api/v1/notes/`
or
`/api/v1/notes/?orderBy=note`

- **Ekleme:** Yeni bir not ekler.

  `/api/v1/notes/new_note`

- **Silme:** Mevcut bir notu siler.

  `/api/v1/notes/delete_note/{id}`

- **Detay:** Bir notun detaylarını getirir.

  `/api/v1/notes/note_detail/{id}`

- **Ortalama Hesaplama:**  Mevcut notların ortalamasını getirir.

  `/api/v1/notes/average-calculation`

## Frontend Sayfaları

- **Listeleme Sayfası:** Notları listeleyen ve sıralama butonu sunan sayfa.
- **Ekleme Sayfası:** Yeni bir not eklemek için form sunan sayfa.
- **Detay Popup'ı:** Bir notun detaylarını gösteren popup.

## Kurulum

1. Backend için `mvn spring-boot:run` komutunu kullanarak Spring Boot uygulamasını başlatın.
2. Frontend için `npm start` komutunu kullanarak React uygulamasını başlatın.
3. Veritabanı ayarlarını düzenlemek için veritabanı adını (`note_app`), kullanıcı adını (`postgres`) ve şifreyi (`5938`) kendi veritabanı bilgilerinize göre düzenleyin.

## Ekran Görüntüleri

### Frontend

- [Listeleme Sayfası](https://www6.0zz0.com/2024/02/14/20/772153011.png)
- [Ekleme Sayfası](https://www4.0zz0.com/2024/02/14/20/466491622.png)
- [Detay Popup'ı](https://www9.0zz0.com/2024/02/14/20/391574872.png)
- [Delete Modal](https://www10.0zz0.com/2024/02/14/20/325269732.png)

### Database

- [Note Tablosu](https://www11.0zz0.com/2024/02/14/20/980797053.png)
