<?php
require_once 'conexion.php';

class Plan_entrenamiento {
    public $id_plan_entrenamiento;
    public $id_rutina;
    public $nombre_plan_entrenamiento;
    public $nro_ejercicios;
    public $descripcion;

    public function __construct($id_plan_entrenamiento, $id_rutina,  $nombre_plan_entrenamiento, $nro_ejercicios, $descripcion)

    {
        $this->id_plan_entrenamiento = $id_plan_entrenamiento;
        $this->id_rutina = $id_rutina;
        $this->nombre_plan_entrenamiento  = $nombre_plan_entrenamiento;
        $this ->nro_ejercicios = $nro_ejercicios;
        $this->descripcion = $descripcion;

    }

    function get_id_plan_entrenamiento()
    {
        return $this->id_plan_entrenamiento;
    }

    function get_id_rutina()
    {
        return $this->id_rutina;
    }

    function get_nombre_plan_entrenamiento()
    {
        return $this->nombre_plan_entrenamiento;
    }

    function setNombre_plan_entrenamiento($nombre_plan_entrenamiento)
    {
        $this->nombre_plan_entrenamiento = $nombre_plan_entrenamiento;
    }

    function get_nro_ejercicios()
    {
        return $this->nro_ejercicios;
    }

    function setNro_ejercicios($nro_ejercicios)
    {
        $this->nro_ejercicios = $nro_ejercicios;
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


function agregarPlanEntrenamiento($planEntrenamiento) {
    global $conexion;

    echo "Agregando teléfono para usuario<br>";
    var_dump($planEntrenamiento);

    $id_plan_entrenamiento = $planEntrenamiento->get_id_plan_entrenamiento();
    $id_rutina = $planEntrenamiento->get_id_rutina();
    $nombre_plan_entrenamiento = $planEntrenamiento->get_nombre_plan_entrenamiento();
    $nro_ejercicios = $planEntrenamiento->get_nro_ejercicios();
    $descripcion = $planEntrenamiento->get_descripcion();

    $stmt = $conexion->prepare("INSERT INTO plan_entrenamiento (id_plan_entrenamiento, id_rutina, nombre_plan_entrenamiento, nro_ejercicios, descripcion ) VALUES (?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("iisis", $id_plan_entrenamiento, $id_rutina, $nombre_plan_entrenamiento, $nro_ejercicios, $descripcion );
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Plan de entrenamiento registrado<br>";
}

conectar();

$plan_entre = new Plan_entrenamiento("56341434", "0", "Recuperación Activa",  "10", "Ejercicios para recuperación activa");

agregarPlanEntrenamiento($plan_entre);

$conexion->close();
?>