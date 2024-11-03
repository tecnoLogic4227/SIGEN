$(document).ready(() => {
    let idEjercicio, idRutina;
    let asisteRealizas = [];

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
                    asisteRealizas = respuesta;
                    if (respuesta != "") {
                        mostrarAsisteRealizas();
                    } else {
                        if (datos) {
                            alert("No se encontraron datos.");
                            mostrarAsisteRealizas();
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

    listar("asisteRealiza", {});

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

    const datosAsisteRealiza = (metodo) => {
        switch (metodo) {
            case "GET":
                idRutina = $(".inputBuscarAsisteRealizaIdRutina").val();
                idEjercicio = $(".inputBuscarAsisteRealizaIdEjercicio").val();
                listar("asisteRealiza", { idRutina: idRutina, idEjercicio: idEjercicio });
                break;
            case "POST":
                idRutina = $(".inputCrearAsisteRealizaIdRutina").val();
                idEjercicio = $(".inputCrearAsisteRealizaIdEjercicio").val();
                manejarSolicitud("asisteRealiza", metodo, {
                    idRutina: idRutina,     
                    idEjercicio: idEjercicio,
                }, "Ejercicio asignado correctamente.", "Error al asignar ejercicio.");
                break;
            // case "DELETE":
            //     idAsisteRealiza = $(".inputIdAsisteRealiza").val();
            //     manejarSolicitud("asisteRealiza", metodo, {
            //         idAsisteRealiza: idAsisteRealiza,
            //     }, "AsisteRealiza eliminada correctamente.", "Error al eliminar asisteRealiza.");
            //     break;
            default:
                alert("Error, método no válido.");
                break;
        }
    }

    const mostrarAsisteRealizas = () => {
        $("#tablaAsisteRealiza tbody").html("");
        let tr = $("<tr></tr>");
        tr.append(`<td><input class="inputCrearAsisteRealizaIdRutina"></td>`);
        tr.append(`<td><input class="inputCrearAsisteRealizaIdEjercicio"></td>`);
        tr.append(`<td><button type="button" class="botonAsisteRealizaCrear">Asignar ejercicio</button></td>`);
        $("#tablaAsisteRealiza tbody").append(tr);
        asisteRealizas.forEach((elemento, index) => {
            tr = $("<tr></tr>");
            tr.append(`<td>${elemento["id_rutina"]}</td>`);
            tr.append(`<td>${elemento["id_ejercicio"]}</td>`);
            tr.append(`<td><button class="botonAsisteRealizaEliminar" data-index="${index}">Eliminar</button></td>`);
            $("#tablaAsisteRealiza tbody").append(tr);
        });
    };

    const eliminarAsisteRealiza = function () {
        const index = $(this).data("index");
        const idRutina = asisteRealizas[index]?.id_rutina;
        const idEjercicio = asisteRealizas[index]?.id_ejercicio;

        console.log(idRutina, idEjercicio);

        if (idRutina && idEjercicio) {
            manejarSolicitud("asisteRealiza", "DELETE", { idRutina: idRutina, idEjercicio: idEjercicio }, "Ejercicio desasignado correctamente.", "Error al desasignar ejercicio.");
        } else {
            alert("IDs no encontrados.");
        }
    };

    $(document).on('click', '.botonAsisteRealizaEliminar', eliminarAsisteRealiza);
    $(document).on("click", ".botonAsisteRealizaCrear", () => datosAsisteRealiza("POST"));
    $(document).on("click", ".botonAsisteRealizaBuscar", () => datosAsisteRealiza("GET"));
});