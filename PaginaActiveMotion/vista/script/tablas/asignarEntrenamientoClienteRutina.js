$(document).ready(() => {
    let ci, id;
    let clienteRutinas = [];

    const listar = (tabla, datos) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                metodo: "GET",
                tabla: tabla,
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    clienteRutinas = respuesta;
                    if (respuesta != "") {
                        mostrarClienteRutinas();
                    } else {
                        if (datos) {
                            alert("No se encontraron datos.");
                            mostrarClienteRutinas();
                        }
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    listar("clienteRutina", {});

    const manejarSolicitud = (tabla, metodo, datos, exitoMensaje, errorMensaje) => {
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
                    if (respuesta === true) {
                        alert(exitoMensaje);
                        listar(tabla, {});
                    } else {
                        alert(respuesta);
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

    const datosClienteRutina = (metodo) => {
        switch (metodo) {
            case "GET":
                ci = $(".inputBuscarClienteRutinaCi").val();
                id = $(".inputBuscarClienteRutinaId").val();
                listar("clienteRutina", { ci: ci, idRutina: id });
                break;
            case "POST":
                ci = $(".inputCrearClienteRutinaCi").val();
                id = $(".inputCrearClienteRutinaId").val();
                manejarSolicitud("clienteRutina", metodo, {
                    ci: ci,     
                    idRutina: id,
                }, "Rutina asignada correctamente.", "Error al asignar rutina.");
                break;
            // case "DELETE":
            //     idClienteRutina = $(".inputIdClienteRutina").val();
            //     manejarSolicitud("clienteRutina", metodo, {
            //         idClienteRutina: idClienteRutina,
            //     }, "ClienteRutina eliminada correctamente.", "Error al eliminar clienteRutina.");
            //     break;
            default:
                alert("Error, método no válido.");
                break;
        }
    }

    const mostrarClienteRutinas = () => {
        $("#tablaAsignarRutina tbody").html("");
        let tr = $("<tr></tr>");
        tr.append(`<td><input class="inputCrearClienteRutinaCi"></td>`);
        tr.append(`<td><input class="inputCrearClienteRutinaId"></td>`);
        tr.append(`<td><button type="button" class="botonClienteRutinaCrear">Asignar ejercicio</button></td>`);
        $("#tablaAsignarRutina tbody").append(tr);
        clienteRutinas.forEach((elemento, index) => {
            tr = $("<tr></tr>");
            tr.append(`<td>${elemento["ci"]}</td>`);
            tr.append(`<td>${elemento["id_rutina"]}</td>`);
            tr.append(`<td><button class="botonClienteRutinaEliminar" data-index="${index}">Eliminar</button></td>`);
            $("#tablaAsignarRutina tbody").append(tr);
        });
    };

    const eliminarClienteRutina = function () {
        const index = $(this).data("index");
        const ci = clienteRutinas[index]?.ci;
        const id = clienteRutinas[index]?.id_rutina;

        if (ci && id) {
            manejarSolicitud("clienteRutina", "DELETE", { ci: ci, idRutina: id }, "Rutina desasignada correctamente.", "Error al desasignar rutina.");
        } else {
            alert("Datos no encontrados.");
        }
    };

    $(document).on('click', '.botonClienteRutinaEliminar', eliminarClienteRutina);
    $(document).on("click", ".botonClienteRutinaCrear", () => datosClienteRutina("POST"));
    $(document).on("click", ".botonClienteRutinaBuscar", () => datosClienteRutina("GET"));
});