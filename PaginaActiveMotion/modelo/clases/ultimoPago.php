<?php

class UltimoPago {
    public $idUltimoPago;
    public $horaPago;
    public $fechaPago;
    public $valor;

    public function __construct($idUltimoPago, $horaPago, $fechaPago, $valor) {
        $this->idUltimoPago = $idUltimoPago;
        $this->horaPago = $horaPago;
        $this->fechaPago = $fechaPago;
        $this->valor = $valor;
    }

    public function getIdUltimoPago() {
        return $this->idUltimoPago;
    }

    public function setIdUltimoPago($idUltimoPago) {
        $this->idUltimoPago = $idUltimoPago;
    }

    public function getHoraPago() {
        return $this->horaPago;
    }

    public function setHoraPago($horaPago) {
        $this->horaPago = $horaPago;
    }

    public function getFechaPago() {
        return $this->fechaPago;
    }

    public function setFechaPago($fechaPago) {
        $this->fechaPago = $fechaPago;
    }

    public function getValor() {
        return $this->valor;
    }

    public function setValor($valor) {
        $this->valor = $valor;
    }
}
?>
