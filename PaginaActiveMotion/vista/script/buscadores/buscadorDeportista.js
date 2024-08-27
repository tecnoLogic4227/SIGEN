$(document).ready(() => {

    $("#result").hide();

    $("#botonDeportistaBuscador").click(() => {
        let search = $("#inputDeportistaBuscador").val();
        const type = "deportista";

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
                        let deportistas = JSON.parse(response);

                        if (deportistas.length > 0) {

                            deportistas.forEach(deportista => {
                                template += `<li>${deportista.ci}</li>`;
                                template += `<li>${deportista.posicion}</li>`;
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