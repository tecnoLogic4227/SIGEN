$(document).ready(() => {
    let tabla = "calificacionCliente";
    let metodo = "GET";
    let ci;

    const recibirCalificacion = (ci, tabla, metodo) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                ci: ci,
                tabla: tabla,
                metodo: metodo
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    $(".outputEstadoCliente").html("");
                    if (respuesta) {
                        respuesta.forEach(elemento => {
                            $(".outputEstadoCliente").html(elemento.estado);
                        });
                    } else {
                        alert("Usted no tiene calificación.");
                        $(".outputEstadoCliente").html("");
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
    
    ci = sessionStorage.getItem("ci");
    recibirCalificacion(ci, tabla, metodo);
})