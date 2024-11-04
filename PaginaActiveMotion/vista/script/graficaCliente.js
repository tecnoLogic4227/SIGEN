$(document).ready(() => {
    let tabla = "calificacionCliente";
    let metodo = "GET";
    let ci = sessionStorage.getItem("ci");

    // Crear la gráfica con Chart.js
    const ctx = $('#graficaEntrenador')[0].getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Cumplimiento Agenda', 'Resistencia Anaeróbica', 'Fuerza Muscular', 'Resistencia Muscular', 'Flexibilidad', 'Resistencia a la Monotonía', 'Resiliencia'],
            datasets: [{
                label: 'Calificación (sobre 20)',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 20
                }
            }
        }
    });

    // Función para actualizar la gráfica con un arreglo de datos
    // La definimos globalmente para permitir acceso desde otros archivos
    window.actualizarGrafica = (calificaciones) => {
        // Actualizar la gráfica con las calificaciones recibidas
        chart.data.datasets[0].data = calificaciones;
        chart.update();

        // Calcular el puntaje total
        let totalPuntos = calificaciones.reduce((sum, val) => sum + val, 0);

        // Actualizar el puntaje total en la página
        $('#puntajeTotal').text(totalPuntos);

        // Verificar requisitos y mostrar mensaje
        let itemsBajos = calificaciones
            .map((calificacion, index) => calificacion < 10 ? chart.data.labels[index] : null)
            .filter(item => item !== null);

        let mensaje = "";
        if (totalPuntos >= 80 && itemsBajos.length === 0) {
            mensaje = `Aprobado! La nota es: ${totalPuntos}`;
        } else if (totalPuntos < 80) {
            mensaje = "No aprueba porque tiene menos de los puntos mínimos (80).";
        } else if (itemsBajos.length > 0) {
            mensaje = `No aprueba porque tiene ítem/s bajo/s: ${itemsBajos.join(", ")}.`;
        }

        // Mostrar el mensaje final
        alert(mensaje);
    };

    // Función para recibir calificación y procesar los datos para la gráfica
    const recibirCalificacion = (ci, tabla, metodo) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                ci: ci,
                tabla: tabla,
                metodo: metodo
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    $(".outputEstadoCliente").html("");

                    if (respuesta && respuesta.length > 0) {
                        let datos = respuesta[0];

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
                        alert("Usted no tiene calificación.");
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

    // Llamar a la función para obtener los datos y actualizar la gráfica semanalmente
    let pagina = window.location.href;
    if (pagina == "http://localhost/sigen/paginaactivemotion/vista/html/cliente/evolucionUsuario.html") {
        recibirCalificacion(ci, tabla, metodo);
    }

    let contenido= ['Cumplimiento Agenda', 'Resistencia Anaeróbica', 'Fuerza Muscular', 'Resistencia Muscular', 'Flexibilidad', 'Resistencia a la Monotonía', 'Resiliencia'];
    let mensaje='Calificacion';

    $('#langToggle').click(function() {
        const currentLang = $(this).text() === 'EN' ? 'en' : 'es';
        
        if (currentLang == 'en' || currentLang == 'EN') {
            contenido = ['Agenda Fulfillment', 'Anaerobic Endurance', 'Muscle Strength', 'Muscle Endurance', 'Flexibility', 'Resistance to Monotony', 'Resilience'];
            mensaje='Qualification';
        } else {
            contenido = ['Cumplimiento Agenda', 'Resistencia Anaeróbica', 'Fuerza Muscular', 'Resistencia Muscular', 'Flexibilidad', 'Resistencia a la Monotonía', 'Resiliencia'];
            mensaje='Calificacion';
        }

        // Actualizar etiquetas de la gráfica y redibujar
        chart.data.labels = contenido;
        chart.data.datasets[0].label = mensaje;
        chart.update(); // Forzar actualización de la gráfica
    });
});
