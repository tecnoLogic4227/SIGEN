$(document).ready(() => {
    let idRutina, idEjercicio, metodo;
    const tabla = "posee";
    datos = "";

    const listarPosee = (datos) => {
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
                    let posee = JSON.parse(response);
                    if (posee.length > 0) {
                        $(".tablaPosee tbody").html("");
                        let tbody = $(".tablaPosee tbody");
                        posee.forEach(posee1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${posee1.id_rutina}</td>`);
                            tr.append(`<td>${posee1.id_ejercicio}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaPosee tbody").html("");
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
                        listarPosee(datos);
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

    const crearPosee = (idRutina, idEjercicio) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
            idEjercicio: idEjercicio
        }, "Posee creado correctamente.", "Error al crear Posee.");
    };

    const datosCrearPosee = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearPoseeIdRutina").val();
        idEjercicio = $(".inputCrearPoseeIdEjercicio").val();
        crearPosee(idRutina, idEjercicio);
    };

    listarPosee(datos);

    const buscarPosee = (idRutina, idEjercicio) => {
        listarPosee({
            tabla: tabla,
            idRutina: idRutina,
            idEjercicio: idEjercicio
        });
    };

    const datosBuscarPosee = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearPoseeIdRutina").val();
        idEjercicio = $(".inputCrearPoseeIdEjercicio").val();
        buscarPosee(idRutina, idEjercicio);
    };

    const modificarPosee = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearPoseeIdRutina").val();
        idEjercicio = $(".inputCrearPoseeIdEjercicio").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
            idEjercicio: idEjercicio
        }, "Posee modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarPosee = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearPoseeIdRutina").val();
        idEjercicio = $(".inputCrearPoseeIdEjercicio").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idRutina: idRutina,
            idEjercicio: idEjercicio
        }, "Posee eliminado correctamente.", "Error al eliminar Posee.");
    };

    const confirmarCrearPosee = () => {
        limpiarPantalla();
        $(".confirmarCrearPosee").css("display", "block");
    }

    const confirmarModificarPosee = () => {
        limpiarPantalla();
        $(".confirmarModificarPosee").css("display", "block");
    }

    const confirmarEliminarPosee = () => {
        limpiarPantalla();
        $(".confirmarEliminarPosee").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearPosee").css("display", "none");
        $(".confirmarModificarPosee").css("display", "none");
        $(".confirmarEliminarPosee").css("display", "none");
    }

    $(".poseeCrear").click(confirmarCrearPosee);
    $(".poseeConfirmarCrear").click(datosCrearPosee);
    $(".poseeBuscar").click(datosBuscarPosee);
    $(".poseeModificar").click(confirmarModificarPosee);
    $(".poseeConfirmarModificar").click(modificarPosee);
    $(".poseeEliminar").click(confirmarEliminarPosee);
    $(".poseeConfirmarEliminar").click(eliminarPosee);

    $(".poseeCancelarCrear").click(limpiarPantalla);
    $(".poseeCancelarModificar").click(limpiarPantalla);
    $(".poseeCancelarEliminar").click(limpiarPantalla);

});
