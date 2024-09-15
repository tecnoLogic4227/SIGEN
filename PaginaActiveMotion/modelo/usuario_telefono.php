<?php
require_once 'conexion.php';
require_once 'usuario.php';

class Usuario_Telefono {
    public $ci;
    public $telefono;

    public function __construct($ci, $telefono) {
        $this->ci = $ci;
        $this->telefono = $telefono;
    }

    public function getCi() {
        return $this->ci;
    }

    public function getTelefono() {
        return $this->telefono;
    }

    public function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO usuario_telefono (ci, telefono) VALUES (?, ?)");
        $query->bind_param('ss', $this->ci, $this->telefono);

        $result = $query->execute();
        return $result ? true : false;
    }

}
?>
