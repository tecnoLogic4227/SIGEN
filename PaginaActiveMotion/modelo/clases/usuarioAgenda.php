<?php

class UsuarioAgenda {
    public $ci;
    public $fecha;
    public $hora;
    public $turnoAgenda;

    public function __construct($ci, $fecha, $hora, $turnoAgenda) {
        $this->ci = $ci;
        $this->fecha = $fecha;
        $this->hora = $hora;
        $this->turnoAgenda = $turnoAgenda;
    }

    function getCi() {
        return $this->ci;
    }

    function getFecha() {
        return $this->fecha;
    }

    function getHora()
    {
        return $this->hora;
    }

    function setHora($hora)
    {
        $this->hora = $hora;
    }

    function getTurnoAgenda()
    {
        return $this->turnoAgenda;
    }

    function setTurnoAgenda($turnoAgenda)
    {
        $this->turnoAgenda = $turnoAgenda;
    }
}



?>