$(document).ready(() => {
    let idRutina, metodo;
    const tabla = "rutDeporte";
    datos = "";

    const listarRutDeporte = (datos) => {
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
                    let rutDeporte = JSON.parse(response);
                    if (rutDeporte.length > 0) {
                        $(".tablaRutDeporte tbody").html("");
                        let tbody = $(".tablaRutDeporte tbody");
                        rutDeporte.forEach(rutDeporte1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${rutDeporte1.id_rutina}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaRutDeporte tbody").html("");
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
                        listarRutDeporte(datos);
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

    const crearRutDeporte = (idRutina) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
        }, "RutDeporte creado correctamente.", "Error al crear RutDeporte.");
    };

    const datosCrearRutDeporte = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearRutDeporteIdRutina").val();
        crearRutDeporte(idRutina);
    };

    listarRutDeporte(datos);

    const buscarRutDeporte = (idRutina) => {
        listarRutDeporte({
            idRutina: idRutina
        });
    };

    const datosBuscarRutDeporte = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRutDeporteIdRutina").val();
        buscarRutDeporte(idRutina);
    };

    const modificarRutDeporte = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRutDeporteIdRutina").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
        }, "RutDeporte modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarRutDeporte = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRutDeporteIdRutina").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idRutina: idRutina
        }, "RutDeporte eliminado correctamente.", "Error al eliminar RutDeporte.");
    };

    const confirmarCrearRutDeporte = () => {
        limpiarPantalla();
        $(".confirmarCrearRutDeporte").css("display", "block");
    }

    const confirmarModificarRutDeporte = () => {
        limpiarPantalla();
        $(".confirmarModificarRutDeporte").css("display", "block");
    }

    const confirmarEliminarRutDeporte = () => {
        limpiarPantalla();
        $(".confirmarEliminarRutDeporte").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearRutDeporte").css("display", "none");
        $(".confirmarModificarRutDeporte").css("display", "none");
        $(".confirmarEliminarRutDeporte").css("display", "none");
    }

    $(".rutDeporteCrear").click(confirmarCrearRutDeporte);
    $(".rutDeporteConfirmarCrear").click(datosCrearRutDeporte);
    $(".rutDeporteBuscar").click(datosBuscarRutDeporte);
    $(".rutDeporteModificar").click(confirmarModificarRutDeporte);
    $(".rutDeporteConfirmarModificar").click(modificarRutDeporte);
    $(".rutDeporteEliminar").click(confirmarEliminarRutDeporte);
    $(".rutDeporteConfirmarEliminar").click(eliminarRutDeporte);

    $(".rutDeporteCancelarCrear").click(limpiarPantalla);
    $(".rutDeporteCancelarModificar").click(limpiarPantalla);
    $(".rutDeporteCancelarEliminar").click(limpiarPantalla);

});
