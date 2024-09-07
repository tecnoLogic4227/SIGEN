<?php


require_once 'controlador_session.php';

verificarSesion('usuario_seleccionador');
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombreDeportista= $_POST["nombreDeportista"];
    $deporteDeportista=$_POST["deporteDeportista"];
    $clubDeportista=$_POST["clubDeportista"];
    
    if(empty($nombreDeportista) || empty($deporteDeportista) || empty($clubDeportista)){
        header("Location: http://localhost/prueba_index.html");
    }else{
    
         // Función para validar que solo contiene letras, espacios, tildes y ñ
         function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($nombreDeportista) && soloLetras($deporteDeportista) && soloLetras($clubDeportista)) {
            echo "El deportista: $nombreDeportista, fue agregado al club: $clubDeportista, perteneciente al deporte $deporteDeportista";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios)";
        }
    }
    }else{
        echo "Acceso no permitido";
    } 

?>