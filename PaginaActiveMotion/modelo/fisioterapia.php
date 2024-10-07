<?php
require_once 'conexion.php';

class Fisioterapia {
    public $idFisioterapia;
    public $nombreFisioterapia;
    public $tipoFisioterapia;
    public $descripcion;

    public function __construct($idFisioterapia, $nombreFisioterapia, $tipoFisioterapia, $descripcion) {
        $this->idFisioterapia = $idFisioterapia;
        $this->nombreFisioterapia = $nombreFisioterapia;
        $this->tipoFisioterapia = $tipoFisioterapia;
        $this->descripcion = $descripcion;
    }

    public function getIdFisioterapia() {
        return $this->idFisioterapia;
    }

    public function setIdFisioterapia($idFisioterapia) {
        $this->idFisioterapia = $idFisioterapia;
    }

    public function getNombreFisioterapia() {
        return $this->nombreFisioterapia;
    }

    public function setNombreFisioterapia($nombreFisioterapia) {
        $this->nombreFisioterapia = $nombreFisioterapia;
    }

    public function getTipoFisioterapia() {
        return $this->tipoFisioterapia;
    }

    public function setTipoFisioterapia($tipoFisioterapia) {
        $this->tipoFisioterapia = $tipoFisioterapia;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion) {
        $this->descripcion = $descripcion;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO fisioterapia (id_fisioterapia, nombre_fisioterapia, tipo_fisioterapia, descripcion) VALUES (?, ?, ?, ?)");
        $query->bind_param('isss', $this->idFisioterapia, $this->nombreFisioterapia, $this->tipoFisioterapia, $this->descripcion);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
