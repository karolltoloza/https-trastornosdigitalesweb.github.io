document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.info-card');
    const pulseBtn = document.getElementById('pulseBtn');

    // Función para aplicar la animación de aparición
    function fadeInCard(card) {
        card.style.opacity = '0';
        let delay = 100;
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-in-out';
            card.style.opacity = '1';
        }, delay);
    }

    // Aplicar la animación a cada tarjeta
    cards.forEach(fadeInCard);

    // Animación de pulso para el botón
    pulseBtn.addEventListener('mouseover', () => {
        pulseBtn.style.animation = 'pulse 0.5s infinite';
    });

    pulseBtn.addEventListener('mouseout', () => {
        pulseBtn.style.animation = 'none';
    });

    // Animación al hacer scroll
    window.addEventListener('scroll', () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight && cardBottom > 0) {
                card.style.transform = 'translateX(0)';
                card.style.opacity = '1';
            } else {
                card.style.transform = 'translateX(-50px)';
                card.style.opacity = '0';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll('.top-menu a');

    // Función para manejar el scroll suave
    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    };

    // Añadir evento de clic a cada elemento del menú
    menuItems.forEach(item => {
        item.addEventListener('click', scrollToSection);
    });

    // Función para actualizar la clase activa en el menú
    const updateActiveMenuItem = () => {
        const scrollPosition = window.scrollY;

        menuItems.forEach(item => {
            const sectionId = item.getAttribute('href');
            const section = document.querySelector(sectionId);

            if (section.offsetTop <= scrollPosition + 150 && 
                section.offsetTop + section.offsetHeight > scrollPosition + 150) {
                menuItems.forEach(menuItem => menuItem.classList.remove('active'));
                item.classList.add('active');
            }
        });
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', updateActiveMenuItem);

    // Animación de entrada para los elementos del menú
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
