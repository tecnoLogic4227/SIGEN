<?php

$resultado;

require_once("../../modelo/tablas/crudModel.php");
require_once("../../modelo/asiste.php");
require_once("../../modelo/tablas/asisteModel.php");

$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : null;
$metodo = isset($_REQUEST["metodo"]) ? $_REQUEST["metodo"] : null;

if (is_null($tabla) || empty($tabla)) {
    http_response_code(400);
    echo json_encode(["Error" => "La tabla es obligatoria."]);
    exit();
}

if (is_null($metodo) || empty($metodo)) {
    http_response_code(400);
    echo json_encode(["Error" => "Método incorrecto."]);
    exit();
}

switch ($metodo) {
    case "POST":
        crearModificar($tabla);
        break;
    case "GET":
        listar($tabla);
        break;
    case "PUT":
        crearModificar($tabla);
        break;
    case "DELETE":
        eliminar($tabla);
        break;
    default:
        http_response_code(405);
        echo json_encode(["Error" => "Método HTTP incorrecto."]);
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
            break;
        case "concurre":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idInstitucion = isset($_REQUEST["idInstitucion"]) ? $_REQUEST["idInstitucion"] : null;

            return new Concurre($ci, $idInstitucion);
            break;
        case "contiene":
            $idEquipo = isset($_REQUEST["idEquipo"]) ? $_REQUEST["idEquipo"] : null;
            $nombreDeporte = isset($_REQUEST["nombreDeporte"]) ? $_REQUEST["nombreDeporte"] : null;

            return new Contiene($idEquipo, $nombreDeporte);
            break;
        case "deporte":
            $nombreDeporte = isset($_REQUEST["nombreDeporte"]) ? $_REQUEST["nombreDeporte"] : null;
            $descripcion = isset($_REQUEST["descripcion"]) ? $_REQUEST["descripcion"] : null;

            return new Deporte($nombreDeporte, $descripcion);
            break;
        case "deportista":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $posicion = isset($_REQUEST["posicion"]) ? $_REQUEST["posicion"] : null;

            return new Deporte($ci, $posicion);
            break;
        case "deportistaDeporte":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $nombreDeporte = isset($_REQUEST["nombreDeporte"]) ? $_REQUEST["nombreDeporte"] : null;

            return new DeportistaDeporte($ci, $nombreDeporte);
            break;
        case "efectua":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idUltimoPago = isset($_REQUEST["idUltimoPago"]) ? $_REQUEST["idUltimoPago"] : null;

            return new Efectua($ci, $idUltimoPago);
            break;
        case "ejercicio":
            $idEjercicio = isset($_REQUEST["idEjercicio"]) ? $_REQUEST["idEjercicio"] : null;
            $nombreEjercicio = isset($_REQUEST["nombreEjercicio"]) ? $_REQUEST["nombreEjercicio"] : null;
            $nroRep = isset($_REQUEST["nroRep"]) ? $_REQUEST["nroRep"] : null;
            $nroSeries = isset($_REQUEST["nroSeries"]) ? $_REQUEST["nroSeries"] : null;
            $grupoMuscular = isset($_REQUEST["grupoMuscular"]) ? $_REQUEST["grupoMuscular"] : null;
            $descripcion = isset($_REQUEST["descripcion"]) ? $_REQUEST["descripcion"] : null;

            return new Ejercicio($idEjercicio, $nombreEjercicio, $nroRep, $nroSeries, $grupoMuscular, $descripcion);
            break;
        case "equipo":
            $idEquipo = isset($_REQUEST["idEquipo"]) ? $_REQUEST["idEquipo"] : null;
            $nombreEquipo = isset($_REQUEST["nombreEquipo"]) ? $_REQUEST["nombreEquipo"] : null;
            $cantidad = isset($_REQUEST["cantidad"]) ? $_REQUEST["cantidad"] : null;

            return new Equipo($idEquipo, $nombreEquipo, $cantidad);
            break;
        case "esta":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idEquipo = isset($_REQUEST["idEquipo"]) ? $_REQUEST["idEquipo"] : null;

            return new Esta($ci, $idEquipo);
            break;
        case "fisioterapia":
            $idFisioterapia = isset($_REQUEST["idFisioterapia"]) ? $_REQUEST["idFisioterapia"] : null;
            $nombreFisioterapia = isset($_REQUEST["nombreFisioterapia"]) ? $_REQUEST["nombreFisioterapia"] : null;
            $tipoFisioterapia = isset($_REQUEST["tipoFisioterapia"]) ? $_REQUEST["tipoFisioterapia"] : null;
            $descripcion = isset($_REQUEST["descripcion"]) ? $_REQUEST["descripcion"] : null;

            return new Fisioterapia($idFisioterapia, $nombreFisioterapia, $tipoFisioterapia, $descripcion);
            break;
        case "hace":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idEjercicio = isset($_REQUEST["idEjercicio"]) ? $_REQUEST["idEjercicio"] : null;

            return new Hace($ci, $idEjercicio);
            break;
        case "incluye":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;
            $idFisioterapia = isset($_REQUEST["idFisioterapia"]) ? $_REQUEST["idFisioterapia"] : null;

            return new Incluye($ci, $idRutina, $idFisioterapia);
            break;
        case "institucion":
            $idInstitucion = isset($_REQUEST["idInstitucion"]) ? $_REQUEST["idInstitucion"] : null;
            $nombreInstitucion = isset($_REQUEST["nombreInstitucion"]) ? $_REQUEST["nombreInstitucion"] : null;
            $direccion = isset($_REQUEST["direccion"]) ? $_REQUEST["direccion"] : null;

            return new Institucion($idInstitucion, $nombreInstitucion, $direccion);
            break;
        case "institucionTelefono":
            $idInstitucion = isset($_REQUEST["idInstitucion"]) ? $_REQUEST["idInstitucion"] : null;
            $telefono = isset($_REQUEST["telefono"]) ? $_REQUEST["telefono"] : null;

            return new InstitucionTelefono($idInstitucion, $telefono);
            break;
        case "libre":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;

            return new Libre($ci);
            break;
            // case "login":
            //     $idEquipo = isset($_REQUEST["idEquipo"]) ? $_REQUEST["idEquipo"] : null;
            //     $nombreEquipo = isset($_REQUEST["nombreEquipo"]) ? $_REQUEST["nombreEquipo"] : null;
            //     $cantidad = isset($_REQUEST["cantidad"]) ? $_REQUEST["cantidad"] : null;

            //     return new Equipo($idEquipo, $nombreEquipo, $cantidad);
            //     break;
        case "paciente":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $motivo = isset($_REQUEST["motivo"]) ? $_REQUEST["motivo"] : null;
            $lesion = isset($_REQUEST["lesion"]) ? $_REQUEST["lesion"] : null;

            return new Paciente($ci, $motivo, $lesion);
            break;
        case "posee":
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;
            $idEjercicio = isset($_REQUEST["idEjercicio"]) ? $_REQUEST["idEjercicio"] : null;

            return new Posee($idRutina, $idEjercicio);
            break;
        case "realiza":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;
            $nivel = isset($_REQUEST["nivel"]) ? $_REQUEST["nivel"] : null;
            $fechaInicio = isset($_REQUEST["fechaInicio"]) ? $_REQUEST["fechaInicio"] : null;
            $fechaTermino = isset($_REQUEST["fechaTermino"]) ? $_REQUEST["fechaTermino"] : null;

            return new Realiza($ci, $idRutina, $nivel, $fechaInicio, $fechaTermino);
            break;
        case "rutina":
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;
            $nombreRutina = isset($_REQUEST["nombreRutina"]) ? $_REQUEST["nombreRutina"] : null;

            return new Rutina($idRutina, $nombreRutina);
            break;
        case "rutDeporte":
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;

            return new RutDeporte($idRutina);
            break;
        case "rutFisioterapia":
            $idRutina = isset($_REQUEST["idRutina"]) ? $_REQUEST["idRutina"] : null;

            return new RutFisioterapia($idRutina);
            break;
        case "ultimoPago":
            $idUltimoPago = isset($_REQUEST["idUltimoPago"]) ? $_REQUEST["idUltimoPago"] : null;
            $hora = isset($_REQUEST["hora"]) ? $_REQUEST["hora"] : null;
            $fecha = isset($_REQUEST["fecha"]) ? $_REQUEST["fecha"] : null;
            $valor = isset($_REQUEST["valor"]) ? $_REQUEST["valor"] : null;

            return new UltimoPago($idUltimoPago, $hora, $fecha, $valor);
            break;
        case "usuario":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $nombre = isset($_REQUEST["nombre"]) ? $_REQUEST["nombre"] : null;
            $apellido = isset($_REQUEST["apellido"]) ? $_REQUEST["apellido"] : null;
            $direccion = isset($_REQUEST["direccion"]) ? $_REQUEST["direccion"] : null;
            $email = isset($_REQUEST["email"]) ? $_REQUEST["email"] : null;
            $fechaNac = isset($_REQUEST["fechaNac"]) ? $_REQUEST["fechaNac"] : null;
            $rol = isset($_REQUEST["rol"]) ? $_REQUEST["rol"] : null;

            return new Usuario($ci, $nombre, $apellido, $direccion, $email, $fechaNac, $rol);
            break;
        case "usuarioCliente":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $actividad = isset($_REQUEST["actividad"]) ? $_REQUEST["actividad"] : null;
            $estado = isset($_REQUEST["estado"]) ? $_REQUEST["estado"] : null;
            $calificacion = isset($_REQUEST["calificacion"]) ? $_REQUEST["calificacion"] : null;
            $estadoActividad = isset($_REQUEST["estadoActividad"]) ? $_REQUEST["estadoActividad"] : null;
            $fecha = isset($_REQUEST["fecha"]) ? $_REQUEST["fecha"] : null;
            $hora = isset($_REQUEST["hora"]) ? $_REQUEST["hora"] : null;
            $turnoAgenda = isset($_REQUEST["turnoAgenda"]) ? $_REQUEST["turnoAgenda"] : null;

            return new Cliente($ci, $actividad, $estado, $calificacion, $estadoActividad, $fecha, $hora, $turnoAgenda);
            break;
        case "usuarioEntrenador":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;

            return new Entrenador($ci);
            break;
        case "usuarioTelefono":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            $telefono = isset($_REQUEST["telefono"]) ? $_REQUEST["telefono"] : null;

            return new UsuarioTelefono($ci, $telefono);
            break;
        default:
            break;
    }
}

