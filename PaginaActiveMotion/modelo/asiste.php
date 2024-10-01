<?php
require_once 'conexion.php';

class Asiste {
    public $ci;
    public $idRutina;
    public $nivel;
    public $fechaInicio;
    public $fechaTermino;

    public function __construct($ci, $idRutina, $nivel, $fechaInicio, $fechaTermino) {
        $this->ci = $ci;
        $this->idRutina = $idRutina;
        $this->nivel = $nivel;
        $this->fechaInicio = $fechaInicio;
        $this->fechaTermino = $fechaTermino;
    }

    public function getCiAsiste () {
        return $this->ci;
    }

    public function getIdRutinaAsiste () {
        return $this->idRutina;
    }

    public function setIdRutinaAsiste ($idRutina) {
        $this->idRutina = $idRutina;
    }

    public function getNivelAsiste () {
        return $this->nivel;
    }

    public function setNivelAsiste ($nivel) {
        $this->nivel = $nivel;
    }

    public function getFechaInicioAsiste () {
        return $this->fechaInicio;
    }

    public function setFechaInicioAsiste ($fechaInicio) {
        $this->fechaInicio = $fechaInicio;
    }

    public function getFechaTerminoAsiste () {
        return $this->fechaTermino;
    }
    public function setFechaTerminoAsiste ($fechaTermino) {
        $this->fechaTermino = $fechaTermino;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO asiste (ci, id_rutina, nivel, fecha_inicio, fecha_termino) VALUES (?, ?, ?, ?, ?)");
        $query->bind_param('iisss', $this->ci, $this->idRutina, $this->nivel, $this->fechaInicio, $this->fechaTermino);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
