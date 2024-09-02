<?php

include_once("../modelo/buscador.php");

$typeSearch = $_REQUEST["type"];
$search = $_REQUEST["search"];

function validateSearch($search, $typeSearch)
{

    if (is_numeric($search)) {
        $length = 0;

        $length = strlen($search);

        if ($typeSearch == "cliente" || $typeSearch == "deportista") {
            if ($length < 7 || $length > 8) {
                return false;
            }

            $search = strval($search);

            if (strlen($search) == 7) {
                $search = '0' . $search;
            }

            $resultado = 0;
            $algoritmoCI = [2, 9, 8, 7, 6, 3, 4];

            for ($i = 0; $i < count($algoritmoCI); $i++) {
                $resultado += $algoritmoCI[$i] * intval($search[$i]);
            }

            $digitoCalculado = ($resultado % 10 === 0) ? 0 : 10 - ($resultado % 10);

            if (intval($search[strlen($search) - 1]) != $digitoCalculado) {
                return false;
            }
        }

        if ($typeSearch == "planEntrenamiento" || $typeSearch == "equipo") {
            if ($length < 1) {
                return false;
            }
        }

    } else {
        return false;
    }

    return true;
}
function procesarBusqueda($search, $typeSearch)
{

    switch ($typeSearch) {
        case 'cliente':
            return buscarCliente($search);
        case 'deportista':
            return buscarDeportista($search);
        case 'planEntrenamiento':
            return buscarPlanEntrenamiento($search);
        case 'equipo':
            return buscarEquipo($search);
        default:
            return array("mensaje" => "Tipo de busqueda no valido.");
    }
}

if (validateSearch($search, $typeSearch)) {
    
    echo json_encode(procesarBusqueda($search, $typeSearch));
} else {
    if ($typeSearch == "planEntrenamiento" || $typeSearch == "equipo") {
        $result = "Por favor ingrese un ID valido. ";
        echo ($result);
    } else {
        if ($typeSearch == "cliente" || $typeSearch == "deportista") {
            $result = "Por favor ingrese una CI valida. ";
            echo ($result);
        } else {
            $result = "Se encontro un valor invalido. ";
            echo ($result);
        }
    }
}

?>