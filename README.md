# FatkurMods - React.js Routing Project

Repositori ini berisi **Tugas 2** untuk mata kuliah pengembangan web menggunakan **React.js**. Proyek ini mendemonstrasikan implementasi sistem routing pada aplikasi web.

## 👤 Identitas Mahasiswa
* **Nama**: Fatkur Rohman Irham 
* **Kampus**: Politeknik Negeri Banyuwangi
* **Program Studi**: Teknologi Rekayasa Perangkat Lunak

---
## screenshot
<img width="1903" height="894" alt="Screenshot 2026-04-03 103750" src="https://github.com/user-attachments/assets/c4d4026a-6901-4c30-b823-2c780944d8dc" />
<img width="1905" height="884" alt="Screenshot 2026-04-03 103800" src="https://github.com/user-attachments/assets/f27d1135-3184-4ee1-a092-5b36afef7bd9" />
<img width="1893" height="888" alt="Screenshot 2026-04-03 103814" src="https://github.com/user-attachments/assets/a0da8cc2-c0e8-4658-90d6-5c38404fc533" />

---

## 📂 Penjelasan Teknis

### 1. Konfigurasi Main Entry (`main.jsx`)
<img width="599" height="419" alt="Screenshot 2026-04-03 104104" src="https://github.com/user-attachments/assets/b18a1667-5eca-4b30-8b6e-9c10603c8bbb" />
Di file ini, aku nambahin BrowserRouter yang di-import dari react-router-dom. Fungsinya buat ngebungkus komponen utama <App />. Ini langkah wajib supaya seluruh project kita bisa ngebaca sistem routingnya. Ibaratnya ini mesin utama biar kita bisa pindah-pindah halaman tanpa perlu reload browser.


### 2. Pengaturan Rute (`App.jsx`)
<img width="836" height="416" alt="Screenshot 2026-04-03 104115" src="https://github.com/user-attachments/assets/cab34f5a-22df-4380-a940-88ab20dc660b" />
Bagian ini adalah inti dari routing-nya. Di sini aku pakai <Routes> dan <Route> buat nentuin alamat URL bakal nampilin halaman apa. Jadi kalau user buka path / (root), yang dirender itu halaman Home. Kalau path-nya /team bakal nampilin komponen Team, dan kalau /contact bakal nampilin form Contact

### 3. Navigasi Dinamis (`Navbar.jsx`)
<img width="908" height="639" alt="Screenshot 2026-04-03 104139" src="https://github.com/user-attachments/assets/51b6bb37-42ff-40c4-8b44-25f88ef05089" />
Buat navigasinya, aku ganti tag link biasa jadi <NavLink>. Kelebihannya, NavLink bisa ngedeteksi menu mana yang lagi dibuka lewat parameter isActive. Di kodenya, aku bikin kondisi: kalau menunya lagi aktif, dia bakal pakai activeStyle (teks warna biru nyala plus garis bawah), tapi kalau nggak aktif pakai inactiveStyle biasa. Ini sengaja dibuat buat menuhin poin nilai tambahan di tugas.

---
