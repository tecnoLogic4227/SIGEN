<?php
require_once 'conexion.php';

function agregarUsuarioEntrenador($ci, $especialidad) {
    global $conexion;

    echo "Creando usuario<br>";

    try {
        $stmt = $conexion->prepare("INSERT INTO usuario_entrenador (ci, especialidad) VALUES (?, ?)");
        if (!$stmt) {
            echo ("Error en la preparación de la consulta: " . $conexion->error);
        }

        if (!$stmt->bind_param("ss", $ci, $especialidad)) {
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

agregarUsuarioEntrenador("87654321", "Fisioterapia");
$conexion->close();
?>