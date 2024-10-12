<?php
require_once 'conexion.php';

class Realiza {
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

    public function getCiRealiza() {
        return $this->ci;
    }

    public function setCiRealiza($ci) {
        $this->ci = $ci;
    }

    public function getIdRutinaRealiza() {
        return $this->idRutina;
    }

    public function setIdRutinaRealiza($idRutina) {
        $this->idRutina = $idRutina;
    }

    public function getNivelRealiza() {
        return $this->nivel;
    }

    public function setNivelRealiza($nivel) {
        $this->nivel = $nivel;
    }

    public function getFechaInicioRealiza() {
        return $this->fechaInicio;
    }

    public function setFechaInicioRealiza($fechaInicio) {
        $this->fechaInicio = $fechaInicio;
    }

    public function getFechaTerminoRealiza() {
        return $this->fechaTermino;
    }

    public function setFechaTerminoRealiza($fechaTermino) {
        $this->fechaTermino = $fechaTermino;
    }

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO REALIZA (ci, id_rutina, nivel, fecha_inicio, fecha_termino) VALUES (?, ?, ?, ?, ?)");
    //     $query->bind_param('iisss', $this->ci, $this->idRutina, $this->nivel, $this->fechaInicio, $this->fechaTermino);

    //     $result = $query->execute();
    //     return $result ? true : false;
    // }
}
?>
