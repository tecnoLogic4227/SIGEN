$(document).ready(() => {

    let validarCedula = search => {

        search = search.trim();

        if (search.length < 7 || search.length > 8) {
            return false;
        }

        for (let i = 0; i < search.length; i++) {
            if (isNaN(search[i])) {
                return false;
            }
        }

        if (search.length == 7) {
            search = '0' + search;
        }

        let resultado = 0;
        let algoritmoCI = [2, 9, 8, 7, 6, 3, 4];

        for (let i = 0; i < algoritmoCI.length; i++) {
            resultado += algoritmoCI[i] * parseInt(search[i]);
        }

        let digitoCalculado = (resultado % 10 === 0) ? 0 : 10 - (resultado % 10);

        if (parseInt(search[search.length - 1]) != digitoCalculado) {
            return false;
        }

        return true;
    }


    let pasarDatos = (search, type) => {

        event.preventDefault();

        $.ajax({
            url: "http://localhost/paginaactivemotion/controlador/controladorBusqueda.php",
            type: "POST",
            data: {
                search: search,
                type: type,
            },
            success: (response) => {

                try {
                    let paginaActual = window.location.href;

                    if (paginaActual == "http://localhost/paginaactivemotion/vista/html/entrenador/buscarClientesEntrenador.html") {

                        window.location.href = "http://localhost/paginaactivemotion/vista/html/entrenador/detallesclienteentrenador.html";
                        return;
                    }

                    let clientes = JSON.parse(response);

                    if (clientes.length > 0) {

                        clientes.forEach(cliente => {

                            let calcularProxPago = cliente => {
                                let ultimoPago = cliente;
                                let fechaPago = new Date(ultimoPago);

                                let diaActual = fechaPago.getDate();

                                fechaPago.setMonth(fechaPago.getMonth() + 1);

                                return fechaPago.toISOString().split('T')[0];
                            }


                            let proximoPago = calcularProxPago(cliente.fecha);

                            $(".outputClienteCI").html(cliente.ci)
                            $(".outputClienteUltimoLogin").html(cliente.ultimo_login);
                            $(".outputClienteFechaNacimiento").html(cliente.fecha_nac);
                            $(".outputClienteNombre").html(cliente.nombre);
                            $(".outputClienteApellido").html(cliente.apellido);
                            $(".outputClienteDireccion").html(cliente.direccion);
                            $(".outputClienteEmail").html(cliente.email);

                            $(".outputClienteTelefono").html(cliente.telefono);

                            $(".outputClienteActividad").html(cliente.actividad);
                            $(".outputClienteEstadoActividad").html(cliente.estado_actividad);
                            $(".outputClienteCalificacion").html(cliente.calificacion);
                            $(".outputClienteEstado").html(cliente.estado);
                            $(".outputClienteUltimoPago").html(cliente.fecha);
                            $(".outputClienteProximoPago").html(proximoPago);
                        });

                    } else {
                        alert("No se encontraron resultados.");
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        })

    }

    let ingresarDatos = () => {

        let search = $(".inputClienteBuscador").val();
        const type = "cliente";

        if (validarCedula(search)) {
            pasarDatos(search, type);
        } else {
            alert("Por favor ingrese una cedula válida!");
        }
    }

    let limpiar = () => {

        $(".outputClienteCi").html("");
        $(".outputClienteUltimoLogin").html("");
        $(".outputClienteFechaNacimiento").html("");
        $(".outputClienteNombre").html("");
        $(".outputClienteApellido").html("");
        $(".outputClienteDireccion").html("");
        $(".outputClienteEmail").html("");
        $(".outputClienteTelefono").html("");
        $(".outputClienteActividad").html("");
        $(".outputClienteEstadoActividad").html("");
        $(".outputClienteCalificacion").html("");
        $(".outputClienteEstado").html("");
        $(".outputClienteUltimoPago").html("");
        $(".outputClienteProximoPago").html("");

        ingresarDatos();
    }

    $(".botonClienteBuscador").click(limpiar);

});