$(document).ready(() => {

    let validarID = search => {

        search = search.trim();

        if (search.length < 1) {
            return false;
        }

        for (let i = 0; i < search.length; i++) {
            if (isNaN(search[i])) {
                return false;
            }
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
                    let equipos = JSON.parse(response);

                    if (equipos.length > 0) {

                        equipos.forEach(equipo => {
                            $(".outputEquipoID").html(equipo.id_equipo);
                            $(".outputEquipoNombre").html(equipo.nombre_equipo);
                            $(".outputEquipoCantidad").html(equipo.cantidad);
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

        let search = $(".inputEquipoBuscador").val();
        const type = "equipo";

        if (validarID(search)) {
            pasarDatos(search, type);
        } else {
            alert("Por favor ingrese un ID válido!");
        }
    }

    let limpiar = () => {

        $(".outputEquipoID").html("");
        $(".outputEquipoNombre").html("");
        $(".outputEquipoCantidad").html("");

        ingresarDatos();
    }

    $(".botonEquipoBuscador").click(limpiar);
});