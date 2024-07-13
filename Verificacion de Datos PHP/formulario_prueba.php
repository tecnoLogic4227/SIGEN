<?php
//Usamos la funcion "isset() para verificar que una variable este seteada con algun valor"
//En este caso, usamos isset() para verificar si el boton fue pulsado
/*if(isset($_GET["boton_get"])){*/
    //$_GET es un array asociativo, por lo cual al recivir un dato se aplica la sintaxis para poder retirar un dato de un array asociativo
    /*En este caso, del array asociativo sacamos los valores con la clave "dia", "mes" y "anio", que son los "name" que le asignamos a cada
      input en el html
    */
 /*  $dia=$_GET["dia"];
    $mes=$_GET["mes"];
    $anio=$_GET["anio"];

    echo "Datos del GET $dia, $mes, $anio" . "<br>";
    echo"Se muestran el la URL";
    //En caso contrario, usamos isset denuevo para ver si el boton del segundo formulario (el que usara el metodo POST) fue pulsado
}elseif(isset($_POST["boton_post"])){
    //Mismo procedimiento que hicimos antes pero cambiando $_GET por $_POST
    $nombre=$_POST["nombre"];
    $passwd=$_POST["passwd"];

    echo "Datos del POST $nombre, $passwd". "<br>";
    echo "No se muestran en la URL";
}*/

/*
//FORMULARIO DE REGISTRO
//verifica que el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $contrasenia = $_POST["contrasenia"];
    $val_contrasenia = $_POST["val_contrasenia"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $residencia = $_POST["residencia"];
    $fecha = $_POST["fecha"];
    $archivo = $_POST["archivo"];

    // Verificar si los campos opcion y terminos están definidos antes de acceder
    $opcion = isset($_POST["opcion"]) ? $_POST["opcion"] : "";
    $terminos = isset($_POST["terminos"]) ? $_POST["terminos"] : "";

    // Verifica si todos los datos estan completados
    if (empty($nombre) || empty($contrasenia) || empty($val_contrasenia) || empty($email) || empty($tel) || empty($residencia) || empty($fecha) || empty($archivo) || empty($opcion) || empty($terminos)) {
     //recarga el formulario hasta que esten todos los campos llenos
        header("Location: http://localhost/prueba_index.html");
    } else {

        // Validación de nombre
        //strelen sirve para pasar los datos a numeros y asi poder contarlos y compararlos con otro numero
        if (strlen($nombre) >= 10 && strlen($nombre) <= 20) {
            echo "Nombre válido.<br>";
        } elseif (strlen($nombre) < 10) {
            echo "Nombre inválido, muy corto.<br>";
        } elseif (strlen($nombre) > 20) {
            echo "Nombre inválido, muy largo.<br>";
        }

        // Validación de contraseñas
        if ($contrasenia === $val_contrasenia) {
            echo "Contraseña válida.<br>";
        } else {
            echo "Contraseñas distintas, verifique.<br>";
        }

         //array para guardar los errores que tiene al escribir la contrasenia
        $errores = [];

        //cuenta si tiene al menos 8 caracters
        if(strlen($contrasenia) < 8){
            //si tiene error lo guarda en el arrary
            $errores[] = "La contraseña tiene que tener al menos 8 caracteres";
        }

        //cuenta si tiene mas de 15 caracteres
        if(strlen($contrasenia) > 15){
            $errores[] = "La contraseña tiene que tener máximo 15 caracteres";
        }

        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos una minuscula
        if (!preg_match('/[a-z]/', $contrasenia)){
            $errores[] = "La contraseña tiene que tener al menos una letra minúscula";
        }

        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos una mayuscula
        if (!preg_match('/[A-Z]/', $contrasenia)){
            $errores[] = "La contraseña tiene que tener al menos una letra mayúscula";
        }
         
        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos un numero
        if (!preg_match('/[0-9]/', $contrasenia)){
            $errores[] = "La contraseña tiene que tener al menos un dígito";
        }

        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos un caracteer especial
        if(!preg_match('/[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?]/', $contrasenia)){
            $errores[] = "Le falta un carácter especial";
        }

        //verifica si el arrary errores tiene algo o no
        if (empty($errores)) {
            //si no tiene muestra el siguiente mensaje
            echo "La contraseña es correcta";
        } else {
            //si lo tiene recorre el array y muestra lo que tiene, lo cual serian los errores que se muestra en cada if
            foreach ($errores as $error) {
                echo $error . "<br>";
            }
        }
    }
} else {
     // Si se intenta acceder directamente al script sin POST
    echo "Acceso no permitido.";
}*/

