<?php
require_once 'usuario.php';

class Entrenador extends Usuario {

    public function __construct($ci) {
        parent::__construct($ci, '', '', '', '', '', '', '');
    }

}

?>