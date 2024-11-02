$(document).ready(() => {

    let ci, nombre, apellido, direccion, email, fechaNac, rol, telefono, metodo;
    const tabla = "consultarPDAdministrativo";
    datos = "";

    const limpiarPantalla = () => {
        $(".sectionDesactivar").css("display", "none");
        $(".sectionActivar").css("display", "none");
        $(".sectionModificar").css("display", "none");
        $(".sectionConfirmarEliminar").css("display", "none");
        $(".sectionEliminar").css("display", "none");
    }

    const listarUsuario = (datos) => {
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
                    let usuario = JSON.parse(response);
                    if (usuario.length > 0) {
                        $(".tablaUsuario tbody").html("");
                        let tbody = $(".tablaUsuario tbody");
                        usuario.forEach(usuario1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${usuario1.ci}</td>`);
                            tr.append(`<td>${usuario1.nombre}</td>`);
                            tr.append(`<td>${usuario1.apellido}</td>`);
                            tr.append(`<td>${usuario1.direccion}</td>`);
                            tr.append(`<td>${usuario1.email}</td>`);
                            tr.append(`<td>${usuario1.fecha_nac}</td>`);
                            tr.append(`<td>${usuario1.rol}</td>`)
                            tr.append(`<td>${usuario1.telefono}</td>`);
                            if (usuario1.estado_actividad) {
                                tr.append(`<td>Activo</td>`);
                            } else {
                                tr.append(`<td>Inactivo</td>`);
                            }
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaUsuario tbody").html("");
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
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta) {
                        alert(exitoMensaje);
                        datos = "";
                        listarUsuario();
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

    const crearUsuario = (ci, nombre, apellido, direccion, email, fechaNac, rol, telefono) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            email: email,
            fechaNac: fechaNac,
            rol: rol,
            telefono: telefono
        }, "Usuario creado correctamente.", "Error al crear Usuario.");
    };

    const datosCrearUsuario = (event) => {
        event.preventDefault();
        ci = $(".inputModificarUsuarioCi").val();
        nombre = $(".inputModificarUsuarioNombre").val();
        apellido = $(".inputModificarUsuarioApellido").val();
        direccion = $(".inputModificarUsuarioDireccion").val();
        email = $(".inputModificarUsuarioEmail").val();
        fechaNac = $(".inputModificarUsuarioFechaNac").val();
        telefono = $(".inputModificarUsuarioTelefono").val();
        rol = $(".inputModificarUsuarioRol").val();
        crearUsuario(ci, nombre, apellido, direccion, email, fechaNac, rol, telefono);
    };

    listarUsuario();

    const buscarUsuario = (ci) => {
        listarUsuario({
            ci: ci,
        });
    };

    const datosBuscarUsuario = (event) => {
        event.preventDefault();
        ci = $(".inputBuscarUsuarioCi").val();
        buscarUsuario(ci);
    };

    const modificarUsuario = (event) => {
        event.preventDefault();
        ci = $(".inputModificarUsuarioCi").val();
        nombre = $(".inputModificarUsuarioNombre").val();
        apellido = $(".inputModificarUsuarioApellido").val();
        direccion = $(".inputModificarUsuarioDireccion").val();
        email = $(".inputModificarUsuarioEmail").val();
        fechaNac = $(".inputModificarUsuarioFechaNac").val();
        rol = $(".inputModificarUsuarioRol").val();
        telefono = $(".inputModificarUsuarioTelefono").val();
        limpiarPantalla();
        manejarSolicitud("PUT", {
            ci: ci,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            email: email,
            fechaNac: fechaNac,
            rol: rol,
            telefono: telefono,
        }, "Usuario modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarUsuario = (event) => {
        event.preventDefault();
        ci = $(".inputEliminarUsuarioCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "Usuario eliminado correctamente.", "Error al eliminar Usuario.");
    };

    const desactivar = (event) => {
        event.preventDefault();
        ci = $(".inputDesactivarUsuarioCi").val();
        limpiarPantalla();
        manejarSolicitud("desactivar", {
            ci: ci,
        }, "Usuario desactivado correctamente.", "Error al desactivar Usuario.");
    }

    const confirmarConfirmarEliminarUsuario = () => {
        limpiarPantalla();
        $(".sectionConfirmarEliminar").css("display", "block");
    }

    const confirmarCrearUsuario = () => {
        limpiarPantalla();
        $(".confirmarCrearUsuario").css("display", "block");
    }

    const confirmarModificarUsuario = () => {
        limpiarPantalla();
        $(".sectionModificar").css("display", "block");
    }

    const confirmarEliminarUsuario = () => {
        limpiarPantalla();
        $(".sectionEliminar").css("display", "block");
    }

    const confirmarDesactivar = () => {
        limpiarPantalla();
        $(".sectionDesactivar").css("display", "block");
    }

    $(".usuarioCrear").click(confirmarCrearUsuario);
    $("#usuarioConfirmarCrear").click(datosCrearUsuario);

    $(".usuarioBuscar").click(datosBuscarUsuario);

    $(".usuarioModificar").click(confirmarModificarUsuario);
    $("#usuarioConfirmarModificar").click(modificarUsuario);

    $(".usuarioEliminar").click(confirmarEliminarUsuario);
    $(".usuarioConfirmarEliminar").click(confirmarConfirmarEliminarUsuario);
    $(".usuarioConfirmarConfirmarEliminar").click(eliminarUsuario);

    $(".usuarioDesactivar").click(confirmarDesactivar);
    $(".usuarioConfirmarDesactivar").click(desactivar);

    $(".usuarioCancelar").click(limpiarPantalla);
});
