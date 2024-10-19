<?php
require_once 'usuarioCliente.php';

class Paciente extends Cliente {
    public $motivo;
    public $lesion;

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
}
?>