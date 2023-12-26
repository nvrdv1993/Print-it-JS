// Tableau d'objets représentant chaque diapositive avec une image et une légende
const slides = [
    // Diapositive 1
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    // Diapositive 2
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    // Diapositive 3
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    // Diapositive 4
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Variable pour suivre la diapositive actuelle
let currentSlide = 0;

// Sélection des flèches gauche et droite dans le HTML
const flecheGauche = document.querySelector('.arrow_left');
const flecheDroite = document.querySelector('.arrow_right');

// Nombre total de diapositives
const nombreSlides = slides.length;

// Sélection du conteneur des points
const dotsContainer = document.querySelector('.dots');

// Génération des points pour chaque diapositive
for (let i = 0; i < nombreSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('dot_selected'); // Ajoute la classe pour le point sélectionné sur la première diapositive
    }
    dotsContainer.appendChild(dot);
}

// Sélection de tous les points
const dots = document.querySelectorAll('.dot');

// Fonction pour mettre à jour l'affichage des points
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentSlide) {
            dot.classList.add('dot_selected'); // Ajoute la classe pour le point sélectionné sur la diapositive actuelle
        }
    });
}

// Écouteurs d'événements pour les flèches gauche et droite
flecheGauche.addEventListener('click', () => {
    console.log("Clic sur la flèche gauche");
    changerDiapositive('gauche');
    updateImage();
});

flecheDroite.addEventListener('click', () => {
    console.log("Clic sur la flèche droite");
    changerDiapositive('droite');
    updateImage();
});

// Fonction pour changer de diapositive en fonction de la direction spécifiée
function changerDiapositive(direction) {
    if (direction === 'droite') {
        currentSlide = (currentSlide + 1) % nombreSlides; // Passage à la diapositive suivante (cycle)
    } else if (direction === 'gauche') {
        currentSlide = (currentSlide - 1 + nombreSlides) % nombreSlides; // Passage à la diapositive précédente (cycle)
    }
    updateDots(); // Met à jour l'affichage des points
}

// Fonction pour mettre à jour l'image et le texte de la diapositive actuelle
function updateImage() {
    const currentSlideData = slides[currentSlide];
    const newImagePath = `./assets/images/slideshow/${currentSlideData.image}`;

    // Modifie la source de l'image directement dans le code HTML
    document.querySelector('.banner-img').src = newImagePath;
    document.querySelector('.banner-img').alt = currentSlideData.tagLine;

    // Met à jour le texte du paragraphe
    document.querySelector('#banner p').innerHTML = currentSlideData.tagLine;
}
