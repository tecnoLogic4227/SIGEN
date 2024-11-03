$(document).ready(() => {
    let idInstitucion, nombreInstitucion, direccion, telefono, metodo;
    const tabla = "institucion";
    datos = "";

    const listarInstitucion = (datos) => {
        metodo = "GET";
        $.ajax({
            url: "../../../controlador/crudController.php",
            type: "GET",
            data: {
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let institucion = JSON.parse(response);
                    if (institucion.length > 0) {
                        $(".tablaInstitucion tbody").html("");
                        let tbody = $(".tablaInstitucion tbody");
                        institucion.forEach(institucion1 => {
                            let tr = $("<tr></tr>");
                            tr.append(`<td>${institucion1.id_institucion}</td>`);
                            tr.append(`<td>${institucion1.nombre_institucion}</td>`);
                            tr.append(`<td>${institucion1.direccion}</td>`);
                            tr.append(`<td>${institucion1.telefono}</td>`);
                            // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
                            // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
                            tbody.append(tr);
                        });
                    } else {
                        if (ci != "") {
                            alert("No se encontraron resultados.");
                        }                        
                        $(".tablaInstitucion tbody").html("");
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
            url: "../../../controlador/crudController.php",
            type: "POST",
            data: { 
                tabla: tabla,
                metodo: metodo,
                ...datos,
            },
            success: (response) => {
                try {
                    let respuesta = JSON.parse(response);
                    if (respuesta) {
                        alert(exitoMensaje);
                        datos = "";
                        listarInstitucion(datos);
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

    const crearInstitucion = (idInstitucion, nombreInstitucion, direccion, telefono) => {
        limpiarPantalla();
        manejarSolicitud("POST", {
            idInstitucion: idInstitucion,
            nombreInstitucion: nombreInstitucion,
            direccion: direccion,
            telefono: telefono,
        }, "Institucion creado correctamente.", "Error al crear Institucion.");
    };

    const datosCrearInstitucion = (event) => {
        event.preventDefault();
        nombreInstitucion = $(".inputCrearInstitucionNombreInstitucion").val();
        direccion = $(".inputCrearInstitucionDireccion").val();
        telefono = $(".inputCrearInstitucionTelefono").val();
        if (!filtroPalabra(nombreInstitucion)) {
            alert("Nombre no válido.");
            return;
        }
        if (!filtroDireccion(direccion)) {
            alert("Dirección no válida.");
            return;
        }
        if (!filtroTelefono(telefono)) {
            alert("Teléfono no válido.");
            return;
        }
        crearInstitucion(idInstitucion, nombreInstitucion, direccion, telefono);
    };

    listarInstitucion(datos);

    const buscarInstitucion = (idInstitucion) => {
        listarInstitucion({
            tabla: tabla,
            idInstitucion: idInstitucion,
        });
    };

    const datosBuscarInstitucion = (event) => {
        event.preventDefault();
        idInstitucion = $(".inputCrearInstitucionIdInstitucion").val();
        buscarInstitucion(idInstitucion);
    };

    const modificarInstitucion = (event) => {
        event.preventDefault();
        idInstitucion = $(".inputCrearInstitucionIdInstitucion").val();
        nombreInstitucion = $(".inputCrearInstitucionNombreInstitucion").val();
        direccion = $(".inputCrearInstitucionDireccion").val();
        telefono = $(".inputCrearInstitucionTelefono").val();
        limpiarPantalla();
        manejarSolicitud("POST", {
            idInstitucion: idInstitucion,
            nombreInstitucion: nombreInstitucion,
            direccion: direccion,
            telefono: telefono,
        }, "Institucion modificado correctamente.", "No se encontraron los datos.");
    };

    const eliminarInstitucion = (event) => {
        event.preventDefault();
        idInstitucion = $(".inputCrearInstitucionIdInstitucion").val();
        limpiarPantalla();
        manejarSolicitud("DELETE", {
            idInstitucion: idInstitucion
        }, "Institucion eliminado correctamente.", "Error al eliminar Institucion.");
    };

    const confirmarCrearInstitucion = () => {
        limpiarPantalla();
        $(".confirmarCrearInstitucion").css("display", "block");
    }

    const confirmarModificarInstitucion = () => {
        limpiarPantalla();
        $(".confirmarModificarInstitucion").css("display", "block");
    }

    const confirmarEliminarInstitucion = () => {
        limpiarPantalla();
        $(".confirmarEliminarInstitucion").css("display", "block");
    }

    const limpiarPantalla = () => {
        $(".confirmarCrearInstitucion").css("display", "none");
        $(".confirmarModificarInstitucion").css("display", "none");
        $(".confirmarEliminarInstitucion").css("display", "none");
    }

    $(".institucionCrear").click(confirmarCrearInstitucion);
    $("#institucionConfirmarCrear").click(datosCrearInstitucion);
    $(".institucionBuscar").click(datosBuscarInstitucion);
    $(".institucionModificar").click(confirmarModificarInstitucion);
    $(".institucionConfirmarModificar").click(modificarInstitucion);
    $(".institucionEliminar").click(confirmarEliminarInstitucion);
    $(".institucionConfirmarEliminar").click(eliminarInstitucion);

    $(".institucionCancelarCrear").click(limpiarPantalla);
    $(".institucionCancelarModificar").click(limpiarPantalla);
    $(".institucionCancelarEliminar").click(limpiarPantalla);

});
