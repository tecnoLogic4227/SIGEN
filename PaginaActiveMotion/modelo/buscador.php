<?php

    include("conexion.php");

    function buscarCliente ($connection, $search) {
        $stmt = $connection->prepare("SELECT * FROM USUARIO_CLIENTE WHERE ci = ?");
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

    function buscarDeportista ($connection, $search) {
        $stmt = $connection->prepare("SELECT * FROM DEPORTISTA WHERE ci = ?");
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

    function buscarPlanEntrenamiento ($connection, $search) {
        $stmt = $connection->prepare("SELECT * FROM PLAN_ENTRENAMIENTO WHERE nombre_plan_entrenamiento LIKE ?");
        $search = "%$search%";
        $stmt->bind_param("s", $search);
        $stmt->execute();
        $result = $stmt->get_result();

        $planes = array();

        while ($row = $result->fetch_assoc()) {
            $planes[] = $row;
        }

        $stmt->close();

        return $planes;
    }

    function buscarEquipo ($connection, $search) {
        $stmt = $connection->prepare("SELECT * FROM EQUIPO WHERE id_equipo LIKE ?");
        $search = "%$search%";
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