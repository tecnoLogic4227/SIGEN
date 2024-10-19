<?php

class DeportistaDeporte {
    public $ci;
    public $deporte;

    public function __construct($ci, $deporte) {
        $this->ci = $ci;
        $this->deporte = $deporte;
    }

    public function getCi() {
        return $this->ci;
    }

    public function getDeporte() {
        return $this->deporte;
    }

    public function setDeporte($deporte) {
        $this->deporte = $deporte;
    }
}
?>
