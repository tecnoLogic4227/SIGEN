$(document).ready(() => {
    let tabla = "agendaCliente";
    let metodo = "GET";
    let ci;

    const recibirDatosAgenda = (ci, tabla, metodo) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                ci: ci,
                tabla: tabla,
                metodo: metodo,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta) {
                        console.log(respuesta);
                        recibirFechas(respuesta);
                    } else {
                        alert("Usted no tiene días agendados.");
                        // $("").html("");
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
    recibirDatosAgenda(ci, tabla, metodo);
})