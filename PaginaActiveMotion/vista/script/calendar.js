$(function() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let currentYear = 2024;
    let currentMonth = 5; // Junio

    const $yearDisplay = $('#year-display');
    const $monthDisplay = $('#month-display');
    const $calendarBody = $('#calendar-body');

    // Inicialización de días ocupados y libres
    const busyDays = {
        2024: {
            5: [3, 5, 7, 18, 20, 21], // Junio: días ocupados inicialmente en verde
        }
    };

    const freeDays = {
        2024: {
            5: [4, 6, 10, 12, 14, 17, 19], // Junio: días libres inicialmente en verde
        }
    };

    // Función para renderizar el calendario
    function renderCalendar() {
        $yearDisplay.text(currentYear);
        $monthDisplay.text(monthNames[currentMonth]);

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        $calendarBody.empty();
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

                    // Verificar y asignar clase según esté ocupado o libre
                    if (busyDays[currentYear] && busyDays[currentYear][currentMonth] && busyDays[currentYear][currentMonth].includes(date)) {
                        $cell.addClass('busy');
                    } else if (freeDays[currentYear] && freeDays[currentYear][currentMonth] && freeDays[currentYear][currentMonth].includes(date)) {
                        $cell.addClass('free');
                    }

                    $row.append($cell);
                    date++;
                }
            }
            $calendarBody.append($row);
            if (date > daysInMonth) break;
        }
    }

    // Función para cambiar de mes
    function changeMonth(offset) {
        currentMonth += offset;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    }

    // Función para cambiar de año
    function changeYear(offset) {
        currentYear += offset;
        renderCalendar();
    }

    // Evento click para botón "Año Anterior"
    $('#prev-year').on('click', function() {
        changeYear(-1);
    });

    // Evento click para botón "Año Siguiente"
    $('#next-year').on('click', function() {
        changeYear(1);
    });

    // Evento click para botón "Mes Anterior"
    $('#prev-month').on('click', function() {
        changeMonth(-1);
    });

    // Evento click para botón "Mes Siguiente"
    $('#next-month').on('click', function() {
        changeMonth(1);
    });

    // Evento click para botón "Ingresar"
    $('#ingresar').on('click', function() {
        const fecha = $('#fecha-agenda').val();
        const [day, month, year] = fecha.split('/').map(Number);
        if (year === currentYear && month - 1 === currentMonth) {
            // Si el día está en días libres, marcar como ocupado y eliminar de libres
            if (freeDays[currentYear] && freeDays[currentYear][currentMonth] && freeDays[currentYear][currentMonth].includes(day)) {
                freeDays[currentYear][currentMonth] = freeDays[currentYear][currentMonth].filter(d => d !== day);
                busyDays[currentYear][currentMonth] = busyDays[currentYear][currentMonth] || [];
                busyDays[currentYear][currentMonth].push(day);
            } else {
                // Si el día no está en días ocupados, marcar como ocupado
                busyDays[currentYear] = busyDays[currentYear] || {};
                busyDays[currentYear][currentMonth] = busyDays[currentYear][currentMonth] || [];
                busyDays[currentYear][currentMonth].push(day);
            }
            renderCalendar();
        }
    });

    // Evento click para botón "Eliminar"
    $('#eliminar').on('click', function() {
        const fecha = $('#fecha-agenda').val();
        const [day, month, year] = fecha.split('/').map(Number);
        if (year === currentYear && month - 1 === currentMonth) {
            // Si el día está en días ocupados, marcar como libre y eliminar de ocupados
            if (busyDays[currentYear] && busyDays[currentYear][currentMonth] && busyDays[currentYear][currentMonth].includes(day)) {
                busyDays[currentYear][currentMonth] = busyDays[currentYear][currentMonth].filter(d => d !== day);
                freeDays[currentYear][currentMonth] = freeDays[currentYear][currentMonth] || [];
                freeDays[currentYear][currentMonth].push(day);
                renderCalendar();
            }
        }
    });

    renderCalendar(); // Llamar a renderCalendar() al inicio para mostrar el calendario inicial
});
