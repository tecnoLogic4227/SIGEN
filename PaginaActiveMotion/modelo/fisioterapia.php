<?php
require_once 'conexion.php';

class Fisioterapia {
    public $id_fisioterapia;
    public $nombre_fisioterapia;
    public $tipo_fisioterapia;
    public $descripcion;

    public function __construct($id_fisioterapia, $nombre_fisioterapia, $tipo_fisioterapia, $descripcion) {
        $this->id_fisioterapia = $id_fisioterapia;
        $this->nombre_fisioterapia = $nombre_fisioterapia;
        $this->tipo_fisioterapia = $tipo_fisioterapia;
        $this->descripcion = $descripcion;
    }

    public function getIdFisioterapia() {
        return $this->id_fisioterapia;
    }

    public function setIdFisioterapia($id_fisioterapia) {
        $this->id_fisioterapia = $id_fisioterapia;
    }

    public function getNombreFisioterapia() {
        return $this->nombre_fisioterapia;
    }

    public function setNombreFisioterapia($nombre_fisioterapia) {
        $this->nombre_fisioterapia = $nombre_fisioterapia;
    }

    public function getTipoFisioterapia() {
        return $this->tipo_fisioterapia;
    }

    public function setTipoFisioterapia($tipo_fisioterapia) {
        $this->tipo_fisioterapia = $tipo_fisioterapia;
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
        $query->bind_param('isss', $this->id_fisioterapia, $this->nombre_fisioterapia, $this->tipo_fisioterapia, $this->descripcion);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
