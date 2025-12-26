document.addEventListener('DOMContentLoaded', function() {
    // On cherche le lien du menu qui contient le texte ou l'ID
    const snowTrigger = document.querySelector('a[href="#!"]');
    let isSnowing = false;
    let snowInterval;

    if (snowTrigger) {
        snowTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (!isSnowing) {
                startSnow();
                isSnowing = true;
            } else {
                stopSnow();
                isSnowing = false;
            }
        });
    }

    function startSnow() {
        snowInterval = setInterval(createFlake, 100);
    }

    function stopSnow() {
        clearInterval(snowInterval);
        document.querySelectorAll('.snowflake').forEach(flake => flake.remove());
    }

    function createFlake() {
        const flake = document.createElement('div');
        flake.innerHTML = '❄';
        flake.classList.add('snowflake');
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Entre 2 et 5s
        flake.style.opacity = Math.random();
        flake.style.fontSize = Math.random() * 10 + 10 + 'px';
        
        document.body.appendChild(flake);

        // Supprime le flocon après l'animation
        setTimeout(() => {
            flake.remove();
        }, 5000);
    }
});