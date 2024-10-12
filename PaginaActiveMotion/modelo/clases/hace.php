<?php
require_once 'conexion.php';

class Hace {
    public $ci;
    public $idEjercicio;

    public function __construct($ci, $idEjercicio) {
        $this->ci = $ci;
        $this->idEjercicio = $idEjercicio;
    }

    public function getCiHace() {
        return $this->ci;
    }

    public function setCiHace($ci) {
        $this->ci = $ci;
    }

    public function getIdEjercicioHace() {
        return $this->idEjercicio;
    }

    public function setIdEjercicioHace($idEjercicio) {
        $this->idEjercicio = $idEjercicio;
    }

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO HACE (ci, id_ejercicio) VALUES (?, ?)");
    //     $query->bind_param('ii', $this->ci, $this->idEjercicio);

    //     $result = $query->execute();
    //     return $result ? true : false;
    // }
}
?>
