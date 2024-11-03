$(document).ready(() => {
    let ci, idEquipo;

    const manejarSolicitud = (data, tabla, metodo, mensajeExito, mensajeError) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                ...data,
                tabla: tabla,
                metodo: metodo,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta === true) {
                        alert(mensajeExito);
                        window.location = "http://localhost/sigen/paginaactivemotion/vista/html/seleccionador/equiposSeleccionador.html";
                    } else {
                        if (respuesta !== false) {
                            alert(respuesta);
                        } else {
                            alert(mensajeError);
                        }
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    const datos = (metodo, event) => {
        event.preventDefault();
        switch (metodo) {
            case "POST":
                ci = $(".inputCi").val();
                id = $(".inputId").val();
                manejarSolicitud({
                    ci: ci,
                    id: id,
                }, "armarEquipo", metodo, "Deportista ingresado correctamente.", "Error al ingresar al deportista");
                break;
            case "DELETE":
                ci = $(".inputCi").val();
                id = $(".inputId").val();
                manejarSolicitud({
                    ci: ci,
                    id: id,
                }, "armarEquipo", metodo, "Deportista eliminado correctamente.", "Error al eliminar al deportista.");
                break;
            default:
                alert("Error: método incorrecto.");
                break;
        }
    }

    $(".botonIngresarDeportista").on("click", (event) => {
        datos("POST", event);
    });
    $(".botonEliminarDeportista").on("click", (event) => {
        datos("DELETE", event);
    });
    
})