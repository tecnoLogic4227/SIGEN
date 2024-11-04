$(document).ready(function() {
    // Inicializar los datos y las semanas para la gráfica
    let semanasData = {};
    let semanaActual = 0;
    let contenido= ['Cumplimiento Agenda', 'Resistencia Anaeróbica', 'Fuerza Muscular', 'Resistencia Muscular', 'Flexibilidad', 'Resistencia a la Monotonía', 'Resiliencia'];
    let mensaje='Calificacion';

    $('#langToggle').click(function() {
        const currentLang = $(this).text() === 'EN' ? 'en' : 'es';
        
        if (currentLang == 'en') {
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

    // Crear la gráfica con Chart.js
    const ctx = $('#graficaEntrenador')[0].getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: contenido,
            datasets: [{
                label: mensaje,
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
                    max: 10
                }
            }
        }
    });

    // Función para actualizar la gráfica con los datos de la semana actual
    function actualizarGrafica() {
        const datosSemana = semanasData[semanaActual] || [];
        chart.data.datasets[0].data = datosSemana;
        chart.update();
    }

    // Escuchar el botón de guardar para capturar los datos del formulario y actualizar la gráfica
    $('#usuarioClienteModificar').click(function() {
        const cumplimientoAgenda = parseFloat($('#cumplimientoAgenda').val());
        const resistenciaAnaerobica = parseFloat($('#resistenciaAnaerobica').val());
        const fuerzaMuscular = parseFloat($('#fuerzaMuscular').val());
        const resistenciaMuscular = parseFloat($('#resistenciaMuscular').val());
        const flexibilidad = parseFloat($('#flexibilidad').val());
        const resistenciaMonotonia = parseFloat($('#resistenciaMonotonia').val());
        const resiliencia = parseFloat($('#resiliencia').val());

        // Almacenar los datos ingresados en la semana actual
        semanasData[semanaActual] = [
            cumplimientoAgenda, 
            resistenciaAnaerobica, 
            fuerzaMuscular, 
            resistenciaMuscular, 
            flexibilidad, 
            resistenciaMonotonia, 
            resiliencia
        ];

        // Actualizar la gráfica
        actualizarGrafica();
    });

    // Función para cambiar de semana
    function cambiarSemana(direccion) {
        semanaActual += direccion;
        if (!semanasData[semanaActual]) {
            semanasData[semanaActual] = [];  // Crear datos vacíos si no existen
        }
        actualizarGrafica();
    }

    // Botones de navegación entre semanas
    $('<button class="btn-semana-anterior">Semana Anterior</button>').appendTo('.graficaEntrenador').click(() => cambiarSemana(-1));
    $('<button class="btn-semana-siguiente">Semana Siguiente</button>').appendTo('.graficaEntrenador').click(() => cambiarSemana(1));
});
