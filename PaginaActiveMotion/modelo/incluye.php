<?php
require_once 'conexion.php';

class Incluye {
    public $ci;
    public $idRutina;
    public $idFisioterapia;

    public function __construct($ci, $idRutina, $idFisioterapia) {
        $this->ci = $ci;
        $this->idRutina = $idRutina;
        $this->idFisioterapia = $idFisioterapia;
    }

    public function getCiIncluye() {
        return $this->ci;
    }

    public function setCiIncluye($ci) {
        $this->ci = $ci;
    }

    public function getIdRutinaIncluye() {
        return $this->idRutina;
    }

    public function setIdRutinaIncluye($idRutina) {
        $this->idRutina = $idRutina;
    }

    public function getIdFisioterapiaIncluye() {
        return $this->idFisioterapia;
    }

    public function setIdFisioterapiaIncluye($idFisioterapia) {
        $this->idFisioterapia = $idFisioterapia;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO INCLUYE (ci, id_rutina, id_fisioterapia) VALUES (?, ?, ?)");
        $query->bind_param('iii', $this->ci, $this->idRutina, $this->idFisioterapia);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
