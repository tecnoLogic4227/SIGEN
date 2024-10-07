<?php
require_once 'conexion.php';

class Esta {
    public $ci;
    public $idEquipo;

    public function __construct($ci, $idEquipo) {
        $this->ci = $ci;
        $this->idEquipo = $idEquipo;
    }

    public function getCiEsta() {
        return $this->ci;
    }

    public function setCiEsta($ci) {
        $this->ci = $ci;
    }

    public function getIdEquipoEsta() {
        return $this->idEquipo;
    }

    public function setIdEquipoEsta($idEquipo) {
        $this->idEquipo = $idEquipo;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO ESTA (ci, id_equipo) VALUES (?, ?)");
        $query->bind_param('ii', $this->ci, $this->idEquipo);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
