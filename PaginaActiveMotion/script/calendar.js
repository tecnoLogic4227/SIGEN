$(function() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let currentYear = 2024;
    let currentMonth = 5; // Junio (0-indexed)

    const $yearDisplay = $('#year-display');
    const $monthDisplay = $('#month-display');
    const $calendarBody = $('#calendar-body');

    const busyDays = {
        2024: {
            5: [1, 15, 30], // Junio: días ocupados
            6: [4, 18],     // Julio: días ocupados
        }
    };

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
                    if (busyDays[currentYear] && busyDays[currentYear][currentMonth] && busyDays[currentYear][currentMonth].includes(date)) {
                        $cell.addClass('busy');
                    }
                    date++;
                }
                $row.append($cell);
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

    renderCalendar();
});