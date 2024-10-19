<?php
require_once ("usuarioCliente.php");

class Deportista extends Cliente {
    public $posicion;

    public function __construct($ci, $posicion) {
        parent::__construct($ci, '', '', '', '', '', '', '');
        $this->posicion = $posicion;
    }

    public function getPosicion() {
        return $this->posicion;
    }

    public function setPosicion($posicion) {
        $this->posicion = $posicion;
    }
}
?>