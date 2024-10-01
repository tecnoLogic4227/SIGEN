<?php

require_once("../../modelo/tablas/rutinaModel.php");
require_once("../../modelo/rutina.php");

$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : null;
$valor1 = isset($_REQUEST["valor1"]) ? $_REQUEST["valor1"] : null;

// $params = [];

// for ($i = 0; $i < 10; $i++) {
//     $params array_push("a");
// }

// function create($tabla, $params)
// {

    switch ($tabla) {
            // case "asiste":
            //     // $resultado = eliminarAsiste($par1);
            //     break;
            // case "concurre":
            //     $consulta = ["DELETE FROM CONCURRE WHERE ci = ? AND id_institucion = ?; "];
            //     $params = ['ii', $par1, $par2];
            //     break;
            // case "contiene":
            //     $consulta = ["DELETE FROM CONTIENE WHERE id_equipo = ?; "];
            //     $params = ['i', $par1];
            //     break;
            // case "deporte":
            //     $consulta = [
            //         "DELETE FROM DEPORTISTA_DEPORTE WHERE nombre_deporte = ?; ", 
            //         "DELETE FROM CONTIENE WHERE nombre_deporte = ?; ", 
            //         "DELETE FROM DEPORTE WHERE nombre_deporte = ?; "
            //     ];
            //     $params = ['sss', $par1, $par1, $par1];
            //     break;
            // case "deportista":
            //     $consulta = [
            //         "DELETE FROM REALIZA WHERE ci = ?; ",
            //         "DELETE FROM ESTA WHERE ci = ?; ",
            //         "DELETE FROM DEPORTISTA_DEPORTE WHERE ci = ?; ",
            //         "DELETE FROM DEPORTISTA WHERE ci = ?; "
            //     ];
            //     $params = ['iiii', $par1, $par1, $par1, $par1];
            //     break;
            // case "deportistaDeporte":
            //     $consulta = ["DELETE FROM DEPORTISTA_DEPORTE WHERE ci = ? AND nombre_deporte = ?; "];
            //     $params = ['is', $par1, $par2];
            //     break;
            // case "efectua":
            //     $consulta = ["DELETE FROM EFECTUA WHERE ci = ?; "];
            //     $params = ['i', $par1];
            //     break;
            // case "ejercicio":
            //     $consulta = [
            //         "DELETE FROM POSEE WHERE id_ejercicio = ?; ",
            //         "DELETE FROM EJERCICIO WHERE id_ejercicio = ?; "
            //     ];
            //     $params = ['ii', $par1, $par1];
            //     break;
            // case "equipo":
            //     $consulta = [
            //         "DELETE FROM CONTIENE WHERE id_equipo = ?; ",
            //         "DELETE FROM ESTA WHERE id_equipo = ?; ",
            //         "DELETE FROM EQUIPO WHERE id_equipo = ?; "
            //     ];
            //     $params = ['iii', $par1, $par1, $par1];
            //     break;
            // case "esta":
            //     $consulta = ["DELETE FROM ESTA WHERE ci = ?; "];
            //     $params = ['i', $par1];
            //     break;
            // case "fisioterapia":
            //     $consulta = [
            //         "DELETE FROM INCLUYE WHERE id_fisioterapia = ? AND ci = ?; ",
            //         "DELETE FROM FISIOTERAPIA WHERE id_fisioterapia = ?; "
            //     ];
            //     $params = ['iii', $par1, $par2, $par1];
            //     break;
            // case "hace":
            //     $consulta = ["DELETE FROM HACE WHERE ci = ? AND id_ejercicio = ?; "];
            //     $params = ['ii', $par1, $par2];
            //     break;
            // case "incluye":
            //     $consulta = ["DELETE FROM INCLUYE WHERE ci = ? AND id_rutina = ?; "];
            //     $params = ['ii', $par1, $par2];
            //     break;
            // case "institucion":
            //     $consulta = [
            //         "DELETE FROM INSTITUCION_TELEFONO WHERE id_institucion = ?; ",
            //         "DELETE FROM CONCURRE WHERE id_institucion = ?; ",
            //         "DELETE FROM INSTITUCION WHERE id_institucion = ?; "
            //     ];
            //     $params = ['iii', $par1, $par1, $par1];
            //     break;
            // case "institucionTelefono":
            //     $consulta = "DELETE FROM INSTITUCION_TELEFONO WHERE id_institucion = ? AND telefono = ?; ";
            //     $params = ['is', $par1, $par2];
            //     break;
            // case "libre":
            //     $consulta = "DELETE FROM HACE WHERE ci = ?; ";
            //     $consulta = "DELETE FROM LIBRE WHERE ci = ?; ";
            //     $params = ['ii', $par1, $par1];
            //     break;
            // case "login":
            //     $consulta = "DELETE FROM LOGIN WHERE id_login = ?; ";
            //     $params = ['i', $par1];
            //     break;
            // case "paciente":
            //     $consulta = "DELETE FROM ASISTE WHERE ci = ?; ";
            //     $consulta.= "DELETE FROM PACIENTE WHERE ci = ?; ";
            //     $params = ['ii', $par1, $par1];
            //     break;
            // case "posee":
            //     $consulta = "DELETE FROM POSEE WHERE id_rutina = ? AND id_ejercicio = ?; ";
            //     $params = ['ii', $par1, $par2];
            //     break;
            // case "realiza":
            //     $consulta = "DELETE FROM REALIZA WHERE id_rutina = ?; ";
            //     $params = ['i', $par1];
            //     break;
        case "rutina":
            $rutina = new Rutina($valor1);
            $resultado = registrarRutina($rutina);
            break;
            // case "rutDeporte":
            //     $consulta = "DELETE FROM RUT_DEPORTE WHERE id_rutina = ?; ";
            //     $params = ['i', $par1];
            //     break;
            // case "rutFisioterapia":
            //     $consulta = "DELETE FROM RUT_FISIOTERAPIA WHERE id_rutina = ?; ";
            //     $params = ['i', $par1];
            //     break;
            // case "ultimoPago":
            //     $consulta = "DELETE FROM EFECTUA WHERE id_ultimo_pago = ?; ";
            //     $consulta = "DELETE FROM ULTIMO_PAGO WHERE id_ultimo_pago = ?; ";
            //     $params = ['ii', $par1, $par1];
            //     break;
            // case "usuario":
            //     $consulta = "DELETE FROM USUARIO_TELEFONO WHERE ci = ?; ";
            //     $consulta = "DELETE FROM USUARIO_CLIENTE WHERE ci = ?; ";
            //     $consulta = "DELETE FROM USUARIO_ENTRENADOR WHERE ci = ?; ";
            //     $consulta = "DELETE FROM USUARIO WHERE ci = ?; ";
            //     $params = ['iiii', $par1, $par1, $par1, $par1];
            //     break;
            // case "usuarioCliente":
            //     $consulta = "DELETE FROM USUARIO_CLIENTE WHERE ci = ?; ";
            //     $params = ['i', $par1];
            //     break;
            // case "usuarioEntrenador":
            //     $consulta = "DELETE FROM USUARIO_ENTRENADOR WHERE ci = ?; ";
            //     $params = ['i', $par1];
            //     break;
            // case "usuarioTelefono":
            //     $consulta = "DELETE FROM USUARIO_TELEFONO WHERE ci = ? AND telefono = ?; ";
            //     $params = ['is', $par1, $par2];
            //     break;

        default:
            $consulta = null;
            break;
    }
// }

function delete() {}

function read() {}

function search() {}

// $rutina = new Rutina($valor1);
// $data = $rutina->getNombreRutina();

echo json_encode($resultado);
