$(document).ready(() => {

    $("#result").hide();

    $("#botonBuscar").click(() => {
        let search = $("#datosBuscar").val();

        $.ajax({
            url: "buscador.php",
            type: "POST",
            data: { search },
            success: (response) => {
                let tasks = JSON.parse(response);
                let template = "";

                tasks.forEach(task => {
                    template += `<li>${task.id}</li>`;
                    template += `<li>${task.name}</li>`;
                    template += `<li>${task.description}</li>`;
                });

                $("#container").html(template);
                $("#result").show();
            }
        })
    })
})