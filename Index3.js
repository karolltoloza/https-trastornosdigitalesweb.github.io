document.addEventListener('DOMContentLoaded', () => {
    // Particle background
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
      },
      retina_detect: true
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Intersection Observer for fade-in animations
    const fadeElems = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    fadeElems.forEach(elem => fadeObserver.observe(elem));
  
    // Typing effect for titles
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
      const text = title.textContent;
      title.textContent = '';
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          title.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      typeWriter();
    });
  
    // 3D tilt effect for cards
    VanillaTilt.init(document.querySelectorAll('.carta'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  
    // Animated background gradient
    const gradientBg = document.createElement('div');
    gradientBg.classList.add('animated-bg');
    document.body.appendChild(gradientBg);
  
    let hue = 0;
    const animateGradient = () => {
      hue = (hue + 1) % 360;
      gradientBg.style.background = `
        linear-gradient(
          ${hue}deg,
          hsl(${hue}, 100%, 20%),
          hsl(${(hue + 60) % 360}, 100%, 20%)
        )
      `;
      requestAnimationFrame(animateGradient);
    };
    animateGradient();
  });

  document.addEventListener('DOMContentLoaded', () => {
    // ... (previous JavaScript remains the same) ...
  
    // Add hover effect for game button
    const gameButton = document.querySelector('.game-button');
    if (gameButton) {
      gameButton.addEventListener('mouseover', () => {
        gameButton.style.transform = 'scale(1.1) rotate(5deg)';
      });
      gameButton.addEventListener('mouseout', () => {
        gameButton.style.transform = 'scale(1) rotate(0deg)';
      });
    }
  
    // Add click effect for game button
    if (gameButton) {
      gameButton.addEventListener('click', (e) => {
        e.preventDefault();
        gameButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
          gameButton.style.transform = 'scale(1)';
          window.location.href = gameButton.getAttribute('href');
        }, 200);
      });
    }
});
