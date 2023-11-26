document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    // Animation de mon titre
    gsap.to('.char', {
        y: 0,
        stagger: 0.04,
        duration: .1
    })

    // Animation de mon tableau de mes compétences
    const skills = document.querySelectorAll(".skills li")
    function animationSkills() {
        gsap.from(skills, {
            opacity: 0,
            y: 100,
            stagger: 0.1,
            duration: .7,
        });
    }

    ScrollTrigger.create({
        trigger: skills,
        start: "top bottom",
        onEnter: animationSkills,
    });


    ScrollTrigger.create({
        trigger: skills,
        start: "bottom top",
        onEnter: animationSkills,
    });

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
            stagger: 0.2,
            duration: 1,
        });
    }

    animateElements();

    // Animation de mon "blob" qui suit la souris sur ma section hero
    let blobSVG = document.getElementById("animate-background");

    let setCursorPosition = function (e) {
        let xPosition = e.clientX - blobSVG.clientWidth / 2 + "px";
        let yPosition = e.clientY - blobSVG.clientHeight / 2 + "px";
        blobSVG.style.transform =
            "translate(" + xPosition + "," + yPosition + ")";
        return {
            x: xPosition,
            y: yPosition
        };
    };

    document.addEventListener("mousemove", e => setCursorPosition(e));

    // Récupération de la dimension de l'écran 
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calcul des coordonnées pour placer la forme au milieu de l'écran
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    // Animation de opacité et de l'échelle de mon svg contenant mon "blob" 
    gsap.from(blobSVG, {
        x: centerX,
        y: centerY,
        scale: 0,
        opacity: 0,
        duration: 8,
    });


    const projects = document.querySelectorAll(".project-container");

    projects.forEach((project) => {
        const animation = gsap.from(project, {
            opacity: 0,
            y: 70,
            stagger: 0.1,
            duration: 0.7,
            paused: true,
        });

        ScrollTrigger.create({
            trigger: project,
            start: "bottom bottom",
            onEnter: () => animation.play(),
            onLeaveBack: () => animation.reverse(),
        });
    });



})