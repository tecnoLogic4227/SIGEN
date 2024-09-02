<?php
require_once 'conexion.php';

class Combo {
    public $id_combo;

    public function __construct($id_combo)
    {
        $this->id_combo = $id_combo;
    }

    function get_id_combo()
    {
        return $this->id_combo;
    }

}

function agregarCombo($combo)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($combo);

    $id_combo = $combo->get_id_combo();

    $stmt = $conexion->prepare("INSERT INTO combo (id_combo) VALUES (?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("i", $id_combo);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Combo registrada<br>";
}

conectar();

//hacemos de a uno claramente
$comb = new Combo("0");

agregarCombo($comb);
?>