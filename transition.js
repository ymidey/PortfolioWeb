document.addEventListener("DOMContentLoaded", function () {
    const myTitleHeader = new SplitType('#hero-title')
    const myParagrapheHeader = new SplitType('#hero-paragraphe')

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.char', {
        y: 0,
        stagger: 0.04,
        duration: .1
    })

    const skills = document.querySelectorAll(".skills li")
    function animationSkills() {
        gsap.from(skills, {
            opacity: 0,
            y: 100,
            stagger: 0.2, // délai entre chaque élément
            duration: .7, // durée totale de l'animation
        });
    }

    animationSkills();

    // Animation déclenchée à l'arrivée sur l'élément
    ScrollTrigger.create({
        trigger: skills,
        start: "bottom",
        onEnter: animationSkills,
    });

    const lineLeft = document.querySelector(".line-left");
    const lineHero = document.querySelector(".line-hero");
    const lineIcons = document.querySelectorAll(".line-icons a");

    // Fonction pour animer les éléments
    function animateElements() {
        gsap.from(lineHero, {
            height: 0,
            opacity: 0,
            y: 100,
            duration: 1,
        });

        gsap.from(lineIcons, {
            opacity: 0,
            y: 100,
            stagger: 0.2, // Délai entre chaque élément
            duration: 1,
        });
    }

    // Lancer l'animation au chargement de la page
    animateElements();

    // Animation déclenchée lorsqu'on arrive sur la section (.line-left)
    ScrollTrigger.create({
        trigger: lineLeft,
        start: "bottom",
        onEnter: animateElements,
    });
})