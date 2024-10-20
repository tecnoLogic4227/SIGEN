$(document).ready(() => {
    let nombreDeporte, descripcion, metodo;
    const tabla = "deporte";
    datos = "";

    const listarDeporte = (datos) => {
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
                    let deporte = JSON.parse(response);
                    if (deporte.length > 0) {
                        $(".tablaDeporte tbody").html("");
                        let tbody = $(".tablaDeporte tbody");
                        deporte.forEach(deporte1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${deporte1.nombre_deporte}</td>`);
                            tr.append(`<td>${deporte1.descripcion}</td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaDeporte tbody").html("");
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
            type: metodo === "DELETE" ? "DELETE" : "POST", // Ajustar método DELETE
            data: { 
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta) {
                        alert(exitoMensaje);
                        datos = "";
                        listarDeporte(datos);
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

    const crearDeporte = (nombreDeporte, descripcion) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            nombreDeporte: nombreDeporte,
            descripcion: descripcion            
        }, "Deporte creado correctamente.", "Error al crear Deporte.");
    };

    const datosCrearDeporte = (event) => {
        event.preventDefault();
        nombreDeporte = $(".inputCrearDeporteNombreDeporte").val();
        descripcion = $(".inputCrearDeporteDescripcion").val();
        crearDeporte(nombreDeporte, descripcion);
    };

    listarDeporte(datos);

    const buscarDeporte = (nombreDeporte) => {
        listarDeporte({
            nombreDeporte: nombreDeporte,
        });
    };

    const datosBuscarDeporte = (event) => {
        event.preventDefault();
        nombreDeporte = $(".inputBuscarDeporteNombreDeporte").val();
        buscarDeporte(nombreDeporte);
    };

    const modificarDeporte = (event) => {
        event.preventDefault();
        nombreDeporte = $(".inputModificarDeporteNombreDeporte").val();
        descripcion = $(".inputModificarDeporteDescripcion").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            nombreDeporte: nombreDeporte,
            descripcion: descripcion,
        }, "Deporte modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarDeporte = (event) => {
        event.preventDefault();
        nombreDeporte = $(".inputEliminarDeporteNombreDeporte").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            nombreDeporte: nombreDeporte,
        }, "Deporte eliminado correctamente.", "Error al eliminar Deporte.");
    };

    const confirmarCrearDeporte = () => {
        limpiarPantalla();
        $(".confirmarCrearDeporte").css("display", "block");
    }

    const confirmarModificarDeporte = () => {
        limpiarPantalla();
        $(".confirmarModificarDeporte").css("display", "block");
    }

    const confirmarEliminarDeporte = () => {
        limpiarPantalla();
        $(".confirmarEliminarDeporte").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearDeporte").css("display", "none");
        $(".confirmarModificarDeporte").css("display", "none");
        $(".confirmarEliminarDeporte").css("display", "none");
    }

    $(".deporteCrear").click(confirmarCrearDeporte);
    $(".deporteConfirmarCrear").click(datosCrearDeporte);
    $(".deporteBuscar").click(datosBuscarDeporte);
    $(".deporteModificar").click(confirmarModificarDeporte);
    $(".deporteConfirmarModificar").click(modificarDeporte);
    $(".deporteEliminar").click(confirmarEliminarDeporte);
    $(".deporteConfirmarEliminar").click(eliminarDeporte);

    $(".deporteCancelarCrear").click(limpiarPantalla);
    $(".deporteCancelarModificar").click(limpiarPantalla);
    $(".deporteCancelarEliminar").click(limpiarPantalla);

});
