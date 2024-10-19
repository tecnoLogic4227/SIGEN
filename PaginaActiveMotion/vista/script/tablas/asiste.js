$(document).ready(() => {
    let ci, idRutina, nivel, fechaInicio, fechaTermino, metodo;
    const tabla = "asiste";
    let datos = "";

    const listarAsiste = (datos) => {
        metodo = "GET";
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "GET",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let asiste = JSON.parse(response);
                    if (asiste.length > 0) {
                        $(".tablaAsiste tbody").html("");
                        let tbody = $(".tablaAsiste tbody");
                        asiste.forEach(asiste1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${asiste1.ci}</td>`);
                            tr.append(`<td>${asiste1.id_rutina}</td>`);
                            tr.append(`<td>${asiste1.nivel}</td>`);
                            tr.append(`<td>${asiste1.fecha_inicio}</td>`);
                            tr.append(`<td>${asiste1.fecha_termino}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaAsiste tbody").html("");
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

    listarAsiste(datos);

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
                    if (respuesta) {
                        alert(exitoMensaje);
                        datos = "";
                        listarAsiste(datos);
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

    const crearAsiste = (ci, idRutina, nivel, fechaInicio, fechaTermino) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Asiste creado correctamente.", "Error al crear Asiste.");
    };

    const modificarAsiste = (ci, idRutina, nivel, fechaInicio, fechaTermino) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Asiste modificado correctamente.", "Error al modificar Asiste.");
    };

    const buscarAsiste = (ci, idRutina) => {
        listarAsiste({
            ci: ci,
            idRutina: idRutina
        });
    };

    const eliminarAsiste = (ci, idRutina) => {
        manejarSolicitud("DELETE", {
            ci: ci,
            idRutina: idRutina
        }, "Asiste eliminado correctamente.", "Error al eliminar Asiste.");
    };

    const filtrarDatos = (accion, ci, idRutina, nivel, fechaInicio, fechaTermino) => {
        if (accion == "crear" || accion == "modificar") {
            if (ci != undefined) {
                let v1 = filtroCedula(ci);
            }
            if (idRutina != undefined) {
                let v2 = filtroId(idRutina);
            }
            if (nivel != undefined) {
                let v3 = filtroPalabra(nivel);
            }
            if (fechaInicio != undefined) {
                let v4 = filtroFecha(fechaInicio);
            }
            if (fechaTermino != undefined) {
                let v5 = filtroFecha(fechaTermino);
            }

            if (v1 && v2 && v3 && v4 && v5) {
                if (accion == "crear") {
                    crearAsiste(ci, idRutina, nivel, fechaInicio, fechaTermino);
                } else {
                    modificarAsiste(ci, idRutina, nivel, fechaInicio, fechaTermino);
                }
            } else {
                alert("Error, los datos no son válidos.")
            }
        } else {
            if (accion == "eliminar" || accion == "buscar") {
                if (ci != undefined) {
                    let v1 = filtroCedula(ci);
                }
                if (idRutina != undefined) {
                    let v2 = filtroId(idRutina);
                }

                if (v1 && v2) {
                    if (accion == "eliminar") {
                        eliminarAsiste(ci, idRutina);
                    } else {
                        buscarAsiste(ci, idRutina);
                    }
                }

            } else {
                alert("Error, acción no válida.");
            }
        }
    }

    const datosEliminarAsiste = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarAsisteCI").val();
        idRutina = $(".inputEliminarAsisteIDRutina").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
            idRutina: idRutina
        }, "Asiste eliminado correctamente.", "Error al eliminar Asiste.");
    };

    const datosCrearAsiste = (event) => {
        event.preventDefault();
        ci = $(".inputCrearAsisteCI").val();
        idRutina = $(".inputCrearAsisteIDRutina").val();
        nivel = $(".inputCrearAsisteNivel").val();
        fechaInicio = $(".inputCrearAsisteFechaInicio").val();
        fechaTermino = $(".inputCrearAsisteFechaTermino").val();

        filtrarDatos(ci, idRutina, nivel, fechaInicio, fechaTermino, "crear");
    };

    const datosBuscarAsiste = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarAsisteCI").val();
        idRutina = $(".inputBuscarAsisteID").val();
        filtrarDatos(ci, idRutina);
    };

    const datosModificarAsiste = (event) => {
        event.preventDefault();
        ci = $(".inputModificarAsisteCI").val();
        idRutina = $(".inputModificarAsisteIDRutina").val();
        nivel = $(".inputModificarAsisteNivel").val();
        fechaInicio = $(".inputModificarAsisteFechaInicio").val();
        fechaTermino = $(".inputModificarAsisteFechaTermino").val();
        filtrarDatos("modificar", ci, idRutina, nivel, fechaInicio, fechaTermino);
        limpiarPantalla();
    };


    const confirmarCrearAsiste = () => {
        limpiarPantalla();
        $(".confirmarCrearAsiste").css("display", "block");
    }

    const confirmarModificarAsiste = () => {
        limpiarPantalla();
        $(".confirmarModificarAsiste").css("display", "block");
    }

    const confirmarEliminarAsiste = () => {
        limpiarPantalla();
        $(".confirmarEliminarAsiste").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearAsiste").css("display", "none");
        $(".confirmarModificarAsiste").css("display", "none");
        $(".confirmarEliminarAsiste").css("display", "none");
    }

    $(".asisteCrear").click(confirmarCrearAsiste);
    $(".asisteConfirmarCrear").click(datosCrearAsiste);
    $(".asisteBuscar").click(datosBuscarAsiste);
    $(".asisteModificar").click(confirmarModificarAsiste);
    $(".asisteConfirmarModificar").click(datosModificarAsiste);
    $(".asisteEliminar").click(confirmarEliminarAsiste);
    $(".asisteConfirmarEliminar").click(datosEliminarAsiste);

    $(".asisteCancelarCrear").click(limpiarPantalla);
    $(".asisteCancelarModificar").click(limpiarPantalla);
    $(".asisteCancelarEliminar").click(limpiarPantalla);

});
