/*..................................................MENU OCULTO.........................................................*/
$(function(){
  $(".menu-barras").click(function(){
      $(".menu-adaptable").slideToggle("slow");
  });

  $(".op-menu-oculto").click(function(){
      $(".op-menu-adaptable").hide();
  });
});

/*.....................................................BOTON CAMBIAR IDIOMA.....................................................*/
$(document).ready(function() {
  const translations = {
    en: {
      //INDEX GENERAL
      "slogan": "Your Best Version Starts Here",

      //NOSOTROS
      "inicio": "Home",
      "nosotros": "About Us",
      "servicios": "Services",
      "fisioterapia":  "Physical Therapy",
      "deporte":   "Sports",
      "pilates":   "Pilates",
      "locales": "Locations",
      "planes": "Plans",
      "login": "Login",
      "buscar": "Search...",
      "tituloNosotros":  "About Us",
      "descripcion1": "ActiveMotion stands out as a comprehensive centre specialising in fitness, physiotherapy and pilates. Since our opening in 2009, we have been passionately dedicated to offering high-level courses in physical education, sport and well-being. Our commitment lies in providing dynamic educational programmes for certification and continuous updating that respond to the changing needs of the sector, both locally and internationally.",
      "descripcion2": "At ActiveMotion, we value the autonomy and individual pace of each student. Our flexible approach allows the educational process to be customized to suit each person’s specific needs, while our Monthly In-Person Meetings at top-level sports facilities complement the theoretical experience with practical applications." ,
      "descripcion3": "Our company specialises in offering integrated fitness training and physiotherapy services, providing a holistic approach to improving the wellbeing and health of our clients. We operate with the mission of promoting an active and balanced lifestyle, adapting to the specific needs of each individual, whether they are professional athletes, fitness enthusiasts or people undergoing rehabilitation." ,
      "tituloEquipo": "Our Team",

      //SERVICIOS
      "servicios": "Our Services",
      "descServicios":  "We have a variety of comprehensive and personal services",
      "fisioterapia": "Physical Therapy",
      "deporte": "Sports",
      "pilates": "Pilates",
      "descFisioterapia": "With a variety of exercises customized for each patient",
      "descDeporte": "Training focused on each sport and person",
      "descPilates": "Joint and dynamic activities.",

      //SERVICIO FISIOTERPA
      "servicios": " Our Services",
      "fisioterapia": "Physical Therapy",
      "descFisio": "At ActiveMotion, we specialize in providing high-quality rehabilitation treatments and services to help our patients regain their mobility and physical function. Our goal is to improve the quality of life of those who visit us by reducing pain and restoring functionality through a personalized and professional approach.",
      //SERVICIO DEPORTE
      "servicios": " Our Services",

      //SERVICIO PILATES
      "servicios": "  Our Services",

      //LOCALES
      //PLANES
      //LOGIN
    },
    es: {
      //INDEX GENERAL
      "slogan": "Tu Mejor Versión Comienza Aquí",

      //NOSOTROS
      "inicio": "Inicio",
      "nosotros": "Nosotros",
      "servicios": "Servicios",
      "fisioterapia":  "Fisioterapia",
      "deporte":   "Deporte",
      "pilates":   "Pilates",
      "locales": "Locales",
      "planes": "Planes",
      "login": "Login",
      "buscar": "Buscar...",
      "tituloNosotros":  "Sobre Nosotros",
      "descripcion1": "ActiveMotion se distingue como un centro integral especializado en fitness, fisioterapia y pilates. Desde nuestra inauguración en 2009, nos hemos dedicado con pasión a ofrecer cursos de alto nivel en educación física, deporte y bienestar. Nuestro compromiso radica en proporcionar programas educativos dinámicos de certificación y actualización continua que respondan a las necesidades cambiantes del sector, tanto a nivel local como internacional.",
      "descripcion2": "En ActiveMotion, valoramos la autonomía y el ritmo individual de cada estudiante. Nuestro enfoque flexible permite personalizar el proceso educativo para adaptarse a las necesidades específicas de cada persona, mientras que nuestros Encuentros Presenciales Mensuales en instalaciones deportivas de primer nivel complementan la experiencia teórica con aplicaciones prácticas." ,
      "descripcion3": "Nuestra empresa se especializa en ofrecer servicios integrados de entrenamiento físico y fisioterapia, proporcionando un enfoque holístico para mejorar el bienestar y la salud de nuestros clientes. Operamos con la misión de promover un estilo de vida activo y equilibrado, adaptándonos a las necesidades específicas de cada individuo, ya sean deportistas profesionales, entusiastas del fitness o personas en proceso de rehabilitación." ,
      "tituloEquipo": "Nuestro equipo",

      //SERVICIOS
      "servicios": "Nuestros Servicios",
      "descServicios":  "Contamos con una variedad de servicios integrales y personales",
      "fisioterapia": "Fisioterapia",
      "deporte": "Deportes",
      "pilates": "Pilates",
      "descFisioterapia": "Con una variedad de ejercicios personalisados para cada paciente",
      "descDeporte": "Entrenamientos enfocados en cada deporte y persona",
      "descPilates": "Actividades conjuntas y dinamicas",

      //SERVICIO FISIOTERPA
      "servicios": " Our Services",
      "fisioterapia": "Fisioterapia",
      "descFisio": "En ActiveMotion, nos especializamos en proporcionar tratamientos y servicios de rehabilitación de alta calidad para ayudar a nuestros pacientes a recuperar su movilidad y funcionalidad física. Nuestro objetivo es mejorar la calidad de vida de quienes nos visitan, reduciendo el dolor y restaurando la funcionalidad a través de un enfoque personalizado y profesional.",
     
      //SERVICIO DEPORTE
      "servicios": "Nuestros Servicios",

      //SERVICIO PILATES
      "servicios": "Nuestros Servicios",

      //LOCALES
      //PLANES
      //LOGIN
    }
  };

  function changeLanguage(lang) {
    $('[data-translate]').each(function() {
      const key = $(this).data('translate');
      $(this).text(translations[lang][key]);
    });
    
    $('input[placeholder]').attr('placeholder', translations[lang]['buscar']);
    
    // Actualizar texto del botón
    $('#langToggle').text(lang === 'en' ? 'ES' : 'EN');
  }

  // Evento de clic para el botón de cambio de idioma
  $('#langToggle').click(function() {
    const currentLang = $(this).text() === 'EN' ? 'en' : 'es';
    changeLanguage(currentLang);
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
    if (respuesta) {
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
      this.appointments = 0;
      
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
      const startingDay = firstDayOfMonth.getDay() || 7;
      const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
      
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

/*...............................................Boton Perfil cliente.........................................................*/
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


 /*....................................................Desplegar botones seleccionador............................................................ */
 $(document).ready(function() {
  $(".btnArmarEquipo").click(function() {
    $("#botonesDespleglables").slideToggle();
  });

  $("#btnBuscarEquipo").click(function(e) {
    e.preventDefault();
    buscarEquipo();
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

 /*...............................................Tabla Armar Equipos Seleccionador.........................................................*/
 $(document).ready(function() {
  $('#btnIngresarDeportista').click(function() {
      let nombreDeportista = $('#nombreDeportista').val();
      let deporteDeportista = $('#deporteDeportista').val();
      let clubDeportista = $('#clubDeportista').val();

      $('#nombreClub').text(clubDeportista);
      $('#deportista').append('<div class="deportista-row">' + nombreDeportista + ' - ' + deporteDeportista + '</div>');
  });

  
  $('#btnEliminarDeportista').click(function() {
      let nombreDeportista = $('#nombreDeportista').val();
      
    
      $('#deportista .deportista-row').each(function() {
          if ($(this).text().includes(nombreDeportista)) {
              $(this).remove();
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-armarEquiposSeleccionador");
  const btnAbrirForm = document.querySelector(".btnarmarEquipo");
  const btnCancelar = document.getElementById("btnCancelar");

  btnAbrirForm.addEventListener("click", function() {
      form.style.display = "block";
      document.body.classList.add("form-active"); // Añade clase para mover el footer
  });

  btnCancelar.addEventListener("click", function() {
      form.style.display = "none";
      document.body.classList.remove("form-active"); // Quita clase para volver el footer a su lugar
  });
});



 /*....................................................TABLA NUEVO EQUIPO SELECCIONADOR.............................................. */

  // Mostrar el formulario para agregar deportistas
  $('.btn-agregar').click(function() {
      $('#form-armarEquiposSeleccionador').fadeIn(300);
  });

  // Ocultar el formulario al cancelar
  $('#btnCancelar').click(function() {
      $('#form-armarEquiposSeleccionador').fadeOut(300);
  });

  // Ingresar deportista
  // $('#btnIngresar').click(function() {
  //     const nombre = $('#nombreDeportista').val();
  //     const cedula = $('#ciDeportista').val();

  //     if (nombre && cedula) {
  //         deportistas.push({ nombre, cedula });
  //         actualizarListaDeportistas();
  //         $('#form-armarEquiposSeleccionador')[0].reset();
  //         $('#form-armarEquiposSeleccionador').fadeOut(300);
  //     }
  // });

  // Actualizar la lista de deportistas
  // function actualizarListaDeportistas() {
  //     const listaHtml = deportistas.map(function(d) {
  //         return `<div class="deportista-item">
  //             ${d.nombre} - ${d.cedula}
  //             <button class="btn-eliminar" data-nombre="${d.nombre}">
  //                 <i class="fas fa-times"></i>
  //             </button>
  //         </div>`;
  //     }).join('');
      
  //     $('#deportistasList').html(listaHtml);
  //     $('#cantDeportista').text(deportistas.length);
  // }

  // // Eliminar deportista de la lista
  // $(document).on('click', '.btn-eliminar', function() {
  //     const nombreDeportista = $(this).data('nombre');
  //     deportistas = deportistas.filter(d => d.nombre !== nombreDeportista);
  //     actualizarListaDeportistas();
  // });

/*....................................................Boton Index Seleccionador........................................*/
$(function() {
$('#btnConsultarDeportista').on('click', function() {
  window.location.href = 'deportistasSeleccionador.html';
});

$('#btnArmarEquipo').on('click', function() {
  window.location.href = 'armarEquipoSeleccionador.html';
});
});

/*.................................................... PERFIL SELECCIONADOR..................................................... */
$(function() {
  $('#btnModificarSelec').on('click', function() {
    window.location.href = 'modificarPerfilSeleccionador.html';
  });
  
  $('#btnGuardarSelec').on('click', function() {
    window.location.href = 'perfilSeleccionador.html';
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
  // $('#ingresar').click(function(e) {
  //   e.preventDefault();
    
  //   const fecha = $('#fecha-agenda').val();
  //   const hora = $('#hora').val();
    
  //   if (fecha && hora) {
  //     if (appointments[fecha]) {
  //       alert('Esta fecha ya está ocupada');
  //       return;
  //     }
      
  //     appointments[fecha] = hora;
  //     updateDayColor(new Date(fecha));
  //   } else {
  //     alert('Por favor, seleccione fecha y hora');
  //   }
  // });
  
  // Manejador para el botón "Eliminar"
  // $('#eliminar').click(function(e) {
  //   e.preventDefault();
    
  //   const fecha = $('#fecha-agenda').val();
    
  //   if (fecha) {
  //     if (appointments[fecha]) {
  //       delete appointments[fecha];
  //       updateDayColor(new Date(fecha));
  //     } else {
  //       alert('No hay cita para esta fecha');
  //     }
  //   } else {
  //     alert('Por favor, seleccione una fecha');
  //   }
  // });
  
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

/*......................................................BOTONES DEE FORM AGENDA.....................................................*/
$(document).ready(function() {
  // Mostrar/ocultar formularios sin afectar a los otros formularios
  $("#showFormEntrenador").click(function() {
    $("#formEntrenador").toggle();
  });
  $("#showFormCliente").click(function() {
    $("#formCliente").toggle();
  });
  $("#showFormActividad").click(function() {
    $("#formActividad").toggle();
  });
});

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


/*..................................................AGENDA ENTRENADOR........................................................ */
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
      this.yearElement = $('#currentYear-entr');
      this.monthElement = $('#currentMonth-entr');
      this.calendarElement = $('#calendar-entr');
    }
    
    addEventListeners() {
      $('#prevYear-entr').on('click', () => this.changeYear(-1));
      $('#nextYear-entr').on('click', () => this.changeYear(1));
      $('#prevMonth-entr').on('click', () => this.changeMonth(-1));
      $('#nextMonth-entr').on('click', () => this.changeMonth(1));
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
      const startingDay = firstDayOfMonth.getDay() || 7;
      const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
      
      for (let i = 1; i < startingDay; i++) {
        this.calendarElement.append($('<div>'));
      }
      
      for (let day = 1; day <= daysInMonth; day++) {
        const dateString = this.formatDate(day);
        const hasAppointment = this.appointments[dateString];
        
        const dayContainer = $('<div>');
        const dayElement = $('<button>')
          .addClass(`calendar-day-entr ${hasAppointment ? 'appointment' : ''}`)
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
  let ejercicios = [];
  
  $('#form-ejerciciosFisioEntrenador').hide();

  $('.btn-agregar').click(function(e) {
      e.preventDefault();
      $('#form-ejerciciosFisioEntrenador').slideDown();
  });

  $('#btnCancelar').click(function() {
      $('#form-ejerciciosFisioEntrenador').slideUp();
      limpiarFormulario();
  });

  $('#btnIngresar').click(function() {
      const id = $('#idEjercicio').val().trim();
      const nombre = $('#nombreEjercicio').val().trim();
      const repe = $('#repEjercicio').val().trim();
      const serie = $('#seriesEjercicio').val().trim();
      const grupo = $('#grupoEjercicio').val().trim();
      const desc = $('#descEjercicio').val().trim();

      if (id && nombre && repe && serie && grupo && desc) {
          // Convertir el ID a número para asegurar una comparación consistente
          ejercicios.push({ 
              id: parseInt(id), 
              nombre, 
              repe, 
              serie, 
              grupo, 
              desc 
          });
          actualizarListaEjercicios();
          limpiarFormulario();
          $('#form-ejerciciosFisioEntrenador').slideUp();
      }
  });

  function limpiarFormulario() {
      $('#idEjercicio').val('');
      $('#nombreEjercicio').val('');
      $('#repEjercicio').val('');
      $('#seriesEjercicio').val('');
      $('#grupoEjercicio').val('');
      $('#descEjercicio').val('');
  }

  function actualizarListaEjercicios() {
      const listaHtml = ejercicios.map(function(ejercicio) {
          return `<div class="ejercicio-item" data-id="${ejercicio.id}">
              ${ejercicio.id} - ${ejercicio.nombre} - ${ejercicio.repe} rep - ${ejercicio.serie} series - ${ejercicio.grupo} - ${ejercicio.desc}
              <button class="btn-eliminar btn btn-danger btn-sm" data-id="${ejercicio.id}">
                  <i class="fas fa-times"></i>
              </button>
          </div>`;
      }).join('');

      $('#ejerciciolist').html(listaHtml);
      $('#cantEjercicios').text(ejercicios.length);
      
      // Debug para ver el estado actual de los ejercicios
      console.log('Ejercicios actuales:', ejercicios);
  }

  // Manejador mejorado para eliminar ejercicios
  $(document).on('click', '.btn-eliminar', function() {
      const idEjercicio = parseInt($(this).data('id')); // Convertir a número
      console.log('Intentando eliminar ejercicio con ID:', idEjercicio);
      
      if (confirm('¿Estás seguro de que deseas eliminar este ejercicio?')) {
          // Filtrar el ejercicio y actualizar el array
          ejercicios = ejercicios.filter(ejercicio => ejercicio.id !== idEjercicio);
          console.log('Ejercicios después de eliminar:', ejercicios);
          actualizarListaEjercicios();
          
          // Actualizar el contador
          $('#cantEjercicios').text(ejercicios.length);
      }
  });

  $('#form-ejerciciosFisioEntrenador input').on('input', function() {
      const id = $('#idEjercicio').val().trim();
      const nombre = $('#nombreEjercicio').val().trim();
      const repe = $('#repEjercicio').val().trim();
      const serie = $('#seriesEjercicio').val().trim();
      const grupo = $('#grupoEjercicio').val().trim();
      const desc = $('#descEjercicio').val().trim();

      $('#btnIngresar').prop('disabled', !(id && nombre && repe && serie && grupo && desc));
  });

  $('.ingresar-fisio').click(function(e) {
      e.preventDefault();
      if (ejercicios.length > 0) {
          const datos = { ejercicios: ejercicios };
          console.log('Plan guardado:', datos);
          alert('Plan guardado exitosamente!');
      } else {
          alert('Por favor, ingrese al menos un ejercicio antes de guardar el plan.');
      }
  });
});


/*......................................................ASIGNAR RUTINA ENTRENADOR............................................... */
$(document).ready(function() {
  // Agregar y buscar en Rutina
  $("#btn-crear-rutina").click(function() {
    $("#tablaRutina tbody").append(`
      <tr>
        <td contenteditable="true">Nuevo</td>
        <td contenteditable="true">Nombre de Rutina</td>
        <td>
          <button class="btn-modificar-rutina">Modificar</button>
          <button class="btn-eliminar-rutina">Eliminar</button>
        </td>
      </tr>
    `);
  });

  $("#tablaRutina").on("click", ".btn-modificar-rutina", function() {
    $(this).closest("tr").find("td").attr("contenteditable", "true");
  });

  $("#tablaRutina").on("click", ".btn-eliminar-rutina", function() {
    $(this).closest("tr").remove();
  });

  $("#btn-crear-ejercicio").click(function() {
    $("#tablaEjercicio tbody").append(`
      <tr>
        <td contenteditable="true">Nuevo</td>
        <td contenteditable="true">Nombre de Ejercicio</td>
        <td contenteditable="true">0</td>
        <td contenteditable="true">0</td>
        <td contenteditable="true">Grupo Muscular</td>
        <td contenteditable="true">Descripción</td>
        <td>
          <button class="btn-modificar-ejercicio">Modificar</button>
          <button class="btn-eliminar-ejercicio">Eliminar</button>
        </td>
      </tr>
    `);
  });

  $("#tablaEjercicio").on("click", ".btn-modificar-ejercicio", function() {
    $(this).closest("tr").find("td").attr("contenteditable", "true");
  });

  $("#tablaEjercicio").on("click", ".btn-eliminar-ejercicio", function() {
    $(this).closest("tr").remove();
  });

  $("#btn-crear-posee").click(function() {
    const idRutina = prompt("Ingrese el ID de la Rutina:");
    const idEjercicio = prompt("Ingrese el ID del Ejercicio:");
    if (idRutina && idEjercicio) {
      $("#tablaPosee tbody").append(`
        <tr>
          <td>${idRutina}</td>
          <td>${idEjercicio}</td>
          <td>
            <button class="btn-eliminar-posee">Eliminar</button>
          </td>
        </tr>
      `);
    }
  });

  $("#tablaPosee").on("click", ".btn-eliminar-posee", function() {
    $(this).closest("tr").remove();
  });
});




/*....................................................CALIFICACION ENTRENADOR...........................................*/
$(document).ready(function() {
  $('#usuarioClienteModificar').click(function(event) {
      event.preventDefault(); // Evita la redirección inmediata

      // Muestra el mensaje de éxito
      $('#mensaje_registroCalificacion').text('Guardado exitoso').show();

      // Redirige después de un breve retraso
      setTimeout(function() {
          window.location.href = 'detallesClienteEntrenador.html';
      }); // Espera 1.5 segundos antes de redirigir
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

/*...................................................REGISTRO ADMINTI..................................................... */
$(document).ready(function() {
  let usuarios = [];

  // Muestra o esconde las filas adicionales según el rol seleccionado
  $('#selectRol').change(function() {
      if ($(this).val() === 'cliente') {
          $('.fila-cliente').show();
      } else {
          $('.fila-cliente').hide();
      }
  });

  // Función para verificar si todos los campos están completos
  function camposEstanCompletos() {
      const cedula = $('.inputModificarUsuarioCi').val().trim();
      const nombre = $('.inputModificarUsuarioNombre').val().trim();
      const apellido = $('.inputModificarUsuarioApellido').val().trim();
      const direccion = $('.inputModificarUsuarioDireccion').val().trim();
      const email = $('.inputModificarUsuarioEmail').val().trim();
      const fechaNac = $('.inputModificarUsuarioFechaNac').val().trim();
      const telefono = $('.inputModificarUsuarioTelefono').val().trim();
      const rol = $('.inputModificarUsuarioRol').val();

      // Verificar campos básicos
      if (!cedula || !nombre || !apellido || !direccion || !email || !fechaNac || !telefono || !rol) {
          return false;
      }

      // Si el rol es "Cliente", verificar campos adicionales
      if (rol === 'Cliente') {
          const actividad = $('.inputActividad').val().trim();
          const estado = $('.inputEstado').val();
          const estadoActividad = $('.inputEstadoActividad').val();
          const tipoPlan = $('.inputTipoPlan').val();

          if (!actividad || !estado || !estadoActividad || !tipoPlan) {
              return false;
          }
      }

      return true;
  }

  // Al hacer clic en el botón de guardar
  $('.button-entrenadores').click(function(e) {
      e.preventDefault(); // Prevenir el envío del formulario

      // Verificar si todos los campos están completos
      if (!camposEstanCompletos()) {
          alert('Por favor, complete todos los campos requeridos.');
          return;
      }

      // Si todos los campos están completos, proceder con el guardado
      const nuevoUsuario = {
          cedula: $('.inputModificarUsuarioCi').val().trim(),
          nombre: $('.inputModificarUsuarioNombre').val().trim(),
          apellido: $('.inputModificarUsuarioApellido').val().trim(),
          direccion: $('.inputModificarUsuarioDireccion').val().trim(),
          email: $('.inputModificarUsuarioEmail').val().trim(),
          fechaNacimiento: $('.inputModificarUsuarioFechaNac').val().trim(),
          telefono: $('.inputModificarUsuarioTelefono').val().trim(),
          rol: $('.inputModificarUsuarioRol').val()
      };

      // Si es cliente, agregar los campos adicionales
      if (nuevoUsuario.rol === 'Cliente') {
          nuevoUsuario.actividad = $('.inputActividad').val().trim();
          nuevoUsuario.estado = $('.inputEstado').val();
          nuevoUsuario.estadoActividad = $('.inputEstadoActividad').val();
          nuevoUsuario.tipoPlan = $('.inputTipoPlan').val();
      }

      // Agregar el nuevo usuario al array
      usuarios.push(nuevoUsuario);

      // Mostrar mensaje de éxito y registrar en consola
      const datos = { usuarios: usuarios };
      console.log('Usuario guardado:', datos);
      alert('Usuario guardado exitosamente!');

      // Limpiar el formulario
      $('.form-entrenadores')[0].reset();
      $('.fila-cliente').hide();
  });

  // Agregar validación en tiempo real para todos los campos
  $('input, select').on('change keyup', function() {
      if (camposEstanCompletos()) {
          $('.button-entrenadores').prop('disabled', false);
      } else {
          $('.button-entrenadores').prop('disabled', true);
      }
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