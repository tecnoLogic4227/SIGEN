<?php
    if($_SERVER['REQUESTED_METHOD']=='POST'){
        $cliente_ci=$_POST["buscar-cliente"];
        //Aca se definirian funciones de conexion y consulta a la base de datos
        echo $cliente_ci;
    }
?>