document.addEventListener('DOMContentLoaded', function () {
    // Récupère le thème actuel dans le stockage local (s'il y en a un)
    let currentTheme = localStorage.getItem('theme') || 'light';

    // Applique le thème actuel
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Sélectionne le bouton de commutation de thème (ajustez le sélecteur en fonction de votre HTML)
    const themeToggle = document.getElementById('theme-toggle');

    // Ajoute un écouteur d'événements pour le bouton de commutation de thème
    themeToggle.addEventListener('click', function () {
        // Bascule entre les thèmes
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Applique le nouveau thème
        document.documentElement.setAttribute('data-theme', newTheme);

        // Enregistre le thème actuel dans le stockage local
        localStorage.setItem('theme', newTheme);

        // Met à jour la variable du thème actuel
        currentTheme = newTheme;
    });
});