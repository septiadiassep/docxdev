# Start Learning Kotlin - Android

Berikut adalah versi development-system.md yang telah disesuaikan untuk proyek Mobile Development Android dengan `Kotlin`, `Room`, dan `Clean Architecture`

Dokumen ini menjelaskan sistem pengembangan yang digunakan dalam proyek Android ini, termasuk tools, konfigurasi, standar, dan alur kerja berdasarkan arsitektur bersih (Clean Architecture).

## 1. Tools & Environment

- **Bahasa Pemrograman**: Kotlin
- **IDE**: Android Studio Hedgehog atau terbaru
- **Build System**: Gradle (versi 7+)
- **Database Lokal**: Room (Android Jetpack)
- **Arsitektur**: Clean Architecture (dengan lapisan `data`, `domain`, dan `presentation`)
- **Layout**: XML Layout
- **Dependency Injection**: Hilt / Dagger
- **Version Control**: Git (GitHub / GitLab)
- **CI/CD**: GitHub Actions (opsional)

## 2. Project Structure (Clean Architecture)

```.sh
project-root/
│
├── data/ # Implementasi repository, data source, dan model untuk persistence
│ └── local/ # Implementasi Room (DAO, Entities, Database)
│
├── domain/ # Berisi entitas bisnis (Entity) dan use case
│
├── presentation/ # ViewModel, UI layer (Activity/Fragment), dan state management
│
├── di/ # Modul dependency injection (Hilt)
│
├── utils/ # Kelas-kelas utilitas umum
│
└── build.gradle # Konfigurasi Gradle
```

## 3. Branching Strategy

Menggunakan pendekatan Git Flow:

- `main`: Kode stabil dan siap rilis.
- `develop`: Integrasi semua fitur baru.
- `feature/<nama-fitur>`: Untuk pengembangan fitur.
- `bugfix/<nama-bug>`: Perbaikan bug.
- `release/<versi>`: Persiapan rilis.
- `hotfix/<perbaikan>`: Perbaikan kritis dari `main`.

## 4. Dependency Management

- Dikelola melalui `build.gradle.kts`
- Gunakan versi library terbaru yang stabil.
- Dependensi utama:
  ```kotlin
  implementation("androidx.room:room-runtime:<version>")
  kapt("androidx.room:room-compiler:<version>")
  implementation("androidx.lifecycle:lifecycle-viewmodel-ktx:<version>")
  implementation("com.google.dagger:hilt-android:<version>")
  kapt("com.google.dagger:hilt-compiler:<version>")

## 5. Build & Run Instructions

```.sh
# Clone repository
git clone https://github.com/username/project-name.git
cd project-name

# Buka dengan Android Studio
# Jalankan melalui tombol "Run" atau gunakan terminal:

./gradlew clean build
./gradlew installDebug
```

## 6. Testing

- Unit test ditulis untuk setiap UseCase dan ViewModel.
- Integration test untuk Repository dan DAO.
- Testing libraries:
  1. JUnit
  2. Mockito / MockK
  3. AndroidX Test
  4. Espresso (untuk UI testing)

Struktur direktory:

```.sh
src/test/java/         # Unit tests
src/androidTest/java/  # Instrumentation tests
```

## 7. Continuous Integration (CI)
- Menggunakan GitHub Actions untuk:
  - Build otomatis saat push/pull request.
  - Menjalankan unit test dan lint.
- Contoh workflow: .github/workflows/android.yml

## 8. Coding Standards
- Ikuti Kotlin Coding Style Guide
- Gunakan ktlint atau detekt untuk menjaga konsistensi kode.
- Penamaan yang deskriptif, hindari singkatan tidak jelas.
- Gunakan sealed class untuk UI State dan Event.

## 9. Security & Best Practices
- Jangan menyimpan API Key secara hardcoded.
- Gunakan file local.properties atau BuildConfig untuk konfigurasi sensitif.
- Selalu validasi input user dan handle semua error dengan baik (misal via sealed class Result atau Resource).
- Hindari Context leakage di ViewModel.