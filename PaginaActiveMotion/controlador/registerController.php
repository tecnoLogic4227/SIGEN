<?php

require_once("../modelo/crudModel.php");
require_once("../modelo/clases/usuario.php");
require_once("../modelo/clases/usuarioCliente.php");
global $conexion;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    datos();
} else {
    //405 Method Not Allowed, o sea solo permitimos cierto metodo (post)
    http_response_code(405);
    echo json_encode(["Error" => "Metodo incorrecto."]);
    exit();
}

function datos()
{
    $retorno = [];
    $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
    $nombre = isset($_REQUEST["nombre"]) ? $_REQUEST["nombre"] : null;
    $apellido = isset($_REQUEST["apellido"]) ? $_REQUEST["apellido"] : null;
    $direccion = isset($_REQUEST["direccion"]) ? $_REQUEST["direccion"] : null;
    $email = isset($_REQUEST["email"]) ? $_REQUEST["email"] : null;
    $fecha = isset($_REQUEST["fecha"]) ? $_REQUEST["fecha"] : null;
    $telefono = isset($_REQUEST["telefono"]) ? $_REQUEST["telefono"] : null;
    $rol = isset($_REQUEST["rol"]) ? $_REQUEST["rol"] : null;
    $actividad = isset($_REQUEST["actividad"]) ? $_REQUEST["actividad"] : null;
    $estado = isset($_REQUEST["estado"]) ? $_REQUEST["estado"] : null;
    $estadoActividad = isset($_REQUEST["estadoActividad"]) ? $_REQUEST["estadoActividad"] : null;
    $tipoPlan = isset($_REQUEST["plan"]) ? $_REQUEST["plan"] : null;

    // var_dump($ci, $nombre, $apellido, $direccion, $email, $fecha, $telefono, $rol, $actividad, $estado, $estadoActividad, $tipoPlan);

    if ($rol == "cliente") {
        if ($ci != null && $nombre != null && $apellido != null && $direccion != null && $email != null && $fecha != null && $telefono != null && $rol != null && $actividad != null && $estado != null && $estadoActividad != null && $tipoPlan != null) {
            array_push($retorno, new Usuario($ci, $nombre, $apellido, $direccion, $email, $fecha, $telefono, $rol));
            array_push($retorno, new Cliente($ci, $estado, $estadoActividad, $tipoPlan));
            registrarUsuario($ci, $nombre, $apellido, $direccion, $email, $fecha, $telefono, $rol, $actividad, $estado, $estadoActividad, $tipoPlan);
        } else {
            echo json_encode("Ningun campo puede quedar vacio.");
            exit();
        }
    } else {
        if ($ci != null && $nombre != null && $apellido != null && $direccion != null && $email != null && $fecha != null && $telefono != null && $rol != null) {
            array_push($retorno, new Usuario($ci, $nombre, $apellido, $direccion, $email, $fecha, $telefono, $rol));
            registrarUsuario($ci, $nombre, $apellido, $direccion, $email, $fecha, $telefono, $rol, $actividad, $estado, $estadoActividad, $tipoPlan);
        } else {
            echo json_encode("Ningun campo puede quedar vacio.");
            exit();
        }
    }

    
}

function registrarUsuario($ci, $nombre, $apellido, $direccion, $email, $fecha, $telefono, $rol, $actividad, $estado, $estadoActividad, $plan)
{
    $resultado = true;
    
    $sqlConsulta = "SELECT * FROM usuario WHERE ci = ?";
    $paramsConsulta = "i";
    $atributosConsulta = $ci;

    if (listarBD($sqlConsulta, $paramsConsulta, $atributosConsulta)) {
        echo json_encode("Usuario ya existente.");
    } else {
        $sql = "INSERT INTO usuario (ci, nombre, apellido, direccion, email, fecha_nac, rol, telefono) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        $params = "issssssi";
        $atributos = [$ci, $nombre, $apellido, $direccion, $email, $fecha, $rol, $telefono];

        $resultado = registrarBD($sql, $params, $atributos, $sqlConsulta, $paramsConsulta, $atributosConsulta);

        if ($resultado) {
            if ($rol == "cliente") {
                $sql = "INSERT INTO usuario_cliente (ci, actividad, estado, estado_actividad, tipo_plan) VALUES (?, ?, ?, ?, ?)";
                $params = "issis";
                $atributos = [$ci, $actividad, $estado, $estadoActividad, $plan];
    
                $sqlConsulta = "SELECT * FROM usuario_cliente WHERE ci = ?";
                $paramsConsulta = "i";
                $atributosConsulta = $ci;
        
                if (registrarBD($sql, $params, $atributos, $sqlConsulta, $paramsConsulta, $atributosConsulta)) {
                    switch ($actividad) {
                        case "deportista":
                            $sql = "INSERT INTO deportista (ci) VALUES (?)";
                            $params = "i";
                            $atributos = $ci;
                
                            $sqlConsulta = "SELECT * FROM deportista WHERE ci = ?";
                            $paramsConsulta = "i";
                            $atributosConsulta = $ci;

                            echo json_encode(registrarBD($sql, $params, $atributos, $sqlConsulta, $paramsConsulta, $atributosConsulta));
                            break;
                        case "paciente":
                            $sql = "INSERT INTO paciente (ci) VALUES (?)";
                            $params = "i";
                            $atributos = $ci;
                
                            $sqlConsulta = "SELECT * FROM paciente WHERE ci = ?";
                            $paramsConsulta = "i";
                            $atributosConsulta = $ci;

                            echo json_encode(registrarBD($sql, $params, $atributos, $sqlConsulta, $paramsConsulta, $atributosConsulta));
                            break;
                        case "libre":
                            $sql = "INSERT INTO libre (ci) VALUES (?)";
                            $params = "i";
                            $atributos = $ci;
                
                            $sqlConsulta = "SELECT * FROM libre WHERE ci = ?";
                            $paramsConsulta = "i";
                            $atributosConsulta = $ci;

                            echo json_encode(registrarBD($sql, $params, $atributos, $sqlConsulta, $paramsConsulta, $atributosConsulta));
                            break;
                        default:
                        echo json_encode("Tipo de cliente incorrecto.");
                            break;
                    }
                } else {
                    echo json_encode("Error al registar al usuario.");
                }
            } else {
                if ($rol == "entrenador") {
                $sql = "INSERT INTO usuario_entrenador (ci) VALUES (?)";
                $params = "i";
                $atributos = [$ci];
    
                $sqlConsulta = "SELECT * FROM usuario_entrenador WHERE ci = ?";
                $paramsConsulta = "i";
                $atributosConsulta = $ci;
        
                echo json_encode(registrarBD($sql, $params, $atributos, $sqlConsulta, $paramsConsulta, $atributosConsulta));
                } else {
                    echo json_encode($resultado);
                }
            }
        } else {
            echo json_encode($resultado);
        }        
    }
}
?>