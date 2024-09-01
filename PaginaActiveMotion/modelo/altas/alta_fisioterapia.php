<?php
require_once 'conexion_alta.php';

class Fisioterapia {
    public $id_fisioterapia;
    public $nombre_fisioterapia;
    public $nivel;
    public $fecha_inicio;
    public $fecha_termino;
    public $descripcion;



    public function __construct($id_fisioterapia, $nombre_fisioterapia, $nivel, $fecha_inicio, $fecha_termino, $descripcion)
    {
        $this->id_fisioterapia = $id_fisioterapia;
        $this->nombre_fisioterapia = $nombre_fisioterapia;
        $this->nivel = $nivel;
        $this->fecha_inicio = $fecha_inicio;
        $this->fecha_termino = $fecha_termino;
        $this->descripcion = $descripcion;

    }

    function get_id_fisioterapia()
    {
        return $this->id_fisioterapia;
    }

    function get_nombre_fisioterapia()
    {
        return $this->nombre_fisioterapia;
    }

    function setNombreFisioterapia($nombre_fisioterapia)
    {
        $this->nombre_fisioterapia = $nombre_fisioterapia;
    }

    function get_nivel()
    {
        return $this->nivel;
    }

    function setNivel($nivel)
    {
        $this->nivel = $nivel;
    }

    function get_fecha_inicio()
    {
        return $this->fecha_inicio;
    }

    function setFechaInicio($fecha_inicio)
    {
        $this->fecha_inicio = $fecha_inicio;
    }

    function get_fecha_termino()
    {
        return $this->fecha_termino;
    }

    function setFechaTermino($fecha_termino)
    {
        $this->fecha_termino = $fecha_termino;
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

function agregarFisioterapia($fisioterapia)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($fisioterapia);

    $id_fisioterapia = $fisioterapia->get_id_fisioterapia();
    $nombre_fisioterapia = $fisioterapia->get_nombre_fisioterapia();
    $nivel = $fisioterapia->get_nivel();
    $fecha_inicio=  $fisioterapia->get_fecha_inicio();
    $fecha_termino = $fisioterapia->get_fecha_termino();
    $descripcion = $fisioterapia->get_descripcion();

    $stmt = $conexion->prepare("INSERT INTO fisioterapia (id_fisioterapia, nombre_fisioterapia, nivel, fecha_inicio, fecha_termino, descripcion) VALUES (?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("isisss", $id_fisioterapia, $nombre_fisioterapia, $nivel, $fecha_inicio, $fecha_termino, $descripcion);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Fisioterapia registrada<br>";
}

conectar();

$fisio = new Fisioterapia("0", "Fisioterapia ortopédica", "5", "2024-01-25", "2024-11-23",  "Fisioterapia para personas con lesiones ortopédicas");


agregarFisioterapia($fisio);
?>