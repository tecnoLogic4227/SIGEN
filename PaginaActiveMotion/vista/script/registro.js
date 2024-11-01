$(document).ready(() => {
    let ci, nombre, apellido, direccion, email, fecha, telefono, rol;

    const limpiarCampos = () => {

    }

    const registrarUsuario = (data) => {
        $.ajax({
            url: "../../controlador/registerController.php",
            type: "POST",
            data: {
                ...data
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta.length > 0) {

                    } else {
                        alert("No se encontraron resultados.");
                        limpiarCampos();
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    }

    const datos = (event) => {
        event.preventDefault();
        limpiarCampos();
        ci = $(".inputRegistroCi").val();
        nombre = $(".inputRegistroNombre").val();
        apellido = $(".inputRegistroApellido").val();
        direccion = $(".inputRegistroDireccion").val();
        email = $(".inputRegistroEmail").val();
        fecha = $(".inputRegistroFecha").val();
        telefono = $(".inputRegistroTelefono").val();
        rol = $(".inputRegistroRol").val();
        registrarUsuario({
            ci: ci,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            email: email,
            fecha: fecha,
            telefono: telefono,
            rol: rol
        })
    }

    $("")

})