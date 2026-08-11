const App = {

    init() {

        this.cacheDOM();

        this.stickyNavbar();

        this.smoothScroll();

        this.activeNavigation();

    },

    cacheDOM() {

        this.header = document.querySelector(".header");

        this.links = document.querySelectorAll('.header__nav a');

        this.sections = document.querySelectorAll("section");

    },



    /* ====================================== */

    /* STICKY NAVBAR */

    /* ====================================== */

    stickyNavbar() {

        window.addEventListener("scroll", () => {

            if(window.scrollY > 80){

                this.header.classList.add("scrolled");

            }

            else{

                this.header.classList.remove("scrolled");

            }

        });

    },



    /* ====================================== */

    /* SMOOTH SCROLL */

    /* ====================================== */

    smoothScroll(){

        this.links.forEach(link=>{

            link.addEventListener("click",(e)=>{

                e.preventDefault();

                const target=document.querySelector(

                    link.getAttribute("href")

                );

                if(!target) return;

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            });

        });

    },



    /* ====================================== */

    /* ACTIVE NAVIGATION */

    /* ====================================== */

    activeNavigation(){
        window.addEventListener("scroll",()=>{
            let current="";

            this.sections.forEach(section=>{
                // solo secciones que tengan id real
                if(!section.id) return;

                const top=section.offsetTop-150;
                if(window.scrollY>=top){
                    current=section.getAttribute("id");
                }
            });

            this.links.forEach(link=>{
                link.classList.remove("active");
                const targetId = link.getAttribute("href").replace('#','');
                if(targetId && targetId === current){
                    link.classList.add("active");
                }
            });
        });

        // set inicial
        window.dispatchEvent(new Event('scroll'));
    }

};

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        App.init();

    }

);



Object.assign(App,{

    /* ====================================== */
    /* SCROLL REVEAL */
    /* ====================================== */

    reveal(){

        const elements=document.querySelectorAll(

            ".card, .metric-card, .feature-card, .analysis-card, .pillar-card, .timeline__item, .loop-step, .mechanic-card, .level-card, .ux-card, .tech-card, .reflection-card"

        );

        const observer=new IntersectionObserver(

            (entries)=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add("reveal-active");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {

                threshold:.15

            }

        );

        elements.forEach((element,index)=>{

            element.style.transitionDelay=`${index*80}ms`;

            observer.observe(element);

        });

    },



    /* ====================================== */
    /* HERO PARALLAX */
    /* ====================================== */

    heroParallax(){

        const hero=document.querySelector(".hero");

        if(!hero) return;

        window.addEventListener("scroll",()=>{

            const offset=window.pageYOffset;

            hero.style.backgroundPositionY=`${offset*0.45}px`;

        });

    },



    /* ====================================== */
    /* COUNTERS */
    /* ====================================== */

    counters(){

        const counters=document.querySelectorAll("[data-counter]");

        if(!counters.length) return;

        const observer=new IntersectionObserver(

            (entries)=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        const counter=entry.target;

                        const target=+counter.dataset.counter;

                        let current=0;

                        const increment=Math.max(1,target/80);

                        const update=()=>{

                            current+=increment;

                            if(current<target){

                                counter.textContent=Math.floor(current);

                                requestAnimationFrame(update);

                            }

                            else{

                                counter.textContent=target;

                            }

                        };

                        update();

                        observer.unobserve(counter);

                    }

                });

            },

            {

                threshold:.5

            }

        );

        counters.forEach(counter=>{

            observer.observe(counter);

        });

    },



    /* ====================================== */
    /* FLOATING ELEMENTS */
    /* ====================================== */

    floatingCards(){

        const cards=document.querySelectorAll(

            ".metric-card, .feature-card"

        );

        cards.forEach(card=>{

            card.addEventListener("mousemove",(e)=>{

                const rect=card.getBoundingClientRect();

                const x=e.clientX-rect.left;

                const y=e.clientY-rect.top;

                card.style.transform=

                `

                perspective(900px)

                rotateX(${-(y-rect.height/2)/20}deg)

                rotateY(${(x-rect.width/2)/20}deg)

                translateY(-8px)

                `;

            });

            card.addEventListener("mouseleave",()=>{

                card.style.transform="";

            });

        });

    }

});



