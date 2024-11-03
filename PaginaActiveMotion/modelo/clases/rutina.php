<?php

class Rutina {
    public $idRutina;
    public $nombreRutina;
    public $tipoRutina;

    public function __construct($idRutina, $nombreRutina, $tipoRutina) {
        $this->nombreRutina = $nombreRutina;
        $this->idRutina = $idRutina;
        $this->tipoRutina = $tipoRutina;
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

    public function getTipoRutina() {
        return $this->tipoRutina;
    }

    public function setTipoRutina($tipoRutina) {
        $this->tipoRutina = $tipoRutina;
    }
}
?>
