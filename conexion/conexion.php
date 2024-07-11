<?php

$servidor = "localhost"; //el servidor de la base de datos
$usuario = "root"; //el nombre de usuario de la base de datos
$contraseña = ""; //la contraseña del usuario de la base de datos
$bd = "test"; //el nombre de la base de datos

$conexion = new mysqli($servidor, $usuario, $contraseña, $bd);

//verificar si la conexion falla
if ($conexion->connect_errno) {
    //Si la conexión falla, muestra un mensaje de error y termina el script
    die("Conexión fallida: " . $conexion->connect_errno . " - " . $conexion->connect_error);
} else {
    // Si la conexión no falla, muestra un mensaje indicando que la conexion fue exitosa
    echo "conectado"; 
}

//cerramos la conexion
$conexion->close();

?>
