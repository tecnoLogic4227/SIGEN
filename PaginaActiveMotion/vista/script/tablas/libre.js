$(document).ready(() => {
    let ci, metodo;
    const tabla = "libre";
    datos = "";

    const listarLibre = (datos) => {
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
                    let libre = JSON.parse(response);
                    if (libre.length > 0) {
                        $(".tablaLibre tbody").html("");
                        let tbody = $(".tablaLibre tbody");
                        libre.forEach(libre1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${libre1.ci}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaLibre tbody").html("");
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
                        listarLibre(datos);
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

    const crearLibre = (ci) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
        }, "Libre creado correctamente.", "Error al crear Libre.");
    };

    const datosCrearLibre = (event) => {
        event.preventDefault();
        ci = $(".inputCrearLibreCi").val();
        crearLibre(ci);
    };

    listarLibre(datos);

    const buscarLibre = (ci) => {
        listarLibre({
            tabla: tabla,
            ci: ci,
        });
    };

    const datosBuscarLibre = (event) => {
        event.preventDefault();
        ci = $(".inputCrearLibreCi").val();
        buscarLibre(ci);
    };

    const modificarLibre = (event) => {
        event.preventDefault();
        ci = $(".inputCrearLibreCi").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
        }, "Libre modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarLibre = (event) => {
        event.preventDefault();
        ci = $(".inputCrearLibreCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "Libre eliminado correctamente.", "Error al eliminar Libre.");
    };

    const confirmarCrearLibre = () => {
        limpiarPantalla();
        $(".confirmarCrearLibre").css("display", "block");
    }

    const confirmarModificarLibre = () => {
        limpiarPantalla();
        $(".confirmarModificarLibre").css("display", "block");
    }

    const confirmarEliminarLibre = () => {
        limpiarPantalla();
        $(".confirmarEliminarLibre").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearLibre").css("display", "none");
        $(".confirmarModificarLibre").css("display", "none");
        $(".confirmarEliminarLibre").css("display", "none");
    }

    $(".libreCrear").click(confirmarCrearLibre);
    $(".libreConfirmarCrear").click(datosCrearLibre);
    $(".libreBuscar").click(datosBuscarLibre);
    $(".libreModificar").click(confirmarModificarLibre);
    $(".libreConfirmarModificar").click(modificarLibre);
    $(".libreEliminar").click(confirmarEliminarLibre);
    $(".libreConfirmarEliminar").click(eliminarLibre);

    $(".libreCancelarCrear").click(limpiarPantalla);
    $(".libreCancelarModificar").click(limpiarPantalla);
    $(".libreCancelarEliminar").click(limpiarPantalla);

});
