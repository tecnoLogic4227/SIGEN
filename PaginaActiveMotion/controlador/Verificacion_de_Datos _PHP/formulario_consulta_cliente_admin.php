<?php
    
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $cedula = $_POST["ciPD"];
        
        if (empty($cedula)) {
            header("Location: http://localhost/prueba_index.html");
        } else {

            //Aca tenemos dos opciones para verificar que son numeros y el tamanio

           /*
           //opcion 1: 
           // Función para validar que solo contiene números
            function soloNumeros($numero) {
                return preg_match('/^[0-9]+$/', $numero);
            }
            
            if (soloNumeros($cedula)) {
                if (strlen($cedula) == 8) {
                    echo "La cédula es: $cedula";
                } else {
                    echo "La cédula debe tener exactamente 8 dígitos";
                }
            } else {
                echo "Ingrese solo números";
            }*/

            //opicon 2:
            //is_numeric es una funcion que verifica que son solo numeros dentro de la variable que le demos
             if (is_numeric($cedula)) {
                if (strlen($cedula) == 8) {
                    echo "La cédula es: $cedula";
                } else {
                    echo "La cédula debe tener exactamente 8 dígitos.";
                }
            } else {
                echo "Ingrese solo números en el campo de cédula.";
            }
        }
    } else {
        echo "Acceso no permitido";
    }
?>