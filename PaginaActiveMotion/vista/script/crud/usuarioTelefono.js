// $(document).ready(() => {
//     let ci, telefono, metodo;
//     const tabla = "usuarioTelefono";
//     datos = "";

//     const listarUsuarioTelefono = (datos) => {
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
//                     let usuarioTelefono = JSON.parse(response);
//                     if (usuarioTelefono.length > 0) {
//                         $(".tablaUsuarioTelefono tbody").html("");
//                         let tbody = $(".tablaUsuarioTelefono tbody");
//                         usuarioTelefono.forEach(usuarioTelefono1 => {
//                             let tr = $("<tr></tr>");
//                             tr.append(`<td>${usuarioTelefono1.ci}</td>`);
//                             tr.append(`<td>${usuarioTelefono1.telefono}</td>`);
//                             // tr.append(`<td><button class="asisteModificar">Modificar</button></td>`);
//                             // tr.append(`<td><button class="asisteEliminar">Eliminar</button></td>`);
//                             tbody.append(tr);
//                         });
//                     } else {
//                         alert("No se encontraron resultados.");
//                         $(".tablaUsuarioTelefono tbody").html("");
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
//                         listarUsuarioTelefono(datos);
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

//     const crearUsuarioTelefono = (ci) => {
//         limpiarPantalla();
//         manejarSolicitud("POST", {
//             ci: ci,
//         }, "UsuarioTelefono creado correctamente.", "Error al crear UsuarioTelefono.");
//     };

//     const datosCrearUsuarioTelefono = (event) => {
//         event.preventDefault();
//         ci = $(".inputCrearUsuarioTelefonoCi").val();
//         crearUsuarioTelefono(ci);
//     };

//     listarUsuarioTelefono(datos);

//     const buscarUsuarioTelefono = (ci) => {
//         listarUsuarioTelefono({
//             tabla: tabla,
//             ci: ci,
//         });
//     };

//     const datosBuscarUsuarioTelefono = (event) => {
//         event.preventDefault();
//         ci = $(".inputCrearUsuarioTelefonoCi").val();
//         buscarUsuarioTelefono(ci);
//     };

//     const modificarUsuarioTelefono = (event) => {
//         event.preventDefault();
//         ci = $(".inputCrearUsuarioTelefonoCi").val();
//         limpiarPantalla();
//         manejarSolicitud("POST", {
//             ci: ci,
//         }, "UsuarioTelefono modificado correctamente.", "No se encontraron los datos.");
//     };

//     const eliminarUsuarioTelefono = (event) => {
//         event.preventDefault();
//         ci = $(".inputCrearUsuarioTelefonoCi").val();
//         limpiarPantalla();
//         manejarSolicitud("DELETE", {
//             ci: ci,
//         }, "UsuarioTelefono eliminado correctamente.", "Error al eliminar UsuarioTelefono.");
//     };

//     const confirmarCrearUsuarioTelefono = () => {
//         limpiarPantalla();
//         $(".UsuarioTelefono").css("display", "block");
//     }

//     const confirmarModificarUsuarioTelefono = () => {
//         limpiarPantalla();
//         $(".confirmarModificarUsuarioTelefono").css("display", "block");
//     }

//     const confirmarEliminarUsuarioTelefono = () => {
//         limpiarPantalla();
//         $(".confirmarEliminarUsuarioTelefono").css("display", "block");
//     }

//     const limpiarPantalla = () => {
//         $(".confirmarCrearUsuarioTelefono").css("display", "none");
//         $(".confirmarModificarUsuarioTelefono").css("display", "none");
//         $(".confirmarEliminarUsuarioTelefono").css("display", "none");
//     }

//     $(".usuarioTelefonoEntrenadorCrear").click(confirmarCrearUsuarioTelefono);
//     $(".usuarioTelefonoConfirmarCrear").click(datosCrearUsuarioTelefono);
//     $(".usuarioTelefonoBuscar").click(datosBuscarUsuarioTelefono);
//     $(".usuarioTelefonoModificar").click(confirmarModificarUsuarioTelefono);
//     $(".usuarioTelefonoConfirmarModificar").click(modificarUsuarioTelefono);
//     $(".usuarioTelefonoEliminar").click(confirmarEliminarUsuarioTelefono);
//     $(".usuarioTelefonoConfirmarEliminar").click(eliminarUsuarioTelefono);

//     $(".usuarioTelefonoCancelarCrear").click(limpiarPantalla);
//     $(".usuarioTelefonoCancelarModificar").click(limpiarPantalla);
//     $(".usuarioTelefonoCancelarEliminar").click(limpiarPantalla);

// });
