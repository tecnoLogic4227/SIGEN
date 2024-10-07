<?php
require_once 'conexion.php';

class Contiene {
    public $idEquipo;
    public $nombreDeporte;

    public function __construct($idEquipo, $nombreDeporte) {
        $this->idEquipo = $idEquipo;
        $this->nombreDeporte = $nombreDeporte;
    }

    public function getIdEquipoContiene() {
        return $this->idEquipo;
    }

    public function setIdEquipoContiene($idEquipo) {
        $this->idEquipo = $idEquipo;
    }

    public function getNombreDeporteContiene() {
        return $this->nombreDeporte;
    }

    public function setNombreDeporteContiene($nombreDeporte) {
        $this->nombreDeporte = $nombreDeporte;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO CONTIENE (id_equipo, nombre_deporte) VALUES (?, ?)");
        $query->bind_param('is', $this->idEquipo, $this->nombreDeporte);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
