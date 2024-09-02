$(document).ready(() => {

    let validarID = search => {

        search = search.trim();

        if (search.length < 1) {
            return false;
        }

        for (let i = 0; i < search.length; i++) {
            if (isNaN(search[i])) {
                return false;
            }
        }

        return true;
    }


    let pasarDatos = (search, type) => {

        event.preventDefault();

        $.ajax({
            url: "http://localhost/paginaactivemotion/controlador/controladorBusqueda.php",
            type: "POST",
            data: {
                search: search,
                type: type,
            },
            success: (response) => {

                try {
                    let planes = JSON.parse(response);

                    if (planes.length > 0) {

                        planes.forEach(plan => {

                            //atributo de rutina
                            $(".outputPlanIDRutina").html(plan.id_rutina);

                            //atributos de plan_entrenamiento
                            $(".outputPlanIDPlan").html(plan.id_plan_entrenamiento);
                            $(".outputPlanNombre").html(plan.nombre_plan_entrenamiento);
                            $(".outputPlanNroEjercicios").html(plan.nro_ejercicios);
                            $(".outputPlanDescripcion").html(plan.descripcion);
                        });

                    } else {
                        alert("No se encontraron resultados.");
                    }
                } catch (e) {
                    // console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        })

    }

    let ingresarDatos = () => {

        let search = $(".inputPlanBuscador").val();
        const type = "planEntrenamiento";

        if (validarID(search)) {
            pasarDatos(search, type);
        } else {
            alert("Por favor ingrese un ID válido!");
        }
    }

    let limpiar = () => {

        $(".outputPlanIDRutina").html("");
        $(".outputPlanIDPlan").html("");
        $(".outputPlanNombre").html("");
        $(".outputPlanNroEjercicios").html("");
        $(".outputPlanDescripcion").html("");

        ingresarDatos();
    }

    $(".botonPlanBuscador").click(limpiar);
});