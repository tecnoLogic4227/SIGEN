//Script de validacion de datos

/*------------------------------Funciones para agendaAdministrativo--------------------------------*/
$("#buscar").click(tomar_datos_ci_agendaAdministrativo);

function tomar_datos_ci_agendaAdministrativo(){
    let Ci = $("#ci").val();
    verificar_ci_agendaAdministrativo(Ci)
}

function verificar_ci_agendaAdministrativo(ci){
    let verificacion=true;
    if(ci == ""){
        verificacion=false;
        mostrar_mensaje(verificacion, "mensaje_Error_Ci", "El campo de la cedula no puede estar vacio")
    }else{
        ci=Number(ci);
        if (ci == 0){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_Error_Ci", "La cedula no puede ser 0");
        }else if(ci < 0){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_Error_Ci", "La cedula no puede ser negativa");
        }else if(ci == null){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_Error_Ci", "La cedula no puede ser nula");
        }
    }
}

function verificar_formulario(datos){
    let verificacion=true;

    for(atributo in datos){
        if(datos[atributo] == "" || datos[atributo]==null){
            verificacion=false;
        }
    }

    return verificacion;
}

function mostrar_mensaje(verificacion, id_mensaje, mensaje){
    if(!verificacion){
        $("#"+id_mensaje).removeAttr("hidden");
        $("#"+id_mensaje).html(mensaje);
    }
}

function enviar_formulario(datos, id_form, id_mensaje){
    $.ajax({
        url: '/submit-form',
        type: 'POST', 
        data: $(id_form).serialize(),
        success: function(response) {
            $("#"+id_mensaje).html("<span class='mensaje_exito'>Formulario enviado correctamente.</span>");
        },
        error: function() {
            $("#"+id_mensaje).html("<span class='mensaje_error'>Hubo un error al enviar el formulario.</span>");
        }
    });
}

$("#ingresar").click(tomar_datos_formulario_agendaAdministrativo);
$("#eliminar").click(tomar_datos_formulario_agendaAdministrativo);

function tomar_datos_formulario_agendaAdministrativo(){
    datos_agenda_admin={
        fecha: $("#fecha-agenda").val(),
        hora: $("#hora").val()
    };

    let ver=verificar_formulario(datos_agenda_admin);
    let fecha_ver=controlar_fecha_input(datos_agenda_admin["fecha"]);
    if(ver && fecha_ver){
        enviar_formulario(ver, "mensaje_Error");
    }
}

function controlar_fecha_input(fecha){
    if(!fecha.includes("/")){
        alert("Formato de fecha invalido!");
    }else{
        let fecha_particionada=fecha.split("/");
        if (fecha_particionada.length==2){
            alert("Fecha incompleta");
        }

        let verificacion_largo=true;
        for(let i=0; i<fecha_particionada.length; i++){
            if(fecha_particionada[0].length < 2){
                verificacion_largo=false;
            }
        }
        if (!verificacion_largo){
            alert("El dia esta incompleto, coloque dos numeros");
        }

        if(Number(fecha_particionada[0]) > 31){
            alert("No existen dias mayores a 31");
        }

        if(Number(fecha_particionada[1]) > 12){
            alert("No existen mas de 12 meses al año")
        }

        if(fecha_particionada[2].length < 4){
            alert("El año debe de colocarse con los 4 digitos");
        }

        if(fecha_particionada[1].length < 2){
            alert("El mes debe de tener dos digitos");
        }

    }
}

/*------------------------------Funciones para armarEquipoSeleccionador--------------------------------*/
$("#btnIngresarDeportista").click(tomar_datos_formulario_armarEquipos);

function tomar_datos_formulario_armarEquipos(){
    datos={
        nombre_deportista: $("#nombreDeportista").val(),
        deporte_deportista: $("#deporteDeportista").val(),
        club_deportista: $("#clubDeportista").val()
    }
    let ver=verificar_formulario(datos);

    if(ver){
        //Funcion a probar
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_equipoSeleccionador", "Ninguno de los campos puede quedar vacio");
    }
}


/*------------------------------Funciones para asignarEntrenamiento--------------------------------*/

