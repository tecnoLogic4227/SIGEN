<?php
require_once 'conexion.php';

class Evolucion {
    public $id_evolucion;
    public $ejercicio;
    public $calificacion;
    public $fecha;
    public $comentarios;



    public function __construct($id_evolucion, $ejercicio, $calificacion, $fecha, $comentarios)
    {
        $this->id_evolucion = $id_evolucion;
        $this->ejercicio = $ejercicio;
        $this->calificacion = $calificacion;
        $this->fecha = $fecha;
        $this->comentarios = $comentarios;

    }

    function get_id_evolucion()
    {
        return $this->id_evolucion;
    }

    function get_ejercicio()
    {
        return $this->ejercicio;
    }

    function setEjercicio($ejercicio)
    {
        $this->ejercicio = $ejercicio;
    }

    function get_calificacion()
    {
        return $this->calificacion;
    }

    function setClificacion($calificacion)
    {
        $this->calificacion = $calificacion;
    }

    function get_fecha()
    {
        return $this->fecha;
    }

    function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    function get_comentarios()
    {
        return $this->comentarios;
    }

    function setComentarios($comentarios)
    {
        $this->comentarios = $comentarios;
    }

}

function agregarEvolucion($evolucion)
{
    global $conexion;

    echo "Cargando evolucion<br>";
    var_dump($evolucion);

    $id_evolucion = $evolucion->get_id_evolucion();
    $ejercicio = $evolucion->get_ejercicio();
    $calificacion = $evolucion->get_calificacion();
    $fecha=  $evolucion->get_fecha();
    $comentarios = $evolucion->get_comentarios();

    $stmt = $conexion->prepare("INSERT INTO evolucion (id_evolucion, ejercicio, calificacion, fecha, comentarios) VALUES (?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("isiss", $id_evolucion, $ejercicio, $calificacion, $fecha, $comentarios);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Evolucion registrada<br>";
}

conectar();

$evo = new Evolucion("0", "Estiramiento de isquiotibiales", "15", "2024-06-25",  "Buena evolucion");


agregarEvolucion($evo);
?>