$(document).ready(() => {
    let ci, idRutina, nivel, fechaInicio, fechaTermino;
    const tabla = "asiste";

    const manejarSolicitud = (url, tipo, datos, exitoMensaje, errorMensaje) => {
        $.ajax({
            url: url,
            type: tipo,
            data: datos,
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta === true) {
                        alert(exitoMensaje);
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
        $(".divConfirmarCrearAsiste").css("visibility", "hidden");
        manejarSolicitud("../../../controlador/crud/crudController.php", "POST", {
            tabla: tabla,
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Asiste creado correctamente.", "Error al crear Asiste.");
    };

    const datosCrearAsiste = () => {
        ci = $(".inputCrearAsisteCI").val();
        idRutina = $(".inputCrearAsisteIDRutina").val();
        nivel = $(".inputCrearAsisteNivel").val();
        fechaInicio = $(".inputCrearAsisteFechaInicio").val();
        fechaTermino = $(".inputCrearAsisteFechaTermino").val();
        crearAsiste(ci, idRutina, nivel, fechaInicio, fechaTermino);
    };

    const listarAsiste = () => {
        $.ajax({
            url: "../../../controlador/crud/crudController.php",
            type: "GET",
            data: { tabla: tabla },
            success: (response) => {
                try {
                    let clienteAsiste = JSON.parse(response);
                    if (clienteAsiste.length > 0) {
                        $(".tablaAsiste tbody").html("");
                        let tbody = $(".tablaAsiste tbody");
                        clienteAsiste.forEach(cliente => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${cliente.ci}</td>`);
                            tr.append(`<td>${cliente.idRutina}</td>`);
                            tr.append(`<td>${cliente.nivel}</td>`);
                            tr.append(`<td>${cliente.fechaInicio}</td>`);
                            tr.append(`<td>${cliente.fechaTermino}</td>`);
                            tbody.append(tr);
                        });
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

    const buscarAsiste = (ci, idRutina) => {
        manejarSolicitud("../../../controlador/crud/crudController.php", "GET", {
            tabla: tabla,
            ci: ci,
            idRutina: idRutina
        }, "Asiste encontrado.", "No se encontraron resultados.");
    };

    const datosBuscarAsiste = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarAsisteCI").val();
        idRutina = $(".inputBuscarAsisteIdRutina").val();
        buscarAsiste(ci, idRutina);
    };

    const modificarAsiste = (ci, idRutina, nivel, fechaInicio, fechaTermino) => {
        $(".divConfirmarModificarAsiste").css("visibility", "hidden");
        manejarSolicitud("../../../controlador/crud/crudController.php", "PUT", {
            tabla: tabla,
            ci: ci,
            idRutina: idRutina,
            nivel: nivel,
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
        }, "Asiste modificado correctamente.", "Error al modificar Asiste.");
    };

    const eliminarAsiste = (ci, idRutina) => {
        $(".divConfirmarEliminarAsiste").css("visibility", "hidden");
        manejarSolicitud("../../../controlador/crud/crudController.php", "DELETE", {
            tabla: tabla,
            ci: ci,
            idRutina: idRutina
        }, "Asiste eliminado correctamente.", "Error al eliminar Asiste.");
    };

    listarAsiste();

    $(".asisteCrear").click(() => $(".divConfirmarCrearAsiste").css("visibility", "visible"));
    $(".asisteConfirmarCrear").click(datosCrearAsiste);
    $(".asisteBuscar").click(datosBuscarAsiste);
    $(".asisteModificar").click(() => $(".divConfirmarModificarAsiste").css("visibility", "visible"));
    $(".asisteConfirmarModificar").click(modificarAsiste);
    $(".asisteEliminar").click(() => $(".divConfirmarEliminarAsiste").css("visibility", "visible"));
    $(".asisteConfirmarEliminar").click(eliminarAsiste);
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
