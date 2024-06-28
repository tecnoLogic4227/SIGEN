document.addEventListener('DOMContentLoaded', function() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let currentYear = 2024;
    let currentMonth = 5; // Junio (0-indexed)

    const yearDisplay = document.getElementById('year-display');
    const monthDisplay = document.getElementById('month-display');
    const calendarBody = document.getElementById('calendar-body');

    const busyDays = {
        2024: {
            5: [1, 15, 30], // Junio: días ocupados
            6: [4, 18],     // Julio: días ocupados
        }
    };

    function renderCalendar() {
        yearDisplay.textContent = currentYear;
        monthDisplay.textContent = monthNames[currentMonth];

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        calendarBody.innerHTML = '';
        let date = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < firstDay) {
                    cell.textContent = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.textContent = date;
                    if (busyDays[currentYear] && busyDays[currentYear][currentMonth] && busyDays[currentYear][currentMonth].includes(date)) {
                        cell.classList.add('busy');
                    }
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
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

    document.getElementById('prev-year').addEventListener('click', function() {
        changeYear(-1);
    });

    document.getElementById('next-year').addEventListener('click', function() {
        changeYear(1);
    });

    document.getElementById('prev-month').addEventListener('click', function() {
        changeMonth(-1);
    });

    document.getElementById('next-month').addEventListener('click', function() {
        changeMonth(1);
    });

    renderCalendar();
});

