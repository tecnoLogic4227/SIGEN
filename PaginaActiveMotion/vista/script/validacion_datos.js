//Script de validacion de datos

/*------------------------------Funciones para agendaAdministrativo--------------------------------*/
$("#buscar").click(tomar_datos_ci_agendaAdministrativo);

let clase_error="mensaje_error";
let clase_exito="mensaje_exito";

function tomar_datos_ci_agendaAdministrativo(event){
    event.preventDefault();
    let Ci = $("#ci").val();
    let ver=verificar_ci_agendaAdministrativo(Ci);

    if(ver){
        enviar_formulario("form-agendaAdmin", "mensaje_Ci", "formulario_agendaAdmin.php", "POST");
    }
}

function verificar_ci_agendaAdministrativo(ci){
    let verificacion=true;
    let mensaje="";
    if(ci == ""){
        verificacion=false;
        mensaje="El campo de la cedula no puede estar vacio";
    }else{
        ci=Number(ci);
        if (ci == 0){
            verificacion=false;
            mensaje="La cedula no puede ser 0";
        }else if(ci < 0){
            verificacion=false;
            mensaje="La cedula no puede ser negativa";
        }else if(ci == null){
            verificacion=false;
            mensaje="La cedula no puede ser nula";
        }
    }

    if(!verificacion){
        mostrar_mensaje("mensaje_agendaAmdin", mensaje, clase_error);
    }
    return verificacion;
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

//funcion para mostrar mensajes
function mostrar_mensaje(id_mensaje, mensaje, clase_mensaje){
    $("#"+id_mensaje).addClass(clase_mensaje);
    $("#"+id_mensaje).removeAttr("hidden");
    $("#"+id_mensaje).html(mensaje);
}

function enviar_formulario(id_form, id_mensaje, nombre_formulario, tipo_formulario){
    $.ajax({
        url: "../../../controlador/Verificacion de Datos PHP/"+nombre_formulario,
        type: tipo_formulario, 
        data: $("#"+id_form).serialize(),
        success: function(response) {
            $("#"+id_mensaje).addClass("mensaje_exito");
            $("#"+id_mensaje).html("Formulario enviado correctamente");
            mostrar_mensaje(id_mensaje, "Formulario enviado con exito!", clase_exito);
        },
        error: function() {
            mostrar_mensaje(id_mensaje, "Hubo un error al enviar el formulario!", clase_error);
        }
    });
}

function eliminar_letras(id_componente, id_mensaje) {
    $("#" + id_componente).on('input', function (e) {
        let value = this.value.replace(/[^0-9]/g, '');
        let maxLength = $(this).attr('maxlength');
        if (maxLength && value.length > maxLength) {
            value = value.substring(0, maxLength);
        }
        this.value = value;
    });
  
    $("#" + id_componente).on('blur', function () {
        let minLength = $(this).attr('minlength');
        if (minLength && this.value.length < minLength) {
            let mensaje='El número debe tener al menos ' + minLength + ' dígitos.';
            mostrar_mensaje(id_mensaje, mensaje, clase_error);
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
        //id_form, id_mensaje_ nombre_forumulario, tipo_formulario
        enviar_formulario("form-agendaAdmin", "mensaje_Error", "formulario_agendaAdmin.php", "POST");
    }else{
        mostrar_mensaje("mensaje_agendaAdmin", "Ninguno de los campos puede quedar vacio y la fecha debe de ser correcta", clase_error);
    }
}

function controlar_fecha_input(fecha){
    let mensaje="";
    let verificacion_fecha=true;
    if(!fecha.includes("/")){
        verificacion_fecha=false;
        mensaje="Formato de fecha invalido!";
    }else{
        let fecha_particionada=fecha.split("/");
        if (fecha_particionada.length==2){
            verificacion_fecha=false;
            mensaje="Fecha incompleta";
        }

        let verificacion_largo=true;
        for(let i=0; i<fecha_particionada.length; i++){
            if(fecha_particionada[0].length < 2){
                verificacion_largo=false;
            }
        }
        if (!verificacion_largo){
            verificacion_fecha=false;
            mensaje="El dia esta incompleto, coloque dos numeros";
        }

        if(Number(fecha_particionada[0]) > 31){
            verificacion_fecha=false;
            mensaje="No existen dias mayores a 31";
        }

        if(Number(fecha_particionada[1]) > 12){
            verificacion_fecha=false;
            mensaje="No existen mas de 12 meses al año";
        }

        if(fecha_particionada[2].length < 4){
            verificacion_fecha=false;
            mensaje="El año debe de colocarse con los 4 digitos";
        }

        if(fecha_particionada[1].length < 2){
            verificacion_fecha=false;
            mensaje="El mes debe de tener dos digitos";
        }

    }
    if(!verificacion_fecha){
        mostrar_mensaje("mensaje_Fecha", mensaje, clase_error);
    }
    return verificacion_fecha;


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
        //id_form, id_mensaje_ nombre_forumulario, tipo_formulario
        enviar_formulario("form-armarEquiposSeleccionador", "mensaje_equipoSeleccionador", "formulario_armarEquipo_seleccionador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_equipoSeleccionador", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-asignar_entrenamiento_buscar_CI", "mensaje_ci_asignarEntrenamiento","formulario_asignar_entrenamiento_cliente.php" ,"POST");
    }else{
        mostrar_mensaje("mensaje_ci_asignarEntrenamiento", "Ninguno de los campos puede quedar vacio", clase_error);
    }
}

$("#boton-asignar-entrenamiento").click(tomar_datos_formulario_asignarEntrenamiento);

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
        enviar_formulario("form-asignar-entrenamiento", "mensaje_asignarEntrenamiento", "formulario_asignar_entrenamiento.php", "POST");
    }else{
        mostrar_mensaje("mensaje_asignarEntrenamiento", "Ninguno de los campos puede quedar vacio", clase_error);
    }
}

/*------------------------------Funciones para buscarClientesEntrenador--------------------------------*/

$("#boton_buscar_cliente").click(tomar_datos_ci_cliente_Entrenador);

function tomar_datos_ci_cliente_Entrenador(){
    let ci=$("#buscar-cliente").val();
    let ver = verificar_ci_cliente_Entrenador(ci);

    if(ver){
        enviar_formulario("form-buscar-clientes-entrenador", "mensaje_buscar_cliente", "formulario_buscar_cliente_entrenador.php", "POST");
    }
}

function verificar_ci_cliente_Entrenador(ci){
    let verificacion=true;
    let mensaje="";
    if(ci == ""){
        verificacion=false;
        mensaje="El campo de la cedula no puede quedar vacio";
    }else{
        ci=Number(ci);
        if (ci == 0){
            verificacion=false;
            mensaje="La cedula no puede ser 0";
        }else if(ci < 0){
            verificacion=false;
            mensaje="La cedula no puede ser negativa";
        }else if(ci == null){
            verificacion=false;
            mensaje="El campo de la cedula no puede ser nulo";
        }
    }
    
    if(!verificacion){
        mostrar_mensaje("mensaje_buscar_cliente", mensaje, clase_error);
    }
    return verificacion;
}

/*------------------------------Funciones para consultarPDAdministrador--------------------------------*/

$("#btnBuscarPD").click(tomar_datos_ci_consultarPD);

function tomar_datos_ci_consultarPD(){
    let ci=$("#ciPD").val();
    let ver = verificar_ci_PD(ci);

    if(ver){
        enviar_formulario("form-consultar-PDA-administrativo","mensaje_consultarPDAdministrativo", "formulario_consulta_cliente_admin.php", "POST");
    }
}

function verificar_ci_PD(){
    let verificacion=true;
    let mensaje="";
    if(ci == ""){
        verificacion=false;
        mensaje="El campo de la cedula no puede quedar vacio";
    }else{
        ci=Number(ci);
        if (ci == 0){
            verificacion=false;
            mensaje="La cedula no puede ser 0";
        }else if(ci < 0){
            verificacion=false;
            mensaje="La cedula no puede ser negativa";
        }else if(ci == null){
            verificacion=false;
            mensaje="La cedula no puede ser nula";
        }
    }
    if(!verificacion){
        mostrar_mensaje("mensaje_consultarPDAdministrativo", mensaje, clase_error);
    }
    return verificacion;
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
        enviar_formulario("form-crear-combo-entrenador","mensaje_crearComboEntrenador","formulario_crear_combo_entrenador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_crearComboEntrenador", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-deportes-avanzado" ,"mensaje_deportesAvanzado", "formulario_deportista_seleccionador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_deportesAvanzado", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-deportistas-seleccionador","mensaje_deportistasSeleccionador", "formulario_deportista_seleccionador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_deportistasSeleccionador", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-detalles-cliente-entrenador","mensaje_detallesClienteEntrenador", "formulario_detalles_entrenador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_detallesClienteEntrenador", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-ejercicios-avanzado","mensaje_ejerciciosAvanzado", "formulario_ejercicios_avanzado.php", "POST");
    }else{
        mostrar_mensaje("mensaje_ejerciciosAvanzado", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-eliminar-combo-entrenador", "mensaje_eliminarComboEntrenador", "formulario_eliminar_combo_entrenador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_eliminarComboEntrenador", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-eliminar-plan-entrenador", "mensaje_eliminarPlanEntrenador", "formulario_eliminar_plan_entrenador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_eliminarPlanEntrenador", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-equiposSeleccionador", "mensaje_equiposSeleccionador", "formulario_equipo_seleccionador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_equiposSeleccionador" , "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-ingresar-deporte", "mensaje_ingresarDeporteEntrenador", "formulario_ingresar_deporte_entrenador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_ingresarDeporteEntrenador", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-ingresar-fisio", "mensaje_ingresarFisioEntrenador", "formulario_ingresar_fisioterapia.php", "POST");
    }else{
        mostrar_mensaje("mensaje_ingresarFisioEntrenador" ,"Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-login", "mensaje_login", "formulario_login.php", "POST");
    }else{
        mostrar_mensaje("mensaje_login", "Ninguno de los campos puede quedar vacio", clase_error);
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
        enviar_formulario("form-registro", "mensaje_registro", "formulario_registro.php", "POST");
    }else{
        mostrar_mensaje("mensaje_registro", "Ninguno de los campos puede quedar vacio", clase_error);
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
    if(!verificacion_claves){
        mostrar_mensaje("mensaje_registro_claves", "Las claves no coinciden", clase_error);
    }
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
    enviar_formulario("form-buscar-cliente-registrar-calificacion", "mensaje_ci_registroCalificacion", "formulario_registrar_calificacion_buscar_cliente.php", "POST");
   }else{
    mostrar_mensaje("mensaje_ci_registroCalificacion", "Ninguno de los campos del cliente pueden quedar vacios", clase_error);
   }
}
//Ver si con onclick o con jquery puedo pasar como parametro el id del formulario
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
    enviar_formulario("form-registrar-calificacion", "mensaje_registroCalificacion", "formulario_registrar_calificacion.php", "POST");
   }else{
    mostrar_mensaje("mensaje_registroCalificacion", "Ninguno de los campos de las notas pueden quedar vacios", clase_error);
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
        enviar_formulario("form-usuariosAvanzados", "mensaje_usuariosAvanzados", "formulario_usuariosAvanzado.php","POST");
    }else{
        mostrar_mensaje("mensaje_usuariosAvanzados", "Ninguno de los campos pueden quedar vacios", clase_error);
    }
}

