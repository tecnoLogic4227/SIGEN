$(document).ready(() => {
    let tabla = "planCliente";
    let metodo = "GET";
    let ci;

    const calcularProximoPago = (tipoPlan, ultimoPago) => {

        if (ultimoPago === "0000-00-00" || !ultimoPago) {
            return "Fecha de último pago no disponible";
        }

        let fecha = new Date(ultimoPago);
    
        if (tipoPlan === "Basico") {
            fecha.setMonth(fecha.getMonth() + 1);
        } else if (tipoPlan === "Pack Verano" || tipoPlan === "Verano") {
            fecha.setMonth(fecha.getMonth() + 3);
        } else if (tipoPlan === "Elite" || tipoPlan === "Premium") {
            fecha.setMonth(fecha.getMonth() + 12);
        } else {
            return "Usted no tiene plan.";
        }
    
        return fecha.toISOString().split('T')[0];
    };
    

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
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta) {
                        $(".tablaPlanActualUsuario tbody").html("");
                        $(".tablaPagoActualUsuario tbody").html("");
                        let tablaPlan = $(".tablaPlanActualUsuario tbody");
                        let tablaPago = $(".tablaPagoActualUsuario tbody");

                        respuesta[0].forEach(elemento => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${elemento.tipo_plan}</td>`);
                            tablaPlan.append(tr);
                        });

                        let tipoPlan = respuesta[0][0].tipo_plan;

                        respuesta[1].forEach(elemento => {
                            tr = $("<tr></tr>");
                            tr.append(`<td>${elemento.id_ultimo_pago}</td>`);
                            tr.append(`<td>${elemento.hora}</td>`);
                            tr.append(`<td>${elemento.fecha}</td>`);
                            tr.append(`<td>${elemento.valor}</td>`);
                            tr.append(`<td>${calcularProximoPago(tipoPlan, elemento.fecha)}</td>`);
                            tablaPago.append(tr);
                        });
                    } else {
                        alert("Usted no tiene días agendados.");
                        // $("").html("");
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        })
    }

    ci = sessionStorage.getItem("ci");
    recibirDatosAgenda(ci, tabla, metodo);
})