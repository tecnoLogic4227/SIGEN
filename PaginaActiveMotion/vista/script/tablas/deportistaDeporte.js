$(document).ready(() => {
    let ci, nombreDeporte, metodo;
    const tabla = "deportistaDeporte";
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
                    let deportistaDeporte = JSON.parse(response);
                    if (deportistaDeporte.length > 0) {
                        $(".tablaDeportistaDeporte tbody").html("");
                        let tbody = $(".tablaDeportistaDeporte tbody");
                        deportistaDeporte.forEach(deportistaDeporte1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${deportistaDeporte1.ci}</td>`);
                            tr.append(`<td>${deportistaDeporte1.nombre_deporte}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaDeportistaDeporte tbody").html("");
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
                        listarDeportistaDeporte(datos);
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

    const crearDeportistaDeporte = (ci, nombreDeporte) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            nombreDeporte: nombreDeporte,
        }, "DeportistaDeporte creado correctamente.", "Error al crear DeportistaDeporte.");
    };

    const datosCrearDeportistaDeporte = (event) => {
        event.preventDefault();
        ci = $(".inputCrearDeportistaDeporteCi").val();
        nombreDeporte = $(".inputCrearDeportistaDeporteNombreDeporte").val();
        crearDeportistaDeporte(ci, nombreDeporte);
    };

    listarDeportistaDeporte(datos);

    const buscarDeportistaDeporte = (ci) => {
        listarDeportistaDeporte({
            tabla: tabla,
            ci: ci,
        });
    };

    const datosBuscarDeportistaDeporte = (event) => {
        event.preventDefault();
        ci = $(".inputCrearDeportistaDeporteCi").val();
        buscarDeportistaDeporte(ci);
    };

    const modificarDeportistaDeporte = (event) => {
        event.preventDefault();
        ci = $(".inputCrearDeportistaDeporteCi").val();
        nombreDeporte = $(".inputCrearDeportistaDeporteNombreDeporte").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            nombreDeporte: nombreDeporte
        }, "DeportistaDeporte modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarDeportistaDeporte = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarDeportistaDeporteCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "DeportistaDeporte eliminado correctamente.", "Error al eliminar DeportistaDeporte.");
    };

    const confirmarCrearDeportistaDeporte = () => {
        limpiarPantalla();
        $(".confirmarCrearDeportistaDeporte").css("display", "block");
    }

    const confirmarModificarDeportistaDeporte = () => {
        limpiarPantalla();
        $(".confirmarModificarDeportistaDeporte").css("display", "block");
    }

    const confirmarEliminarDeportistaDeporte = () => {
        limpiarPantalla();
        $(".confirmarEliminarDeportistaDeporte").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearDeportistaDeporte").css("display", "none");
        $(".confirmarModificarDeportistaDeporte").css("display", "none");
        $(".confirmarEliminarDeportistaDeporte").css("display", "none");
    }

    $(".deportistaDeporteCrear").click(confirmarCrearDeportistaDeporte);
    $(".deportistaDeporteConfirmarCrear").click(datosCrearDeportistaDeporte);
    $(".deportistaDeporteBuscar").click(datosBuscarDeportistaDeporte);
    $(".deportistaDeporteModificar").click(confirmarModificarDeportistaDeporte);
    $(".deportistaDeporteConfirmarModificar").click(modificarDeportistaDeporte);
    $(".deportistaDeporteEliminar").click(confirmarEliminarDeportistaDeporte);
    $(".deportistaDeporteConfirmarEliminar").click(eliminarDeportistaDeporte);

    $(".deportistaDeporteCancelarCrear").click(limpiarPantalla);
    $(".deportistaDeporteCancelarModificar").click(limpiarPantalla);
    $(".deportistaDeporteCancelarEliminar").click(limpiarPantalla);

});
