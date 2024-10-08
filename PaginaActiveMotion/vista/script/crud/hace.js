$(document).ready(() => {
    let ci, idEjercicio, metodo;
    const tabla = "hace";
    datos = "";

    const listarHace = (datos) => {
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
                    let hace = JSON.parse(response);
                    if (hace.length > 0) {
                        $(".tablaHace tbody").html("");
                        let tbody = $(".tablaHace tbody");
                        hace.forEach(hace1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${hace1.ci}</td>`);
                            tr.append(`<td>${hace1.id_ejercicio}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaHace tbody").html("");
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
                        listarHace(datos);
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

    const crearHace = (ci, idEjercicio) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idEjercicio: idEjercicio
        }, "Hace creado correctamente.", "Error al crear Hace.");
    };

    const datosCrearHace = (event) => {
        event.preventDefault();
        ci = $(".inputCrearHaceCi").val();
        idEjercicio = $(".inputCrearHaceIdEjercicio").val();
        crearHace(ci, idEjercicio);
    };

    listarHace(datos);

    const buscarHace = (ci, idEjercicio) => {
        listarHace({
            tabla: tabla,
            ci: ci,
            idEjercicio: idEjercicio
        });
    };

    const datosBuscarHace = (event) => {
        event.preventDefault();
        ci = $(".inputCrearHaceCi").val();
        idEjercicio = $(".inputCrearHaceIdEjercicio").val();
        buscarHace(ci, idEjercicio);
    };

    const modificarHace = (event) => {
        event.preventDefault();
        ci = $(".inputCrearHaceCi").val();
        idEjercicio = $(".inputCrearHaceIdEjercicio").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idEjercicio: idEjercicio
        }, "Hace modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarHace = (event) => {
        event.preventDefault();
        ci = $(".inputCrearHaceCi").val();
        idEjercicio = $(".inputCrearHaceIdEjercicio").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
            idEjercicio: idEjercicio
        }, "Hace eliminado correctamente.", "Error al eliminar Hace.");
    };

    const confirmarCrearHace = () => {
        limpiarPantalla();
        $(".confirmarCrearHace").css("display", "block");
    }

    const confirmarModificarHace = () => {
        limpiarPantalla();
        $(".confirmarModificarHace").css("display", "block");
    }

    const confirmarEliminarHace = () => {
        limpiarPantalla();
        $(".confirmarEliminarHace").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearHace").css("display", "none");
        $(".confirmarModificarHace").css("display", "none");
        $(".confirmarEliminarHace").css("display", "none");
    }

    $(".haceCrear").click(confirmarCrearHace);
    $(".haceConfirmarCrear").click(datosCrearHace);
    $(".haceBuscar").click(datosBuscarHace);
    $(".haceModificar").click(confirmarModificarHace);
    $(".haceConfirmarModificar").click(modificarHace);
    $(".haceEliminar").click(confirmarEliminarHace);
    $(".haceConfirmarEliminar").click(eliminarHace);

    $(".haceCancelarCrear").click(limpiarPantalla);
    $(".haceCancelarModificar").click(limpiarPantalla);
    $(".haceCancelarEliminar").click(limpiarPantalla);

});
