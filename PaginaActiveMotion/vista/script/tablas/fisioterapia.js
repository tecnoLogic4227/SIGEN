$(document).ready(() => {
    let idFisioterapia, nombreFisioterapia, tipoFisioterapia, descripcion, metodo;
    const tabla = "fisioterapia";
    datos = "";

    const listarFisioterapia = (datos) => {
        metodo = "GET";
        $.ajax({
            url: "../../controlador/crud/crudController.php",
            type: "GET",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let fisioterapia = JSON.parse(response);
                    if (fisioterapia.length > 0) {
                        $(".tablaFisioterapia tbody").html("");
                        let tbody = $(".tablaFisioterapia tbody");
                        fisioterapia.forEach(fisioterapia1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${fisioterapia1.idFisioterapia}</td>`);
                            tr.append(`<td>${fisioterapia.nombreFisioterapia}</td>`);
                            tr.append(`<td>${fisioterapia1.tipoFisioterapia}</td>`);
                            tr.append(`<td>${fisioterapia1.descripcion}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        alert("No se encontraron resultados.");
                        $(".tablaFisioterapia tbody").html("");
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    const manejarSolicitud = (metodo, datos, exitoMensaje, errorMensaje) => {
        $.ajax({
            url: "../../../controlador/crud/crudController.php",
            type: "POST",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta == true) {
                        alert(exitoMensaje);
                        datos = "";
                        listarFisioterapia(datos);
                    } else {
                        alert(errorMensaje);
                    }
                } catch (e) {
                    console.log("Error al parsear el JSON: " + e);
                }
            },
            error: (xhr, status, error) => {
                console.log("La solicitud AJAX falló: " + error);
            }
        });
    };

    const crearFisioterapia = (idFisioterapia, nombreFisioterapia, tipoFisioterapia, descripcion) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idFisioterapia: idFisioterapia,
            nombreFisioterapia: nombreFisioterapia,
            tipoFisioterapia: tipoFisioterapia,
            descripcion: descripcion,
        }, "Fisioterapia creado correctamente.", "Error al crear Fisioterapia.");
    };

    const datosCrearFisioterapia = (event) => {
        event.preventDefault();
        idFisioterapia = $(".inputCrearFisioterapiaIdFisioterapia").val();
        nombreFisioterapia = $(".inputCrearFisioterapiaNombreFisioterapia").val();
        tipoFisioterapia = $(".inputCrearFisioterapiaTipoFisioterapia").val();
        descripcion = $(".inputCrearFisioterapiaDescripcion").val();
        crearFisioterapia(idFisioterapia, nombreFisioterapia, tipoFisioterapia, descripcion);
    };

    listarFisioterapia(datos);

    const buscarFisioterapia = (idFisioterapia) => {
        listarFisioterapia({
            tabla: tabla,
            idFisioterapia: idFisioterapia
        });
    };

    const datosBuscarFisioterapia = (event) => {
        event.preventDefault();
        idFisioterapia = $(".inputBuscarFisioterapiaIdFisioterapia").val();
        buscarFisioterapia(idFisioterapia);
    };

    const modificarFisioterapia = (event) => {
        event.preventDefault();
        idFisioterapia = $(".inputCrearFisioterapiaIdFisioterapia").val();
        nombreFisioterapia = $(".inputCrearFisioterapiaNombreFisioterapia").val();
        tipoFisioterapia = $(".inputCrearFisioterapiaTipoFisioterapia").val();
        descripcion = $(".inputCrearFisioterapiaDescripcion").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idFisioterapia: idFisioterapia,
            nombreFisioterapia: nombreFisioterapia,
            tipoFisioterapia: tipoFisioterapia,
            descripcion: descripcion,
        }, "Fisioterapia modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarFisioterapia = (event) => {
        event.preventDefault();
        idFisioterapia = $(".inputBuscarFisioterapiaIdFisioterapia").val();

        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idFisioterapia: idFisioterapia
        }, "Fisioterapia eliminado correctamente.", "Error al eliminar Fisioterapia.");
    };

    const confirmarCrearFisioterapia = () => {
        limpiarPantalla();
        $(".confirmarCrearFisioterapia").css("display", "block");
    }

    const confirmarModificarFisioterapia = () => {
        limpiarPantalla();
        $(".confirmarModificarFisioterapia").css("display", "block");
    }

    const confirmarEliminarFisioterapia = () => {
        limpiarPantalla();
        $(".confirmarEliminarFisioterapia").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearFisioterapia").css("display", "none");
        $(".confirmarModificarFisioterapia").css("display", "none");
        $(".confirmarEliminarFisioterapia").css("display", "none");
    }

    $(".fisioterapiaCrear").click(confirmarCrearFisioterapia);
    $(".fisioterapiaConfirmarCrear").click(datosCrearFisioterapia);
    $(".fisioterapiaBuscar").click(datosBuscarFisioterapia);
    $(".fisioterapiaModificar").click(confirmarModificarFisioterapia);
    $(".fisioterapiaConfirmarModificar").click(modificarFisioterapia);
    $(".fisioterapiaEliminar").click(confirmarEliminarFisioterapia);
    $(".fisioterapiaConfirmarEliminar").click(eliminarFisioterapia);

    $(".fisioterapiaCancelarCrear").click(limpiarPantalla);
    $(".fisioterapiaCancelarModificar").click(limpiarPantalla);
    $(".fisioterapiaCancelarEliminar").click(limpiarPantalla);

});
