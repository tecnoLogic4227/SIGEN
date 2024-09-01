<?php
require_once 'conexion.php';

class InstitucionTelefono {
    public $id_institucion;
    public $telefono;

    public function __construct($id_institucion, $telefono)
    {
        $this->id_institucion = $id_institucion;
        $this->telefono = $telefono;
    }

    function get_id_institucion()
    {
        return $this->id_institucion;
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

function agregarTelefonoInstitucion($institucionTelefono)
{
    global $conexion;

    echo "Agregando teléfono para usuario<br>";
    var_dump($institucionTelefono);

    $id_institucion = $institucionTelefono->get_id_institucion();
    $telefono = $institucionTelefono->get_telefono();

    $stmt = $conexion->prepare("INSERT INTO institucion_telefono (id_institucion, telefono) VALUES (?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("is", $id_institucion, $telefono);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Teléfono de usuario registrado<br>";
}

conectar();

$insti_tele = new InstitucionTelefono("0", "24011234");

agregarTelefonoInstitucion($insti_tele);

$conexion->close();
?>