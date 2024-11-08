var fechasDestacadas = [];
$(document).ready(() => {

    console.log("jQuery Loaded:", $.fn.jquery);
    console.log("jQuery UI Loaded:", $.ui); //

    window.recibirFechas = (respuesta) => {
        fechasDestacadas = [];
        respuesta.forEach(elemento => {
            let fecha = {
                fecha: elemento.fecha,
                hora: elemento.hora,
                turno: elemento.turno_agenda,
            }
            fechasDestacadas.push(fecha);
        });

        console.log(fechasDestacadas);

        let today = new Date();
        today.setHours(0, 0, 0, 0); // Ignorar la hora para comparar solo la fecha

        $("#calendario").datepicker({
            beforeShowDay: function (date) {
                let fechaStr = $.datepicker.formatDate("yy-mm-dd", date);
                console.log(fechasDestacadas.find(item => item.fecha === fechaStr));
                let fechaDestacada = fechasDestacadas.find(item => item.fecha === fechaStr);
            
                if (fechaDestacada) {
                    if (date < today) {
                        return [true, "highlight-past", "Fecha pasada"];
                    } else if (date.getTime() === today.getTime()) {
                        return [true, "highlight-today", "Fecha de hoy"];
                    } else {
                        return [true, "highlight-future", "Fecha futura"];
                    }
                }
                return [true, "", ""];
            },            
            onSelect: function (dateText) {
                let selectedDate = $.datepicker.formatDate("yy-mm-dd", new Date(dateText));
                let info = fechasDestacadas.find(item => item.fecha === selectedDate);

                if (info) {
                    $('#fechaTurno').text(selectedDate);
                    $('#horaTurno').text(info.hora);
                    $('#turnoTurno').text(info.turno);
                } else {
                    $('#fechaTurno').text(selectedDate);
                    $('#horaTurno').text('No disponible');
                    $('#turnoTurno').text('No disponible');
                }
            }
        });
    }

});
