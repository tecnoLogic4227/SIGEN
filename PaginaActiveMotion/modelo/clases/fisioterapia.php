<?php

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
}
?>