/*//FORMULARIO DE AGENDA ADMINISTRADOR
// Verificar que se haya enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fecha_agenda = $_POST["fecha-agenda"];
    $hora = $_POST["hora"];
    
    // Verificar si los campos estan llenos
    if (empty($fecha_agenda) || empty($hora)) {
    //recarga el formulario hasta que esten todos los campos llenos
    header("Location: http://localhost/prueba_index.html");
    } else {
        // Aca conectariamos a la base de datos para verificar la cédula
        // cuando tengaos la base de datos hacemos esto:
        // $cedula = obtenerCedulaDesdeBaseDeDatos();
        
        // Mostrar resultados ya que no tenemos mucho mas que hacer
        echo "Datos recibidos:<br>";
        echo "Fecha agendado par el dia $fecha_agenda, a la hora $hora". "<br>";
    }
} else {
    // Si se intenta acceder directamente al script sin POST
    echo "Acceso no permitido.";
}*/


/*//FORMULARIO ARMAR EQUIPO SELECCIONADOR
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombreDeportista= $_POST["nombreDeportista"];
    $deporteDeportista=$_POST["deporteDeportista"];
    $clubDeportista=$_POST["clubDeportista"];
    
    if(empty($nombreDeportista) || empty($deporteDeportista) || empty($clubDeportista)){
        header("Location: http://localhost/prueba_index.html");
    }else{
    
         // Función para validar que solo contiene letras, espacios, tildes y ñ
         function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($nombreDeportista) && soloLetras($deporteDeportista) && soloLetras($clubDeportista)) {
            echo "El deportista: $nombreDeportista, fue agregado al club: $clubDeportista, perteneciente al deporte $deporteDeportista";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios)";
        }
    }
    }else{
        echo "Acceso no permitido";
    }*/ 


 /*// FORMULARIO DE CONSULTA DE CLIENTE ADIMINISTRADOR
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $cedula = $_POST["ciPD"];
        
        if (empty($cedula)) {
            header("Location: http://localhost/prueba_index.html");
        } else {

            //Aca tenemos dos opciones para verificar que son numeros y el tamanio

           /*
           //opcion 1: 
           // Función para validar que solo contiene números
            function soloNumeros($numero) {
                return preg_match('/^[0-9]+$/', $numero);
            }
            
            if (soloNumeros($cedula)) {
                if (strlen($cedula) == 8) {
                    echo "La cédula es: $cedula";
                } else {
                    echo "La cédula debe tener exactamente 8 dígitos";
                }
            } else {
                echo "Ingrese solo números";
            }*/

            //opicon 2:
            //is_numeric es una funcion que verifica que son solo numeros dentro de la variable que le demos
 /*           if (is_numeric($cedula)) {
                if (strlen($cedula) == 8) {
                    echo "La cédula es: $cedula";
                } else {
                    echo "La cédula debe tener exactamente 8 dígitos.";
                }
            } else {
                echo "Ingrese solo números en el campo de cédula.";
            }
        }
    } else {
        echo "Acceso no permitido";
    }
*/

