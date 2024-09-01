<?php
$host = 'localhost';
$user = 'root';
$password = '';
$data_base = 'pruebaalta';
$conexion;

function conectar() {
    global $conexion, $host, $user, $password, $data_base;
    $conexion = new mysqli($host, $user, $password, $data_base);
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }
    echo "Conectado a la base de datos<br>";
}

function desconectar() {
    global $conexion;
    if ($conexion) {
        $conexion->close();
        echo "Desconectado de la base de datos<br>";
    }
}
?>