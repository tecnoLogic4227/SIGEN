<?php
require_once 'conexion.php';

class DeportistaDeporte {
    public $ci;
    public $deporte;

    public function __construct($ci, $deporte) {
        $this->ci = $ci;
        $this->deporte = $deporte;
    }

    public function getCi() {
        return $this->ci;
    }

    public function getDeporte() {
        return $this->deporte;
    }

    public function setDeporte($deporte) {
        $this->deporte = $deporte;
    }

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO deportista_deportes (ci, deporte) VALUES (?, ?)");
    //     $query->bind_param('is', $this->ci, $this->deporte);

    //     $result = $query->execute();
    //     return $result ? true : false;
    // }

}
?>
