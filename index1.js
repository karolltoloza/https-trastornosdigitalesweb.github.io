
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // "Conoce Mas" button functionality
    const conoceMasButton = document.querySelector('#hero button');
    conoceMasButton.addEventListener('click', function() {
        const somosPruyaSection = document.querySelector('#somos-proya');
        somosPruyaSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const animateSections = () => {
        const triggerBottom = window.innerHeight * 0.8;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', animateSections);

    // Hover effect for info buttons
    const infoButtons = document.querySelectorAll('.info-btn');
    infoButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#45a049';
        });
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#4CAF50';
        });
    });
});