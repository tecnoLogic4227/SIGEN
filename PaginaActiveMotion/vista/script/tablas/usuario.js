$(document).ready(() => {

    let ci, nombre, apellido, direccion, email, fechaNac, rol, telefono, metodo;
    const tabla = "usuario";
    datos = "";

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
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
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
                        listarUsuario(datos);
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
        rol = "entrenador";
        crearUsuario(ci, nombre, apellido, direccion, email, fechaNac, rol, telefono);
    };

    listarUsuario(datos);

    const buscarUsuario = (ci) => {
        listarUsuario({
            ci: ci,
            idRutina: idRutina
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
        ci = $(".inputBuscarUsuarioCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "Usuario eliminado correctamente.", "Error al eliminar Usuario.");
    };

    const confirmarCrearUsuario = () => {
        limpiarPantalla();
        $(".confirmarCrearUsuario").css("display", "block");
    }

    const confirmarModificarUsuario = () => {
        limpiarPantalla();
        $(".confirmarModificarUsuario").css("display", "block");
    }

    const confirmarEliminarUsuario = () => {
        limpiarPantalla();
        $(".confirmarEliminarUsuario").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearUsuario").css("display", "none");
        $(".confirmarModificarUsuario").css("display", "none");
        $(".confirmarEliminarUsuario").css("display", "none");
    }

    $(".usuarioCrear").click(confirmarCrearUsuario);
    $("#usuarioConfirmarCrear").click(datosCrearUsuario);
    $(".usuarioBuscar").click(datosBuscarUsuario);
    $(".usuarioModificar").click(confirmarModificarUsuario);
    $("#usuarioConfirmarModificar").click(modificarUsuario);
    $(".usuarioEliminar").click(confirmarEliminarUsuario);
    $(".usuarioConfirmarEliminar").click(eliminarUsuario);

    $(".usuarioCancelarCrear").click(limpiarPantalla);
    $(".usuarioCancelarModificar").click(limpiarPantalla);
    $(".usuarioCancelarEliminar").click(limpiarPantalla);

});
