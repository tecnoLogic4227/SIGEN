<?php
require_once 'conexion.php';

function agregarDeportista($ci, $posicion) {
    global $conexion;

    echo "Creando usuario<br>";

    try {
        $stmt = $conexion->prepare("INSERT INTO deportista (ci, posicion) VALUES (?, ?)");
        if (!$stmt) {
            echo ("Error en la preparación de la consulta: " . $conexion->error);
        }

        if (!$stmt->bind_param("ss", $ci, $posicion)) {
            echo("Error al vincular parámetros: " . $stmt->error);
        }

        if (!$stmt->execute()) {
            echo("Error al ejecutar la consulta: " . $stmt->error);
        }

        $conexion->commit();
        echo "Inserción exitosa.<br>";
    } catch (Exception $e) {
        $conexion->rollback();
        echo "Error: " . $e->getMessage() . "<br>";
        $conexion->autocommit(TRUE);
    }
}

conectar();

//se agrega de a uno, osea borras uno y luego agregas logicali
agregarDeportista("12345678", "Defensa central");
$conexion->close();
?>