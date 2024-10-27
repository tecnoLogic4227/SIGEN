$(document).ready(() => {
    let idLogin, contrasenia, metodo;
    const tabla = "login";
    datos = "";

    const listarLogin = (datos) => {
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
                    let login = JSON.parse(response);
                    if (login.length > 0) {
                        $(".tablaLogin tbody").html("");
                        let tbody = $(".tablaLogin tbody");
                        login.forEach(login1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${login1.id_login}</td>`);
                            tr.append(`<td>${login1.contrasenia}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaLogin tbody").html("");
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
                    if (respuesta) {
                        alert(exitoMensaje);
                        datos = "";
                        listarLogin(datos);
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

    const crearLogin = (idLogin, contrasenia) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idLogin: idLogin, 
            contrasenia: contrasenia,
        }, "Login creado correctamente.", "Error al crear Login.");
    };

    const datosCrearLogin = (event) => {
        event.preventDefault();
        idLogin = $(".inputCrearLoginIdLogin").val();
        contrasenia = $(".inputCrearLoginContrasenia").val();
        crearLogin(idLogin, contrasenia);
    };

    listarLogin(datos);

    const buscarLogin = (idLogin) => {
        listarLogin({
            tabla: tabla,
            idLogin: idLogin
        });
    };

    const datosBuscarLogin = (event) => {
        event.preventDefault();
        idLogin = $(".inputCrearLoginIdLogin").val();
        buscarLogin(ci, idRutina);
    };

    const modificarLogin = (event) => {
        event.preventDefault();
        idLogin = $(".inputCrearLoginIdLogin").val();
        contrasenia = $(".inputCrearLoginContrasenia").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idLogin: idLogin, 
            contrasenia: contrasenia
        }, "Login modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarLogin = (event) => {
        event.preventDefault();
        idLogin = $(".inputCrearLoginIdLogin").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idLogin: idLogin, 
        }, "Login eliminado correctamente.", "Error al eliminar Login.");
    };

    const confirmarCrearLogin = () => {
        limpiarPantalla();
        $(".confirmarCrearLogin").css("display", "block");
    }

    const confirmarModificarLogin = () => {
        limpiarPantalla();
        $(".confirmarModificarLogin").css("display", "block");
    }

    const confirmarEliminarLogin = () => {
        limpiarPantalla();
        $(".confirmarEliminarLogin").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearLogin").css("display", "none");
        $(".confirmarModificarLogin").css("display", "none");
        $(".confirmarEliminarLogin").css("display", "none");
    }

    $(".loginCrear").click(confirmarCrearLogin);
    $(".loginConfirmarCrear").click(datosCrearLogin);
    $(".loginBuscar").click(datosBuscarLogin);
    $(".loginModificar").click(confirmarModificarLogin);
    $(".loginConfirmarModificar").click(modificarLogin);
    $(".loginEliminar").click(confirmarEliminarLogin);
    $(".loginConfirmarEliminar").click(eliminarLogin);

    $(".loginCancelarCrear").click(limpiarPantalla);
    $(".loginCancelarModificar").click(limpiarPantalla);
    $(".loginCancelarEliminar").click(limpiarPantalla);

});
