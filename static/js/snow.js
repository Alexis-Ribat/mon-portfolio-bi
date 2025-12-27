document.addEventListener('DOMContentLoaded', function() {
    const snowTrigger = document.querySelector('a[href="#!"]');
    let isSnowing = false;
    let snowInterval;

    if (snowTrigger) {
        snowTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (!isSnowing) {
                startSnow();
                isSnowing = true;
                snowTrigger.innerHTML = "Stop snow ❄️";
            } else {
                stopSnowVerySlowly();
                isSnowing = false;
                snowTrigger.innerHTML = "Let it snow ❄️";
            }
        });
    }

    function startSnow() {
        snowInterval = setInterval(createFlake, 150);
    }

    function stopSnowVerySlowly() {
        // 1. On arrête immédiatement la création de nouveaux flocons
        clearInterval(snowInterval);

        // 2. On récupère tous les flocons présents
        const flakes = document.querySelectorAll('.snowflake');
        
        flakes.forEach((flake, index) => {
            // 3. On ajoute un délai aléatoire pour que chaque flocon ne disparaisse pas au même moment
            const randomDelay = Math.random() * 2000; // Jusqu'à 2s de délai avant de commencer à s'effacer
            
            setTimeout(() => {
                // 4. On définit une transition d'opacité très longue (5 secondes)
                flake.style.transition = "opacity 5s ease-in-out";
                flake.style.opacity = "0";

                // 5. On retire le flocon du DOM seulement après la fin de la transition de 5s
                setTimeout(() => {
                    if (flake.parentElement) flake.remove();
                }, 5000);
            }, randomDelay);
        });
    }

    function createFlake() {
        const flake = document.createElement('div');
        flake.innerHTML = '❄';
        flake.classList.add('snowflake');
        
        flake.style.left = Math.random() * 100 + 'vw';
        // Vitesse de chute légèrement ralentie pour une vibe plus calme
        flake.style.animationDuration = Math.random() * 5 + 5 + 's'; 
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        flake.style.fontSize = Math.random() * 10 + 10 + 'px';
        
        document.body.appendChild(flake);

        setTimeout(() => {
            if (flake.parentElement) flake.remove();
        }, 10000); // Durée de vie plus longue pour accompagner la chute lente
    }
});

/* --- GESTION DU PRELOADER SIMPLE --- */
window.addEventListener('load', function() {
    const preloader = document.getElementById('simple-preloader');

    if (preloader) {
        // On force une attente de 2 secondes (2000ms) pour voir l'animation
        setTimeout(() => {
            // On ajoute la classe CSS qui gère le fondu de disparition
            preloader.classList.add('hidden');

            // Une fois la transition CSS terminée (0.5s), on supprime l'élément du DOM
            setTimeout(() => {
                 preloader.remove();
            }, 500);

        }, 2000); // <-- Changez cette valeur pour modifier la durée du chargement
    }
});