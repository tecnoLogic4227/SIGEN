<?php
require_once 'conexion.php';
require_once 'institucion.php';

class Institucion_Telefono {
    public $id_institucion;
    public $telefono;

    public function __construct($id_institucion, $telefono) {
        $this->id_institucion = $id_institucion;
        $this->telefono = $telefono;
    }

    public function getIdInstitucion() {
        return $this->id_institucion;
    }

    public function getTelefono() {
        return $this->telefono;
    }

    public function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO institucion_telefono (ci, telefono) VALUES (?, ?)");
        $query->bind_param('is', $this->id_institucion, $this->telefono);

        $result = $query->execute();
        return $result ? true : false;
    }

}
?>
