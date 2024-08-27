<?php

include("../modelo/conexion.php");
include("../modelo/buscador.php");

$typeSearch = $_POST['type'];
$search = $_POST['search'];

function validateSearch($search, $typeSearch)
{
    $valida = true;

    if (!is_numeric($search)) {
        $valida = false;
    }

    if ($valida) {
        $length = 0;

        if (is_float($search) || is_double($search)) {
            $length = strval($search);
            $length = str_replace('.', '', $length);
        }
    
        if (is_int($search)){
            $length = strlen(strval($search));
        }    
    
        if ($typeSearch == "cliente" || $typeSearch == "deportista") {
            if ($length != 8) {
                $valida = false;
            }
        }
    
        if ($typeSearch == "planEntrenamiento" || $typeSearch == "equipo") {
            if ($length < 1) {
                $valida = false;
            }
        }
    }   

    return $valida;
}
function procesarBusqueda($connection, $typeSearch, $search)
{
    switch ($typeSearch) {
        case 'cliente':
            return buscarCliente($connection, $search);
        case 'deportista':
            return buscarDeportista($connection, $search);
        case 'planEntrenamiento':
            return buscarPlanEntrenamiento($connection, $search);
        case 'equipo':
            return buscarEquipo($connection, $search);
        default:
            return array("mensaje" => "Tipo de búsqueda no válido.");
    }
}

$valid = validateSearch($search, $typeSearch);

$result;

if ($valid) {
    $result = procesarBusqueda($connection, $typeSearch, $search);
} else {
    if ($typeSearch == "planEntrenamiento" || $typeSearch == "equipo") {
        $result = "Por favor ingrese un ID válido. ";
    } else {
        if ($typeSearch == "cliente" || $typeSearch == "deportista") {
            $result = "Por favor ingrese una CI válida. ";
        } else {
            $result = "Se encontró un valor inválido. ";
        }
    } 
}

echo json_encode($result);

?>