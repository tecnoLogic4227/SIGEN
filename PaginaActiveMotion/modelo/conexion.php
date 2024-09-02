<?php

$server = "localhost";
$database = "activemotion";
$username = "root";
$password = "";

$connection;

function conectar ($server, $database, $username, $password) {
    global $connection;

    $connection = new mysqli ($server, $username, $password, $database);

    if ($connection->connect_error) {
        die("Base de datos no conectada: ") . $connection->connect_error;
    } 
}

conectar($server, $database, $username, $password);

?>