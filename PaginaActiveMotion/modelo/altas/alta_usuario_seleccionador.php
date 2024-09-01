<?php
require_once 'conexion.php';

function agregarUsuarioSeleccionador($ci) {
    global $conexion;

    echo "Creando usuario<br>";

    try {
        $stmt = $conexion->prepare("INSERT INTO usuario_seleccionador (ci) VALUES (?)");
        if (!$stmt) {
            echo ("Error en la preparación de la consulta: " . $conexion->error);
        }

        if (!$stmt->bind_param("s", $ci)) {
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

agregarUsuarioSeleccionador("09876543");
$conexion->close();
?>