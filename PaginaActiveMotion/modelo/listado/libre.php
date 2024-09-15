<?php

require_once '../conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  
  iif ($_GET['accion'] == 'getLibres') {
    $query = "SELECT * FROM LIBRE";
    $result = $connection->query($query);

    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);
    exit;
}
}
?>