/*"mensaje_error_modificarComboEntrenador" CREAR FUNCION DE MODIFICAR COMBO ENTRENADOR 
    Y LAS FUNCIONES PARA modificarPlanEntrenador
*/

$("#boton_modificar_combo").click(tomar_datos_modificarComboEntrenador);
function tomar_datos_modificarComboEntrenador(){
    datos_combo={
        nombre_combo: $("#nombre-combo").val(),
        id_combo: $("#id-combo").val(),
        seccion_combo: $("#seccion-combo").val()
    };

    let ver = verificar_formulario(datos_combo);

    if(ver){
        enviar_formulario("form-modificarComboEntrenador", "mensaje_modificarComboEntrenador", "formulario_modificar_combo_entrenador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_modificarComboEntrenador", "Ninguno de los campos puede quedar vacio", clase_error);
    }
}

$("#boton-modificar-plan").click(tomar_datos_modificarPlanEntrenador);
function tomar_datos_modificarPlanEntrenador(){
    datos_plan={
        nombre_plan: $("#nombre-plan").val(),
        id_plan: $("#id-plan").val(),
        seccion_plan: $("#seccion-plan").val()
    };

    let ver= verificar_formulario(datos_plan);

    if(ver){
        enviar_formulario("form-modificarPlanEntrenador", "mensaje_modificarPlanEntrenador", "formulario_modificar_plan_entrenador.php", "POST");
    }else{
        mostrar_mensaje("mensaje_modificarPlanEntrenador", "Ninguno de los campos puede quedar vacio", clase_error);
    }
}