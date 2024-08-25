<?php

include("../modelo/conexion.php");
include("../modelo/buscador.php"); 

function procesarBusqueda($connection, $typeSearch, $search) {
    switch ($typeSearch) {
        case 'cliente':
            return buscarCliente($connection, $search);
        case 'deportista':
            return buscarDeportista($connection, $search);
        case 'plan':
            return buscarPlanEntrenamiento($connection, $search);        
        case 'equipo':
            return buscarEquipo($connection, $search);
        default:
            return array("mensaje" => "Tipo de búsqueda no válido.");
    }
}

$typeSearch = $_POST['tipoBusqueda'];
$search = $_POST['search'];

$result = procesarBusqueda($connection, $typeSearch, $search);
echo json_encode($result);
?>