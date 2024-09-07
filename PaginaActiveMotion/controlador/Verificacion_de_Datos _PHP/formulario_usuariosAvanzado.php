<?php
    require_once 'controlador_session.php';
    verificarSesion('usuario_avanzado');



    if($_SERVER['REQUESTED_METHOD']=='POST'){
        $datos_cliente=["nombre cliente" => $_POST["nombre-cliente"],
                        "apellido cliente" => $_POST["apellido-cliente"],
                        "email cliente" => $_POST["email-cliente"],
                        "ci-cliente" => $_POST["ci-cliente"],
                        "matricula cliente" => $_POST["matricula-cliente"],
                        "celular cliente" => $_POST["celular-cliente"],
                        "actividad cliente" => $_POST["actividad-cliente"],
                        "club cliente" => $_POST["club-cliente"],
                        "plan cliente" => $_POST["plan-cliente"]];

        $errores=[];

        foreach($datos_cliente as $key => $value){
            if(empty($value)){
                array_push($erroes, "El valor de $key no puede quedar vacio");
            }
        }
    }
?>