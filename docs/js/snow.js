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

/* --- GESTION DU PRELOADER (Clip-Path) --- */
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const percentText = document.getElementById('loader-percent');
    const progressBar = document.getElementById('progress-bar-fill');
    
    // On cible le flocon bleu directement
    const blueFlake = document.getElementById('blue-flake');
    
    if (preloader) {
        // Durée exacte de 2 secondes
        const duration = 2000; 
        const interval = 20; 
        const totalSteps = duration / interval; 
        const stepSize = 100 / totalSteps;
        
        let currentProgress = 0;

        const counterInterval = setInterval(() => {
            currentProgress += stepSize;
            
            // Sécurité
            if (currentProgress > 100) currentProgress = 100;
            
            // Affichage entier
            let displayCount = Math.floor(currentProgress);
            
            // 1. Texte
            if (percentText) percentText.innerText = displayCount + "%";
            
            // 2. Barre de progression
            if (progressBar) progressBar.style.width = currentProgress + "%";

            // 3. REMPLISSAGE FLOCON (Technique Inset)
            if (blueFlake) {
                // Pour remplir, on diminue la valeur "inset top"
                // 0% de chargement = 100% coupé en haut
                // 100% de chargement = 0% coupé en haut
                const insetTop = 100 - currentProgress;
                blueFlake.style.clipPath = `inset(${insetTop}% 0 0 0)`;
            }

            // Fin du chargement
            if (currentProgress >= 100) {
                clearInterval(counterInterval);
                
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                        preloader.remove();
                    }, 500);
                }, 200);
            }
        }, interval);
    }
});