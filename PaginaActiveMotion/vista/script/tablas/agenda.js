$(document).ready(() => {
    let ci, fecha, hora, turnoAgenda, metodo;
    const tabla = "usuarioAgenda";
    let datos = "";

    const listarAgenda = (datos) => {
        metodo = "GET";
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "GET",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                // try {
                //     let asiste = JSON.parse(response);
                //     if (asiste.length > 0) {
                //         $(".tablaAsiste tbody").html("");
                //         let tbody = $(".tablaAsiste tbody");
                //         asiste.forEach(asiste1 => {
                //             let tr = $("<tr></tr>");
                //             tr.append(`<td>${asiste1.ci}</td>`);
                //             tr.append(`<td>${asiste1.id_rutina}</td>`);
                //             tr.append(`<td>${asiste1.nivel}</td>`);
                //             tr.append(`<td>${asiste1.fecha_inicio}</td>`);
                //             tr.append(`<td>${asiste1.fecha_termino}</td>`);
                //             // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                //             // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                //             tbody.append(tr);
                //         });
                //     } else {
                //         alert("No se encontraron resultados.");
                //         $(".tablaAsiste tbody").html("");
                //     }
                // } catch (e) {
                //     console.log("Error al parsear el JSON: " + e);
                // }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    const manejarSolicitud = (metodo, datos, exitoMensaje, errorMensaje) => {
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
                        alert(respuesta);
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

    // const modificarAsiste = (ci, idRutina, nivel, fechaInicio, fechaTermino) => {
    //     limpiarPantalla();
    //     manejarSolicitud("POST", {
    //         ci: ci,
    //         idRutina: idRutina,
    //         nivel: nivel,
    //         fechaInicio: fechaInicio,
    //         fechaTermino: fechaTermino,
    //     }, "Asiste modificado correctamente.", "Error al modificar Asiste.");
    // };

    // const buscarAgenda = (ci, fecha) => {
    //     listarAsiste({
    //         ci: ci,
    //         fecha: fecha
    //     });
    // };

    // const eliminarAgenda = (ci, fecha) => {
    //     manejarSolicitud("DELETE", {
    //         ci: ci,
    //         fecha: fecha
    //     }, "Fecha eliminada correctamente.", "Error al eliminar Fecha.");
    // };

    // const filtrarDatos = (accion, ci, idRutina, nivel, fechaInicio, fechaTermino) => {
    //     if (accion == "crear" || accion == "modificar") {
    //         if (ci != undefined) {
    //             let v1 = filtroCedula(ci);
    //         }
    //         if (idRutina != undefined) {
    //             let v2 = filtroId(idRutina);
    //         }
    //         if (nivel != undefined) {
    //             let v3 = filtroPalabra(nivel);
    //         }
    //         if (fechaInicio != undefined) {
    //             let v4 = filtroFecha(fechaInicio);
    //         }
    //         if (fechaTermino != undefined) {
    //             let v5 = filtroFecha(fechaTermino);
    //         }

    //         if (v1 && v2 && v3 && v4 && v5) {
    //             if (accion == "crear") {
    //                 crearAsiste(ci, idRutina, nivel, fechaInicio, fechaTermino);
    //             } else {
    //                 modificarAsiste(ci, idRutina, nivel, fechaInicio, fechaTermino);
    //             }
    //         } else {
    //             alert("Error, los datos no son válidos.")
    //         }
    //     } else {
    //         if (accion == "eliminar" || accion == "buscar") {
    //             if (ci != undefined) {
    //                 let v1 = filtroCedula(ci);
    //             }
    //             if (idRutina != undefined) {
    //                 let v2 = filtroId(idRutina);
    //             }

    //             if (v1 && v2) {
    //                 if (accion == "eliminar") {
    //                     eliminarAsiste(ci, idRutina);
    //                 } else {
    //                     buscarAsiste(ci, idRutina);
    //                 }
    //             }

    //         } else {
    //             alert("Error, acción no válida.");
    //         }
    //     }
    // }

    const crearAgenda = (ci, fecha, hora) => {
        if (ci && fecha && hora) {
            let fechaHora = new Date(`${fecha}T${hora}`);
            if (fechaHora.getHours() < 8 || fechaHora.getHours() > 17) {
                alert("El horario es desde las 08:00 hasta las 18:00 hrs.");
            } else {
                let turnoAgenda = fechaHora.getHours() < 13 ? "matutino" : "vespertino";
                // limpiarPantalla();
                manejarSolicitud("POST", {
                    ci: ci,
                    fecha: fecha,
                    hora: hora,
                    turnoAgenda: turnoAgenda,
                }, "Fecha registrada correctamente.", "Error al registrar fecha.");
            }
        } else {
            alert("No puede dejar ningun campo vacío.");
        }        
    };

    const datosEliminarAgenda = (event) => {
        event.preventDefault();
        ci = $(".inputAgendaAdministrativoCi").val();
        fecha = $(".inputAgendaAdministrativoFecha").val();
        // limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
            fecha: fecha
        }, "Fecha eliminada correctamente.", "Error al eliminar fecha.");
    };

    const datosCrearAgenda = (event) => {
        event.preventDefault();
        ci = $(".inputAgendaAdministrativoCi").val();
        fecha = $(".inputAgendaAdministrativoFecha").val();
        hora = $(".inputAgendaAdministrativoHora").val();
        crearAgenda(ci, fecha, hora);
    };

    // const datosBuscarAgenda = (event) => {
    //     event.preventDefault();
    //     ci = $(".inputAgendaAdministrativoCi").val();
    //     fecha = $(".inputAgendaAdministrativoFecha").val();
    //     listarAgenda(ci, fecha);
    // };

    // const datosModificarAsiste = (event) => {
    //     event.preventDefault();
    //     ci = $(".inputAgendaAdministrativoCi").val();
    //     fecha = $(".inputAgendaAdministrativoFecha").val();
    //     hora = $(".inputAgendaAdministrativoHora").val();
    // };


    // const confirmarCrearAsiste = () => {
    //     limpiarPantalla();
    //     $(".confirmarCrearAsiste").css("display", "block");
    // }

    // const confirmarModificarAsiste = () => {
    //     limpiarPantalla();
    //     $(".confirmarModificarAsiste").css("display", "block");
    // }

    // const confirmarEliminarAsiste = () => {
    //     limpiarPantalla();
    //     $(".confirmarEliminarAsiste").css("display", "block");
    // }

    // const limpiarPantalla = () => {
    //     $(".confirmarCrearAsiste").css("display", "none");
    //     $(".confirmarModificarAsiste").css("display", "none");
    //     $(".confirmarEliminarAsiste").css("display", "none");
    // }

    // $(".asisteCrear").click(confirmarCrearAsiste);
    $(".agendaConfirmarCrear").click(datosCrearAgenda);
    // $(".asisteBuscar").click(datosBuscarAsiste);
    // $(".asisteModificar").click(confirmarModificarAsiste);
    // $(".asisteConfirmarModificar").click(datosModificarAsiste);
    // $(".asisteEliminar").click(confirmarEliminarAsiste);
    $(".agendaConfirmarEliminar").click(datosEliminarAgenda);

    // $(".asisteCancelarCrear").click(limpiarPantalla);
    // $(".asisteCancelarModificar").click(limpiarPantalla);
    // $(".asisteCancelarEliminar").click(limpiarPantalla);

});
