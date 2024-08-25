<?php

$server = "localhost";
$database = "buscadorbd";
$username = "root";
$password = "";

$connection;

function conectar ($server, $database, $username, $password) {
    global $connection;

    $connection = new mysqli ($server, $username, $password, $database);

    // if ($connection->connect_error) {
    //     die("Base de datos no conectada"). $connection->connect_error;
    // } else {
    //     echo "Base de datos conectada";
    // }
}

function desconectar ($connection) {
    $connection->close();
}

conectar($server, $database, $username, $password);

?>