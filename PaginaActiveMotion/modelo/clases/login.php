<?php

class Login {
    public $ci;
    public $contrasenia;

    public function __construct($ci, $contrasenia) {
        $this->ci = $ci;
        $this->contrasenia = $contrasenia;
    }

    public function getCiLogin() {
        return $this->ci;
    }

    public function setCiLogin($ci) {
        $this->ci = $ci;
    }

    public function getContraseniaLogin() {
        return $this->contrasenia;
    }

    public function setContraseniaLogin($contrasenia) {
        $this->contrasenia = $contrasenia;
    }
}
?>