/*//FORMULIRO DEPORTISTA SELECCIONADOR
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombreDeportista= $_POST["nombreDeportista"];
    $deporteDeportista=$_POST["deporteDeportista"];
    $clubDeportista=$_POST["clubDeportista"];
    
    if(empty($nombreDeportista) || empty($deporteDeportista) || empty($clubDeportista)){
        header("Location: http://localhost/prueba_index.html");
    }else{
    
         // Función para validar que solo contiene letras, espacios, tildes y ñ
         function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($nombreDeportista) && soloLetras($deporteDeportista) && soloLetras($clubDeportista)) {
            echo "El deportista: $nombreDeportista, esta dentro del club: $clubDeportista, perteneciente al deporte $deporteDeportista";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios)";
        }
    }
    }else{
        echo "Acceso no permitido";
    }*/

 /*   //FORMULARIO DE EQUIPO SELECCIONADOR
if($_SERVER['REQUEST_METHOD']=="POST"){
    $deporteEquipo=$_POST["deporteClub"];
    $clubEquipo=$_POST["clubEquipo"];

    if(empty($deporteEquipo) || empty($clubEquipo)){
        header("Location: http://localhost/prueba_index.html");
    }else{

         // Función para validar que solo contiene letras, espacios, tildes y ñ
         function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($deporteEquipo) && soloLetras($clubEquipo)) {
            echo "El club $clubEquipo pertence al deporte $deporteEquipo";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios)";
        }
    }else{
    echo "Acceso no permitido";
    }
}*/

/*//FORMULARIO DE LOGIN
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombreUsu = $_POST["nombre"];
    $contrasenia = $_POST["clave"];

    if (empty($nombreUsu) || empty($contrasenia)) {
        header("Location: http://localhost/prueba_index.html");
    } else {
        // Función para validar que solo contiene letras, espacios, tildes y ñ
        function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($nombreUsu)) {
            echo "Su nombre es: $nombreUsu<br>";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios)<br>";
        }

        //array para guardar los errores que tiene al escribir la contrasenia
        $errores = [];

        //cuenta si tiene al menos 8 caracters
        if(strlen($contrasenia) < 8){
            //si tiene error lo guarda en el arrary
            $errores[] = "La contraseña tiene que tener al menos 8 caracteres";
        }

        //cuenta si tiene mas de 15 caracteres
        if(strlen($contrasenia) > 15){
            $errores[] = "La contraseña tiene que tener máximo 15 caracteres";
        }

        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos una minuscula
        if (!preg_match('/[a-z]/', $contrasenia)){
            $errores[] = "La contraseña tiene que tener al menos una letra minúscula";
        }

        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos una mayuscula
        if (!preg_match('/[A-Z]/', $contrasenia)){
            $errores[] = "La contraseña tiene que tener al menos una letra mayúscula";
        }
         
        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos un numero
        if (!preg_match('/[0-9]/', $contrasenia)){
            $errores[] = "La contraseña tiene que tener al menos un dígito";
        }

        //en este if negamos el preg_mach el cual es una funcion que nos permite verificar si la contrasenia tiene al menos un caracteer especial
        if(!preg_match('/[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?]/', $contrasenia)){
            $errores[] = "Le falta un carácter especial";
        }

        //verifica si el arrary errores tiene algo o no
        if (empty($errores)) {
            //si no tiene muestra el siguiente mensaje
            echo "La contraseña es correcta";
        } else {
            //si lo tiene recorre el array y muestra lo que tiene, lo cual serian los errores que se muestra en cada if
            foreach ($errores as $error) {
                echo $error . "<br>";
            }
        }
    }
} else {
    echo "Acceso no permitido";
} */ 

/* //FUNCION DE ASIGNAR A CLIENTE ENTRENAMIENTO ENTRENADOR
if($_SERVER['REQUEST_METHOD']== "POST"){
    $cedula=$_POST["CI"];
    $actividad=$_POST["actividadCliente"];
    $idRutina=$_POST["ID_Rutina"];

    if(empty($cedula) || empty($actividad) || empty($idRutina)){
        header("Location: http://localhost/prueba_index.html");
    }else{

        //is_numeric es una funcion que verifica que son solo numeros dentro de la variable que le demos
              if (is_numeric($cedula)) {
                if (strlen($cedula) == 8) {
                    echo "La cédula es: $cedula". "<br>";
                } else {
                    echo "La cédula debe tener exactamente 8 dígitos.". "<br>";
                }
            } else {
                echo "Ingrese solo números en el campo de cédula.". "<br>";
            }

        // Función para validar que solo contiene letras, espacios, tildes y ñ
         function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($actividad)) {
            echo "La actividad a la que pertenece la cedula $cedula es $actividad". "<br>";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios)". "<br>";
        }

        if (is_numeric($idRutina)) {
            if (strlen($idRutina) == 8) {
                echo "El id de la rutina es: $idRutina";
            } else {
                echo "El id debe tener exactamente 8 dígitos.". "<br>";
            }
        } else {
            echo "Ingrese solo números en el campo de cédula.". "<br>";
        }

    }
}*/

