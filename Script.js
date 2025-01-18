gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to("#home", {
    opacity: 1,
    duration: 1
});

tl.from(".dept-text", {
    y: 50,
    opacity: 0,
    duration: 1
}, "-=0.5");

tl.from(".main-title", {
    scale: 1.5,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.7");

tl.from(".date", {
    y: -50,
    opacity: 0,
    duration: 0.8
}, "-=0.5");

tl.from(".buttons button", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
}, "-=0.3");

gsap.utils.toArray('.about-section').forEach((section, i) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse",
            markers: false
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.from(".Events .section-title", {
    scrollTrigger: {
        trigger: ".Events",
        start: "top center",
        toggleActions: "play none none reverse",
        markers: false
    },
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".event-card", {
    scrollTrigger: {
        trigger: ".event-card",
        start: "top center",
        toggleActions: "play none none reverse",
        markers: false
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
});

gsap.from(".explore-btn", {
    scrollTrigger: {
        trigger: ".explore-btn",
        start: "top bottom",
        toggleActions: "play none none reverse",
        markers: false
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".Gallery .section-title", {
    scrollTrigger: {
        trigger: ".Gallery",
        start: "top center",
        toggleActions: "play none none reverse",
        markers: false
    },
    x: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".Footer footer", {
    scrollTrigger: {
        trigger: ".Footer",
        start: "top bottom",
        toggleActions: "play none none reverse",
        markers: false
    },
    y: 100,
    opacity: 0,
    duration: 1
});

ScrollTrigger.config({
    ignoreMobileResize: true
});

ScrollTrigger.refresh();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


