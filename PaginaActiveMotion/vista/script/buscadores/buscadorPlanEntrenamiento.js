$(document).ready(() => {

    $("#result").hide();

    $("#botonBuscar").click(() => {
        let search = $("#inputCliente").val();
        const type = "planEntrenamiento";

        let template = "";
        $("#container").html("");

        let validarPlan = search => {
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

        let searchValid = validarPlan(search);

        if (searchValid) {

            $.ajax({
                url: "buscador.php",
                type: "POST",
                data: {
                    search,
                    type,
                },
                success: (response) => {
                    try {
                        let planes = JSON.parse(response);

                        if (planes.length > 0) {

                            planes.forEach(plan => {
                                template += `<li>${plan.id_plan_entrenamiento}</li>`;
                                template += `<li>${plan.nombre_plan_entrenamiento}</li>`;
                                template += `<li>${plan.nro_ejercicios}</li>`;
                                template += `<li>${plan.descripcion}</li>`;
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