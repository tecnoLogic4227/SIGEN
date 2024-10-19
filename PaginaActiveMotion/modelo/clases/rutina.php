<?php

class Rutina {
    public $idRutina;
    public $nombreRutina;

    public function __construct($idRutina, $nombreRutina) {
        $this->nombreRutina = $nombreRutina;
        $this->idRutina = $idRutina;
    }

    public function getIdRutina() {
        return $this->idRutina;
    }

    public function getNombreRutina() {
        return $this->nombreRutina;
    }

    public function setNombreRutina($nombreRutina) {
        $this->nombreRutina = $nombreRutina;
    }
}
?>
