<?php
require_once 'conexion.php';

function agregarUsuarioCliente($ci, $actividad, $estado, $calificacion, $estado_actividad) {
    global $conexion;

    echo "Creando usuario<br>";

    try {
        $stmt = $conexion->prepare("INSERT INTO usuario_cliente (ci, actividad, estado, calificacion, estado_actividad) VALUES (?, ?, ?, ?, ?)");
        if (!$stmt) {
            echo ("Error en la preparación de la consulta: " . $conexion->error);
        }

        if (!$stmt->bind_param("sssss", $ci, $actividad, $estado, $calificacion, $estado_actividad)) {
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
agregarUsuarioCliente("56341434", "Fisioterapia", "En evolucion", "90", "Activo");
agregarUsuarioCliente("12345678", "Deporte", "Medio", "100", "Activo");
$conexion->close();
?>