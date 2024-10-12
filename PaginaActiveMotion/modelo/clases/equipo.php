<?php
require_once 'conexion.php';

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

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO equipo (id_equipo, nombre_equipo, cantidad) VALUES (?, ?, ?)");
    //     $query->bind_param('ssi', $this->idEquipo, $this->nombreEquipo, $this->cantidad);

    //     $result = $query->execute();
    //     return $result ? true : false;
    // }
}
?>
