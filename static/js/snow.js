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
                snowTrigger.innerHTML = "Stop snow ❄️"; // Optionnel : changer le texte
            } else {
                stopSnowGracefully();
                isSnowing = false;
                snowTrigger.innerHTML = "Let it snow ❄️";
            }
        });
    }

    function startSnow() {
        // Crée un flocon toutes les 150ms pour un effet régulier
        snowInterval = setInterval(createFlake, 150);
    }

    function stopSnowGracefully() {
        // 1. On arrête de créer de nouveaux flocons
        clearInterval(snowInterval);

        // 2. On fait disparaître les flocons existants en douceur (fade out)
        const flakes = document.querySelectorAll('.snowflake');
        flakes.forEach(flake => {
            flake.style.transition = "opacity 2s ease-out"; // Transition de 2 secondes
            flake.style.opacity = "0";
            
            // On les retire du DOM seulement après la fin du fondu
            setTimeout(() => {
                flake.remove();
            }, 2000);
        });
    }

    function createFlake() {
        const flake = document.createElement('div');
        flake.innerHTML = '❄';
        flake.classList.add('snowflake');
        
        // Propriétés aléatoires pour le réalisme
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.animationDuration = Math.random() * 3 + 3 + 's'; 
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        flake.style.fontSize = Math.random() * 10 + 10 + 'px';
        
        document.body.appendChild(flake);

        // Nettoyage automatique si l'animation se termine
        setTimeout(() => {
            if (flake.parentElement) {
                flake.remove();
            }
        }, 6000);
    }
});