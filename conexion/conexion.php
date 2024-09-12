<?php

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'basephp';

$conexion;


function conectar($host,$user,$password,$database){
    
    global $conexion;
    
    $conexion = new mysqli($host,$user,$password,$database);

    if($conexion->connect_error){
        die("Error al conectar") . $conexion->connect_error;
    }else{
        echo "Conexion correcta";        
    }
}

?>