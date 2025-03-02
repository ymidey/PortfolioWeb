import { projects } from './projects-data.js';
function createProjectHTML(project) {
  return `
  <div class="project-container">
    <div class="container-left">
      <a href="${project.links.details}" title="Voir ${project.title}">
        <img src="${project.image}" alt="Capture d'écran ${project.title}" loading="lazy">
      </a>
    </div>
    <div class="container-right">
      <h3>${project.title}</h3>
      <ul>${project.tech.map(tech => `<li>${tech}</li>`).join('')}</ul>
      <p>${project.description}</p>
      <div class="project-link">
        <div class="link-left">
          <a href="${project.links.details}">En savoir plus</a>
        </div>
        <div class="link-right">
          ${project.links.github ?
      `<a href="${project.links.github}" target="_blank" rel="noopener" aria-label="Code source (nouvel onglet)">
              <img src="./images/icons/github-icon.svg" alt="" class="icons">
            </a>` : ''}
          ${project.links.liveDemo ?
      `<a href="${project.links.liveDemo}" target="_blank" rel="noopener" aria-label="Démo live (nouvel onglet)">
              <img src="./images/icons/LinkWeb.svg" alt="" class="icons">
            </a>` : ''}
        </div>
      </div>
    </div>
  </div>`;
}

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

  const container = document.getElementById('projects-container');

  // Ajout progressif pour meilleure performance
  const fragment = document.createDocumentFragment();

  projects.forEach(project => {
    const div = document.createElement('div');
    div.innerHTML = createProjectHTML(project);
    fragment.appendChild(div.firstElementChild);
  });

  container.appendChild(fragment);

  // Réinitialiser les animations GSAP si nécessaire
  if (window.gsap) {
    gsap.utils.toArray('.project-container').forEach(project => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top center+=100"
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      });
    });
  }
});
