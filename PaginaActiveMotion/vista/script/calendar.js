$(function() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let currentYear = 2024;
    let currentMonth = 5; // Junio

    const $yearDisplay = $('#year-display');
    const $monthDisplay = $('#month-display');
    const $calendarBody = $('#calendar-body');

    // Inicialización de días ocupados y libres con horas
    const busyDays = {};
    const freeDays = {};

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
                    
                    const dayBusy = busyDays[currentYear]?.[currentMonth]?.[date] || [];
                    const dayFree = freeDays[currentYear]?.[currentMonth]?.[date] || [];
                    
                    if (dayBusy.length > 0) {
                        $cell.addClass('busy');
                    } else if (dayFree.length > 0) {
                        $cell.addClass('free');
                    }

                    $cell.appendTo($row);
                    date++;
                }
            }
            $calendarBody.append($row);
            if (date > daysInMonth) break;
        }
    }

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

    function changeYear(offset) {
        currentYear += offset;
        renderCalendar();
    }

    $('#prev-year').on('click', function() {
        changeYear(-1);
    });

    $('#next-year').on('click', function() {
        changeYear(1);
    });

    $('#prev-month').on('click', function() {
        changeMonth(-1);
    });

    $('#next-month').on('click', function() {
        changeMonth(1);
    });

    $('#ingresar').on('click', function(event) {
        event.preventDefault();
        const fecha = $('#fecha-agenda').val();
        const hora = $('#hora').val();
        const [year, month, day] = fecha.split('-').map(Number);

        if (!busyDays[year]) busyDays[year] = {};
        if (!busyDays[year][month - 1]) busyDays[year][month - 1] = {};
        if (!busyDays[year][month - 1][day]) busyDays[year][month - 1][day] = [];
        
        // Agregar la hora si no está ya presente
        if (!busyDays[year][month - 1][day].includes(hora)) {
            busyDays[year][month - 1][day].push(hora);
        }

        renderCalendar();
    });

    $('#eliminar').on('click', function(event) {
        event.preventDefault();
        const fecha = $('#fecha-agenda').val();
        const hora = $('#hora').val();
        const [year, month, day] = fecha.split('-').map(Number);

        const dayBusy = busyDays[year]?.[month - 1]?.[day];
        if (dayBusy) {
            busyDays[year][month - 1][day] = dayBusy.filter(h => h !== hora);
            if (busyDays[year][month - 1][day].length === 0) {
                delete busyDays[year][month - 1][day];
            }
        }

        renderCalendar();
    });

    renderCalendar();
});
