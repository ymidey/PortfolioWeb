document.addEventListener('DOMContentLoaded', function () {
    // Récupération du thème actuel dans le stockage local (s'il y en a un)
    let currentTheme = localStorage.getItem('theme') || 'light';

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


    // Utilisation de SplitType pour animé chaque charactère de mon titre et sous-titre
    const myTitleHeader = new SplitType('#hero-title')
    const myParagrapheHeader = new SplitType('#hero-paragraphe')
});