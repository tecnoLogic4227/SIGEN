$(document).ready(() => {

    $("#result").hide();

    $("#botonEquipoBuscador").click(() => {
        let search = $("#inputEquipoBuscador").val();
        const type = "equipo";

        let template = "";
        $("#container").html("");

        let validarEquipo = search => {
            let valida = true;

            search = search.trim();

            if (search.length < 1){
                valida= false;
            }

            for (let i = 0; i < search.length; i++) {
                if (isNaN(search[i])) {
                    valida = false;
                    break;
                }                
            }

            return valida;
        }

        let searchValid = validarEquipo(search);

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
                        let equipos = JSON.parse(response);

                        if (equipos.length > 0) {

                            equipos.forEach(equipo => {
                                template += `<li>${equipo.id_equipo}</li>`;
                                template += `<li>${equipo.nombre_equipo}</li>`;
                                template += `<li>${equipo.cantidad}</li>`;
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
            template = "<li>Por favor ingrese un id valido.</li>";
            $("#container").html(template);
            $("#result").show();
        }
    })
})