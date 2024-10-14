$(document).ready(() => {
    let ci, idEquipo, metodo;
    const tabla = "esta";
    datos = "";

    const listarAsiste = (datos) => {
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
                    let esta = JSON.parse(response);
                    if (esta.length > 0) {
                        $(".tablaEsta tbody").html("");
                        let tbody = $(".tablaEsta tbody");
                        esta.forEach(esta1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${esta1.ci}</td>`);
                            tr.append(`<td>${esta1.id_equipo}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaEsta tbody").html("");
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
                        listarEsta(datos);
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

    const crearEsta = (ci, idRutina, nivel, fechaInicio, fechaTermino) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Esta creado correctamente.", "Error al crear Esta.");
    };

    const datosCrearEsta = (event) => {
        event.preventDefault();
        ci = $(".inputCrearEstaCI").val();
        idRutina = $(".inputCrearEstaIDRutina").val();
        nhaTermino = $(".inputCrearAsisteFechaTermino").val();
        crearEsta(ci, idRutina, nivel, fechaInicio, fechaTermino);
    };

    listarEsta(datos);

    const buscarEsta = (ci, idRutina) => {
        listarEsta({
            tabla: tabla,
            ci: ci,
            idRutina: idRutina
        });
    };

    const datosBuscarEsta= (event) => {
        event.preventDefault();
        ci = $(".inputBuscarAsisteCI").val();
        idRutina = $(".inputBuscarAsisteID").val();
        buscarEsta(ci, idRutina);
    };

    const modificarEsta = (event) => {
        event.preventDefault();
        ci = $(".inputModificarAsisteCI").val();
        idRutina = $(".inputModificarAsisteIDRutina").val();
        nivel = $(".inputModificarAsisteNivel").val();
        fechaInicio = $(".inputModificarAsisteFechaInicio").val();
        fechaTermino = $(".inputModificarAsisteFechaTermino").val();
        limpiarPantalla();
        manejarSolicitud("PUT", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Esta modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarEsta = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarAsisteCI").val();
        idRutina = $(".inputEliminarAsisteIDRutina").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
            idRutina: idRutina
        }, "Esta eliminado correctamente.", "Error al eliminar Esta.");
    };

    const confirmarCrearEsta = () => {
        limpiarPantalla();
        $(".confirmarCrearEsta").css("display", "block");
    }

    const confirmarModificarEsta = () => {
        limpiarPantalla();
        $(".confirmarModificarEsta").css("display", "block");
    }

    const confirmarEliminarEsta = () => {
        limpiarPantalla();
        $(".confirmarEliminarEsta").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearEsta").css("display", "none");
        $(".confirmarModificarEsta").css("display", "none");
        $(".confirmarEliminarEsta").css("display", "none");
    }

    $(".estaCrear").click(confirmarCrearEsta);
    $(".estaConfirmarCrear").click(datosCrearEsta);
    $(".estaBuscar").click(datosBuscarEsta);
    $(".estaModificar").click(confirmarModificarEsta);
    $(".estaConfirmarModificar").click(modificarEsta);
    $(".estaEliminar").click(confirmarEliminarEsta);
    $(".estaConfirmarEliminar").click(eliminarEsta);

    $(".estaCancelarCrear").click(limpiarPantalla);
    $(".estaCancelarModificar").click(limpiarPantalla);
    $(".estaCancelarEliminar").click(limpiarPantalla);

});
