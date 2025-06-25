---
sidebar_position: 2
---

# Konsep Dasar Build React App

Konsep dasarnya adalah, dalam mengembangkan aplikasi dengan `React` kita perlu mengubah cara berfikirnya `Basic Mindset`, tentang design yang sudah di buat dalam bentuk `Mock up` kemudian kita pecahkan ke beberapa komponen

```mermaid
stateDiagram-v2
    s1 : Tentukan Design Mockup
    s2 : Pecahkan ke dalam beberapa Komponen
    s3 : Gabungkan Komponen-komponen Menjadi 1 Bagian

    [*] --> s1
    s1 --> s2
    s2 --> s3
    s3 --> [*]

```

### 1. Tentukan Design Mockup & Data Sampling

```.json
[
  { kategori: "Deterjen", harga: "5000", stock: 10, name: "Rinso Cair" },
  { kategori: "Mie Instan", harga: "7500", stock: 3, name: "Indomie Goreng" },
  { kategori: "Pewangi", harga: "3000", stock: 20, name: "Downy Lavender" },
]
```

Design mock up yang akan kita buat adalah sebagai berikut

![Alt text](./img/Screenshot%202025-06-22%20at%2001.07.06.png)

### 2. Pecahkan ke dalam beberapa Komponen

Partisi beberapa komponen seperti pada gambar berikut

![Alt text](./img/Screenshot%202025-06-22%20at%2000.59.02.png)

### 3.  Gabungkan Komponen-komponen Menjadi 1 Bagian

Gabungkan menjadi 1 bagian, dari komponen-komponen yang sudah kita kelompokan sebelumnya, untuk selanjutnya kita akan praktikan langsung pembuatan komponen dengan real case

**To be continued...**