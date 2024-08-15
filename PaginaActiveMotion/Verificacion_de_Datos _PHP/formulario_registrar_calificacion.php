<?php
    if($_SERVER['REQUESTED_METHOD']=='POST'){
        /*
        $ci_cliente=$_POST['ci-cliente'];
        $actividad_cliente=$_POST['actividad-cliente'];

        $cumplimiento_agenda=$_POST['cumplimientoAgenda'];
        $resistencia_anaerobica=$_POST['resistenciaAnaerobica'];
        $fuerza_muscular=$_POST['fuerzaMuscular'];
        $resistencia_muscular=$_POST['resistenciaMuscular'];
        $flexibilidad=$_POST['flexibilidad'];
        $resistencia_monotonia=$_POST['resistenciaMonotonia'];
        $resiliencia=$_POST['resiliencia"'];
        $total=$_POST['total'];
        */

        $datos=["ci cliente" => $_POST['ci-cliente'],
                "actividad cliente" => $_POST['actividad-cliente'],
                "cumplimiento agenda" => $_POST['cumplimientoAgenda'],
                "resistencia anaerobica" => $_POST['resistenciaAnaerobica'],
                "fuerza muscular" => $_POST['fuerzaMuscular'],
                "resistencia muscular" => $_POST['resistenciaMuscular'],
                "flexibilidad" => $_POST['flexibilidad'],
                "resistencia monotonia" => $_POST['resistenciaMonotonia'],
                "resiliencia" => $_POST['resiliencia"'],
                "total" => $_POST['total']];

        $errores=[];

        foreach($datos as $key => $value){
            if(!is_numeric($value)){
                array_push($erroes, "El valor de $key tiene que ser numerico");
            }
            if(empty($value)){
                array_push($erroes, "El valor de $key no puede quedar vacio");
            }
        }
        
        /*Condicion if que diga que si el array de $errores esta vacio que ejecute la funcion
          de SQL
        */
        if(empty($erroes)){
            //funcion SQL
        }else{
            echo "Error al proseguir debido a los siguientes errores:" ."<br>";

            foreach($errores as $error){
                echo $error . "<br>";
            }
        }

        /*if(empty($cumplimiento_agenda) || empty($resistencia_anaerobica) || empty($fuerza_muscular) || empty($resistencia_muscular) || empty($flexibilidad) || empty($resistencia_monotonia) || empty($resiliencia) || empty($total)){
            array_push($errores, "Ninguno de los campos puede quedar vacio");
        }else{
            array_push
            if(!is_numeric($cum))
        }
        */
    }
?>