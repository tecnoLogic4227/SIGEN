$(document).ready(() => {
    let idEjercicio, nombreEjercicio, repeticiones, series, grupoMuscular, descripcion;
    let ejercicios = [];

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
                    ejercicios = respuesta;
                    if (respuesta != "") {
                        mostrarEjercicios();
                    } else {
                        if (datos) {
                            alert("No se encontraron datos.");
                            mostrarEjercicios();
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

    listar("ejercicioRutina", {});

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

    const datosEjercicio = (metodo) => {
        switch (metodo) {
            case "GET":
                idEjercicio = $(".inputBuscarIdEjercicio").val();
                listar("ejercicioRutina", { idEjercicio: idEjercicio });
                break;
            case "POST":
                idEjercicio = $(".inputCrearIdEjercicio").val();
                nombreEjercicio = $(".inputCrearNombreEjercicio").val();
                repeticiones = $(".inputCrearRepeticiones").val();
                series = $(".inputCrearSeries").val();
                grupoMuscular = $(".inputCrearGrupoMuscular").val();
                descripcion = $(".inputCrearDescripcion").val();
                manejarSolicitud("ejercicioRutina", metodo, {
                    idEjercicio: idEjercicio,
                    nombreEjercicio: nombreEjercicio,
                    nroRep: repeticiones,
                    nroSeries: series,
                    grupoMuscular: grupoMuscular,
                    descripcion: descripcion,
                }, "Ejercicio creada correctamente.", "Error al crear ejercicio.");
                break;
            // case "DELETE":
            //     idEjercicio = $(".inputIdEjercicio").val();
            //     manejarSolicitud("ejercicioRutina", metodo, {
            //         idEjercicio: idEjercicio,
            //     }, "Ejercicio eliminado correctamente.", "Error al eliminar ejercicio.");
            //     break;
            default:
                alert("Error, método no válido.");
                break;
        }
    }

    const mostrarEjercicios = () => {
        $("#tablaEjercicio tbody").html("");
        let tr = $("<tr></tr>");
        tr.append(`<td><input class="inputCrearIdEjercicio"></td>`);
        tr.append(`<td><input class="inputCrearNombreEjercicio"></td>`);
        tr.append(`<td><input class="inputCrearRepeticiones"></td>`);
        tr.append(`<td><input class="inputCrearSeries"></td>`);
        tr.append(`<td><input class="inputCrearGrupoMuscular"></td>`);
        tr.append(`<td><input class="inputCrearDescripcion"></td>`);
        tr.append(`<td><button type="button" class="botonCrearEjercicio">Crear Ejercicio</button></td>`);
        $("#tablaEjercicio tbody").append(tr);
        ejercicios.forEach((elemento, index) => {
            tr = $("<tr></tr>");
            tr.append(`<td>${elemento["id_ejercicio"]}</td>`);
            tr.append(`<td>${elemento["nombre_ejercicio"]}</td>`);
            tr.append(`<td>${elemento["nro_rep"]}</td>`);
            tr.append(`<td>${elemento["nro_series"]}</td>`);
            tr.append(`<td>${elemento["grupo_muscular"]}</td>`);
            tr.append(`<td>${elemento["descripcion"]}</td>`);
            tr.append(`<td><button class="botonEliminarEjercicio" data-index="${index}">Eliminar</button></td>`);
            $("#tablaEjercicio tbody").append(tr);
        });
    };

    const eliminarEjercicio = function () {
        const index = $(this).data("index");
        const idEjercicio = ejercicios[index]?.id_ejercicio;

        if (idEjercicio) {
            manejarSolicitud("ejercicioRutina", "DELETE", { idEjercicio: idEjercicio }, "Ejercicio eliminado correctamente.", "Error al eliminar ejercicio.");
        } else {
            alert("ID de ejercicio no encontrado.");
        }
    };

    $(document).on('click', '.botonEliminarEjercicio', eliminarEjercicio);
    $(document).on("click", ".botonCrearEjercicio", () => datosEjercicio("POST"));
    $(document).on("click", ".botonBuscarEjercicio", () => datosEjercicio("GET"));
});