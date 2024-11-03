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