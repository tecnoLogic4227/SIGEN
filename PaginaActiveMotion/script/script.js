/*..................................................MENU OCULTO.........................................................*/
$(function(){
  $(".menu-barras").click(function(){
      $(".menu-adaptable").slideToggle("slow");
  });

  $(".op-menu-oculto").click(function(){
      $(".op-menu-adaptable").hide();
  });
});

/*.................................................CARRUSEL DE IMAGENES.....................................................*/
$(function() {
var $myCarousel = $('#carousel');
if ($myCarousel.length) {
  var carousel = new bootstrap.Carousel($myCarousel[0], {
    interval: 3000,
    wrap: true
  });

  $('.carousel-control-prev').on('click', function() {
    carousel.prev();
  });

  $('.carousel-control-next').on('click', function() {
    carousel.next();
  });
} else {
  console.error('Carousel element not found');
}
});

/*...................................................Lista LOCALES.........................................................*/
function toggleAccordion(header) {
const $item = $(header).parent();
const $content = $item.find('.accordion-content');
const $arrow = $(header).find('.arrow');

if ($content.is(':visible')) {
  $content.hide();
  $arrow.removeClass('active');
  $item.removeClass('active');
} else {
  $content.show();
  $arrow.addClass('active');
  $item.addClass('active');
}
}

/*..........................................BOTON Registro-Login.....................................................*/
$(function() {
console.log('JavaScript cargado correctamente');

$('#btnRegistrarse').on('click', function() {
  window.location.href = 'registro.html';
});

$('#btnLogin').on('click', function() {
  window.location.href = 'indexUsuario.html';
});

$('#btnRegistrar').on('click', function() {
  window.location.href = 'indexUsuario.html';
});
});

/*...............................................Carrusel Usuario......................................................*/
$(function() {
var $myCarousel = $('#carouselExampleIndicators');

if ($myCarousel.length) {
  var carousel = new bootstrap.Carousel($myCarousel[0], {
    interval: 3000,
    wrap: true
  });

  $('.carousel-control-prev').on('click', function() {
    carousel.prev();
  });

  $('.carousel-control-next').on('click', function() {
    carousel.next();
  });
} else {
  console.error('Carousel element not found');
}
});

/*...............................................Boton Perfil.........................................................*/
$(function() {
$('#btnModificar').on('click', function() {
  window.location.href = 'modificarPerfilUsuario.html';
});

$('#btnGuardar').on('click', function() {
  window.location.href = 'perfilUsuario.html';
});
});

/*...............................................Tabla Deportistas Seleccionador.........................................................*/
$(function() {
  $('#btnBuscarDeportista').on('click', function(e) {
      e.preventDefault();
      // conexion a la base de datos
      // respuesta simulada
      const deportistaBuscado = {
          nombre: 'Leo',
          apellido: 'Messi',
          email: 'leomessi@gmail.com',
          ci: '93283202',
          matricula: 'uwbe2912',
          celular: '0292831'
      };
      actualizarTablaDeportista(deportistaBuscado);
  });
});

function actualizarTablaDeportista(deportista) {
  $('#nombre-deportista').text(deportista.nombre);
  $('#apellido-deportista').text(deportista.apellido);
  $('#email-deportista').text(deportista.email);
  $('#ci-deportista').text(deportista.ci);
  $('#matricula-deportista').text(deportista.matricula);
  $('#celular-deportista').text(deportista.celular);
}



/*...............................................Tabla Equipos Seleccionador.........................................................*/
$(document).ready(function() {
  $('#btnIngresarDeportista').click(function() {
      var nombreDeportista = $('#nombreDeportista').val();
      var deporteDeportista = $('#deporteDeportista').val();
      var clubDeportista = $('#clubDeportista').val();

      $('#nombreClub').text(clubDeportista);
      $('#deportista').text(nombreDeportista + ' - ' + deporteDeportista);
  });
});

/*....................................................Boton Index Seleccionador........................................*/
$(function() {
$('#btnConsultarDeportista').on('click', function() {
  window.location.href = 'deportistasSeleccionador.html';
});

$('#btnArmarEquipo').on('click', function() {
  window.location.href = 'armarEquipoSeleccionador.html';
});
});

/*....................................................Boton Armar Equipo Seleccionador...................................*/
$(document).ready(function() {
  $("#btnIngresarDeportista").click(function() {
    var nombreDeportista = $("#nombreDeportista").val();
    var deporteDeportista = $("#deporteDeportista").val();
    var clubDeportista = $("#clubDeportista").val();

    $("#nombreClub").text(clubDeportista);
    $("#deportista").text(nombreDeportista + " (" + deporteDeportista + ")");
  });
});
