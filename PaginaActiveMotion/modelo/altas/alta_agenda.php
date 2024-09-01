<?php
require_once 'conexion_alta.php';

class Agenda {
    public $nro_agenda;
    public $turno;
    public $fecha;
    public $hora;

    public function __construct($nro_agenda,  $turno, $fecha, $hora) 

    {
        $this->nro_agenda = $nro_agenda;
        $this->turno = $turno;
        $this->fecha = $fecha;
        $this->hora = $hora;
    }

    function get_nro_agenda()
    {
        return $this->nro_agenda;
    }

    function get_turno()
    {
        return $this->turno;
    }

    function setTurno($turno)
    {
        $this->turno = $turno;
    }

    function get_fecha()
    {
        return $this->fecha;
    }

    function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    function  get_hora(){
        return $this->hora;
    }

    function  setHora($hora){
        $this->hora = $hora;
    }


}

function agregarAgenda($agenda)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($agenda);

    $nro_agenda = $agenda->get_nro_agenda();
    $turno = $agenda->get_turno();
    $fecha = $agenda->get_fecha();
    $hora = $agenda->get_hora();

    $stmt = $conexion->prepare("INSERT INTO agenda (nro_agenda, turno, fecha,  hora) VALUES (?, ?, ?, ?)");


    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("isss", $nro_agenda, $turno, $fecha, $hora);

    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Agenda registrada<br>";
}

conectar();

//hacemos de a uno claramente
$age = new Agenda("0", "Matutino", "2024-09-09",  "10:00");

agregarAgenda($age);
?>