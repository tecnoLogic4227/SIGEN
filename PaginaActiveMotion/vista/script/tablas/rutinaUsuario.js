$(document).ready(() => {
    let ci = 56472893;
    let tabla = "rutinaUsuario";
    let metodo = "GET";

    const buscarRutina = (ci, tabla, metodo) => {
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: {
                metodo: metodo,
                tabla: tabla,
                ci: ci,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
            
                    if (respuesta && respuesta.length > 0) {
                        $("#tablaRutinaUsuario tbody").html("");
                        $("#tablaEjerciciosUsuario tbody").html("");
                        let tbodyRutina = $("#tablaRutinaUsuario tbody");
                        let tbodyEjercicios = $("#tablaEjerciciosUsuario tbody");
            
                        let rutina = respuesta[0][0];
                        let trRutina = $("<tr></tr>");
                        trRutina.append(`<td>${rutina.id_rutina}</td>`);
                        trRutina.append(`<td>${rutina.nombre_rutina}</td>`);
                        tbodyRutina.append(trRutina);
            
                        let ejercicios = respuesta[1];
                        ejercicios.forEach(ejercicio => {
                            let trEjercicio = $("<tr></tr>");
                            trEjercicio.append(`<td>${ejercicio.id_ejercicio}</td>`);
                            trEjercicio.append(`<td>${ejercicio.nombre_ejercicio}</td>`);
                            trEjercicio.append(`<td>${ejercicio.nro_rep}</td>`);
                            trEjercicio.append(`<td>${ejercicio.nro_series}</td>`);
                            trEjercicio.append(`<td>${ejercicio.grupo_muscular}</td>`);
                            trEjercicio.append(`<td>${ejercicio.descripcion}</td>`);
                            tbodyEjercicios.append(trEjercicio);
                        });
                    } else {
                        alert("Usted no tiene una rutina asignada.");
                        $("#tablaRutinaUsuario tbody").html("");
                        $("#tablaEjerciciosUsuario tbody").html("");
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

    buscarRutina(ci, tabla, metodo);
});
