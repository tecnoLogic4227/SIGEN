<?php

// require_once("../conexion.php");
// require_once("../rutina.php");

$server = 'localhost';
$user = 'root';
$password = '';
$data_base = 'activemotion';
$conexion;

function conectarBD()
{
    global $conexion, $server, $user, $password, $data_base;
    $conexion = new mysqli($server, $user, $password, $data_base);
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    return $conexion;
}

function registrarBD($sql, $params, $atributos)
{
    $conexion = conectarBD();

    try {

        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("s", $data);
        $stmt->execute();
        $stmt->close();

        $verificar = verificarCreacion($data);

        return $verificar;

    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function listarBD($sql, $params, $data)
{

    $conexion = conectarBD();

    // try {
    //     $stmt = $conexion->prepare("SELECT * FROM rutina JOIN posee ON rutina.id_rutina = posee.id_rutina JOIN ejercicio ON posee.id_ejercicio = ejercicio.id_ejercicio");
    //     $stmt->execute();
    //     $result = $stmt->get_result();

    //     $resultado = array();

    //     while ($row = $result->fetch_assoc()) {
    //         $resultado[] = $row;
    //     }

    //     $stmt->close();

    //     return $resultado;
    // } catch (Exception $e) {
    //     die($e->getMessage());
    // }
}

// function consultar($sql, $params, $data)
// {
    $conexion = conectarBD();

    // try {
    //     $stmt = $conexion->prepare("SELECT * FROM rutina JOIN posee ON rutina.id_rutina = posee.id_rutina JOIN ejercicio ON posee.id_ejercicio = ejercicio.id_ejercicio WHERE rutina.id_rutina = ?");
    //     $stmt->bind_param("i", $search);
    //     $stmt->execute();
    //     $result = $stmt->get_result();

    //     $resultado = new Rutina($result);

    //     $stmt->close();

    //     return $resultado;
    // } catch (Exception $e) {
    //     die($e->getMessage());
    // }
// }

function modificarBD($sql, $params, $data)
{
    $conexion = conectarBD();

    // try {

    //     $sql = "UPDATE rutina SET id_rutina = ? WHERE id_rutina = ?";
    //     $data = $rutina->getIdRutina();

    //     $stmt = $conexion->prepare($sql);
    //     $stmt->bind_param("i", $data);
    //     $stmt->execute();
    //     $stmt->close();

    //     return true;
    // } catch (Exception $e) {
    //     die($e->getMessage());
    // }
}

function eliminarBD($sql, $params, $data)
{
    $conexion = conectarBD();

    // try {
    //     $conexion->begin_transaction();

    //     $stmt = $conexion->prepare("DELETE FROM posee WHERE id_rutina = ?");
    //     $stmt->bind_param("i", $search);
    //     $stmt->execute();
    //     $stmt->close();

    //     $stmt = $conexion->prepare("DELETE FROM rutina WHERE id_rutina = ?");
    //     $stmt->bind_param("i", $search);
    //     $stmt->execute();
    //     $stmt->close();

    //     $conexion->commit();

    //     $verificar = verificarCreacion($search);

    //     return !$verificar;

    // } catch (Exception $e) {
    //     $conexion->rollback();
    //     return $e->getMessage();
    // }
}


function verificarCreacion($sql, $params, $data)
{
    $conexion = conectarBD();

    // $stmt = $conexion->prepare("SELECT * FROM rutina WHERE nombre_rutina = ?");
    // $stmt->bind_param("s", $data);
    // $stmt->execute();
    // $resultado = $stmt->get_result();

    // if ($resultado->num_rows > 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // $stmt->close();
}
