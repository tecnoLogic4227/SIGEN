$(document).ready(() => {
    let ci, metodo, idRutina;

    const listarClientes = (ci, metodo) => {
        const tabla = "asignarEntrenamiento";
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                tabla: tabla,
                metodo: metodo,
                ci: ci,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (asiste.length > 0) {
                        $(".tablaClientes tbody").html("");
                        let tbody = $(".tablaClientes tbody");
                        respuesta.forEach(elemento => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${elemento.ci}</td>`);
                            tr.append(`<td>${elemento.nombre}</td>`);
                            tr.append(`<td>${elemento.apellido}</td>`);
                            tr.append(`<td>${elemento.actividad}</td>`);
                            tr.append(`<td>${elemento.id_rutina}</td>`);
                            tbody.append(tr);              
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaClientes tbody").html("");
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

    const listarRutina = (idRutina, metodo) => {
        const tabla = "asignarEntrenamiento";
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                tabla: tabla,
                metodo: metodo,
                idRutina: idRutina,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (asiste.length > 0) {
                        $(".tablaRutinas tbody").html("");
                        let tbody = $(".tablaRutinas tbody");

                        respuesta[0].forEach(elemento => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${elemento.id_rutina}</td>`);
                            tr.append(`<td>${elemento.nombre_rutina}</td>`);
                            tbody.append(tr);              
                        });

                        respuesta[1].forEach(elemento => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${elemento.id_ejercicio}</td>`);
                            tr.append(`<td>${elemento.nombre_ejercicio}</td>`);
                            tr.append(`<td>${elemento.nro_rep}</td>`);
                            tr.append(`<td>${elemento.nro_series}</td>`);
                            tr.append(`<td>${elemento.grupo_muscular}</td>`);
                            tr.append(`<td>${elemento.descripcion}</td>`);
                            tbody.append(tr);              
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaRutinas tbody").html("");
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    }

    const manejarSolicitud = (data, metodo) => {
        const tabla = "asignarEntrenamiento";
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...data,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    }

    const buscarCliente = (event) => {
        event.preventDefault();
        ci = $(".inputAsignarCi").val();
        listarClientes(ci, "GET");
    }

    const buscarRutina = (event) => {
        event.preventDefault();
        idRutina = $(".inputAsignarIdRutina").val();
        listarRutina(ci, "GET");
    }

    // const modificarRutina = () => {

    // }

    $(".botonBuscarCliente").click(buscarCliente);
    $(".botonBuscarRutina").click(buscarRutina);

});