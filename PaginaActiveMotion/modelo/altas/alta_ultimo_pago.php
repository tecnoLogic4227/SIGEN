<?php
require_once 'conexion_alta.php';

class UltimoPago {
    public $id_ultimo_pago;
    public $hora;
    public $fecha;
    public $valor;

    public function __construct($id_ultimo_pago, $hora, $fecha, $valor)
    {
        $this->id_ultimo_pago = $id_ultimo_pago;
        $this->hora = $hora;
        $this->fecha = $fecha;
        $this->valor = $valor;
    }

    function get_id_ultimo_pago()
    {
        return $this->id_ultimo_pago;
    }

    function get_hora()
    {
        return $this->hora;
    }

    function setHora($hora)
    {
        $this->hora = $hora;
    }

    function get_fecha()
    {
        return $this->fecha;
    }

    function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    function get_valor()
    {
        return $this->valor;
    }

    function setValor($valor)
    {
        $this->valor = $valor;
    }

}

function agregarUltimoPago($ultimo_pago)
{
    global $conexion;

    echo "Creando usuario<br>";
    var_dump($ultimo_pago);

    $id_ultimo_pago = $ultimo_pago->get_id_ultimo_pago();
    $hora = $ultimo_pago->get_hora();
    $fecha = $ultimo_pago->get_fecha();
    $valor = $ultimo_pago->get_valor();

    $stmt = $conexion->prepare("INSERT INTO ultimo_pago (id_ultimo_pago, hora, fecha, valor) VALUES (?, ?, ?, ?)");

    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param("issi", $id_ultimo_pago, $hora, $fecha, $valor);
    $stmt->execute();

    if ($stmt->error) {
        die("Error en la ejecución de la consulta: " . $stmt->error);
    }

    $stmt->close();
    
    echo "Usuario registrado<br>";
}

conectar();

//hacemos de a uno claramente
$ult = new UltimoPago("0", "14:07", "2024-08-02", "2000");

agregarUltimoPago($ult);
?>