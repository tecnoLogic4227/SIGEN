<?php

$resultado;
$atributos = "";
$params = "";
$valores = [];

// var_dump($_REQUEST);

require_once("../modelo/crudModel.php");
require_once("../modelo/clases/usuarioCliente.php");

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
        crearModificar($atributos, $params, $valores, $tabla);
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

            return new Deportista($ci, $posicion);
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
            $telefono = isset($_REQUEST["telefono"]) ? $_REQUEST["telefono"] : null;

            return new Institucion($idInstitucion, $nombreInstitucion, $direccion, $telefono);
            break;
            // case "institucionTelefono":
            //     $idInstitucion = isset($_REQUEST["idInstitucion"]) ? $_REQUEST["idInstitucion"] : null;
            //     $telefono = isset($_REQUEST["telefono"]) ? $_REQUEST["telefono"] : null;

            //     return new InstitucionTelefono($idInstitucion, $telefono);
            //     break;
        case "libre":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;

            return new Libre($ci);
            break;
        case "login":
            $idLogin = isset($_REQUEST["idLogin"]) ? $_REQUEST["idLogin"] : null;
            $contrasenia = isset($_REQUEST["contrasenia"]) ? $_REQUEST["contrasenia"] : null;

            return new Login($idLogin, $contrasenia);
            break;
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
            $telefono = isset($_REQUEST["telefono"]) ? $_REQUEST["telefono"] : null;

            return new Usuario($ci, $nombre, $apellido, $direccion, $email, $fechaNac, $rol, $telefono);
            break;
        case "usuarioCliente":
            $ci = isset($_REQUEST["datos"]["ci"]) && !empty($_REQUEST["datos"]["ci"]) ? $_REQUEST["datos"]["ci"] : null;
            $actividad = isset($_REQUEST["datos"]["actividad"]) && !empty($_REQUEST["datos"]["actividad"]) ? $_REQUEST["datos"]["actividad"] : null;
            $estado = isset($_REQUEST["datos"]["estado"]) && !empty($_REQUEST["datos"]["estado"]) ? $_REQUEST["datos"]["estado"] : null;
            $estadoActividad = isset($_REQUEST["datos"]["estadoActividad"]) && !empty($_REQUEST["datos"]["estadoActividad"]) ? $_REQUEST["datos"]["estadoActividad"] : null;
            $fecha = isset($_REQUEST["datos"]["fecha"]) && !empty($_REQUEST["datos"]["fecha"]) ? $_REQUEST["datos"]["fecha"] : null;
            $hora = isset($_REQUEST["datos"]["hora"]) && !empty($_REQUEST["datos"]["hora"]) ? $_REQUEST["datos"]["hora"] : null;
            $turnoAgenda = isset($_REQUEST["datos"]["turnoAgenda"]) && !empty($_REQUEST["datos"]["turnoAgenda"]) ? $_REQUEST["datos"]["turnoAgenda"] : null;
            $cumplimientoAgenda = isset($_REQUEST["datos"]["cumplimientoAgenda"]) && !empty($_REQUEST["datos"]["cumplimientoAgenda"]) ? $_REQUEST["datos"]["cumplimientoAgenda"] : null;
            $resistenciaAnaerobica = isset($_REQUEST["datos"]["resistenciaAnaerobica"]) && !empty($_REQUEST["datos"]["resistenciaAnaerobica"]) ? $_REQUEST["datos"]["resistenciaAnaerobica"] : null;
            $fuerzaMuscular = isset($_REQUEST["datos"]["fuerzaMuscular"]) && !empty($_REQUEST["datos"]["fuerzaMuscular"]) ? $_REQUEST["datos"]["fuerzaMuscular"] : null;
            $resistenciaMuscular = isset($_REQUEST["datos"]["resistenciaMuscular"]) && !empty($_REQUEST["datos"]["resistenciaMuscular"]) ? $_REQUEST["datos"]["resistenciaMuscular"] : null;
            $flexibilidad = isset($_REQUEST["datos"]["flexibilidad"]) && !empty($_REQUEST["datos"]["flexibilidad"]) ? $_REQUEST["datos"]["flexibilidad"] : null;
            $resistenciaMonotonia = isset($_REQUEST["datos"]["resistenciaMonotonia"]) && !empty($_REQUEST["datos"]["resistenciaMonotonia"]) ? $_REQUEST["datos"]["resistenciaMonotonia"] : null;
            $resiliencia = isset($_REQUEST["datos"]["resiliencia"]) && !empty($_REQUEST["datos"]["resiliencia"]) ? $_REQUEST["datos"]["resiliencia"] : null;

            return new Cliente($ci, $actividad, $estado, $estadoActividad, $fecha, $hora, $turnoAgenda, $cumplimientoAgenda, $resistenciaAnaerobica, $fuerzaMuscular, $resistenciaMuscular, $flexibilidad, $resistenciaMonotonia, $resiliencia);
            break;
        case "usuarioEntrenador":
            $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;

            return new Entrenador($ci);
            break;
            // case "usuarioTelefono":
            //     $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
            //     $telefono = isset($_REQUEST["telefono"]) ? $_REQUEST["telefono"] : null;

            //     return new UsuarioTelefono($ci, $telefono);
            //     break;
        default:
            break;
    }
}

