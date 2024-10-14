$(document).ready(() => {
    let ci, idRutina, idFisioterapia, metodo;
    const tabla = "incluye";
    datos = "";

    const listarIncluye = (datos) => {
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
                    let incluye = JSON.parse(response);
                    if (incluye.length > 0) {
                        $(".tablaIncluye tbody").html("");
                        let tbody = $(".tablaIncluye tbody");
                        incluye.forEach(incluye1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${incluye1.ci}</td>`);
                            tr.append(`<td>${incluye1.id_rutina}</td>`);
                            tr.append(`<td>${incluye1.id_fisioterapia}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaIncluye tbody").html("");
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
                        listarIncluye(datos);
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

    const crearIncluye = (ci, idRutina, idFisioterapia) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idRutina: idRutina,
            idFisioterapia: idFisioterapia
        }, "Incluye creado correctamente.", "Error al crear Incluye.");
    };

    const datosCrearIncluye = (event) => {
        event.preventDefault();
        ci = $(".inputCrearIncluyeCi").val();
        idRutina = $(".inputCrearIncluyeIdRutina").val();
        idFisioterapia = $(".inputCrearIncluyeIdFisioterapia").val();
        crearIncluye(ci, idRutina, idFisioterapia);
    };

    listarIncluye(datos);

    const buscarIncluye = (ci, idRutina) => {
        listarIncluye({
            tabla: tabla,
            ci: ci,
            idRutina: idRutina
        });
    };

    const datosBuscarIncluye = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarIncluyeCi").val();
        idRutina = $(".inputBuscarIncluyeId").val();
        buscarIncluye(ci, idRutina);
    };

    const modificarIncluye = (event) => {
        event.preventDefault();
        ci = $(".inputCrearIncluyeCi").val();
        idRutina = $(".inputCrearIncluyeIdRutina").val();
        idFisioterapia = $(".inputCrearIncluyeIdFisioterapia").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idRutina: idRutina,
            idFisioterapia: idFisioterapia,
        }, "Incluye modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarIncluye = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarAsisteCi").val();
        idRutina = $(".inputEliminarAsisteIdRutina").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
            idRutina: idRutina
        }, "Incluye eliminado correctamente.", "Error al eliminar Incluye.");
    };

    const confirmarCrearIncluye = () => {
        limpiarPantalla();
        $(".confirmarCrearIncluye").css("display", "block");
    }

    const confirmarModificarIncluye = () => {
        limpiarPantalla();
        $(".confirmarModificarIncluye").css("display", "block");
    }

    const confirmarEliminarIncluye = () => {
        limpiarPantalla();
        $(".confirmarEliminarIncluye").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearIncluye").css("display", "none");
        $(".confirmarModificarIncluye").css("display", "none");
        $(".confirmarEliminarIncluye").css("display", "none");
    }

    $(".incluyeCrear").click(confirmarCrearIncluye);
    $(".incluyeConfirmarCrear").click(datosCrearIncluye);
    $(".incluyeBuscar").click(datosBuscarIncluye);
    $(".incluyeModificar").click(confirmarModificarIncluye);
    $(".incluyeConfirmarModificar").click(modificarIncluye);
    $(".incluyeEliminar").click(confirmarEliminarIncluye);
    $(".incluyeConfirmarEliminar").click(eliminarIncluye);

    $(".incluyeCancelarCrear").click(limpiarPantalla);
    $(".incluyeCancelarModificar").click(limpiarPantalla);
    $(".incluyeCancelarEliminar").click(limpiarPantalla);

});
