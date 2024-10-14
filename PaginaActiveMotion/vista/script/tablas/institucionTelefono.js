// $(document).ready(() => {
//     let idInstitucion, telefono, metodo;
//     const tabla = "institucionTelefono";
//     datos = "";

//     const listarInstitucionTelefono = (datos) => {
//         metodo = "GET";
//         $.ajax({
//             url: "../../controlador/crud/crudController.php",
//             type: "GET",
//             data: {
//                 tabla: tabla,
//                 metodo: metodo,
//                 ...datos,
//             },
//             success: (response) => {
//                 try {
//                     let institucionTelefono = JSON.parse(response);
//                     if (institucionTelefono.length > 0) {
//                         $(".tablaInstitucionTelefono tbody").html("");
//                         let tbody = $(".tablaInstitucionTelefono tbody");
//                         institucionTelefono.forEach(institucionTelefono1 => {
//                             let tr = $("<tr></tr>");
//                             tr.append(`<td>${institucionTelefono1.id_institucion}</td>`);
//                             tr.append(`<td>${institucionTelefono1.telefono}</td>`);
//                             // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
//                             // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
//                             tbody.append(tr);
//                         });
//                     } else {
//                         alert("No se encontraron resultados.");
//                         $(".tablaInstitucionTelefono tbody").html("");
//                     }
//                 } catch (e) {
//                     console.log("Error al parsear el JSON: " + e);
//                 }
//             },
//             error: (xhr, status, error) => {
//                 console.log("La solicitud AJAX falló: " + error);
//             }
//         });
//     };

//     const manejarSolicitud = (metodo, datos, exitoMensaje, errorMensaje) => {
//         $.ajax({
//             url: "../../../controlador/crud/crudController.php",
//             type: "POST",
//             data: { 
//                 tabla: tabla,
//                 metodo: metodo,
//                 ...datos,
//             },
//             success: (response) => {
//                 try {
//                     let respuesta = JSON.parse(response);
//                     if (respuesta == true) {
//                         alert(exitoMensaje);
//                         datos = "";
//                         listarInstitucionTelefono(datos);
//                     } else {
//                         alert(errorMensaje);
//                     }
//                 } catch (e) {
//                     console.log("Error al parsear el JSON: " + e);
//                 }
//             },
//             error: (xhr, status, error) => {
//                 console.log("La solicitud AJAX falló: " + error);
//             }
//         });
//     };

//     const crearInstitucionTelefono = (idInstitucion, telefono) => {
//         limpiarPantalla();
//         manejarSolicitud("POST", {
//             idInstitucion: idInstitucion,
//             telefono: telefono
//         }, "InstitucionTelefono creado correctamente.", "Error al crear InstitucionTelefono.");
//     };

//     const datosCrearInstitucionTelefono = (event) => {
//         event.preventDefault();
//         idInstitucion = $(".inputCrearInstitucionTelefonoIdInstitucion").val();
//         telefono = $(".inputCrearInstitucionTelefonoTelefono").val();
//         crearInstitucionTelefono(idInstitucion, telefono);
//     };

//     listarInstitucionTelefono(datos);

//     const buscarInstitucionTelefono = (idInstitucion) => {
//         listarInstitucionTelefono({
//             tabla: tabla,
//             idInstitucion: idInstitucion,
//         });
//     };

//     const datosBuscarInstitucionTelefono = (event) => {
//         event.preventDefault();
//         idInstitucion = $(".inputCrearInstitucionTelefonoIdInstitucion").val();
//         buscarInstitucionTelefono(idInstitucion);
//     };

//     const modificarInstitucionTelefono = (event) => {
//         event.preventDefault();
//         idInstitucion = $(".inputCrearInstitucionTelefonoIdInstitucion").val();
//         telefono = $(".inputCrearInstitucionTelefonoTelefono").val();
//         limpiarPantalla();
//         manejarSolicitud("POST", {
//             idInstitucion: idInstitucion,
//             telefono: telefono
//         }, "InstitucionTelefono modificado correctamente.", "No se encontraron los datos.");
//     };

//     const eliminarInstitucionTelefono = (event) => {
//         event.preventDefault();
//         idInstitucion = $(".inputCrearInstitucionTelefonoIdInstitucion").val();
//         limpiarPantalla();
//         manejarSolicitud("DELETE", {
//             idInstitucion: idInstitucion
//         }, "InstitucionTelefono eliminado correctamente.", "Error al eliminar InstitucionTelefono.");
//     };

//     const confirmarCrearInstitucionTelefono = () => {
//         limpiarPantalla();
//         $(".confirmarCrearInstitucionTelefono").css("display", "block");
//     }

//     const confirmarModificarInstitucionTelefono = () => {
//         limpiarPantalla();
//         $(".confirmarModificarInstitucionTelefono").css("display", "block");
//     }

//     const confirmarEliminarInstitucionTelefono = () => {
//         limpiarPantalla();
//         $(".confirmarEliminarInstitucionTelefono").css("display", "block");
//     }

//     const limpiarPantalla = () => {
//         $(".confirmarCrearInstitucionTelefono").css("display", "none");
//         $(".confirmarModificarInstitucionTelefono").css("display", "none");
//         $(".confirmarEliminarInstitucionTelefono").css("display", "none");
//     }

//     $(".institucionTelefonoCrear").click(confirmarCrearInstitucionTelefono);
//     $(".institucionTelefonoConfirmarCrear").click(datosCrearInstitucionTelefono);
//     $(".institucionTelefonoBuscar").click(datosBuscarInstitucionTelefono);
//     $(".institucionTelefonoModificar").click(confirmarModificarInstitucionTelefono);
//     $(".institucionTelefonoConfirmarModificar").click(modificarInstitucionTelefono);
//     $(".institucionTelefonoEliminar").click(confirmarEliminarInstitucionTelefono);
//     $(".institucionTelefonoConfirmarEliminar").click(eliminarInstitucionTelefono);

//     $(".institucionTelefonoCancelarCrear").click(limpiarPantalla);
//     $(".institucionTelefonoCancelarModificar").click(limpiarPantalla);
//     $(".institucionTelefonoCancelarEliminar").click(limpiarPantalla);

// });