function crearModificar($tabla)
{
    switch ($tabla) {
        case "asiste":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
        case "concurre":
            $concurre = datos($tabla);

            $sqlConsulta = "SELECT * FROM concurre WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$concurre->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE concurre SET id_institucion = ? WHERE ci = ?";
                $params = "ii";
                $atributos = [$concurre->ci, $concurre->idInstitucion];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaConcurre($concurre->ci, $concurre->idInstitucion));
            }
            break;
        case "contiene":
            $contiene = datos($tabla);

            $sqlConsulta = "SELECT * FROM contiene WHERE id_equipo = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$contiene->idEquipo];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE contiene SET nombre_deporte = ? WHERE id_equipo = ?";
                $params = "ii";
                $atributos = [$contiene->nombreDeporte, $contiene->idEquipo];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaContiene($contiene->nombreDeporte, $contiene->idEquipo));
            }
            break;
        case "deporte":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "deportista":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "deportistaDeporte":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "efectua":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "ejercicio":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "equipo":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "esta":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "fisioterapia":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "hace":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "incluye":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "institucion":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "institucionTelefono":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "libre":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "login":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "paciente":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "posee":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "realiza":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "rutina":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "rutDeporte":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "rutFisioterapia":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "ultimoPago":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "usuario":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "usuarioCliente":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "usuarioEntrenador":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;
        case "usuarioTelefono":
            $asiste = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$asiste->ci, $asiste->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE asiste SET nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE ci = ? AND id_rutina = ?";
                $params = "sssii";
                $atributos = [$asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino, $asiste->ci, $asiste->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(verificarExistenciaAsiste($asiste->ci, $asiste->idRutina, $asiste->nivel, $asiste->fechaInicio, $asiste->fechaTermino));
            }
            break;

        default:
            $consulta = null;
            break;
    }
}

