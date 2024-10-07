$(document).ready(() => {
    let ci, idInstitucion, metodo;
    const tabla = "concurre";
    datos = "";

    const listarConcurre = (datos) => {
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
                    let concurre = JSON.parse(response);
                    if (concurre.length > 0) {
                        $(".tablaConcurre tbody").html("");
                        let tbody = $(".tablaConcurre tbody");
                        concurre.forEach(concurre1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${concurre1.ci}</td>`);
                            tr.append(`<td>${concurre1.id_institucion}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaConcurre tbody").html("");
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
                        listarConcurre(datos);
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

    const crearConcurre = (ci, idInstitucion) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idInstitucion: idInstitucion,
        }, "Concurre creado correctamente.", "Error al crear Concurre.");
    };

    const datosCrearConcurre = (event) => {
        event.preventDefault();
        ci = $(".inputCrearConcurreCi").val();
        idInstitucion = $(".inputCrearConcurreIdInstitucion").val();
        crearConcurre(ci, idInstitucion);
    };

    listarConcurre(datos);

    const buscarConcurre = (ci) => {
        listarConcurre({
            tabla: tabla,
            ci: ci,
        });
    };

    const datosBuscarConcurre = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarConcurreCI").val();
        buscarConcurre(ci);
    };

    const modificarConcurre = (event) => {
        event.preventDefault();
        ci = $(".inputModificarConcurreCi").val();
        idInstitucion = $(".inputModificarConcurreIdInstitucion").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            idInstitucion: idInstitucion,
        }, "Concurre modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarConcurre = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarConcurreCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "Concurre eliminado correctamente.", "Error al eliminar Concurre.");
    };

    const confirmarCrearConcurre = () => {
        limpiarPantalla();
        $(".confirmarCrearConcurre").css("display", "block");
    }

    const confirmarModificarConcurre = () => {
        limpiarPantalla();
        $(".confirmarModificarConcurre").css("display", "block");
    }

    const confirmarEliminarConcurre = () => {
        limpiarPantalla();
        $(".confirmarEliminarConcurre").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearConcurre").css("display", "none");
        $(".confirmarModificarConcurre").css("display", "none");
        $(".confirmarEliminarConcurre").css("display", "none");
    }

    $(".concurreCrear").click(confirmarCrearConcurre);
    $(".concurreConfirmarCrear").click(datosCrearConcurre);
    $(".concurreBuscar").click(datosBuscarConcurre);
    $(".concurreModificar").click(confirmarModificarConcurre);
    $(".concurreConfirmarModificar").click(modificarConcurre);
    $(".concurreEliminar").click(confirmarEliminarConcurre);
    $(".concurreConfirmarEliminar").click(eliminarConcurre);

    $(".concurreCancelarCrear").click(limpiarPantalla);
    $(".concurreCancelarModificar").click(limpiarPantalla);
    $(".concurreCancelarEliminar").click(limpiarPantalla);
});
