$(document).ready(() => {
    let ci, idUltimoPago, metodo;
    const tabla = "efectua";
    datos = "";

    const listarAsiste = (datos) => {
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
                    let efectua = JSON.parse(response);
                    if (efectua.length > 0) {
                        $(".tablaEfectua tbody").html("");
                        let tbody = $(".tablaEfectua tbody");
                        efectua.forEach(efectua1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${efectua1.ci}</td>`);
                            tr.append(`<td>${efectua1.id_ultimo_pago}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaEfectua tbody").html("");
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
                        listarEfectua(datos);
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

    const crearEfectua = (ci, idUltimoPago) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idUltimoPago: idUltimoPago,
        }, "Efectua creado correctamente.", "Error al crear Efectua.");
    };

    const datosCrearEfectua = (event) => {
        event.preventDefault();
        ci = $(".inputCrearEfectuaCi").val();
        idUltimoPago = $(".inputCrearEfectuaIdUltimoPago").val();
        crearEfectua(ci, idUltimoPago);
    };

    listarEfectua(datos);

    const buscarEfectua = (ci) => {
        listarEfectua({
            tabla: tabla,
            ci: ci,
        });
    };

    const datosBuscarEfectua = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarEfectuaCi").val();
        buscarEfectua(ci);
    };

    const modificarEfectua = (event) => {
        event.preventDefault();
        ci = $(".inputModificarEfectuaCi").val();
        idUltimoPago = $(".inputModificarEfectuaIdUltimoPago").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idUltimoPago: idUltimoPago,
        }, "Efectua modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarEfectua = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarEfectuaCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "Efectua eliminado correctamente.", "Error al eliminar Efectua.");
    };

    const confirmarCrearEfectua = () => {
        limpiarPantalla();
        $(".confirmarCrearEfectua").css("display", "block");
    }

    const confirmarModificarEfectua = () => {
        limpiarPantalla();
        $(".confirmarModificarEfectua").css("display", "block");
    }

    const confirmarEliminarEfectua = () => {
        limpiarPantalla();
        $(".confirmarEliminarEfectua").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearEfectua").css("display", "none");
        $(".confirmarModificarEfectua").css("display", "none");
        $(".confirmarEliminarEfectua").css("display", "none");
    }

    $(".efectuaCrear").click(confirmarCrearEfectua);
    $(".efectuaConfirmarCrear").click(datosCrearEfectua);
    $(".efectuaBuscar").click(datosBuscarEfectua);
    $(".efectuaModificar").click(confirmarModificarEfectua);
    $(".efectuaConfirmarModificar").click(modificarEfectua);
    $(".efectuaEliminar").click(confirmarEliminarEfectua);
    $(".efectuaConfirmarEliminar").click(eliminarEfectua);

    $(".efectuaCancelarCrear").click(limpiarPantalla);
    $(".efectuaCancelarModificar").click(limpiarPantalla);
    $(".efectuaCancelarEliminar").click(limpiarPantalla);

});
