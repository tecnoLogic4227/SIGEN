<?php

require_once 'controlador_session.php';

verificarSesion('usuario_administrativo');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ci=$_POST["ci"];
    $fecha_agenda = $_POST["fecha-agenda"];
    $hora = $_POST["hora"];
    
    $errores=[];
    // Verificar si los campos estan llenos
    if (empty($ci) ||empty($fecha_agenda) || empty($hora)) {
        //recarga el formulario hasta que esten todos los campos llenos
        header("Location: http://localhost/prueba_index.html");
        array_push($errores, "Ninguno de los campos puede quedar vacio");
    } else {
        // Aca conectariamos a la base de datos para verificar la cédula
        // cuando tengaos la base de datos hacemos esto:
        // $cedula = obtenerCedulaDesdeBaseDeDatos();
        
        // Mostrar resultados ya que no tenemos mucho mas que hacer
        echo "Datos recibidos:<br>";
        echo "Fecha agendado par el dia $fecha_agenda, a la hora $hora". "<br>";
    }
} else {
    // Si se intenta acceder directamente al script sin POST
    echo "Acceso no permitido.";
}
?>