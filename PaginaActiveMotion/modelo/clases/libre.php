<?php
require_once 'conexion.php';
require_once 'usuario_cliente.php';

class Libre extends Cliente {
    
    public function __construct($ci) {
        parent::__construct($ci, '', '', '', '', '', '', '');
    }

    // public function save() {
    //     global $conexion;
    //     $query = $conexion->prepare("INSERT INTO libre (CI) VALUES (?)");
    //     $query->bind_param('i', $this->ci);
    //     return $query->execute();
    // }
}
?>
