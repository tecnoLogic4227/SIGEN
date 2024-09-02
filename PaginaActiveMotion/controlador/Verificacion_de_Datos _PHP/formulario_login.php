<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombreUsu = $_POST["nombre"];
    $contrasenia = $_POST["clave"];

    if (empty($nombreUsu) || empty($contrasenia)) {
        header("Location: http://localhost/prueba_index.html");
    } else {
        // Función para validar que solo contiene letras, espacios, tildes y ñ
        function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($nombreUsu)) {
            echo "Su nombre es: $nombreUsu<br>";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios)<br>";
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
    echo "Acceso no permitido";
}
?>