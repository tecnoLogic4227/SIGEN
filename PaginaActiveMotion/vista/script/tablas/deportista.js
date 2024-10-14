$(document).ready(() => {
    let ci, posicion, metodo;
    const tabla = "deportista";
    datos = "";

    const listarDeportista = (datos) => {
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
                    let deportista = JSON.parse(response);
                    if (deportista.length > 0) {
                        $(".tablaDeportista tbody").html("");
                        let tbody = $(".tablaDeportista tbody");
                        deportista.forEach(deportista1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${deportista1.ci}</td>`);
                            tr.append(`<td>${deportista1.posicion}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaDeportista tbody").html("");
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
                        listarDeportista(datos);
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

    const crearDeportista = (ci, posicion) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            posicion: posicion,
        }, "Deportista creado correctamente.", "Error al crear Deportista.");
    };

    const datosCrearDeportista = (event) => {
        event.preventDefault();
        ci = $(".inputCrearDeportistaCi").val();
        posicion = $(".inputCrearDeportistaPosicion").val();
        crearDeportista(ci, posicion);
    };

    listarDeportista(datos);

    const buscarDeportista = (ci) => {
        listarDeportista({
            tabla: tabla,
            ci: ci,
        });
    };

    const datosBuscarDeportista = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarDeportistaCI").val();
        buscarDeportista(ci);
    };

    const modificarDeportista = (event) => {
        event.preventDefault();
        ci = $(".inputModificarDeportistaCI").val();
        posicion = $(".inputModificarDeportistaPosicion").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            posicion: posicion,
        }, "Deportista modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarDeportista = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarDeportistaCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "Deportista eliminado correctamente.", "Error al eliminar Deportista.");
    };

    const confirmarCrearDeportista = () => {
        limpiarPantalla();
        $(".confirmarCrearDeportista").css("display", "block");
    }

    const confirmarModificarDeportista = () => {
        limpiarPantalla();
        $(".confirmarModificarDeportista").css("display", "block");
    }

    const confirmarEliminarDeportista = () => {
        limpiarPantalla();
        $(".confirmarEliminarDeportista").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearDeportista").css("display", "none");
        $(".confirmarModificarDeportista").css("display", "none");
        $(".confirmarEliminarDeportista").css("display", "none");
    }

    $(".deportistaCrear").click(confirmarCrearDeportista);
    $(".deportistaConfirmarCrear").click(datosCrearDeportista);
    $(".deportistaBuscar").click(datosBuscarDeportista);
    $(".deportistaModificar").click(confirmarModificarDeportista);
    $(".deportistaConfirmarModificar").click(modificarDeportista);
    $(".deportistaEliminar").click(confirmarEliminarDeportista);
    $(".deportistaConfirmarEliminar").click(eliminarDeportista);

    $(".deportistaCancelarCrear").click(limpiarPantalla);
    $(".deportistaCancelarModificar").click(limpiarPantalla);
    $(".deportistaCancelarEliminar").click(limpiarPantalla);

});
