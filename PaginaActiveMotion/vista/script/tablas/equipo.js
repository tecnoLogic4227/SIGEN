$(document).ready(() => {
    let idEquipo, nombreEquipo, cantidad, metodo;
    const tabla = "equipo";
    datos = "";

    const listarEquipo = (datos) => {
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
                    let equipo = JSON.parse(response);
                    if (equipo.length > 0) {
                        $(".tablaEquipo tbody").html("");
                        let tbody = $(".tablaEquipo tbody");
                        equipo.forEach(equipo1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${equipo1.id_equipo}</td>`);
                            tr.append(`<td>${equipo1.nombre_equipo}</td>`);
                            tr.append(`<td>${equipo1.cantidad}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaEquipo tbody").html("");
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
                        listarEquipo(datos);
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

    const crearEquipo = (idEquipo, nombreEquipo, cantidad) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idEquipo: idEquipo,
            nombreEquipo: nombreEquipo,
            cantidad: cantidad
        }, "Equipo creado correctamente.", "Error al crear Equipo.");
    };

    const datosCrearEquipo = (event) => {
        event.preventDefault();
        idEquipo = $(".inputCrearEquipoIdEquipo").val();
        nombreEquipo = $(".inputCrearEquipoNombreEquipo").val();
        cantidad = $(".inputCrearEquipoCantidad").val();
        crearEquipo(idEquipo, nombreEquipo, cantidad);
    };

    listarEquipo(datos);

    const buscarEquipo = (idEquipo) => {
        listarEquipo({
            tabla: tabla,
            idEquipo: idEquipo
        });
    };

    const datosBuscarEquipo = (event) => {
        event.preventDefault();
        idEquipo = $(".inputBuscarEquipoIdEquipo").val();
        buscarEquipo(idEquipo);
    };

    const modificarEquipo = (event) => {
        event.preventDefault();
        idEquipo = $(".inputCrearEquipoIdEquipo").val();
        nombreEquipo = $(".inputCrearEquipoNombreEquipo").val();
        cantidad = $(".inputCrearEquipoCantidad").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idEquipo: idEquipo,
            nombreEquipo: nombreEquipo,
            cantidad: cantidad
        }, "Equipo modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarEquipo = (event) => {
        event.preventDefault();
        idEquipo = $(".inputBuscarEquipoIdEquipo").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idEquipo: idEquipo
        }, "Equipo eliminado correctamente.", "Error al eliminar Equipo.");
    };

    const confirmarCrearEquipo = () => {
        limpiarPantalla();
        $(".confirmarCrearEquipo").css("display", "block");
    }

    const confirmarModificarEquipo = () => {
        limpiarPantalla();
        $(".confirmarModificarEquipo").css("display", "block");
    }

    const confirmarEliminarEquipo = () => {
        limpiarPantalla();
        $(".confirmarEliminarEquipo").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearEquipo").css("display", "none");
        $(".confirmarModificarEquipo").css("display", "none");
        $(".confirmarEliminarEquipo").css("display", "none");
    }

    $(".equipoCrear").click(confirmarCrearEquipo);
    $(".equipoConfirmarCrear").click(datosCrearEquipo);
    $(".equipoBuscar").click(datosBuscarEquipo);
    $(".equipoModificar").click(confirmarModificarEquipo);
    $(".equipoConfirmarModificar").click(modificarEquipo);
    $(".equipoEliminar").click(confirmarEliminarEquipo);
    $(".equipoConfirmarEliminar").click(eliminarEquipo);

    $(".equipoCancelarCrear").click(limpiarPantalla);
    $(".equipoCancelarModificar").click(limpiarPantalla);
    $(".equipoCancelarEliminar").click(limpiarPantalla);

});
