$(document).ready(() => {
    let idEquipo, nombreEquipo, cantidad, metodo;
    const tabla = "equipo";
    datos = "";

    const listarEquipo = (datos) => {
        let tr;
        metodo = "GET";
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    $(".tablaEquipo tbody").html("");
                    $(".tablaJugadores tbody").html("");

                    const equipos = respuesta.equipos; 
                    const jugadores = respuesta.jugadores; 

                    for (let i = 0; i < equipos.length; i++) {
                        let trEquipo = $("<tr></tr>");
                        trEquipo.append(`<td>${equipos[i].id_equipo}</td>`);
                        trEquipo.append(`<td>${equipos[i].nombre_equipo}</td>`);
                        $(".tablaEquipo tbody").append(trEquipo);
                    }

                    // Mostrar jugadores
                    for (let j = 0; j < jugadores.length; j++) {
                        let trJugador = $("<tr></tr>");
                        trJugador.append(`<td>${jugadores[j].ci}</td>`); // Asegúrate de que 'ci' esté en la respuesta JSON
                        trJugador.append(`<td>${jugadores[j].nombre}</td>`);
                        trJugador.append(`<td>${jugadores[j].apellido}</td>`);
                        trJugador.append(`<td>${jugadores[j].posicion}</td>`);
                        trJugador.append(`<td>${jugadores[j].id_equipo}</td>`); // Cambiado a 'id_equipo'
                        $(".tablaJugadores tbody").append(trJugador);
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

    listarEquipo(datos);

    const manejarSolicitud = (metodo, datos, exitoMensaje, errorMensaje) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
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
