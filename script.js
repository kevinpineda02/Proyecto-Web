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
});