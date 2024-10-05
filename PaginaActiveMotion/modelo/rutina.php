<?php

require_once 'conexion.php';

class Rutina {
    public $idRutina;
    public $nombreRutina;

    public function __construct($idRutina, $nombreRutina) {
        $this->nombreRutina = $nombreRutina;
        $this->idRutina = $idRutina;
    }

    public function getIdRutina() {
        return $this->idRutina;
    }

    public function getNombreRutina() {
        return $this->nombreRutina;
    }

    public function setNombreRutina($nombreRutina) {
        $this->nombreRutina = $nombreRutina;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO rutina (nombre_rutina) VALUES (?)");
        $query->bind_param('s', $this->nombreRutina);

        $result = $query->execute();
        return $result ? true : false;
    }

}
?>
