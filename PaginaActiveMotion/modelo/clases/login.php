<?php

class Login {
    public $idLogin;
    public $contrasenia;

    public function __construct($idLogin, $contrasenia) {
        $this->ci = $ci;
        $this->contrasenia = $contrasenia;
    }

    public function getIdLogin() {
        return $this->idLogin;
    }

    public function setIdLogin($idLogin) {
        $this->idLogin = $idLogin;
    }

    public function getContraseniaLogin() {
        return $this->contrasenia;
    }

    public function setContraseniaLogin($contrasenia) {
        $this->contrasenia = $contrasenia;
    }
}
?>
