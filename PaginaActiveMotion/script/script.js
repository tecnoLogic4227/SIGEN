/*..................................................MENU OCULTO.........................................................*/
$(document).ready(function(){
    $(".menu-barras").click(function(){
    $(".menu-adaptable").slideToggle("slow");
});
});

$(document).ready(function(){
$(".op-menu-oculto").click(function(){
    $(".op-menu-adaptable").hide();
});
});

/*.................................................CARRUSEL DE IMAGENES.....................................................*/
document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.querySelector('#carousel')
  if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      wrap: true
    });

   
    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');

    if (prevButton) {
      prevButton.addEventListener('click', function() {
        carousel.prev();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function() {
        carousel.next();
      });
    }
  } else {
    console.error('Carousel element not found');
  }
});

/*...................................................Lista LOCALES.........................................................*/

function toggleAccordion(header) {
  const item = header.parentElement;
  const content = item.querySelector('.accordion-content');
  const arrow = header.querySelector('.arrow');
  
  if (content.style.display === 'block') {
      content.style.display = 'none';
      arrow.classList.remove('active');
      item.classList.remove('active');
  } else {
      content.style.display = 'block';
      arrow.classList.add('active');
      item.classList.add('active');
  }
}

/*..........................................BOTON Registro-Login.....................................................*/
const btnRegistrarse = document.getElementById('btnRegistrarse');
    btnRegistrarse.addEventListener('click', function() { 
        window.location.href = 'registro.html';
    });
const btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', function() { 
        window.location.href = 'indexUsuario.html';
    });

/*...............................................Carrusel Usuario......................................................*/
document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.querySelector('#carouselExampleIndicators');
  
  if (myCarousel) {
      var carousel = new bootstrap.Carousel(myCarousel, {
          interval: 3000,
          wrap: true
      });

      var prevButton = document.querySelector('.carousel-control-prev');
      var nextButton = document.querySelector('.carousel-control-next');

      if (prevButton) {
          prevButton.addEventListener('click', function() {
              carousel.prev();
          });
      }

      if (nextButton) {
          nextButton.addEventListener('click', function() {
              carousel.next();
          });
      }
  } else {
      console.error('Carousel element not found');
  }
});

/*...............................................Boton Perfil.........................................................*/
const btnModificar = document.getElementById('btnModificar');
btnModificar.addEventListener('click', function() { 
      window.location.href = 'modificarPerfilUsuario.html';
  });

document.addEventListener('DOMContentLoaded', function() {
  var btnGuardar = document.getElementById('btnGuardar');
  if (btnGuardar) {
      btnGuardar.addEventListener('click', function() {
          window.location.href = 'perfilUsuario.html';
      });
  }
});