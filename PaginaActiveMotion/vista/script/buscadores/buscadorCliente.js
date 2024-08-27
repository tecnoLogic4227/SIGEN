$(document).ready(() => {

    $("#result").hide();

    $("#botonClienteBuscador").click(() => {
        let search = $("#inputClienteBuscador").val();
        const type = "cliente";

        let template = "";
        $("#container").html("");

        let validarCedula = search => {
            let valida = true;

            search = search.trim();

            if (search.length != 8) {
                valida = false;
            }

            for (let i = 0; i < search.length; i++) {
                if (isNaN(search[i])) {
                    valida = false;
                    break;
                }                
            }

            return valida;
        }

        let searchValid = validarCedula(search);

        if (searchValid) {

            $.ajax({
                url: "../controlador/controladorBusqueda.php",
                type: "POST",
                data: {
                    search,
                    type,
                },
                success: (response) => {
                    try {
                        let clientes = JSON.parse(response);

                        if (clientes.length > 0) {

                            clientes.forEach(cliente => {
                                template += `<li>${cliente.ci}</li>`;
                                template += `<li>${cliente.calificacion}</li>`;
                                template += `<li>${cliente.estado_actividad}</li>`;
                                template += `<li>${cliente.estado}</li>`;
                                template += `<li>${cliente.actividad}</li>`;
                            });

                        } else {
                            template = "<li>No se encontraron resultados.</li>"
                        }                        

                        $("#container").html(template);
                        $("#result").show();
                    } catch (e) {
                        console.error("Error al parsear el JSON: " + e);
                    }
                },
                error: (xhr, status, error) => {
                    console.error("La solicitud AJAX falló: " + error)
                }
            })
        } else {
            template = "<li>Por favor ingrese una cedula valida.</li>";
            $("#container").html(template);
            $("#result").show();
        }
    })
})