$(document).ready(() => {       

    let validarCedula = search => {
        let valida = true;

        search = search.trim();

        if (search.length != 8) {
            valida = false;
        }

        for (let i = 0; i < search.length; i++) {
            if (isNaN(search[i])) {
                valida = false;
                break;
            }
        }

        return valida;
    }

    let pasarDatos = (search, type) => {

        alert("a");

        $(".botonClienteCI").html("");
        $(".botonClienteNombre").html("");
        $(".botonClienteApellido").html("");
        $(".botonClienteActividad").html("");
        $(".botonClienteUltimoLogin").html("");
        $(".botonClienteFechaNacimiento").html("");
        $(".botonClienteEmail").html("");
        $(".botonClienteTelefono").html("");
        $(".botonClienteUltimoPago").html("");
        $(".botonClienteProximoPago").html("");

        $.ajax({
            url: "http://localhost/paginaactivemotion/controlador/controladorBusqueda.php",
            type: "POST",
            contentType: "application/json",
            data: {
                search: search,
                type: type,
            },
            success: (response) => {
                try {
                    let clientes = JSON.parse(response);

                    if (clientes.length > 0) {

                        clientes.forEach(cliente => {
                            $(".outputClienteCI").html(cliente.ci);
                            $(".outputClienteCalificacion").html(cliente.calificacion);
                            $(".outputClienteEstadoActividad").html(cliente.estado_actividad);
                            $(".outputClienteEstado").html(cliente.estado);
                            $(".outputClienteActividad").html(cliente.actividad);
                        });

                    } else {
                        alert("No se encontraron resultados.");
                    }
                } catch (e) {
                    alert("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                alert("La solicitud AJAX falló: " + error)
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

    $("#botonClienteBuscador").click(ingresarDatos);
})