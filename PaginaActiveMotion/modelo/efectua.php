<?php
require_once 'conexion.php';

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

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO EFECTUA (ci, id_ultimo_pago) VALUES (?, ?)");
        $query->bind_param('ii', $this->ci, $this->idUltimoPago);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
