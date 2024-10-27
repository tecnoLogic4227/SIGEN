<?php

require_once("../modelo/crudModel.php");
global $conexion;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    datos();
} else {
    //405 Method Not Allowed, o sea solo permitimos cierto metodo (post)
    http_response_code(405);
    echo json_encode(["Error" => "Metodo incorrecto."]);
    exit();
}

datos();

function datos()
{
    $ci = isset($_REQUEST["ci"]) ? $_REQUEST["ci"] : null;
    $contrasenia = isset($_REQUEST["contrasenia"]) ? $_REQUEST["contrasenia"] : null;

    if ($ci != null && $contrasenia != null) {
        verificarLogin($ci, $contrasenia);
    } else {
        echo json_encode("Ningun campo puede quedar vacio.");
        exit();
    }
}

function verificarLogin($ci, $contrasenia)
{
    $sql = "SELECT * FROM `login` WHERE ci = ?";
    $params = "i";
    $atributos = $ci;

    $resultadoLogin = listarBD($sql, $params, $atributos);

    $sql = "SELECT rol FROM usuario WHERE ci = ?";

    $resultadoRol = listarBD($sql, $params, $atributos);

    if ($resultadoLogin) {
        if ($resultadoLogin[0]["ci"] == $ci && $resultadoLogin[0]["contrasenia"] == $contrasenia && $resultadoRol) {
            redireccionarUsuario($resultadoRol);
        } else {
            echo json_encode("Contraseña no válida.");
            exit();
        }
    } else {
        echo json_encode("Usuario no encontrado.");
        exit();
    }
}

function redireccionarUsuario($resultadoRol)
{
    $url = '';
    switch ($resultadoRol[0]["rol"]) {
        case "cliente":
            $url = "../cliente/indexUsuario.html";
            break;
        case "entrenador":
            $url = "../entrenador/inicioEntrenador.html";
            break;
        case "administrativo":
            $url = "../administrador/indexAdministrativo.html";
            break;
        case "seleccionador":
            $url = "../seleccionador/indexSeleccionador.html";
            break;
        case "avanzado":
            $url = "../avanzado/indexAvanzado.html";
            break;
        case "administradorti":
            $url = "../superUsuario/inicioSuperUsuario.html";
            break;
    }
    
    echo json_encode(["redirect" => $url]);
    exit();
}


?>