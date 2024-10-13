/*..................................................MENU OCULTO.........................................................*/
$(function(){
  $(".menu-barras").click(function(){
      $(".menu-adaptable").slideToggle("slow");
  });

  $(".op-menu-oculto").click(function(){
      $(".op-menu-adaptable").hide();
  });
});


/*....................................................BARRA BUSQUEDA..............................................*/
$(document).ready(function() {
  // Controlar el comportamiento en pantallas pequeñas
  var viewportWidth = $(window).width();
  if (viewportWidth <= 600) {
      $('.barra-busqueda form').hover(
          function() {
              // Al pasar por encima del formulario, mostrar el input de búsqueda
              $(this).find('input[type="text"]').css('opacity', '1');
          },
          function() {
              // Al salir, ocultar el input de búsqueda
              $(this).find('input[type="text"]').css('opacity', '0');
          }
      );
  }
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
      {lat: -34.9105184406866, lng: -56.18697987161537, text: 'Barrio Sur'},
      {lat: -34.90710200898609, lng: -56.16164583231151, text: 'Pocitos'},
      {lat: -34.86651941554912, lng: -56.209965197566575, text: 'Paso Molino'},
      {lat: -34.88797976628276, lng: -56.17303452468337, text: 'La Comercial'},
      {lat: -34.88105601213915, lng: -56.13900864656061, text: 'Union'}
    ];
// agrega las pasadas locaciones a la funcion que nos da leafet
  $.each(locations, function(index, location) {
      addMarker(location.lat, location.lng, location.text);
  });
});
/*..........................................BOTON Registro-Login.....................................................*/
$(function() {
  function navegarA(ruta) {
    console.log("Intentando navegar a: " + ruta);
    window.location.href = ruta;
  }

  $("#btnLogin").click(function(e) {
    e.preventDefault();
    var rol = $("#rol-usuario").val();
    
    var ruta;
    switch(rol) {
      case "cliente":
        ruta = "../cliente/indexUsuario.html";
        break;
      case "administrativo":
        ruta = "../administrador/indexAdministrativo.html";
        break;
      case "entrenador":
        ruta = "../entrenador/inicioEntrenador.html";
        break;
      case "avanzado":
        ruta = "../avanzado/indexAvanzado.html";
        break;
      case "seleccionador":
        ruta = "../seleccionador/indexSeleccionador.html";
        break;
      case "superUsuario":
        ruta = "../superUsuario/indexSuperUsuario.html";
        break;
    }
    
    if (ruta) {
      navegarA(ruta);
    }
  });

  $("#btn-login-Registrarse").click(function() {
    navegarA("../general/registro.html");
  });

  $("#btnRegistrarse").click(function() {
    navegarA("../general/index.html");
  });


});

