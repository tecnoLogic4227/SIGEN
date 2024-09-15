<?php
require_once 'conexion.php';

class Ultimo_Pago {
    public $id_ultimo_pago;
    public $hora;
    public $fecha;
    public $valor;

    public function __construct($id_ultimo_pago, $hora, $fecha, $valor) {
        $this->id_ultimo_pago = $id_ultimo_pago;
        $this->hora = $hora;
        $this->fecha = $fecha;
        $this->valor = $valor;
    }

    public function getIdUltimoPago() {
        return $this->id_ultimo_pago;
    }

    public function setIdUltimoPago($id_ultimo_pago) {
        $this->id_ultimo_pago = $id_ultimo_pago;
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

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO ultimo_pago (id_ultimo_pago, hora, fecha, valor) VALUES (?, ?, ?, ?)");
        $query->bind_param('issi', $this->id_ultimo_pago, $this->hora, $this->fecha, $this->valor);

        $result = $query->execute();
        return $result ? true : false;
    }
}
?>
