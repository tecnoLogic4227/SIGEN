<?php

class Hace {
    public $ci;
    public $idEjercicio;

    public function __construct($ci, $idEjercicio) {
        $this->ci = $ci;
        $this->idEjercicio = $idEjercicio;
    }

    public function getCiHace() {
        return $this->ci;
    }

    public function setCiHace($ci) {
        $this->ci = $ci;
    }

    public function getIdEjercicioHace() {
        return $this->idEjercicio;
    }

    public function setIdEjercicioHace($idEjercicio) {
        $this->idEjercicio = $idEjercicio;
    }
}
?>
