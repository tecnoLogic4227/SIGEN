<?php
require_once 'conexion_alta.php';

class Deporte {
    public $id_deporte;
    public $nombre_deporte;
    public $descripcion;



    public function __construct($id_deporte, $nombre_deporte, $descripcion)
    {
        $this->id_deporte = $id_deporte;
        $this->nombre_deporte = $nombre_deporte;
        $this->descripcion = $descripcion;

    }

    function get_id_deporte()
    {
        return $this->id_deporte;
    }

    function get_nombre_deporte()
    {
        return $this->nombre_deporte;
    }

    function setNombreDeporte($nombre_deporte)
    {
        $this->nombre_deporte = $nombre_deporte;
    }

    function get_descripcion()
    {
        return $this->descripcion;
    }

    function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }
}

function agregarDeporte($deporte)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($deporte);

    $id_deporte = $deporte->get_id_deporte();
    $nombre_deporte = $deporte->get_nombre_deporte();
    $descripcion = $deporte->get_descripcion();

    $stmt = $conexion->prepare("INSERT INTO deporte (id_deporte, nombre_deporte, descripcion) VALUES (?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("iss", $id_deporte, $nombre_deporte, $descripcion);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Deportte registrado<br>";
}

conectar();

$depo = new Deporte("0", "Futbol", "El fútbol es un deporte de equipo en el que dos equipos de once jugadores intentan marcar goles pateando un balón hacia la portería contraria, utilizando principalmente los pies");


agregarDeporte($depo);
?>