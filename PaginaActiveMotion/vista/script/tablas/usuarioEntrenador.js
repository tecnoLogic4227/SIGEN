$(document).ready(() => {
    let ci, metodo;
    const tabla = "usuarioEntrenador";
    datos = "";

    const listarUsuarioEntrenador = (datos) => {
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
                    let usuarioEntrenador = JSON.parse(response);
                    if (usuarioEntrenador.length > 0) {
                        $(".tablaUsuarioEntrenador tbody").html("");
                        let tbody = $(".tablaUsuarioEntrenador tbody");
                        usuarioEntrenador.forEach(usuarioEntrenador1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${usuarioEntrenador1.ci}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaUsuarioEntrenador tbody").html("");
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
                        listarUsuarioEntrenador(datos);
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

    const crearUsuarioEntrenador = (ci) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
        }, "UsuarioEntrenador creado correctamente.", "Error al crear UsuarioEntrenador.");
    };

    const datosCrearUsuarioEntrenador = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioEntrenadorCi").val();
        crearUsuarioEntrenador(ci);
    };

    listarUsuarioEntrenador(datos);

    const buscarUsuarioEntrenador = (ci) => {
        listarUsuarioEntrenador({
            tabla: tabla,
            ci: ci,
        });
    };

    const datosBuscarUsuarioEntrenador = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioEntrenadorCi").val();
        buscarUsuarioEntrenador(ci);
    };

    const modificarUsuarioEntrenador = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioEntrenadorCi").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            ci: ci,
        }, "UsuarioEntrenador modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarUsuarioEntrenador = (event) => {
        event.preventDefault();
        ci = $(".inputCrearUsuarioEntrenadorCi").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            ci: ci,
        }, "UsuarioEntrenador eliminado correctamente.", "Error al eliminar UsuarioEntrenador.");
    };

    const confirmarCrearUsuarioEntrenador = () => {
        limpiarPantalla();
        $(".UsuarioEntrenador").css("display", "block");
    }

    const confirmarModificarUsuarioEntrenador = () => {
        limpiarPantalla();
        $(".confirmarModificarUsuarioEntrenador").css("display", "block");
    }

    const confirmarEliminarUsuarioEntrenador = () => {
        limpiarPantalla();
        $(".confirmarEliminarUsuarioEntrenador").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearUsuarioEntrenador").css("display", "none");
        $(".confirmarModificarUsuarioEntrenador").css("display", "none");
        $(".confirmarEliminarUsuarioEntrenador").css("display", "none");
    }

    $(".usuarioEntrenadorCrear").click(confirmarCrearUsuarioEntrenador);
    $(".usuarioEntrenadorConfirmarCrear").click(datosCrearUsuarioEntrenador);
    $(".usuarioEntrenadorBuscar").click(datosBuscarUsuarioEntrenador);
    $(".usuarioEntrenadorModificar").click(confirmarModificarUsuarioEntrenador);
    $(".usuarioEntrenadorConfirmarModificar").click(modificarUsuarioEntrenador);
    $(".usuarioEntrenadorEliminar").click(confirmarEliminarUsuarioEntrenador);
    $(".usuarioEntrenadorConfirmarEliminar").click(eliminarUsuarioEntrenador);

    $(".usuarioEntrenadorCancelarCrear").click(limpiarPantalla);
    $(".usuarioEntrenadorCancelarModificar").click(limpiarPantalla);
    $(".usuarioEntrenadorCancelarEliminar").click(limpiarPantalla);

});
