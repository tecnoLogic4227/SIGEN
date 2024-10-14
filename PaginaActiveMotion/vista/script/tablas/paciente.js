$(document).ready(() => {
    let ci, motivo, lesion, metodo;
    const tabla = "paciente";
    datos = "";

    const listarPaciente = (datos) => {
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
                    let paciente = JSON.parse(response);
                    if (paciente.length > 0) {
                        $(".tablaPaciente tbody").html("");
                        let tbody = $(".tablaPaciente tbody");
                        paciente.forEach(paciente1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${paciente1.ci}</td>`);
                            tr.append(`<td>${paciente1.motivo}</td>`);
                            tr.append(`<td>${paciente1.lesion}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaPaciente tbody").html("");
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
                        listarPaciente(datos);
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

    const crearPaciente = (ci, motivo, lesion) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            motivo: motivo,
            lesion: lesion,
        }, "Paciente creado correctamente.", "Error al crear Paciente.");
    };

    const datosCrearPaciente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearPacienteCi").val();
        motivo = $(".inputCrearPacienteMotivo").val();
        lesion = $(".inputCrearPacienteLesion").val();
        crearPaciente(ci, motivo, lesion);
    };

    listarPaciente(datos);

    const buscarPaciente = (ci) => {
        listarPaciente({
            tabla: tabla,
            ci: ci,
        });
    };

    const datosBuscarPaciente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearPacienteCi").val();
        buscarPaciente(ci);
    };

    const modificarPaciente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearPacienteCi").val();
        motivo = $(".inputCrearPacienteMotivo").val();
        lesion = $(".inputCrearPacienteLesion").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            motivo: motivo,
            lesion: lesion,
        }, "Paciente modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarPaciente = (event) => {
        event.preventDefault();
        ci = $(".inputCrearPacienteCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "Paciente eliminado correctamente.", "Error al eliminar Paciente.");
    };

    const confirmarCrearPaciente = () => {
        limpiarPantalla();
        $(".confirmarCrearPaciente").css("display", "block");
    }

    const confirmarModificarPaciente = () => {
        limpiarPantalla();
        $(".confirmarModificarPaciente").css("display", "block");
    }

    const confirmarEliminarPaciente = () => {
        limpiarPantalla();
        $(".confirmarEliminarPaciente").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearPaciente").css("display", "none");
        $(".confirmarModificarPaciente").css("display", "none");
        $(".confirmarEliminarPaciente").css("display", "none");
    }

    $(".pacienteCrear").click(confirmarCrearPaciente);
    $(".pacienteConfirmarCrear").click(datosCrearPaciente);
    $(".pacienteBuscar").click(datosBuscarPaciente);
    $(".pacienteModificar").click(confirmarModificarPaciente);
    $(".pacienteConfirmarModificar").click(modificarPaciente);
    $(".pacienteEliminar").click(confirmarEliminarPaciente);
    $(".pacienteConfirmarEliminar").click(eliminarPaciente);

    $(".pacienteCancelarCrear").click(limpiarPantalla);
    $(".pacienteCancelarModificar").click(limpiarPantalla);
    $(".pacienteCancelarEliminar").click(limpiarPantalla);

});
