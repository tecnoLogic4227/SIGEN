$(document).ready(() => {
    let ci, nombre, apellido, direccion, email, fecha, telefono, rol, actividad, estado, estadoActividad, plan;

    const limpiarCampos = () => {
        $(".inputRegistroCi").val("");
        $(".inputRegistroNombre").val("");
        $(".inputRegistroApellido").val("");
        $(".inputRegistroDireccion").val("");
        $(".inputRegistroEmail").val("");
        $(".inputRegistroFecha").val("");
        $(".inputRegistroTelefono").val("");
        $(".inputRegistroRol").val("");
        $(".inputRegistroActividad").val("");
        $(".inputRegistroEstado").val("");
        $(".inputRegistroEstadoActividad").val("");
        $(".inputRegistroPlan").val("");
    }

    const registrarUsuario = (data) => {
        $.ajax({
            url: "../../../controlador/registerController.php",
            type: "POST",
            data: { ...data },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta === true) {
                        alert("Usuario registrado correctamente.");
                    } else {
                        alert(respuesta);
                    }
                    limpiarCampos();
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
        ci = $(".inputRegistroCi").val();
        nombre = $(".inputRegistroNombre").val();
        apellido = $(".inputRegistroApellido").val();
        direccion = $(".inputRegistroDireccion").val();
        email = $(".inputRegistroEmail").val();
        fecha = $(".inputRegistroFecha").val();
        telefono = $(".inputRegistroTelefono").val();
        rol = $(".inputRegistroRol").val();

        if (!filtroCedula(ci)) {
            alert("Cédula no válida.");
            return;
        }
        if (!nombre || !filtroPalabra(nombre)) {
            alert("Nombre no válido.");
            return;
        }
        if (!apellido || !filtroPalabra(apellido)) {
            alert("Apellido no válido.");
            return;
        }
        if (!direccion || !filtroDireccion(direccion)) {
            alert("Dirección no válida.");
            return;
        }
        if (!email || !filtroEmail(email)) {
            alert("Email no válido.");
            return;
        }
        if (!fecha || !filtroFecha(fecha)) {
            alert("Fecha no válida.");
            return;
        }
        if (!telefono || !filtroTelefono(telefono)) {
            alert("Teléfono no válido.");
            return;
        }
        if (!rol || !filtroRol(rol)) {
            alert("Rol no válido.");
            return;
        }

        if (rol === "cliente") {
            actividad = $(".inputRegistroActividad").val();
            estado = $(".inputRegistroEstado").val();
            estadoActividad = $(".inputRegistroEstadoActividad").val() === "1";
            plan = $(".inputRegistroPlan").val();

            if (!actividad || !filtroPalabra(actividad)) {
                alert("Actividad no válida.");
                return;
            }
            if (!estado || !filtroEstado(estado)) {
                alert("Estado no válido.");
                return;
            }
            if (estadoActividad !== true && estadoActividad !== false) {
                alert("Estado de actividad no válido.");
                return;
            }
            if (!plan || !filtroPlan(plan)) {
                alert("Plan no válido.");
                return;
            }
        }

        registrarUsuario({
            ci: ci,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            email: email,
            fecha: fecha,
            telefono: telefono,
            rol: rol,
            actividad: actividad,
            estado: estado,
            estadoActividad: estadoActividad,
            plan: plan,
        });
    }

    $(".botonRegistrarUsuario").click(datos);
});
