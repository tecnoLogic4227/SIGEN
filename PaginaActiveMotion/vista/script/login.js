$(document).ready(() => {
    let ci, contrasenia;
    datos = "";

    const consultarLogin = (datos, errorMensaje) => {
        $.ajax({
            url: "../../../controlador/loginController.php",
            type: "POST",
            data: {
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta) {
                        if (respuesta.redirect) {
                            window.location.href = respuesta.redirect;                        
                        } else {
                            alert(respuesta);
                        }
                    } else {
                        alert(respuesta);
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        })
    }

    const verificarDatosLogin = (ci, contrasenia) => {
        if (filtroCedula(ci) && filtroContrasenia(contrasenia.valido)) {
            consultarLogin({ ci: ci, contrasenia: contrasenia }, "Error al loguearse.");
        } else {
            alert("datos inválidos.");
        }

    }

    const datosLogin = (event) => {
        event.preventDefault();
        ci = $(".inputLoginCi").val();
        contrasenia = $(".inputLoginContrasenia").val();
        consultarLogin({ ci: ci, contrasenia: contrasenia }, "Error al loguearse.");
    }

    const cambiarContraseña = () => {
        if ($("#fotoLogin").hasClass("fotoLoginOculto")) {
            $("#fotoLogin").attr("src", "../../img/viendo.png");
            $("#fotoLogin").removeClass("fotoLoginOculto").addClass("fotoLoginViendo");
            $(".inputLoginContrasenia").attr("type", "text");
        } else {
            $("#fotoLogin").attr("src", "../../img/oculto.png");
            $("#fotoLogin").removeClass("fotoLoginViendo").addClass("fotoLoginOculto");
            $(".inputLoginContrasenia").attr("type", "password");
        }
    }

    $(".span").click(cambiarContraseña);
    $(".botonEnviarDatosLogin").click(datosLogin);
});