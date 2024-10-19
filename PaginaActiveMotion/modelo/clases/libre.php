<?php
require_once 'usuarioCliente.php';

class Libre extends Cliente {
    
    public function __construct($ci) {
        parent::__construct($ci, '', '', '', '', '', '', '');
    }
}
?>
