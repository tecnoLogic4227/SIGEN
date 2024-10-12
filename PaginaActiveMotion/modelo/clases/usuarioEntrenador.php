<?php
require_once 'conexion.php';
require_once 'usuario.php';

class Entrenador extends Usuario {

    public function __construct($ci) {
        parent::__construct($ci, '', '', '', '', '', '', '');
    }

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO usuario_entrenador (CI) VALUES (?)");
    //     $query->bind_param('i', $this->ci);
    //     return $query->execute();
    // }
}

?>