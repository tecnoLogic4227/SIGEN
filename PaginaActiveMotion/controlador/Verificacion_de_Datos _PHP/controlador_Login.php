<?php

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $ci_usu = $_POST["ci"];
    $contrasenia = md5($_POST["clave"]);

    $host="localhost";
    $user="root";
    $password="";
    $database="ActiveMotion";

    $conexion= new mysqli($host, $user, $password, $database);

    if ($conexion->connect_error) {
        die("Error de conexion " . $conexion->connect_error);
    }
    
    //funcion para registrar fecha del ultimo login
    function registrar_ultimo_login(){
        global $conexion, $ci_usu;

        $fecha_login=date("Y-m-d");

        $sql="UPDATE usuario SET ultimo_login=? WHERE usuario.ci=?";

        $stmt=$conexion->prepare($sql);
        $stmt->bind_param("si", $fecha_login, $ci_usu);
        $stmt->execute();
        $stmt->close();
    }
    //Funcion para verificar login
    function verificar_login(){
        global $conexion, $ci_usu, $contrasenia;
        $rol_usu="";
        foreach($_POST["rol-usuario"] as $rol){
            $rol_usu=$rol;
        }

        $tabla_rol="";

        switch($rol_usu){
            case "administrativo":
                $tabla_rol="usuario_administrativo";
            break;

            case "avanzado":
                $tabla_rol="usuario_avanzado";
            break;

            case "seleccionador":
                $tabla_rol="usuario_seleccionador";
            break;

            case "entrenador":
                $tabla_rol="usuario_entrenador";
            break;

            default:
                $response['status'] = 401;
                $response['message'] = "Rol de usuario incorrecto!"; 
                http_response_code(401);
        }

        $sql="SELECT * FROM usuario JOIN $tabla_rol ON usuario.ci=$tabla_rol" . ".ci WHERE usuario.ci= ? AND usuario.contrasenia = ?;";

        $stmt=$conexion->prepare($sql);
        $stmt->bind_param("ss", $ci_usu, $contrasenia);
        
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $datos = $result->fetch_assoc();
            session_start();
            $_SESSION['usuario'] = $ci_usu;
            $_SESSION['ci'] = $datos['ci'] . " " . $datos['nombre'] . " " . $datos['apellido'] . " " . $datos['direccion'] . " " . $datos['email'];
        
            $response['status'] = 200;
            $response['message'] = "Bienvenido " . $datos['ci'] . " " . $datos['contrasenia'];
            http_response_code(200);
            
            registrar_ultimo_login();

            switch($rol_usu){
                case "administrativo":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/administrador/indexAdministrativo.html");
                break;

                case "entrenador":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/administrador/inicioEntrenador.html");
                break;

                case "seleccionador":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/administrador/indexSeleccionador.html");
                break;

                case "cliente":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/administrador/indexUsuario.html");
                break;
            }

        } else {
            $response['status'] = 401;
            $response['message'] = "Usuario, password o rol incorrectos"; 
            http_response_code(401);
        }
        
        echo json_encode($response);
    }

    

    if (empty($ci_usu) || empty($contrasenia)) {
        
        echo "Usuario y contraseña vacios!" ."<br>";
        echo $ci_usu;
        echo "<br>";
        echo $contrasenia;

    } else {
        
        
        // Función para validar que solo contiene letras, espacios, tildes y ñ
        function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($ci_usu)) {
            echo "Su nombre es: $ci_usu<br>";
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
            verificar_login();
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