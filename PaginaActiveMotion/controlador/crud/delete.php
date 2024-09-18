<?php

require_once("../../modelo/crud.php");

$tabla = $_REQUEST["tabla"];
$typeRequest = $_REQUEST["typeRequest"];
$par1 = $_REQUEST["par1"];
$par2 = $_REQUEST["par2"];

$consulta;
$params;

switch ($tabla) {
    case "asiste":
        $consulta = "DELETE FROM ASISTE WHERE ci = ? AND id_rutina = ?";
        $params = ['ii', $par1, $par2];
        break;
    case "concurre":
        $consulta = "DELETE FROM CONCURRE WHERE ci = ? AND id_institucion = ?";
        $params = ['ii', $par1, $par2];
        break;
    case "contiene":
        $consulta = "DELETE FROM CONTIENE WHERE id_equipo = ?";
        $params = ['i', $par1];
        break;
    case "deporte":
        $consulta = "DELETE FROM DEPORTE WHERE nombre_deporte = ?";
        $params = ['s', $par1];
        break;
    case "deportista":
        $consulta = "DELETE FROM DEPORTISTA WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "deportistaDeporte":
        $consulta = "DELETE FROM DEPORTISTA_DEPORTE WHERE ci = ? AND nombre_deporte = ?";
        $params = ['is', $par1, $par2];
        break;
    case "efectua":
        $consulta = "DELETE FROM EFECTUA WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "ejercicio":
        $consulta = "DELETE FROM EJERCICIO WHERE id_ejercicio = ?";
        $params = ['i', $par1];
        break;
    case "equipo":
        $consulta = "DELETE FROM EQUIPO WHERE id_equipo = ?";
        $params = ['i', $par1];
        break;
    case "esta":
        $consulta = "DELETE FROM ESTA WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "fisioterapia":
        $consulta = "DELETE FROM FISIOTERAPIA WHERE id_fisioterapia = ?";
        $params = ['i', $par1, $par2];
        break;
    case "hace":
        $consulta = "DELETE FROM HACE WHERE ci = ? AND id_ejercicio = ?";
        $params = ['ii', $par1, $par2];
        break;
    case "incluye":
        $consulta = "DELETE FROM INCLUYE WHERE ci = ? AND id_rutina = ?";
        $params = ['ii', $par1, $par2];
        break;
    case "institucion":
        $consulta = "DELETE FROM INSTITUCION WHERE id_institucion = ?";
        $params = ['i', $par1];
        break;
    case "institucionTelefono":
        $consulta = "DELETE FROM INSTITUCION_TELEFONO WHERE id_institucion = ? AND telefono = ?";
        $params = ['is', $par1, $par2];
        break;
    case "libre":
        $consulta = "DELETE FROM LIBRE WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "login":
        $consulta = "DELETE FROM LOGIN WHERE id_login = ?";
        $params = ['i', $par1];
        break;
    case "paciente":
        $consulta = "DELETE FROM PACIENTE WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "posee":
        $consulta = "DELETE FROM POSEE WHERE id_rutina = ? AND id_ejercicio = ?";
        $params = ['ii', $par1, $par2];
        break;
    case "realiza":
        $consulta = "DELETE FROM REALIZA WHERE id_rutina = ?";
        $params = ['i', $par1];
        break;
    case "rutina":
        $consulta = "DELETE FROM RUTINA WHERE id_rutina = ?";
        $params = ['i', $par1];
        break;
    case "rutDeporte":
        $consulta = "DELETE FROM RUT_DEPORTE WHERE id_rutina = ?";
        $params = ['i', $par1];
        break;
    case "rutFisioterapia":
        $consulta = "DELETE FROM RUT_FISIOTERAPIA WHERE id_rutina = ?";
        $params = ['i', $par1];
        break;
    case "ultimoPago":
        $consulta = "DELETE FROM ULTIMO_PAGO WHERE id_ultimo_pago = ?";
        $params = ['i', $par1];
        break;
    case "usuario":
        $consulta = "DELETE FROM USUARIO WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "usuarioCliente":
        $consulta = "DELETE FROM USUARIO_CLIENTE WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "usuarioEntrenador":
        $consulta = "DELETE FROM USUARIO_ENTRENADOR WHERE ci = ?";
        $params = ['i', $par1];
        break;
    case "usuarioTelefono":
        $consulta = "DELETE FROM USUARIO_TELEFONO WHERE ci = ? AND telefono = ?";
        $params = ['is', $par1, $par2];
        break;

    default:
        $consulta = null;
        break;
}

echo json_encode($tabla);

if ($consulta != null) {

    echo json_encode(eliminarRegistro($consulta, $params));
} else {
    echo json_encode(false);
}
