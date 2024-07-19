//Script de validacion de datos

/*------------------------------Funciones para agendaAdministrativo--------------------------------*/
$("#buscar").click(tomar_datos_ci_agendaAdministrativo);

function tomar_datos_ci_agendaAdministrativo(){
    let Ci = $("#ci").val();
    verificar_ci_agendaAdministrativo(Ci)
}

function verificar_ci_agendaAdministrativo(ci){
    if(ci == ""){
        alert("El campo de la cedula no puede quedar vacio");
    }else{
        ci=Number(ci);
        if (ci == 0){
            alert("La cedula no puede ser 0");
        }else if(ci < 0){
            alert("La cedula no puede ser negativa");
        }else if(ci == null){
            alert("El campo de la cedula no puede ser nulo");
        }
    }
}

$("#ingresar").click(tomar_datos_formulario_agendaAdministrativo);
$("#eliminar").click(tomar_datos_formulario_agendaAdministrativo);

function tomar_datos_formulario_agendaAdministrativo(){
    let fecha_agenda=$("#fecha-agenda").val();
    let hora=$("#hora").val();
    verificar_formulario_agendaAdministrativo(fecha_agenda, hora);
    controlar_fecha_input(fecha_agenda);
}

function verificar_formulario_agendaAdministrativo(fecha, hora){
    if (fecha == "" || hora==""){
        alert("Ninguno de los campos de fecha y hora pueden quedar vacios");
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
    validar_datos_formulario_armarEquipos(datos);
}

function validar_datos_formulario_armarEquipos(datos_deportista){
    let validacion=true
    for(let atributo in datos_deportista){
        if (datos_deportista[atributo]==""){
            validacion=false
        }
    }

    if (!validacion){
        alert("Ninguno de los campos puede quedar vacio");
        $("#nombreClub").html("");
        $("#deportista").html("");
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
    verificar_formulario_asignarEntrenamiento(datos_usu);
}

function verificar_formulario_asignarEntrenamiento(datos){
    let verificacion=true
    for(atributo in datos){
        if (datos[atributo]==""){
            verificacion=false            
        }
    }

    if (!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
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
    verificar_formulario_asignarEjercicio(datos_usu);
}

function verificar_formulario_asignarEjercicio(datos){
    let verificacion=true;

    for(atributo in datos){
        if (datos[atributo]==""){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para buscarClientesEntrenador--------------------------------*/

$("#boton_buscar_cliente").click(tomar_datos_ci_cliente_Entrenador);

function tomar_datos_ci_cliente_Entrenador(){
    let ci=$("#buscar-cliente").val();
    verificar_ci_cliente_Entrenador(ci);
}

function verificar_ci_cliente_Entrenador(ci){
    if(ci == ""){
        alert("El campo de la cedula no puede quedar vacio");
    }else{
        ci=Number(ci);
        if (ci == 0){
            alert("La cedula no puede ser 0");
        }else if(ci < 0){
            alert("La cedula no puede ser negativa");
        }else if(ci == null){
            alert("El campo de la cedula no puede ser nulo");
        }
    }
}

/*------------------------------Funciones para consultarPDAdministrador--------------------------------*/

$("#btnBuscarPD").click(tomar_datos_ci_consultarPD);

function tomar_datos_ci_consultarPD(){
    let ci=$("#ciPD").val();
    verificar_formulario_PD(ci);
}

function verificar_formulario_PD(){
    if(ci == ""){
        alert("El campo de la cedula no puede quedar vacio");
    }else{
        ci=Number(ci);
        if (ci == 0){
            alert("La cedula no puede ser 0");
        }else if(ci < 0){
            alert("La cedula no puede ser negativa");
        }else if(ci == null){
            alert("El campo de la cedula no puede ser nulo");
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
    }
}

function verificar_formulario_combo(datos){
    let verificacion=true;

    for(atributo in datos){
        if(datos[atributo]==""){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
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
    }
    verificar_formulario_deporteAvanzado(datos_deporte);

}

function verificar_formulario_deporteAvanzado(datos){
    let verificacion=true;

    for(atributo in datos){
        if (datos[atributo]==""){
            verificacion=false;
        }
    }
    
    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para deportistasSeleccionador--------------------------------*/

$("#btnBuscarDeportista").click(tomar_datos_deportistasSeleccionador);

function tomar_datos_deportistasSeleccionador(){
    datos_deportista={
        nombre: $("#nombreDeportista").val(),
        deporte: $("#deporteDeportista").val(),
        club: $("#clubDeportista").val()
    }

    verificar_formulario_deportistaSeleccionador(datos_deportista);
}

function verificar_formulario_deportistaSeleccionador(datos){
    let verificacion=true;

    for(atributo in datos){
        if (datos[atributo]==""){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para detallesClienteEntrenador--------------------------------*/

$("#buscar-cliente-deportista").click(tomar_datos_detallesClineteEntrenador);

function tomar_datos_detallesClineteEntrenador(){
    datos_cliente_entrenador={
        ci: $("#buscar-clinete-ci").val(),
        deporte: $("#buscar-cliente-deporte").val()
    }

    verificar_formulario_detallesClienteEntrenador(datos_cliente_entrenador);
}

function verificar_formulario_detallesClienteEntrenador(datos){
    let verificacion=true;

    for(atributo in datos){
        if (datos[atributo] == ""){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para detallesClienteEntrenador--------------------------------*/

function tomar_datos_ejercicosAvanzado(){
    datos_ejercicio={
        nombre: $("#nombre-ejercicio").val(),
        musculo: $("#musculo-ejercicio").val(),
        serie: $("#serie-ejercicio").val(),
        repeticion: $("#repeticion-ejercicio").val(),
        descripcion: $("#descripcion-ejercicio").val()
    }
    verificar_formulario_ejerciciosAvanzados(datos_ejercicio);
}

function verificar_formulario_ejerciciosAvanzados(datos){
    let verificacion=true;

    for(atributo in datos){
        if (datos[atributo] == ""){
            verificacion=false;
        }
    }
    
    if (!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para eliminarComboEntrenador--------------------------------*/

$("#buscar_combo").click(tomar_datos_eliminarCombo);

function tomar_datos_eliminarCombo(){
    datos_combo={
        nombre: $("#nombre-combo").val(),
        id: $("#id-combo").val(),
        seccion: $("#seccion-combo").val()
    }
    verificar_formulario_eliminarCombo(datos_combo);
}

function verificar_formulario_eliminarCombo(datos){
    let verificacion=true;

    for(atributo in datos){
        if(datos[atributo] ==""){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para eliminarComboEntrenador--------------------------------*/

$("#buscar_plan").click(tomar_datos_eliminarPlanEntrenador);

function tomar_datos_eliminarPlanEntrenador(){
    datos_plan={
        nombre: $("#nombre-plan").val(),
        id: $("#id-plan").val(),
        seccion: $("#seccion-plan").val()
    }
}

function verificar_formulario_eliminarPlanEntrenador(datos){
    let verificacion=true;

    for(atributo in datos){
        if(datos[atributo] == ""){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para eliminarComboEntrenador--------------------------------*/

$("#btnBuscarEquipo").click(tomar_datos_equiposSeleccionador);
$("#btnArmarEquipo").click(tomar_datos_equiposSeleccionador);

function tomar_datos_equiposSeleccionador(){
    datos_equipos={
        deporte: $("#deporteClub").val(),
        equipo: $("#clubEquipo").val()
    }
    verificar_formulario_equiposSeleccionador(datos_equipos);
}

function verificar_formulario_equiposSeleccionador(datos){
    let verificacion=true;

    for(atributo in datos){
        if(datos[atributo]==""){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos pueden estar vacios");
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
    }
    verificar_formulario_ingresarDeporteEntrenador(datos_deporte);

}

function verificar_formulario_ingresarDeporteEntrenador(datos){
    let verificacion= true;

    for(atributo in datos){
        if(datos[atributo]=="" || datos[atributo]==null){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
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
    }
    verificar_formulario_ingresarFisioEntrenador(datos_fisio)
}

function verificar_formulario_ingresarFisioEntrenador(datos){
    let verificacion= true;

    for(atributo in datos){
        if(datos[atributo]=="" || datos[atributo]==null){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}

/*------------------------------Funciones para login-------------------------------*/
$("#btnLogin").click(tomar_datos_login);
function tomar_datos_login(){
    datos_usu={
        nombre: $("#nombre").val(),
        passwd: $("#clave1").val()
    }
    verificar_formulario_login(datos_usu);
}

function verificar_formulario_login(datos){
    let verificacion=false;

    for(atributo in datos){
        if(datos[atributo] == "" || datos[atributo] == null){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
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
    }
    verificar_formulario_registro(datos_registro);
    controlar_fecha_input(datos_registro["fecha_nac"]);
}

function verificar_formulario_registro(datos){
    let verificacion=true;

    for(atributo in datos){
        if(datos[atributo] == "" || datos[atributo] == null){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
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

    mensajeClaves(verificarClaves(clave1, clave2));
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
    }

    verificar_formulario_datos_cliente(datos_cliente);
}

function verificar_formulario_datos_cliente(datos){
    let verificacion=true;

    for(atributo in datos){
        if (datos[atributo] == "" || datos[atributo] == null){
            verificacion=false;
        }
    }

    if (!verificacion){
        alert("Ninguno de los campos del cliente puede quedar vacio");
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
    }
    verificar_formulario_calificacion(datos_calificacion);
}

function verificar_formulario_calificacion(datos){
    let verificacion=true;

    for(atributo in datos){
        if (datos[atributo] == "" || datos[atributo] == null){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos de la tabla de notas puede quedar vacio");
    }
}

/*------------------------------Funciones para usuariosAvanzado-------------------------------*/

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
    verificar_formulario_usuariosAvanzados(datos_usu_avanzado);
}

function verificar_formulario_usuariosAvanzados(datos){
    let verificacion=true;

    for(atributo in datos){
        if(datos[atributo] == "" || datos[atributo]==null){
            verificacion=false;
        }
    }

    if(!verificacion){
        alert("Ninguno de los campos puede quedar vacio");
    }
}