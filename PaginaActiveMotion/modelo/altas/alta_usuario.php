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

    public function __construct($ci, $nombre, $apellido, $direccion, $email, $contrasenia, $fecha_nac, $ultimo_login)
    {
        $this->ci = $ci;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->direccion = $direccion;
        $this->email = $email;
        $this->contrasenia = $contrasenia;
        $this->fecha_nac = $fecha_nac;
        $this->ultimo_login = $ultimo_login;
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

    $stmt = $conexion->prepare("INSERT INTO usuario (ci, nombre, apellido, direccion, email, contrasenia, fecha_nac, ultimo_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("isssssss", $ci, $nombre, $apellido, $direccion, $email, $contrasenia, $fecha_nac, $ultimo_login);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Usuario registrado<br>";
}

conectar();

//hacemos de a uno claramente
$usu = new Usuario("56341434", "Lucia", "Gilene", "Comandante Braga 2678", "gileneaixa04@gmail.com", "ABCD1234", "2007-01-04", "2024-07-21");
$usu = new Usuario("12345678", "Mike", "Gomez", "Avenida Libertador 456", "maria.gomez@example.org", "Abc123!@", "1990-03-15", "2024-02-14");
$usu = new Usuario("87654321", "Aurora", "Perez", "Carrera 7 #89-10", "carlos.lopez@example.net", "Secure#456", "1985-07-22", "2024-04-01");
$usu = new Usuario("13243576", "Lucas", "Rodriguez", "Rua das Flores 789", "sofia.martinez@example.com", "Passw0rd$", "1995-01-30", "2024-05-25");
$usu = new Usuario("67534231", "Paola", "Harols", "Paseo de la Reforma 101", "pedro.alvarez@example.org", "XyZ987&*", "2003-06-12", "2024-07-18");
$usu = new Usuario("09876543", "Pablo", "Smith", "Hauptstraße 202", "ana.rodriguez@example.net", "MyP@ssw0rd", "2007-01-04", "2024-09-09");

agregarUsuario($usu);
?>