/*//FUNCION DE ASIGNACION DE ENTRENAMIENTO ENTRENADOR
if($_SERVER['REQUEST_METHOD']== "POST"){
    $diaEntrenamiento=$_POST["diaEntrenamiento"];
    $musculoEntrenamiento=$_POST["musculoEntrenamiento"];
    $descEntrenamiento=$_POST["descEntrenamiento"];
    $seriesEntrenamiento=$_POST["seriesEntrenamiento"];
    $repEntrenamiento=$_POST["repEntrenamiento"];

    if(empty($diaEntrenamiento) || empty($musculoEntrenamiento) || empty($descEntrenamiento) || empty($seriesEntrenamiento) || empty($repEntrenamiento)){
        header("Location: http://localhost/prueba_index.html");
    }else{

        //is_numeric es una funcion que verifica que son solo numeros dentro de la variable que le demos
              if (is_numeric($diaEntrenamiento) || is_numeric($seriesEntrenamiento) || is_numeric($repEntrenamiento) ) {
                    echo "El dia de entrenamiento es el $diaEntrenamiento". "<br>";
                    echo "La cantidad de series que tiene el entrenamiento es $seriesEntrenamiento". "<br>";
                    echo "La cantidad de repeticiones que tiene el entrenamiento es $repEntrenamiento". "<br>";
                }else {
                echo "Ingrese solo números en el campo de dia, series y repeticiones del entrenamiento.". "<br>";
            }

        // Función para validar que solo contiene letras, espacios, tildes y ñ
         function soloLetras($texto) {
            return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
        }
    
        //llama la funcion mas la variable que quiere verificar 
        if (soloLetras($musculoEntrenamiento) || soloLetras($descEntrenamiento)) {
            echo "El musculo al que entrena este entrenamieno es $musculoEntrenamiento". "<br>";
            echo "La descripcion del entrenamiento es $descEntrenamiento". "<br>";
        } else {
            echo "Debe poner solo letras (se permiten tildes, ñ y espacios) en los campos de musculo y descripcion". "<br>";
        }

    }
} */

/*//FUNCION DE ASIGNACION DE ENTRENAMIENTO ENTRENADOR
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombreCombo = $_POST["nombreCombo"];
    $ID_Combo = $_POST["ID_Combo"];
    $ID_Plan = $_POST["ID_Plan"];
    $seriesCombo = $_POST["seriesCombo"];
    $repCombo = $_POST["repCombo"];
    $descCombo = $_POST["descCombo"];
    $ejercicioCombo = $_POST["ejercicioCombo"];
    $musculoCombo = $_POST["musculoCombo"];

    $errores = [];

    if (empty($nombreCombo) || empty($ID_Combo) || empty($ID_Plan) || empty($seriesCombo) || empty($repCombo) || empty($descCombo) || empty($ejercicioCombo) || empty($musculoCombo)) {
        header("Location: http://localhost/prueba_index.html");
    }

    if (!is_numeric($ID_Combo) || !is_numeric($ID_Plan) || !is_numeric($seriesCombo) || !is_numeric($repCombo)) {
        $errores[] = "Los campos ID Combo, ID Plan, Series y Repeticiones deben ser numéricos.";
    }

    if (strlen($ID_Combo) != 8 || strlen($ID_Plan) != 8) {
        $errores[] = "Los campos ID Combo e ID Plan deben tener exactamente 8 números.";
    }

    function soloLetras($texto) {
        return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
    }

    
    if (!soloLetras($nombreCombo) || !soloLetras($descCombo) || !soloLetras($musculoCombo) || !soloLetras($ejercicioCombo)) {
        $errores[] = "Los campos Nombre, Ejercicio, Músculo y Descripción deben contener solo letras, espacios, tildes y ñ.";
    }

    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
        echo "El nombre del combo es: $nombreCombo<br>";
        echo "El ID del combo es: $ID_Combo<br>";
        echo "El ID del plan es: $ID_Plan<br>";
        echo "El ejercicio de este combo es: $ejercicioCombo<br>";
        echo "El músculo al que entrena este combo es: $musculoCombo<br>";
        echo "La cantidad de series que tiene el combo es: $seriesCombo<br>";
        echo "La cantidad de repeticiones que tiene el combo es: $repCombo<br>";
        echo "La descripción del entrenamiento es: $descCombo<br>";
        
    }
} else {
    echo "Acceso no permitido";
} */


