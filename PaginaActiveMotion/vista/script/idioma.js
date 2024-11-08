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
        "nuestrosServicios": "Our Services",
        "descServicios":  "We have a variety of comprehensive and personal services",
        "fisioterapia": "Physical Therapy",
        "deporte": "Sports",
        "pilates": "Pilates",
        "descFisioterapia": "With a variety of exercises customized for each patient",
        "descDeporte": "Training focused on each sport and person",
        "descPilates": "Joint and dynamic activities.",
  
        //SERVICIO FISIOTERPA
        "nuestrosServicios": " Our Services",
        "fisioterapia": "Physical Therapy",
        "descFisio": "At ActiveMotion, we specialize in providing high-quality rehabilitation treatments and services to help our patients regain their mobility and physical function. Our goal is to improve the quality of life of those who visit us by reducing pain and restoring functionality through a personalized and professional approach.",
        "servOfrecidos":  "Services Offered:",
        "evaYdiag":  "Evaluation and Diagnosis",
        "evalIni":   "Initial Evaluation:",
        "evalIni-desc": "At ActiveMotion, we begin with a comprehensive evaluation to understand the patient's condition, including a detailed medical history, physical examinations and functional testing.",
        "diagnostico":  "Diagnosis:",
        "diagnostico-desc": "Based on this assessment, our experts establish an accurate physiotherapy diagnosis to guide the personalized treatment plan.", 
        "planTrat": "Customized Treatment Plans",
        "disenoPlan": "Design of Individualized Plans:",
        "disenoPlan-desc":"Each patient receives a treatment plan tailored to their specific needs, with clear and achievable goals.",
        "terapiaManual": "Manual Therapy:",
        "terapiaManual-desc":"We use advanced manual techniques to mobilize soft tissues and joints, reducing pain and improving mobility.",
        "terapiaEsp":"Specialized Therapies",
        "ejercicioTer":"Therapeutic Exercise:",
        "ejercicioTer-desc":"We develop specific exercise programs to strengthen muscles, improve flexibility and increase endurance.",
        "termocrioterapia":"Thermotherapy and Cryotherapy:",
        "termocrioterapia-desc":"We use heat or cold to reduce inflammation and pain.",
        "prevLesiones":"Injury Prevention",
        "educacion":"Education:",
        "educacion-desc":"We provide instruction on proper movement techniques and ergonomics to prevent future injuries.",
        "progPrevencion":"Prevention Programs:",
        "progPrevencion-desc":"We develop exercise routines and healthy habits to maintain good physical condition.",

        //SERVICIO DEPORTE
        "nuestrosServicios": "Our Services",
        "deporte": "Sports",
        "descDeporte": "At ActiveMotion, we specialize in providing high-quality rehabilitation treatments and services to help our patients regain their mobility and physical function. Our goal is to improve the quality of life of those who visit us by reducing pain and restoring functionality through a personalized and professional approach.",
        "servOfrecidos": "Services Offered:",
        "evaFisicaInicial": "Initial Physical Assessment",
        "anaCorp": "Body Analysis:",
        "descAna": "We design weightlifting programs that help increase strength and muscle mass.",
        "pruebaCondFis": "Fitness Tests:",
        "descPrueba": "We incorporate exercises with elastic bands, free weights, and machines to work different muscle groups.",
        "entrCardio": "Cardiovascular Training",
        "progCardio": "Cardio Programs:",
        "descProg": "We offer a variety of cardiovascular exercises, such as running, cycling, and rowing, to improve heart health and increase endurance.",
        "entrFlex": "Flexibility and Mobility Training",
        "estYyoga": "Stretching and Yoga:",
        "descYoga": "We provide stretching and yoga sessions to improve flexibility, reduce stress, and prevent injuries.",
        "pila": "Pilates:",
        "descPila": "We offer Pilates classes to strengthen the core and improve posture and balance.",
        "entrDep": "Athlete Training",
        "progRend": "Sports Performance Programs:",
        "descProgRend": "We design specific training for athletes looking to enhance their performance in particular sports, working on skills like speed, agility, and power.",
        "rehaDep": "Sports Rehabilitation:",
        "descReha": "We combine physical therapy techniques with sports training to help athletes recover from injuries and return to optimal performance.",
      
         // SERVICIO PILATES
  "nuestrosServicios": "Our Services",
  "pilates": "Pilates",
  "descPilates": "At ActiveMotion, we specialize in providing high-quality rehabilitation treatments and services to help our patients regain their mobility and physical function. Our goal is to improve the quality of life of those who visit us by reducing pain and restoring functionality through a personalized and professional approach.",
  "servOfrecidos": "Services Offered:",
  "evaIni": "Initial Evaluation",
  "evaFisi": "Physical Evaluation:",
  "descEva": "We conduct a detailed evaluation of posture, body alignment, and flexibility to design a Pilates program tailored to individual needs.",
  "objPer": "Personalized Objectives:",
  "descObj": "We identify the specific objectives of each client, whether it's core strength improvement, flexibility increase, back pain relief, or injury recovery.",
  "progEntrPila": "Personalized Pilates Training Programs",
  "planIndi": "Individualized Plans:",
  "descPlanIndi": "We develop customized Pilates training programs that fit each client’s goals and abilities, using both mat exercises and Pilates equipment.",
  "pilaCli": "Clinical Pilates:",
  "descPilaCli": "We combine physiotherapy techniques with Pilates to help athletes recover from injuries and return to their optimal performance level.",
  "pilaSalud": "Pilates for General Health",
  "bienYrela": "Wellness and Relaxation:",
  "descBien": "We offer Pilates classes focused on relaxation, stress reduction, and improving overall mental and physical health.",

  
        //LOCALES
        "sucuarsales": "Our Branches",
        "telefono1": "Phone: 094198192",
        "telefono2": "Phone: 094198192",
        "telefono3": "Phone: 094198192",
        "telefono4": "Phone: 094198192",
        "telefono5": "Phone: 094198192",
        "horario1": "Hours: 8:00 to 18:00",
        "horario2": "Hours: 8:00 to 18:00",
        "horario3": "Hours: 8:00 to 18:00",
        "horario4": "Hours: 8:00 to 18:00",
        "horario5": "Hours: 8:00 to 18:00",

        //PLANES
        "planes": "Our Plans",
        "plan1": "Monthly Plan",
        "tipo1": "Basic",
        "precio1": "US$ 29.99 per month",
        "desc1": "Unlimited gym access",
        "desc2": "Group fitness classes",
        "desc3": "Use of physiotherapy facilities",
        "desc4": "Access to all pilates classes",

        "plan2": "Annual Plan",
        "tipo2": "Premium",
        "precio2": "US$ 299.99 per year",
        "desc5": "Unlimited gym access and more",
        "desc6": "Group fitness classes",
        "desc7": "Unlimited use of physiotherapy facilities",
        "desc8": "Personal training sessions",
        "desc9": "Access to pilates and yoga classes",
        "desc10": "Exclusive access to workshops and seminars",

        "plan3": "Special Offer",
        "tipo3": "Summer Pack",
        "precio3": "US$ 79.99 for 3 months",
        "desc11": "Limited summer offer",
        "desc12": "Unlimited gym access for 3 months",
        "desc13": "Summer group classes",
        "desc14": "1 free physiotherapy session",
        "desc15": "Store products discount",

        "plan4": "Monthly Plan",
        "tipo4": "Advanced",
        "precio4": "US$ 39.99 per month",
        "desc16": "Unlimited gym access and more",
        "desc17": "Group fitness classes",
        "desc18": "Use of physiotherapy facilities",
        "desc19": "Access to pilates and yoga classes",
        "desc20": "1 personal training session per month",

        "plan5": "Annual Plan",
        "tipo5": "Elite",
        "precio5": "US$ 399.99 per year",
        "desc21": "Unlimited gym access and more",
        "desc22": "Group fitness classes",
        "desc23": "Unlimited use of physiotherapy facilities",
        "desc24": "Personal training sessions",
        "desc25": "Access to pilates and yoga classes",
        "desc26": "Exclusive access to workshops and seminars",

        "plan6": "Special Offer",
        "tipo6": "Summer",
        "precio6": "US$ 89.99 for 3 months",
        "desc27": "Limited summer offer",
        "desc28": "Unlimited gym access for 3 months",
        "desc29": "Summer group classes",
        "desc30": "1 free physiotherapy session",
        "desc31": "Store products discount",

        //LOGIN
        "login": "Login",
        "cedula": "ID Number:",
        "contrasenia": "Password:",
        "mostrar": "Show",
        "entrar": "Enter",

         //AGENDA ADMINISTRADOR
         "agenda": "Schedule",
         "consultarCliente": "Search Client",
         "perfil": "Profile",
         "ingresarCi": "Enter ID",
         "fecha": "Date",
         "hora": "Time",
         "ingresar": "Submit",
         "eliminar": "Delete",
         "dia1": "Mon",
         "dia2": "Tue",
         "dia3": "Wed",
         "dia4": "Thu",
         "dia5": "Fri",
         "dia6": "Sat",
         "dia7": "Sun",

         //INDEX ADMINISTRADOR
        "notificaciones": "Notifications",
        "noti1": "● Remember your physiotherapy appointment tomorrow at 10 AM. We look forward to seeing you!",
        "noti2": "● Don't miss our special pilates class this Saturday! Book your spot now.",
        "noti3": "● We have updated our gym class schedules for next week. Check the changes here.",
        "noti4": "● Please note that we will be closed next Monday due to the holiday. See you on Tuesday.",
        "noti5": "● Today only! Get a 20% discount on your annual gym membership. Take advantage of this exclusive offer.",
        "noti6": "● Discover how to improve your posture in our latest article on spinal health. Read more here.",
        "noti7": "● Help us improve. How was your last physiotherapy session? Complete our brief satisfaction survey.",
     
     //CONSULTAR CLIENTE ADMINISTRADOR
     "consultarClientes": "Search Clients",
     "cedula": "ID Number",
     "buscar": "Search",
     "nombre": "Name",
     "apellido": "Last Name",
     "direccion": "Address",
     "email": "Email",
     "fechaNac": "Date of Birth",
     "rol": "Role",
     "telefono": "Phone",
     "estado": "Status",
     "modificarCliente": "Modify Client",
     "desactivarCliente": "Deactivate Client",
     "eliminarCliente": "Delete Client",
     "eliminar": "Delete",
     "cancelar": "Cancel",
     "seguridad": "Are you sure you want to delete this client?",
     "modificar": "Modify",
     "descativar": "Deactivate",
     "cliente": "Client",
     "entrenador": "Trainer",
     "avanzado": "Advanced",
     "seleccionador": "Selector",
     "adminTI": "IT Administrator",

     //PERFIL ADMINISTRADOR
     "suPerfil": "Your Profile",
     "cedula": "ID Number",
     "nombre": "Name",
     "apellido": "Last Name",
     "direccion": "Address",
     "email": "Email",
     "fechaNac": "Date of Birth",
     "rol": "Role",
     "telefono": "Phone",
     "modificar": "Modify",
     "cerrarSesion": "Log Out",

     //MODIFICAR PERFIL ADMINISTRADOR
     "suPerfil": "Your Profile",
     "guardar": "Save",
     "regresar": "Return",

     /*.....AVANZADO.....*/
     //DEPORTES AVANZADO
     "usuarios":"Users",
     "ejercicios":"Exercises",
     "deportes":"Sports",
     "nombreDeporte":"Sport Name",
     "descripcionDeporte":"Description",
     "crear":"Create",
     "crear_y_modificar":"Create and Modify Sport",
     "eliminarDeporte":"Delete Sport",
     "preguntaElmiarDeporte":"Are you sure you want to delete this sport?",
     "confirmar":"Confirm",
     "footer":"© 2024 ActiveMotion. All rights reserved. ",

      //EJERCICIOS AVANZADO
      "ejercicios":"Exercises",
      "nombreEjercicio":"Exercise Name",
      "N_repeticiones":"Number of reps",
      "N_series":"Number of Series",
      "grupo_muscular":"Muscular Group",
      "descripcion":"Description",
      "eliminar_ejercicio":"Delete Exercise",
      "ejercicio_id":"Exercise ID",
      "preguntaElmiarEjercicio":"Are you sure you want delete this exercise?",
  
      //INDEX AVANZADO
      "ci_avanzado":"ID",
      "deporte_actividad":"Sport/Activity",
      "registrar_usuario":"Register a User",
      "gestionar_ejercicios":"Manage Exercises",
      "gestionar_deportes":"Manage Sports",
      "agregar_usuario":"Add a user",

      //MODIFICAR PERFIL AVANZADO
      "tuPerfil":"Your profile",
      "cedula":"ID",

      //USUARIOS AVANZADO
      "contraseña": "Password",
      "mostrar":"Show",
      "mensaje_rol":"Select a rol...",
      "avanzado":"Advanced",
      "entrenador":"Coach",
      "cliente":"Client",
      "seleccionador":"Selector",
      "administrativo":"Adminstrative",
      "deportista":"Sportsman",
      "paciente":"Pacient",
      "libre":"Free",
      "estado":"Status",
      "mensaje_estado":"Select a status...",
      "principiante":"Beginner",
      "bajo":"Low",
      "medio":"Medium",
      "alto":"High",
      "para_seleccion":"To be selected",
      "sin_evolucion":"Without evolucion",
      "en_evolucion":"In evolucion",
      "satisfactorio":"Satisfying",

      "estado_actividad":"Activity Status",
      "activo":"Active",
      "inactivo":"Idle",
      "tipo_plan":"Type of Plan",
      "mensaje_plan":"Select a type of plan...",
      "basico":"Basic",
      "pack_verano":"Summer Pack",
      "avanzado":"Advanced",
      "verano":"Summer",
      "actividad":"Activity",

      /*..........CLIENTE........ */
      //AGENDA USUARIO
      "mi_plan":"My Plan",
      "mi_agenda":"My Agenda",
      "mi_evolucion":"My Evolution",
      "mi_rutina":"Your Routine",
      "tu_agenda":"Your Agenda",
      "lunes":"Mon",
      "martes":"Tue",
      "miercoles":"Wen",
      "jueves":"Thu",
      "viernes":"Fri",
      "sabado":"Sat",
      "domingo":"Sun",

      //EVOLUCION USUARIO
      "tu_evolucion":"Your Evolution",
      "estado_evolucion":"Status: ",
      "mi_rutina_evolucion":"My Routine",
      "puntaje_total":"Total Score: ",
      
      //INDEX USUARIO
      "notificaciones": "Notifications",
      "recordar_cita":"● Remember your physical therapy appointment tomorrow at 10 AM. We hope to see you!",
      "clase_especial":"● Don't miss our special pilates class this Saturday! Reserve your spot now.",
      "actualizacion_horarios":"● We have updated our gym class schedules for next week. Review the changes here.",
      "lunes_cierre":"● Please note that we will be closed next Monday due to a holiday. See you on Tuesday.",
      "descuento":"● Just for today! Get a 20% discount on your annual gym membership. Take advantage of this exclusive offer.",
      "ultimo_articulo_salud":"● Find out how to improve your posture in our latest article on spinal health. Read more here.",
      "encuesta_satisfaccion":"● Help us improve. How was your last physical therapy session? Complete our short satisfaction survey.",
      
      //PLAN USUARIO
      "plan_actual":"Current Plan",
      "pago":"Payment",
      "id_pago":"Last payment ID",
      "hora":"Hour",
      "fecha":"Date",
      "valor":"Amount",
      "fecha_proximo_pago":"Next payment date",

      //RUTINA USUARIO
      "id_rutina":"Routine ID",
      "nombre_rutina":"Routine Name",
      "id_ejercicio":"Exercise ID",
      "nombre_ejercicio":"Exercise Name",  
      
      /*..........ENTRENADOR.............*/
      //AGENDA ENTRENADOR
      "clientes":"Clients",
      "planes":"Our Plans",

      //ASIGNAR ENTRENAMIENTO
      "asignar_entrenamiento":"Assign training",
      "buscar_rutina":"Search Routine",
      "id_rutina_asignar":"Routine Id: ",
      "tipo_rutina":"Type of routine",
      "acciones":"Actions",
      "crear_rutina":"Create Routine",
      "buscar_ejercicio":"Search Exercise",
      "id_ejercicio_asignar":"Exercise ID:",
      "crear_ejercicio":"Create Exercise",
      "asignar_ejercicio_rutina":"Assign exercise to routine",
      "asignar_ejercicio":"Assign Exercise",
      "asignar_rutina_cliente":"Assign routine to client",
      "cedula_entrenamiento":"ID:",
      "asignar_rutina":"Assign routine",
      "repeticiones":"Reps",

      //BUSCAR CLIENTES ENTRENADOR
      "lista_clientes":"Clients List",
      "nombre_entrenador":"Name:",
      "cedula_entrenador":"ID:",

      //DETALLES CLIENTE ENTRENADOR
      "registrar_calificacion":"Register qualification",
      "evolucion":"Evolution",
      
      //INGRESAR DEPORTE ENTREANDOR
      "nuevo_deporte":"New Sport",
      "nombre_deporte":"Name:",
      "descripcion_deporte":"Description:",
      "ingresar":"Enter",

      //INGRESAR FISIOTERAPIA ENTRENADOR
      "nombre-fisio":"Name:",
      "tipo-fisio":"Type:",
      "descripcion-fisio":"Description:",
      "nueva-fisio":"New Physical Therapy",

      //INICIO PLANES ENTRENADOR
      "planes_y_fisio":"Training and Physiotherapy Plans",
      "nuevo":"New...",

      //REGISTRAR CALIFICACION

      "evolucion_clientes":"Clients Evolution",
      "agregar_modificar_nota":"Add/modify note",
      "nota_actual":"Actual Note",
      "cumplimientoAgenda": "Compliance with the agenda",
      "resistenciaAnaerobica":"Anaerobic resistance",
      "fuerzaMuscular":"Muscle strength",
      "resistenciaMuscular":"Muscle endurance",
      "flexibilidad":"Flexibility",
      "resistenciaMonotonia":"Resistance to monotony",
      "resiliencia":"Resilience",

      /*.....................SELECCIONADOR....................*/
      //ARMAR EQUIPO EXISTENTE SELECCIONADOR
      "equipos":"Teams",
      "cedula_usuario":"User's ID: ",
      "id_equipo":"Team's ID: ",
      "deportistas":"Athletes",

      //ARMAR EQUIPO SELECCIONADRO
      "ingresar_equipo":"Enter Team",
      "id_equipo":"Team's ID",
      "nombre_equipo":"Team's Name",
      "ingresar_deportista":"+Enter athlete",
      "deportistas_ingresados":"Admitted athletes",
      "gestionar":"Manage",
      "posicion":"Position",
      "cerrar":"Close",
      "salir":"exit",

      //DEPORTISTAS SELECCIONADOR
      "evolucion_y_calificacion":"Evolution and qualification",
      "deportistas_titulo":"Athletes",

      //EQUIPOS SELECCIONADOR
      "armar_equipos":"Assemble teams",
      "existente":"Existing",
      "deportistas_equipo":"Team athletes",
      
      //INDEX SELECCIONADOR
      "consultar_deportista":"Consult athlete",
      
      
      /*.............SUPER USUARIO.............*/
      //CLUBES SUPER USUARIO
      "clubes":"Clubs",
      "ingresar_institucion":"Enter Institution",
      
      //INDEX SUPER USUARIO
      "ingresar_club":"Enter Club",
      "ingresar_usuario":"Enter User",

      //REGISTRO
      "registro":"Register",
      "nombre_usuario":"User Name: ",
      "verificar_contra":"Verify Password",
      "foto_perfil":"Profile Picture",
      "recibir_notificaciones":"Get notified",
      "en_mi_celular":"In my phone",
      "en_mi_correo":"In my Mail",
      "aceptar_terminos":"Accept Terms and Conditions",
      "registrarse":"Register"



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
        "nuestrosServicios": "Nuestros Servicios",
        "descServicios":  "Contamos con una variedad de servicios integrales y personales",
        "fisioterapia": "Fisioterapia:",
        "deporte": "Deportes:",
        "pilates": "Pilates:",
        "descFisioterapia": "Con una variedad de ejercicios personalisados para cada paciente",
        "descDeporte": "Entrenamientos enfocados en cada deporte y persona",
        "descPilates": "Actividades conjuntas y dinamicas",
  
        //SERVICIO FISIOTERPA
        "nuestrosServicios": " Nuestros Servicios",
        "fisioterapia": "Fisioterapia:",
        "descFisio": "En ActiveMotion, nos especializamos en proporcionar tratamientos y servicios de rehabilitación de alta calidad para ayudar a nuestros pacientes a recuperar su movilidad y funcionalidad física. Nuestro objetivo es mejorar la calidad de vida de quienes nos visitan, reduciendo el dolor y restaurando la funcionalidad a través de un enfoque personalizado y profesional.",
        "servOfrecidos": "Sevicios ofrecidos:",
        "evaYdiag":  "Evaluación y Diagnóstico",
        "evalIni":  "Evaluación inicial:",
        "evalIni-desc": "En ActiveMotion, comenzamos con una evaluación exhaustiva para entender la condición del paciente, que incluye un detallado historial médico, exámenes físicos y pruebas funcionales.",
        "diagnostico": "Diagnóstico:",
        "diagnostico-desc": "Con base en esta evaluación, nuestros expertos establecen un diagnóstico fisioterapéutico preciso para guiar el plan de tratamiento personalizado.",
        "planTrat": "Planes de Tratamiento Personalizados",
        "disenoPlan":"Diseño de Planes Individualizados:",
        "disenoPlan-desc":"Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas, con objetivos claros y alcanzables.",
        "terapiaManual":"Terapia Manual:",
        "terapiaManual-desc":"Utilizamos técnicas manuales avanzadas para movilizar tejidos blandos y articulaciones, reduciendo el dolor y mejorando la movilidad.",
        "terapiaEsp":"Terapias Especializadas",
        "ejercicioTer":"Ejercicio Terapéutico:",
        "ejercicioTer-desc":"Desarrollamos programas de ejercicios específicos para fortalecer músculos, mejorar la flexibilidad y aumentar la resistencia.",
        "termocrioterapia":"Termoterapia y Crioterapia:",
        "termocrioterapia-desc":"Empleamos calor o frío para reducir la inflamación y el dolor.",
        "prevLesiones":"Prevención de Lesiones",
        "educacion":"Educación:",
        "educacion-desc":"Proporcionamos instrucción sobre técnicas adecuadas de movimiento y ergonomía para prevenir futuras lesiones.",
        "progPrevencion":"Programas de Prevención:",
        "progPrevencion-desc":"Desarrollamos rutinas de ejercicios y hábitos saludables para mantener una buena condición física.",
        
        // SERVICIO DEPORTE
         "nuestrosServicios": "Nuestros Servicios",
         "deporte": "Deporte",
         "descDeporte": "En ActiveMotion, nos especializamos en proporcionar tratamientos y servicios de rehabilitación de alta calidad para ayudar a nuestros pacientes a recuperar su movilidad y funcionalidad física. Nuestro objetivo es mejorar la calidad de vida de quienes nos visitan, reduciendo el dolor y restaurando la funcionalidad a través de un enfoque personalizado y profesional.",
         "servOfrecidos": "Servicios Ofrecidos:",
         "evaFisicaInicial": "Evaluación Física Inicial",
         "anaCorp": "Análisis Corporal:",
         "descAna": "Diseñamos programas de levantamiento de pesas que ayudan a aumentar la fuerza y la masa muscular.",
         "pruebaCondFis": "Pruebas de Condición Física:",
         "descPrueba": "Incorporamos ejercicios con bandas elásticas, pesas libres y máquinas para trabajar diferentes grupos musculares.",
         "entrCardio": "Entrenamiento Cardiovascular",
         "progCardio": "Programas de Cardio:",
         "descProg": "Ofrecemos una variedad de ejercicios cardiovasculares, como correr, ciclismo y remo, para mejorar la salud del corazón y aumentar la resistencia.",
         "entrFlex": "Entrenamiento de Flexibilidad y Movilidad",
         "estYyoga": "Estiramientos y Yoga:",
         "descYoga": "Proporcionamos sesiones de estiramiento y yoga para mejorar la flexibilidad, reducir el estrés y prevenir lesiones.",
         "pila": "Pilates:",
         "descPila": "Ofrecemos clases de Pilates para fortalecer el núcleo y mejorar la postura y el equilibrio.",
         "entrDep": "Entrenamiento para Deportistas",
         "progRend": "Programas de Rendimiento Deportivo:",
         "descProgRend": "Diseñamos entrenamientos específicos para deportistas que buscan mejorar su rendimiento en deportes particulares, trabajando en habilidades como la velocidad, agilidad y potencia.",
         "rehaDep": "Rehabilitación Deportiva:",
         "descReha": "Combinamos técnicas de fisioterapia con entrenamiento deportivo para ayudar a los atletas a recuperarse de lesiones y volver a su nivel de rendimiento óptimo.",
  
          // SERVICIO PILATES
  "nuestrosServicios": "Nuestros Servicios",
  "pilates": "Pilates",
  "descPilates": "En ActiveMotion, nos especializamos en proporcionar tratamientos y servicios de rehabilitación de alta calidad para ayudar a nuestros pacientes a recuperar su movilidad y funcionalidad física. Nuestro objetivo es mejorar la calidad de vida de quienes nos visitan, reduciendo el dolor y restaurando la funcionalidad a través de un enfoque personalizado y profesional.",
  "servOfrecidos": "Servicios Ofrecidos:",
  "evaIni": "Evaluación Inicial",
  "evaFisi": "Evaluación Física:",
  "descEva": "Realizamos una evaluación detallada de la postura, alineación corporal y flexibilidad para diseñar un programa de Pilates adaptado a las necesidades individuales.",
  "objPer": "Objetivos Personalizados:",
  "descObj": "Identificamos los objetivos específicos de cada cliente, ya sea mejorar la fuerza del núcleo, aumentar la flexibilidad, aliviar el dolor de espalda o rehabilitarse de una lesión.",
  "progEntrPila": "Programas de Entrenamiento de Pilates Personalizados",
  "planIndi": "Planes Individualizados:",
  "descPlanIndi": "Desarrollamos programas de entrenamiento de Pilates personalizados que se ajustan a los objetivos y capacidades de cada cliente, utilizando tanto ejercicios de mat (colchoneta) como equipos de Pilates.",
  "pilaCli": "Pilates Clínico:",
  "descPilaCli": "Combinamos técnicas de fisioterapia con Pilates para ayudar a los atletas a recuperarse de lesiones y volver a su nivel de rendimiento óptimo.",
  "pilaSalud": "Pilates para la Salud General",
  "bienYrela": "Bienestar y Relajación:",
  "descBien": "Ofrecemos clases de Pilates que se enfocan en la relajación, la reducción del estrés y la mejora de la salud mental y física general.",
  
        //LOCALES
        "sucuarsales": "Nuestras Sucursales",
        "telefono1": "Teléfono: 094198192",
        "telefono2": "Teléfono: 094198192", 
        "telefono3": "Teléfono: 094198192",
        "telefono4": "Teléfono: 094198192",
        "telefono5": "Teléfono: 094198192",
        "horario1": "Horario: 8:00 a 18:00",
        "horario2": "Horario: 8:00 a 18:00",
        "horario3": "Horario: 8:00 a 18:00",
        "horario4": "Horario: 8:00 a 18:00",
        "horario5": "Horario: 8:00 a 18:00",

        //PLANES
        "planes": "Nuestros Planes",
        "plan1": "Plan Mensual",
        "tipo1": "Básico",
        "precio1": "29,99 US$ al mes",
        "desc1": "Acceso ilimitado al gimnasio",
        "desc2": "Clases grupales de fitness",
        "desc3": "Uso de instalaciones de fisioterapia",
        "desc4": "Acceso a todas las clases de pilates",

        "plan2": "Plan Anual",
        "tipo2": "Premium",
        "precio2": "299,99 US$ al año",
        "desc5": "Acceso ilimitado al gimnasio y más",
        "desc6": "Clases grupales de fitness",
        "desc7": "Uso ilimitado de las instalaciones de fisioterapia",
        "desc8": "Sesiones de entrenamiento personal",
        "desc9": "Acceso a clases de pilates y yoga",
        "desc10": "Acceso exclusivo a talleres y seminarios",

        "plan3": "Oferta Especial",
        "tipo3": "Pack de Verano",
        "precio3": "79,99 US$ por 3 meses",
        "desc11": "Oferta limitada de verano",
        "desc12": "Acceso ilimitado al gimnasio durante 3 meses",
        "desc13": "Clases grupales de verano",
        "desc14": "1 sesión de fisioterapia gratuita",
        "desc15": "Descuento en productos de la tienda",

        "plan4": "Plan Mensual",
        "tipo4": "Avanzado",
        "precio4": "39,99 US$ al mes",
        "desc16": "Acceso ilimitado al gimnasio y más",
        "desc17": "Clases grupales de fitness",
        "desc18": "Uso de instalaciones de fisioterapia",
        "desc19": "Acceso a clases de pilates y yoga",
        "desc20": "1 sesión de entrenamiento personal al mes",

        "plan5": "Plan Anual",
        "tipo5": "Elite",
        "precio5": "399,99 US$ al año",
        "desc21": "Acceso ilimitado al gimnasio y más",
        "desc22": "Clases grupales de fitness",
        "desc23": "Uso ilimitado de las instalaciones de fisioterapia",
        "desc24": "Sesiones de entrenamiento personal",
        "desc25": "Acceso a clases de pilates y yoga",
        "desc26": "Acceso exclusivo a talleres y seminarios",

        "plan6": "Oferta Especial",
        "tipo6": "Verano",
        "precio6": "89,99 US$ por 3 meses",
        "desc27": "Oferta limitada de verano",
        "desc28": "Acceso ilimitado al gimnasio durante 3 meses",
        "desc29": "Clases grupales de verano",
        "desc30": "1 sesión de fisioterapia gratuita",
        "desc31": "Descuento en productos de la tienda",

        //LOGIN
        "login": "Login",
        "cedula": "Cédula:",
        "contrasenia": "Contraseña:",
        "mostrar": "Mostrar",
        "entrar": "Entrar",

        //AGENDA ADMINISTRADOR
        "agenda": "Agenda",
        "consultarCliente": "Consultar cliente",
        "perfil": "Perfil",
        "ingresarCi": "Ingresar Cédula",
        "fecha": "Fecha",
        "hora": "Hora",
        "ingresar": "Ingresar",
        "eliminar": "Eliminar",
        "dia1": "Lun",
        "dia2": "Mar",
        "dia3": "Mié",
        "dia4": "Jue",
        "dia5": "Vie",
        "dia6": "Sáb",
        "dia7": "Dom",

        //INDEX ADMINISTRADOR
        "notificaciones": "Notificaciones",
        "noti1": "● Recuerda tu cita de fisioterapia mañana a las 10 AM. ¡Esperamos verte!",
        "noti2": "● ¡No te pierdas nuestra clase especial de pilates este sábado! Reserva tu lugar ahora.",
        "noti3": "● Hemos actualizado nuestros horarios de clases de gym para la próxima semana. Revisa los cambios aquí.",
        "noti4": "● Por favor, ten en cuenta que estaremos cerrados el próximo lunes por festivo. Nos vemos el martes.",
        "noti5": "● ¡Solo por hoy! Obtén un descuento del 20% en tu membresía anual de gym. Aprovecha esta oferta exclusiva.",
        "noti6": "● Descubre cómo mejorar tu postura en nuestro último artículo sobre salud vertebral. Lee más aquí.",
        "noti7": "● Ayúdanos a mejorar. ¿Cómo fue tu última sesión de fisioterapia? Completa nuestra breve encuesta de satisfacción.",
      
    //CONSULTAR CLIENTE ADMINISTRADOR
    "consultarClientes": "Consultar clientes",
    "cedula": "Cédula",
    "buscar": "Buscar",
    "nombre": "Nombre",
    "apellido": "Apellido",
    "direccion": "Dirección",
    "email": "Email",
    "fechaNac": "Fecha de nacimiento",
    "rol": "Rol",
    "telefono": "Teléfono",
    "estado": "Estado",
    "modificarCliente": "Modificar cliente",
    "desactivarCliente": "Desactivar cliente",
    "eliminarCliente": "Eliminar cliente",
    "eliminar": "Eliminar",
    "cancelar": "Cancelar",
    "seguridad": "¿Seguro que desea eliminar al cliente?",
    "modificar": "Modificar",
    "descativar": "Desactivar",
    "cliente": "Cliente",
    "entrenador": "Entrenador",
    "avanzado": "Avanzado",
    "seleccionador": "Seleccionador",
    "adminTI": "Administrador TI",

     //PERFIL ADMINISTRADOR
     "suPerfil": "Tu Perfil",
     "cedula": "Cédula",
     "nombre": "Nombre",
     "apellido": "Apellido",
     "direccion": "Dirección",
     "email": "Email",
     "fechaNac": "Fecha de nacimiento",
     "rol": "Rol",
     "telefono": "Teléfono",
     "modificar": "Modificar",
     "cerrarSesion": "Cerrar sesión",

     //MODIFICAR PERFIL ADMINISTRADOR
     "suPerfil": "Tu Perfil",
     "guardar": "Guardar",
     "regresar": "Regresar",

      /*.....AVANZADO.....*/
     //DEPORTES AVANZADO
     "usuarios":"Usuarios",
     "ejercicios":"Ejercicios",
     "deportes":"Deportes",
     "nombreDeporte":"Nombre del Deporte",
     "descripcionDeporte":"Descripcion",
     "crear":"Crear",
     "crear_y_modificar":"Crear y Modificar Deporte",
     "eliminarDeporte":"Eliminar Deporte",
     "preguntaElmiarDeporte":"¿Está seguro que desea eliminar el deporte?",
     "confirmar":"Confirmar",
     "footer":"© 2024 ActiveMotion. Todos los derechos reservados.",

       //EJERCICIOS AVANZADO
       "ejercicios":"Ejercicios",
       "nombreEjercicio":"Nombre ejercicio",
       "N_repeticiones":"Nro. de repeticiones",
       "N_series":"Nro. de series",
       "grupo_muscular":"Grupo muscular",
       "descripcion":"Descripcion",
       "eliminar_ejercicio":"Eliminar ejercicio",
       "ejercicio_id":"ID Ejercicio",
       "preguntaElmiarEjercicio":"¿Está seguro que desea eliminar el ejercicio?",

      //INDEX AVANZADO
      "ci_avanzado":"CI",
      "deporte_actividad":"Deporte/Actividad",
      "registrar_usuario":"Registrar usuarios",
      "gestionar_ejercicios":"Gestionar ejercicios",
      "gestionar_deportes":"Gestionar deportes",
      "agregar_usuario":"Agregar usuario",
      
      //MODIFICAR PERFIL AVANZADO
      "tuPerfil":"Tu perfil",
      "cedula":"Cédula",

      //USUARIOS AVANZADO
      "contraseña": "Contraseña",
      "mostrar":"Mostrar",
      "mensaje_rol":"Seleccione un rol...",
      "avanzado":"Avanzado",
      "entrenador":"Entrenador",
      "cliente":"Cliente",
      "seleccionador":"Seleccionador",
      "administrativo":"Adminstrativo",
      "deportista":"Deportista",
      "paciente":"Paciente",
      "libre":"Libre",
      "estado":"Estado",
      "mensaje_estado":"Seleccione estado...",
      "principiante":"Principiante",
      "bajo":"Bajo",
      "medio":"Medio",
      "alto":"Alto",
      "para_seleccion":"Para seleccionar",
      "sin_evolucion":"Sin evolucion",
      "en_evolucion":"En evolucion",
      "satisfactorio":"Satisfactorio",

      "estado_actividad":"Estado actividad",
      "activo":"Activo",
      "inactivo":"Inactivo",
      "tipo_plan":"Tipo de Plan",
      "mensaje_plan":"Seleccione tipo de plan...",
      "basico":"Básico",
      "pack_verano":"Pack Verano",
      "avanzado":"Avanzado",
      "verano":"Verano",
      "actividad":"Actividad",

      /*..........CLIENTE........ */
      //AGENDA USUARIO
      "mi_plan":"Mi Plan",
      "mi_agenda":"Mi Agenda",
      "mi_evolucion":"Mi Evolucion",
      "mi_rutina":"Mi Rutina",
      "tu_agenda":"Tu Agenda",
      "lunes":"Lun",
      "martes":"Mar",
      "miercoles":"Mie",
      "jueves":"Jue",
      "viernes":"Vie",
      "sabado":"Sab",
      "domingo":"Dom",

      //EVOLUCION USUARIO
      "tu_evolucion":"Tu Evolucion",
      "estado_evolucion":"Estado: ",
      "puntaje_total":"Puntaje Total: ",

      //INDEX USUARIO
      "notificaciones": "Notificaciones",
      "recordar_cita":"● Recuerda tu cita de fisioterapia mañana a las 10 AM. ¡Esperamos verte!",
      "clase_especial":"● ¡No te pierdas nuestra clase especial de pilates este sábado! Reserva tu lugar ahora.",
      "actualizacion_horarios":"● Hemos actualizado nuestros horarios de clases de gym para la próxima semana. Revisa los cambios aquí.",
      "lunes_cierre":"● Por favor, ten en cuenta que estaremos cerrados el próximo lunes por festivo. Nos vemos el martes.",
      "descuento":"● ¡Solo por hoy! Obtén un descuento del 20% en tu membresía anual de gym. Aprovecha esta oferta exclusiva.",
      "ultimo_articulo_salud":"● Descubre cómo mejorar tu postura en nuestro último artículo sobre salud vertebral. Lee más aquí.",
      "encuesta_satisfaccion":"● Ayúdanos a mejorar. ¿Cómo fue tu última sesión de fisioterapia? Completa nuestra breve encuesta de satisfacción.",

      //PLAN USUARIO
      "plan_actual":"Plan Actual",
      "pago":"Pago",
      "id_pago":"ID del último pago",
      "hora":"Hora",
      "fecha":"Fecha",
      "valor":"Valor",
      "fecha_proximo_pago":"Fecha próximo pago",

      //RUTINA USUARIO
      "id_rutina":"ID Rutina",
      "nombre_rutina":"Nombre Rutina",
      "id_ejercicio":"ID Ejercicio",
      "nombre_ejercicio":"Nombre Ejercicio",
      "mi_rutina_evolucion":"Mi Rutina",      

      /*..........ENTRENADOR.............*/
      //AGENDA ENTRENADOR
      "clientes":"Clientes",
      "planes":"Nuestros Planes",

      //ASIGNAR ENTRENAMIENTO
      "asignar_entrenamiento":"Asignar entrenamiento",
      "buscar_rutina":"Buscar rutina",
      "id_rutina_asignar":"Id Rutina: ",
      "tipo_rutina":"Tipo de rutina",
      "acciones":"Acciones",
      "crear_rutina":"Crear Rutina",
      "buscar_ejercicio":"Buscar Ejercicio",
      "id_ejercicio_asignar":"Id ejercicio:",
      "crear_ejercicio":"Crear ejercicio",
      "asignar_ejercicio_rutina":"Asignar ejercicio a rutina",
      "asignar_ejercicio":"Asignar ejercicio",
      "asignar_rutina_cliente":"Asignar rutina a cliente",
      "cedula_entrenamiento":"Cédula:",
      "asignar_rutina":"Asignar rutina",
      "repeticiones":"Repeticiones",

      //BUSCAR CLIENTES ENTRENADOR
      "lista_clientes":"Lista de clientes",
      "nombre_entrenador":"Nombre:",
      "cedula_entrenador":"ID:",

      //DETALLES CLIENTE ENTRENADOR
      "registrar_calificacion":"Registrar calificacion",
      "evolucion":"Evolución",

      //INGRESAR DEPORTE ENTREANDOR
      "nuevo_deporte":"Nuevo Deporte",
      "nombre_deporte":"Nombre:",
      "descripcion_deporte":"Descripcion:",
      "ingresar":"Ingresar",

      //INGRESAR FISIOTERAPIA ENTRENADOR
      "nombre-fisio":"Nombre:",
      "tipo-fisio":"Tipo:",
      "descripcion-fisio":"Descripcion",

      //INICIO PLANES ENTRENADOR
      "planes_y_fisio":"Planes de Entrenamiento y Fisioterapia",
      "nuevo":"Nuevo...",

      //REGISTRAR CALIFICACION

      "evolucion_clientes":"Evolución de clientes",
      "agregar_modificar_nota":"Agregar/modificar nota",
      "nota_actual":"Nota actual",
      "cumplimientoAgenda": "Cumplimiento con la agenda",
      "resistenciaAnaerobica":"Resistencia anaeróbica",
      "fuerzaMuscular":"Fuerza muscular",
      "resistenciaMuscular":"Resistencia muscular",
      "flexibilidad":"Flexibilidad",
      "resistenciaMonotonia":"Resistencia a la monotonía",
      "resiliencia":"Resiliencia",

      /*.....................SELECCIONADOR....................*/
      //ARMAR EQUIPO EXISTENTE SELECCIONADOR
      "equipos":"Equipos",
      "cedula_usuario":"Cédula del usuario: ",
      "id_equipo":"ID del equipo: ",
      "deportistas":"Deportistas",

      //ARMAR EQUIPO SELECCIONADRO
      "ingresar_equipo":"Ingresar equipo",
      "id_equipo":"ID equipo",
      "nombre_equipo":"Nombre equipo",
      "ingresar_deportista":"+Enter athlete",
      "deportistas_ingresados":"Ingresar Deportista",
      "gestionar":"Gestionar",
      "posicion":"Posicion",
      "cerrar":"Cerrar",
      "salir":"exit",
      

      //DEPORTISTAS SELECCIONADOR
      "evolucion_y_calificacion":"Evolution y calificacion",

      //EQUIPOS SELECCIONADOR
      "armar_equipos":"Armar equipos",
      "existente":"Existente",
      "deportistas_equipo":"Deportistas del equipo",

      //INDEX SELECCIONADOR
      "consultar_deportista":"Consultar deportista",

      /*.............SUPER USUARIO.............*/

      //CLUBES SUPER USUARIO
      "clubes":"Clubes",
      "ingresar_institucion":"Ingresar Institucion",

      //INDEX SUPER USUARIO
      "ingresar_club":"Enter Club",
      "ingresar_usuario":"Enter User",

      //REGISTRO
      "registro":"Registro",
      "nombre_usuario":"Nombre de usuario: ",
      "verificar_contra":"Verificar Contraseña",
      "foto_perfil":"Foto de perfil",
      "recibir_notificaciones":"Recibir notificaciones",
      "en_mi_celular":"En mi celular",
      "en_mi_correo":"En mi correo",
      "aceptar_terminos":"Aceptar Terminos y Condiciones",
      "registrarse":"Registrarse"


      
      



    
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