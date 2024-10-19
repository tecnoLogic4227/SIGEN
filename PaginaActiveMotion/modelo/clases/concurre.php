<?php

class Concurre {
    public $ci;
    public $idInstitucion;

    public function __construct($ci, $idInstitucion) {
        $this->ci = $ci;
        $this->idInstitucion = $idInstitucion;
    }

    public function getCiConcurre() {
        return $this->ci;
    }

    public function setCiConcurre($ci) {
        $this->ci = $ci;
    }

    public function getIdInstitucionConcurre() {
        return $this->idInstitucion;
    }

    public function setIdInstitucionConcurre($idInstitucion) {
        $this->idInstitucion = $idInstitucion;
    }

}
?>