/*//FUNCION PARA ELIMINAR COMBOS ENTRENADOM
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombre = $_POST["nombre"];
    $id = $_POST["id"];
    $seccion = $_POST["seccion"];

    $errores = [];

    if (empty($nombre) || empty($id) || empty($seccion)) {
        $errores[] = "Todos los campos son obligatorios.";
    }

    if (!is_numeric($id)) {
        $errores[] = "El campo ID debe ser numérico.";
    }

    if (strlen($id)==8) {
        $errores[] = "El campo ID debe tener exactamente 8 numeros.";
    }

    function soloLetras($texto) {
        return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
    }

    if (!soloLetras($nombre) || !soloLetras($seccion)) {
        $errores[] = "Los campos Nombre y Sección deben contener solo letras, espacios, tildes y ñ.";
    }

    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
        echo "El nombre del combo  es: $nombre<br>";
        echo "El ID del combo es: $id<br>";
        echo "La sección a la que pertenece el combo es: $seccion<br>";
    }
} else {
    echo "Acceso no permitido";
} */


/*//FUNCION DETALLES CLIENTE ENTRENADOR
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $cedula = $_POST["ci"];
    $deporte = $_POST["deporte"];

    $errores = [];

    // Validar que todos los campos estén llenos
    if (empty($cedula) || empty($deporte)) {
        $errores[] = "Todos los campos son obligatorios.";
    }

    // Validar que la cédula sea numérica y tenga exactamente 8 dígitos
    if (!is_numeric($cedula) || strlen($cedula) != 8) {
        $errores[] = "La cédula debe tener de exactamente 8 dígitos.";
    }

    // Función para validar que un campo contenga solo letras y espacios
    function soloLetras($texto) {
        return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
    }

    // Validar que el deporte contenga solo letras
    if (!soloLetras($deporte)) {
        $errores[] = "El campo Deporte debe contener solo letras, espacios, tildes y ñ.";
    }

    // Mostrar errores o procesar datos
    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
        echo "La cédula es: $cedula<br>";
        echo "El deporte al que pertenece la cedula $cedula es: $deporte<br>";
        // Aquí puedes agregar el código para procesar los datos validados
    }
} else {
    echo "Acceso no permitido";
} */

/*//FUNCION PARA ELIMINAR PLAN ENTRENADOM
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombre = $_POST["nombre"];
    $id = $_POST["id"];
    $seccion = $_POST["seccion"];

    $errores = [];

    if (empty($nombre) || empty($id) || empty($seccion)) {
        $errores[] = "Todos los campos son obligatorios.";
    }

    if (!is_numeric($id)) {
        $errores[] = "El campo ID debe ser numérico.";
    }

    if (strlen($id)==8) {
        $errores[] = "El campo ID debe tener exactamente 8 numeros.";
    }

    function soloLetras($texto) {
        return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
    }

    if (!soloLetras($nombre) || !soloLetras($seccion)) {
        $errores[] = "Los campos Nombre y Sección deben contener solo letras, espacios, tildes y ñ.";
    }

    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
        echo "El nombre del combo  es: $nombre<br>";
        echo "El ID del combo es: $id<br>";
        echo "La sección a la que pertenece el combo es: $seccion<br>";
    }
} else {
    echo "Acceso no permitido";
} */