function crearModificar($atributos, $params, $valores, $tabla)
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
                echo json_encode(false);
            }
            break;
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
                echo json_encode(false);
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
                echo json_encode(false);
            }
            break;
        case "deporte":
            $deporte = datos($tabla);

            $sqlConsulta = "SELECT * FROM deporte WHERE nombre_deporte = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$deporte->nombreDeporte];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE deporte SET descripcion = ? WHERE nombre_deporte = ?";
                $params = "ss";
                $atributos = [$deporte->descripcion, $deporte->nombreDeporte];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }
            break;
        case "deportista":
            $deportista = datos($tabla);

            $sqlConsulta = "SELECT * FROM asiste WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$deportista->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE deportista SET posicion = ? WHERE ci = ? ";
                $params = "si";
                // $atributos = [$deportista->ci, $deportista->posicion];

                // echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }
            break;
        case "deportistaDeporte":
            $deportistaDeporte = datos($tabla);

            $sqlConsulta = "SELECT * FROM deportista_deporte WHERE ci = ? AND nombre_deporte = ?";
            $paramsConsulta = "is";
            $atributosConsulta = [$deportistaDeporte->ci, $deportistaDeporte->nombreDeporte];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                echo json_encode(false);
            } else {
                echo json_encode(false);
            }
            break;
        case "efectua":
            $efectua = datos($tabla);

            $sqlConsulta = "SELECT * FROM efectua WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$efectua->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE efectua SET id_ultimo_pago WHERE ci = ?";
                $params = "ii";
                $atributos = [$efectua->ci, $efectua->idUltimoPago];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }
            break;
        case "ejercicio":
            $ejercicio = datos($tabla);

            $sqlConsulta = "SELECT * FROM ejercicio WHERE id_ejercicio = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$ejercicio->idEjercicio];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE ejercicio SET nombre_ejercicio = ?, nro_rep = ?, nro_series = ?, grupo_muscular = ?, descripcion = ? WHERE id_ejercicio = ?";
                $params = "sssii";
                $atributos = [$ejercicio->nombreEjercicio, $ejercicio->nroRep, $ejercicio->nroSeries, $ejercicio->grupoMuscular, $ejercicio->descripcion, $ejercicio->idEjercicio];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }
            break;
        case "equipo":
            $equipo = datos($tabla);

            $sqlConsulta = "SELECT * FROM equipo WHERE id_equipo";
            $paramsConsulta = "i";
            $atributosConsulta = [$equipo->idEquipo];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE equipo SET nombre_equipo = ?, cantidad = ? WHERE id_equipo = ?";
                $params = "sii";
                $atributos = [$equipo->nombreEquipo, $equipo->cantidad, $equipo->idEquipo];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }
            break;
        case "esta":
            $esta = datos($tabla);

            $sqlConsulta = "SELECT * FROM ESTA WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$esta->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE ESTA SET id_equipo = ? WHERE ci = ?";
                $params = "ii";
                $atributos = [$esta->idEquipo, $esta->ci];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }
            break;
        case "fisioterapia":
            $fisioterapia = datos($tabla);

            $sqlConsulta = "SELECT * FROM FISIOTERAPIA WHERE id_fisioterapia = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$fisioterapia->idFisioterapia];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE FISIOTERAPIA SET nombre_fisioterapia = ?, tipo_fisioterapia = ?, descripcion = ? WHERE id_fisioterapia = ?";
                $params = "sssi";
                $atributos = [$fisioterapia->nombreFisioterapia, $fisioterapia->tipoFisioterapia, $fisioterapia->descripcion, $fisioterapia->idFisioterapia];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "hace":
            $hace = datos($tabla);

            $sqlConsulta = "SELECT * FROM HACE WHERE ci = ? AND id_ejercicio = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$hace->ci, $hace->idEjercicio];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE HACE SET id_ejercicio = ? WHERE ci = ? AND id_ejercicio = ?";
                $params = "iii";
                $atributos = [$hace->idEjercicio, $hace->ci, $hace->idEjercicio];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "incluye":
            $incluye = datos($tabla);

            $sqlConsulta = "SELECT * FROM INCLUYE WHERE ci = ? AND id_rutina = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$incluye->ci, $incluye->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE INCLUYE SET id_fisioterapia = ? WHERE ci = ? AND id_rutina = ?";
                $params = "iii";
                $atributos = [$incluye->idFisioterapia, $incluye->ci, $incluye->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "institucion":
            $institucion = datos($tabla);

            $sqlConsulta = "SELECT * FROM INSTITUCION WHERE id_institucion = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$institucion->idInstitucion];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE INSTITUCION SET nombre_institucion = ?, direccion = ?, telefono = ? WHERE id_institucion = ?";
                $params = "ssii";
                $atributos = [$institucion->nombreInstitucion, $institucion->direccion, $institucion->idInstitucion, $institucion->telefono];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
            // case "institucionTelefono":
            //     $institucionTelefono = datos($tabla);

            //     $sqlConsulta = "SELECT * FROM INSTITUCION_TELEFONO WHERE id_institucion = ? AND telefono = ?";
            //     $paramsConsulta = "is";
            //     $atributosConsulta = [$institucionTelefono->idInstitucion, $institucionTelefono->telefono];

            //     if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
            //         $sql = "UPDATE INSTITUCION_TELEFONO SET telefono = ? WHERE id_institucion = ? AND telefono = ?";
            //         $params = "sis";
            //         $atributos = [$institucionTelefono->telefonoNuevo, $institucionTelefono->idInstitucion, $institucionTelefono->telefono];

            //         echo json_encode(modificarBD($sql, $params, $atributos));
            //     } else {
            //         echo json_encode(verificarExistenciaInstitucionTelefono($institucionTelefono->idInstitucion, $institucionTelefono->telefono));
            //     }

            //     break;
        case "libre":
            $libre = datos($tabla);

            $sqlConsulta = "SELECT * FROM LIBRE WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$libre->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                echo json_encode(false);
            } else {
                echo json_encode(false);
            }

            break;
        case "login":
            $login = datos($tabla);

            $sqlConsulta = "SELECT * FROM LOGIN WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$login->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE LOGIN SET contrasenia = ? WHERE ci = ?";
                $params = "si";
                $atributos = [$login->contrasenia, $login->ci];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "paciente":
            $paciente = datos($tabla);

            $sqlConsulta = "SELECT * FROM PACIENTE WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$paciente->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE PACIENTE SET motivo = ?, lesion = ? WHERE ci = ?";
                $params = "ssi";
                // $atributos = [$paciente->motivo, $paciente->lesion, $paciente->ci];

                // echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "posee":
            $posee = datos($tabla);

            $sqlConsulta = "SELECT * FROM POSEE WHERE id_rutina = ? AND id_ejercicio = ?";
            $paramsConsulta = "ii";
            $atributosConsulta = [$posee->idRutina, $posee->idEjercicio];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                echo json_encode(false);
            } else {
                echo json_encode(false);
            }
            break;
        case "realiza":
            $realiza = datos($tabla);

            $sqlConsulta = "SELECT * FROM REALIZA WHERE id_rutina = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$realiza->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE REALIZA SET ci = ?, nivel = ?, fecha_inicio = ?, fecha_termino = ? WHERE id_rutina = ?";
                $params = "ssssi";
                $atributos = [$realiza->ci, $realiza->nivel, $realiza->fechaInicio, $realiza->fechaTermino, $realiza->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "rutina":
            $rutina = datos($tabla);

            $sqlConsulta = "SELECT * FROM RUTINA WHERE id_rutina = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$rutina->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE RUTINA SET nombre_rutina = ? WHERE id_rutina = ?";
                $params = "si";
                $atributos = [$rutina->nombreRutina, $rutina->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "rutDeporte":
            $rutDeporte = datos($tabla);

            $sqlConsulta = "SELECT * FROM RUT_DEPORTE WHERE id_rutina = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$rutDeporte->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE RUT_DEPORTE SET id_rutina = ? WHERE id_rutina = ?";
                $params = "ii";
                $atributos = [$rutDeporte->idRutina, $rutDeporte->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "rutFisioterapia":
            $rutFisioterapia = datos($tabla);

            $sqlConsulta = "SELECT * FROM RUT_FISIOTERAPIA WHERE id_rutina = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$rutFisioterapia->idRutina];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE RUT_FISIOTERAPIA SET id_rutina = ? WHERE id_rutina = ?";
                $params = "ii";
                $atributos = [$rutFisioterapia->idRutina, $rutFisioterapia->idRutina];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "ultimoPago":
            $ultimoPago = datos($tabla);

            $sqlConsulta = "SELECT * FROM ULTIMO_PAGO WHERE id_ultimo_pago = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$ultimoPago->idUltimoPago];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE ULTIMO_PAGO SET hora = ?, fecha = ?, valor = ? WHERE id_ultimo_pago = ?";
                $params = "ssdi";
                $atributos = [$ultimoPago->hora, $ultimoPago->fecha, $ultimoPago->valor, $ultimoPago->idUltimoPago];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "usuario":
            $usuario = datos($tabla);

            $sqlConsulta = "SELECT * FROM USUARIO WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$usuario->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                $sql = "UPDATE USUARIO SET nombre = ?, apellido = ?, direccion = ?, email = ?, fecha_nac = ?, rol = ?, telefono = ? WHERE ci = ?";
                $params = "ssssssii";
                $atributos = [$usuario->nombre, $usuario->apellido, $usuario->direccion, $usuario->email, $usuario->fechaNac, $usuario->rol, $usuario->ci, $usuario->telefono];

                echo json_encode(modificarBD($sql, $params, $atributos));
            } else {
                echo json_encode(false);
            }

            break;
        case "usuarioCliente":
            $usuarioCliente = datos($tabla);

            $sqlConsulta = "SELECT * FROM usuario_cliente WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$usuarioCliente->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                verificarDatos($atributos, $params, $valores, $usuarioCliente, $tabla);
                $sql = "UPDATE USUARIO_CLIENTE SET $atributos WHERE ci = ?";    
                echo json_encode(modificarBD($sql, $params, $valores));
            } else {
                echo json_encode(false);
            }
            break;
        case "usuarioEntrenador":
            $usuarioEntrenador = datos($tabla);

            $sqlConsulta = "SELECT * FROM USUARIO_ENTRENADOR WHERE ci = ?";
            $paramsConsulta = "i";
            $atributosConsulta = [$usuarioEntrenador->ci];

            if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                echo json_encode(modificarBD("UPDATE USUARIO_ENTRENADOR SET ci = ? WHERE ci = ?", "i", [$usuarioEntrenador->ci]));
            } else {
                echo json_encode(false);
            }

            break;
            // case "usuarioTelefono":
            //     $usuarioTelefono = datos($tabla);

            //     $sqlConsulta = "SELECT * FROM USUARIO_TELEFONO WHERE ci = ? AND telefono = ?";
            //     $paramsConsulta = "is";
            //     $atributosConsulta = [$usuarioTelefono->ci, $usuarioTelefono->telefono];

            //     if (verificarExistencia($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
            //         $sql = "UPDATE USUARIO_TELEFONO SET telefono = ? WHERE ci = ? AND telefono = ?";
            //         $params = "sis";
            //         $atributos = [$usuarioTelefono->telefono, $usuarioTelefono->ci, $usuarioTelefono->telefono];

            //         echo json_encode(modificarBD($sql, $params, $atributos));
            //     } else {
            //         echo json_encode(verificarExistenciaUsuarioTelefono($usuarioTelefono->ci, $usuarioTelefono->telefono));
            //     }

            //     break;
        default:
                echo json_encode(false);
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
        case "concurre":
            $concurre = datos($tabla);

            if (!is_null($concurre->ci) && !empty($concurre->ci)) {
                $sql = "SELECT * FROM concurre WHERE ci = ?";
                $params = "i";
                $atributos = $concurre->ci;
            } else {
                $sql = "SELECT * FROM concurre";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "contiene":
            $contiene = datos($tabla);

            if (!is_null($contiene->idEquipo) && !empty($contiene->idEquipo)) {
                $sql = "SELECT * FROM contiene WHERE id_equipo = ?";
                $params = "i";
                $atributos = $contiene->idEquipo;
            } else {
                $sql = "SELECT * FROM contiene";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "deporte":
            $deporte = datos($tabla);

            if (!is_null($deporte->nombreDeporte) && !empty($deporte->nombreDeporte)) {
                $sql = "SELECT * FROM deporte WHERE nombreDeporte = ?";
                $params = "s";
                $atributos = $deporte->nombreDeporte;
            } else {
                $sql = "SELECT * FROM deporte";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "deportista":
            $deportista = datos($tabla);

            if (!is_null($deportista->ci) && !empty($deportista->ci)) {
                $sql = "SELECT * FROM deportista WHERE ci = ?";
                $params = "i";
                $atributos = $deportista->ci;
            } else {
                $sql = "SELECT * FROM deportista";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "deportistaDeporte":
            $deportistaDeporte = datos($tabla);

            if (!is_null($deportistaDeporte->ci) && !empty($deportistaDeporte->ci) || !is_null($deportistaDeporte->nombreDeporte) && !empty($deportistaDeporte->nombreDeporte)) {

                if (!is_null($deportistaDeporte->ci) && !empty($deportistaDeporte->ci) && !is_null($deportistaDeporte->nombreDeporte) && !empty($deportistaDeporte->nombreDeporte)) {
                    $sql = "SELECT * FROM deportista_deporte WHERE ci = ? AND nombre_deporte = ?";
                    $params = "is";
                    $atributos = [$deportistaDeporte->ci, $deportistaDeporte->nombreDeporte];
                } else {
                    if (!is_null($deportistaDeporte->ci) && !empty($deportistaDeporte->ci)) {
                        $sql = "SELECT * FROM deportista_deporte WHERE ci = ?";
                        $params = "i";
                        $atributos = [$deportistaDeporte->ci];
                    } else {
                        $sql = "SELECT * FROM deportista_deporte WHERE nombre_deporte = ?";
                        $params = "s";
                        $atributos = [$deportistaDeporte->nombreDeporte];
                    }
                }
            } else {
                $sql = "SELECT * FROM deportista_deporte";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "efectua":
            $efectua = datos($tabla);

            if (!is_null($efectua->ci) && !empty($efectua->ci)) {
                $sql = "SELECT * FROM efectua WHERE ci = ?";
                $params = "i";
                $atributos = $efectua->ci;
            } else {
                $sql = "SELECT * FROM efectua";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "ejercicio":
            $ejercicio = datos($tabla);

            if (!is_null($ejercicio->idEjercicio) && !empty($ejercicio->idEjercicio)) {
                $sql = "SELECT * FROM ejercicio WHERE id_ejercicio = ?";
                $params = "i";
                $atributos = $ejercicio->idEjercicio;
            } else {
                $sql = "SELECT * FROM ejercicio";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "equipo":
            $equipo = datos($tabla);

            if (!is_null($equipo->idEquipo) && !empty($equipo->idEquipo)) {
                $sql = "SELECT * FROM equipo WHERE id_equipo = ?";
                $params = "i";
                $atributos = $equipo->idEquipo;
            } else {
                $sql = "SELECT * FROM equipo";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "esta":
            $esta = datos($tabla);

            if (!is_null($esta->ci) && !empty($esta->ci)) {
                $sql = "SELECT * FROM esta WHERE ci = ?";
                $params = "i";
                $atributos = $esta->ci;
            } else {
                $sql = "SELECT * FROM esta";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "fisioterapia":
            $fisioterapia = datos($tabla);

            if (!is_null($fisioterapia->idFisioterapia) && !empty($fisioterapia->idFisioterapia)) {
                $sql = "SELECT * FROM fisioterapia WHERE id_fisioterapia = ?";
                $params = "i";
                $atributos = $fisioterapia->idFisioterapia;
            } else {
                $sql = "SELECT * FROM fisioterapia";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "hace":
            $hace = datos($tabla);

            if (!is_null($hace->ci) && !empty($hace->ci) || !is_null($hace->idEjercicio) && !empty($hace->idEjercicio)) {

                if (!is_null($hace->ci) && !empty($hace->ci) && !is_null($hace->idEjercicio) && !empty($hace->idEjercicio)) {
                    $sql = "SELECT * FROM hace WHERE ci = ? AND id_ejercicio = ?";
                    $params = "ii";
                    $atributos = [$hace->ci, $hace->idEjercicio];
                } else {
                    if (!is_null($hace->ci) && !empty($hace->ci)) {
                        $sql = "SELECT * FROM hace WHERE ci = ?";
                        $params = "i";
                        $atributos = [$hace->ci];
                    } else {
                        $sql = "SELECT * FROM hace WHERE id_ejercicio = ?";
                        $params = "i";
                        $atributos = [$hace->idEjercicio];
                    }
                }
            } else {
                $sql = "SELECT * FROM hace";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "incluye":
            $incluye = datos($tabla);

            if (!is_null($incluye->ci) && !empty($incluye->ci) || !is_null($incluye->idRutina) && !empty($incluye->idRutina)) {

                if (!is_null($incluye->ci) && !empty($incluye->ci) && !is_null($incluye->idRutina) && !empty($incluye->idRutina)) {
                    $sql = "SELECT * FROM incluye WHERE ci = ? AND id_rutina = ?";
                    $params = "ii";
                    $atributos = [$incluye->ci, $incluye->idRutina];
                } else {
                    if (!is_null($incluye->ci) && !empty($incluye->ci)) {
                        $sql = "SELECT * FROM incluye WHERE ci = ?";
                        $params = "i";
                        $atributos = [$incluye->ci];
                    } else {
                        $sql = "SELECT * FROM incluye WHERE id_ejercicio = ?";
                        $params = "i";
                        $atributos = [$incluye->idRutina];
                    }
                }
            } else {
                $sql = "SELECT * FROM incluye";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "institucion":
            $institucion = datos($tabla);

            if (!is_null($institucion->idInstitucion) && !empty($institucion->idInstitucion)) {
                $sql = "SELECT * FROM institucion WHERE id_institucion = ?";
                $params = "i";
                $atributos = $institucion->idInstitucion;
            } else {
                $sql = "SELECT * FROM institucion";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "institucionTelefono":
            $institucionTelefono = datos($tabla);

            if (!is_null($institucionTelefono->idInstitucion) && !empty($institucionTelefono->idInstitucion) || !is_null($institucionTelefono->telefono) && !empty($institucionTelefono->telefono)) {

                if (!is_null($institucionTelefono->idInstitucion) && !empty($institucionTelefono->idInstitucion) && !is_null($institucionTelefono->telefono) && !empty($institucionTelefono->telefono)) {
                    $sql = "SELECT * FROM institucion_telefono WHERE id_institucion = ? AND telefono = ?";
                    $params = "ii";
                    $atributos = [$institucionTelefono->idInstitucion, $institucionTelefono->telefono];
                } else {
                    if (!is_null($institucionTelefono->idInstitucion) && !empty($institucionTelefono->idInstitucion)) {
                        $sql = "SELECT * FROM institucion_telefono WHERE id_institucion = ?";
                        $params = "i";
                        $atributos = [$institucionTelefono->idInstitucion];
                    } else {
                        $sql = "SELECT * FROM institucion_telefono WHERE telefono = ?";
                        $params = "i";
                        $atributos = [$institucionTelefono->telefono];
                    }
                }
            } else {
                $sql = "SELECT * FROM institucion_telefono";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "libre":
            $libre = datos($tabla);

            if (!is_null($libre->ci) && !empty($libre->ci)) {
                $sql = "SELECT * FROM libre WHERE ci = ?";
                $params = "i";
                $atributos = $libre->ci;
            } else {
                $sql = "SELECT * FROM libre";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
            // case "login":
            //     $login = datos($tabla);

            //     if (!is_null($login->idLogin) && !empty($libre->ci)) {
            //         $sql = "SELECT * FROM `login` WHERE id_login = ?";
            //         $params = "i";
            //         $atributos = $login->idLogin;
            //     } else {
            //         $sql = "SELECT * FROM `login`";
            //         $params = "";
            //         $atributos = "";
            //     }

            //     echo json_encode(listarBD($sql, $params, $atributos));
            //     break;
        case "paciente":
            $paciente = datos($tabla);

            if (!is_null($paciente->ci) && !empty($paciente->ci)) {
                $sql = "SELECT * FROM paciente WHERE ci = ?";
                $params = "i";
                $atributos = $paciente->ci;
            } else {
                $sql = "SELECT * FROM paciente";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "posee":
            $posee = datos($tabla);

            if (!is_null($posee->idRutina) && !empty($posee->idRutina) || !is_null($posee->idEjercicio) && !empty($posee->idEjercicio)) {

                if (!is_null($posee->idRutina) && !empty($posee->idRutina) && !is_null($posee->idEjercicio) && !empty($posee->idEjercicio)) {
                    $sql = "SELECT * FROM posee WHERE id_rutina = ? AND id_ejercicio = ?";
                    $params = "ii";
                    $atributos = [$posee->idRutina, $posee->idEjercicio];
                } else {
                    if (!is_null($posee->idRutina) && !empty($posee->idRutina)) {
                        $sql = "SELECT * FROM posee WHERE id_rutina = ?";
                        $params = "i";
                        $atributos = [$posee->idRutina];
                    } else {
                        $sql = "SELECT * FROM posee WHERE id_ejercicio = ?";
                        $params = "i";
                        $atributos = [$posee->idEjercicio];
                    }
                }
            } else {
                $sql = "SELECT * FROM posee";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "realiza":
            $realiza = datos($tabla);

            if (!is_null($realiza->idRutina) && !empty($realiza->idRutina)) {
                $sql = "SELECT * FROM realiza WHERE id_rutina = ?";
                $params = "i";
                $atributos = $realiza->idRutina;
            } else {
                $sql = "SELECT * FROM realiza";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "rutina":
            $rutina = datos($tabla);

            if (!is_null($rutina->idRutina) && !empty($rutina->idRutina)) {
                $sql = "SELECT * FROM rutina WHERE id_rutina = ?";
                $params = "i";
                $atributos = $rutina->idRutina;
            } else {
                $sql = "SELECT * FROM rutina";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "rutDeporte":
            $rutinaDeporte = datos($tabla);

            if (!is_null($rutinaDeporte->idRutina) && !empty($rutinaDeporte->idRutina)) {
                $sql = "SELECT * FROM rutina_deporte WHERE id_rutina = ?";
                $params = "i";
                $atributos = $rutinaDeporte->idRutina;
            } else {
                $sql = "SELECT * FROM rutina_deporte";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "rutFisioterapia":
            $rutinaFisio = datos($tabla);

            if (!is_null($rutinaFisio->idRutina) && !empty($rutinaFisio->idRutina)) {
                $sql = "SELECT * FROM rutina_fisioterapia WHERE id_rutina = ?";
                $params = "i";
                $atributos = $rutinaFisio->idRutina;
            } else {
                $sql = "SELECT * FROM rutina_fisioterapia";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "ultimoPago":
            $ultimoPago = datos($tabla);

            if (!is_null($ultimoPago->idUltimoPago) && !empty($ultimoPago->idUltimoPago)) {
                $sql = "SELECT * FROM ultimo_pago WHERE id_ultimo_pago = ?";
                $params = "i";
                $atributos = $ultimoPago->idUltimoPago;
            } else {
                $sql = "SELECT * FROM ultimo_pago";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "usuario":
            $usuario = datos($tabla);

            if (!is_null($usuario->ci) && !empty($usuario->ci)) {
                $sql = "SELECT * FROM usuario WHERE ci = ?";
                $params = "i";
                $atributos = $usuario->ci;
            } else {
                $sql = "SELECT * FROM usuario";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "usuarioCliente":
            $ci = isset($_REQUEST["ci"]) && !empty($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;

            if (!is_null($ci) && !empty($ci)) {
                $sql = "SELECT * FROM usuario_cliente WHERE ci = ?";
                $params = "i";
                $atributos = $ci;
            } else {
                $sql = "SELECT * FROM usuario_cliente";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "usuarioEntrenador":
            $usuarioEntrenador = datos($tabla);

            if (!is_null($usuarioEntrenador->ci) && !empty($usuarioEntrenador->ci)) {
                $sql = "SELECT * FROM usuario_entrenador WHERE ci = ?";
                $params = "i";
                $atributos = $usuarioEntrenador->ci;
            } else {
                $sql = "SELECT * FROM usuario_entrenador";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        case "usuarioTelefono":
            $usuarioTelefono = datos($tabla);

            if (!is_null($usuarioTelefono->ci) && !empty($usuarioTelefono->ci) || !is_null($usuarioTelefono->telefono) && !empty($usuarioTelefono->telefono)) {

                if (!is_null($usuarioTelefono->ci) && !empty($usuarioTelefono->ci) && !is_null($usuarioTelefono->telefono) && !empty($usuarioTelefono->telefono)) {
                    $sql = "SELECT * FROM usuario_telefono WHERE ci = ? AND telefono = ?";
                    $params = "ii";
                    $atributos = [$usuarioTelefono->ci, $usuarioTelefono->telefono];
                } else {
                    if (!is_null($usuarioTelefono->ci) && !empty($usuarioTelefono->ci)) {
                        $sql = "SELECT * FROM usuario_telefono WHERE ci = ?";
                        $params = "i";
                        $atributos = [$usuarioTelefono->ci];
                    } else {
                        $sql = "SELECT * FROM usuario_telefono WHERE telefono = ?";
                        $params = "i";
                        $atributos = [$usuarioTelefono->telefono];
                    }
                }
            } else {
                $sql = "SELECT * FROM usuario_telefono";
                $params = "";
                $atributos = "";
            }

            echo json_encode(listarBD($sql, $params, $atributos));
            break;
        default:
            echo json_encode(false);
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
        case "concurre":
            if (isset($_REQUEST["ci"]) && isset($_REQUEST["idInstitucion"])) {
                $concurre = datos($tabla);

                $sql = "DELETE FROM concurre WHERE ci = ? AND id_institucion = ?";
                $params = "ii";
                $atributos = [$concurre->ci, $concurre->idInstitucion];

                $sqlConsulta = "SELECT * FROM concurre WHERE ci = ? AND id_institucion = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "contiene":
            if (isset($_REQUEST["idEquipo"])) {
                $contiene = datos($tabla);

                $sql = "DELETE FROM contiene WHERE idEquipo = ?";
                $params = "i";
                $atributos = [$contiene->idEquipo];

                $sqlConsulta = "SELECT * FROM contiene WHERE idEquipo = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "deporte":
            if (isset($_REQUEST["nombreDeporte"])) {
                $deporte = datos($tabla);

                $sql = "DELETE FROM deporte WHERE nombreDeporte = ?";
                $params = "s";
                $atributos = [$deporte->nombreDeporte];

                $sqlConsulta = "SELECT * FROM deporte WHERE nombreDeporte = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "deportista":
            if (isset($_REQUEST["ci"])) {
                $deportista = datos($tabla);

                $sql = "DELETE FROM deportista WHERE ci = ?";
                $params = "i";
                $atributos = [$deportista->ci];

                $sqlConsulta = "SELECT * FROM deportista WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "deportistaDeporte":
            if (isset($_REQUEST["ci"])) {
                $deportistaDeporte = datos($tabla);

                $sql = "DELETE FROM deportistaDeporte WHERE ci = ?";
                $params = "i";
                $atributos = [$deportistaDeporte->ci];

                $sqlConsulta = "SELECT * FROM deporte WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "efectua":
            if (isset($_REQUEST["ci"])) {
                $efectua = datos($tabla);

                $sql = "DELETE FROM efectua WHERE ci = ?";
                $params = "i";
                $atributos = [$efectua->ci];

                $sqlConsulta = "SELECT * FROM deporte WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "ejercicio":
            if (isset($_REQUEST["idEjercicio"])) {
                $ejercicio = datos($tabla);

                $sql = "DELETE FROM ejercicio WHERE id_ejercicio = ?";
                $params = "i";
                $atributos = [$ejercicio->idEjercicio];

                $sqlConsulta = "SELECT * FROM ejercicio WHERE id_ejercicio = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "equipo":
            if (isset($_REQUEST["idEquipo"])) {
                $equipo = datos($tabla);

                $sql = "DELETE FROM equipo WHERE idEquipo = ?";
                $params = "i";
                $atributos = [$equipo->idEquipo];

                $sqlConsulta = "SELECT * FROM equipo WHERE idEquipo = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "esta":
            if (isset($_REQUEST["ci"])) {
                $esta = datos($tabla);

                $sql = "DELETE FROM esta WHERE ci = ?";
                $params = "i";
                $atributos = [$esta->ci];

                $sqlConsulta = "SELECT * FROM equipo WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "fisioterapia":
            if (isset($_REQUEST["idFisioterapia"])) {
                $fisioterapia = datos($tabla);

                $sql = "DELETE FROM fisioterapia WHERE idFisioterapia = ?";
                $params = "i";
                $atributos = [$fisioterapia->idFisioterapia];

                $sqlConsulta = "SELECT * FROM fisioterapia WHERE idFisioterapia = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "hace":
            if (isset($_REQUEST["ci"]) && isset($_REQUEST["idEjercicio"])) {
                $hace = datos($tabla);

                $sql = "DELETE FROM hace WHERE ci = ? AND id_ejercicio = ?";
                $params = "ii";
                $atributos = [$hace->ci, $hace->idEjercicio];

                $sqlConsulta = "SELECT * FROM hace WHERE ci = ? AND id_ejercicio = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "incluye":
            if (isset($_REQUEST["ci"]) && isset($_REQUEST["idRutina"])) {
                $incluye = datos($tabla);

                $sql = "DELETE FROM incluye WHERE ci = ? AND id_rutina = ?";
                $params = "ii";
                $atributos = [$incluye->ci, $incluye->idRutina];

                $sqlConsulta = "SELECT * FROM incluye WHERE ci = ? AND id_rutina = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "institucion":
            if (isset($_REQUEST["idInstitucion"])) {
                $institucion = datos($tabla);

                $sql = "DELETE FROM institucion WHERE id_institucion = ?";
                $params = "i";
                $atributos = [$institucion->idInstitucion];

                $sqlConsulta = "SELECT * FROM institucion WHERE id_institucion = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "institucionTelefono":
            if (isset($_REQUEST["idInstitucion"]) && isset($_REQUEST["telefono"])) {
                $institucionTelefono = datos($tabla);

                $sql = "DELETE FROM institucion_telefono WHERE id_institucion = ? AND telefono = ?";
                $params = "ii";
                $atributos = [$institucionTelefono->idInstitucion, $institucionTelefono->telefono];

                $sqlConsulta = "SELECT * FROM institucion_telefono WHERE id_institucion = ? AND telefono = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "libre":
            if (isset($_REQUEST["ci"])) {
                $libre = datos($tabla);

                $sql = "DELETE FROM libre WHERE ci = ?";
                $params = "i";
                $atributos = [$libre->ci];

                $sqlConsulta = "SELECT * FROM libre WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
            // case "login":
            //     if (isset($_REQUEST["idLogin"])) {
            //         $login = datos($tabla);

            //         $sql = "DELETE FROM `login` WHERE id_login = ?";
            //         $params = "i";
            //         $atributos = [$login->idLogin];

            //         $sqlConsulta = "SELECT * FROM `login` WHERE id_login = ?";
            //     } else {
            //         echo json_encode(false);
            //     }

            //     echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            //     break;
        case "paciente":
            if (isset($_REQUEST["ci"])) {
                $paciente = datos($tabla);

                $sql = "DELETE FROM paciente WHERE ci = ?";
                $params = "i";
                $atributos = [$paciente->ci];

                $sqlConsulta = "SELECT * FROM paciente WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "posee":
            if (isset($_REQUEST["idRutina"]) && isset($_REQUEST["idEjercicio"])) {
                $posee = datos($tabla);

                $sql = "DELETE FROM posee WHERE id_rutina = ? AND id_ejercicio = ?";
                $params = "ii";
                $atributos = [$posee->idRutina, $posee->idEjercicio];

                $sqlConsulta = "SELECT * FROM posee WHERE id_rutina = ? AND id_ejercicio = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "realiza":
            if (isset($_REQUEST["idRutina"])) {
                $realiza = datos($tabla);

                $sql = "DELETE FROM realiza WHERE id_rutina = ?";
                $params = "i";
                $atributos = [$realiza->idRutina];

                $sqlConsulta = "SELECT * FROM realiza WHERE id_rutina = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "rutina":
            if (isset($_REQUEST["idRutina"])) {
                $rutina = datos($tabla);

                $sql = "DELETE FROM rutina WHERE id_rutina = ?";
                $params = "i";
                $atributos = [$rutina->idRutina];

                $sqlConsulta = "SELECT * FROM rutina WHERE id_rutina = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "rutDeporte":
            if (isset($_REQUEST["idRutina"])) {
                $rutDeporte = datos($tabla);

                $sql = "DELETE FROM rut_deporte WHERE id_rutina = ?";
                $params = "i";
                $atributos = [$rutDeporte->idRutina];

                $sqlConsulta = "SELECT * FROM rut_deporte WHERE id_rutina = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "rutFisioterapia":
            if (isset($_REQUEST["idRutina"])) {
                $rutFisio = datos($tabla);

                $sql = "DELETE FROM rut_fisioterapia WHERE id_rutina = ?";
                $params = "i";
                $atributos = [$rutFisio->idRutina];

                $sqlConsulta = "SELECT * FROM rut_fisioterapia WHERE id_rutina = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "ultimoPago":
            if (isset($_REQUEST["idUltimoPago"])) {
                $ultimoPago = datos($tabla);

                $sql = "DELETE FROM ultimo_pago WHERE id_ultimo_pago = ?";
                $params = "i";
                $atributos = [$ultimoPago->idUltimoPago];

                $sqlConsulta = "SELECT * FROM ultimo_pago WHERE id_ultimo_pago = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "usuario":
            if (isset($_REQUEST["ci"])) {
                $usuario = datos($tabla);

                $sql = "DELETE FROM usuario WHERE ci = ?";
                $params = "i";
                $atributos = [$usuario->ci];

                $sqlConsulta = "SELECT * FROM usuario WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "usuarioCliente":
            $usuarioCliente = datos($tabla);
            $sql = "DELETE FROM usuario_cliente WHERE ci = ?";
            $params = "i";
            $atributos = [$usuarioCliente->ci];
            $sqlConsulta = "SELECT * FROM usuario_cliente WHERE ci = ?";

            if (verificarExistencia($sqlConsulta, $params, $atributos)) {               
                echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            } else {
                echo json_encode(false);
            }
            break;
        case "usuarioEntrenador":
            if (isset($_REQUEST["ci"])) {
                $usuarioEntrenador = datos($tabla);

                $sql = "DELETE FROM usuario_entrenador WHERE ci = ?";
                $params = "i";
                $atributos = [$usuarioEntrenador->ci];

                $sqlConsulta = "SELECT * FROM usuario_entrenador WHERE ci = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        case "usuarioTelefono":
            if (isset($_REQUEST["ci"]) && isset($_REQUEST["ci"])) {
                $usuarioTelefono = datos($tabla);

                $sql = "DELETE FROM usuario_telefono WHERE ci = ? AND telefono = ?";
                $params = "ii";
                $atributos = [$usuarioTelefono->ci, $usuarioTelefono->telefono];

                $sqlConsulta = "SELECT * FROM usuario_entrenador WHERE ci = ? AND telefono = ?";
            } else {
                echo json_encode(false);
            }

            echo json_encode(eliminarBD($sql, $params, $atributos, $sqlConsulta));
            break;
        default:
            break;
    }
}

function verificarDatos(&$atributos, &$params, &$valores, object $objeto, $tabla)
{

    switch ($tabla) {
        case "asiste":
            if ($objeto->ci != null) {
                $atributos .= "ci = ?, ";
                $params .= "i";
                array_push($valores, $objeto->ci);
            }
            if ($objeto->idRutina != null) {
                $atributos .= "id_rutina = ?, ";
                $params .= "i";
                array_push($valores, $objeto->idRutina);
            }
            if ($objeto->nivel != null) {
                $atributos .= "nivel = ?, ";
                $params .= "s";
                array_push($valores, $objeto->nivel);
            }
            if ($objeto->fechaInicio != null) {
                $atributos .= "fecha_inicio = ?, ";
                $params .= "s";
                array_push($valores, $objeto->fechaInicio);
            }
            if ($objeto->fechaTermino != null) {
                $atributos .= "fecha_termino = ?, ";
                $params .= "s";
                array_push($valores, $objeto->fechaTermino);
            }
            break;
        case "concurre":

            break;
        case "contiene":

            break;
        case "deporte":

            break;
        case "deportista":

            break;
        case "deportistaDeporte":

            break;
        case "efectua":

            break;
        case "ejercicio":

            break;
        case "equipo":

            break;
        case "esta":

            break;
        case "fisioterapia":

            break;
        case "hace":

            break;
        case "incluye":

            break;
        case "institucion":

            break;
        case "libre":

            break;
        case "login":

            break;
        case "paciente":

            break;
        case "posee":

            break;
        case "realiza":

            break;
        case "rutina":

            break;
        case "rutDeporte":

            break;
        case "rutFisioterapia":

            break;
        case "ultimoPago":

            break;
        case "usuario":

            break;
        case "usuarioCliente":
            if ($objeto->ci != null) {
                $atributos .= "ci = ?, ";
                $params .= "i";
                array_push($valores, $objeto->ci);
            }
            if ($objeto->actividad != null) {
                $atributos .= "actividad = ?, ";
                $params .= "s";
                array_push($valores, $objeto->ci);
            }
            if ($objeto->estado != null) {
                $atributos .= "estado = ?, ";
                $params .= "s";
                array_push($valores, $objeto->estado);
            }
            if ($objeto->estadoActividad != null) {
                $atributos .= "estadoActividad = ?, ";
                $params .= "i";
                array_push($valores, $objeto->estadoActividad);
            }
            if ($objeto->fecha != null) {
                $atributos .= "fecha = ?, ";
                $params .= "s";
                array_push($valores, $objeto->fecha);
            }
            if ($objeto->hora != null) {
                $atributos .= "hora = ?, ";
                $params .= "s";
                array_push($valores, $objeto->hora);
            }
            if ($objeto->turnoAgenda != null) {
                $atributos .= "turnoAgenda = ?, ";
                $params .= "s";
                array_push($valores, $objeto->turnoAgenda);
            }
            if ($objeto->cumplimientoAgenda != null) {
                $atributos .= "cumplimientoAgenda = ?, ";
                $params .= "i";
                array_push($valores, $objeto->cumplimientoAgenda);
            }
            if ($objeto->resistenciaAnaerobica != null) {
                $atributos .= "resistenciaAnaerobica = ?, ";
                $params .= "i";
                array_push($valores, $objeto->resistenciaAnaerobica);
            }
            if ($objeto->fuerzaMuscular != null) {
                $atributos .= "fuerzaMuscular = ?, ";
                $params .= "i";
                array_push($valores, $objeto->fuerzaMuscular);
            }
            if ($objeto->resistenciaMuscular != null) {
                $atributos .= "resistenciaMuscular = ?, ";
                $params .= "i";
                array_push($valores, $objeto->resistenciaMuscular);
            }
            if ($objeto->flexibilidad != null) {
                $atributos .= "flexibilidad = ?, ";
                $params .= "i";
                array_push($valores, $objeto->flexibilidad);
            }
            if ($objeto->resistenciaMonotonia != null) {
                $atributos .= "resistenciaMonotonia = ?, ";
                $params .= "i";
                array_push($valores, $objeto->resistenciaMonotonia);
            }
            if ($objeto->resiliencia != null) {
                $atributos .= "resiliencia = ?, ";
                $params .= "i";
                array_push($valores, $objeto->resiliencia);
            }

            break;
        case "usuarioEntrenador":

            break;
        default:
            break;
    }
}
