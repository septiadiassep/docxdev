---
slug: fix-error-install-n8n-mac
title: (Bug Fix) Error Install n8n Locally
authors: [septiadi]
tags: [bug-fix, case-closed]
---

## 1. Kronologi Problem

Case ini muncul di tanggal `12 Juni 2025` saat saya sedang ingin menginstallkan n8n dengan command `npm install n8n -g`, dimana kondisinya `n8n` sudah ready di laptop, lebih khusus di laptop Mac Book Pro

## 2. Objektif

Ekspektasinya adalah bagaimana agar `n8n` bisa running well seperti sebelumnya

## 3. Identifikasi Problem

Dari error yang didapat terdapat message seperti berikut

![Alt text](./img/12-06-25/Screenshot%202025-06-12%20at%2012.13.19.png)

Awal mula error terjadi di saat ingin merunning dengan menjalankan command `npx n8n`

![Alt text](./img/12-06-25/Screenshot%202025-06-12%20at%2012.13.29.png)

```.sh
require() of ES Module ... not supported
```

Menunjukkan bahwa modul brace-expansion adalah ES Module, tetapi sedang di-require oleh minimatch, yang menggunakan CommonJS. Ini biasanya terjadi jika versi dependensi tidak saling cocok (mismatch).

### a. Rangkuman Masalah

- Anda menjalankan n8n secara global (diinstal lewat npm install -g n8n).
- Anda menggunakan Node.js v20.10.0 (melalui Herd/nvm).
- Modul express-handlebars → minimatch → brace-expansion menyebabkan konflik modul (CJS vs ESM).

### b. Solusi

n8n saat ini lebih stabil dengan `Node.js v18 LTS`. Langkah-langkahnya adalah sebagai berikut:

```.sh
nvm install 18
nvm use 18
npm uninstall -g n8n
npm install -g n8n
```

### c. Fixing Case

Jika kita lihat, `n8n` sudah berhasil kita installkan di local, dengan command berikut

![Alt text](./img/12-06-25/Screenshot%202025-06-12%20at%2012.13.40.png)

Namun itu tadi, n8n tidak bisa di running, kita akan setup default `nvm` versi pada laptop kita, pertama cek dulu list versi yang tersedia dan saat ini digunakan

![Alt text](./img/12-06-25/Screenshot%202025-06-12%20at%2012.13.46.png)

Tanda `->` menandakan bahwa versi yang saat ini digunakan, untuk seting agar bisa di switch ke versi 18, kita cukup lakukan command seperti berikut, namun sebelum itu install terlebih dahulu versi 18, karna dari gambar diatas kita belum tersedia

```.sh
~$ nvm install 18
Downloading and installing node v18.20.8...
Downloading https://nodejs.org/dist/v18.20.8/node-v18.20.8-darwin-arm64.tar.xz...
############################################################################################ 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.20.8 (npm v10.8.2)
```

Kemudian jalankan command dibawah 

```.sh
~$ nvm use 18    
Now using node v18.20.8 (npm v10.8.2)
```

Kita cek 

![Alt text](./img/12-06-25/Screenshot%202025-06-12%20at%2013.23.47.png)

## 4. Case Closed

Sip, kita sudah berhasil switch versi yang sedang digunakan, selanjutnya kita running `n8n` nya kembali, dan sudah berhasil di running kembali

![Alt text](./img/12-06-25/Screenshot%202025-06-12%20at%2012.14.04.png)