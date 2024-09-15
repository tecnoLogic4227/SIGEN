<?php
require_once 'conexion.php';

class Rutina {
    public $id_rutina;

    public function __construct($id_rutina) {
        $this->id_rutina = $id_rutina;
    }

    public function getIdRutina() {
        return $this->id_rutina;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO rutina (id_rutina) VALUES (?)");
        $query->bind_param('i', $this->id_rutina);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
