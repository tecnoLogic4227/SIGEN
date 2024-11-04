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
                    $(".outputEstadoCliente").html("");

                    if (respuesta && respuesta.length > 0) {
                        let datos = respuesta[0];

                        $(".outputTablaCi").append(`<td>${datos.ci}</td>`);
                            $(".outputTablaNombre").append(`<td>${datos.nombre}</td>`);
                            $(".outputTablaApellido").append(`<td>${datos.apellido}</td>`);
                            $(".outputTablaActividad").append(`<td>${datos.actividad}</td>`);
                            $(".outputTablaEstado").append(`<td>${datos.estado}</td>`);
                            $(".outputTablaC").append(`<td>${datos.cumplimiento_agenda}</td>`);
                            $(".outputTablaRA").append(`<td>${datos.resistencia_anaerobica}</td>`);
                            $(".outputTablaFM").append(`<td>${datos.fuerza_muscular}</td>`);
                            $(".outputTablaRM").append(`<td>${datos.resistencia_muscular}</td>`);
                            $(".outputTablaF").append(`<td>${datos.flexibilidad}</td>`);
                            $(".outputTablaRalM").append(`<td>${datos.resistencia_monotonia}</td>`);
                            $(".outputTablaR").append(`<td>${datos.resiliencia}</td>`);

                        // Crear un arreglo de calificaciones limitado a un máximo de 20 puntos por ítem
                        let calificaciones = [
                            Math.min(datos.cumplimiento_agenda, 20),
                            Math.min(datos.resistencia_anaerobica, 20),
                            Math.min(datos.fuerza_muscular, 20),
                            Math.min(datos.resistencia_muscular, 20),
                            Math.min(datos.flexibilidad, 20),
                            Math.min(datos.resistencia_monotonia, 20),
                            Math.min(datos.resiliencia, 20)
                        ];

                        // Mostrar el estado si existe
                        $(".outputEstadoCliente").html(datos.estado);

                        // Llamar a la función externa para actualizar la gráfica con el arreglo de datos
                        actualizarGrafica(calificaciones);

                    } else {
                        alert("El cliente ingresado no tiene calificación.");
                        $(".outputEstadoCliente").html("Sin datos de calificación.");
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