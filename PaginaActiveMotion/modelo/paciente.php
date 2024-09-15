<?php
require_once 'conexion.php';
require_once 'usuario_cliente.php';

class Paciente extends Cliente {
    private $motivo;
    private $lesion;

    public function __construct($ci, $motivo, $lesion) {
        parent::__construct($ci, '', '', '', '', '', '', '');
        $this->motivo = $motivo;
        $this->lesion = $lesion;
    }

    public function getMotivo() {
        return $this->motivo;
    }

    public function getLesion() {
        return $this->lesion;
    }

    public function setMotivo($motivo) {
        $this->motivo = $motivo;
    }

    public function setLesion($lesion) {
        $this->lesion = $lesion;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO paciente (CI, MOTIVO, LESION) VALUES (?, ?, ?)");
        $query->bind_param('iss', $this->ci, $this->motivo, $this->lesion);
        return $query->execute();
    }
}
?>