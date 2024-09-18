import {search} from "buscadores/buscadorPlanEntrenamiento";

$(document).ready(() => {
    

    let tabla, typeRequest, par1, par2;

    let eliminarRutina = (event) => {

        event.preventDefault();

        par1 = search;
        par2 = "";

        $(".popupEliminarRutina").css("visibility", "hidden");

        tabla = "rutina";
        typeRequest = "delete";


        $.ajax({
            url: "http://localhost/paginaactivemotion/controlador/crud/delete.php",
            type: "POST",
            data: {
                tabla: tabla,
                typeRequest: typeRequest,
                par1: par1,
                par2: par2
            },
            success: (response) => {

                try {
                    console.log(response);

                    let respuesta = JSON.parse(response);

                    if (respuesta == true) {
                        console.log("Rutina eliminada correctamente.");
                    } else {
                        console.log("Error: " + respuesta);
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

    let confimarEliminacionRutina = (event) => {

        event.preventDefault();

        if ($(".outputIDEjercicio").html() != "") {
            $(".popupEliminarRutina").css("visibility", "visible");
        } else {
            alert("No nay nada que eliminar!");
        }
    }

    $(".confirmarEliminarRutina").click(eliminarRutina);
    $(".botonEliminarRutina").click(confimarEliminacionRutina);
})