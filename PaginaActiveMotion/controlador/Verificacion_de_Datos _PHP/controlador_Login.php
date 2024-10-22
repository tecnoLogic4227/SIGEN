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
    

    //Funcion para verificar login
    function verificar_login(){
        global $conexion, $ci_usu, $contrasenia;
        $rol_usu=$_POST["rol-usuario"];
        /*foreach($_POST["rol-usuario"] as $rol){
            $rol_usu=$rol;
        }
        */

        $rol_usuario="";

        switch($rol_usu){
            case "administrativo":
                $rol_usuario="administrativo";
            break;

            case "avanzado":
                $rol_usuario="avanzado";
            break;

            case "seleccionador":
                $rol_usuario="seleccionador";
            break;

            case "entrenador":
                $rol_usuario="entrenador";
            break;

            case "cliente":
                $rol_usuario= "cliente";
            break;
            
            default:
                $response['status'] = 401;
                $response['message'] = "Rol de usuario incorrecto!"; 
                http_response_code(401);
        }

        //SELECT * FROM LOGIN JOIN USUARIO.rol WHERE LOGIN.ci=? AND LOGIN.contrasenia = ?;
        $sql="SELECT * FROM LOGIN JOIN USUARIO ON LOGIN.ci = USUARIO.ci WHERE LOGIN.ci=? AND LOGIN.contrasenia=? AND USUARIO.rol=?;";

        $stmt=$conexion->prepare($sql);
        $stmt->bind_param("sss", $ci_usu, $contrasenia, $rol_usuario);
        
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $datos = $result->fetch_assoc();
            session_start();
            $_SESSION['usuario'] = $ci_usu;
           // $_SESSION['ci'] = $datos['ci'] . " " . $datos['nombre'] . " " . $datos['apellido'] . " " . $datos['direccion'] . " " . $datos['email'];
           $_SESSION['ci'] = $datos['ci'];
           $_SESSION['rol'] = $rol_usuario;
            $response['status'] = 200;
            $response['message'] = "Bienvenido " . $datos['ci'] . " " . $datos['contrasenia'];
            http_response_code(200);
            
            //registrar_ultimo_login();

            switch($rol_usuario){
                case "administrativo":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/administrador/indexAdministrativo.html");
                break;

                case "entrenador":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/entrenador/inicioEntrenador.html");
                break;

                case "seleccionador":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/seleccionador/indexSeleccionador.html");
                break;

                case "cliente":
                    header("Location: http://localhost/PaginaActiveMotion/vista/html/cliente/indexUsuario.html");
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
        verificar_login();
    }
} else {
    echo "Acceso no permitido";
}
?>