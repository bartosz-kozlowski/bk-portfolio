/* ===== Bartosz Kozłowski - Portfolio ===== */
(function () {
  'use strict';

  /* ---------- DATA ---------- */
  var ROLES = {
    pl: ['Full-Stack Developer', 'Programista PHP', 'Analityk danych', 'Inżynier informatyki'],
    en: ['Full-Stack Developer', 'PHP Developer', 'Data Analyst', 'Software Engineer']
  };

  var T = {
    pl: {
      nav: { about: 'O mnie', skills: 'Umiejętności', projects: 'Projekty', contact: 'Kontakt' },
      availability: 'Dostępny na projekty freelance',
      heroHi: 'Cześć, tu',
      heroPitch: 'Inżynier informatyki, aktualnie na 1. semestrze magisterki na Politechnice Poznańskiej. Pracuję komercyjnie od ponad roku - buduję kompletne rozwiązania od frontendu i backendu po analizę danych. Specjalizuję się w PHP i aplikacjach webowych, a równolegle zajmuję się pipeline\u2019ami danych, wykrywaniem anomalii, integracjami z AI i automatyzacją procesów.',
      ctaContact: 'Napisz do mnie',
      skillsLabel: 'Technologie', skillsHeading: 'Czego używam',
      projLabel: 'Wybrane prace', projHeading: 'Projekty, z których jestem dumny',
      moreLabel: 'Archiwum', moreHeading: 'Pozostałe projekty',
      readMore: 'Czytaj więcej', readLess: 'Zwiń', source: 'Kod źródłowy',
      contactLabel: 'Kontakt', contactHeading: 'Porozmawiajmy o współpracy',
      contactText: 'Szukasz kogoś do projektu freelance, masz pytanie albo propozycję pracy? Napisz - odpowiadam szybko.',
      phEmail: 'Twój email', phMsg: 'Twoja wiadomość...', send: 'Wyślij wiadomość',
      rights: 'Wszelkie prawa zastrzeżone.'
    },
    en: {
      nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      availability: 'Available for freelance work',
      heroHi: 'Hi, I\u2019m',
      heroPitch: 'Computer-science engineer, currently in my 1st semester of an MSc at Poznań University of Technology. I\u2019ve been working commercially for over a year - building complete solutions from frontend and backend to data analysis. I specialise in PHP and web applications, while also working on data pipelines, anomaly detection, AI integrations and process automation.',
      ctaContact: 'Get in touch',
      skillsLabel: 'Technologies', skillsHeading: 'What I work with',
      projLabel: 'Selected work', projHeading: 'Projects I\u2019m proud of',
      moreLabel: 'Archive', moreHeading: 'More projects',
      readMore: 'Read more', readLess: 'Show less', source: 'Source code',
      contactLabel: 'Contact', contactHeading: 'Let\u2019s work together',
      contactText: 'Looking for someone for a freelance project, have a question or a job offer? Drop me a line - I reply fast.',
      phEmail: 'Your email', phMsg: 'Your message...', send: 'Send message',
      rights: 'All rights reserved.'
    }
  };

  var SKILLS = [
    { name: { pl: 'Backend', en: 'Backend' }, items: [
      { name: 'PHP', icon: 'devicon-php-plain' }, { name: 'Laravel', icon: 'devicon-laravel-plain' },
      { name: 'Symfony', icon: 'devicon-symfony-original' }, { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain' } ] },
    { name: { pl: 'Frontend', en: 'Frontend' }, items: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain' }, { name: 'React', icon: 'devicon-react-original' },
      { name: 'HTML / CSS', icon: 'devicon-html5-plain' }, { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
      { name: 'Chart.js', icon: 'devicon-chartjs-plain' }, { name: 'WordPress', icon: 'devicon-wordpress-plain' },
      { name: 'Elementor', icon: 'fa-solid fa-puzzle-piece' } ] },
    { name: { pl: 'Bazy danych', en: 'Databases' }, items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain' }, { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'Firebase', icon: 'devicon-firebase-plain' }, { name: 'Oracle SQL', icon: 'devicon-oracle-original' } ] },
    { name: { pl: 'Dane & AI', en: 'Data & AI' }, items: [
      { name: 'Apache Spark', icon: 'devicon-apachespark-original' }, { name: 'R', icon: 'devicon-r-plain' },
      { name: 'Gemini API', icon: 'devicon-google-plain' }, { name: 'YOLO / RF-DETR', icon: 'fa-solid fa-eye' },
      { name: { pl: 'Automatyzacje', en: 'Automation' }, icon: 'fa-solid fa-gears' },
      { name: { pl: 'Przepływy pracy', en: 'Workflows' }, icon: 'fa-solid fa-diagram-project' },
      { name: { pl: 'Raporty biznesowe', en: 'Business reports' }, icon: 'fa-solid fa-chart-bar' } ] },
    { name: { pl: 'Cloud & Systemy', en: 'Cloud & Systems' }, items: [
      { name: 'AWS S3', icon: 'devicon-amazonwebservices-plain' }, { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'Git', icon: 'devicon-git-plain' } ] },
    { name: { pl: 'Mobile & Inne', en: 'Mobile & Other' }, items: [
      { name: 'Android (Kotlin)', icon: 'devicon-kotlin-plain' }, { name: 'Jetpack Compose', icon: 'devicon-jetpackcompose-plain' },
      { name: 'C / C++', icon: 'devicon-cplusplus-plain' } ] }
  ];

  var FEATURED = [
    {
      id: 'matchvision', num: '01',
      kind: { pl: 'Computer Vision · ML', en: 'Computer Vision · ML' },
      title: { pl: 'MatchVision - automatyczna analiza wideo meczów piłkarskich', en: 'MatchVision - automated football match video analysis' },
      meta: { pl: 'Praca inżynierska · Politechnika Poznańska · 2026 · zespół 4 os.', en: 'Engineering thesis · Poznań Univ. of Technology · 2026 · team of 4' },
      tags: ['FastAPI', 'React', 'RF-DETR', 'BoT-SORT', 'Python', 'Tailwind'],
      short: { pl: 'Zaawansowany system klient-serwer do automatycznej analizy nagrań meczów: detekcja i śledzenie zawodników, kalibracja kamery oraz interaktywna mapa taktyczna 2D w czasie rzeczywistym.', en: 'Advanced client–server system for automated match-footage analysis: player detection and tracking, camera calibration and a real-time interactive 2D tactical map.' },
      full: {
        pl: 'Mój wkład w projekt zespołowy: inicjalny szkielet frontendu i backendu, moduł klasyfikacji drużyn, integracja odtwarzacza wideo oraz interaktywna mapa taktyczna 2D. Backend (FastAPI) obsługuje kolejkę zadań FIFO z komunikacją przez Server-Sent Events, co pozwala śledzić postęp analizy na żywo. Frontend to React SPA (Tailwind CSS) z autorskim odtwarzaczem opartym na media-chrome, animacjami Lottie i eksportem wyników do ZIP. Detekcja obiektów: dwa modele RF-DETR Large - zawodnicy/sędziowie (mAP50 = 0,941) oraz piłka (AP50 = 0,735); śledzenie BoT-SORT z ReID. Kalibracja kamery: HRNet + PnLCalib z wygładzaniem trajektorii SLERP/LERP. Klasyfikacja drużyn bez nadzoru: redukcja UMAP + grupowanie KMeans osiągnęły 96,2% dokładności na 5 meczach testowych. Wynikiem jest plik JSON z trajektoriami zawodników i piłki, wizualizowany na interaktywnej mapie taktycznej z narzędziami do rysowania adnotacji.',
        en: 'My contribution to the team project: the initial frontend and backend scaffold, the team-classification module, video-player integration and the interactive 2D tactical map. The FastAPI backend runs a FIFO task queue with Server-Sent Events for live progress tracking. The frontend is a React SPA (Tailwind CSS) with a custom media-chrome player, Lottie animations and ZIP export. Object detection uses two RF-DETR Large models - players/referees (mAP50 = 0.941) and the ball (AP50 = 0.735) - with BoT-SORT + ReID tracking. Camera calibration relies on HRNet + PnLCalib with SLERP/LERP trajectory smoothing. Unsupervised team classification (UMAP + KMeans) reached 96.2% accuracy across 5 test matches. The output is a JSON file of player and ball trajectories, visualised on an interactive 2D tactical map with annotation drawing tools.'
      },
      media: [
        { src: 'img/playerb.png', label: 'detekcja zawodników' },
        { src: 'img/tm-1-1b.png', label: 'mapa taktyczna 1' },
        { src: 'img/tm-1-2.png', label: 'mapa taktyczna 2' },
        { src: 'img/tm-1-4.png', label: 'mapa taktyczna 3' },
        { src: 'img/tm-2-1b.png', label: 'mapa - mecz 2' }
      ],
      links: []
    },
    {
      id: 'futrank', num: '02',
      kind: { pl: 'Aplikacja webowa', en: 'Web application' },
      title: { pl: 'FutRank - oceny zawodników piłkarskich', en: 'FutRank - football player ratings' },
      meta: { pl: 'Projekt własny · Laravel', en: 'Personal project · Laravel' },
      tags: ['Laravel', 'Blade', 'Tailwind', 'Alpine.js', 'MySQL', 'Hugging Face'],
      short: { pl: 'Aplikacja webowa w Laravelu, w której użytkownicy oceniają i komentują zawodników, filtrują i sortują listy oraz przeglądają rankingi - z analizą sentymentu komentarzy przez AI.', en: 'A Laravel web app where users rate and comment on players, filter and sort lists and browse rankings - with AI-powered comment sentiment analysis.' },
      full: {
        pl: 'Użytkownicy oceniają zawodników w skali 1–5 gwiazdek, komentują, filtrują (po klubie, pozycji, miejscu urodzenia, nazwie) i sortują po średniej ocenie. Pełna obsługa kont: rejestracja, logowanie, weryfikacja e-mail i reset hasła (Laravel Breeze). Aplikacja oferuje zaawansowane wyszukiwanie komentarzy, ranking zawodników, dashboard użytkownika oraz edycję i usuwanie własnych ocen. Zintegrowano API Hugging Face do analizy sentymentu polskich komentarzy (model cardiffnlp/twitter-xlm-roberta-base-sentiment). Frontend: Blade + Tailwind CSS + Alpine.js, baza MySQL; listę zawodników można przeglądać bez logowania.',
        en: 'Users rate players on a 1–5 star scale, comment, filter (by club, position, birthplace, name) and sort by average rating. Full account handling: registration, login, e-mail verification and password reset (Laravel Breeze). The app offers advanced comment search, a player ranking, a user dashboard and editing/deleting of your own ratings. It integrates the Hugging Face API for Polish-language comment sentiment analysis (cardiffnlp/twitter-xlm-roberta-base-sentiment). Frontend: Blade + Tailwind CSS + Alpine.js, MySQL database; the player list is browsable without logging in.'
      },
      media: [
        { src: 'img/lista.png', label: 'lista zawodników' },
        { src: 'img/details.png', label: 'szczegóły zawodnika' },
        { src: 'img/logowanie.png', label: 'logowanie' },
        { src: 'img/ranking.png', label: 'ranking' }
      ],
      links: [{ url: 'https://github.com/bartosz-kozlowski/FutRank' }]
    },
    {
      id: 'koktajlove', num: '03',
      kind: { pl: 'Aplikacja mobilna', en: 'Mobile application' },
      title: { pl: 'Koktajlove - Twój osobisty asystent barmański', en: 'Koktajlove - your personal bartending assistant' },
      meta: { pl: 'Projekt własny · Android', en: 'Personal project · Android' },
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini API'],
      short: { pl: 'Nowoczesna aplikacja mobilna dla miłośników koktajli z funkcją AI Barman generującą drinki na podstawie składników i preferencji - z trybem ciemnym i obsługą tabletów.', en: 'A modern mobile app for cocktail lovers with an AI Barman that generates drinks from ingredients and preferences - with dark mode and tablet support.' },
      full: {
        pl: 'Aplikacja zbudowana z użyciem Jetpack Compose i Firebase. Użytkownicy przeglądają bogatą bazę koktajli, dodają przepisy do ulubionych, filtrują je po kategoriach i przeglądają szczegóły składników oraz sposobu przygotowania. Kluczowym elementem jest AI Barman - funkcja generująca drinki na podstawie składników lub preferencji, zintegrowana z modelem językowym przez API. Aplikacja wspiera tryb ciemny i jasny, ma dynamiczny layout z obsługą tabletów, zachowanie stanu zakładek, podział na kategorie (alkoholowe / bezalkoholowe) oraz detekcję połączenia z internetem. Backend oparty na Firebase Firestore przechowuje dane o koktajlach, ulubionych i globalnych polubieniach; logowanie zapewnia Firebase Auth. Interfejs zoptymalizowano pod UX: zwijane paski aplikacji, responsywny grid, przełączanie zakładek gestem i animacje kart.',
        en: 'Built with Jetpack Compose and Firebase. Users browse a rich cocktail database, save recipes to favourites, filter by category and view ingredient and preparation details. The key feature is AI Barman - generating drinks from ingredients or preferences via a language-model API. The app supports light and dark themes, a responsive tablet-aware layout, tab-state preservation, alcoholic/non-alcoholic categories and connectivity detection. A Firebase Firestore backend stores cocktail data, favourites and global likes; Firebase Auth handles login. The UI is UX-tuned: collapsing app bars, a responsive grid, gesture tab switching and card animations.'
      },
      media: [
        { src: 'videos/telefon_bkozlowski_155869.mp4', poster: 'img/telefon_koktajl.png', label: 'wersja mobilna' },
        { src: 'videos/tablet_bkozlowski_155869.mp4', poster: 'img/cropped-tryb jasny.png', label: 'wersja na tablet' }
      ],
      links: [{ url: 'https://github.com/bartosz-kozlowski/Koktajlove' }]
    },
    {
      id: 'pharmacy', num: '04',
      kind: { pl: 'Bazy danych', en: 'Databases' },
      title: { pl: 'PUT Pharmacy - aplikacja dla aptek', en: 'PUT Pharmacy - pharmacy management app' },
      meta: { pl: 'Projekt akademicki · Oracle APEX', en: 'Academic project · Oracle APEX' },
      tags: ['Oracle APEX', 'PL/SQL', 'ERD', 'CRUD'],
      short: { pl: 'W pełni funkcjonalna aplikacja CRUD w Oracle APEX do zarządzania bazą leków, dostawców i zamówień - zaprojektowana od diagramu ERD po wdrożenie.', en: 'A fully functional Oracle APEX CRUD app for managing a database of medicines, suppliers and orders - designed from an ERD diagram through to deployment.' },
      full: {
        pl: 'Aplikację opracowano w środowisku Oracle APEX w ramach projektu z baz danych. Celem było umożliwienie definiowania, przeglądania i edytowania danych. Projekt rozpoczął się od stworzenia diagramu ERD, diagramu relacyjnego i skryptów DDL, a następnie został wdrożony jako pełny interfejs CRUD. Rozwiązanie pozwala intuicyjnie zarządzać bazą leków, dostawców i zamówień w środowisku przyjaznym dla użytkownika niezaawansowanego.',
        en: 'Built in Oracle APEX as a database course project. The goal was to let users define, browse and edit data. It started from an ERD diagram, a relational diagram and DDL scripts, and was then deployed as a complete CRUD interface. The solution makes it easy to manage a database of medicines, suppliers and orders in an environment friendly to non-technical users.'
      },
      media: [
        { src: 'img/zbd.jpg', label: 'interfejs APEX' },
        { src: 'img/zbd2.jpg', label: 'interfejs APEX 2' }
      ],
      links: []
    }
  ];

  var MORE = [
    {
      id: 'cepstral', title: { pl: 'Wygładzanie obrazu metodą cepstralną (DCT)', en: 'Cepstral image smoothing (DCT)' },
      tags: ['C / C++', 'OpenMP', 'CUDA'],
      short: { pl: 'Porównanie wydajności wygładzania obrazu opartego na DCT w trzech wariantach: sekwencyjnym, OpenMP i CUDA.', en: 'A performance comparison of DCT-based image smoothing in three variants: sequential, OpenMP and CUDA.' },
      full: { pl: 'Algorytm przekształca każdy wiersz obrazu z dziedziny przestrzennej do częstotliwościowej, odcina wysokie częstotliwości (współczynniki DCT) i wykonuje przekształcenie odwrotne, co daje efekt wygładzenia i redukcji szumów. Projekt analizuje czas wykonania każdego wariantu oraz jakość przetworzonego obrazu.', en: 'The algorithm transforms each image row from the spatial to the frequency domain, cuts high frequencies (DCT coefficients) and applies the inverse transform, yielding smoothing and noise reduction. The project analyses each variant\u2019s runtime and the quality of the processed image.' },
      media: [{ src: 'img/oldcar.jpg', label: 'input' }, { src: 'img/wynik_oldcar_omp100.jpg', label: 'output' }],
      links: [{ url: 'https://github.com/bartosz-kozlowski/Metoda-Cepstralna' }]
    },
    {
      id: 'wulkan', title: { pl: 'Symulacja wulkanu 3D', en: '3D volcano simulation' },
      tags: ['OpenGL', 'GLM', 'Assimp', 'Blender'],
      short: { pl: 'Wizualizacja 3D eksplodującego wulkanu z autorskim systemem cząsteczek dymu i lawy oraz fizyką rzutu ukośnego.', en: 'A 3D visualisation of an erupting volcano with a custom smoke/lava particle system and projectile physics.' },
      full: { pl: 'Zrealizowane w ramach przedmiotu Grafika Komputerowa i Wizualizacja przy użyciu OpenGL, GLM, Assimp i Blendera. Autorski system cząsteczek odpowiada za dym i lawę, a fizyka lawy oraz opadających kamieni wykorzystuje technikę rzutu ukośnego dla realistycznego ruchu w przestrzeni 3D.', en: 'Created for a Computer Graphics & Visualisation course using OpenGL, GLM, Assimp and Blender. A custom particle system drives the smoke and lava, while lava and falling-rock physics use projectile motion for realistic 3D movement.' },
      media: [{ src: 'videos/Wulkan.mp4', poster: 'img/wulkan.png', label: 'symulacja wulkanu' }],
      links: []
    },
    {
      id: 'pong', title: { pl: 'Pong dla dwóch graczy - Raspberry Pi', en: 'Two-player Pong - Raspberry Pi' },
      tags: ['Python', 'Raspberry Pi', 'GPIO'],
      short: { pl: 'Klasyczny Pong sterowany potencjometrami, wyświetlany na matrycy LED RGB, z efektami dźwiękowymi i losowymi zdarzeniami.', en: 'Classic Pong controlled with potentiometers, shown on an RGB LED matrix, with sound effects and random events.' },
      full: { pl: 'Gracze sterują paletkami za pomocą potencjometrów, a rozgrywka prezentowana jest na wyświetlaczu LED RGB. Gra została wzbogacona o efekty dźwiękowe i losowe zdarzenia wpływające na mechanikę. Projekt łączy programowanie gier w Pythonie z obsługą sprzętowych interfejsów analogowych i cyfrowych oraz integracją z fizycznym środowiskiem.', en: 'Players control paddles with potentiometers and the game runs on an RGB LED display. It adds sound effects and random gameplay-affecting events. The project combines Python game programming with analogue and digital hardware interfaces and physical-world integration.' },
      media: [{ src: 'img/pong_game.jpg', label: 'gra Pong' }, { src: 'img/schemat_pong.jpg', label: 'schemat' }],
      links: [{ url: 'https://github.com/bartosz-kozlowski/Pong-Game-Raspberry-Pi' }]
    },
    {
      id: 'giftguide', title: { pl: 'GiftGuide - system ekspercki', en: 'GiftGuide - expert system' },
      tags: ['CLIPS', 'Python'],
      short: { pl: 'Regułowy system ekspercki doboru prezentu - rdzeń w CLIPS, interfejs i integracja w Pythonie.', en: 'A rule-based expert system for gift selection - CLIPS core with a Python interface and integration.' },
      full: { pl: 'Projekt regułowego systemu eksperckiego opartego na wyborze prezentu. Wykorzystuje CLIPS jako rdzeń systemu regułowego oraz Python jako interfejs użytkownika i narzędzie integracji.', en: 'A rule-based expert system project focused on gift selection. It uses CLIPS as the rule engine core and Python as the user interface and integration layer.' },
      media: [{ src: 'img/App.png', label: 'aplikacja' }],
      links: [{ url: 'https://github.com/bartosz-kozlowski/SI-GiftGuide' }]
    },
    {
      id: 'bash', title: { pl: 'Skrypty w Bashu', en: 'Bash scripts' },
      tags: ['Bash', 'Linux'],
      short: { pl: 'Zestaw narzędzi powłoki: generowanie miniatur z synchronizacją metadanych oraz rekurencyjne wyszukiwanie tekstu w katalogach.', en: 'A set of shell tools: thumbnail generation with metadata sync, and recursive text search across directories.' },
      full: { pl: 'Pierwszy skrypt przyjmuje listę katalogów i dla każdego obrazu tworzy miniaturę w podkatalogu „tn", synchronizując czasy modyfikacji, zmiany i dostępu z oryginałem. Drugi skrypt rekurencyjnie przeszukuje pliki w podanych katalogach w poszukiwaniu tekstu i wypisuje ścieżki pasujących plików, pomijając komunikaty o braku dostępu.', en: 'The first script takes a list of directories and, for each image, creates a thumbnail in a \u201ctn\u201d subfolder, syncing modify/change/access times with the original. The second recursively searches files in given directories for text and prints matching file paths while suppressing permission-denied messages.' },
      media: [{ src: 'img/code-miniaturki.png', label: 'generowanie miniaturek' }, { src: 'img/code-search.png', label: 'wyszukiwanie tekstu' }],
      links: [{ url: 'https://github.com/bartosz-kozlowski/Systemy-Operacyjne' }]
    },
    {
      id: 'ipc', title: { pl: 'IPC Publish-Subscribe', en: 'IPC Publish-Subscribe' },
      tags: ['C', 'IPC', 'Message Queues'],
      short: { pl: 'System rozgłaszania wiadomości do procesów subskrybujących dany typ, oparty na kolejkach komunikatów (klient-serwer).', en: 'A message-broadcasting system to processes subscribed to a given type, built on message queues (client–server).' },
      full: { pl: 'Celem było zaimplementowanie rozgłaszania wiadomości do wszystkich procesów, które zasubskrybowały dany typ. Aplikacja wykorzystuje mechanizm kolejek komunikatów; opracowano protokół komunikacyjny oraz programy klienta i serwera. Każdy klient może wysyłać i odbierać wiadomości, zawsze za pośrednictwem serwera (bezpośrednia komunikacja klientów jest zabroniona).', en: 'The goal was broadcasting messages to every process subscribed to a given type. The app uses message queues; a communication protocol plus client and server programs were developed. Each client can send and receive messages, always via the server (direct client-to-client communication is forbidden).' },
      media: [],
      links: [{ url: 'https://github.com/bartosz-kozlowski/IPC-Publish-Subscribe' }]
    },
    {
      id: 'friends', title: { pl: 'PUT Friends Together - gra', en: 'PUT Friends Together - game' },
      tags: ['C', 'SFML'],
      short: { pl: 'Prosta gra przygodowa w C/SFML: odwiedzanie przyjaciół, zdobywanie punktów, kolizje, ścieżka dźwiękowa i jumpscare.', en: 'A simple C/SFML adventure game: visiting friends, scoring points, collisions, a soundtrack and a jumpscare.' },
      full: { pl: 'Gra polega na odwiedzaniu przyjaciół i zdobywaniu punktów z uwzględnieniem mechaniki kolizji. Zawiera ścieżkę dźwiękową, którą można włączyć lub wyłączyć w dowolnej chwili. Po zdobyciu wymaganej liczby punktów pojawia się jumpscare z krzykiem (nawiązanie do gry „Straszny labirynt"), po czym można kontynuować rozgrywkę.', en: 'The game is about visiting friends and scoring points with collision mechanics. It features a soundtrack that can be toggled at any time. After reaching the required score a jumpscare with a scream appears (a nod to \u201cScary Maze\u201d), after which play continues.' },
      media: [{ src: 'img/put-friends.png', label: 'gra' }],
      links: []
    },
    {
      id: 'cvrptw', title: { pl: 'Marszrutyzacja z oknami czasowymi (CVRPTW)', en: 'Vehicle routing with time windows (CVRPTW)' },
      tags: ['GRASP', 'Tabu Search', 'Optymalizacja'],
      short: { pl: 'Optymalizacja tras floty pojazdów algorytmami GRASP i Tabu Search - rozwiązanie pobiło najlepszy wynik na Politechnice Poznańskiej.', en: 'Fleet route optimisation with GRASP and Tabu Search - the solution beat the best result at Poznań University of Technology.' },
      full: { pl: 'Problem rozwiązano algorytmami GRASP (Greedy Randomized Adaptive Search Procedure) oraz Tabu Search. Wariant z Tabu Search pobił najlepszy wynik na Politechnice Poznańskiej. Zadanie polega na optymalnym planowaniu tras floty pojazdów dostarczających towary do zestawu klientów przy wielu ograniczeniach (pojemność, okna czasowe).', en: 'The problem was solved with GRASP (Greedy Randomized Adaptive Search Procedure) and Tabu Search. The Tabu Search variant beat the best result at Poznań University of Technology. The task is optimal route planning for a fleet delivering goods to a set of customers under multiple constraints (capacity, time windows).' },
      media: [],
      links: [{ url: 'https://github.com/bartosz-kozlowski/OK_CVRPTW' }]
    },
    {
      id: 'routemaster', title: { pl: 'RouteMaster - aplikacja desktopowa', en: 'RouteMaster - desktop app' },
      tags: ['C++', 'Qt'],
      short: { pl: 'Desktopowa aplikacja rozwiązująca problem marszrutyzacji dla spedytorów - backend w C++, frontend w Qt.', en: 'A desktop app solving the vehicle-routing problem for freight forwarders - C++ backend, Qt frontend.' },
      full: { pl: 'Aplikacja desktopowa rozwiązująca problem marszrutyzacji dotyczący spedytorów, stworzona w paradygmacie programowania obiektowego. Backend napisano w C++, a frontend zbudowano w Qt Creator.', en: 'A desktop app solving the routing problem faced by freight forwarders, built in the object-oriented paradigm. The backend is written in C++ and the frontend was built in Qt Creator.' },
      media: [{ src: 'img/routemaster.png', label: 'aplikacja' }],
      links: []
    },
    {
      id: 'aisd', title: { pl: 'Algorytmy i struktury danych', en: 'Algorithms & data structures' },
      tags: ['C++', 'Python', 'Algorytmy'],
      short: { pl: 'Implementacje sortowań, drzew, grafów i kolejek priorytetowych oraz algorytmów grafowych i optymalizacyjnych (knapsack, DP).', en: 'Implementations of sorts, trees, graphs and priority queues plus graph and optimisation algorithms (knapsack, DP).' },
      full: { pl: 'W ramach zajęć realizowałem projekty w C++ i Pythonie: metody sortowania, zaawansowane struktury danych (drzewa, grafy, kolejki priorytetowe) oraz algorytmy grafowe (BFS, DFS, cykl Eulera i Hamiltona). Zajmowałem się też problemami optymalizacyjnymi, m.in. problemem plecakowym, z użyciem przeszukiwania i programowania dynamicznego - z naciskiem na złożoność obliczeniową.', en: 'Coursework projects in C++ and Python: sorting methods, advanced data structures (trees, graphs, priority queues) and graph algorithms (BFS, DFS, Euler and Hamilton cycles). I also tackled optimisation problems such as knapsack using search and dynamic programming - with a focus on computational complexity.' },
      media: [],
      links: [{ url: 'https://github.com/bartosz-kozlowski/AiSD' }]
    },
    {
      id: 'robots', title: { pl: 'Roboty na mikrokontrolerach', en: 'Microcontroller robots' },
      tags: ['Arduino', 'ATmega', 'PCB', 'C'],
      short: { pl: 'Dwa autonomiczne pojazdy: jeden na Arduino UNO, drugi na własnoręcznie zaprojektowanej i wytrawionej płytce PCB z ATmega.', en: 'Two autonomous vehicles: one on Arduino UNO, the other on a hand-designed, hand-etched ATmega PCB.' },
      full: { pl: 'Zaprojektowałem i zbudowałem dwa autonomiczne pojazdy. Pierwszy oparty na Arduino UNO, drugi na własnoręcznie zaprojektowanej i wytrawionej płytce PCB z mikrokontrolerem ATmega. Projekt wymagał wiedzy z elektroniki oraz praktycznych umiejętności montażu i lutowania; szczególnym wyzwaniem było przygotowanie działającej płytki drukowanej i integracja wszystkich elementów.', en: 'I designed and built two autonomous vehicles. The first is based on Arduino UNO, the second on a hand-designed, hand-etched PCB with an ATmega microcontroller. The project required electronics knowledge plus hands-on assembly and soldering; preparing a working PCB and integrating all components was the key challenge.' },
      media: [{ src: 'img/arduino.png', label: 'pojazd Arduino' }, { src: 'img/plytkatraw.png', label: 'własna płytka PCB' }, { src: 'videos/Roboday.mp4', poster: 'img/cropped-robot.jpg', label: 'budowa robotów' }],
      links: [{ url: 'https://github.com/bartosz-kozlowski/vehicle' }]
    },
    {
      id: 'other', title: { pl: 'Inne projekty i umiejętności', en: 'Other projects & skills' },
      tags: ['Swift', 'Java', 'Prolog', 'SQL', 'R'],
      short: { pl: 'Projekty w Swift, C/C++, Pythonie, Prologu, doświadczenie z SQL i R, Scrum (jako Scrum Master) oraz programowanie sieciowe.', en: 'Projects in Swift, C/C++, Python, Prolog, experience with SQL and R, Scrum (as Scrum Master) and network programming.' },
      full: { pl: 'W ramach studiów realizowałem różnorodne projekty - od aplikacji w Swift, przez programy w C, C++ i Pythonie, po problemy logiczne w Prologu. Mam doświadczenie z SQL oraz R (statystyka i analiza danych). Ta strona to mój autorski projekt w HTML/CSS/JS. Na inżynierii oprogramowania poznałem Javę i metodykę Scrum, w której pełniłem rolę Scrum Mastera. Potrafię też tworzyć podstawowe programy sieciowe - m.in. serwer w C++ z BSD socket API działający w sieci rozległej.', en: 'During my studies I delivered varied projects - from a Swift app, through C, C++ and Python programs, to logic problems in Prolog. I have experience with SQL and R (statistics and data analysis). This site is my own HTML/CSS/JS project. In software engineering I learned Java and the Scrum methodology, where I acted as Scrum Master. I can also build basic network programs - e.g. a C++ server using the BSD socket API over a wide-area network.' },
      media: [],
      links: [{ url: 'https://github.com/bartosz-kozlowski', label: { pl: 'Mój GitHub', en: 'My GitHub' } }]
    }
  ];

  /* ---------- STATE ---------- */
  var lang = localStorage.getItem('bk-lang') || 'pl';
  var theme = localStorage.getItem('bk-theme') || 'dark';
  var open = {};

  /* ---------- HELPERS ---------- */
  function loc(v) { return (v && typeof v === 'object' && ('pl' in v || 'en' in v)) ? (v[lang] || v.pl) : v; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function isVideo(src) { return /\.(mp4|webm|mov)$/i.test(src); }
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function mediaHTML(m, cls) {
    var ph = '<div class="ph ' + (cls === 'media-hero' ? 'ph-lg' : '') + '">\u25A6&nbsp;&nbsp;' + esc(m.label) + '</div>';
    var inner;
    if (isVideo(m.src)) {
      inner = '<video src="' + esc(m.src) + '" ' + (m.poster ? 'poster="' + esc(m.poster) + '" ' : '') + 'controls playsinline preload="metadata"></video>';
    } else {
      inner = '<img src="' + esc(m.src) + '" alt="' + esc(m.label) + '" loading="lazy" data-zoom="' + esc(m.src) + '" onerror="this.style.display=\'none\'">';
    }
    return '<div class="' + cls + '">' + ph + inner + '</div>';
  }

  function linksHTML(links) {
    return (links || []).map(function (l) {
      var label = l.label ? loc(l.label) : T[lang].source;
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" class="btn btn-ghost"><i class="fab fa-github"></i>' + esc(label) + '</a>';
    }).join('');
  }
  function linksTextHTML(links) {
    return (links || []).map(function (l) {
      var label = l.label ? loc(l.label) : T[lang].source;
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" class="btn-text"><i class="fab fa-github"></i>' + esc(label) + '</a>';
    }).join('');
  }

  /* ---------- RENDER ---------- */
  function renderSkills() {
    $('#skillsGrid').innerHTML = SKILLS.map(function (c) {
      var tags = c.items.map(function (s) {
        return '<span class="skill-tag"><i class="' + s.icon + '"></i>' + esc(loc(s.name)) + '</span>';
      }).join('');
      return '<div class="skill-card"><h3>' + esc(loc(c.name)) + '</h3><div class="skill-tags">' + tags + '</div></div>';
    }).join('');
  }

  function renderFeatured() {
    $('#featuredList').innerHTML = FEATURED.map(function (p, i) {
      var thumbs = p.media.slice(1).map(function (m) { return mediaHTML(m, 'media-thumb'); }).join('');
      var media = '<div class="featured-media">' + (p.media[0] ? mediaHTML(p.media[0], 'media-hero') : '') +
        (thumbs ? '<div class="media-thumbs">' + thumbs + '</div>' : '') + '</div>';
      var isOpen = !!open[p.id];
      var body = '<div class="featured-body">' +
        '<div class="featured-meta-row"><span class="featured-num">' + p.num + '</span><span class="featured-rule"></span><span class="featured-kind">' + esc(loc(p.kind)) + '</span></div>' +
        '<h3>' + esc(loc(p.title)) + '</h3>' +
        '<div class="featured-meta">' + esc(loc(p.meta)) + '</div>' +
        '<div class="tag-row">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<p class="short">' + esc(loc(p.short)) + '</p>' +
        (isOpen ? '<p class="full-text">' + esc(loc(p.full)) + '</p>' : '') +
        '<div class="featured-actions">' +
          '<button class="btn btn-ghost" data-toggle="' + p.id + '">' + (isOpen ? T[lang].readLess : T[lang].readMore) + ' <i class="fas fa-chevron-' + (isOpen ? 'up' : 'down') + '" style="font-size:10px"></i></button>' +
          linksHTML(p.links) +
        '</div></div>';
      return '<article class="featured' + (i % 2 === 1 ? ' reverse' : '') + '">' + media + body + '</article>';
    }).join('');
  }

  function renderMore() {
    $('#moreGrid').innerHTML = MORE.map(function (p) {
      var isOpen = !!open[p.id];
      var media = p.media[0] ? '<div class="more-media">' +
        '<div class="ph">\u25A6&nbsp;&nbsp;' + esc(p.media[0].label) + '</div>' +
        (isVideo(p.media[0].src)
          ? '<video src="' + esc(p.media[0].src) + '" ' + (p.media[0].poster ? 'poster="' + esc(p.media[0].poster) + '" ' : '') + 'controls playsinline preload="metadata"></video>'
          : '<img src="' + esc(p.media[0].src) + '" alt="' + esc(p.media[0].label) + '" loading="lazy" data-zoom="' + esc(p.media[0].src) + '" onerror="this.style.display=\'none\'">') +
        '</div>' : '';
      return '<div class="more-card">' + media +
        '<div class="more-body">' +
          '<h3>' + esc(loc(p.title)) + '</h3>' +
          '<div class="tag-row">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
          '<p class="short">' + esc(loc(p.short)) + '</p>' +
          (isOpen ? '<p class="full-text">' + esc(loc(p.full)) + '</p>' : '') +
          '<div class="more-actions">' +
            '<button class="btn-text" data-toggle="' + p.id + '">' + (isOpen ? T[lang].readLess : T[lang].readMore) + ' <i class="fas fa-chevron-' + (isOpen ? 'up' : 'down') + '" style="font-size:9px"></i></button>' +
            linksTextHTML(p.links) +
          '</div>' +
        '</div></div>';
    }).join('');
  }

  function applyStatic() {
    var t = T[lang];
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t[el.getAttribute('data-i18n')] || ''; });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = t[el.getAttribute('data-i18n-ph')] || ''; });
    $$('[data-nav]').forEach(function (el) { el.textContent = t.nav[el.getAttribute('data-nav')] || ''; });
    $('#langToggle').textContent = lang === 'pl' ? 'EN' : 'PL';
    $('#year').textContent = new Date().getFullYear();
  }

  function renderAll() {
    applyStatic();
    renderSkills();
    renderFeatured();
    renderMore();
  }

  /* ---------- TYPING EFFECT ---------- */
  var ti = 0, ci = 0, typeTimer = null;
  function type() {
    var list = ROLES[lang] || ROLES.pl;
    var word = list[ti % list.length];
    var el = $('#typed');
    if (!el) return;
    if (ci <= word.length) {
      el.textContent = word.slice(0, ci);
      ci++; typeTimer = setTimeout(type, 62);
    } else {
      typeTimer = setTimeout(function () { ci = 0; ti = (ti + 1) % list.length; type(); }, 2400);
    }
  }
  function restartTyping() { clearTimeout(typeTimer); ti = 0; ci = 0; type(); }

  /* ---------- LIGHTBOX ---------- */
  var lb = $('#lightbox'), lbImg = $('#lightbox img');
  function openLightbox(src) { lbImg.src = src; lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); }
  function closeLightbox() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); lbImg.src = ''; }

  /* ---------- EVENTS ---------- */
  function applyTheme() { document.body.setAttribute('data-theme', theme); $('#themeToggle').innerHTML = '<i class="fas fa-' + (theme === 'dark' ? 'sun' : 'moon') + '"></i>'; }

  document.addEventListener('click', function (e) {
    var toggle = e.target.closest && e.target.closest('[data-toggle]');
    if (toggle) {
      var id = toggle.getAttribute('data-toggle');
      open[id] = !open[id];
      renderFeatured(); renderMore();
      return;
    }
    var zoom = e.target.closest && e.target.closest('[data-zoom]');
    if (zoom && zoom.tagName === 'IMG' && zoom.style.display !== 'none') { openLightbox(zoom.getAttribute('data-zoom')); return; }
    if (e.target === lb || (e.target.closest && e.target.closest('#lightboxClose'))) { closeLightbox(); }
  });

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  $('#themeToggle').addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('bk-theme', theme);
    applyTheme();
  });

  $('#langToggle').addEventListener('click', function () {
    lang = lang === 'pl' ? 'en' : 'pl';
    localStorage.setItem('bk-lang', lang);
    renderAll();
    restartTyping();
  });

  // scroll: header shadow + active nav
  var header = $('#siteHeader');
  var navIds = ['about', 'skills', 'projects', 'contact'];
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    header.classList.toggle('scrolled', y > 20);
    var mid = y + window.innerHeight * 0.4, cur = 'about';
    navIds.forEach(function (id) { var el = document.getElementById(id); if (el && mid >= el.offsetTop) cur = id; });
    $$('[data-nav]').forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-nav') === cur); });
  }, { passive: true });

  /* ---------- HAMBURGER ---------- */
  var navToggle = $('#navToggle');
  var navCloseBtn = $('#navClose');
  var mainNav = $('#mainNav');
  var navOverlay = $('#navOverlay');

  function openNav() {
    mainNav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('open')) closeNav(); else openNav();
  });
  if (navCloseBtn) navCloseBtn.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);
  $$('.nav a[data-nav]').forEach(function (a) { a.addEventListener('click', closeNav); });
  window.addEventListener('resize', function () { if (window.innerWidth > 768) closeNav(); });

  /* ---------- INIT ---------- */
  applyTheme();
  renderAll();
  type();
})();
