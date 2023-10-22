document.addEventListener("DOMContentLoaded", function () {
    const myTitle = new SplitType('#header-title')

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })

})