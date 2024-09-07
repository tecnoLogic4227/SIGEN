<?php

    if($_SERVER['REQUESTED_METHOD']=='POST'){
        $nombre_deporte=$_POST["nombre-deporte"];
        $tipo_deporte=$_POST["tipo-deporte"];
        $duracion_deporte=$_POST["duracion-deporte"];
        $categoria_deporte=$_POST["categoria-deporte"];
        $cantidad_personas=$_POST["cantidad-deporte"];

        if(empty($nombre_deporte) || empty($tipo_deporte) || empty($duracion_deporte) || empty($categoria_deporte) || empty($cantidad_personas)){
            header("Location: http://localhost/prueba_index.html");
        }else{

            function soloLetras($texto) {
                return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
            }
         
        
            if (soloLetras($nombre_deporte) && soloLetras($tipo_deporte) && soloLetras($categoria_deporte)) {
                if(is_numeric($cantidad_personas)){
                    echo "El nombre del deporte ingresado es $nombre_deporte" . "<br>";
                    echo "El tipo del deporte ingresado es $tipo_deporte" . "<br>";
                    echo "La duracion del deporte ingresado es $duracion_deporte" . "<br>";
                    echo "La categoria del deporte ingresado es $categoria_deporte" . "<br>";
                    echo "La cantidad de jugadores del deporte ingresado es $cantidad_deporte" . "<br>"
                }
            } else {
                echo "Debe poner solo letras (se permiten tildes, ñ y espacios)";
            }

        }else{
            echo "Acceso no permitido";
        }
    }
?>