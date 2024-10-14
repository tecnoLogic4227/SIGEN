$(document).ready(() => {
    let idRutina, metodo;
    const tabla = "rutFisioterapia";
    datos = "";

    const listarRutFisioterapia = (datos) => {
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
                    let rutFisioterapia = JSON.parse(response);
                    if (rutFisioterapia.length > 0) {
                        $(".tablaRutFisioterapia tbody").html("");
                        let tbody = $(".tablaRutFisioterapia tbody");
                        rutFisioterapia.forEach(rutFisioterapia1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${rutFisioterapia1.id_rutina}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaRutFisioterapia tbody").html("");
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
                        listarRutFisioterapia(datos);
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

    const crearRutFisioterapia = (idRutina) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
        }, "RutFisioterapia creado correctamente.", "Error al crear RutFisioterapia.");
    };

    const datosCrearRutFisioterapia = (event) => {
        event.preventDefault();
        idRutina = $(".inputCrearRutFisioterapiaIdRutina").val();
        crearRutFisioterapia(idRutina);
    };

    listarRutFisioterapia(datos);

    const buscarRutFisioterapia = (idRutina) => {
        listarRutFisioterapia({
            idRutina: idRutina
        });
    };

    const datosBuscarRutFisioterapia = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRutFisioterapiaIdRutina").val();
        buscarRutFisioterapia(idRutina);
    };

    const modificarRutFisioterapia = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRutFisioterapiaIdRutina").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idRutina: idRutina,
        }, "RutFisioterapia modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarRRutFisioterapia = (event) => {
        event.preventDefault();
        idRutina = $(".inputBuscarRutFisioterapiaIdRutina").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idRutina: idRutina
        }, "RutFisioterapia eliminado correctamente.", "Error al eliminar RutFisioterapia.");
    };

    const confirmarCrearRutFisioterapia = () => {
        limpiarPantalla();
        $(".confirmarCrearRutFisioterapia").css("display", "block");
    }

    const confirmarModificarRutFisioterapia = () => {
        limpiarPantalla();
        $(".confirmarModificarRutFisioterapia").css("display", "block");
    }

    const confirmarEliminarRutFisioterapia = () => {
        limpiarPantalla();
        $(".confirmarEliminarRutFisioterapia").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearRutFisioterapia").css("display", "none");
        $(".confirmarModificarRutFisioterapia").css("display", "none");
        $(".confirmarEliminarRutFisioterapia").css("display", "none");
    }

    $(".rutFisioterapiaCrear").click(confirmarCrearRutFisioterapia);
    $(".rutFisioterapiaConfirmarCrear").click(datosCrearRutFisioterapia);
    $(".rutFisioterapiaBuscar").click(datosBuscarRutFisioterapia);
    $(".rutFisioterapiaModificar").click(confirmarModificarRutFisioterapia);
    $(".rutFisioterapiaConfirmarModificar").click(modificarRutFisioterapia);
    $(".rutFisioterapiaEliminar").click(confirmarEliminarRutFisioterapia);
    $(".rutFisioterapiaConfirmarEliminar").click(eliminarRutFisioterapia);

    $(".rutFisioterapiaCancelarCrear").click(limpiarPantalla);
    $(".rutFisioterapiaCancelarModificar").click(limpiarPantalla);
    $(".rutFisioterapiaCancelarEliminar").click(limpiarPantalla);

});
