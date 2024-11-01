<?php

require_once("usuario.php");

class Cliente extends Usuario
{
    public $ci;
    public $actividad;
    public $estado;
    public $estadoActividad;
    public $cumplimientoAgenda;
    public $resistenciaAnaerobica;
    public $fuerzaMuscular;
    public $resistenciaMuscular;
    public $flexibilidad;
    public $resistenciaMonotonia;
    public $resiliencia;

    public function __construct($ci, $actividad, $estado, $estadoActividad, $cumplimientoAgenda, $resistenciaAnaerobica, $fuerzaMuscular, $resistenciaMuscular, $flexibilidad, $resistenciaMonotonia, $resiliencia)
    {
        $this->ci = $ci;
        $this->actividad = $actividad;
        $this->estado = $estado;
        $this->estadoActividad = $estadoActividad;
        $this->cumplimientoAgenda = $cumplimientoAgenda;
        $this->resistenciaAnaerobica = $resistenciaAnaerobica;
        $this->fuerzaMuscular = $fuerzaMuscular;
        $this->resistenciaMuscular = $resistenciaMuscular;
        $this->flexibilidad = $flexibilidad;
        $this->resistenciaMonotonia = $resistenciaMonotonia;
        $this->resiliencia = $resiliencia;
    }


public function getCi() {
return $this->ci;
}

public function getActividad() {
return $this->actividad;
}

public function getEstado() {
return $this->estado;
}

public function getEstadoActividad() {
return $this->estadoActividad;
}

public function setActividad($actividad) {
$this->actividad = $actividad;
}

public function setEstado($estado) {
$this->estado = $estado;
}

public function setEstadoActividad($estadoActividad) {
$this->estadoActividad = $estadoActividad;
}

public function getCumplimientoAgenda() {
return $this->cumplimientoAgenda;
}

public function setCumplimientoAgenda($cumplimientoAgenda) {
$this->cumplimientoAgenda = $cumplimientoAgenda;
}

public function getResistenciaAnaerobica() {
return $this->resistenciaAnaerobica;
}

public function setResistenciaAnaerobica($resistenciaAnaerobica) {
$this->resistenciaAnaerobica = $resistenciaAnaerobica;
}

public function getFuerzaMuscular() {
return $this->fuerzaMuscular;
}

public function setFuerzaMuscular($fuerzaMuscular) {
$this->fuerzaMuscular = $fuerzaMuscular;
}

public function getResistenciaMuscular() {
return $this->resistenciaMuscular;
}

public function setResistenciaMuscular($resistenciaMuscular) {
$this->resistenciaMuscular = $resistenciaMuscular;
}

public function getFlexibilidad() {
return $this->flexibilidad;
}

public function setFlexibilidad($flexibilidad) {
$this->flexibilidad = $flexibilidad;
}

public function getResistenciaMonotonia() {
return $this->resistenciaMonotonia;
}

public function setResistenciaMonotonia($resistenciaMonotonia) {
$this->resistenciaMonotonia = $resistenciaMonotonia;
}

public function getResiliencia() {
return $this->resiliencia;
}

public function setResiliencia($resiliencia) {
$this->resiliencia = $resiliencia;
}
}

?>