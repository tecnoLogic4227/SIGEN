<?php

// require_once("../config/conexion.php");

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

function registrarBD($sql, $params, $atributos, $sqlConsulta, $paramsConsulta, $atributosConsulta)
{
    $conexion = conectarBD();
    // global $conexion;

    // var_dump($sql, $params, $atributos);

    try {

        $stmt = $conexion->prepare($sql);
        if (is_array($atributos)) {
            if (count($atributos) > 1) {
                $stmt->bind_param($params, ...$atributos);
            } else {
                $stmt->bind_param($params, $atributos[0]);
            }
        } else {
            $stmt->bind_param($params, $atributos);
        }
        $stmt->execute();
        $stmt->close();

        return verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta);
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function listarBD($sql, $params, $atributos)
{

    // var_dump($sql, $params, $atributos);

    $conexion = conectarBD();

    try {

        if ($params != "" && !empty($atributos)) {
            $stmt = $conexion->prepare($sql);

            if (is_array($atributos)) {
                if (count($atributos) > 1) {
                    $stmt->bind_param($params, ...$atributos);
                } else {
                    $stmt->bind_param($params, $atributos[0]);
                }
            } else {
                $stmt->bind_param($params, $atributos);
            }

            $stmt->execute();
            $result = $stmt->get_result();

            $resultado = array();

            while ($row = $result->fetch_assoc()) {
                $resultado[] = $row;
            }

            $stmt->close();
        } else {
            $stmt = $conexion->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();

            $resultado = array();

            while ($row = $result->fetch_assoc()) {
                $resultado[] = $row;
            }

            $stmt->close();
        }

        return $resultado;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function modificarBD($sql, $params, $atributos)
{
    $conexion = conectarBD();

    try {
        $stmt = $conexion->prepare($sql);
        if (is_array($atributos)) {
            if (count($atributos) > 1) {
                $stmt->bind_param($params, ...$atributos);
            } else {
                $stmt->bind_param($params, $atributos[0]);
            }
        } else {
            $stmt->bind_param($params, $atributos);
        }
        $stmt->execute();
        $stmt->close();

        return true;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}


function eliminarBD($sql, $params, $atributos, $sqlConsulta)
{

    $conexion = conectarBD();
    // global $conexion;

    try {

        $stmt = $conexion->prepare($sql);
        if (is_array($atributos)) {
            if (count($atributos) > 1) {
                $stmt->bind_param($params, ...$atributos);
            } else {
                $stmt->bind_param($params, $atributos[0]);
            }
        } else {
            $stmt->bind_param($params, $atributos);
        }
        $stmt->execute();
        $stmt->close();

        return !verificarExistencia($sqlConsulta, $params, $atributos);
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function verificarExistencia($sql, $params, $atributos)
{
    $conexion = conectarBD();

    $stmt = $conexion->prepare($sql);

    if (is_array($atributos)) {
        if (count($atributos) > 1) {
            $stmt->bind_param($params, ...$atributos);
        } else {
            $stmt->bind_param($params, $atributos[0]);
        }
    } else {
        $stmt->bind_param($params, $atributos);
    }

    $stmt->execute();
    $resultado = $stmt->get_result();

    return $resultado->num_rows > 0;
}
