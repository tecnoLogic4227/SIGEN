$(document).ready(() => {
    let idRutina, nombreRutina, idEjercicio, nombreEjercicio, repeticiones, series, grupoMuscular, descripcion;
    let ejercicios = [];
    let rutinas = [];
    let posee = [];

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
                    if (respuesta) {
                        switch (tabla) {
                            case "ejercicio":
                                break;
                            case "rutina":
                                rutinas = respuesta;
                                mostrarRutinas(); 
                                break;
                            case "posee":
                                break;
                            default:
                                alert("Error al mostrar los datos.");
                                break;
                        }
                    } else {
                        if (datos) {
                            alert("No se encontraron datos.");
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

    listar("rutina");

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
                    if (respuesta) {
                        alert(exitoMensaje);
                        listar(tabla, {});
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

    const datosRutina = (metodo) => {
        switch (metodo) {
            case "GET":
                idRutina = $(".inputIdRutina").val();
                listar("rutina", { idRutina: idRutina });
                break;
            case "POST":
                idRutina = $(".inputCrearIdRutina").val();
                nombreRutina = $(".inputCrearNombreRutina").val();
                tipoRutina = $(".inputCrearIdRutina").val();
                inputCrearTipoRutina
                manejarSolicitud("rutina", metodo, {
                    idRutina: idRutina,
                    nombreRutina: nombreRutina,
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
        $(".tablaRutinas tbody").html("");
        let tr = $("<tr></tr>");
        tr.append(`<td><input class="inputIdRutina"></td>`);
        tr.append(`<td><input class="inputNombreRutina"></td>`);
        tr.append(`<td><button type="button" class="botonCrearRutina">Crear Rutina</button></td>`);
        $(".tablaRutinas tbody").append(tr);
        rutinas.forEach((elemento, index) => {
            tr = $("<tr></tr>");
            tr.append(`<td>${elemento["idRutina"]}</td>`);
            tr.append(`<td><button class="botonEliminarRutina" data-index="${index}">Eliminar</button></td>`);
            $(".tablaRutinas tbody").append(tr);
        });
    };

    const eliminarRutina = () => {
        const index = $(this).data("index"); 
        rutinas.splice(index, 1);
        mostrarRutinas();
        alert("Rutina eliminada correctamente.");
    };

    $(document).on('click', '.botonEliminarRutina', eliminarRutina);
    $(document).on("click", ".botonCrearRutina", () => datosRutina("POST"));
});



// const datosEjercicio = (metodo, posicion, event) => {
    //     event.preventDefault();
    //     idEjercicio = $(".").val();
    //     nombreEjercicio = $(".").val();
    //     repeticiones = $(".").val();
    //     series = $(".").val();
    //     grupoMuscular = $(".").val();
    //     descripcion = $(".").val();
    //     switch (metodo) {
    //         case "GET":
    //             listar("ejercicio", { idEjercicio: idEjercicio });
    //             break;
    //         case "POST":
    //             manejarSolicitud(metodo, {
    //                 idRutina: idRutina,
    //                 nombreRutina: nombreRutina,
    //                 repeticiones: repeticiones,
    //                 series: series,
    //                 grupoMuscular: grupoMuscular,
    //                 descripcion: descripcion
    //             }, "Ejercicio creado correctamente.", "Error al crear ejercicio.");
    //             break;
    //         case "DELETE":
    //             manejarSolicitud(metodo, {
    //                 idRutina: idRutina,
    //                 nombreRutina: nombreRutina,
    //                 repeticiones: repeticiones,
    //                 series: series,
    //                 grupoMuscular: grupoMuscular,
    //                 descripcion: descripcion
    //             }, "Ejercicio eliminado correctamente.", "Error al eliminar ejercicio.");
    //             break;
    //         default:
    //             alert("Error, método no válido.");
    //             break;
    //     }
    // }

    // const datosPosee = (metodo, posicion, event) => {
    //     event.preventDefault();
    //     idRutina = $(".").val();
    //     nombreRutina = $(".").val();
    //     switch (metodo) {
    //         case "GET":
    //             listar("posee", {
    //                 idRutina: idRutina,
    //                 idEjercicio: idEjercicio
    //             });
    //             break;
    //         case "POST":
    //             manejarSolicitud(metodo, {
    //                 idRutina: idRutina,
    //                 idEjercicio: idEjercicio
    //             }, "Rutina creada correctamente.", "Error al crear rutina.");
    //             break;
    //         case "DELETE":
    //             manejarSolicitud(metodo, {
    //                 idRutina: idRutina,
    //                 idEjercicio: idEjercicio
    //             }, "Rutina eliminada correctamente.", "Error al eliminar rutina.");
    //             break;
    //         default:
    //             alert("Error, metodo no válido.");
    //             break;
    //     }
    // }