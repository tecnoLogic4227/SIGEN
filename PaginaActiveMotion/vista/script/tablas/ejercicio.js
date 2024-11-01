$(document).ready(() => {
    let idEjercicio, nombreEjercicio, nroRep, nroSeries, grupoMuscular, descripcion, metodo;
    const tabla = "ejercicio";
    datos = "";

    const limpiarPantalla = () => {
        $(".deportesAvanzadoAgregarModificar").css("display", "none");
        $(".deportesAvanzadoEliminar").css("display", "none");
        $(".deportesAvanzadoConfirmarEliminar").css("display", "none");
    }

    const listarEjercicio = (datos) => {
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
                    let ejercicio = JSON.parse(response);
                    if (ejercicio.length > 0) {
                        $(".tablaEjercicio tbody").html("");
                        let tbody = $(".tablaEjercicio tbody");
                        ejercicio.forEach(ejercicio1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${ejercicio1.id_ejercicio}</td>`);
                            tr.append(`<td>${ejercicio1.nombre_ejercicio}</td>`);
                            tr.append(`<td>${ejercicio1.nro_rep}</td>`);
                            tr.append(`<td>${ejercicio1.nro_series}</td>`);
                            tr.append(`<td>${ejercicio1.grupo_muscular}</td>`);
                            tr.append(`<td>${ejercicio1.descripcion}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaEjercicio tbody").html("");
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
                    if (respuesta) {
                        alert(exitoMensaje);
                        datos = "";
                        listarEjercicio(datos);
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

    const crearEjercicio = (idEjercicio, nombreEjercicio, nroRep, nroSeries, grupoMuscular, descripcion) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idEjercicio: idEjercicio,
            nombreEjercicio: nombreEjercicio,
            nroRep: nroRep,
            nroSeries: nroSeries,
            grupoMuscular: grupoMuscular,
            descripcion: descripcion
        }, "Ejercicio creado correctamente.", "Error al crear ejercicio.");
    };

    const datosCrearEjercicio = (event) => {
        event.preventDefault();
        idEjercicio = $(".inputCrearEjercicioIdEjercicio").val();
        nombreEjercicio = $(".inputCrearEjercicioNombreEjercicio").val();
        nroRep = $(".inputCrearEjercicioNroRep").val();
        nroSeries = $(".inputCrearEjercicioNroSeries").val();
        grupoMuscular = $(".inputCrearEjercicioGrupoMuscular").val();
        descripcion = $(".inputCrearEjercicioDescripcion").val();
        crearEjercicio(idEjercicio, nombreEjercicio, nroRep, nroSeries, grupoMuscular, descripcion);
    };

    listarEjercicio(datos);

    const buscarEjercicio = (idEjercicio) => {
        listarEjercicio({
            tabla: tabla,
            idEjercicio: idEjercicio
        });
    };

    const datosBuscarEjercicio = (event) => {
        event.preventDefault();
        idEjercicio = $(".inputBuscarEjercicioIdEjercicio").val();
        buscarEjercicio(idEjercicio);
    };

    const modificarEjercicio = (event) => {
        event.preventDefault();
        idEjercicio = $(".inputCrearEjercicioIdEjercicio").val();
        nombreEjercicio = $(".inputCrearEjercicioNombreEjercicio").val();
        nroRep = $(".inputCrearEjercicioNroRep").val();
        nroSeries = $(".inputCrearEjercicioNroSeries").val();
        grupoMuscular = $(".inputCrearEjercicioGrupoMuscular").val();
        descripcion = $(".inputCrearEjercicioDescripcion").val();
        limpiarPantalla();
        manejarSolicitud("PUT", {
            idEjercicio: idEjercicio,
            nombreEjercicio: nombreEjercicio,
            nroRep: nroRep,
            nroSeries: nroSeries,
            grupoMuscular: grupoMuscular,
            descripcion: descripcion
        }, "Ejercicio modificado correctamente.", "Error al modificar ejercicio.");
    };

    const eliminarEjercicio = (event) => {
        event.preventDefault();
        idEjercicio = $(".inputEliminarEjercicioIdEjercicio").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idEjercicio: idEjercicio
        }, "Ejercicio eliminado correctamente.", "Error al eliminar Ejercicio.");
    };

    const confirmarModificarDeporte = () => {
        limpiarPantalla();
        $(".deportesAvanzadoAgregarModificar").css("display", "flex");
    }

    const confirmarEliminarDeporte = () => {
        limpiarPantalla();
        $(".deportesAvanzadoEliminar").css("display", "flex");
    }

    const confirmarConfirmarEliminarDeporte = () => {
        limpiarPantalla();
        $(".deportesAvanzadoConfirmarEliminar").css("display", "flex");
    }

    $(".deporteCrear").click(confirmarModificarDeporte);
    $(".deporteConfirmarCrear").click(datosCrearEjercicio);
    $(".ejercicioBuscar").click(datosBuscarEjercicio);
    $(".deporteModificar").click(confirmarModificarDeporte);
    $(".deporteConfirmarModificar").click(modificarEjercicio);
    $(".deporteEliminar").click(confirmarEliminarDeporte);
    $(".deporteConfirmarEliminar").click(confirmarConfirmarEliminarDeporte);
    $(".deporteConfirmarConfirmarEliminar").click(eliminarEjercicio);

    $(".deporteCancelar").click(limpiarPantalla);
});