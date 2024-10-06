<?php
require_once 'conexion.php';

class Institucion {
    public $idInstitucion;
    public $nombreInstitucion;
    public $direccion;

    public function __construct($idInstitucion, $nombreInstitucion, $direccion)
    {
        $this->idInstitucion = $idInstitucion;
        $this->nombreInstitucion = $nombreInstitucion;
        $this->direccion = $direccion;
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

    function setNombreInstitucion($nombreInstitucion)
    {
        $this->nombreInstitucion = $nombreInstitucion;
    }

    function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO institucion (ID_INSTITUCION, NOMBRE_INSTITUCION, DIRECCION) VALUES (?, ?, ?)");
        $query->bind_param('iss', $this->idInstitucion,  $this->nombreInstitucion, $this->direccion);


        $result = $query->execute();
        return $result ? true : false;
    }

}


?>