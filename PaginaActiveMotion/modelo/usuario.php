<?php
require_once 'conexion.php';

class Usuario {
    public $ci;
    public $nombre;
    public $apellido;
    public $direccion;
    public $email;
    public $contrasenia;
    public $fecha_nac;
    public $ultimo_login;

    public function __construct($ci, $nombre, $apellido, $direccion, $email, $contrasenia, $fecha_nac, $ultimo_login)
    {
        $this->ci = $ci;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->direccion = $direccion;
        $this->email = $email;
        $this->contrasenia = $contrasenia;
        $this->fecha_nac = $fecha_nac;
        $this->ultimo_login = $ultimo_login;
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

    function getContrasenia()
    {
        return $this->contrasenia;
    }

    function setContrasenia($contrasenia)
    {
        $this->contrasenia = $contrasenia;
    }

    function getFechaNac()
    {
        return $this->fecha_nac;
    }

    function setFechaNac($fecha_nac)
    {
        $this->fecha_nac = $fecha_nac;
    }

    function getUltimoLogin()
    {
        return $this->ultimo_login;
    }

    function setUltimoLogin($ultimo_login)
    {
        $this->ultimo_login = $ultimo_login;
    }

    public function save() {
        global $conexion;
    
        if ($this->ci == '') {
          $query = $conexion->prepare("INSERT INTO usuario (CI, NOMBRE, APELLIDO, DIRECCION, EMAIL, CONTRASENIA, FECHA_NAC,  ULTIMO_LOGIN) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
          $query->bind_param('isssssss', $this->ci, $this->nombre, $this->apellido, $this->direccion, $this->email, $this->contrasenia, $this->fecha_nac, $this->ultimo_login);
        }
    
        $result = $query->execute();
        
        if ($result) {
          return true;
        } else {
          return false;
        }
      }
}



?>