/*//FORMULARIO DE INGRESAR DEPORTE ENTRENADOR
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombre = $_POST["nombre"];
    $id = $_POST["id"];
    $ejercicio = $_POST["ejercicio"];
    $musculo = $_POST["musculo"];
    $series = $_POST["series"];
    $repeticiones = $_POST["repeticiones"];
    $descripcion = $_POST["descripcion"];

    $errores = [];

    if (empty($nombre) || empty($id) || empty($ejercicio) || empty($musculo) || empty($series) || empty($repeticiones) || empty($descripcion)) {
        $errores[] = "Todos los campos son obligatorios.";
    }

    if (!is_numeric($id)) {
        $errores[] = "El campo ID debe ser numérico.";
    }

    if (strlen($id)==8) {
        $errores[] = "El campo ID debe tener exactamente 8 numeros.";
    }

    if (!is_numeric($series) || !is_numeric($repeticiones)) {
        $errores[] = "Los campos Series y Repeticiones deben ser numéricos.";
    }

    function soloLetras($texto) {
        return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
    }

    if (soloLetras($nombre) || soloLetras($ejercicio) || soloLetras($musculo) || soloLetras($descripcion)) {
        echo "Nombre: $nombre<br>";
        echo "Ejercicio: $ejercicio<br>";
        echo "Músculo: $musculo<br>";
        echo "Descripción: $descripcion<br>";
    }else{
        $errores[] = "Los campos Nombre, Ejercicio y Músculo deben contener solo letras, espacios, tildes y ñ.";
    }

    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
        echo "ID: $id<br>";
        echo "Series: $series<br>";
        echo "Repeticiones: $repeticiones<br>";
        
    }
} else {
    echo "Acceso no permitido";
} */


/*//FORMULARIO DE INGRESAR FISIOTERAPIA ENTRENADOR
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombre = $_POST["nombre"];
    $id = $_POST["id"];
    $ejercicio = $_POST["ejercicio"];
    $musculo = $_POST["musculo"];
    $series = $_POST["series"];
    $repeticiones = $_POST["repeticiones"];
    $descripcion = $_POST["descripcion"];

    $errores = [];

    if (empty($nombre) || empty($id) || empty($ejercicio) || empty($musculo) || empty($series) || empty($repeticiones) || empty($descripcion)) {
        $errores[] = "Todos los campos son obligatorios.";
    }

    if (!is_numeric($id)) {
        $errores[] = "El campo ID debe ser numérico.";
    }

    if (strlen($id)==8) {
        $errores[] = "El campo ID debe tener exactamente 8 numeros.";
    }

    if (!is_numeric($series) || !is_numeric($repeticiones)) {
        $errores[] = "Los campos Series y Repeticiones deben ser numéricos.";
    }

    function soloLetras($texto) {
        return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
    }

    if (soloLetras($nombre) || soloLetras($ejercicio) || soloLetras($musculo) || soloLetras($descripcion)) {
        echo "Nombre: $nombre<br>";
        echo "Ejercicio: $ejercicio<br>";
        echo "Músculo: $musculo<br>";
        echo "Descripción: $descripcion<br>";
    }else{
        $errores[] = "Los campos Nombre, Ejercicio y Músculo deben contener solo letras, espacios, tildes y ñ.";
    }

    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
        echo "ID: $id<br>";
        echo "Series: $series<br>";
        echo "Repeticiones: $repeticiones<br>";
        
    }
} else {
    echo "Acceso no permitido";
}*/


/*//FORMULARIO DE MODIFICAR COMBO ENTRENADOR
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nombre = $_POST["nombre"];
    $id = $_POST["id"];
    $seccion = $_POST["seccion"];

    $errores = [];

    if (empty($nombre) || empty($id) || empty($seccion)) {
        $errores[] = "Todos los campos son obligatorios.";
    }

    if (!is_numeric($id)) {
        $errores[] = "El campo ID debe ser numérico.";
    }

    if (strlen($id)==8) {
        $errores[] = "El campo ID debe tener exactamente 8 numeros.";
    }

    function soloLetras($texto) {
        return preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', $texto);
    }

    if (!soloLetras($nombre) || !soloLetras($seccion)) {
        $errores[] = "Los campos Nombre y Sección deben contener solo letras, espacios, tildes y ñ.";
    }

    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
    } else {
        echo "El nombre del combo  es: $nombre<br>";
        echo "El ID del combo es: $id<br>";
        echo "La sección a la que pertenece el combo es: $seccion<br>";
    }
} else {
    echo "Acceso no permitido";
} */

?>
