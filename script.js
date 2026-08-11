/* ===================================================== */
/* PORTFOLIO LANDING PAGE */
/* MAIN JAVASCRIPT FILE */
/* ===================================================== */

const App = {

    init() {

        this.cacheDOM();

        this.stickyNavbar();

        this.smoothScroll();

        this.activeNavigation();

        this.scrollReveal();

        this.setupContactForm();

        this.setupCVDownloads();

    },

    cacheDOM() {

        this.header = document.querySelector(".header");

        this.navLinks = document.querySelectorAll('.header__nav-list a');

        this.sections = document.querySelectorAll("section[id]");

        this.menuCheckbox = document.getElementById("menu");

    },

    /* ====================================== */
    /* STICKY NAVBAR */
    /* ====================================== */

    stickyNavbar() {

        window.addEventListener("scroll", () => {

            if(window.scrollY > 80) {

                this.header.classList.add("scrolled");

            } else {

                this.header.classList.remove("scrolled");

            }

        });

    },

    /* ====================================== */
    /* SMOOTH SCROLL */
    /* ====================================== */

    smoothScroll() {

        this.navLinks.forEach(link => {

            link.addEventListener("click", (e) => {

                e.preventDefault();

                const target = document.querySelector(link.getAttribute("href"));

                if(!target) return;

                // Close mobile menu

                this.menuCheckbox.checked = false;

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            });

        });

    },

    /* ====================================== */
    /* ACTIVE NAVIGATION */
    /* ====================================== */

    activeNavigation() {

        window.addEventListener("scroll", () => {

            let current = "";

            this.sections.forEach(section => {

                const top = section.offsetTop - 150;

                const height = section.offsetHeight;

                if(window.scrollY >= top) {

                    current = section.getAttribute("id");

                }

            });

            this.navLinks.forEach(link => {

                link.classList.remove("active");

                if(link.getAttribute("href") === `#${current}`) {

                    link.classList.add("active");

                }

            });

        });

    },

    /* ====================================== */
    /* SCROLL REVEAL ANIMATIONS */
    /* ====================================== */

    scrollReveal() {

        const elements = document.querySelectorAll(

            ".section-heading, .about-card, .project-card, .project-card-secondary, .skill-item, .cv-card"

        );

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if(!entry.isIntersecting) return;

                entry.target.classList.add("in-view");

                observer.unobserve(entry.target);

            });

        }, {

            threshold: 0.15,

            rootMargin: "0px 0px -60px 0px"

        });

        elements.forEach(element => {

            observer.observe(element);

        });

    },

    /* ====================================== */
    /* CONTACT FORM WITH EMAILJS */
    /* ====================================== */

    setupContactForm() {

        // Initialize EmailJS

        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

        const form = document.getElementById("contactForm");

        if(!form) return;

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const name = document.getElementById("name").value;

            const lastname = document.getElementById("lastname").value;

            const email = document.getElementById("email").value;

            const subject = document.getElementById("subject").value;

            const message = document.getElementById("message").value;

            // Prepare template parameters

            const templateParams = {

                to_email: "simonburgosb@gmail.com",

                from_name: `${name} ${lastname}`,

                from_email: email,

                subject: subject,

                message: message

            };

            // Send email via EmailJS

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)

                .then((response) => {

                    console.log("Email sent successfully!", response);

                    // Show success message

                    this.showNotification("Message sent successfully! I'll get back to you soon.", "success");

                    // Reset form

                    form.reset();

                })

                .catch((error) => {

                    console.error("Error sending email:", error);

                    this.showNotification("Error sending message. Please try again.", "error");

                });

        });

    },

    /* ====================================== */
    /* CV DOWNLOADS */
    /* ====================================== */

    setupCVDownloads() {

        const cvCards = document.querySelectorAll(".cv-card");

        cvCards.forEach((card, index) => {

            card.addEventListener("click", (e) => {

                // Map index to language

                const languages = ["es", "en", "fr"];

                const lang = languages[index];

                // Simulated download - replace with actual CV file paths

                const cvPath = `./Cv_SimonBurgos_${lang.toUpperCase()}.pdf`;

                this.downloadFile(cvPath);

            });

        });

    },

    downloadFile(filePath) {

        const link = document.createElement("a");

        link.href = filePath;

        link.download = filePath.split("/").pop();

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    },

    /* ====================================== */
    /* NOTIFICATION SYSTEM */
    /* ====================================== */

    showNotification(message, type = "success") {

        const notification = document.createElement("div");

        notification.style.cssText = `

            position: fixed;

            top: 100px;

            right: 20px;

            padding: 20px 30px;

            background: ${type === "success" ? "#2E5BFF" : "#ff6b6b"};

            color: white;

            border-radius: 8px;

            box-shadow: 0 8px 24px rgba(0,0,0,.15);

            z-index: 2000;

            font-weight: 600;

            animation: slideInRight .3s ease-out;

            max-width: 400px;

        `;

        notification.textContent = message;

        document.body.appendChild(notification);

        // Remove after 5 seconds

        setTimeout(() => {

            notification.style.animation = "slideOutRight .3s ease-out forwards";

            setTimeout(() => {

                document.body.removeChild(notification);

            }, 300);

        }, 5000);

    }

};

/* ===================================================== */
/* INITIALIZATION */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

/* ===================================================== */
/* ADD SLIDE ANIMATIONS TO DOCUMENT */
/* ===================================================== */

const style = document.createElement("style");

style.textContent = `

    @keyframes slideInRight {

        from {

            opacity: 0;

            transform: translateX(30px);

        }

        to {

            opacity: 1;

            transform: translateX(0);

        }

    }

    @keyframes slideOutRight {

        from {

            opacity: 1;

            transform: translateX(0);

        }

        to {

            opacity: 0;

            transform: translateX(30px);

        }

    }

`;

document.head.appendChild(style);
