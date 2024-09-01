<?php
require_once 'conexion_alta.php';

class Ejercicio {
    public $id_ejercicio;
    public $nombre_ejercicio;
    public $nro_rep;
    public $nro_series;
    public $grupo_muscular;
    public $descripcion;



    public function __construct($id_ejercicio, $nombre_ejercicio, $nro_rep,  $nro_series, $grupo_muscular, $descripcion)

    {
        $this->id_ejercicio = $id_ejercicio;
        $this->nombre_ejercicio = $nombre_ejercicio;
        $this ->nro_rep = $nro_rep;
        $this ->nro_series = $nro_series;
        $this ->grupo_muscular = $grupo_muscular;
        $this->descripcion = $descripcion;

    }

    function get_id_ejercicio()
    {
        return $this->id_ejercicio;
    }

    function get_nombre_ejericio()
    {
        return $this->nombre_ejercicio;
    }

    function setNombreEjercicio($nombre_ejercicio)
    {
        $this->nombre_ejercicio = $nombre_ejercicio;
    }

    function get_nro_rep()
    {
        return $this->nro_rep;
    }

    function setNroRep($nro_rep)
    {
        $this->nro_rep = $nro_rep;
    }

    function get_nro_series()
    {
        return $this->nro_series;
    }

    function setNroSeries($nro_series)
    {
        $this->nro_series = $nro_series;
    }

    function get_grupo_muscular()
    {
        return $this->grupo_muscular;
    }

    function setGrupoMuscular($grupo_muscular)
    {
        $this->grupo_muscular = $grupo_muscular;
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

function agregarEjercicio($ejercicio)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($ejercicio);

    $id_ejercicio = $ejercicio->get_id_ejercicio();
    $nombre_ejercicio = $ejercicio->get_nombre_ejericio();
    $nro_rep=  $ejercicio->get_nro_rep();
    $nro_series = $ejercicio->get_nro_series();
    $grupo_muscular = $ejercicio->get_grupo_muscular();
    $descripcion = $ejercicio->get_descripcion();

    $stmt = $conexion->prepare("INSERT INTO ejercicio (id_ejercicio, nombre_ejercicio, nro_rep, nro_series, grupo_muscular, descripcion) VALUES (?, ?, ?, ?, ?, ?)");


    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("isiiss", $id_ejercicio, $nombre_ejercicio, $nro_rep, $nro_series, $grupo_muscular, $descripcion);

    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Ejercicio registrado<br>";
}

conectar();

$eje = new Ejercicio("0", "Sentadillas", "10", "4", "Piernas y glúteos", "De pie con los pies al ancho de los hombros, baja las caderas como si te sentaras en una silla, y luego regresa a la posición inicial.");


agregarEjercicio($eje);
?>