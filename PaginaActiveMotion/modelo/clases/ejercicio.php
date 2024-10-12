<?php
require_once 'conexion.php';

class Ejercicio {
    public $idEjercicio;
    public $nombreEjercicio;
    public $nroRep;
    public $nroSeries;
    public $grupoMuscular;
    public $descripcion;

    public function __construct($idEjercicio, $nombreEjercicio, $nroRep, $nroSeries, $grupoMuscular, $descripcion) {
        $this->idEjercicio = $idEjercicio;
        $this->nombreEjercicio = $nombreEjercicio;
        $this->nroRep = $nroRep;
        $this->nroSeries = $nroSeries;
        $this->grupoMuscular = $grupoMuscular;
        $this->descripcion = $descripcion;
    }

    public function getIdEjercicio() {
        return $this->idEjercicio;
    }

    public function setIdEjercicio($idEjercicio) {
        $this->idEjercicio = $idEjercicio;
    }

    public function getNombreEjercicio() {
        return $this->nombreEjercicio;
    }

    public function setNombreEjercicio($nombreEjercicio) {
        $this->nombreEjercicio = $nombreEjercicio;
    }

    public function getNroRep() {
        return $this->nroRep;
    }

    public function setNroRep($nroRep) {
        $this->nroRep = $nroRep;
    }

    public function getNroSeries() {
        return $this->nroSeries;
    }

    public function setNroSeries($nroSeries) {
        $this->nroSeries = $nroSeries;
    }

    public function getGrupoMuscular() {
        return $this->grupoMuscular;
    }

    public function setGrupoMuscular($grupoMuscular) {
        $this->grupoMuscular = $grupoMuscular;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion) {
        $this->descripcion = $descripcion;
    }

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO ejercicio (id_ejercicio, nombre_ejercicio, nro_rep, nro_series, grupo_muscular, descripcion) VALUES (?, ?, ?, ?, ?, ?)");
    //     $query->bind_param('ssisii', $this->idEjercicio, $this->nombreEjercicio, $this->nroRep, $this->nroSeries, $this->grupoMuscular, $this->descripcion);

    //     $result = $query->execute();
    //     return $result ? true : false;
    // }
}
?>
