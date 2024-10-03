$(document).ready(() => {
    let ci, idRutina, nivel, fechaInicio, fechaTermino;
    const tabla = "asiste";
    datos = "";

    const listarAsiste = (datos) => {
        $.ajax({
            url: "../../../controlador/crud/crudController.php",
            type: "GET",
            data: {
                tabla: tabla,
                ...datos,
            },
            success: (response) => {
                try {
                    let clienteAsiste = JSON.parse(response);
                    if (clienteAsiste.length > 0) {
                        $(".tablaAsiste tbody").html("");
                        let tbody = $(".tablaAsiste tbody");
                        clienteAsiste.forEach(cliente => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${cliente.ci}</td>`);
                            tr.append(`<td>${cliente.id_rutina}</td>`);
                            tr.append(`<td>${cliente.nivel}</td>`);
                            tr.append(`<td>${cliente.fecha_inicio}</td>`);
                            tr.append(`<td>${cliente.fecha_termino}</td>`);
                            tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
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

    const manejarSolicitud = (url, tipo, datos, exitoMensaje, errorMensaje) => {
        $.ajax({
            url: url,
            type: tipo,
            data: { 
                tabla,
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta == true) {
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
        manejarSolicitud("../../../controlador/crud/crudController.php", "POST", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Asiste creado correctamente.", "Error al crear Asiste.");
    };

    const datosCrearAsiste = (event) => {
        event.preventDefault();

        ci = $(".inputCrearAsisteCI").val();
        idRutina = $(".inputCrearAsisteIDRutina").val();
        nivel = $(".inputCrearAsisteNivel").val();
        fechaInicio = $(".inputCrearAsisteFechaInicio").val();
        fechaTermino = $(".inputCrearAsisteFechaTermino").val();
        crearAsiste(ci, idRutina, nivel, fechaInicio, fechaTermino);
    };

    listarAsiste(datos);

    const buscarAsiste = (ci, idRutina) => {
        listarAsiste({
            tabla: tabla,
            ci: ci,
            idRutina: idRutina
        });
    };

    const datosBuscarAsiste = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarAsisteCI").val();
        idRutina = $(".inputBuscarAsisteID").val();
        buscarAsiste(ci, idRutina);
    };

    const modificarAsiste = (event, ci, idRutina, nivel, fechaInicio, fechaTermino) => {
        event.preventDefault();
        limpiarPantalla();
        manejarSolicitud("../../../controlador/crud/crudController.php", "PUT", {
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Asiste modificado correctamente.", "Error al modificar Asiste.");
    };

    const eliminarAsiste = (event, ci, idRutina) => {
        event.preventDefault();
        limpiarPantalla();
        manejarSolicitud("../../../controlador/crud/crudController.php", "DELETE", {
            ci: ci,
            idRutina: idRutina
        }, "Asiste eliminado correctamente.", "Error al eliminar Asiste.");
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
    $(".asisteConfirmarModificar").click(modificarAsiste);
    $(".asisteEliminar").click(confirmarEliminarAsiste);
    $(".asisteConfirmarEliminar").click(eliminarAsiste);

    $(".asisteCancelarCrear").click(limpiarPantalla);
    $(".asisteCancelarModificar").click(limpiarPantalla);
    $(".asisteCancelarEliminar").click(limpiarPantalla);

});

// $(document).ready(() => {

//     let crear = (event) => {

//     }

//     let listar = (event) => {

//     }

//     let buscar = (event) => {

//     }

//     let modificar = (event) => {

//     }

//     let eliminar = (event) => {

//     }

//     let previoCrear = (event) => {

//     }

//     let previoBuscar = (event) => {

//     }

//     let previoModificar = (event) => {

//     }

//     let previoEliminar = (event) => {

//     }

//     listar();

//     $(".Crear").click(crear);
//     $(".ConfirmarCrear").click(previoCrear);

//     $(".Buscar").click(previoBuscar);

//     $(".Modificar").click(previoModificar);
//     $(".ConfirmarModificar").click(modificar);

//     $(".Eliminar").click(previoEliminar);
//     $(".ConfirmarEliminar").click(eliminar);
// })
