var search;

$(document).ready(() => {

    let validarID = search => {

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
            url: "http://localhost/sigen/paginaactivemotion/controlador/controladorBusqueda.php",
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
                            $(".outputEjercicioRutina").html("ID: " + plan.id_rutina);
                            $(".outputEjercicioRutinaNombre").html("Nombre: " + plan.nombre_rutina);

                            //atributos de ejercicio
                            $(".outputIDEjercicio").html(plan.id_ejercicio);
                            $(".outputNombreEjercicio").html(plan.nombre_ejercicio);
                            $(".outputNroRepEjercicio").html(plan.nro_rep);
                            $(".outputNroSeriesEjercicio").html(plan.nro_series);
                            $(".outputGrupoMuscularEjercicio").html(plan.grupo_muscular);
                            $(".outputDescripcionEjercicio").html(plan.descripcion);
                        });

                    } else {
                        alert("No se encontraron resultados.");
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        })

    }

    let ingresarDatos = () => {

        search = $(".inputPlanBuscador").val();
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
