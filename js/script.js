// Переключатель тем и шрифта
let darkButton = document.querySelector('.theme-button-dark');
let lightButton = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

darkButton.onclick = function() {
    document.body.classList.add('dark');

    darkButton.classList.add('active');
    lightButton.classList.remove('active');
};

lightButton.onclick = function() {
    document.body.classList.remove('dark');

    darkButton.classList.remove('active');
    lightButton.classList.add('active');
};

serifButton.onclick = function() {
    document.body.classList.add('serif');

    serifButton.classList.add('active');
    sansSerifButton.classList.remove('active');
};

sansSerifButton.onclick = function() {
    document.body.classList.remove('serif');

    serifButton.classList.remove('active');
    sansSerifButton.classList.add('active');
};

// Спрятанные статьи
let blogArticles = document.querySelectorAll('.blog-article.short');

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('.more');

    moreButton.onclick = function() {
        blogArticle.classList.remove('short');
    };
};

// Переключатель раскладок карточек
let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

let cards = document.querySelector('.cards');

gridViewButton.onclick = function() {
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');

    cards.classList.remove('list');
};

listViewButton.onclick = function() {
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');

    cards.classList.add('list');
}; 
// Переключатель галереи
let activeFoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let preview of previews) {
    preview.onclick = function(evt) {
        evt.preventDefault();

        activeFoto.src = preview.href;
        let currentActive = document.querySelector('.active-item');
        currentActive.classList.remove('active-item');
        preview.classList.add('active-item');
    };
};