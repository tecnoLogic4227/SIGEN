<?php
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $deporteEquipo=$_POST["deporteClub"];
        $clubEquipo=$_POST["clubEquipo"];
    
        if(empty($deporteEquipo) || empty($clubEquipo)){
            header("Location: http://localhost/prueba_index.html");
        }else{
    
             // Función para validar que solo contiene letras, espacios, tildes y ñ
             function soloLetras($texto) {
                return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
            }
        
            //llama la funcion mas la variable que quiere verificar 
            if (soloLetras($deporteEquipo) && soloLetras($clubEquipo)) {
                echo "El club $clubEquipo pertence al deporte $deporteEquipo";
            } else {
                echo "Debe poner solo letras (se permiten tildes, ñ y espacios)";
            }
        }else{
        echo "Acceso no permitido";
        }
    }
?>