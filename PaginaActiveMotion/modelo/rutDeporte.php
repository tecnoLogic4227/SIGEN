<?php
require_once 'rutina.php';
require_once 'conexion.php';

class RutDeporte extends Rutina {
    public function __construct($idRutina) {
        parent::__construct($idRutina);
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO rut_deporte (id_rutina) VALUES (?)");
        $query->bind_param('i', $this->idRutina);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>