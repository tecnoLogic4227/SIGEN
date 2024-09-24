<?php

require_once("conexion.php");

function eliminarRegistro($consultas, $paramsArray)
{
    global $conexion;

    foreach ($consultas as $index => $consulta) {
        $stmt = $conexion->prepare($consulta);
        if ($paramsArray[$index]) {
            $stmt->bind_param($paramsArray[$index][0], ...array_slice($paramsArray[$index], 1));
        }
        $stmt->execute();
        $stmt->close();
    }

    return true;
}