/* ====================================== */
/* EXTEND INIT */
/* ====================================== */

const originalInit=App.init.bind(App);

App.init=function(){

    originalInit();

    this.reveal();

    this.heroParallax();

    this.counters();

    this.floatingCards();

};



/* ====================================== */
/* CSS CLASSES CREATED BY JS */
/* ====================================== */

document.addEventListener("DOMContentLoaded",()=>{

    document.querySelectorAll(

        ".card,.metric-card,.feature-card,.analysis-card,.pillar-card,.timeline__item,.loop-step,.mechanic-card,.level-card,.ux-card,.tech-card,.reflection-card"

    ).forEach(el=>{

        el.classList.add("reveal");

    });

});


Object.assign(App,{

    /* ====================================== */
    /* GALLERY LIGHTBOX */
    /* ====================================== */

    gallery(){

        const images=document.querySelectorAll(".gallery-card img");

        if(!images.length) return;

        const lightbox=document.createElement("div");
        lightbox.className="lightbox";

        lightbox.innerHTML=`

            <span class="lightbox-close">&times;</span>

            <img src="" alt="Gallery Preview">

        `;

        document.body.appendChild(lightbox);

        const preview=lightbox.querySelector("img");
        const close=lightbox.querySelector(".lightbox-close");

        images.forEach(image=>{

            image.addEventListener("click",()=>{

                preview.src=image.src;

                lightbox.classList.add("active");

                document.body.style.overflow="hidden";

            });

        });

        close.addEventListener("click",()=>{

            lightbox.classList.remove("active");

            document.body.style.overflow="";

        });

        lightbox.addEventListener("click",(e)=>{

            if(e.target===lightbox){

                lightbox.classList.remove("active");

                document.body.style.overflow="";

            }

        });

    },



    /* ====================================== */
    /* CARD GLOW EFFECT */
    /* ====================================== */

    cardGlow(){

        const cards=document.querySelectorAll(

            ".card,.feature-card,.analysis-card,.pillar-card,.mechanic-card,.level-card,.ux-card,.tech-card,.reflection-card"

        );

        cards.forEach(card=>{

            card.addEventListener("mousemove",(e)=>{

                const rect=card.getBoundingClientRect();

                const x=e.clientX-rect.left;

                const y=e.clientY-rect.top;

                card.style.background=

                `

                radial-gradient(

                    circle at ${x}px ${y}px,

                    rgba(193,18,31,.3),

                    transparent 75%

                ),

                white

                `;

            });

            card.addEventListener("mouseleave",()=>{

                card.style.background="white";

            });

        });

    },



    /* ====================================== */
    /* TRAILER BUTTON */
    /* ====================================== */

    trailer(){

        const button=document.querySelector(".btn-trailer");

        if(!button) return;

        button.addEventListener("mouseenter",()=>{

            button.style.transform="scale(1.08)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    },



    /* ====================================== */
    /* IMAGE ZOOM */
    /* ====================================== */

    imageZoom(){

        document.querySelectorAll(

            ".gallery img,.hero img,.level-card img"

        ).forEach(image=>{

            image.addEventListener("mouseenter",()=>{

                image.style.transform="scale(1.05)";

            });

            image.addEventListener("mouseleave",()=>{

                image.style.transform="";

            });

        });

    },



    /* ====================================== */
    /* PERFORMANCE */
    /* ====================================== */

    performance(){

        let ticking=false;

        window.addEventListener("scroll",()=>{

            if(!ticking){

                requestAnimationFrame(()=>{

                    ticking=false;

                });

                ticking=true;

            }

        });

    }

});



/* ====================================== */
/* EXTEND INIT */
/* ====================================== */

const previousInit=App.init.bind(App);

App.init=function(){

    previousInit();

    this.gallery();

    this.cardGlow();

    this.trailer();
    
    this.imageZoom();

    this.performance();

};



/* ====================================== */
/* LOADING SCREEN */
/* ====================================== */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loading-screen");

    if(loader){

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },800);

    }

});
