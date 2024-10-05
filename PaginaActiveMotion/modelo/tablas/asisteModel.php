<?php

$server = 'localhost';
$user = 'root';
$password = '';
$data_base = 'activemotion';
$conexion;

function conexionBD()
{
    global $conexion, $server, $user, $password, $data_base;
    $conexion = new mysqli($server, $user, $password, $data_base);
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    return $conexion;
}

function verificarExistenciaAsiste($ci, $idRutina, $nivel, $fechaInicio, $fechaTermino)
{

    $conexion = conexionBD();

    try {

        $stmt = $conexion->prepare("SELECT * FROM usuario WHERE ci = ?");
        $stmt->bind_param("i", $ci);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $existe = ($resultado->num_rows > 0);

        $stmt->close();

        if (!$existe) {
            $stmt = $conexion->prepare("INSERT INTO usuario (ci) VALUES (?)");
            $stmt->bind_param("i", $ci);
            $stmt->execute();
            $stmt->close();
        }

        $stmt = $conexion->prepare("SELECT * FROM usuario_cliente WHERE ci = ?");
        $stmt->bind_param("i", $ci);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $existe = ($resultado->num_rows > 0);

        $stmt->close();

        if (!$existe) {
            $stmt = $conexion->prepare("INSERT INTO usuario_cliente (ci) VALUES (?)");
            $stmt->bind_param("i", $ci);
            $stmt->execute();
            $stmt->close();
        }

        $stmt = $conexion->prepare("SELECT * FROM paciente WHERE ci = ?");
        $stmt->bind_param("i", $ci);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $existe = ($resultado->num_rows > 0);

        $stmt->close();

        if (!$existe) {
            $stmt = $conexion->prepare("INSERT INTO paciente (ci) VALUES (?)");
            $stmt->bind_param("i", $ci);
            $stmt->execute();
            $stmt->close();
        }

        $stmt = $conexion->prepare("SELECT * FROM rutina WHERE id_rutina = ?");
        $stmt->bind_param("i", $idRutina);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $existe = ($resultado->num_rows > 0);

        $stmt->close();

        if (!$existe) {
            $stmt = $conexion->prepare("INSERT INTO rutina (id_rutina) VALUES (?)");
            $stmt->bind_param("i", $idRutina);
            $stmt->execute();
            $stmt->close();
        }

        $stmt = $conexion->prepare("SELECT * FROM rut_fisioterapia WHERE id_rutina = ?");
        $stmt->bind_param("i", $idRutina);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $existe = ($resultado->num_rows > 0);

        $stmt->close();

        if (!$existe) {
            $stmt = $conexion->prepare("INSERT INTO rut_fisioterapia (id_rutina) VALUES (?)");
            $stmt->bind_param("i", $idRutina);
            $stmt->execute();
            $stmt->close();
        }

        $stmt = $conexion->prepare("SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?");
        $stmt->bind_param("ii", $ci, $idRutina);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $existe = ($resultado->num_rows > 0);

        $stmt->close();

        if (!$existe) {
            $stmt = $conexion->prepare("INSERT INTO asiste (ci, id_rutina, nivel, fecha_inicio, fecha_termino) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("iisss", $ci, $idRutina, $nivel, $fechaInicio, $fechaTermino);
            $stmt->execute();
            $stmt->close();
        }


        $stmt = $conexion->prepare("SELECT * FROM asiste WHERE ci = ? AND id_rutina = ?");
        $stmt->bind_param("ii", $ci, $idRutina);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $existe = ($resultado->num_rows > 0);

        $stmt->close();

        if ($existe) {
            return true;
        } else {
            return false;
        }
    } catch (Exception $e) {
        echo json_encode(["Error" => $e->getMessage()]);
        return false;
    }
}

?>