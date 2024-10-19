$(document).ready(() => {
    let idRutina, nombreRutina, metodo;
    const tabla = "rutina";
    datos = "";

    const listarRutina = (datos) => {
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
                    let rutina = JSON.parse(response);
                    if (rutina.length > 0) {
                        $(".tablaRutina tbody").html("");
                        let tbody = $(".tablaRutina tbody");
                        rutina.forEach(rutina1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${rutina1.id_rutina}</td>`);
                            tr.append(`<td>${rutina1.nombre_rutina}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaRutina tbody").html("");
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
                    if (respuesta == true) {
                        alert(exitoMensaje);
                        datos = "";
                        listarRutina(datos);
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

    const crearRutina = (idRutina, nombreRutina) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
            nombreRutina: nombreRutina,
        }, "Rutina creado correctamente.", "Error al crear Rutina.");
    };

    const datosCrearRutina = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearRutinaIdRutina").val();
        nombreRutina = $(".inputCrearRutinaNombreRutina").val();
        crearRutina(idRutina, nombreRutina);
    };

    listarRutina(datos);

    const buscarRutina = (idRutina) => {
        listarRutina({
            idRutina: idRutina
        });
    };

    const datosBuscarRutina = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRutinaIdRutina").val();
        buscarRutina(idRutina);
    };

    const modificarRutina = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearRutinaIdRutina").val();
        nombreRutina = $(".inputCrearRutinaNombreRutina").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
            nombreRutina: nombreRutina
        }, "Rutina modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarRutina = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearRutinaIdRutina").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idRutina: idRutina
        }, "Rutina eliminado correctamente.", "Error al eliminar Rutina.");
    };

    const confirmarCrearRutina = () => {
        limpiarPantalla();
        $(".confirmarCrearRutina").css("display", "block");
    }

    const confirmarModificarRutina = () => {
        limpiarPantalla();
        $(".confirmarModificarRutina").css("display", "block");
    }

    const confirmarEliminarRutina = () => {
        limpiarPantalla();
        $(".confirmarEliminarRutina").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearRutina").css("display", "none");
        $(".confirmarModificarRutina").css("display", "none");
        $(".confirmarEliminarRutina").css("display", "none");
    }

    $(".rutinaCrear").click(confirmarCrearRutina);
    $(".rutinaConfirmarCrear").click(datosCrearRutina);
    $(".rutinaBuscar").click(datosBuscarRutina);
    $(".rutinaModificar").click(confirmarModificarRutina);
    $(".rutinaConfirmarModificar").click(modificarRutina);
    $(".rutinaEliminar").click(confirmarEliminarRutina);
    $(".rutinaConfirmarEliminar").click(eliminarRutina);

    $(".rutinaCancelarCrear").click(limpiarPantalla);
    $(".rutinaCancelarModificar").click(limpiarPantalla);
    $(".rutinaCancelarEliminar").click(limpiarPantalla);

});
