<?php
require_once 'conexion_alta.php';

class Entrenamiento {
    public $id_entrenamiento;
    public $id_deporte;
    public $nombre_entrenamiento;
    public $fecha_inicio;
    public $fecha_termino;
    public $nivel;
    public $tipo_deporte;



    public function __construct($id_entrenamiento, $id_deporte, $nombre_entrenamiento, $fecha_inicio, $fecha_termino, $nivel, $tipo_deporte)
    {
        $this->id_entrenamiento = $id_entrenamiento;
        $this->id_deporte = $id_deporte;
        $this->nombre_entrenamiento = $nombre_entrenamiento;
        $this->fecha_inicio = $fecha_inicio;
        $this->fecha_termino = $fecha_termino;
        $this->nivel = $nivel;
        $this->tipo_deporte = $tipo_deporte;

    }

    function get_id_entrenamiento()
    {
        return $this->id_entrenamiento;
    }

    function get_id_deporte()
    {
        return $this->id_deporte;
    }

    function get_nombre_entrenamiento()
    {
        return $this->nombre_entrenamiento;
    }

    function setNombreEntrenamiento($nombre_entrenamiento)
    {
        $this->nombre_entrenamiento = $nombre_entrenamiento;
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

    function get_nivel()
    {
        return $this->nivel;
    }

    function setNivel($nivel)
    {
        $this->nivel = $nivel;
    }

    function get_tipo_deporte()
    {
        return $this->tipo_deporte;
    }

    function setTipo($tipo_deporte)
    {
        $this->tipo_deporte = $tipo_deporte;
    }
}

function agregarEntrenamiento($entrenamiento)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($entrenamiento);

    $id_entrenamiento = $entrenamiento->get_id_entrenamiento();
    $id_deporte=  $entrenamiento->get_id_deporte();
    $nombre_entrenamiento = $entrenamiento->get_nombre_entrenamiento();
    $fecha_inicio=  $entrenamiento->get_fecha_inicio();
    $fecha_termino = $entrenamiento->get_fecha_termino();
    $nivel = $entrenamiento->get_nivel();
    $tipo_deporte = $entrenamiento->get_tipo_deporte();

    $stmt = $conexion->prepare("INSERT INTO entrenamiento (id_entrenamiento, id_deporte, nombre_entrenamiento, fecha_inicio, fecha_termino, nivel, tipo_deporte) VALUES (?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("iisssss", $id_entrenamiento, $id_deporte, $nombre_entrenamiento, $fecha_inicio, $fecha_termino, $nivel, $tipo_deporte);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Entrenamiento registrado<br>";
}

conectar();

$entre = new Entrenamiento("0", "0", "Circuito Funcional", "2024-01-25", "2024-11-23", "5", "Entrenamiento que combina ejercicios de fuerza, resistencia y movilidad");


agregarEntrenamiento($entre);
?>