<?php

class Posee {
    public $idRutina;
    public $idEjercicio;

    public function __construct($idRutina, $idEjercicio) {
        $this->idRutina = $idRutina;
        $this->idEjercicio = $idEjercicio;
    }

    public function getIdRutinaPosee() {
        return $this->idRutina;
    }

    public function setIdRutinaPosee($idRutina) {
        $this->idRutina = $idRutina;
    }

    public function getIdEjercicioPosee() {
        return $this->idEjercicio;
    }

    public function setIdEjercicioPosee($idEjercicio) {
        $this->idEjercicio = $idEjercicio;
    }
}
?>
