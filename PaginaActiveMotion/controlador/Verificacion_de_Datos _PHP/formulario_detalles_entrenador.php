<?php
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $cedula = $_POST["ci"];
        $deporte = $_POST["deporte"];
    
        $errores = [];
    
        // Validar que todos los campos estén llenos
        if (empty($cedula) || empty($deporte)) {
            $errores[] = "Todos los campos son obligatorios.";
        }
    
        // Validar que la cédula sea numérica y tenga exactamente 8 dígitos
        if (!is_numeric($cedula) || strlen($cedula) != 8) {
            $errores[] = "La cédula debe tener de exactamente 8 dígitos.";
        }
    
        // Función para validar que un campo contenga solo letras y espacios
        function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        // Validar que el deporte contenga solo letras
        if (!soloLetras($deporte)) {
            $errores[] = "El campo Deporte debe contener solo letras, espacios, tildes y ñ.";
        }
    
        // Mostrar errores o procesar datos
        if (!empty($errores)) {
            foreach ($errores as $error) {
                echo $error . "<br>";
            }
        } else {
            echo "La cédula es: $cedula<br>";
            echo "El deporte al que pertenece la cedula $cedula es: $deporte<br>";
            // Aquí puedes agregar el código para procesar los datos validados
        }
    } else {
        echo "Acceso no permitido";
    } 
?>