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
    )
);

CREATE TABLE USUARIO_TELEFONO (
    ci INT,
    telefono VARCHAR(20),
    PRIMARY KEY (ci, telefono),
    FOREIGN KEY (ci) REFERENCES USUARIO(ci)
);
CREATE TABLE USUARIO_CLIENTE (
    ci INT,
    actividad VARCHAR(255),
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
    calificacion INT,
    estado_actividad BIT(1),
    fecha DATE,
    hora TIME,
    turno_agenda ENUM('matutino', 'vespertino'),
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO(ci)
);
CREATE TABLE USUARIO_ENTRENADOR (
    ci INT,
    PRIMARY KEY (ci),
    FOREIGN KEY (ci) REFERENCES USUARIO(ci)
);
CREATE TABLE `LOGIN` (
    id_login INT AUTO_INCREMENT,
    contrasenia VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_login)
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
    PRIMARY KEY (id_rutina)
);
CREATE TABLE RUT_FISIOTERAPIA (
    id_rutina INT,
    PRIMARY KEY (id_rutina),
    FOREIGN KEY (id_rutina) REFERENCES RUTINA(id_rutina)
);
CREATE TABLE RUT_DEPORTE (
    id_rutina INT,
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
    PRIMARY KEY (id_institucion)
);
CREATE TABLE INSTITUCION_TELEFONO (
    id_institucion INT,
    telefono VARCHAR(20),
    PRIMARY KEY (id_institucion, telefono),
    FOREIGN KEY (id_institucion) REFERENCES INSTITUCION(id_institucion)
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
CREATE USER 'Usuario'@'localhost' IDENTIFIED BY 'User3456';
CREATE USER 'Usuario_cliente'@'localhost' IDENTIFIED BY 'ClientUser3080';
CREATE USER 'Entrenador'@'localhost' IDENTIFIED BY 'Entrenador2344';
CREATE USER 'Administrativo'@'localhost' IDENTIFIED BY 'AdminPass123';
CREATE USER 'Avanzado'@'localhost' IDENTIFIED BY 'AvanzadoPass123';
CREATE USER 'Seleccionador'@'localhost' IDENTIFIED BY 'SelecPass123';
CREATE USER 'Administrador_TI'@'localhost' IDENTIFIED BY 'AdminTIPass123';

/* Permisos de Usuario y Usuario Cliente */
GRANT SELECT, INSERT, UPDATE, DELETE ON USUARIO TO Usuario;
GRANT SELECT ON RUTINA, RUT_DEPORTE, RUT_FISIOTERAPIA, EJERCICIO TO Usuario_cliente;

/* Vista y permisos para evolución de usuario cliente */
CREATE VIEW vista_usuario_cliente_evolucion AS 
SELECT estado FROM USUARIO_CLIENTE;
GRANT SELECT ON vista_usuario_cliente_evolucion TO Usuario_cliente;

/* Vista y permisos para agenda de usuario cliente */
CREATE VIEW vista_usuario_cliente_agenda AS 
SELECT fecha, hora, turno_agenda FROM USUARIO_CLIENTE;
GRANT SELECT ON vista_usuario_cliente_agenda TO Usuario_cliente, Entrenador;

/* Permisos de Entrenador */
GRANT SELECT ON vista_usuario_cliente_evolucion TO Entrenador;
GRANT SELECT ON DEPORTISTA_DEPORTE TO Entrenador;
GRANT SELECT ON ASISTE TO Entrenador;

CREATE VIEW vista_asiste_rutina AS 
SELECT id_rutina FROM ASISTE;
GRANT SELECT ON vista_asiste_rutina TO Entrenador;

GRANT SELECT, INSERT ON REALIZA TO Entrenador;
GRANT INSERT, UPDATE, DELETE ON RUTINA, RUT_DEPORTE, RUT_FISIOTERAPIA TO Entrenador;

/* Permisos de Administrativo */
GRANT UPDATE, DELETE ON USUARIO_CLIENTE TO Administrativo;

/* Permisos de Avanzado */
GRANT INSERT ON USUARIO, USUARIO_CLIENTE TO Avanzado;
GRANT INSERT ON EJERCICIO TO Avanzado;
GRANT INSERT ON DEPORTE TO Avanzado;

/* Permisos de Seleccionador */
GRANT SELECT ON USUARIO_CLIENTE TO Seleccionador;
GRANT SELECT ON EQUIPO TO Seleccionador;
GRANT INSERT ON EQUIPO TO Seleccionador;

/* Permisos de Administrador TI */
GRANT SELECT ON USUARIO_CLIENTE TO Administrador_TI;
GRANT INSERT ON INSTITUCION, INSTITUCION_TELEFONO TO Administrador_TI;

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
