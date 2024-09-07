<?php
require_once 'controlador_session.php';

verificarSesion('usuario_entrenador');
    if($_SERVER['REQUESTED METHOD'] == 'POST'){
        $ci=$_POST["ci-cliente"];
        $actividad=$_POST["actividad-cliente"];

        $errores=[];
        if(empty($ci) || empty($actividad)){
            array_push($errores, "Ninguno de los campos puede quedar vacio");
        }

        if(!is_numeric($ci)){
            array_push($errores, "La cedula solo puede tener digitos");
        }

        if(strlen($ci) ==8){
            echo "La cedula del cliente es: $ci";
        }else{
            array_push($errores, "La cedula debe de tener exactamente 8 digitos");
        }

        if(empty($errores)){
            //llama a la funcion de SQL 
        }else{
            echo "No se pudo proseguir debido a los siguientes errores" ."<br>";
            foreach($errores as $error){
                echo $error . "<br>";
            }
        }
        
    }else{
        echo "Acceso no permitido";
    }


?>