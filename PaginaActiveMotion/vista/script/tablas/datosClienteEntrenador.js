$(document).ready(() => {
    let ci, estado, cumplimientoAgenda, resistenciaAnaerobica, fuerzaMuscular, resistenciaMuscular, flexibilidad, resistenciaMonotonia, resiliencia, metodo;
    const tabla = "usuarioCliente";
    datos = "";
    var valorCi;

    const limpiarCampos = () => {
        $(".inputCrearUsuarioClienteCi").val("");
        $(".inputCrearUsuarioClienteEstado").val("");
        $(".inputCrearUsuarioClienteCumplimientoAgenda").val("");
        $(".inputCrearUsuarioClienteResistenciaAnaerobica").val("");
        $(".inputCrearUsuarioClienteFuerzaMuscular").val("");
        $(".inputCrearUsuarioClienteResistenciaMuscular").val("");
        $(".inputCrearUsuarioClienteFlexibilidad").val("");
        $(".inputCrearUsuarioClienteResistenciaMonotonia").val("");
        $(".inputCrearUsuarioClienteResiliencia").val("");
    }

    const limpiarTabla = () => {
        $(".outputUsuarioClienteCi").html("");
        $(".outputUsuarioClienteNombre").html("");
        $(".outputUsuarioClienteApellido").html("");
        $(".outputUsuarioClienteActividad").html("");
        $(".outputUsuarioClienteEstado").html("");
        $(".outputUsuarioClienteCumplimientoAgenda").html("");
        $(".outputUsuarioClienteResistenciaAnaerobica").html("");
        $(".outputUsuarioClienteFuerzaMuscular").html("");
        $(".outputUsuarioClienteResistenciaMuscular").html("");
        $(".outputUsuarioClienteFlexibilidad").html("");
        $(".outputUsuarioClienteResistenciaMonotonia").html("");
        $(".outputUsuarioClienteResiliencia").html("");
    }

    const listarUsuarioCliente = (datos) => {
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
                try {
                    let usuarioCliente = JSON.parse(response);
                    if (usuarioCliente) {
                        $("#tablaDetallesClienteEntrenador tbody").html("");
                        limpiarTabla();
                        if (usuarioCliente.length > 0) {
                            usuarioCliente.forEach(usuarioCliente1 => {
                                if (window.location.href == "http://localhost/sigen/paginaactivemotion/vista/html/entrenador/detallesClienteEntrenador.html") {
                                    let tbody = $("#tablaDetallesClienteEntrenador tbody");
                                    let tr = $("<tr></tr>");
                                    tr.append(`<td>${usuarioCliente1.ci}</td>`);
                                    tr.append(`<td>${usuarioCliente1.nombre}</td>`);
                                    tr.append(`<td>${usuarioCliente1.actividad}</td>`);
                                    tbody.append(tr);
                                } else {
                                    if (ci) {
                                        $(".outputUsuarioClienteCi").append(usuarioCliente1.ci);
                                        $(".outputUsuarioClienteNombre").append(usuarioCliente1.nombre);
                                        $(".outputUsuarioClienteApellido").append(usuarioCliente1.appelido);
                                        $(".outputUsuarioClienteActividad").append(usuarioCliente1.actividad);
                                        $(".outputUsuarioClienteEstado").append(usuarioCliente1.estado);
                                        $(".outputUsuarioClienteCumplimientoAgenda").append(usuarioCliente1.cumplimiento_agenda);
                                        $(".outputUsuarioClienteResistenciaAnaerobica").append(usuarioCliente1.resistencia_anaerobica);
                                        $(".outputUsuarioClienteFuerzaMuscular").append(usuarioCliente1.fuerza_muscular);
                                        $(".outputUsuarioClienteResistenciaMuscular").append(usuarioCliente1.resistencia_muscular);
                                        $(".outputUsuarioClienteFlexibilidad").append(usuarioCliente1.flexibilidad);
                                        $(".outputUsuarioClienteResistenciaMonotonia").append(usuarioCliente1.resistencia_monotonia);
                                        $(".outputUsuarioClienteResiliencia").append(usuarioCliente1.resiliencia);
                                    }                                    
                                }
                            });
                        } else {
                            alert("No se encontraron resultados.");
                            limpiarTabla();
                        }
                    } else {
                        alert("No se encontraron resultados.");
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

    listarUsuarioCliente();

    const manejarSolicitud = (metodo, datos, exitoMensaje, errorMensaje) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                tabla: tabla,
                metodo: metodo,
                datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta) {
                        alert(exitoMensaje);
                        datos = "";
                        auxiliar();
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

    const buscarUsuarioCliente = (ci) => {
        listarUsuarioCliente({
            ci: ci
        });
    };

    const datosBuscarUsuarioCliente = (event) => {
        ci = $(".inputCrearUsuarioClienteCi").val();
        valorCi = ci;
        limpiarCampos();

        if (ci) {
            buscarUsuarioCliente(ci);
        } else {
            alert("La cédula no puede quedar vacía.");
        }
    };

    const modificarUsuarioCliente = (event) => {
        event.preventDefault();
        estado = $("select[name='select']").val();
        cumplimientoAgenda = $(".inputCrearUsuarioClienteCumplimientoAgenda").val();
        resistenciaAnaerobica = $(".inputCrearUsuarioClienteResistenciaAnaerobica").val();
        fuerzaMuscular = $(".inputCrearUsuarioClienteFuerzaMuscular").val();
        resistenciaMuscular = $(".inputCrearUsuarioClienteResistenciaMuscular").val();
        flexibilidad = $(".inputCrearUsuarioClienteFlexibilidad").val();
        resistenciaMonotonia = $(".inputCrearUsuarioClienteResistenciaMonotonia").val();
        resiliencia = $(".inputCrearUsuarioClienteResiliencia").val();

        limpiarCampos();

        manejarSolicitud("POST", {
            ci: valorCi,
            estado: estado,
            cumplimientoAgenda: cumplimientoAgenda,
            resistenciaAnaerobica: resistenciaAnaerobica,
            fuerzaMuscular: fuerzaMuscular,
            resistenciaMuscular: resistenciaMuscular,
            flexibilidad: flexibilidad,
            resistenciaMonotonia: resistenciaMonotonia,
            resiliencia: resiliencia,
        }, "UsuarioCliente modificado correctamente.", "No se encontraron los datos.");
    };

    function auxiliar() {
        listarUsuarioCliente({
            ci: valorCi
        });
    }


    $(".usuarioClienteBuscar").click(datosBuscarUsuarioCliente);
    $("#usuarioClienteModificar").click(modificarUsuarioCliente);
});
