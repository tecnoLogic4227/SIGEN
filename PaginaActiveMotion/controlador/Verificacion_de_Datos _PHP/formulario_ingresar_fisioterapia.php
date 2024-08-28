<?php
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $nombre = $_POST["nombre-fisio"];
        $id = $_POST["id-fisio"];
        $ejercicio = $_POST["ejercicio-fisio"];
        $musculo = $_POST["musculo-fisio"];
        $series = $_POST["series-fisio"];
        $repeticiones = $_POST["repeticiones-fisio"];
        $descripcion = $_POST["descripcion-fisio"];
    
        $errores = [];
    
        if (empty($nombre) || empty($id) || empty($ejercicio) || empty($musculo) || empty($series) || empty($repeticiones) || empty($descripcion)) {
            $errores[] = "Todos los campos son obligatorios.";
        }
    
        if (!is_numeric($id)) {
            $errores[] = "El campo ID debe ser numérico.";
        }
    
        if (strlen($id)==8) {
            $errores[] = "El campo ID debe tener exactamente 8 numeros.";
        }
    
        if (!is_numeric($series) || !is_numeric($repeticiones)) {
            $errores[] = "Los campos Series y Repeticiones deben ser numéricos.";
        }
    
        function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        if (soloLetras($nombre) || soloLetras($ejercicio) || soloLetras($musculo) || soloLetras($descripcion)) {
            echo "Nombre: $nombre<br>";
            echo "Ejercicio: $ejercicio<br>";
            echo "Músculo: $musculo<br>";
            echo "Descripción: $descripcion<br>";
        }else{
            $errores[] = "Los campos Nombre, Ejercicio y Músculo deben contener solo letras, espacios, tildes y ñ.";
        }
    
        if (!empty($errores)) {
            foreach ($errores as $error) {
                echo $error . "<br>";
            }
        } else {
            echo "ID: $id<br>";
            echo "Series: $series<br>";
            echo "Repeticiones: $repeticiones<br>";
            
        }
    } else {
        echo "Acceso no permitido";
    }
?>