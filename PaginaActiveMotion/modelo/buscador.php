<?php

require_once("conexion.php");

function buscarCliente($search)
{
    global $conexion;

    try {

        $stmt = $conexion->prepare("SELECT * FROM usuario_cliente JOIN usuario ON usuario.ci = usuario_cliente.ci JOIN usuario_telefono ON usuario.ci = usuario_telefono.ci JOIN efectua ON usuario_telefono.ci = efectua.ci JOIN ultimo_pago ON efectua.id_ultimo_pago = ultimo_pago.id_ultimo_pago WHERE usuario_cliente.ci = ?");
        $stmt->bind_param("i", $search);
        $stmt->execute();
        $result = $stmt->get_result();

        $clientes = array();

        while ($row = $result->fetch_assoc()) {
            $clientes[] = $row;
        }

        $stmt->close();

        return $clientes;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function buscarDeportista($search)
{
    global $conexion;

    try {

        $stmt = $conexion->prepare("SELECT * FROM USUARIO JOIN DEPORTISTA ON USUARIO.ci = DEPORTISTA.ci JOIN ASOCIADO ON DEPORTISTA.ci = ASOCIADO.ci JOIN DEPORTE ON ASOCIADO.id_deporte = DEPORTE.id_deporte JOIN ESTA ON DEPORTISTA.ci = ESTA.ci JOIN EQUIPO ON ESTA.id_equipo = EQUIPO.id_equipo WHERE USUARIO.ci = ?");
        $stmt->bind_param("i", $search);
        $stmt->execute();
        $result = $stmt->get_result();

        $deportistas = array();

        while ($row = $result->fetch_assoc()) {
            $deportistas[] = $row;
        }

        $stmt->close();

        return $deportistas;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function buscarPlanEntrenamiento($search)
{
    global $conexion;

    try {

        $stmt = $conexion->prepare("SELECT 
    rutina.id_rutina, 
    rutina.nombre_rutina, 
    ejercicio.id_ejercicio, 
    ejercicio.nombre_ejercicio, 
    ejercicio.nro_rep, 
    ejercicio.nro_series, 
    ejercicio.grupo_muscular, 
    ejercicio.descripcion
FROM 
    rutina 
LEFT JOIN 
    posee ON rutina.id_rutina = posee.id_rutina 
LEFT JOIN 
    ejercicio ON posee.id_ejercicio = ejercicio.id_ejercicio 
WHERE 
    rutina.id_rutina = ?;");
        $stmt->bind_param("i", $search);
        $stmt->execute();
        $result = $stmt->get_result();

        $planes = array();

        while ($row = $result->fetch_assoc()) {
            $planes[] = $row;
        }

        $stmt->close();

        return $planes;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}

function buscarEquipo($search)
{
    global $conexion;

    try {

        $stmt = $conexion->prepare("SELECT * FROM equipo WHERE nombre_equipo = ?");
        $stmt->bind_param("s", $search);
        $stmt->execute();
        $result = $stmt->get_result();

        $equipos = array();

        while ($row = $result->fetch_assoc()) {
            $equipos[] = $row;
        }

        $stmt->close();

        return $equipos;
    } catch (Exception $e) {
        die($e->getMessage());
    }
}
