<?php
require_once 'conexion_alta.php';

class Institucion {
    public $id_institucion;
    public $nombre_institucion;
    public $direccion;

    public function __construct($id_institucion, $nombre_institucion, $direccion)
    {
        $this->id_institucion = $id_institucion;
        $this->nombre_institucion = $nombre_institucion;
        $this->direccion = $direccion;
    }

    function get_id_institucion()
    {
        return $this->id_institucion;
    }

    function get_nombre_insitucion()
    {
        return $this->nombre_institucion;
    }

    function setNombreInstitucion($nombre_institucion)
    {
        $this->nombre_institucion = $nombre_institucion;
    }

    function get_direccion()
    {
        return $this->direccion;
    }

    function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }
}

function agregarInstitucion($institucion)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($institucion);

    $id_institucion = $institucion->get_id_institucion();
    $nombre_institucion = $institucion->get_nombre_insitucion();
    $direccion = $institucion->get_direccion();

    $stmt = $conexion->prepare("INSERT INTO institucion (id_institucion, nombre_institucion, direccion) VALUES (?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("iss", $id_institucion, $nombre_institucion, $direccion);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Institucion registrada<br>";
}

conectar();

//hacemos de a uno claramente
$insti = new Institucion("0", "Club 3", "5th Avenue 101");

agregarInstitucion($insti);
?>