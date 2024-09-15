<?php
require_once 'conexion.php';

class Equipo {
    public $id_equipo;
    public $nombre_equipo;
    public $cantidad;

    public function __construct($id_equipo, $nombre_equipo, $cantidad) {
        $this->id_equipo = $id_equipo;
        $this->nombre_equipo = $nombre_equipo;
        $this->cantidad = $cantidad;
    }

    public function getIdEquipo() {
        return $this->id_equipo;
    }

    public function setIdEquipo($id_equipo) {
        $this->id_equipo = $id_equipo;
    }

    public function getNombreEquipo() {
        return $this->nombre_equipo;
    }

    public function setNombreEquipo($nombre_equipo) {
        $this->nombre_equipo = $nombre_equipo;
    }

    public function getCantidad() {
        return $this->cantidad;
    }

    public function setCantidad($cantidad) {
        $this->cantidad = $cantidad;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO equipo (id_equipo, nombre_equipo, cantidad) VALUES (?, ?, ?)");
        $query->bind_param('ssi', $this->id_equipo, $this->nombre_equipo, $this->cantidad);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
