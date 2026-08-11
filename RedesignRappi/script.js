// Active section navigation (orange underline + blue word)
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__nav-list a');
    const sections = document.querySelectorAll('section[id]');

    const offset = 150; // header fijo

    const setActive = () => {
        let currentId = '';

        sections.forEach(section => {
            const top = section.offsetTop - offset;
            if (window.scrollY >= top) currentId = section.getAttribute('id');
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentId) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', setActive);
    setActive();
});

// Card hover
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
    });
});
