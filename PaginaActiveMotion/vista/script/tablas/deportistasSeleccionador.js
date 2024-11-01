$(document).ready(() => {
    let ci;

    const limpiarCampos = () => {
        $(".outputTablaCi").html("");
        $(".outputTablaNombre").html("");
        $(".outputTablaApellido").html("");
        $(".outputTablaActividad").html("");
        $(".outputTablaEstado").html("");
        $(".outputTablaC").html("");
        $(".outputTablaRA").html("");
        $(".outputTablaFM").html("");
        $(".outputTablaRM").html("");
        $(".outputTablaF").html("");
        $(".outputTablaRalM").html("");
        $(".outputTablaR").html("");
    }

    const recibirDatos = (ci, metodo, tabla) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                metodo: metodo,
                tabla: tabla,
                ci: ci
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta.length > 0) {
                        limpiarCampos();
                        respuesta.forEach(elemento => {
                            $(".outputTablaCi").append(`<td>${elemento.ci}</td>`);
                            $(".outputTablaNombre").append(`<td>${elemento.nombre}</td>`);
                            $(".outputTablaApellido").append(`<td>${elemento.apellido}</td>`);
                            $(".outputTablaActividad").append(`<td>${elemento.actividad}</td>`);
                            $(".outputTablaEstado").append(`<td>${elemento.estado}</td>`);
                            $(".outputTablaC").append(`<td>${elemento.cumplimiento_agenda}</td>`);
                            $(".outputTablaRA").append(`<td>${elemento.resistencia_anaerobica}</td>`);
                            $(".outputTablaFM").append(`<td>${elemento.fuerza_muscular}</td>`);
                            $(".outputTablaRM").append(`<td>${elemento.resistencia_muscular}</td>`);
                            $(".outputTablaF").append(`<td>${elemento.flexibilidad}</td>`);
                            $(".outputTablaRalM").append(`<td>${elemento.resistencia_monotonia}</td>`);
                            $(".outputTablaR").append(`<td>${elemento.resiliencia}</td>`);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        limpiarCampos();
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    const datos = (event) => {
        event.preventDefault();
        limpiarCampos();
        ci = $(".inputDeportistasSeleccionadorCi").val();        
        recibirDatos(ci, "GET", "deportistasSeleccionador");
    }

    $(".botonDeportistasSeleccionador").click(datos);
});