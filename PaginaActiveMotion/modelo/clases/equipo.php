<?php

class Equipo {
    public $idEquipo;
    public $nombreEquipo;
    public $cantidad;

    public function __construct($idEquipo, $nombreEquipo, $cantidad) {
        $this->idEquipo = $idEquipo;
        $this->nombreEquipo = $nombreEquipo;
        $this->cantidad = $cantidad;
    }

    public function getIdEquipo() {
        return $this->idEquipo;
    }

    public function setIdEquipo($idEquipo) {
        $this->idEquipo = $idEquipo;
    }

    public function getNombreEquipo() {
        return $this->nombreEquipo;
    }

    public function setNombreEquipo($nombreEquipo) {
        $this->nombreEquipo = $nombreEquipo;
    }

    public function getCantidad() {
        return $this->cantidad;
    }

    public function setCantidad($cantidad) {
        $this->cantidad = $cantidad;
    }
}
?>
