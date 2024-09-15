<?php
require_once 'conexion.php';

class Usuario {
    public $ci;
    public $nombre;
    public $apellido;
    public $direccion;
    public $email;
    public $contrasenia;
    public $fecha_nac;
    public $ultimo_login;
    public $rol; // Agregamos la propiedad rol

    public function __construct($ci, $nombre, $apellido, $direccion, $email, $contrasenia, $fecha_nac, $ultimo_login, $rol) {
        $this->ci = $ci;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->direccion = $direccion;
        $this->email = $email;
        $this->contrasenia = $contrasenia;
        $this->fecha_nac = $fecha_nac;
        $this->ultimo_login = $ultimo_login;
        $this->rol = $rol; // Asignamos el valor de rol
    }

    function get_ci()
    {
        return $this->ci;
    }

    function get_nombre()
    {
        return $this->nombre;
    }

    function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    function get_apellido()
    {
        return $this->apellido;
    }

    function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

    function get_direccion()
    {
        return $this->direccion;
    }

    function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

    function get_email()
    {
        return $this->email;
    }

    function setEmail($email)
    {
        $this->email = $email;
    }

    function get_contrasenia()
    {
        return $this->contrasenia;
    }

    function setContrasenia($contrasenia)
    {
        $this->contrasenia = $contrasenia;
    }

    function get_fecha_nac()
    {
        return $this->fecha_nac;
    }

    function setFecha_nac($fecha_nac)
    {
        $this->fecha_nac = $fecha_nac;
    }

    function get_ultimo_login()
    {
        return $this->ultimo_login;
    }

    function setUltimo_login($ultimo_login)
    {
        $this->ultimo_login = $ultimo_login;
    }

    function get_rol(){
            return $this->rol;
    }

    function setRol($rol)
    {
        $this->rol = $rol;
    }

}

function agregarUsuario($usuario)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($usuario);

    $ci = $usuario->get_ci();
    $nombre = $usuario->get_nombre();
    $apellido = $usuario->get_apellido();
    $direccion = $usuario->get_direccion();
    $email = $usuario->get_email();
    $contrasenia = $usuario->get_contrasenia();
    $fecha_nac = $usuario->get_fecha_nac();
    $ultimo_login = $usuario->get_ultimo_login();
    $rol = $usuario->get_rol(); // Agregamos la propiedad rol

    $stmt = $conexion->prepare("INSERT INTO usuario (ci, nombre, apellido, direccion, email, contrasenia, fecha_nac, ultimo_login, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("issssssss", $ci, $nombre, $apellido, $direccion, $email, $contrasenia, $fecha_nac, $ultimo_login, $rol);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Usuario registrado<br>";
}

conectar();




?>