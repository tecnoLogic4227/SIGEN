<?php
require_once 'usuario.php';
require_once 'usuario_cliente.php';
require_once 'usuario_entrenador.php';
require_once 'paciente.php';
require_once 'deportista.php';
require_once 'libre.php';
require_once 'conexion.php';
require_once 'rutina.php';
require_once 'rut_fisioterapia.php';
require_once 'rut_deporte.php';
require_once 'deporte.php';
require_once 'fisioterapia.php';
require_once 'ejercicio.php';
require_once 'equipo.php';
require_once 'ultimo_pago.php';
require_once 'deportista_deportes.php';
require_once 'institucion.php';
require_once 'institucion_telefono.php';
require_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['entidad'])) {
        $entidad = $_POST['entidad'];
        
        if ($entidad == 'usuario') {
            $ci = $_POST['ci'];
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $direccion = $_POST['direccion'];
            $email = $_POST['email'];
            $contrasenia = $_POST['contrasenia'];
            $fecha_nac = $_POST['fecha_nac'];
            $ultimo_login = date('Y-m-d H:i:s');

            $usuario = new Usuario($ci, $nombre, $apellido, $direccion, $email, $contrasenia, $fecha_nac, $ultimo_login);
            $result = $usuario->save();

            if ($resultUsuario && isset($_POST['telefono'])) {
                $telefonos = $_POST['telefono'];
    
                foreach ($telefonos as $telefono) {
                    $usuarioTelefono = new Usuario_Telefono($ci, $telefono);
                    $resultTelefono = $usuarioTelefono->save();
    
                    if (!$resultTelefono) {
                        echo json_encode(array('success' => false, 'message' => 'Error al insertar teléfono.'));
                        exit;
                    }
                }
            }

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar usuario.'));
            }

        } else if ($entidad == 'usuario_cliente') {
            $ci = $_POST['ci'];
            $actividad = $_POST['actividad'];
            $estado = $_POST['estado'];
            $calificacion = $_POST['calificacion'];
            $estado_actividad = $_POST['estado_actividad'];
            $fecha = $_POST['fecha'];
            $hora = $_POST['hora'];
            $turno_agenda = $_POST['turno_agenda'];

            $cliente = new Cliente($ci, $actividad, $estado, $calificacion, $estado_actividad, $fecha, $hora, $turno_agenda);
            $result = $cliente->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar cliente.'));
            }

        } else if ($entidad == 'usuario_entrenador') {
            $ci = $_POST['ci'];

            $entrenador = new Entrenador($ci);
            $result = $entrenador->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar entrenador.'));
            }

        } else if ($entidad == 'paciente') {
            $ci = $_POST['ci'];
            $motivo = $_POST['motivo'];
            $lesion = $_POST['lesion'];

            $paciente = new Paciente($ci, $motivo, $lesion);
            $result = $paciente->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar paciente.'));
            }

        } else if ($entidad == 'deportista') {
            $ci = $_POST['ci'];
            $posicion = $_POST['posicion'];

            $deportista = new Deportista($ci, $posicion);
            $result = $deportista->save();

            if ($resultDeportista && isset($_POST['deportes'])) {
                $deportes = $_POST['deportes'];
                foreach ($deportes as $deporte) {
                    $deportistaDeporte = new Deportista_Deportes($ci, $deporte);
                    $resultDeporte = $deportistaDeporte->save();
                    if (!$resultDeporte) {
                        echo json_encode(array('success' => false, 'message' => 'Error al insertar deporte.'));
                        exit;
                    }
                }
            }

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar deportista.'));
            }

        } else if ($entidad == 'libre') {
            $ci = $_POST['ci'];

            $libre = new Libre($ci);
            $result = $libre->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar libre.'));
            }

        }else if ($entidad == 'rutina') {
            $id_rutina = $_POST['id_rutina'];

            $rutina = new Rutina($id_rutina);
            $result = $rutina->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar rutina.'));
            }

        } else if ($entidad == 'rut_fisioterapia') {
            $id_rutina = $_POST['id_rutina'];

            $rut_fisioterapia = new Rut_Fisioterapia($id_rutina);
            $result = $rut_fisioterapia->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar rutina de fisiotrapia.'));
            }

        } else if ($entidad == 'rut_deporte') {
            $id_rutina = $_POST['id_rutina'];

            $rut_deporte = new Rut_Deporte($id_rutina);
            $result = $rut_deporte->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar rutina de deporte.'));
            }

        } else if ($entidad == 'institucion'){
            $id_institucion = $_POST['id_institucion'];
            $nombre_institucion = $_POST['nombre_institucion'];
            $direccion = $_POST['direccion'];

            $institucion = new Institucion($id_institucion,  $nombre_institucion, $direccion);
            $result = $institucion->save();

            if ($resultInstitucion && isset($_POST['telefono'])) {
                $telefonos = $_POST['telefono'];
    
                foreach ($telefonos as $telefono) {
                    $institucionTelefono = new Institucion_Telefono($id_institucion, $telefono);
                    $resultTelefono = $institucionTelefono->save();
    
                    if (!$resultTelefono) {
                        echo json_encode(array('success' => false, 'message' => 'Error al insertar teléfono.'));
                        exit;
                    }
                }
            }

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar institucion.'));
            }

        }else if ($entidad == 'deporte') {
            $nombre_deporte = $_POST['nombre_deporte'];
            $descripcion = $_POST['descripcion'];

            $deporte = new Deporte($nombre_deporte, $descripcion);
            $result = $deporte->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar deporte.'));
            }

        } else if ($entidad == 'fisioterapia') {
            $id_fisioterapia = $_POST['id_fisioterapia'];
            $nombre_fisioterapia = $_POST['nombre_fisioterapia'];
            $tipo_fisioterapia = $_POST['tipo_fisioterapia'];
            $descripcion = $_POST['descripcion'];

            $fisioterapia = new Fisioterapia($id_fisioterapia, $nombre_fisioterapia, $tipo_fisioterapia, $descripcion);
            $result = $fisioterapia->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar fisioterapia.'));
            }

        } else  if ($entidad == 'ejercicio') {
            $id_ejercicio = $_POST['id_ejercicio'];
            $nombre_ejercicio = $_POST['nombre_ejercicio'];
            $nro_rep = $_POST['nro_rep'];
            $nro_series = $_POST['nro_series'];
            $grupo_muscular = $_POST['grupo_muscular'];
            $descripcion = $_POST['descripcion'];

            $ejercicio = new Ejercicio($id_ejercicio, $nombre_ejercicio, $nro_rep, $nro_series, $grupo_muscular, $descripcion);
            $result = $ejercicio->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar ejercicio.'));
            }

        } else if ($entidad == 'equipo') {
            $id_equipo = $_POST['id_equipo'];
            $nombre_equipo = $_POST['nombre_equipo'];
            $cantidad = $_POST['cantidad'];

            $equipo = new Equipo($id_equipo, $nombre_equipo, $cantidad);
            $result = $equipo->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar equipo.'));
            }

        } else if ($entidad == 'ultimo_pago') {
            $id_ultimo_pago = $_POST['id_ultimo_pago'];
            $hora = $_POST['hora'];
            $fecha = $_POST['fecha'];
            $valor = $_POST['valor'];

            $ultimo_pago = new Ultimo_Pago($id_ultimo_pago, $hora, $fecha, $valor);
            $result = $ultimo_pago->save();

            if ($result) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al insertar ultimo pago.'));
            }
        }

        if ($result) {
            echo json_encode(array('success' => false));
        }
    } else {
        echo json_encode(array('error' => 'Entidad no especificada.'));
    }
}
?>
