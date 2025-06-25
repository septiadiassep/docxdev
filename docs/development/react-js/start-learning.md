---
sidebar_position: 1
---

# Start Learning React JS

Untuk membuat project, kita bisa memanfaatkan `Vite` sebagai `Build Tool` nya, untuk membuat project `React` kita dapat membuat dengan perintah sebagai berikut

![Alt text](./img/Screenshot%202025-06-21%20at%2015.39.09.png)

Atau bisa lihat di website resmi `Vite` di **https://vite.dev/guide/#scaffolding-your-first-vite-project**

## Create Project React JS

```.sh
~$: npm create vite@latest hello-world -- --template react
```
```.sh
│
◇  Scaffolding project in /Users/goodevaninja_mac1/Downloads/hello-world...
│
└  Done. Now run:

  cd hello-world
  npm install
  npm run dev
```

Berikut struktur project react yang bisa kita lihat sebagai berikut

```.sh
.
├── eslint.config.js
├── index.html
├── package.json
├── public ----------------> Public asset project
│   └── vite.svg
├── README.md
├── src ----------------> Source Project
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css ----------------> File Index Apps
│   └── main.jsx
└── vite.config.js
```

## Build Project

Selanjutnya kita akan build appsnya dengan command berikut

```.sh
~$: npm install

added 155 packages, and audited 156 packages in 10s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Running Aplikasi

Selanjutnya kita running aplikasi dengan command `npm run dev`

![Alt text](./img/Screenshot%202025-06-21%20at%2015.51.42.png)

Dan berikut adalah tampilan project yang sudah dibuat tadi

![Alt text](./img/Screenshot%202025-06-21%20at%2015.53.27.png)

## Kenapa Vite?

Alasan paling utama yaitu Startup Cepat (Instant Server Start), jika di lihat di dokumentasi vite bisa dilihat perbandingannya dengan 2 model antara `bundler-based` dan `native ES Modules (ESM)`

![Alt text](./img/Screenshot%202025-06-21%20at%2016.01.26.png)
![Alt text](./img/Screenshot%202025-06-21%20at%2016.01.30.png)

Untuk lebih detail bisa dilihat di **https://vite.dev/guide/why.html#why-vite**