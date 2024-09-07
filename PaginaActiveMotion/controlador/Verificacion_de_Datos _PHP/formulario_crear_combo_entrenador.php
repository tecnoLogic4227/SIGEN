<?php
require_once 'controlador_session.php';

verificarSesion('usuario_entrenador');
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $nombreCombo = $_POST["nombreCombo"];
        $ID_Combo = $_POST["ID_Combo"];
        $ID_Plan = $_POST["ID_Plan"];
        $seriesCombo = $_POST["seriesCombo"];
        $repCombo = $_POST["repCombo"];
        $descCombo = $_POST["descCombo"];
        $ejercicioCombo = $_POST["ejercicioCombo"];
        $musculoCombo = $_POST["musculoCombo"];
    
        $errores = [];
    
        if (empty($nombreCombo) || empty($ID_Combo) || empty($ID_Plan) || empty($seriesCombo) || empty($repCombo) || empty($descCombo) || empty($ejercicioCombo) || empty($musculoCombo)) {
            header("Location: http://localhost/prueba_index.html");
        }
    
        if (!is_numeric($ID_Combo) || !is_numeric($ID_Plan) || !is_numeric($seriesCombo) || !is_numeric($repCombo)) {
            $errores[] = "Los campos ID Combo, ID Plan, Series y Repeticiones deben ser numéricos.";
        }
    
        if (strlen($ID_Combo) != 8 || strlen($ID_Plan) != 8) {
            $errores[] = "Los campos ID Combo e ID Plan deben tener exactamente 8 números.";
        }
    
        function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        
        if (!soloLetras($nombreCombo) || !soloLetras($descCombo) || !soloLetras($musculoCombo) || !soloLetras($ejercicioCombo)) {
            $errores[] = "Los campos Nombre, Ejercicio, Músculo y Descripción deben contener solo letras, espacios, tildes y ñ.";
        }
    
        if (!empty($errores)) {
            foreach ($errores as $error) {
                echo $error . "<br>";
            }
        } else {
            echo "El nombre del combo es: $nombreCombo<br>";
            echo "El ID del combo es: $ID_Combo<br>";
            echo "El ID del plan es: $ID_Plan<br>";
            echo "El ejercicio de este combo es: $ejercicioCombo<br>";
            echo "El músculo al que entrena este combo es: $musculoCombo<br>";
            echo "La cantidad de series que tiene el combo es: $seriesCombo<br>";
            echo "La cantidad de repeticiones que tiene el combo es: $repCombo<br>";
            echo "La descripción del entrenamiento es: $descCombo<br>";
            
        }
    } else {
        echo "Acceso no permitido";
    } 
?>