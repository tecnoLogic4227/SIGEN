$(document).ready(() => {

    let tabla = "rutina";
    let par1, par2;

    let crearRutina = (event) => {

        event.preventDefault();

        par1 = Number($(".inputCrearRutina").val());
        par2 = "";

        $("body").css("visibility", "visible");

        $(".popupCrearRutina").css("visibility", "hidden");

        $.ajax({
            url: "http://localhost/sigen/paginaactivemotion/controlador/crud/create.php",
            type: "POST",
            data: {
                tabla: tabla,
                par1: par1,
            },
            success: (response) => {

                alert(response);

                try {

                    let respuesta = JSON.parse(response);

                    if (respuesta == true) {

                        alert("Rutina creada correctamente.");

                    } else {

                        alert("Error al crear la rutina.");
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

    let listarRutinas = (event) => {

    }

    let consultarRutina = (event) => {

    }

    let modificarRutina = (event) => {

    }

    let eliminarRutina = (event) => {

        event.preventDefault();

        par1 = search;
        par2 = "";

        $(".popupEliminarRutina").css("visibility", "hidden");

        $.ajax({
            url: "../../../controlador/crud/delete.php",
            type: "POST",
            data: {
                tabla: tabla,
                par1: par1,
                par2: par2
            },
            success: (response) => {

                try {

                    let respuesta = JSON.parse(response);

                    if (respuesta == true) {
                        alert("Rutina eliminada correctamente.");

                        $(".outputEjercicioRutina").html("");
                        $(".outputIDEjercicio").html("");
                        $(".outputNombreEjercicio").html("");
                        $(".outputNroRepEjercicio").html("");
                        $(".outputNroSeriesEjercicio").html("");
                        $(".outputGrupoMuscularEjercicio").html("");
                        $(".outputDescripcionEjercicio").html("");

                    } else {
                        alert("Error al eliminar la rutina.");
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

    let confirmarCreacionRutina = (event) => {

        event.preventDefault();

        $("body").css("visibility", "hidden");

        $(".popupCrearRutina").css("visibility", "visible");

    }

    let confimarEliminacionRutina = (event) => {

        event.preventDefault();

        if ($(".outputIDEjercicio").html() != "") {
            $(".popupEliminarRutina").css("visibility", "visible");
        } else {
            alert("No nay nada que eliminar!");
        }
    }


    $(".botonCrearRutina").click(confirmarCreacionRutina);
    $(".confirmarCrearRutina").click(crearRutina);

    $(".botonConsultarRutina").click(consultarRutina);

    $(".botonModificarRutina").click(modificarRutina);

    $(".botonEliminarRutina").click(eliminarRutina);
    $(".confirmarEliminarRutina").click(eliminarRutina);

})