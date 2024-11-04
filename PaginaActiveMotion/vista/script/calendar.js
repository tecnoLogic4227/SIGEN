$(document).ready(() => {
    let tabla = "agendaCliente";
    let metodo = "GET";
    let ci;
    const busyDays = {}; // Objeto para almacenar días ocupados
    const $calendarBody = $('#calendar');
    const $yearDisplay = $('#currentYear');
    const $monthDisplay = $('#currentMonth');
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    const recibirDatosAgenda = (ci, tabla, metodo) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                ci: ci,
                tabla: tabla,
                metodo: metodo,
            },
            success: (response) => {
                console.log("Respuesta del servidor:", response); // Log para la respuesta cruda
                try {
                    let respuesta = JSON.parse(response);
                    console.log("Datos procesados:", respuesta); // Log para los datos procesados
                    if (respuesta) {
                        respuesta.forEach(elemento => {
                            const { fecha, hora } = elemento; // Asegúrate que tu respuesta tenga 'fecha' y 'hora'
                            const [year, month, day] = fecha.split('-').map(Number);

                            if (!busyDays[year]) busyDays[year] = {};
                            if (!busyDays[year][month - 1]) busyDays[year][month - 1] = {};
                            if (!busyDays[year][month - 1][day]) busyDays[year][month - 1][day] = [];

                            // Agregar la hora si no está ya presente
                            if (!busyDays[year][month - 1][day].includes(hora)) {
                                busyDays[year][month - 1][day].push(hora);
                            }
                        });

                        console.log("busyDays:", busyDays); // Log para verificar que busyDays está lleno
                        renderCalendar(); // Llama a la función de renderizado
                    } else {
                        alert("Usted no tiene días agendados.");
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

    ci = sessionStorage.getItem("ci");
    recibirDatosAgenda(ci, tabla, metodo);
    
    function renderCalendar() {
        console.log("Renderizando calendario para:", currentYear, currentMonth); // Log para el año y mes
        $yearDisplay.text(currentYear);
        $monthDisplay.text(monthNames[currentMonth]);

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        $calendarBody.empty(); // Limpiar el calendario antes de llenarlo
        let date = 1;

        for (let i = 0; i < 6; i++) {
            const $row = $('<tr>');

            for (let j = 0; j < 7; j++) {
                const $cell = $('<td>');

                if (i === 0 && j < firstDay) {
                    $cell.text('');
                } else if (date > daysInMonth) {
                    break;
                } else {
                    $cell.text(date);

                    // Verificar si el día está ocupado
                    const dayBusy = busyDays[currentYear]?.[currentMonth]?.[date] || [];
                    
                    if (dayBusy.length > 0) {
                        $cell.addClass('busy'); // Agregar clase para días ocupados
                        $cell.attr('title', `Horas ocupadas: ${dayBusy.join(', ')}`); // Tooltip con horas
                    }

                    $cell.appendTo($row);
                    date++;
                }
            }
            $calendarBody.append($row);
            if (date > daysInMonth) break;
        }
    }
});
