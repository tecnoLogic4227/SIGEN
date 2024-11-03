$(document).ready(() => {
    let idRutina, nombreRutina;
    let rutinas = [];

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
                    rutinas = respuesta;
                    if (respuesta != "") {
                        mostrarRutinas();
                    } else {
                        if (datos) {
                            alert("No se encontraron datos.");
                            mostrarRutinas();
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

    listar("rutina", {});

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

    const datosRutina = (metodo) => {
        switch (metodo) {
            case "GET":
                idRutina = $(".inputBuscarIdRutina").val();
                listar("rutina", { idRutina: idRutina });
                break;
            case "POST":
                idRutina = $(".inputCrearIdRutina").val();
                nombreRutina = $(".inputCrearNombreRutina").val();
                tipoRutina = $(".inputCrearTipoRutina").val();
                manejarSolicitud("rutina", metodo, {
                    idRutina: idRutina,
                    nombreRutina: nombreRutina,
                    tipoRutina: tipoRutina,
                }, "Rutina creada correctamente.", "Error al crear rutina.");
                break;
            case "DELETE":
                idRutina = $(".inputIdRutina").val();
                manejarSolicitud("rutina", metodo, {
                    idRutina: idRutina,
                }, "Rutina eliminada correctamente.", "Error al eliminar rutina.");
                break;
            default:
                alert("Error, método no válido.");
                break;
        }
    }

    const mostrarRutinas = () => {
        $("#tablaRutinas tbody").html("");
        let tr = $("<tr></tr>");
        tr.append(`<td><input class="inputCrearIdRutina"></td>`);
        tr.append(`<td><input class="inputCrearNombreRutina"></td>`);
        tr.append(`<td><select class="inputCrearTipoRutina">
                  <option value="deporte">Deporte</option>
                  <option value="fisioterapia">Fisioterapia</option>
                </select></td>`);
        tr.append(`<td><button type="button" class="botonCrearRutina">Crear Rutina</button></td>`);
        $("#tablaRutinas tbody").append(tr);
        rutinas.forEach((elemento, index) => {
            tr = $("<tr></tr>");
            tr.append(`<td>${elemento["id_rutina"]}</td>`);
            tr.append(`<td>${elemento["nombre_rutina"]}</td>`);
            tr.append(`<td>${elemento["tipo_rutina"]}</td>`);
            tr.append(`<td><button class="botonEliminarRutina" data-index="${index}">Eliminar</button></td>`);
            $("#tablaRutinas tbody").append(tr);
        });
    };

    const eliminarRutina = function () {
        const index = $(this).data("index");
        const idRutina = rutinas[index]?.id_rutina;

        if (idRutina) {
            manejarSolicitud("rutina", "DELETE", { idRutina: idRutina }, "Rutina eliminada correctamente.", "Error al eliminar rutina.");
        } else {
            alert("ID de rutina no encontrado.");
        }
    };

    $(document).on('click', '.botonEliminarRutina', eliminarRutina);
    $(document).on("click", ".botonCrearRutina", () => datosRutina("POST"));
    $(document).on("click", ".botonBuscarRutina", () => datosRutina("GET"));
});