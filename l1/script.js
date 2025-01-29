// Fonction pour générer une couleur aléatoire entre noir et gris clair
function getRandomGrayColor() {
    const grayValue = Math.floor(Math.random() * 156); // Valeur entre 0 et 155 (noir à gris clair)
    return `rgb(${grayValue}, ${grayValue}, ${grayValue})`; // Génère une couleur RGB avec les mêmes valeurs pour R, G, B
}

// Fonction pour générer une taille aléatoire pour les bulles
function getRandomSize() {
    return Math.floor(Math.random() * 20) + 5; // Taille aléatoire entre 10px et 60px
}

// Fonction pour créer une bulle
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Positionner la bulle à un point horizontal aléatoire au bas de la page
    const x = Math.random() * window.innerWidth;
    bubble.style.left = `${x}px`;

    // Appliquer une taille aléatoire à la bulle
    const randomSize = getRandomSize();
    bubble.style.width = `${randomSize}px`;
    bubble.style.height = `${randomSize}px`;

    // Ajouter la bulle au body
    document.body.appendChild(bubble);

    // Supprimer la bulle après son animation (4s durée de l'animation)
    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

// Créer plusieurs bulles aléatoires toutes les secondes
setInterval(createBubble, 100);
