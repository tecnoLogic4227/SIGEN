<?php
    if($_SERVER['REQUEST_METHOD']== "POST"){
        $cedula=$_POST["CI"];
        $actividad=$_POST["actividadCliente"];
        $idRutina=$_POST["ID_Rutina"];
    
        if(empty($cedula) || empty($actividad) || empty($idRutina)){
            header("Location: http://localhost/prueba_index.html");
        }else{
    
            //is_numeric es una funcion que verifica que son solo numeros dentro de la variable que le demos
                  if (is_numeric($cedula)) {
                    if (strlen($cedula) == 8) {
                        echo "La cédula es: $cedula". "<br>";
                    } else {
                        echo "La cédula debe tener exactamente 8 dígitos.". "<br>";
                    }
                } else {
                    echo "Ingrese solo números en el campo de cédula.". "<br>";
                }
    
            // Función para validar que solo contiene letras, espacios, tildes y ñ
             function soloLetras($texto) {
                return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
            }
        
            //llama la funcion mas la variable que quiere verificar 
            if (soloLetras($actividad)) {
                echo "La actividad a la que pertenece la cedula $cedula es $actividad". "<br>";
            } else {
                echo "Debe poner solo letras (se permiten tildes, ñ y espacios)". "<br>";
            }
    
            if (is_numeric($idRutina)) {
                if (strlen($idRutina) == 8) {
                    echo "El id de la rutina es: $idRutina";
                } else {
                    echo "El id debe tener exactamente 8 dígitos.". "<br>";
                }
            } else {
                echo "Ingrese solo números en el campo de cédula.". "<br>";
            }
    
        }
    }*/
    
?>