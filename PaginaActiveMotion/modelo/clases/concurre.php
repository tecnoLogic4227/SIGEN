<?php
require_once 'conexion.php';

class Concurre {
    public $ci;
    public $idInstitucion;

    public function __construct($ci, $idInstitucion) {
        $this->ci = $ci;
        $this->idInstitucion = $idInstitucion;
    }

    public function getCiConcurre() {
        return $this->ci;
    }

    public function setCiConcurre($ci) {
        $this->ci = $ci;
    }

    public function getIdInstitucionConcurre() {
        return $this->idInstitucion;
    }

    public function setIdInstitucionConcurre($idInstitucion) {
        $this->idInstitucion = $idInstitucion;
    }

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO CONCURRE (ci, id_institucion) VALUES (?, ?)");
    //     $query->bind_param('ii', $this->ci, $this->idInstitucion);

    //     $result = $query->execute();
    //     return $result ? true : false;
    // }
}
?>
