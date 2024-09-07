<?php
    require_once 'controlador_session.php';
    
    verificarSesion('usuario_entrenador');
if($_SERVER['REQUEST_METHOD']== "POST"){
    $diaEntrenamiento=$_POST["diaEntrenamiento"];
    $musculoEntrenamiento=$_POST["musculoEntrenamiento"];
    $descEntrenamiento=$_POST["descEntrenamiento"];
    $seriesEntrenamiento=$_POST["seriesEntrenamiento"];
    $repEntrenamiento=$_POST["repEntrenamiento"];

    if(empty($diaEntrenamiento) || empty($musculoEntrenamiento) || empty($descEntrenamiento) || empty($seriesEntrenamiento) || empty($repEntrenamiento)){
        header("Location: http://localhost/prueba_index.html");
    }else{

        //is_numeric es una funcion que verifica que son solo numeros dentro de la variable que le demos
              if (is_numeric($diaEntrenamiento) || is_numeric($seriesEntrenamiento) || is_numeric($repEntrenamiento) ) {
                    echo "El dia de entrenamiento es el $diaEntrenamiento". "<br>";
                    echo "La cantidad de series que tiene el entrenamiento es $seriesEntrenamiento". "<br>";
                    echo "La cantidad de repeticiones que tiene el entrenamiento es $repEntrenamiento". "<br>";
                }else {
                echo "Ingrese solo números en el campo de dia, series y repeticiones del entrenamiento.". "<br>";
            }

        // Función para validar que solo contiene letras, espacios, tildes y ñ
         function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($musculoEntrenamiento) || soloLetras($descEntrenamiento)) {
            echo "El musculo al que entrena este entrenamieno es $musculoEntrenamiento". "<br>";
            echo "La descripcion del entrenamiento es $descEntrenamiento". "<br>";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios) en los campos de musculo y descripcion". "<br>";
        }

    }
}
?>