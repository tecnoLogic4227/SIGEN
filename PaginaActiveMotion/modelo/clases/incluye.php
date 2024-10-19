<?php

class Incluye {
    public $ci;
    public $idRutina;
    public $idFisioterapia;

    public function __construct($ci, $idRutina, $idFisioterapia) {
        $this->ci = $ci;
        $this->idRutina = $idRutina;
        $this->idFisioterapia = $idFisioterapia;
    }

    public function getCiIncluye() {
        return $this->ci;
    }

    public function setCiIncluye($ci) {
        $this->ci = $ci;
    }

    public function getIdRutinaIncluye() {
        return $this->idRutina;
    }

    public function setIdRutinaIncluye($idRutina) {
        $this->idRutina = $idRutina;
    }

    public function getIdFisioterapiaIncluye() {
        return $this->idFisioterapia;
    }

    public function setIdFisioterapiaIncluye($idFisioterapia) {
        $this->idFisioterapia = $idFisioterapia;
    }
}
?>
