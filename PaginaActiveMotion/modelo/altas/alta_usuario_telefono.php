<?php
require_once 'conexion.php';

class UsuarioTelefono {
    public $ci;
    public $telefono;

    public function __construct($ci, $telefono)
    {
        $this->ci = $ci;
        $this->telefono = $telefono;
    }

    function get_ci()
    {
        return $this->ci;
    }

    function get_telefono()
    {
        return $this->telefono;
    }

    function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }
}

function agregarTelefonoUsuario($usuarioTelefono)
{
    global $conexion;

    echo "Agregando teléfono para usuario<br>";
    var_dump($usuarioTelefono);

    $ci = $usuarioTelefono->get_ci();
    $telefono = $usuarioTelefono->get_telefono();

    $stmt = $conexion->prepare("INSERT INTO usuario_telefono (ci, telefono) VALUES (?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("is", $ci, $telefono);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Teléfono de usuario registrado<br>";
}

conectar();

$telefono1 = new UsuarioTelefono("56341434", "096 201 118");
$telefono2 = new UsuarioTelefono("56341434", "091 234 567 ");
$telefono3 = new UsuarioTelefono("87654321", "011 4567 8901");

agregarTelefonoUsuario($telefono1);
agregarTelefonoUsuario($telefono2);
agregarTelefonoUsuario($telefono3);

$conexion->close();
?>