const labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4']

const cumplimientoAgenda = {
    label: "Cumplimiento con la agenda",
    data: [25, 68, 54, 77],
    borderColor: 'rgba(248, 37, 37, 0.8)',
    fill: false,
    tension: 0.1
};

const resistenciaAnaeróbica = {
    label: "Resistencia anaeróbica",
    data: [32, 91, 86, 110],
    borderColor: 'rgba(69, 248, 84, 0.8)',
    fill: false,
    tension: 0.1
};

const fuerzaMuscular = {
    label: "Fuerza muscular",
    data: [47, 103, 92, 129],
    borderColor: 'rgba(69, 140, 248, 0.8)',
    fill: false,
    tension: 0.1
};

const flexibilidad = {
    label: "Flexibilidad",
    data: [38, 85, 73, 102],
    borderColor: 'rgba(251, 255, 0, 0.8)',
    fill: false,
    tension: 0.1
};

const resistenciaMonotonía = {
    label: "Resistencia a la monotonía",
    data: [29, 71, 66, 94],
    borderColor: 'rgba(9, 255, 0, 0.8)',
    fill: false,
    tension: 0.1
};

const resiliencia = {
    label: "Resiliencia",
    data: [43, 108, 95, 121],
    borderColor: 'rgba(245, 40, 145, 0.8)',
    fill: false,
    tension: 0.1
};

const $graph = $("#graficaSeleccionador, #grafica");

const data = {
    labels: labels,
    datasets: [cumplimientoAgenda, resistenciaAnaeróbica, fuerzaMuscular, flexibilidad, resistenciaMonotonía, resiliencia]
};

const config = {
    type: 'line',
    data: data,
};

if ($graph.length) {
    new Chart($graph[0], config);
} else {
    console.error('Elemento del gráfico no encontrado');
}