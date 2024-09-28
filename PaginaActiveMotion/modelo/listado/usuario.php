<?php


require_once '../conexion.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  if ($_GET['accion'] == 'getUsuarios') {
    global $conexion;
    $query = "SELECT * FROM usuario";
    $result = $conexion->query($query);

    $data = array();
    while ($row = $result->fetch_assoc()) {
      $data[] = $row; 

    }
   
    echo json_encode($data);
    exit;
  }
}