CREATE database activemotion;
USE activemotion;

CREATE TABLE USUARIO (
    ci INT PRIMARY KEY,
    nombre VARCHAR (255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    email VARCHAR(255),
    fecha_nac DATE,
    rol ENUM(
        'cliente',
        'entrenador',
        'administrativo',
        'seleccionador',
        'avanzado',
        'administradorti'
    ),
    telefono INT
);

CREATE TABLE USUARIO_AGENDA ( 
    ci INT,
    fecha DATE,
    hora TIME,
    turno_agenda ENUM('matutino', 'vespertino'),
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO(ci)
);

CREATE TABLE USUARIO_CLIENTE (
    ci INT,
    actividad ENUM(
        "deportista",
        "libre",
        "paciente",
    ),
    estado ENUM(
        'principiante',
        'bajo',
        'medio',
        'alto',
        'para seleccionar',
        'inicio',
        'sin evolucion',
        'en evolucion',
        'satisfactorio'
    ),
    cumplimiento_agenda INT,
    resistencia_anaeróbica INT,
    fuerza_muscular INT,
    resistencia_muscular INT,
	flexibilidad INT,
	resistencia_monotonía INT,
	resiliencia INT,
    estado_actividad BIT(1),
    tipo_plan ENUM('Basico','Premium','Pack Verano','Avanzado','Elite','Verano'),
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO(ci)
);

CREATE TABLE USUARIO_ENTRENADOR (
    ci INT,
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO(ci)
);

CREATE TABLE `LOGIN` (
    ci INT,
    contrasenia VARCHAR(255) NOT NULL,
    PRIMARY KEY (ci)
);

CREATE TABLE PACIENTE (
    ci INT,
    motivo VARCHAR(255),
    lesion VARCHAR(255),
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO_CLIENTE(ci)
);

CREATE TABLE DEPORTISTA (
    ci INT,
    posicion VARCHAR(255),
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO_CLIENTE(ci)
);

CREATE TABLE LIBRE (
    ci INT,
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO_CLIENTE(ci)
);

CREATE TABLE ULTIMO_PAGO (
    id_ultimo_pago INT AUTO_INCREMENT,
    hora TIME,
    fecha DATE,
    valor DECIMAL(10, 2),
    PRIMARY KEY (id_ultimo_pago)
);

CREATE TABLE RUTINA (
    id_rutina INT AUTO_INCREMENT,
    nombre_rutina VARCHAR(100),
    tipo_rutina ENUM(
        "fisioterapia",
        "deporte",
    ),
    PRIMARY KEY (id_rutina)
);

CREATE TABLE RUT_FISIOTERAPIA (
    id_rutina INT,
    nombre_rutina VARCHAR(100),
    PRIMARY KEY (id_rutina),
    FOREIGN KEY (id_rutina) REFERENCES RUTINA(id_rutina)
);

CREATE TABLE RUT_DEPORTE (
    id_rutina INT,
    nombre_rutina VARCHAR(100),
    PRIMARY KEY (id_rutina),
    FOREIGN KEY (id_rutina) REFERENCES RUTINA(id_rutina)
);

CREATE TABLE EJERCICIO (
    id_ejercicio INT AUTO_INCREMENT,
    nombre_ejercicio VARCHAR(255),
    nro_rep INT,
    nro_series INT,
    grupo_muscular VARCHAR(255),
    descripcion TEXT,
    PRIMARY KEY (id_ejercicio)
);

CREATE TABLE FISIOTERAPIA (
    id_fisioterapia INT AUTO_INCREMENT,
    nombre_fisioterapia VARCHAR(255),
    tipo_fisioterapia VARCHAR(250),
    descripcion TEXT,
    PRIMARY KEY (id_fisioterapia)
);

CREATE TABLE DEPORTE (
    nombre_deporte VARCHAR(255),
    descripcion TEXT,
    PRIMARY KEY (nombre_deporte)
);

CREATE TABLE DEPORTISTA_DEPORTE(
    ci INT,
    nombre_deporte VARCHAR(255),
    PRIMARY KEY (ci, nombre_deporte),
    FOREIGN KEY (ci) REFERENCES DEPORTISTA(ci),
    FOREIGN KEY (nombre_deporte) REFERENCES DEPORTE(nombre_deporte)
);

CREATE TABLE EQUIPO (
    id_equipo INT AUTO_INCREMENT,
    nombre_equipo VARCHAR(255),
    cantidad INT (10),
    PRIMARY KEY (id_equipo)
);

CREATE TABLE INSTITUCION (
    id_institucion INT AUTO_INCREMENT,
    nombre_institucion VARCHAR(255),
    direccion VARCHAR(200),
    telefono INT,
    PRIMARY KEY (id_institucion)
);

CREATE TABLE CONCURRE (
    ci INT,
    id_institucion INT,
    PRIMARY KEY (ci, id_institucion),
    FOREIGN KEY (ci) REFERENCES USUARIO(ci),
    FOREIGN KEY (id_institucion) REFERENCES INSTITUCION(id_institucion)
);

CREATE TABLE ASISTE (
    ci INT,
    id_rutina INT,
    nivel VARCHAR(255),
    fecha_inicio DATE,
    fecha_termino DATE,
    PRIMARY KEY (ci, id_rutina),
    FOREIGN KEY (ci) REFERENCES PACIENTE(ci),
    FOREIGN KEY (id_rutina) REFERENCES RUT_FISIOTERAPIA(id_rutina)
);

CREATE TABLE HACE(
    ci INT,
    id_ejercicio INT,
    PRIMARY KEY (ci, id_ejercicio),
    FOREIGN KEY (ci) REFERENCES LIBRE(ci),
    FOREIGN KEY (id_ejercicio) REFERENCES EJERCICIO(id_ejercicio)
);

CREATE TABLE EFECTUA (
    ci INT,
    id_ultimo_pago INT,
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO_CLIENTE(ci),
    FOREIGN KEY (id_ultimo_pago) REFERENCES ULTIMO_PAGO(id_ultimo_pago)
);

CREATE TABLE REALIZA (
    ci INT,
    id_rutina INT,
    nivel VARCHAR(255),
    fecha_inicio DATE,
    fecha_termino DATE,
    PRIMARY KEY (id_rutina),
    FOREIGN KEY (id_rutina) REFERENCES RUT_DEPORTE(id_rutina),
    FOREIGN KEY (ci) REFERENCES DEPORTISTA(ci)
);

CREATE TABLE ESTA (
    ci INT,
    id_equipo INT,
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES DEPORTISTA(CI),
    FOREIGN KEY (id_equipo) REFERENCES EQUIPO(id_equipo)
);

CREATE TABLE CONTIENE (
    id_equipo INT,
    nombre_deporte VARCHAR(255),
    PRIMARY KEY (id_equipo),
    FOREIGN KEY (id_equipo) REFERENCES EQUIPO(id_equipo),
    FOREIGN KEY (nombre_deporte) REFERENCES DEPORTE(nombre_deporte)
);

CREATE TABLE INCLUYE (
    ci INT,
    id_rutina INT,
    id_fisioterapia INT,
    PRIMARY KEY (ci, id_rutina),
    FOREIGN KEY (ci) REFERENCES PACIENTE(ci),
    FOREIGN KEY (id_fisioterapia) REFERENCES FISIOTERAPIA(id_fisioterapia),
    FOREIGN KEY (id_rutina) REFERENCES RUT_FISIOTERAPIA(id_rutina)
);

CREATE TABLE POSEE (
    id_rutina INT,
    id_ejercicio INT,
    PRIMARY KEY (id_rutina, id_ejercicio),
    FOREIGN KEY (id_rutina) REFERENCES RUTINA(id_rutina),
    FOREIGN KEY (id_ejercicio) REFERENCES EJERCICIO(id_ejercicio)
);

/* Creacion de los usuarios */
CREATE USER IF NOT EXISTS 'Usuario'@'localhost' IDENTIFIED BY 'User3456';
CREATE USER IF NOT EXISTS 'Usuario_cliente'@'localhost' IDENTIFIED BY 'ClientUser3080';
CREATE USER IF NOT EXISTS 'Entrenador'@'localhost' IDENTIFIED BY 'Entrenador2344';
CREATE USER IF NOT EXISTS 'Administrativo'@'localhost' IDENTIFIED BY 'AdminPass123';
CREATE USER IF NOT EXISTS 'Avanzado'@'localhost' IDENTIFIED BY 'AvanzadoPass123';
CREATE USER IF NOT EXISTS 'Seleccionador'@'localhost' IDENTIFIED BY 'SelecPass123';
CREATE USER IF NOT EXISTS 'Administrador_TI'@'localhost' IDENTIFIED BY 'AdminTIPass123';

/* Permisos de Usuario y Usuario Cliente */
GRANT SELECT, INSERT, UPDATE, DELETE ON USUARIO TO Usuario;
GRANT SELECT ON RUTINA TO Usuario_cliente; 
GRANT SELECT ON RUT_DEPORTE TO Usuario_cliente; 
GRANT SELECT ON RUT_FISIOTERAPIA TO Usuario_cliente; 
GRANT SELECT ON EJERCICIO TO Usuario_cliente;

/* Vista y permisos para evolución de usuario cliente */
CREATE VIEW vista_usuario_cliente_evolucion AS 
SELECT estado FROM USUARIO_CLIENTE;
GRANT SELECT ON vista_usuario_cliente_evolucion TO Usuario_cliente;

/* Permisos de Entrenador */
GRANT SELECT ON vista_usuario_cliente_evolucion TO Entrenador;
GRANT SELECT ON DEPORTISTA_DEPORTE TO Entrenador;
GRANT SELECT ON ASISTE TO Entrenador;

CREATE VIEW vista_asiste_rutina AS 
SELECT id_rutina FROM ASISTE;
GRANT SELECT ON vista_asiste_rutina TO Entrenador;

GRANT SELECT, INSERT ON REALIZA TO Entrenador;
GRANT INSERT, UPDATE, DELETE ON RUTINA TO Entrenador;
GRANT INSERT, UPDATE, DELETE ON RUT_DEPORTE TO Entrenador; 
GRANT INSERT, UPDATE, DELETE ON RUT_FISIOTERAPIA TO Entrenador;

/* Permisos de Administrativo */
GRANT UPDATE, DELETE ON USUARIO_CLIENTE TO Administrativo;

/* Permisos de Avanzado */
GRANT INSERT ON USUARIO TO Avanzado;
GRANT INSERT ON USUARIO_CLIENTE TO Avanzado;
GRANT INSERT ON EJERCICIO TO Avanzado;
GRANT INSERT ON DEPORTE TO Avanzado;

/* Permisos de Seleccionador */
GRANT SELECT ON USUARIO_CLIENTE TO Seleccionador;
GRANT SELECT ON EQUIPO TO Seleccionador;
GRANT INSERT ON EQUIPO TO Seleccionador;

/* Permisos de Administrador TI */
GRANT SELECT ON USUARIO_CLIENTE TO Administrador_TI;
GRANT INSERT ON INSTITUCION TO Administrador_TI;

DELIMITER //

CREATE PROCEDURE InsertarEntrenador(
    IN ci INT, 
    IN nombre VARCHAR(255), 
    IN apellido VARCHAR(255), 
    IN direccion VARCHAR(255), 
    IN email VARCHAR(255), 
    IN fecha_nac DATE
)
BEGIN
    INSERT INTO USUARIO (ci, nombre, apellido, direccion, email, fecha_nac, rol)
    VALUES (ci, nombre, apellido, direccion, email, fecha_nac, 'entrenador');
END//

DELIMITER ;


GRANT EXECUTE ON PROCEDURE InsertarEntrenador TO Administrador_TI;


/*CONSUTLATS*/
/*1- MOSTRAR TODOS LOS EJERCICIOS ASIGNADOS A UNA RUTINA DADA*/
SELECT e.*
FROM EJERCICIO e
JOIN POSEE p ON e.id_ejercicio = p.id_ejercicio
WHERE p.id_rutina = r.id_rutina;

/*2- REALIZAR UN RANKING DE LAS RUTINAS MAS ASIGNADAS*/
SELECT r.id_rutina, COUNT(*) as veces_asignada
FROM RUTINA r
LEFT JOIN ASISTE a ON r.id_rutina = a.id_rutina
LEFT JOIN REALIZA re ON r.id_rutina = re.id_rutina
GROUP BY r.id_rutina
ORDER BY veces_asignada DESC;

/*3-DADO UN DEPORTISTAS MOSTRAR TODAS LAS RUTINAS ASIGNADAS*/
SELECT r.*
FROM RUTINA r
JOIN REALIZA re ON r.id_rutina = re.id_rutina
WHERE re.ci = deportista.ci;

/*4-DADO UN GRUPO MUSCULAR, MOSTRAR TODAS LAS RUTINAS QUE LO
AFECTAN*/
SELECT DISTINCT r.*
FROM RUTINA r
JOIN POSEE p ON r.id_rutina = p.id_rutina
JOIN EJERCICIO e ON p.id_ejercicio = e.id_ejercicio
WHERE e.grupo_muscular = ?;

/*5-DADO UN DEPORTE, MOSTRAR TODAS LAS RUTINAS ASOCIADAS A ESA
DISCIPLINA*/
SELECT r.*, de.nombre_deporte
FROM RUTINA r, DEPORTE de
JOIN RUT_DEPORTE rd ON r.id_rutina = rd.id_rutina
JOIN REALIZA re ON r.id_rutina = re.id_rutina
JOIN DEPORTISTA d ON re.ci = d.ci
JOIN DEPORTISTA_DEPORTE dd ON d.ci = dd.ci
WHERE dd.nombre_deporte = de.nombre_deporte;

/*6-MOSTRAR NOMBRE Y EDAD DE LOS USUARIOS DE FISIOTERAPIA*/
SELECT u.nombre, u.apellido, TIMESTAMPDIFF(YEAR, u.fecha_nac, CURDATE()) as edad
FROM USUARIO u
JOIN CLIENTE u ON u.ci = c.ci
JOIN PACIENTE p ON c.ci = p.ci
JOIN ASISTE a ON p.ci = a.ci;

/*7-DADO UN DEPORTE, MOSTRAR TODOS LOS DEPORTISTAS QUE LO ENTRENAN*/
SELECT u.ci, u.nombre, u.apellido, de.nombre_deporte
FROM USUARIO u, DEPORTE de
JOIN CLIENTE c ON u.ci = c.ci
JOIN DEPORTISTA d ON c.ci = d.ci
JOIN DEPORTISTA_DEPORTE dd ON d.ci = dd.ci
WHERE dd.nombre_deporte = de.nombre_deporte;

/*8-DADO UN DEPORTISTA MOSTRAR LOS EJERCICIOS ASIGNADOS, LA RUTINA A LA
QUE PERTENECEN Y SU FECHA DE REALIZACIÓN*/
SELECT e.*, r.id_rutina, re.fecha_inicio, re.fecha_termino
FROM EJERCICIO e
JOIN POSEE p ON e.id_ejercicio = p.id_ejercicio
JOIN RUTINA r ON p.id_rutina = r.id_rutina
JOIN RUT_DEPORTE rd ON r.id_rutina = ed.id_rutina
JOIN REALIZA re ON rd.id_rutina = re.id_rutina
WHERE re.ci = deportista.ci;

/*9-MOSTRAR UN RANKING DE LOS EJERCICIOS ASOCIADOS A LA
CATEGORÍA “LIBRE”*/
SELECT e.*, r.id_rutina, COUNT(*) as veces_asignado
FROM EJERCICIO e
JOIN HACE h ON e.id_ejercicio = h.id_ejercicio
JOIN LIBRE l ON h.ci = l.ci
GROUP BY e.id_ejercicio
ORDER BY veces_asignado DESC;

/*10-DADO UN PACIENTE, MOSTRAR TODOS LOS EJECICIOS DESTINADOS A LA
RECUPERACIÓN DE LESIONES.*/
SELECT e.*
FROM EJERCICIO e
JOIN POSEE p ON e.id_ejercicio = p.id_ejercicio
JOIN RUTINA r ON p.id_rutina = r.id_rutina
JOIN RUT_FISIOTERAPIA rf ON r.id_rutina = rf.id_rutina
JOIN ASISTE a ON rf.id_rutina = a.id_rutina
JOIN PACIENTE pa ON a.ci = pa.ci
WHERE p.ci= ?;
