document.addEventListener('DOMContentLoaded', function () {
    // Récupération du thème actuel dans le stockage local (s'il y en a un)
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // Application du thème actuel
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Selection du bouton de toggle du thème
    const themeToggle = document.getElementById('theme-toggle');

    // Ajout d'un écouteur d'événement "click" sur le bouton
    themeToggle.addEventListener('click', function () {
        // Bascule entre les thèmes
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Applique le nouveau thème
        document.documentElement.setAttribute('data-theme', newTheme);

        // Enregistre le thème actuel dans le stockage local
        localStorage.setItem('theme', newTheme);

        // Mise à jour de la variable du thème actuel
        currentTheme = newTheme;
    });

    var burgerMenu = document.querySelectorAll('.burger-menu');
    var navMobile = document.getElementById('nav-mobile');
    var liens = document.querySelectorAll('#nav-mobile a');

    burgerMenu.forEach(e => {
        e.addEventListener('click', function () {
            // Inverse la visibilité de la navigation
            navMobile.style.display = (navMobile.style.display === 'none' || navMobile.style.display === '') ? 'flex' : 'none';
        });
    });

    // Gestionnaire d'événements de clic à chaque lien
    liens.forEach(function (lien) {
        lien.addEventListener('click', function () {
            // Cachez la div #nav-mobile lorsqu'il y a un clic sur un lien
            navMobile.style.display = 'none';
        });
    });

});
