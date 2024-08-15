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
  let carousel = new bootstrap.Carousel($myCarousel[0], {
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

/*.................................................Mapa Locales........................................................*/

$(document).ready(function() {
  var map = L.map('map').setView([-34.9011, -56.1645], 13); // Coordenadas de Montevideo

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Función para agregar otros lugares
  function addMarker(lat, lng, popupText) {
      L.marker([lat, lng]).addTo(map)
          .bindPopup(popupText)
          .openPopup();
  }

  //forma mas facil de agregar lugares
  var locations = [
      {lat: -34.9105184406866, lng: -56.18697987161537, text: 'Club 1'},
      {lat: -34.90710200898609, lng: -56.16164583231151, text: 'Club 2'},
      {lat: -34.86651941554912, lng: -56.209965197566575, text: 'Club 3'},
      {lat: -34.88797976628276, lng: -56.17303452468337, text: 'Club 4'},
      {lat: -34.88105601213915, lng: -56.13900864656061, text: 'Club 5'}
    ];
// agrega las pasadas locaciones a la funcion que nos da leafet
  $.each(locations, function(index, location) {
      addMarker(location.lat, location.lng, location.text);
  });
});
/*..........................................BOTON Registro-Login.....................................................*/
$(function() {
  console.log('JavaScript cargado correctamente');

  $('#btnRegistrarse').on('click', function() {
    window.location.href = 'visita/html/general/registro.html';
  });

  $('#btnLogin').on('click', function() {
    window.location.href = 'visita/html/usuario/indexUsuario.html';
  });

  $('#btn-login-Registrarse').on('click', function() {
    window.location.href = 'visita/html/general/registro.html';
  });

  $('#btnRegistrar').on('click', function() {
    window.location.href = 'visita/html/usuario/indexUsuario.html';
  });
});

/*...............................................Carrusel Usuario......................................................*/
$(function() {
let $myCarousel = $('#carouselExampleIndicators');

if ($myCarousel.length) {
  let carousel = new bootstrap.Carousel($myCarousel[0], {
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
$(document).ready(function() {
  // Asegurarse de que el botón exista antes de asignar el evento
  if ($('#btnBuscarDeportista').length) {
      $('#btnBuscarDeportista').on('click', function(e) {
          e.preventDefault();
          buscarDeportista();
      });
  } else {
      console.error("El botón de búsqueda no se encontró en el DOM");
  }
});

function buscarDeportista() {
  // Obtener los valores de los campos de búsqueda
  var nombre = $('#nombreDeportista').val();
  var deporte = $('#deporteDeportista').val();
  var club = $('#clubDeportista').val();

  console.log("Buscando deportista:", nombre, deporte, club);

  // Simulación de búsqueda en base de datos
  const deportistaBuscado = {
      nombre: nombre || 'Leo',
      apellido: 'Messi',
      email: 'leomessi@gmail.com',
      ci: '93283202',
      matricula: 'uwbe2912',
      celular: '0292831'
  };

  actualizarTablaDeportista(deportistaBuscado);
}

function actualizarTablaDeportista(deportista) {
  // Verificar si los elementos existen antes de actualizar
  if ($('#nombre-deportista').length) $('#nombre-deportista').text(deportista.nombre);
  if ($('#apellido-deportista').length) $('#apellido-deportista').text(deportista.apellido);
  if ($('#email-deportista').length) $('#email-deportista').text(deportista.email);
  if ($('#ci-deportista').length) $('#ci-deportista').text(deportista.ci);
  if ($('#matricula-deportista').length) $('#matricula-deportista').text(deportista.matricula);
  if ($('#celular-deportista').length) $('#celular-deportista').text(deportista.celular);

  console.log("Tabla actualizada con datos:", deportista);
}

/*..............................................Tabla Deportes Seleccionador...........................................*/
$(document).ready(function() {
  // Evento click para el botón de búsqueda
  $("#btnBuscarEquipo").click(function(e) {
      e.preventDefault();
      buscarEquipo();
  });

  // Evento click para el botón de armar equipo
  $("#btnArmarEquipo").click(function(e) {
      e.preventDefault();
      console.log("Función para armar equipo aún no implementada");
  });

  function buscarEquipo() {
      // Obtenemos los valores de los campos de entrada
      let deporte = $("#deporteClub").val();
      let club = $("#clubEquipo").val();

      // Aca llamamos al servidor con ajax
      // Simularemos una respuesta
      let equipoEncontrado = simularBusquedaEquipo(deporte, club);

      // Actualizar la tabla con la información del equipo
      actualizarTablaEquipo(equipoEncontrado);
  }

  function simularBusquedaEquipo(deporte, club) {
      // Simulación de búsqueda en base de datos
      console.log("Buscando equipo:", deporte, club);
      
      // Datos de ejemplo
      return {
          nombre: club,
          deportistas: ["Messias", "Cris Jenner", "LIT Killah"]
      };
  }

  function actualizarTablaEquipo(equipo) {
      $("#nombreClub").text(equipo.nombre);
      $("#deportista").text(equipo.deportistas.join(", "));

      console.log("Tabla actualizada con datos del equipo:", equipo);
  }
});

/*...............................................Tabla Equipos Seleccionador.........................................................*/
$(document).ready(function() {
  $('#btnIngresarDeportista').click(function() {
    let nombreDeportista = $('#nombreDeportista').val();
    let deporteDeportista = $('#deporteDeportista').val();
    let clubDeportista = $('#clubDeportista').val();

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
    let nombreDeportista = $("#nombreDeportista").val();
    let deporteDeportista = $("#deporteDeportista").val();
    let clubDeportista = $("#clubDeportista").val();

    $("#nombreClub").text(clubDeportista);
    $("#deportista").text(nombreDeportista + " (" + deporteDeportista + ")");
  });
});

/*.....................................................Consultar Administrativo..................................................*/
// Esperar a que el documento esté completamente cargado
$(document).ready(function() {
    // Asignar funciones a los botones
    $("#btnBuscarPD").click(buscarCliente);
    $("#btnEliminarPD").click(eliminarCliente);
    $(".btn-modificar").click(habilitarEdicion);
});

// Función para buscar un deportista
function buscarCliente() {
    // Obtener el valor de la cédula ingresada
    let cedulaBuscada = $("#ciPD").val();
    
    // Simulación de búsqueda en base de datos
    // En un caso real, aquí se haría una llamada al servidor
    const clienteBuscado = {
        nombre: 'Leo',
        apellido: 'Messi',
        email: 'leomessi@gmail.com',
        ci: cedulaBuscada,
        matricula: 'uwbe2912',
        celular: '0292831',
        club: 'Boca',
        plan: 'Plan Premium',
        ultimoPago: '02/03/2024',
        proximoPago: '03/04/2024'
    };

    // Actualizar la tabla con los datos del deportista encontrado
    actualizarTablaCliente(clienteBuscado);
    
    console.log("Buscando cliente con cédula:", cedulaBuscada);
}

// Función para actualizar la tabla con los datos del deportista
function actualizarTablaCliente(cliente) {
    // Recorrer cada propiedad del objeto deportista
    for (let campo in cliente) {
        // Actualizar el texto de cada celda con el valor correspondiente
        $('#' + campo + '-PD').text(cliente[campo]);
    }
    console.log("Tabla actualizada con datos:", cliente);
}

// Función para eliminar un deportista (simulada)
function eliminarCliente() {
    let cedulaEliminar = $("#ciPD").val();
    console.log("Eliminando cliente con cédula:", cedulaEliminar);
    // Aquí iría la lógica para eliminar el deportista de la base de datos
    limpiarCampos();
}

// Función para habilitar la edición de un campo
function habilitarEdicion() {
    // Obtener el nombre del campo a editar
    let campo = $(this).data('campo');
    // Obtener la celda correspondiente
    let celda = $('#' + campo + '-PD');
    // Obtener el valor actual del campo
    let valorActual = celda.text();
    
    // Reemplazar el texto de la celda con un campo de entrada
    celda.html('<input type="text" id="edit-' + campo + '" value="' + valorActual + '">');
    
    // Obtener referencia al nuevo campo de entrada
    let input = $('#edit-' + campo);
    
    // Enfocar el campo de entrada
    input.focus();

    // Función para guardar el nuevo valor
    function guardarValor() {
        let nuevoValor = input.val();
        celda.text(nuevoValor);
        console.log("Campo modificado:", campo, "Nuevo valor:", nuevoValor);
    }

    // Guardar el valor cuando se pierde el foco del campo de entrada
    input.on('blur', guardarValor);

    // Guardar el valor cuando se presiona Enter
    input.on('keypress', function(e) {
        if(e.which == 13) { // 13 es el código de tecla para Enter
            guardarValor();
        }
    });
}

// Función para limpiar todos los campos de la tabla
function limpiarCampos() {
    // Seleccionar todas las celdas y limpiar su contenido
    $('[id$="-PD"]').text('');
    console.log("Campos limpiados");
}
/*....................................................Index Avanzado...................................................*/

$(function() {
  $('#btnAgregarUsuario').on('click', function() {
    window.location.href = 'usuariosAvanzado.html';
  });
  
  $('#btnAgregarEjercicio').on('click', function() {
    window.location.href = 'ejerciciosAvanzado.html';
  });

  $('#btnAgregarDeporte').on('click', function() {
    window.location.href = 'deportesAvanzado.html';
  });
  });

/*.................................................Usuarios Avanzado.................................................*/
// Esperar a que el documento esté listo
$(document).ready(function() {
  // Asociar la función agregarUsuario al clic del botón
  $("#agregar-usuario").click(agregarUsuario);

  // Array para almacenar los usuarios
  let listaUsuarios = [];

  // Función para agregar un usuario
  function agregarUsuario() {
      let usuario = recogerDatosUsuario();
      if (validarDatos(usuario)) {
          listaUsuarios.push(usuario);
          console.log('Usuario agregado:', usuario);
          alert('Usuario agregado con éxito');
          limpiarCampos();
      } else {
          alert('Por favor, rellena todos los campos');
      }
  }

  // Función para recoger los datos del usuario
  function recogerDatosUsuario() {
      return {
          nombre: $('#nombre-cliente').val(),
          apellido: $('#apellido-cliente').val(),
          email: $('#email-cliente').val(),
          ci: $('#ci-cliente').val(),
          matricula: $('#matricula-cliente').val(),
          celular: $('#celular-cliente').val(),
          actividad: $('#actividad-cliente').val(),
          club: $('#club-cliente').val(),
          plan: $('#plan-cliente').val()
      };
  }

  // Función para validar los datos
  function validarDatos(usuario) {
      for (let campo in usuario) {
          if (usuario[campo] === '') {
              return false;
          }
      }
      return true;
  }

  // Función para limpiar los campos después de agregar un usuario
  function limpiarCampos() {
      $('input').val('');
  }

  // Función para mostrar usuarios (puedes implementarla si lo necesitas)
  function mostrarUsuarios() {
      // Aquí puedes implementar la lógica para mostrar los usuarios
      console.log('Lista de usuarios:', listaUsuarios);
  }
});

/*.................................................Ejercicios Avanzado.................................................*/
// Esperar a que el documento esté listo
$(document).ready(function() {
  // Asociar la función agregarEjercicio al clic del botón
  $("#agregar-ejercicio").click(agregarEjercicio);

  // Array para almacenar los ejercicios
  let listaEjercicios = [];

  // Función para agregar un ejercicio
  function agregarEjercicio() {
      let ejercicio = recogerDatosEjercicio();
      if (validarDatos(ejercicio)) {
          listaEjercicios.push(ejercicio);
          console.log('Ejercicio agregado:', ejercicio);
          alert('Ejercicio agregado con éxito');
          limpiarCampos();
      } else {
          alert('Por favor, rellena todos los campos');
      }
  }

  // Función para recoger los datos del ejercicio
  function recogerDatosEjercicio() {
      return {
          nombre: $('#nombre-ejercicio').val(),
          musculo: $('#musculo-ejercicio').val(),
          series: $('#series-ejercicio').val(),
          repeticiones: $('#rep-ejercicio').val(),
          descripcion: $('#descripcion-ejercicio').val()
      };
  }

  // Función para validar los datos
  function validarDatos(ejercicio) {
      for (let campo in ejercicio) {
          if (ejercicio[campo] === '') {
              return false;
          }
      }
      return true;
  }

  // Función para limpiar los campos después de agregar un ejercicio
  function limpiarCampos() {
      $('input').val('');
  }

  // Función para mostrar ejercicios (puedes implementarla si lo necesitas)
  function mostrarEjercicios() {
      // Aquí puedes implementar la lógica para mostrar los ejercicios
      console.log('Lista de ejercicios:', listaEjercicios);
  }
});

/*.................................................Deportes Avanzado.................................................*/
// Esperar a que el documento esté listo
$(document).ready(function() {
  // Asociar la función agregarUsuario al clic del botón
  $("#agregar-deporte").click(agregarDeporte);

  // Array para almacenar los usuarios
  let listaDeporte = [];

  // Función para agregar un usuario
  function agregarDeporte() {
      let deporte = recogerDatosDeporte();
      if (validarDatos(deporte)) {
          listaDeporte.push(deporte);
          console.log('Deporte agregado:', deporte);
          alert('Deporte agregado con éxito');
          limpiarCampos();
      } else {
          alert('Por favor, rellena todos los campos');
      }
  }

  // Función para recoger los datos del usuario
  function recogerDatosDeporte() {
      return {
          nombre: $('#nombre-deporte').val(),
          tipo: $('#tipo-deporte').val(),
          duracion: $('#duracion-deporte').val(),
          categoria: $('#categoria-deporte').val(),
          cantidad: $('#cantidad-deporte').val()
      };
  }

  // Función para validar los datos
  function validarDatos(deporte) {
      for (let campo in deporte) {
          if (deporte[campo] === '') {
              return false;
          }
      }
      return true;
  }

  // Función para limpiar los campos después de agregar un usuario
  function limpiarCampos() {
      $('input').val('');
  }

  // Función para mostrar usuarios (puedes implementarla si lo necesitas)
  function mostrarDeporte() {
      // Aquí puedes implementar la lógica para mostrar los usuarios
      console.log('Lista de deporte:', listaDeporte);
  }
});

//funcion para desplegar botones - seccion planes de entrenador

$(".ingresar-plan-entrenador").click(ingresoDatosPlanesEntrenador);
$(".gestionar-combos").click(ingresoDatosCombosEntrenador);

function ingresoDatosPlanesEntrenador () {
  let botonDesplegable = $(".boton-fisioterapia-deportista-entrenador");
  desplegarBotonesPlanesEntrenador(botonDesplegable);
}

function desplegarBotonesPlanesEntrenador (botonDesplegable) {
    if (botonDesplegable.css("visibility") === "hidden") {
      botonDesplegable.css("visibility", "visible");
    } else {
      botonDesplegable.css("visibility", "hidden");
    }
}

function ingresoDatosCombosEntrenador () {
  let botonDesplegable = $(".gestionar-combos-boton");
  desplegarBotonesCombosEntrenador(botonDesplegable);
}

function desplegarBotonesCombosEntrenador (botonDesplegable) {
  if (botonDesplegable.css("visibility") === "hidden") {
    botonDesplegable.css("visibility", "visible");
  } else {
    botonDesplegable.css("visibility", "hidden");
  }
}

/*.................................................Elimina numeros en campos numericos....................................................*/
/*Problemillas: En el html le puse onclick al llamar a esta funcion ya que si lo cambio a
  oninput el usuario puede colocar una letra en la cedula.

  Otro problema a resolver es que cuando no le das click a la caja del input y escribis algo 
  se va a mostrar en la caja de la cedula.
*/

/*function controlar_fecha_input(id_componente){
  $("#"+ id_componente).on('input', function (e){
      let value = this.value;

      if ("/" in value){
        alert("Formato de fecha valido!");
      }
  });
}
*/