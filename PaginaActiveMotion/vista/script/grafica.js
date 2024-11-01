$(document).ready(function() {
    let semanaActual = 0;
    const semanasData = [];

    // Configura el evento de clic en el botón de guardar
    $("#usuarioClienteModificar").on("click", function(event) {
        event.preventDefault();

        // Captura los valores ingresados usando jQuery y asigna un valor 0 por defecto si están vacíos
        const cumplimientoAgenda = parseInt($("#cumplimientoAgenda").val()) || 0;
        const resistenciaAnaerobica = parseInt($("#resistenciaAnaerobica").val()) || 0;
        const fuerzaMuscular = parseInt($("#fuerzaMuscular").val()) || 0;
        const resistenciaMuscular = parseInt($("#resistenciaMuscular").val()) || 0;
        const flexibilidad = parseInt($("#flexibilidad").val()) || 0;
        const resistenciaMonotonia = parseInt($("#resistenciaMonotonia").val()) || 0;
        const resiliencia = parseInt($("#resiliencia").val()) || 0;

        // Añade los datos de la semana actual a semanasData
        semanasData.push({
            label: `Semana ${semanasData.length + 1}`,
            data: {
                cumplimientoAgenda,
                resistenciaAnaerobica,
                fuerzaMuscular,
                resistenciaMuscular,
                flexibilidad,
                resistenciaMonotonia,
                resiliencia
            }
        });

        // Muestra la última semana ingresada
        semanaActual = semanasData.length - 1;
        mostrarSemana(semanaActual);
    });

    // Configuración inicial de la gráfica
    const ctx = $("#graficaEntrenador")[0].getContext("2d");
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                { label: "Cumplimiento con la agenda", data: [], borderColor: 'rgba(248, 37, 37, 0.8)', fill: false },
                { label: "Resistencia anaeróbica", data: [], borderColor: 'rgba(69, 248, 84, 0.8)', fill: false },
                { label: "Fuerza muscular", data: [], borderColor: 'rgba(69, 140, 248, 0.8)', fill: false },
                { label: "Resistencia muscular", data: [], borderColor: 'rgba(255, 136, 0)', fill: false },
                { label: "Flexibilidad", data: [], borderColor: 'rgba(251, 255, 0, 0.8)', fill: false },
                { label: "Resistencia a la monotonía", data: [], borderColor: 'rgba(9, 255, 0, 0.8)', fill: false },
                { label: "Resiliencia", data: [], borderColor: 'rgba(245, 40, 145, 0.8)', fill: false }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: 'Semana' } },
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    title: { display: true, text: 'Valor' }
                }
            }
        }
    });

    // Función para mostrar datos de una semana específica en la gráfica
    function mostrarSemana(semanaIndex) {
        const semana = semanasData[semanaIndex];

        chart.data.labels = [semana.label];
        chart.data.datasets[0].data = [semana.data.cumplimientoAgenda];
        chart.data.datasets[1].data = [semana.data.resistenciaAnaerobica];
        chart.data.datasets[2].data = [semana.data.fuerzaMuscular];
        chart.data.datasets[3].data = [semana.data.resistenciaMuscular];
        chart.data.datasets[4].data = [semana.data.flexibilidad];
        chart.data.datasets[5].data = [semana.data.resistenciaMonotonia];
        chart.data.datasets[6].data = [semana.data.resiliencia];

        chart.update();
    }

    // Manejo de eventos para las flechas de navegación
    $("#flechaIzquierda").on("click", function() {
        if (semanaActual > 0) {
            semanaActual--;
            mostrarSemana(semanaActual);
        }
    });

    $("#flechaDerecha").on("click", function() {
        if (semanaActual < semanasData.length - 1) {
            semanaActual++;
            mostrarSemana(semanaActual);
        }
    });
});

