<?php

require_once("conexion.php");

function buscarCliente($search)
{
    global $connection;

    $stmt = $connection->prepare("SELECT * FROM usuario_cliente JOIN usuario ON usuario.ci = usuario_cliente.ci JOIN usuario_telefono ON usuario.ci = usuario_telefono.ci JOIN efectua ON usuario_telefono.ci = efectua.ci JOIN ultimo_pago ON efectua.id_ultimo_pago = ultimo_pago.id_ultimo_pago WHERE usuario_cliente.ci = ?");
    $stmt->bind_param("i", $search);
    $stmt->execute();
    $result = $stmt->get_result();

    $clientes = array();

    while ($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }

    $stmt->close();

    return $clientes;
}

function buscarDeportista($search)
{
    global $connection;

    $stmt = $connection->prepare("SELECT * FROM USUARIO JOIN DEPORTISTA ON USUARIO.ci = DEPORTISTA.ci JOIN ASOCIADO ON DEPORTISTA.ci = ASOCIADO.ci JOIN DEPORTE ON ASOCIADO.id_deporte = DEPORTE.id_deporte JOIN ESTA ON DEPORTISTA.ci = ESTA.ci JOIN EQUIPO ON ESTA.id_equipo = EQUIPO.id_equipo WHERE USUARIO.ci = ?");
    $stmt->bind_param("i", $search);
    $stmt->execute();
    $result = $stmt->get_result();

    $deportistas = array();

    while ($row = $result->fetch_assoc()) {
        $deportistas[] = $row;
    }

    $stmt->close();

    return $deportistas;
}

function buscarPlanEntrenamiento($search)
{
    global $connection;

    $stmt = $connection->prepare("SELECT * FROM plan_entrenamiento JOIN rutina ON rutina.id_rutina = plan_entrenamiento.id_rutina WHERE id_plan_entrenamiento = ?");
    $stmt->bind_param("i", $search);
    $stmt->execute();
    $result = $stmt->get_result();

    $planes = array();

    while ($row = $result->fetch_assoc()) {
        $planes[] = $row;
    }

    $stmt->close();

    return $planes;
}

function buscarEquipo($search)
{
    global $connection;

    $stmt = $connection->prepare("SELECT * FROM equipo WHERE id_equipo = ?");
    $stmt->bind_param("s", $search);
    $stmt->execute();
    $result = $stmt->get_result();

    $equipos = array();

    while ($row = $result->fetch_assoc()) {
        $equipos[] = $row;
    }

    $stmt->close();

    return $equipos;
}

?>