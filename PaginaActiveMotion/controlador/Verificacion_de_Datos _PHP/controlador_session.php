<?php

function verificarSesion($rol){
    session_start();
    if (!isset($_SESSION['ci'])) {
        header('location: ../../vista/html/general/login.html');
    } else {
       
        if ($_SESSION['rol'] == 'usuario_administrativo') {
            if ($rol == 'usuario_administrativo') {
                return;
            } else {
                header('location: ../../vista/html/administrador/indexAdministrativo.html');
            }
        } else if ($_SESSION['rol'] == 'usuario_avanzado') {
            if ($rol == 'usuario_avanzado') {
                return;
            } else {
                header('location: ../../vista/html/avanzado/indexAvanzado.html');
            }
        } else if ($_SESSION['rol'] == 'usuario_cliente') {
            if ($rol == 'usuario_cliente') {
                return;
            } else {
                header('location: ../../vista/html/cliente/indexUsuario.html');
            }

        }else if ($_SESSION['rol'] == 'usuario_entrenador') {
            if ($rol == 'usuario_entrenador') {
                return;
            } else {
                header('location: ../../vista/html/entrenador/inicioEntrenador.html');
            }

        }else if ($_SESSION['rol'] == 'usuario_seleccionador') {
            if ($rol == 'usuario_seleccionador') {
                return;
            } else {
                header('location: ../../vista/html/seleccionador/indexSeleccionador.html');
            }

        }else if ($_SESSION['rol'] == 'usuario_superusuario') {
            if ($rol == 'usuario_superusuario') {
                return;
            } else {
                header('location: ../../vista/html/superUsuario/inicioSuperUsuario.html');
            }
            
        }
    }
}

?>

