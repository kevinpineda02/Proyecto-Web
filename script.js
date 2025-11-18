// IntersectionObserver para content-two
document.addEventListener('DOMContentLoaded', function() {
    const contentTwo = document.querySelector('.content-two');
    const infoBox = document.querySelector('.info-box');
    
    if (contentTwo && infoBox) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Añadir clase cuando el elemento entra en vista
                    contentTwo.classList.add('in-view');
                    infoBox.classList.add('animate-in');
                } else {
                    // Opcional: remover clase cuando sale de vista
                    contentTwo.classList.remove('in-view');
                    infoBox.classList.remove('animate-in');
                }
            });
        }, {
            threshold: 0.3, // Se activa cuando el 30% del elemento es visible
            rootMargin: '0px 0px -10% 0px' // Margen para activar antes
        });
        
        // Observar el contenedor content-two
        observer.observe(contentTwo);
    }
    
    // === MENÚ HAMBURGUESA ===
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            
            // Toggle del menú
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Cerrar menú con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
    
    // Añadir año dinámico al footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});