function listar($tabla)
{
    switch ($tabla) {
        case "asiste":

            $asiste = datos($tabla);

            if (!is_null($asiste->ci) && !empty($asiste->ci) || !is_null($asiste->idRutina) && !empty($asiste->idRutina)) {

                if (!is_null($asiste->ci) && !empty($asiste->ci) && !is_null($asiste->idRutina) && !empty($asiste->idRutina)) {
                    $sql = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
                    $params = "ii";
                    $atributos = [$asiste->ci, $asiste->idRutina];
                } else {
                    if (!is_null($asiste->ci) && !empty($asiste->ci)) {
                        $sql = "SELECT * FROM asiste WHERE ci = ?";
                        $params = "i";
                        $atributos = [$asiste->ci];
                    } else {
                        $sql = "SELECT * FROM asiste WHERE id_rutina = ?";
                        $params = "i";
                        $atributos = [$asiste->idRutina];
                    }
                }
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
        case "asiste":
            if (isset($_REQUEST["ci"]) && isset($_REQUEST["idRutina"])) {
                $asiste = datos($tabla);

                $sql = "DELETE FROM asiste WHERE ci = ? AND id_rutina = ?";
                $params = "ii";
                $atributos = [$asiste->ci, $asiste->idRutina];

                $sqlConsulta = "SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
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

            // default:
            //     break;
    }
}
