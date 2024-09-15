<?php
require_once 'conexion.php';

class Deporte {
    public $nombre_deporte;
    public $descripcion;

    public function __construct($nombre_deporte, $descripcion) {
        $this->nombre_deporte = $nombre_deporte;
        $this->descripcion = $descripcion;
    }

    public function getNombreDeporte() {
        return $this->nombre_deporte;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion) {
        $this->descripcion = $descripcion;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO deporte (nombre_deporte, descripcion) VALUES (?, ?)");
        $query->bind_param('ss', $this->nombre_deporte, $this->descripcion);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
