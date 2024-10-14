$(document).ready(() => {
    let idUltimoPago, hora, fecha, valor, metodo;
    const tabla = "ultimoPago";
    datos = "";

    const listarUltimoPago = (datos) => {
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
                    let ultimoPago = JSON.parse(response);
                    if (ultimoPago.length > 0) {
                        $(".tablaUltimoPago tbody").html("");
                        let tbody = $(".tablaUltimoPago tbody");
                        ultimoPago.forEach(ultimoPago1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${ultimoPago1.id_ultimo_pago}</td>`);
                            tr.append(`<td>${ultimoPago1.hora}</td>`);
                            tr.append(`<td>${ultimoPago1.fecha}</td>`);
                            tr.append(`<td>${ultimoPago1.valor}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaUltimoPago tbody").html("");
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
                        listarUltimoPago(datos);
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

    const crearUltimoPago = (idUltimoPago, hora, fecha, valor) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idUltimoPago: idUltimoPago,
            hora: hora,
            fecha: fecha,
            valor: valor
        }, "UltimoPago creado correctamente.", "Error al crear UltimoPago.");
    };

    const datosCrearUltimoPago = (event) => {
        event.preventDefault();
        idUltimoPago = $(".inputCrearUltimoPagoIdUltimoPago").val();
        hora = $(".inputCrearUltimoPagoHora").val();
        fecha = $(".inputCrearUltimoPagoFecha").val();
        valor = $(".inputCrearUltimoPagoValor").val();
        crearUltimoPago(idUltimoPago, hora, fecha, valor);
    };

    listarUltimoPago(datos);

    const buscarUltimoPago = (idUltimoPago) => {
        listarUltimoPago({
            idUltimoPago: idUltimoPago,
        });
    };

    const datosBuscarUltimoPago = (event) => {
        event.preventDefault();
        idUltimoPago = $(".inputCrearUltimoPagoIdUltimoPago").val();
        buscarUltimoPago(idUltimoPago);
    };

    const modificarUltimoPago = (event) => {
        event.preventDefault();
        idUltimoPago = $(".inputCrearUltimoPagoIdUltimoPago").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idUltimoPago: idUltimoPago,
            hora: hora,
            fecha: fecha,
            valor: valor
        }, "UltimoPago modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarUltimoPago = (event) => {
        event.preventDefault();
        idUltimoPago = $(".inputCrearUltimoPagoIdUltimoPago").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idUltimoPago: idUltimoPago,
        }, "UltimoPago eliminado correctamente.", "Error al eliminar UltimoPago.");
    };

    const confirmarCrearUltimoPago = () => {
        limpiarPantalla();
        $(".confirmarCrearUltimoPago").css("display", "block");
    }

    const confirmarModificarUltimoPago = () => {
        limpiarPantalla();
        $(".confirmarModificarUltimoPago").css("display", "block");
    }

    const confirmarEliminarUltimoPago = () => {
        limpiarPantalla();
        $(".confirmarEliminarUltimoPago").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearUltimoPago").css("display", "none");
        $(".confirmarModificarUltimoPago").css("display", "none");
        $(".confirmarEliminarUltimoPago").css("display", "none");
    }

    $(".ultimoPagoCrear").click(confirmarCrearUltimoPago);
    $(".ultimoPagoConfirmarCrear").click(datosCrearUltimoPago);
    $(".ultimoPagoBuscar").click(datosBuscarUltimoPago);
    $(".ultimoPagoModificar").click(confirmarModificarUltimoPago);
    $(".ultimoPagoConfirmarModificar").click(modificarUltimoPago);
    $(".ultimoPagoEliminar").click(confirmarEliminarUltimoPago);
    $(".ultimoPagoConfirmarEliminar").click(eliminarUltimoPago);

    $(".ultimoPagoCancelarCrear").click(limpiarPantalla);
    $(".ultimoPagoCancelarModificar").click(limpiarPantalla);
    $(".ultimoPagoCancelarEliminar").click(limpiarPantalla);

});
