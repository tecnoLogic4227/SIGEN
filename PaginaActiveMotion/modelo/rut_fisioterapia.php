<?php
require_once 'rutina.php';
require_once 'conexion.php';

class Rut_Fisioterapia extends Rutina {
    public function __construct($id_rutina) {
        parent::__construct($id_rutina);
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO rut_fisioterapia (id_rutina) VALUES (?)");
        $query->bind_param('i', $this->id_rutina);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
