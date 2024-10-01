$(document).ready(() => {

    let tabla, par1, par2, par3, par4, par5, par6, par7, par8;

    tabla = "";
    par1 = "";
    par2 = "";
    par3 = "";
    par4 = "";
    par5 = "";
    par6 = "";
    par7 = "";
    par8 = "";

    let verificarDatos

    let crearRutina = (event) => {

        tabla = "rutina";

        event.preventDefault();

        par1 = ($(".inputParametro1").val());

        $("body").css("visibility", "visible");

        $(".popupCrearRutina").css("visibility", "hidden");

        $.ajax({
            url: "http://localhost/sigen/paginaactivemotion/controlador/crud/create.php",
            type: "POST",
            data: {
                tabla: tabla,
                par1: par1,
                par2: par2,
                par3: par3,
                par4: par4,
                par5: par5,
                par6: par6,
                par7: par7,
                par8: par8,
            },
            success: (response) => {

                try {

                    let respuesta = JSON.parse(response);

                    if (respuesta == true) {

                        alert(`${tabla} creado/a correctamente.`);

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

        event.preventDefault();



    }

    let consultarRutina = (event) => {

    }

    let modificarRutina = (event) => {

    }

    let eliminarRutina = (event) => {

        event.preventDefault();

        par1 = search;
        par2 = "";

        $("body").css("visibility", "visible");

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

        if ($(".outputEjercicioRutina").html() != "ID: ") {

            $("body").css("visibility", "hidden");

            $(".popupEliminarRutina").css("visibility", "visible");
            
        } else {
            alert("No nay nada que eliminar!");
        }

    }


    $(".botonCrearRutina").click(confirmarCreacionRutina);
    $(".confirmarCrearRutina").click(crearRutina);

    $(".botonConsultarRutina").click(consultarRutina);

    $(".botonModificarRutina").click(modificarRutina);

    $(".botonEliminarRutina").click(confimarEliminacionRutina);
    $(".confirmarEliminarRutina").click(eliminarRutina);

})