<?php

class Usuario {
    public $ci;
    public $nombre;
    public $apellido;
    public $direccion;
    public $email;
    public $fechaNac;
    public $rol;
    public $telefono;

    public function __construct($ci, $nombre, $apellido, $direccion, $email, $fechaNac, $rol, $telefono)
    {
        $this->ci = $ci;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->direccion = $direccion;
        $this->email = $email;
        $this->fechaNac = $fechaNac;
        $this->rol = $rol;
        $this->telefono = $telefono;
    }

    function getCi()
    {
        return $this->ci;
    }

    function getNombre()
    {
        return $this->nombre;
    }

    function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    function getApellido()
    {
        return $this->apellido;
    }

    function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

    function getDireccion()
    {
        return $this->direccion;
    }

    function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

    function getEmail()
    {
        return $this->email;
    }

    function setEmail($email)
    {
        $this->email = $email;
    }

    function getFechaNac()
    {
        return $this->fechaNac;
    }

    function setFechaNac($fechaNac)
    {
        $this->fechaNac = $fechaNac;
    }

    function getRol()
    {
        return $this->rol;
    }

    function setRol($rol)
    {
        $this->rol = $rol;
    }

    function getTelefono()
    {
        return $this->telefono;
    }

    function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }
}
?>