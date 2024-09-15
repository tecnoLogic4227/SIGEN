<?php
require_once 'conexion.php';
require_once 'usuario.php';

class Cliente extends Usuario {
    private $actividad;
    private $estado;
    private $calificacion;
    private $estado_actividad;
    private $fecha;
    private $hora;
    private $turno_agenda;

    public function __construct($ci, $actividad, $estado, $calificacion, $estado_actividad, $fecha, $hora, $turno_agenda) {
        parent::__construct($ci, '', '', '', '', '', '', '');
        $this->actividad = $actividad;
        $this->estado = $estado;
        $this->calificacion = $calificacion;
        $this->estado_actividad = $estado_actividad;
        $this->fecha = $fecha;
        $this->hora = $hora;
        $this->turno_agenda = $turno_agenda;
    }

    public function getActividad() {
        return $this->actividad;
    }

    public function getEstado() {
        return $this->estado;
    }

    public function getCalificacion() {
        return $this->calificacion;
    }

    public function getEstadoActividad() {
        return $this->estado_actividad;
    }

    public function getFecha() {
        return $this->fecha;
    }

    public function getHora() {
        return $this->hora;
    }

    public function getTurnoAgenda() {
        return $this->turno_agenda;
    }

    public function setActividad($actividad) {
        $this->actividad = $actividad;
    }

    public function setEstado($estado) {
        $this->estado = $estado;
    }

    public function setCalificacion($calificacion) {
        $this->calificacion = $calificacion;
    }

    public function setEstadoActividad($estado_actividad) {
        $this->estado_actividad = $estado_actividad;
    }

    public function setFecha($fecha) {
        $this->fecha = $fecha;
    }

    public function setHora($hora) {
        $this->hora = $hora;
    }

    public function setTurnoAgenda($turno_agenda) {
        $this->turno_agenda = $turno_agenda;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO usuario_cliente (CI, ACTIVIDAD, ESTADO, CALIFICACION, ESTADO_ACTIVIDAD, FECHA, HORA, TURNO_AGENDA) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $query->bind_param('isssssss', $this->ci, $this->actividad, $this->estado, $this->calificacion, $this->estado_actividad, $this->fecha, $this->hora, $this->turno_agenda);
        return $query->execute();
    }
}
?>

?>