<?php
$server = 'localhost';
$user = 'root';
$password = '';
$data_base = 'activemotion';
$conexion;

function conectar() {
    global $conexion, $server, $user, $password, $data_base;
    $conexion = new mysqli($server, $user, $password, $data_base);
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    return $conexion;
}

$conexion = conectar();

?>