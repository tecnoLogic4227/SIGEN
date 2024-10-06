<?php
require_once 'conexion.php';
require_once 'institucion.php';

class InstitucionTelefono {
    public $idInstitucion;
    public $telefono;

    public function __construct($idInstitucion, $telefono) {
        $this->idInstitucion = $idInstitucion;
        $this->telefono = $telefono;
    }

    public function getIdInstitucion() {
        return $this->idInstitucion;
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
        $query->bind_param('is', $this->idInstitucion, $this->telefono);

        $result = $query->execute();
        return $result ? true : false;
    }

}
?>
