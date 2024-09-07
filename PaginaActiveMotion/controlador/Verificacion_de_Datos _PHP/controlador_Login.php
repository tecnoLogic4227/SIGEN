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

        //$sql="SELECT * FROM usuario JOIN $tabla_rol ON usuario.ci=$tabla_rol" . ".ci WHERE usuario.ci= ? AND usuario.contrasenia = ?;";
        $sql="SELECT * FROM usuario JOIN $tabla_rol ON usuario.ci = $tabla_rol.ci WHERE usuario.ci= ? AND usuario.contrasenia = ?;";

        $stmt=$conexion->prepare($sql);
        $stmt->bind_param("ss", $ci_usu, $contrasenia);
        
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $datos = $result->fetch_assoc();
            session_start();
            $_SESSION['usuario'] = $ci_usu;
           // $_SESSION['ci'] = $datos['ci'] . " " . $datos['nombre'] . " " . $datos['apellido'] . " " . $datos['direccion'] . " " . $datos['email'];
           $_SESSION['ci'] = $datos['ci'];
           $_SESSION['rol'] = $tabla_rol;
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
        verificar_login();
    }
} else {
    echo "Acceso no permitido";
}
?>