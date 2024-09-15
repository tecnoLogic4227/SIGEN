<?php
require_once 'conexion.php';
require_once 'cliente.php';

class Deportista extends Cliente {
    private $posicion;

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

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO deportistas (CI, POSICION) VALUES (?, ?)");
        $query->bind_param('is', $this->ci, $this->posicion);
        return $query->execute();
    }
}
?>