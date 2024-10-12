<?php
require_once 'conexion.php';

class Deporte {
    public $nombreDeporte;
    public $descripcion;

    public function __construct($nombreDeporte, $descripcion) {
        $this->nombreDeporte = $nombreDeporte;
        $this->descripcion = $descripcion;
    }

    public function getNombreDeporte() {
        return $this->nombreDeporte;
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
        $query->bind_param('ss', $this->nombreDeporte, $this->descripcion);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
