<?php
require_once 'conexion_alta.php';

function agregarPaciente($ci, $motivo, $lesion) {
    global $conexion;

    echo "Creando usuario<br>";

    try {
        $stmt = $conexion->prepare("INSERT INTO paciente (ci, motivo, lesion) VALUES (?, ?, ?)");
        if (!$stmt) {
            echo ("Error en la preparación de la consulta: " . $conexion->error);
        }

        if (!$stmt->bind_param("sss", $ci, $motivo, $lesion)) {
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
agregarPaciente("56341434", "lesión en el manguito rotador", "esfuerzo excesivo al levantar objetos pesados");
$conexion->close();
?>