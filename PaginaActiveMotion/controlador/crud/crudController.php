<?php

$resultado;

require_once("../../modelo/tablas/crudModel.php");
require_once("../../modelo/asiste.php");
require_once("../../modelo/tablas/asisteModel.php");
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : null;

if (is_null($tabla) || empty($tabla)) {
    http_response_code(400);
    echo json_encode(["Error: " => "La tabla es obligatoria."]);
    exit();
}

switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        crearModificar($tabla);
        break;
    case "GET":
        listar($tabla);
        break;
    case "PUT":
        modificar($tabla);
        break;
    case "DELETE":
        eliminar($tabla);
        break;
    default:
        http_response_code(405);
        echo json_encode(["Error: " => "Método HTTP incorrecto."]);
        exit();
}

function datos($tabla)
{
    switch ($tabla) {
        case "asiste":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;
            $nivel = isset($_REQUEST["nivel"]) ? $_REQUEST["nivel"] : null;
            $fechaInicio = isset($_REQUEST["fechaInicio"]) ? $_REQUEST["fechaInicio"] : null;
            $fechaTermino =  isset($_REQUEST["fechaTermino"]) ? $_REQUEST["fechaTermino"] : null;

            return new Asiste($ci, $idRutina, $nivel, $fechaInicio, $fechaTermino);
    }
}
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
// case "rutina":
//     $resultado = eliminarRutina($par1);
//     break;
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

//     default:
//         break;
// }
// }

function crearModificar($tabla)
{
    switch ($tabla) {
        case "asiste":
            $asiste = datos($tabla);

            $sql = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $params = "ii";
            $atributos = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sql, $params, $atributos)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];
            } else {
                $sql = "
                INSERT INTO usuario (ci) VALUES (?);
                INSERT INTO usuario_cliente (ci) VALUES (?);
                INSERT INTO paciente (ci) VALUES (?);
                INSERT INTO rutina (id_rutina) VALUES (?);
                INSERT INTO rut_fisioterapia (id_rutina) VALUES (?);
                INSERT INTO asiste (ci, id_rutina, nivel, fecha_inicio, fecha_termino) VALUES (?, ?, ?, ?, ?);";
                $params = "iiiiiiisss";
                $atributos = [$asiste->ci, $asiste->ci,$asiste->ci, $asiste->idRutina, $asiste->idRutina, $asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino];
            }
            
            echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            // echo json_encode(registrarBD($sql, $params, $atributos));
    }
}
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
// case "rutina":
//     $resultado = eliminarRutina($par1);
//     break;
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

//         default:
//             $consulta = null;
//             break;
//     }
// }

function modificar($tabla)
{
    switch ($tabla) {
        case "asiste":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;
            $nivel = isset($_REQUEST["nivel"]) ? $_REQUEST["nivel"] : null;
            $fechaInicio = isset($_REQUEST["fechaInicio"]) ? $_REQUEST["fechaInicio"] : null;
            $fechaTermino =  isset($_REQUEST["fechaTermino"]) ? $_REQUEST["fechaTermino"] : null;

            $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
            $params = "sssii";
            $data = [$nivel, $fechaInicio, $fechaTermino, $ci, $idRutina,];

            $resultado = registrarBD($sql, $params, $data);
            echo json_encode($resultado);
            break;
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
            // case "rutina":
            //     $resultado = eliminarRutina($par1);
            //     break;
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
}

function listar($tabla)
{
    switch ($tabla) {
        case "asiste":

            if (isset($_REQUEST["ci"]) && isset($_REQUEST["idRutina"])) {
                $asiste = datos($tabla);

                $sql = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
                $params = "ii";
                $atributos = [$asiste->ci, $asiste->idRutina];

            } else {
                $sql = "SELECT * FROM asiste";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
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
            // case "rutina":
            //     $resultado = eliminarRutina($par1);
            //     break;
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
}

function eliminar($tabla)
{
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
            // case "rutina":
            //     $resultado = eliminarRutina($par1);
            //     break;
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

            // default:
            //     break;
    }
}
