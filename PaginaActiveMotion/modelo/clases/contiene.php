<?php

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
}
?>
