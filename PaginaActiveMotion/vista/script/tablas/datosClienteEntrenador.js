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
                        if (usuarioCliente.length > 0) {
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
                            usuarioCliente.forEach(usuarioCliente1 => {
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
                            });
                            // agregarCalificacion(cumplimientoAgenda, usuarioCliente1.cumplimiento_agenda);
                            // agregarCalificacion(resistenciaAnaerobica, usuarioCliente1.resistencia_anaerobica);
                            // agregarCalificacion(fuerzaMuscular, usuarioCliente1.fuerza_muscular);
                            // agregarCalificacion(resistenciaMuscular, usuarioCliente1.resistencia_muscular);
                            // agregarCalificacion(flexibilidad, usuarioCliente1.flexibilidad);
                            // agregarCalificacion(resistenciaMonotonia, usuarioCliente1.resistencia_monotonia);
                            // agregarCalificacion(resiliencia, usuarioCliente1.resiliencia);
                        } else {
                            alert("No se encontraron resultados.");
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
        buscarUsuarioCliente(ci);
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
