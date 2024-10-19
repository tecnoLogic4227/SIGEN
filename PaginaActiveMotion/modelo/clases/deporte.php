<?php

class Deporte {
    public $nombreDeporte;
    public $descripcion;

    public function __construct($nombreDeporte, $descripcion) {
        $this->nombreDeporte = $nombreDeporte;
        $this->descripcion = $descripcion;
    }

    public function getNombreDeporte() {
        return $this->nombreDeporte;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion) {
        $this->descripcion = $descripcion;
    }
}
?>
