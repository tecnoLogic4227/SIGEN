<?php

class Efectua {
    public $ci;
    public $idUltimoPago;

    public function __construct($ci, $idUltimoPago) {
        $this->ci = $ci;
        $this->idUltimoPago = $idUltimoPago;
    }

    public function getCiEfectua() {
        return $this->ci;
    }

    public function setCiEfectua($ci) {
        $this->ci = $ci;
    }

    public function getIdUltimoPagoEfectua() {
        return $this->idUltimoPago;
    }

    public function setIdUltimoPagoEfectua($idUltimoPago) {
        $this->idUltimoPago = $idUltimoPago;
    }
}
?>
