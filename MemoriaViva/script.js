/*=====================================================
MEMORIA VIVA
Interactive Case Study
=====================================================*/

/*=====================================================
GLOBAL ELEMENTS
=====================================================*/

const header = document.querySelector(".header");

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav a");


/*=====================================================
HEADER & NAVIGATION
=====================================================*/

function updateHeader(){

    if(!header) return;

    header.classList.toggle(

        "scrolled",

        window.scrollY > 60

    );

}

function updateNavigation(){

    let currentSection = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 140;

        const bottom = top + section.offsetHeight;

        if(window.scrollY >= top && window.scrollY < bottom){

            currentSection = section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.toggle(

            "active",

            link.getAttribute("href") === `#${currentSection}`

        );

    });

}

window.addEventListener("scroll",()=>{

    updateHeader();

    updateNavigation();

});


/*=====================================================
SMOOTH SCROLL
=====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        const target = document.querySelector(

            link.getAttribute("href")

        );

        if(!target) return;

        e.preventDefault();

        window.scrollTo({

            top:target.offsetTop - 90,

            behavior:"smooth"

        });

    });

});


/*=====================================================
SCROLL ANIMATIONS
=====================================================*/

function initScrollAnimations(){

    const animatedElements = document.querySelectorAll(

        `
        .section-heading,
        .overview-card,
        .highlight-card,
        .insight-card,
        .reflection-card,
        .principle,
        .product-card,
        .gallery-item
        `

    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.classList.add("in-view");

            observer.unobserve(entry.target);

        });

    },{

        threshold:.15,

        rootMargin:"0px 0px -60px 0px"

    });

    animatedElements.forEach(element=>{

        observer.observe(element);

    });

}

/*=====================================================
RESEARCH TIMELINE
=====================================================*/

function initTimeline(){

    const items = document.querySelectorAll(".timeline-item");

    if(!items.length) return;

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            items.forEach(item=>{

                item.classList.remove("active");

            });

            entry.target.classList.add("active");

        });

    },{

        threshold:.55

    });

    items.forEach(item=>{

        observer.observe(item);

    });

}

/*=====================================================
UTILITIES
=====================================================*/

function initUtilities(){

    document.querySelectorAll("img").forEach(image=>{

        image.loading = "lazy";

    });

}


/*=====================================================
INIT
=====================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    updateHeader();

    updateNavigation();

    initScrollAnimations();

    initTimeline();

    initUtilities();

});