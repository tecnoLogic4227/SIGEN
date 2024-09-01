<?php
require_once 'conexion_alta.php';

class Equipo {
    public $id_equipo;
    public $nombre_equipo;
    public $cantidad;
    public $ci;



    public function __construct($id_equipo, $nombre_equipo, $cantidad, $ci)
    {
        $this->id_equipo = $id_equipo;
        $this->nombre_equipo = $nombre_equipo;
        $this->cantidad = $cantidad;
        $this->ci = $ci;

    }

    function get_id_equipo()
    {
        return $this->id_equipo;
    }

    function get_nombre_equipo()
    {
        return $this->nombre_equipo;
    }

    function setNombreEquipo($nombre_equipo)
    {
        $this->nombre_equipo = $nombre_equipo;
    }

    function get_cantidad()
    {
        return $this->cantidad;
    }

    function setCantidad($cantidad)
    {
        $this->cantidad = $cantidad;
    }

    function get_ci()
    {
        return $this->ci;
    }

}

function agregarEquipo($equipo)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($equipo);

    $id_equipo = $equipo->get_id_equipo();
    $nombre_equipo = $equipo->get_nombre_equipo();
    $cantidad = $equipo->get_cantidad();
    $ci=  $equipo->get_ci();

    $stmt = $conexion->prepare("INSERT INTO equipo (id_equipo, nombre_equipo, cantidad, ci) VALUES (?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("isii", $id_equipo, $nombre_equipo, $cantidad, $ci);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Euipo registrado<br>";
}

conectar();

//en la ci va a tener mas pero yo no agregue mas usuarios en deporte
$equi = new Equipo("0", "Nacional", "11", "12345678");


agregarEquipo($equi);
?>