

// Implementación de Disqus. NO EDITAR.

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

var disqus_config = function () {
this.page.url = "https://pv-grupal.github.io/multimedia/";  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = "SILVER_STRIDER"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://silver-strider.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();

function enviar() {
    Swal.fire({
        title: "Mensaje enviado",
        text: "Tu mensaje fue enviado correctamente. ¡Gracias por querer contactar con nosotros!",
        icon: "success"
    });
}

// CARRUSEL RESEÑAS
document.addEventListener('DOMContentLoaded', () => {
  
  // Buscamos todos los contenedores de carrusel
  const allCarousels = document.querySelectorAll('.carousel-container');

  allCarousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.review-slide');
    const dotsContainer = carousel.querySelector('.dots-container');
    let currentIndex = 0;

    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
      
      dotsContainer.appendChild(dot);
    });

    const dots = carousel.querySelectorAll('.dot');

    function updateCarousel() {
      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  });

});