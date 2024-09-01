<?php
$host = 'localhost';
$user = 'root';
$password = '';
$data_base = 'pruebaAlta';

$conexion;

function conectar($host, $user, $password, $data_base)
{
    global $conexion;
    $conexion = new mysqli($host, $user, $password, $data_base);
    if ($conexion->connect_error) {
        die("Error de conexion " . $conexion->connect_error);
    }
}

function desconectar()
{
    global $conexion;
    $conexion->close();
}

class Usuario {
    protected $ci;
    public $nombre;
    public $apellido;
    public $direccion;
    public $telefono;
    public  $email;
    public   $password;
    public $fecha_nac;
    public $ultimo_login;


function _construct($ci,$nombre,$apellido,$direccion,$telefono,$email,$password,$fecha_nac,$ultimo_login){
    $this->ci = $ci;
    $this->nombre = $nombre;
    $this->apellido = $apellido;
    $this->direccion = $direccion;
    $this->telefono = $telefono;
    $this->email=  $email;
    $this ->password = $password;
    $this->fecha_nac = $fecha_nac;
    $this->ultimo_login = $ultimo_login;
}

function get_ci(){
    return $this->ci;
}

function get_nombre(){
    return $this->nombre;
}

function setNombre($nombre){
    $this->nombre = $nombre;
}


function get_apellido(){
    return $this->apellido;
}

function setApellido($apellido){
    $this->apellido = $apellido;
}

function get_direccion(){
    return $this->direccion;
}

function setDireccion($direccion){
    $this->direccion = $direccion;
}

function get_telefono(){
    return $this->telefono;
}

function setTelefono($telefono){
    $this->telefono = $telefono;
}

function get_email(){
    return $this->email;
}

function  setEmail($email){
    $this->email = $email;
}

function get_password(){
    return $this->password;
}

function setPassword($password){
    $this->password = $password;
}

function get_fecha_nac(){
    return $this->fecha_nac;
}

function setFecha_nac($fecha_nac){
    $this->fecha_nac = $fecha_nac;
}

function get_ultimo_login(){
    return $this->ultimo_login;
}

function setUltimo_login($ultimo_login){
    $this->ultimo_login = $ultimo_login;
}

function agregarUsuario(Usuario $usuario){
    global $conexion;

    $stmt= $conexion->prepare("INSERT INTO usuario (ci, nombre, apellido, fecha_nac, telefono, direccion, email, password, ultimo_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?");
    $stmt->bind_param("issdisssd", $usuario->get_ci(), $usuario->get_nombre(), $usuario->get_apellido, $usuario->get_fecha_nac(), $usuario->get_telefono(), $usuario->get_direccion(), $usuario->get_email(), $usuario->get_password(), $usuario->get_ultimo_login());
    $stmt->execute();
    $stmt->close();
}

}

conectar($host, $user, $password, $data_base);
ping();
echo "<br>";
$usu=new Usuario(56341434,"Lucia", "Gilene", "4/01/2007", 096201118, "Comandante Braga 2678", "gileneaixa04@gmail.com", "ABCD1234", "21/07/2024");
agregarUsuario($usu);



?>