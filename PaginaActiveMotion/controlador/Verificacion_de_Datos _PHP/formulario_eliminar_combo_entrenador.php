<?php
require_once 'controlador_session.php';

verificarSesion('usuario_entrenador');
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $nombre = $_POST["nombre"];
        $id = $_POST["id"];
        $seccion = $_POST["seccion"];
    
        $errores = [];
    
        if (empty($nombre) || empty($id) || empty($seccion)) {
            $errores[] = "Todos los campos son obligatorios.";
        }
    
        if (!is_numeric($id)) {
            $errores[] = "El campo ID debe ser numérico.";
        }
    
        if (strlen($id)==8) {
            $errores[] = "El campo ID debe tener exactamente 8 numeros.";
        }
    
        function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        if (!soloLetras($nombre) || !soloLetras($seccion)) {
            $errores[] = "Los campos Nombre y Sección deben contener solo letras, espacios, tildes y ñ.";
        }
    
        if (!empty($errores)) {
            foreach ($errores as $error) {
                echo $error . "<br>";
            }
        } else {
            echo "El nombre del combo  es: $nombre<br>";
            echo "El ID del combo es: $id<br>";
            echo "La sección a la que pertenece el combo es: $seccion<br>";
        }
    } else {
        echo "Acceso no permitido";
    }
?>