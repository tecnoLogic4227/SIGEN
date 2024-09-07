<?php
require_once 'controlador_session.php';

verificarSesion('usuario_entrenador');
    if($_SERVER['REQUESTED_METHOD']=='POST'){
        $nombre_plan=$_POST["nombre-plan"];
        $id_plan=$_POST["id-plan"];
        $seccion_plan=$_POST["seccion-plan"];

        $errores=[];
        if(empty($nombre_plan) || empty($id_plan) || empty($seccion_plan)){
            array_push($errores, "Ninguno de los campos puede quedar vacio");
        }else{
            function soloLetras($texto) {
                return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
            }

            if(!soloLetras($nombre_plan)){
                array_push($errores, "El campo del nombre del plan solo admite letras");
            }

            if(!soloLetras($seccion_plan)){
                array_push($errores, "El campo de la seccion del plan solo admite letras");
            }
        }else{
            echo "Acceso no permitido";
        }

    }
?>