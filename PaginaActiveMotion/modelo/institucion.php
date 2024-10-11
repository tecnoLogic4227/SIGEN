<?php
require_once 'conexion.php';

class Institucion
{
    public $idInstitucion;
    public $nombreInstitucion;
    public $direccion;
    public $telefono;

    public function __construct($idInstitucion, $nombreInstitucion, $direccion, $telefono)
    {
        $this->idInstitucion = $idInstitucion;
        $this->nombreInstitucion = $nombreInstitucion;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
    }

    function getIdInstitucion()
    {
        return $this->idInstitucion;
    }

    function getNombreInsitucion()
    {
        return $this->nombreInstitucion;
    }

    function getDireccion()
    {
        return $this->direccion;
    }

    function getTelefono()
    {
        return $this->telefono;
    }

    function setNombreInstitucion($nombreInstitucion)
    {
        $this->nombreInstitucion = $nombreInstitucion;
    }

    function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

    function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    public function save()
    {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO institucion (ID_INSTITUCION, NOMBRE_INSTITUCION, DIRECCION, TELEFONO) VALUES (?, ?, ?, ?)");
        $query->bind_param('issi', $this->idInstitucion,  $this->nombreInstitucion, $this->direccion, $this->telefono);

        $result = $query->execute();
        return $result ? true : false;
    }
}
