document.addEventListener("DOMContentLoaded", function () {
    const myTitle = new SplitType('#hero-title')
    const myParagraphe = new SplitType('#hero-paragraphe')


    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })

    gsap.to('.char', {
        y: 0,
        stagger: 0.03,
        delay: 0.2,
        duration: .1
    })


})