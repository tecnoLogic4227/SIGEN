$(document).ready(() => {
    let ci, idRutina, nivel, fechaInicio, fechaTermino, metodo;
    const tabla = "realiza";
    datos = "";

    const listarRealiza = (datos) => {
        metodo = "GET";
        $.ajax({
            url: "../../controlador/crud/crudController.php",
            type: "GET",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let realiza = JSON.parse(response);
                    if (realiza.length > 0) {
                        $(".tablaRealiza tbody").html("");
                        let tbody = $(".tablaRealiza tbody");
                        realiza.forEach(realiza1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${realiza1.ci}</td>`);
                            tr.append(`<td>${realiza1.id_rutina}</td>`);
                            tr.append(`<td>${realiza1.nivel}</td>`);
                            tr.append(`<td>${realiza1.fecha_inicio}</td>`);
                            tr.append(`<td>${realiza1.fecha_termino}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaRealiza tbody").html("");
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    const manejarSolicitud = (metodo, datos, exitoMensaje, errorMensaje) => {
        $.ajax({
            url: "../../../controlador/crud/crudController.php",
            type: "POST",
            data: { 
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta == true) {
                        alert(exitoMensaje);
                        datos = "";
                        listarRealiza(datos);
                    } else {
                        alert(errorMensaje);
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    const crearRealiza = (ci, idRutina, nivel, fechaInicio, fechaTermino) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Realiza creado correctamente.", "Error al crear Realiza.");
    };

    const datosCrearRealiza = (event) => {
        event.preventDefault();
        ci = $(".inputCrearRealizaCi").val();
        idRutina = $(".inputCrearRealizaIdRutina").val();
        nivel = $(".inputCrearRealizaNivel").val();
        fechaInicio = $(".inputCrearARealizaFechaInicio").val();
        fechaTermino = $(".inputCrearRealizaFechaTermino").val();
        crearRealiza(ci, idRutina, nivel, fechaInicio, fechaTermino);
    };

    listarRealiza(datos);

    const buscarRealiza = (idRutina) => {
        listarRealiza({
            tabla: tabla,
            idRutina: idRutina
        });
    };

    const datosBuscarRealiza = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRealizaIdRutina").val();
        buscarRealiza(idRutina);
    };

    const modificarRealiza = (event) => {
        event.preventDefault();
        ci = $(".inputModificarRealizaCi").val();
        idRutina = $(".inputModificarRealizaIdRutina").val();
        nivel = $(".inputModificarRealizaNivel").val();
        fechaInicio = $(".inputModificarRealizaFechaInicio").val();
        fechaTermino = $(".inputModificarRealizaFechaTermino").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Realiza modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarRealiza = (event) => {
        event.preventDefault();
        idRutina = $(".inputEliminarRealizaIdRutina").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idRutina: idRutina
        }, "Realiza eliminado correctamente.", "Error al eliminar Realiza.");
    };

    const confirmarCrearRealiza = () => {
        limpiarPantalla();
        $(".confirmarCrearRealiza").css("display", "block");
    }

    const confirmarModificarRealiza = () => {
        limpiarPantalla();
        $(".confirmarModificarRealiza").css("display", "block");
    }

    const confirmarEliminarRealiza = () => {
        limpiarPantalla();
        $(".confirmarEliminarRealiza").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearRealiza").css("display", "none");
        $(".confirmarModificarRealiza").css("display", "none");
        $(".confirmarEliminarRealiza").css("display", "none");
    }

    $(".realizaCrear").click(confirmarCrearRealiza);
    $(".realizaConfirmarCrear").click(datosCrearRealiza);
    $(".realizaBuscar").click(datosBuscarRealiza);
    $(".realizaModificar").click(confirmarModificarRealiza);
    $(".realizaConfirmarModificar").click(modificarRealiza);
    $(".realizaEliminar").click(confirmarEliminarRealiza);
    $(".realizaConfirmarEliminar").click(eliminarRealiza);

    $(".realizaCancelarCrear").click(limpiarPantalla);
    $(".realizaCancelarModificar").click(limpiarPantalla);
    $(".realizaCancelarEliminar").click(limpiarPantalla);

});
