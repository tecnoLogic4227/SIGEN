<?php
require_once 'controlador_session.php';
verificarSesion('usuario_avanzado');
    if($_SERVER['REQUESTED_METHOD']=='POST'){
        $nombre_ejercicio=$_POST["nombre-ejercicio"];
        $musculo_ejercicio=$_POST["musculo-ejercicio"];
        $series_ejercicio=$_POST["series-ejercicio"];
        $repetciones_ejercicio=$_POST["rep-ejercicio"];
        $descripcion_ejercicio=$_POST["descripcion-ejercicio"];

        $errores=[];
        if(empty($nombre_ejercicio) || empty($musculo_ejercicio) || empty($series_ejercicio) || empty($repetciones_ejercicio) || empty($descripcion_ejercicio)){
            array_push($errores, "Ninguno de los campos puede quedar vacio");
        }else{
            function soloLetras($texto) {
                return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
            }

            if(!soloLetras($nombre_ejercicio)){
                array_push($errores, "El campo del nombre del ejercicio solo admite letras");
            }
            if(!soloLetras($musculo_ejercicio)){
                array_push($errores, "El campo del musculo del ejercicio solo admite letras");
            }
            if(!soloLetras($series_ejercicio)){
                array_push($errores, "El campo de las series de los ejercicios solo admite letras");
            }
            if(!soloLetras($repetciones_ejercicio)){
                array_push($errores, "El campo de las repeticiones de los ejercicios solo admite letras");
            }
            if(!soloLetras($descripcion_ejercicio)){
                array_push($errores, "El campo de la descripcion del ejercicio solo admite letras");
            }

        }
        
    }else{
        echo "Acceso no permitido";
    }
?>