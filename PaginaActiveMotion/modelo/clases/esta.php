<?php

class Esta {
    public $ci;
    public $idEquipo;

    public function __construct($ci, $idEquipo) {
        $this->ci = $ci;
        $this->idEquipo = $idEquipo;
    }

    public function getCiEsta() {
        return $this->ci;
    }

    public function setCiEsta($ci) {
        $this->ci = $ci;
    }

    public function getIdEquipoEsta() {
        return $this->idEquipo;
    }

    public function setIdEquipoEsta($idEquipo) {
        $this->idEquipo = $idEquipo;
    }
}
?>
