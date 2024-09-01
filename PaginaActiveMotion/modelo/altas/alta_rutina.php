<?php
require_once 'conexion.php';

class Rutina {
    public $id_rutina;

    public function __construct($id_rutina)
    {
        $this->id_rutina = $id_rutina;
    }

    function get_id_rutina()
    {
        return $this->id_rutina;
    }

}

function agregarRutina($rutina)
{
    global $conexion;

    echo "Creando rutina<br>";
    var_dump($rutina);

    $id_rutina = $rutina->get_id_rutina();

    $stmt = $conexion->prepare("INSERT INTO rutina (id_rutina) VALUES (?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("i", $id_rutina);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Usuario registrado<br>";
}

conectar();

//hacemos de a uno claramente
$rut = new Rutina("0");

agregarRutina($rut);
?>