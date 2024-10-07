$(document).ready(() => {
    let idEquipo, nombreDeporte, metodo;
    const tabla = "contiene";
    datos = "";

    const listarContiene = (datos) => {
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
                    let contiene = JSON.parse(response);
                    if (contiene.length > 0) {
                        $(".tablaContiene tbody").html("");
                        let tbody = $(".tablaContiene tbody");
                        contiene.forEach(contiene1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${contiene1.id_equipo}</td>`);
                            tr.append(`<td>${contiene1.nombre_deporte}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaContiene tbody").html("");
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
                        listarContiene(datos);
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

    const crearContiene = (idEquipo, nombreDeporte) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idEquipo: idEquipo,
            nombreDeporte: nombreDeporte,
        }, "Contiene creado correctamente.", "Error al crear Contiene.");
    };

    const datosCrearContiene = (event) => {
        event.preventDefault();
        idEquipo = $(".inputCrearContieneIdEquipo").val();
        nombreDeporte = $(".inputCrearContieneNombreDeporte").val();
        crearContiene(idEquipo, nombreDeporte);
    };

    listarContiene(datos);

    const buscarContiene = (idEquipo) => {
        listarContiene({
            tabla: tabla,
            idEquipo: idEquipo,
        });
    };

    const datosBuscarContiene = (event) => {
        event.preventDefault();
        idEquipo = $(".inputBuscarContieneIdEquipo").val();
        buscarContiene(idEquipo);
    };

    const modificarContiene = (event) => {
        event.preventDefault();
        idEquipo = $(".inputModificarContieneIdEquipo").val();
        nombreDeporte = $(".inputModificarContieneNombreDeporte").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idEquipo: idEquipo,
            nombreDeporte: nombreDeporte,
        }, "Contiene modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarContiene = (event) => {
        event.preventDefault();
        idEquipo = $(".inputEliminarContieneIdEquipo").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idEquipo: idEquipo,
        }, "Contiene eliminado correctamente.", "Error al eliminar Contiene.");
    };

    const confirmarCrearContiene = () => {
        limpiarPantalla();
        $(".confirmarCrearContiene").css("display", "block");
    }

    const confirmarModificarContiene = () => {
        limpiarPantalla();
        $(".confirmarModificarContiene").css("display", "block");
    }

    const confirmarEliminarContiene = () => {
        limpiarPantalla();
        $(".confirmarEliminarContiene").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearContiene").css("display", "none");
        $(".confirmarModificarContiene").css("display", "none");
        $(".confirmarEliminarContiene").css("display", "none");
    }

    $(".contieneCrear").click(confirmarCrearContiene);
    $(".contieneConfirmarCrear").click(datosCrearContiene);
    $(".contieneBuscar").click(datosBuscarContiene);
    $(".contieneModificar").click(confirmarModificarContiene);
    $(".contieneConfirmarModificar").click(modificarContiene);
    $(".contieneEliminar").click(confirmarEliminarContiene);
    $(".contieneConfirmarEliminar").click(eliminarContiene);

    $(".contieneCancelarCrear").click(limpiarPantalla);
    $(".contieneCancelarModificar").click(limpiarPantalla);
    $(".contieneCancelarEliminar").click(limpiarPantalla);
});
