<?php
require_once 'conexion.php';

class Institucion {
    public $id_institucion;
    public $nombre_institucion;
    public $direccion;

    public function __construct($id_institucion, $nombre_institucion, $direccion)
    {
        $this->id_institucion = $id_institucion;
        $this->nombre_institucion = $nombre_institucion;
        $this->direccion = $direccion;
    }

    function getIdInstitucion()
    {
        return $this->id_institucion;
    }

    function getNombreInsitucion()
    {
        return $this->nombre_institucion;
    }

    function getDireccion()
    {
        return $this->direccion;
    }

    function setNombreInstitucion($nombre_institucion)
    {
        $this->nombre_institucion = $nombre_institucion;
    }

    function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

    public function save() {
        global $conexion;
        $query = $conexion->prepare("INSERT INTO institucion (ID_INSTITUCION, NOMBRE_INSTITUCION, DIRECCION) VALUES (?, ?, ?)");
        $query->bind_param('iss', $this->id_institucion,  $this->nombre_institucion, $this->direccion);


        $result = $query->execute();
        return $result ? true : false;
    }

}


?>