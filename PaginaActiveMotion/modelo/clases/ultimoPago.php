<?php

class UltimoPago {
    public $idUltimoPago;
    public $hora;
    public $fecha;
    public $valor;

    public function __construct($idUltimoPago, $hora, $fecha, $valor) {
        $this->idUltimoPago = $idUltimoPago;
        $this->hora = $hora;
        $this->fecha = $fecha;
        $this->valor = $valor;
    }

    public function getIdUltimoPago() {
        return $this->idUltimoPago;
    }

    public function setIdUltimoPago($idUltimoPago) {
        $this->idUltimoPago = $idUltimoPago;
    }

    public function getHora() {
        return $this->hora;
    }

    public function setHora($hora) {
        $this->hora = $hora;
    }

    public function getFecha() {
        return $this->fecha;
    }

    public function setFecha($fecha) {
        $this->fecha = $fecha;
    }

    public function getValor() {
        return $this->valor;
    }

    public function setValor($valor) {
        $this->valor = $valor;
    }
}
?>