/*.......................................................BOTON CERRAR SESION..................................................................*/
$(function(){
  $("#btnCerrarSesion").click(function(){
    var respuesta = confirm("¿Desea cerrar sesión?");
    if (respuesta == true) {
      window.location.href = "../general/index.html";
      }
      });

});
/*......................................................AGENDA USUARIO.................................................................*/
$(document).ready(function() {
  class Agenda {
    constructor() {
      this.currentDate = new Date();
      this.selectedDate = null;
      this.appointments = {
        '2024-10-10': '14:30',
        '2024-10-15': '09:00',
        '2024-10-20': '16:15',
      };
      
      this.initializeElements();
      this.addEventListeners();
      this.updateCalendar();
    }
    
    initializeElements() {
      this.yearElement = $('#currentYear');
      this.monthElement = $('#currentMonth');
      this.calendarElement = $('#calendar');
    }
    
    addEventListeners() {
      $('#prevYear').on('click', () => this.changeYear(-1));
      $('#nextYear').on('click', () => this.changeYear(1));
      $('#prevMonth').on('click', () => this.changeMonth(-1));
      $('#nextMonth').on('click', () => this.changeMonth(1));
    }
    
    changeYear(increment) {
      this.currentDate.setFullYear(this.currentDate.getFullYear() + increment);
      this.selectedDate = null;
      this.updateCalendar();
    }
    
    changeMonth(increment) {
      this.currentDate.setMonth(this.currentDate.getMonth() + increment);
      this.selectedDate = null;
      this.updateCalendar();
    }
    
    updateCalendar() {
      this.yearElement.text(this.currentDate.getFullYear());
      this.monthElement.text(this.currentDate.toLocaleString('es-ES', { month: 'long' }));
      
      this.calendarElement.empty();
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      const startingDay = firstDayOfMonth.getDay() || 7; // Convertir 0 (domingo) a 7
      const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
      
      // Agregar espacios vacíos para los días antes del primer día del mes
      for (let i = 1; i < startingDay; i++) {
        this.calendarElement.append($('<div>'));
      }
      
      for (let day = 1; day <= daysInMonth; day++) {
        const dateString = this.formatDate(day);
        const hasAppointment = this.appointments[dateString];
        
        const dayContainer = $('<div>');
        const dayElement = $('<button>')
          .addClass(`calendar-day ${hasAppointment ? 'appointment' : ''}`)
          .text(day)
          .on('click', () => this.handleDateClick(dateString));
        
        dayContainer.append(dayElement);
        
        if (this.selectedDate === dateString && hasAppointment) {
          const appointmentInfo = $('<div>')
            .addClass('appointment-info')
            .text(`Hora: ${hasAppointment}`);
          dayContainer.append(appointmentInfo);
        }
        
        this.calendarElement.append(dayContainer);
      }
    }
    
    handleDateClick(dateString) {
      this.selectedDate = this.selectedDate === dateString ? null : dateString;
      this.updateCalendar();
    }
    
    formatDate(day) {
      return `${this.currentDate.getFullYear()}-${String(this.currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
  }
  
  new Agenda();
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
$(document).ready(function() {
  $('#btnModificarUsu').on('click', function() {
    window.location.href = 'modificarPerfilUsuario.html';
  });
  
  $('#btnGuardarUsu').on('click', function() {
    window.location.href = 'perfilUsuario.html';
  });
});

/*...............................................Tabla Deportistas Seleccionador.........................................................*/
$(document).ready(function() {
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
  var nombre = $('#nombreDeportista').val();
     var deporte = $('#deporteDeportista').val();
  var club = $('#clubDeportista').val();

   console.log("Buscando deportista:", nombre, deporte, club);

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
      $("#btnBuscarEquipo").click(function(e) {
       e.preventDefault();
       buscarEquipo();
  });

   $("#btnArmarEquipo").click(function(e) {
       e.preventDefault();
       console.log("Función para armar equipo aún no implementada");
   });

   function buscarEquipo() {
       let deporte = $("#deporteClub").val();
       let club = $("#clubEquipo").val();

      let equipoEncontrado = simularBusquedaEquipo(deporte, club);

       actualizarTablaEquipo(equipoEncontrado);
   }

   function simularBusquedaEquipo(deporte, club) {
       console.log("Buscando equipo:", deporte, club);
      
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
/*.................................................... PERFIL ADMINISTRATIVO..................................................... */
$(function() {
  $('#btnModificarAdm').on('click', function() {
    window.location.href = 'modificarPerfilAdministrativo.html';
  });
  
  $('#btnGuardarAdm').on('click', function() {
    window.location.href = 'perfilAdministrativo.html';
  });
});

/*...........................................................AGENDA ADMINISTRATIVO.................................................*/
$(document).ready(function() {
  // Objeto para almacenar las citas
  let appointments = {};
  
  // Variables para tracking del mes y año actual
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  
  // Función para actualizar el color del día
  function updateDayColor(date) {
    const dateStr = date.toISOString().split('T')[0];
    const dayElement = $(`.calendar-day-adm[data-date="${dateStr}"]`);
    
    if (appointments[dateStr]) {
      dayElement.removeClass('available-adm').addClass('occupied-adm');
    } else {
      dayElement.removeClass('occupied-adm').addClass('available-adm');
    }
  }
  
  // Manejador para el botón "Ingresar"
  $('#ingresar').click(function(e) {
    e.preventDefault();
    
    const fecha = $('#fecha-agenda').val();
    const hora = $('#hora').val();
    
    if (fecha && hora) {
      if (appointments[fecha]) {
        alert('Esta fecha ya está ocupada');
        return;
      }
      
      appointments[fecha] = hora;
      updateDayColor(new Date(fecha));
    } else {
      alert('Por favor, seleccione fecha y hora');
    }
  });
  
  // Manejador para el botón "Eliminar"
  $('#eliminar').click(function(e) {
    e.preventDefault();
    
    const fecha = $('#fecha-agenda').val();
    
    if (fecha) {
      if (appointments[fecha]) {
        delete appointments[fecha];
        updateDayColor(new Date(fecha));
      } else {
        alert('No hay cita para esta fecha');
      }
    } else {
      alert('Por favor, seleccione una fecha');
    }
  });
  
  // Función para generar el calendario
  function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const calendar = $('#calendar-adm');
    
    calendar.empty();
    
    // Añadir días vacíos al principio
    const firstDayOfWeek = firstDay.getDay() || 7; // Convertir 0 (domingo) a 7
    for (let i = 1; i < firstDayOfWeek; i++) {
      calendar.append($('<div>').addClass('calendar-day-adm').css('visibility', 'hidden'));
    }
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayElement = $('<div>')
        .addClass('calendar-day-adm')
        .attr('data-date', dateStr)
        .text(day);
      
      if (appointments[dateStr]) {
        dayElement.addClass('occupied-adm');
      } else {
        dayElement.addClass('available-adm');
      }
      
      calendar.append(dayElement);
    }
  }
  
  // Función para actualizar el mes y año mostrados
  function updateMonthYearDisplay() {
    $('#currentYear-adm').text(currentYear);
    const monthDate = new Date(currentYear, currentMonth);
    $('#currentMonth-adm').text(new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(monthDate));
  }
  
  // Navegación de mes
  $('#nextMonth-adm').click(function() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
    updateMonthYearDisplay();
  });
  
  $('#prevMonth-adm').click(function() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
    updateMonthYearDisplay();
  });
  
  // Navegación de año
  $('#nextYear-adm').click(function() {
    currentYear++;
    generateCalendar(currentYear, currentMonth);
    updateMonthYearDisplay();
  });
  
  $('#prevYear-adm').click(function() {
    currentYear--;
    generateCalendar(currentYear, currentMonth);
    updateMonthYearDisplay();
  });
  
  // Inicializar el calendario
  generateCalendar(currentYear, currentMonth);
  updateMonthYearDisplay();
  
  // Click en los días del calendario
  $(document).on('click', '.calendar-day-adm', function() {
    const dateStr = $(this).attr('data-date');
    if (dateStr) {
      $('#fecha-agenda').val(dateStr);
    }
  });
});

/*.....................................................Consultar Administrativo..................................................*/
//Esperar a que el documento esté completamente cargado
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

/*.................................................... PERFIL Avanzado..................................................... */
$(function() {
  $('#btnModificarAvan').on('click', function() {
    window.location.href = 'modificarPerfilAvanzado.html'; 
  });
  
  $('#btnGuardarAvan').on('click', function() {
    window.location.href = 'perfilAvanzado.html'; 
  });
});
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

/*........................................................funcion para desplegar botones - seccion planes de entrenador....................................................*/
$(".ingresar-plan-entrenador").click(ingresoDatosPlanesEntrenador);

// Ingresar Plan
function ingresoDatosPlanesEntrenador() {
    let botonDesplegable = $("#art1 .boton-fisioterapia-deportista-entrenador");
    desplegarBotonesPlanesEntrenador(botonDesplegable);
}

function desplegarBotonesPlanesEntrenador(botonDesplegable) {
    botonDesplegable.each(function() {
        if ($(this).css("visibility") === "hidden") {
            $(this).css("visibility", "visible");
        } else {
            $(this).css("visibility", "hidden");
        }
    });
}

/*...........................................................TABLA MODIFICAR/ELIMINAR RUTINA ENTRENADOR.........................................................*/
$(document).ready(function() {
            // Función para actualizar el contador de ejercicios
            function updateExerciseCount() {
                let count = $('.ejercicio').length;
                $('#cantidadEjercicios').val(count);
            }

            // Agregar nuevo ejercicio
            $('#agregarEjercicio').click(function() {
                let newExerciseHtml = `
                    <div class="exercise-container">
                        <input type="text" class="ejercicio">
                        <button class="btn-eliminar-ejercicio">Eliminar</button>
                    </div>
                `;
                let newDescriptionHtml = `
                    <div class="description-container">
                        <input type="text" class="descripcion">
                    </div>
                `;
                
                $(newExerciseHtml).insertBefore('#ejerciciosCell .btn-agregar');
                $(newDescriptionHtml).insertBefore('#descripcionesCell .btn-modificar');
                
                updateExerciseCount();
            });

            // Eliminar ejercicio
            $(document).on('click', '.btn-eliminar-ejercicio', function() {
                let index = $(this).parent().index();
                $(this).parent().remove();
                $('#descripcionesCell .description-container').eq(index).remove();
                updateExerciseCount();
            });

            // Guardar cambios
            $('.btn-guardar').click(function() {
                let rutina = {
                    id: $('#rutinaId').val(),
                    nombre: $('#nombre').val(),
                    cantidadEjercicios: $('#cantidadEjercicios').val(),
                    ejercicios: [],
                    descripciones: [],
                    descripcionRutina: $('#descripcionRutina').val()
                };

                $('.ejercicio').each(function() {
                    rutina.ejercicios.push($(this).val());
                });

                $('.descripcion').each(function() {
                    rutina.descripciones.push($(this).val());
                });

                console.log('Rutina guardada:', rutina);
                // Aquí podrías enviar los datos a tu servidor
            });
        });

/*................................................................PERFIL ENTRENADOR.......................................................*/
$(function() {
  $('#btnModificarEntr').on('click', function() {
    window.location.href = 'modificarPerfilEntrenador.html'; 
  });
  
  $('#btnGuardarEntr').on('click', function() {
    window.location.href = 'perfilEntrenador.html'; 
  });
});

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