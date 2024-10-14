$(document).ready(() => {
    let ci, actividad, estado, estadoActividad, fecha, hora, turnoAgenda, cumplimientoAgenda, resistenciaAnaerobica, fuerzaMuscular, resistenciaMuscular, flexibilidad, resistenciaMonotonia, resiliencia, metodo;
    const tabla = "usuarioCliente";
    datos = "";

    const listarUsuarioCliente = (datos) => {
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
                    let usuarioCliente = JSON.parse(response);
                    if (usuarioCliente.length > 0) {
                        $(".tablaUsuarioCliente tbody").html("");
                        let tbody = $(".tablaUsuarioCliente tbody");
                        usuarioCliente.forEach(usuarioCliente1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${usuarioCliente1.ci}</td>`);
                            tr.append(`<td>${usuarioCliente1.actividad}</td>`);
                            tr.append(`<td>${usuarioCliente1.estado}</td>`);
                            tr.append(`<td>${usuarioCliente1.estado_actividad}</td>`);
                            tr.append(`<td>${usuarioCliente1.fecha}</td>`);
                            tr.append(`<td>${usuarioCliente1.hora}</td>`);
                            tr.append(`<td>${usuarioCliente1.turno_agenda}</td>`);
                            tr.append(`<td>${usuarioCliente1.cumplimiento_agenda}</td>`);
                            tr.append(`<td>${usuarioCliente1.resistencia_anaerobica}</td>`);
                            tr.append(`<td>${usuarioCliente1.fuerza_muscular}</td>`);
                            tr.append(`<td>${usuarioCliente1.resistencia_muscular}</td>`);
                            tr.append(`<td>${usuarioCliente1.flexibilidad}</td>`);
                            tr.append(`<td>${usuarioCliente1.resistencia_monotonia}</td>`);
                            tr.append(`<td>${usuarioCliente1.resiliencia}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaUsuarioCliente tbody").html("");
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
                        listarUsuarioCliente(datos);
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

    const crearUsuarioCliente = (ci, actividad, estado, estadoActividad, fecha, hora, turnoAgenda, cumplimientoAgenda, resistenciaAnaerobica, fuerzaMuscular, resistenciaMuscular, flexibilidad, resistenciaMonotonia, resiliencia) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            actividad: actividad,
            estado: estado,
            estadoActividad: estadoActividad,
            fecha: fecha,
            hora: hora,
            turnoAgenda: turnoAgenda,
            cumplimientoAgenda: cumplimientoAgenda,
            resistenciaAnaerobica: resistenciaAnaerobica,
            fuerzaMuscular: fuerzaMuscular,
            resistenciaMuscular: resistenciaMuscular,
            flexibilidad: flexibilidad,
            resistenciaMonotonia: resistenciaMonotonia,
            resiliencia: resiliencia,
        }, "UsuarioCliente creado correctamente.", "Error al crear UsuarioCliente.");
    };

    const datosCrearUsuarioCliente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioClienteCi").val();
        actividad = $(".inputCrearUsuarioClienteActividad").val();
        estado = $(".inputCrearUsuarioClienteEstado").val();
        estadoActividad = $(".inputCrearUsuarioClienteEstadoActividad").val();
        fecha = $(".inputCrearUsuarioClienteFecha").val();
        hora = $(".inputCrearUsuarioClienteHora").val();
        turnoAgenda = $(".inputCrearUsuarioClienteTurnoAgenda").val();
        cumplimientoAgenda = $(".inputCrearUsuarioClienteCumplimientoAgenda").val();
        resistenciaAnaerobica = $(".inputCrearUsuarioClienteResistenciaAnaerobica").val();
        fuerzaMuscular = $(".inputCrearUsuarioClienteFuerzaMuscular").val();
        resistenciaMuscular = $(".inputCrearUsuarioClienteResistenciaMuscular").val();
        flexibilidad = $(".inputCrearUsuarioClienteFlexibilidad").val();
        resistenciaMonotonia = $(".inputCrearUsuarioClienteResistenciaMonotonia").val();
        resiliencia = $(".inputCrearUsuarioClienteResiliencia").val();
        crearUsuarioCliente(ci, actividad, estado, estadoActividad, fecha, hora, turnoAgenda, cumplimientoAgenda, resistenciaAnaerobica, fuerzaMuscular, resistenciaMuscular, flexibilidad, resistenciaMonotonia, resiliencia);
    };

    listarUsuarioCliente(datos);

    const buscarUsuarioCliente = (ci) => {
        listarUsuarioCliente({
            ci: ci,
        });
    };

    const datosBuscarUsuarioCliente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioClienteCi").val();
        buscarUsuarioCliente(ci);
    };

    const modificarUsuarioCliente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioClienteCi").val();
        actividad = $(".inputCrearUsuarioClienteActividad").val();
        estado = $(".inputCrearUsuarioClienteEstado").val();
        estadoActividad = $(".inputCrearUsuarioClienteEstadoActividad").val();
        fecha = $(".inputCrearUsuarioClienteFecha").val();
        hora = $(".inputCrearUsuarioClienteHora").val();
        turnoAgenda = $(".inputCrearUsuarioClienteTurnoAgenda").val();
        cumplimientoAgenda = $(".inputCrearUsuarioClienteCumplimientoAgenda").val();
        resistenciaAnaerobica = $(".inputCrearUsuarioClienteResistenciaAnaerobica").val();
        fuerzaMuscular = $(".inputCrearUsuarioClienteFuerzaMuscular").val();
        resistenciaMuscular = $(".inputCrearUsuarioClienteResistenciaMuscular").val();
        flexibilidad = $(".inputCrearUsuarioClienteFlexibilidad").val();
        resistenciaMonotonia = $(".inputCrearUsuarioClienteResistenciaMonotonia").val();
        resiliencia = $(".inputCrearUsuarioClienteResiliencia").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            actividad: actividad,
            estado: estado,
            estadoActividad: estadoActividad,
            fecha: fecha,
            hora: hora,
            turnoAgenda: turnoAgenda,
            cumplimientoAgenda: cumplimientoAgenda,
            resistenciaAnaerobica: resistenciaAnaerobica,
            fuerzaMuscular: fuerzaMuscular,
            resistenciaMuscular: resistenciaMuscular,
            flexibilidad: flexibilidad,
            resistenciaMonotonia: resistenciaMonotonia,
            resiliencia: resiliencia,
        }, "UsuarioCliente modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarUsuarioCliente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioClienteCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "UsuarioCliente eliminado correctamente.", "Error al eliminar UsuarioCliente.");
    };

    const confirmarCrearUsuarioCliente = () => {
        limpiarPantalla();
        $(".confirmarCrearUsuarioCliente").css("display", "block");
    }

    const confirmarModificarUsuarioCliente = () => {
        limpiarPantalla();
        $(".confirmarModificarUsuarioCliente").css("display", "block");
    }

    const confirmarEliminarUsuarioCliente = () => {
        limpiarPantalla();
        $(".confirmarEliminarUsuarioCliente").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearUsuarioCliente").css("display", "none");
        $(".confirmarModificarUsuarioCliente").css("display", "none");
        $(".confirmarEliminarUsuarioCliente").css("display", "none");
    }

    $(".usuarioClienteCrear").click(confirmarCrearUsuarioCliente);
    $(".usuarioClienteConfirmarCrear").click(datosCrearUsuarioCliente);
    $(".usuarioClienteBuscar").click(datosBuscarUsuarioCliente);
    $(".usuarioClienteModificar").click(confirmarModificarUsuarioCliente);
    $(".usuarioClienteConfirmarModificar").click(modificarUsuarioCliente);
    $(".usuarioClienteEliminar").click(confirmarEliminarUsuarioCliente);
    $(".usuarioClienteConfirmarEliminar").click(eliminarUsuarioCliente);

    $(".usuarioClienteCancelarCrear").click(limpiarPantalla);
    $(".usuarioClienteCancelarModificar").click(limpiarPantalla);
    $(".usuarioClienteCancelarEliminar").click(limpiarPantalla);
});
