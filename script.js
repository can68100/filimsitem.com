// Film Verileri ve YouTube Fragman Linkleri (Embed Formatında)
const MOVIES_DATA = [
    {
        id: 1,
        title: "Interstellar",
        genre: "Bilim Kurgu",
        year: "2014",
        rating: "8.7",
        image: "https://unsplash.com",
        trailer: "https://youtube.com", // Resmi YouTube Embed Linki
        desc: "İnsanlığın geleceği tehlikeye girdiğinde, bir grup astronot yaşanabilir yeni bir gezegen bulmak için solucan deliğinden geçerek uzayda sınırları zorlar."
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Aksiyon",
        year: "2008",
        rating: "9.0",
        image: "https://unsplash.com",
        trailer: "https://youtube.com",
        desc: "Batman, Gotham şehrini kaosa sürüklemeye çalışan gizemli ve acımasız suçlu Joker ile karşı karşıya geldiğinde en büyük adalet sınavını verir."
    },
    {
        id: 3,
        title: "Inception",
        genre: "Bilim Kurgu",
        year: "2010",
        rating: "8.8",
        image: "https://unsplash.com",
        trailer: "https://youtube.com",
        desc: "Çok yetenekli bir hırsız olan Dom Cobb, insanların rüya gördüğü sırada bilinçaltının derinliklerindeki sırları çalmakta uzmandır."
    },
    {
        id: 4,
        title: "The Shawshank Redemption",
        genre: "Dram",
        year: "1994",
        rating: "9.3",
        image: "https://unsplash.com",
        trailer: "https://youtube.com",
        desc: "Suçsuzluğunu iddia etmesine rağmen müebbet hapse çarptırılan bankacı Andy Dufresne'in Shawshank hapishanesinde kurduğu dostlukları anlatır."
    },
    {
        id: 5,
        title: "Mad Max: Fury Road",
        genre: "Aksiyon",
        year: "2015",
        rating: "8.1",
        image: "https://unsplash.com",
        trailer: "https://youtube.com",
        desc: "Gelecekte, çölleşmiş dünyada hayatta kalmaya çalışan Max, zalim bir liderden kaçan İmparatoriçe Furiosa ve ekibine katılmak zorunda kalır."
    },
    {
        id: 6,
        title: "The Godfather",
        genre: "Dram",
        year: "1972",
        rating: "9.2",
        image: "https://unsplash.com",
        trailer: "https://youtube.com",
        desc: "New York'taki güçlü bir İtalyan-Amerikan mafya ailesinin reisi olan Don Vito Corleone'nin imparatorluğunu ve yönetimi devrettiği oğlu Michael'ı konu alır."
    }
];
    {
        id: 7, // Her film için benzersiz bir numara verin
        title: "recep ivedik",
        genre: "komedi", // 
        year: "2019",
        rating: "8.5",
        image: "https://www.google.com/imgres?q=recep%20ivedik%206&imgurl=https%3A%2F%2Ffoto.haberler.com%2Fhaber%2F2018%2F12%2F08%2Frecep-ivedik-6-filmi-11516949_amp.jpg&imgrefurl=https%3A%2F%2Fwww.haberler.com%2Frecep-ivedik-6-filmi-11516949-haberi%2F&docid=XKqw0LG0ab81cM&tbnid=MXa9vlgaqQx83M&vet=12ahUKEwiJg8qLqoKXAxUKgv0HHS3BJ_wQnPAOegQIOxAA..i&w=1200&h=1717&hcb=2&ved=2ahUKEwiJg8qLqoKXAxUKgv0HHS3BJ_wQnPAOegQIOxAA", // Film kapak resmi linki
        trailer: "<iframe width="560" height="315" src="https://www.youtube.com/embed/BPXtVB2Qp-4?si=n6IKOnW_DYcUY3Mx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>", // Buraya embed linkini koyun
        desc: "Recep İvedik, Konya'daki kuru fasulye festivaline gitmek ister. Ancak acentenin hatası yüzünden arkadaşı Nurullah ile birlikte yanlışlıkla Kenya'ya gider. Afrika bozkırlarında mahsur kalan ikili, iki düşman yerli kabilenin arasında komik ve vahşi bir maceraya atılır."
    },
    {
        id: 7, 
        title: "Avatar: Suyun Yolu",
        genre: "Bilim Kurgu", 
        year: "2022",
        rating: "7.6",
        image: "https://unsplash.com", 
        trailer: "https://youtube.com", 
        desc: "İlk filmdeki olayların üzerinden on yıldan fazla bir süre geçtikten sonra, Sully ailesinin hikayesini ve hayatta kalma mücadelelerini anlatıyor."
    },

const movieGrid = document.getElementById('movie-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const listTitle = document.getElementById('list-title');
const modal = document.getElementById('movie-modal');
const closeModal = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');

// İlk yükleme
displayMovies(MOVIES_DATA);

function displayMovies(movies) {
    movieGrid.innerHTML = "";
    if(movies.length === 0) {
        movieGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted);">Aradığınız kriterde film bulunamadı.</p>`;
        return;
    }

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year} | ${movie.genre}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openMovieDetail(movie));
        movieGrid.appendChild(card);
    });
}

// Detay Pop-Up ve Video Oynatıcıyı Tetikleme
function openMovieDetail(movie) {
    modalBody.innerHTML = `
        <div class="video-container">
            <iframe id="trailer-video" src="${movie.trailer}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="modal-desc">
            <h2>${movie.title}</h2>
            <div>
                <span class="badge">${movie.genre}</span>
                <span style="margin-left:15px; color:#ffb400; font-weight:bold;"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                <span style="margin-left:15px; color:var(--text-muted);">${movie.year}</span>
            </div>
            <p>${movie.desc}</p>
        </div>
    `;
    modal.style.display = "flex";
}

// Hero Bölümündeki Buton İçin İlk Filmin Fragmanını Açma Fonksiyonu
function openHeroTrailer() {
    openMovieDetail(MOVIES_DATA[0]);
}

// Kategori Filtreleme
function filterGenre(genreName) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));
    if(event) event.target.classList.add('active');

    if(genreName === 'Tümü') {
        listTitle.innerText = "Tüm Filmler";
        displayMovies(MOVIES_DATA);
    } else {
        listTitle.innerText = `${genreName} Türündeki Filmler`;
        const filtered = MOVIES_DATA.filter(m => m.genre === genreName);
        displayMovies(filtered);
    }
}

// Arama Motoru
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if(query !== "") {
        listTitle.innerText = `"${query}" İçin Arama Sonuçları`;
        const filtered = MOVIES_DATA.filter(m => 
            m.title.toLowerCase().includes(query) || m.genre.toLowerCase().includes(query)
        );
        displayMovies(filtered);
    } else {
        listTitle.innerText = "Tüm Filmler";
        displayMovies(MOVIES_DATA);
    }
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => { if(e.key === 'Enter') handleSearch(); });

// Modalı Kapatma ve Videoyu Kapatma/Durdurma Kontrolü
function stopAndCloseModal() {
    const iframe = document.getElementById('trailer-video');
    if (iframe) {
        iframe.setAttribute('src', ''); // Videoyu tamamen keser ve sesi durdurur
    }
    modal.style.display = "none";
}

closeModal.addEventListener('click', stopAndCloseModal);
window.addEventListener('click', (e) => { if(e.target === modal) stopAndCloseModal(); });
