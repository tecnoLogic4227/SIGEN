<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["nombre"];
        $contrasenia = $_POST["contrasenia"];
        $val_contrasenia = $_POST["val_contrasenia"];
        $email = $_POST["email"];
        $tel = $_POST["tel"];
        $residencia = $_POST["residencia"];
        $fecha = $_POST["fecha"];
        $archivo = $_POST["archivo"];
    
        // Verificar si los campos opcion y terminos están definidos antes de acceder
        $opcion = isset($_POST["opcion"]) ? $_POST["opcion"] : "";
        $terminos = isset($_POST["terminos"]) ? $_POST["terminos"] : "";
    
        // Verifica si todos los datos estan completados
        if (empty($nombre) || empty($contrasenia) || empty($val_contrasenia) || empty($email) || empty($tel) || empty($residencia) || empty($fecha) || empty($archivo) || empty($opcion) || empty($terminos)) {
         //recarga el formulario hasta que esten todos los campos llenos
            header("Location: http://localhost/prueba_index.html");
        } else {
    
            // Validación de nombre
            //strelen sirve para pasar los datos a numeros y asi poder contarlos y compararlos con otro numero
            if (strlen($nombre) >= 10 && strlen($nombre) <= 20) {
                echo "Nombre válido.<br>";
            } elseif (strlen($nombre) < 10) {
                echo "Nombre inválido, muy corto.<br>";
            } elseif (strlen($nombre) > 20) {
                echo "Nombre inválido, muy largo.<br>";
            }
    
            // Validación de contraseñas
            if ($contrasenia === $val_contrasenia) {
                echo "Contraseña válida.<br>";
            } else {
                echo "Contraseñas distintas, verifique.<br>";
            }
    
             //array para guardar los errores que tiene al escribir la contrasenia
            $errores = [];
    
            //cuenta si tiene al menos 8 caracters
            if(strlen($contrasenia) < 8){
                //si tiene error lo guarda en el arrary
                $errores[] = "La contraseña tiene que tener al menos 8 caracteres";
            }
    
            //cuenta si tiene mas de 15 caracteres
            if(strlen($contrasenia) > 15){
                $errores[] = "La contraseña tiene que tener máximo 15 caracteres";
            }
    
            //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos una minuscula
            if (!preg_match('/[a-z]/', $contrasenia)){
                $errores[] = "La contraseña tiene que tener al menos una letra minúscula";
            }
    
            //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos una mayuscula
            if (!preg_match('/[A-Z]/', $contrasenia)){
                $errores[] = "La contraseña tiene que tener al menos una letra mayúscula";
            }
             
            //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos un numero
            if (!preg_match('/[0-9]/', $contrasenia)){
                $errores[] = "La contraseña tiene que tener al menos un dígito";
            }
    
            //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos un caracteer especial
            if(!preg_match('/[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?]/', $contrasenia)){
                $errores[] = "Le falta un carácter especial";
            }
    
            //verifica si el arrary errores tiene algo o no
            if (empty($errores)) {
                //si no tiene muestra el siguiente mensaje
                echo "La contraseña es correcta";
            } else {
                //si lo tiene recorre el array y muestra lo que tiene, lo cual serian los errores que se muestra en cada if
                foreach ($errores as $error) {
                    echo $error . "<br>";
                }
            }
        }
    } else {
         // Si se intenta acceder directamente al script sin POST
        echo "Acceso no permitido.";
    }*/
    
?>