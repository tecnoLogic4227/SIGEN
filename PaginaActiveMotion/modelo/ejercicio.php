<?php
require_once 'conexion.php';

class Ejercicio {
    public $id_ejercicio;
    public $nombre_ejercicio;
    public $nro_rep;
    public $nro_series;
    public $grupo_muscular;
    public $descripcion;

    public function __construct($id_ejercicio, $nombre_ejercicio, $nro_rep, $nro_series, $grupo_muscular, $descripcion) {
        $this->id_ejercicio = $id_ejercicio;
        $this->nombre_ejercicio = $nombre_ejercicio;
        $this->nro_rep = $nro_rep;
        $this->nro_series = $nro_series;
        $this->grupo_muscular = $grupo_muscular;
        $this->descripcion = $descripcion;
    }

    public function getIdEjercicio() {
        return $this->id_ejercicio;
    }

    public function setIdEjercicio($id_ejercicio) {
        $this->id_ejercicio = $id_ejercicio;
    }

    public function getNombreEjercicio() {
        return $this->nombre_ejercicio;
    }

    public function setNombreEjercicio($nombre_ejercicio) {
        $this->nombre_ejercicio = $nombre_ejercicio;
    }

    public function getNroRep() {
        return $this->nro_rep;
    }

    public function setNroRep($nro_rep) {
        $this->nro_rep = $nro_rep;
    }

    public function getNroSeries() {
        return $this->nro_series;
    }

    public function setNroSeries($nro_series) {
        $this->nro_series = $nro_series;
    }

    public function getGrupoMuscular() {
        return $this->grupo_muscular;
    }

    public function setGrupoMuscular($grupo_muscular) {
        $this->grupo_muscular = $grupo_muscular;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion) {
        $this->descripcion = $descripcion;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO ejercicio (id_ejercicio, nombre_ejercicio, nro_rep, nro_series, grupo_muscular, descripcion) VALUES (?, ?, ?, ?, ?, ?)");
        $query->bind_param('ssisii', $this->id_ejercicio, $this->nombre_ejercicio, $this->nro_rep, $this->nro_series, $this->grupo_muscular, $this->descripcion);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
