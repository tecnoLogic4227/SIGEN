$(document).ready(() => {
    let idEquipo, nombreEquipo, cantidad, ci, metodo;
    const tabla = "equipo";
    datos = "";
    var jugadores = [];

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

                    if ((respuesta.equipos && respuesta.equipos.length > 0) || (respuesta.jugadores && respuesta.jugadores.length > 0)) {
                        const equipos = respuesta.equipos;
                        const jugadores = respuesta.jugadores;

                        for (let i = 0; i < equipos.length; i++) {
                            let trEquipo = $("<tr></tr>");
                            trEquipo.append(`<td>${equipos[i].id_equipo}</td>`);
                            trEquipo.append(`<td>${equipos[i].nombre_equipo}</td>`);
                            $(".tablaEquipo tbody").append(trEquipo);
                        }

                        for (let j = 0; j < jugadores.length; j++) {
                            let trJugador = $("<tr></tr>");
                            trJugador.append(`<td>${jugadores[j].ci}</td>`);
                            trJugador.append(`<td>${jugadores[j].nombre}</td>`);
                            trJugador.append(`<td>${jugadores[j].apellido}</td>`);
                            trJugador.append(`<td>${jugadores[j].posicion}</td>`);
                            trJugador.append(`<td>${jugadores[j].id_equipo}</td>`);
                            $(".tablaJugadores tbody").append(trJugador);
                        }
                    } else {
                        alert("No se encontraron resultados.");
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

    const manejarSolicitud = (metodo, datos, exitoMensaje) => {
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
                    if (respuesta === true) {
                        alert(exitoMensaje);
                        datos = "";
                        listarEquipo(datos);
                    } else {
                        alert(respuesta);
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

    const crearEquipo = (idEquipo, nombreEquipo, deporte) => {
        manejarSolicitud("POST", {
            jugadores: JSON.stringify(jugadores),
            idEquipo: idEquipo,
            nombreEquipo: nombreEquipo,
            deporte: deporte
        }, "Equipo creado correctamente.");
    };

    const datosCrearEquipo = (event) => {
        event.preventDefault();
        idEquipo = $(".inputCrearEquipoIdEquipo").val();
        nombreEquipo = $(".inputCrearEquipoNombreEquipo").val();
        deporte = $(".inputCrearEquipoDeporte").val();
        crearEquipo(idEquipo, nombreEquipo, deporte);
    };

    const verificarExistenciaJugadores = (ci, posicion, jugadores) => {
        if (!jugadores.some(jugador => jugador.ci == ci)) {
            if (filtroCedula(ci)) {
                jugadores.push({ "ci": ci, "posicion": posicion });
                mostrarJugadores();
            } else {
                alert("Por favor ingrese una cédula válida.");
            }
        } else {
            alert("Jugador ya existente.");
        }
    };


    const mostrarJugadores = () => {
        $(".tablaOutputDeportistas tbody").html("");
        jugadores.forEach((jugador, index) => {
            let trJugador = $("<tr></tr>");
            trJugador.append(`<td>${jugador["ci"]}</td>`);
            trJugador.append(`<td><button class="botonEliminarJugador" data-index="${index}">Eliminar</button></td>`);
            $(".tablaOutputDeportistas tbody").append(trJugador);
        });
    };

    const eliminarJugador = function () {
        const index = $(this).data("index");
        jugadores.splice(index, 1);
        mostrarJugadores();
    };

    const datosDeportistas = (event) => {
        event.preventDefault();
        ci = $(".inputArmarEquipoCi").val();
        posicion = $(".inputArmarEquipoPosicion").val();

        verificarExistenciaJugadores(ci, posicion, jugadores);

        $(".inputArmarEquipoCi").val("");
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
    };

    const confirmarModificarEquipo = () => {
        limpiarPantalla();
        $(".confirmarModificarEquipo").css("display", "block");
    };

    const confirmarEliminarEquipo = () => {
        limpiarPantalla();
        $(".confirmarEliminarEquipo").css("display", "block");
    };

    const limpiarPantalla = () => {
        $(".confirmarCrearEquipo").css("display", "none");
        $(".confirmarModificarEquipo").css("display", "none");
        $(".confirmarEliminarEquipo").css("display", "none");
    };

    $(".equipoCrear").click(confirmarCrearEquipo);
    $(".equipoConfirmarCrear").click(datosCrearEquipo);

    $(".botonEquipoAgregarJugador").click(datosDeportistas);

    $(document).on("click", ".botonEliminarJugador", eliminarJugador);

    $(".equipoBuscar").click(datosBuscarEquipo);

    $(".equipoModificar").click(confirmarModificarEquipo);
    $(".equipoConfirmarModificar").click(modificarEquipo);

    $(".equipoEliminar").click(confirmarEliminarEquipo);
    $(".equipoConfirmarEliminar").click(eliminarEquipo);
});
