<?php
require_once ("usuarioCliente.php");

class Deportista {
    public $ci;
    public $posicion;

    public function __construct($ci, $posicion) {
        $this->ci = $ci;
        $this->posicion = $posicion;
    }

    public function getCi() {
        return $this->ci;
    }

    public function getPosicion() {
        return $this->posicion;
    }

    public function setPosicion($posicion) {
        $this->posicion = $posicion;
    }
}
?>