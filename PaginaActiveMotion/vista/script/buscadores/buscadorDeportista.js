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
                     let deportistas = JSON.parse(response);                     
 
                     if (deportistas.length > 0) {

                        console.log(deportistas);
 
                         deportistas.forEach(deportista => {

                            //atributos de usuario
                            $(".outputDeportistaCI").html(deportista.ci);
                            $(".outputDeportistaNombre").html(deportista.nombre);
                            $(".outputDeportistaApellido").html(deportista.apellido);
                            $(".outputDeportistaDireccion").html(deportista.direccion);
                            $(".outputDeportistaEmail").html(deportista.email);
                            $(".outputDeportistaFechaNacimiento").html(deportista.fecha_nac);
                            $(".outputDeportistaUltimoLogin").html(deportista.ultimo_login);

                            //atributos de equipo
                            $(".outputDeportistaIdEquipo").html(deportista.id_equipo);
                            $(".outputDeportistaNombreEquipo").html(deportista.nombre_equipo);
                            $(".outputDeportistaCantidad").html(deportista.cantidad);

                            //atributos de deporte
                            $(".outputDeportistaIdDeporte").html(deportista.id_deporte);
                            $(".outputDeportistaNombreDeporte").html(deportista.nombre_deporte);
                            $(".outputDeportistaDescripcion").html(deportista.descripcion);

                            //atributos de deportista
                            $(".outputDeportistaPosicion").html(deportista.posicion);
                         });
 
                     } else {
                         alert("No se encontraron resultados.");
                     }
                 } catch (e) {
                     console.log("Error al parsear el JSON: " + e);
                 }
             },
             error: (xhr, status, error) => {
                 console.log("La solicitud AJAX falló: " + error)
             }
         })
 
     }
 
     let ingresarDatos = () => {
 
         let search = $(".inputDeportistaBuscador").val();
         const type = "deportista";
 
         if (validarCedula(search)) {
             pasarDatos(search, type);
         } else {
             alert("Por favor ingrese una cedula válida!");
         }
     }
 
     let limpiar = () => {
 
         $(".outputDeportistaCI").html("");
         $(".outputDeportistaUltimoLogin").html("");
         $(".outputDeportistaFechaNacimiento").html("");
         $(".outputDeportistaNombre").html("");
         $(".outputDeportistaApellido").html("");
         $(".outputDeportistaDireccion").html("");
         $(".outputDeportistaEmail").html("");
         $(".outputDeportistaPosicion").html("");
         $(".outputDeportistaClub").html("");
         $(".outputDeportistaDeporte").html("");
 
         ingresarDatos();
     }
 
     $(".botonDeportistaBuscador").click(limpiar);
 });