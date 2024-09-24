<?php

require_once("../conexion.php");
require_once("../rutina.php");

function registrarRutina(Rutina $rutina)
{
    global $conexion;

    try {

        $sql = "INSERT INTO rutina (id_rutina) VALUES (?)";
        $data = $rutina->getIdRutina();

        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("i", $data);
        $stmt->execute();
        $stmt->close();

        return true;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function listarRutinas()
{

    global $conexion;

    try {
        $stmt = $conexion->prepare("SELECT * FROM rutina JOIN posee ON rutina.id_rutina = posee.id_rutina JOIN ejercicio ON posee.id_ejercicio = ejercicio.id_ejercicio");
        $stmt->execute();
        $result = $stmt->get_result();

        $resultado = array();

        while ($row = $result->fetch_assoc()) {
            $resultado[] = $row;
        }

        $stmt->close();

        return $resultado;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function consultarRutina($search)
{
    global $conexion;

    try {
        $stmt = $conexion->prepare("SELECT * FROM rutina JOIN posee ON rutina.id_rutina = posee.id_rutina JOIN ejercicio ON posee.id_ejercicio = ejercicio.id_ejercicio WHERE rutina.id_rutina = ?");
        $stmt->bind_param("i", $search);
        $stmt->execute();
        $result = $stmt->get_result();

        $resultado = new Rutina($result);

        $stmt->close();

        return $resultado;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function modificarRutina(Rutina $rutina)
{
    global $conexion;

    try {

        $sql = "UPDATE rutina SET id_rutina = ? WHERE id_rutina = ?";
        $data = $rutina->getIdRutina();

        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("i", $data);
        $stmt->execute();
        $stmt->close();

        return true;

    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function eliminarRutina($search)
{
    global $conexion;

    try {

        $stmt = $conexion->prepare("DELETE FROM rutina WHERE id_rutina = ?");
        $stmt->bind_param("i", $search);
        $stmt->execute();
        $stmt->close();

        return true;

    } catch (Exception $e) {
        die($e->getMessage());
    }
}

?>
