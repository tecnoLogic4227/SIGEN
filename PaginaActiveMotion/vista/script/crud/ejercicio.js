$(document).ready(() => {
    let idEjercicio, nombreEjercicio, nroRep, nroSeries, grupoMuscular, descripcion, metodo;
    const tabla = "ejercicio";
    datos = "";

    const listarEjercicio = (datos) => {
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
        }, "Ejercicio creado correctamente.", "Error al crear Ejercicio.");
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
        manejarSolicitud("POST", {
            idEjercicio: idEjercicio,
            nombreEjercicio: nombreEjercicio,
            nroRep: nroRep,
            nroSeries: nroSeries,
            grupoMuscular: grupoMuscular,
            descripcion: descripcion
        }, "Ejercicio creado correctamente.", "Error al crear Ejercicio.");
    };

    const eliminarEjercicio = (event) => {
        event.preventDefault();
        idEjercicio = $(".inputBuscarEjercicioIdEjercicio").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idEjercicio: idEjercicio
        }, "Ejercicio eliminado correctamente.", "Error al eliminar Ejercicio.");
    };

    const confirmarCrearEjercicio = () => {
        limpiarPantalla();
        $(".confirmarCrearEjercicio").css("display", "block");
    }

    const confirmarModificarEjercicio = () => {
        limpiarPantalla();
        $(".confirmarModificarEjercicio").css("display", "block");
    }

    const confirmarEliminarEjercicio = () => {
        limpiarPantalla();
        $(".confirmarEliminarEjercicio").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearEjercicio").css("display", "none");
        $(".confirmarModificarEjercicio").css("display", "none");
        $(".confirmarEliminarEjercicio").css("display", "none");
    }

    $(".ejercicioCrear").click(confirmarCrearEjercicio);
    $(".ejercicioConfirmarCrear").click(datosCrearEjercicio);
    $(".ejercicioBuscar").click(datosBuscarEjercicio);
    $(".ejercicioModificar").click(confirmarModificarEjercicio);
    $(".ejercicioConfirmarModificar").click(modificarEjercicio);
    $(".ejercicioEliminar").click(confirmarEliminarEjercicio);
    $(".ejercicioConfirmarEliminar").click(eliminarEjercicio);

    $(".ejercicioCancelarCrear").click(limpiarPantalla);
    $(".ejercicioCancelarModificar").click(limpiarPantalla);
    $(".ejercicioCancelarEliminar").click(limpiarPantalla);

});