$("#boton-buscar").click(tomar_datos_ci_cliente_asignarEntremamiento);
function tomar_datos_ci_cliente_asignarEntremamiento(){
    datos_usu={
        ci_cliente: $("#ci-cliente").val(),
        actividad: $("#actividad").val(),
        id_rutina: $("#id-rutina").val()
    }
    let ver=verificar_formulario(datos_usu);
   
    if(ver){
        //Funcion a probar
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_ci_asignarEntrenamiento", "Ninguno de los campos puede quedar vacio");
    }
}

$("#boton-asignar-entrenamiento").click(tomar_datos_formulario_asignarEntrenamiento);
<span class="mensaje_error" id="mensaje_error_asignarEntrenamiento" hidden></span>

function tomar_datos_formulario_asignarEntrenamiento(){
    datos_usu={
        dia: $("#dia-entrenamiento").val(),
        musculo: $("#musculo").val(),
        descripcion: $("#descripcion").val(),
        series: $("#series").val(),
        repeticiones: $("#repeticiones").val()
    }
    let ver=verificar_formulario(datos_usu);
    if(ver){
        //Funcion a probar
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_asignarEntrenamiento", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para buscarClientesEntrenador--------------------------------*/

$("#boton_buscar_cliente").click(tomar_datos_ci_cliente_Entrenador);

function tomar_datos_ci_cliente_Entrenador(){
    let ci=$("#buscar-cliente").val();
    verificar_ci_cliente_Entrenador(ci);
}

function verificar_ci_cliente_Entrenador(ci){
    let verificacion=true;
    if(ci == ""){
        verificacion=false;
        alert("El campo de la cedula no puede quedar vacio");
        mostrar_mensaje(verificacion, "mensaje_error_buscar_cliente", "El campo de la cedula no puede quedar vacio");
    }else{
        ci=Number(ci);
        if (ci == 0){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_error_buscar_cliente", "La cedula no puede ser 0");
        }else if(ci < 0){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_error_buscar_cliente", "La cedula no puede ser negativa");
        }else if(ci == null){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_error_buscar_cliente", "El campo de la cedula no puede ser nulo");
        }
    }
}

/*------------------------------Funciones para consultarPDAdministrador--------------------------------*/

$("#btnBuscarPD").click(tomar_datos_ci_consultarPD);

function tomar_datos_ci_consultarPD(){
    let ci=$("#ciPD").val();
    verificar_ci_PD(ci);
}

function verificar_ci_PD(){
    let verificacion=true;
    if(ci == ""){
        verificacion=false;
        mostrar_mensaje(verificacion, "mensaje_error_consultarPDAdministrativo", "El campo de la cedula no puede quedar vacio");
    }else{
        ci=Number(ci);
        if (ci == 0){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_error_consultarPDAdministrativo", "La cedula no puede ser 0");
        }else if(ci < 0){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_error_consultarPDAdministrativo", "La cedula no puede ser negativa");
        }else if(ci == null){
            verificacion=false;
            mostrar_mensaje(verificacion, "mensaje_error_consultarPDAdministrativo", "La cedula no puede ser nula");
        }
    }
}

/*------------------------------Funciones para crearComboEntrenador--------------------------------*/

$("#boton_crear_combo").click(tomar_datos_combo);

function tomar_datos_combo(){
    datos_combo={
        nombre_combo: $("#nombre-combo").val(),
        id_combo: $("#id-combo").val(),
        id_plan: $("#id-plan").val(),
        nombre_plan: $("#nombre-plan").val(),
        ejercicio: $("#ejercicio").val(),
        musculo: $("#musculo").val(),
        series: $("#series").val(),
        repeticiones: $("#repeticiones").val(),
        descripcion: $("#descripcion").val()
    };

    let = verificar_formulario(datos_combo);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_crearComboEntrenador", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para deportesAvanzado--------------------------------*/

$("#agregar-deporte").click(tomar_datos_deporteAvanzado);

function tomar_datos_deporteAvanzado(){
    datos_deporte={
        nombre: $("#nombre-deporte").val(),
        tipo: $("#tipo-deporte").val(),
        duracion: $("#duracion-deporte").val(),
        categoria: $("#categoria-deporte").val(),
        cantidad: Number($("#cantidad-deporte").val())
    };
    let ver=verificar_formulario(datos_deporte);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_deportesAvanzado", "Ninguno de los campos puede quedar vacio");
    }
}


/*------------------------------Funciones para deportistasSeleccionador--------------------------------*/

$("#btnBuscarDeportista").click(tomar_datos_deportistasSeleccionador);

function tomar_datos_deportistasSeleccionador(){
    datos_deportista={
        nombre: $("#nombreDeportista").val(),
        deporte: $("#deporteDeportista").val(),
        club: $("#clubDeportista").val()
    };

    let ver=verificar_formulario(datos_deportista);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_deportistasSeleccionador", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para detallesClienteEntrenador--------------------------------*/

$("#buscar-cliente-deportista").click(tomar_datos_detallesClineteEntrenador);

function tomar_datos_detallesClineteEntrenador(){
    datos_cliente_entrenador={
        ci: $("#buscar-clinete-ci").val(),
        deporte: $("#buscar-cliente-deporte").val()
    };

   let ver = verificar_formulario(datos_cliente_entrenador);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_detallesClienteEntrenador", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para ejerciciosAvanzado--------------------------------*/

function tomar_datos_ejercicosAvanzado(){
    datos_ejercicio={
        nombre: $("#nombre-ejercicio").val(),
        musculo: $("#musculo-ejercicio").val(),
        serie: $("#serie-ejercicio").val(),
        repeticion: $("#repeticion-ejercicio").val(),
        descripcion: $("#descripcion-ejercicio").val()
    };
    let ver = verificar_formulario(datos_ejercicio);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_ejerciciosAvanzado", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para eliminarComboEntrenador--------------------------------*/

$("#buscar_combo").click(tomar_datos_eliminarCombo);

function tomar_datos_eliminarCombo(){
    datos_combo={
        nombre: $("#nombre-combo").val(),
        id: $("#id-combo").val(),
        seccion: $("#seccion-combo").val()
    };
    let ver=verificar_formulario(datos_combo);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_eliminarComboEntrenador", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para eliminarPlanEntrenador--------------------------------*/

$("#buscar_plan").click(tomar_datos_eliminarPlanEntrenador);

function tomar_datos_eliminarPlanEntrenador(){
    datos_plan={
        nombre: $("#nombre-plan").val(),
        id: $("#id-plan").val(),
        seccion: $("#seccion-plan").val()
    };

    let ver = verificar_formulario(datos_plan);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_eliminarPlanEntrenador", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para equiposSeleccionador--------------------------------*/

$("#btnBuscarEquipo").click(tomar_datos_equiposSeleccionador);
$("#btnArmarEquipo").click(tomar_datos_equiposSeleccionador);

function tomar_datos_equiposSeleccionador(){
    datos_equipos={
        deporte: $("#deporteClub").val(),
        equipo: $("#clubEquipo").val()
    };
    let ver = verificar_formulario(datos_equipos);
    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_equiposSeleccionador" , "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para ingresarDeporteEntrenador-------------------------------*/

$("#boton_ingresar_deporte").click(tomar_datos_ingresarDeporteEntrenador);

function tomar_datos_ingresarDeporteEntrenador(){
    datos_deporte={
        nombre_deporte: $("#nombre-deporte").val(),
        id_deporte: $("#id-deporte").val(),
        nombre_ejercicio: $("#nombre-ejercicio").val(),
        musculo: $("#musculo").val(),
        seires: $("#series").val(),
        repeticiones: $("#repeticiones").val(),
        descripcion: $("#descripcion").val()
    };
    let ver = verificar_formulario(datos_deporte);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_ingresarDeporteEntrenador", "Ninguno de los campos puede quedar vacio");
    }

}

/*------------------------------Funciones para ingresarDeporteEntrenador-------------------------------*/

$("#boton_ingresar_fisio").click(tomar_datos_ingresarFisioEntrenador);

function tomar_datos_ingresarFisioEntrenador(){
    datos_fisio={
        nombre_deporte: $("#nombre-fisio").val(),
        id_deporte: $("#id-fisio").val(),
        nombre_ejercicio: $("#ejercicio-fisio").val(),
        musculo: $("#musculo-fisio").val(),
        seires: $("#series-fisio").val(),
        repeticiones: $("#repeticiones-fisio").val(),
        descripcion: $("#descripcion-fisio").val()
    };
    let ver = verificar_formulario(datos_fisio);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_ingresarFisioEntrenador" ,"Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para login-------------------------------*/
$("#btnLogin").click(tomar_datos_login);
function tomar_datos_login(){
    datos_usu={
        nombre: $("#nombre").val(),
        passwd: $("#clave1").val()
    };
    let ver = verificar_formulario(datos_usu);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_login", "Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para registro-------------------------------*/

$("#btnRegistrarse").click(tomar_datos_registro);
function tomar_datos_registro(){
    datos_registro={
        nombre_usuario: $("#nombre").val(),
        passwd: $("#clave1").val(),
        verificacion_passwd: $("#clave2").val(),
        email: $("#email").val(),
        telefono: $("#tel").val(),
        residencia: $("#residencia").val(),
        fecha_nac: $("#fecha").val(),
        foto_perfil: $("#archivo").val()
    };
    controlar_fecha_input(datos_registro["fecha_nac"]);
    let ver = verificar_formulario(datos_registro);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_registro", "Ninguno de los campos puede quedar vacio");
    }
}

$("btnRegistrarse").click(tomar_claves);

function mensajeClaves(verificacion){
    if(!verificacion){
        alert("Las claves no coinciden");
    }
}

function tomar_claves(){
    let clave1=$("#clave1").val();
    let clave2=$("#clave2").val();

    let verificacion_claves=verificarClaves(clave1, clave2);
    mostrar_mensaje(verificacion_claves, "mensaje_error_registro_claves", "Las claves no coinciden");
}

function verificarClaves(passwd1, passwd2){
    if(passwd1 != passwd2){
        return false;
    }else{
        return true;
    }
}

/*------------------------------Funciones para registrarCalificacion-------------------------------*/
$("#buscar_cliente").click(tomar_datos_cliente);

function tomar_datos_cliente(){
    datos_cliente={
        ci_cliente: $("#ci-cliente").val(),
        actividad_clinete: $("#actividad-cliente").val()
    };

   let ver = verificar_formulario(datos_cliente);
   if(ver){
    enviar_formulario();
   }else{
    mostrar_mensaje(ver, "mensaje_error_registroCalificacion", "Ninguno de los campos del cliente pueden quedar vacios");
   }
}

$("#registrar_calificacion").click(tomar_datos_calificacion);

function tomar_datos_calificacion(){
    datos_calificacion={
        cumplimiento_agenda: $("#cumplimientoAgenda").val(),
        resistencia_Anaerobica:$("#resistenciaAnaerobica").val(),
        fuerza_muscular: $("#fuerzaMuscular").val(),
        resistencia_Muscular: $("#resistenciaMuscular").val(),
        flexibilidad: $("#felxibilidad").val(),
        resistencia_Monotonia: $("#resistenciaMonotonia").val(),
        resiliencia: $("#resiliencia").val()
    };
   let ver = verificar_formulario(datos_calificacion);
   if(ver){
    enviar_formulario();
   }else{
    mostrar_mensaje(ver, "mensaje_error_registroCalificacion", "Ninguno de los campos de las notas pueden quedar vacios");
   }
}

/*------------------------------Funciones para usuariosAvanzado-------------------------------*/
$("#agregar-usuario").click(tomar_datos_usuariosAvanzados);
function tomar_datos_usuariosAvanzados(){
    datos_usu_avanzado={
        nombre: $("#nombre-cliente").val(),
        apellido: $("#apellido-cliente").val(),
        email: $("#email-cliente").val(),
        ci: Number($("#ci-cliente").val()),
        matricula: $("#matricula-clinete").val(),
        celular: Number($("#celular-cliente").val()),
        actividad: $("#actividad-cliente").val(),
        club: $("#club-cliente").val(),
        plan: $("#plan-cliente").val()
    };
    let ver = verificar_formulario(datos_usu_avanzado);

    if(ver){
        enviar_formulario();
    }else{
        mostrar_mensaje(ver, "mensaje_error_usuariosAvanzados", "Ninguno de los campos pueden quedar vacios");
    }
}

/*"mensaje_error_modificarComboEntrenador" CREAR FUNCION DE MODIFICAR COMBO ENTRENADOR 
    Y LAS FUNCIONES PARA modificarPlanEntrenador
*/