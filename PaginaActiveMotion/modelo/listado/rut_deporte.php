<?php

require_once '../conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  
  if ($_GET['accion'] == 'getRutinasDeporte') {
    global $conexion;
    $query = "SELECT * FROM RUT_DEPORTE";
    $result = $conexion->query($query);

    $data = array();
    while ($row = $result->fetch_assoc()) {
      $data[] = $row;
    }
   
    echo json_encode($data);
    exit;
  }
}
?>
