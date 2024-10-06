<?php
require_once 'conexion.php';
require_once 'usuario.php';

class Cliente extends Usuario {
    private $actividad;
    private $estado;
    private $calificacion;
    private $estadoActividad;
    private $fecha;
    private $hora;
    private $turnoAgenda;

    public function __construct($ci, $actividad, $estado, $calificacion, $estadoActividad, $fecha, $hora, $turnoAgenda) {
        parent::__construct($ci, '', '', '', '', '', '', '');
        $this->actividad = $actividad;
        $this->estado = $estado;
        $this->calificacion = $calificacion;
        $this->estadoActividad = $estadoActividad;
        $this->fecha = $fecha;
        $this->hora = $hora;
        $this->turnoAgenda = $turnoAgenda;
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
        return $this->estadoActividad;
    }

    public function getFecha() {
        return $this->fecha;
    }

    public function getHora() {
        return $this->hora;
    }

    public function getTurnoAgenda() {
        return $this->turnoAgenda;
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

    public function setEstadoActividad($estadoActividad) {
        $this->estadoActividad = $estadoActividad;
    }

    public function setFecha($fecha) {
        $this->fecha = $fecha;
    }

    public function setHora($hora) {
        $this->hora = $hora;
    }

    public function setTurnoAgenda($turnoAgenda) {
        $this->turnoAgenda = $turnoAgenda;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO usuario_cliente (CI, ACTIVIDAD, ESTADO, CALIFICACION, ESTADO_ACTIVIDAD, FECHA, HORA, TURNO_AGENDA) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $query->bind_param('isssssss', $this->ci, $this->actividad, $this->estado, $this->calificacion, $this->estadoActividad, $this->fecha, $this->hora, $this->turnoAgenda);
        return $query->execute();
    }
}
?>

?>