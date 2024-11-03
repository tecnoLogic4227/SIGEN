const filtroCedula = dato => {
    dato = dato.trim();

    if (dato.length < 7 || dato.length > 8) {
        return false;
    }

    for (let i = 0; i < dato.length; i++) {
        if (isNaN(dato[i])) {
            return false;
        }
    }

    if (dato.length == 7) {
        dato = '0' + dato;
    }

    let resultado = 0;
    let algoritmoCI = [2, 9, 8, 7, 6, 3, 4];

    for (let i = 0; i < algoritmoCI.length; i++) {
        resultado += algoritmoCI[i] * parseInt(dato[i]);
    }

    let digitoCalculado = (resultado % 10 === 0) ? 0 : 10 - (resultado % 10);

    if (parseInt(dato[dato.length - 1]) != digitoCalculado) {
        return false;
    }

    return true;
}

const filtroId = dato => {
    dato = dato.trim();

    if (dato.length < 1 || dato.length > 10) {
        return false;
    }

    for (let i = 0; i < dato.length; i++) {
        if (isNaN(dato[i])) {
            return false;
        }
    }

    return true;
}

const filtroPalabra = dato => {
    dato = dato.trim();

    if (dato.length < 1 || dato.length > 254) {
        return false;
    }

    for (let i = 0; i < dato.length; i++) {
        if (!isNaN(dato[i])) {
            return false;
        }
    }

    return true;
}

const filtroEmail = dato => {
    dato = dato.trim();

    if (dato.length < 1 || dato.length > 254) {
        return false;
    }

    if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(dato)) {
        return false;
    }

    return true;
}

const filtroRol = dato => {
    dato = dato.trim();

    if (dato.length < 1) {
        return false;
    }

    const rolesPermitidos = ["cliente", "entrenador", "administrativo", "seleccionador", "avanzado", "administradorti"];

    return rolesPermitidos.includes(dato);
}

const filtroTelefono = dato => {
    dato = dato.trim();

    if (dato.length < 1 || dato.length > 19) {
        return false;
    }

    if (dato[0] == "+") {
        for (let i = 1; i < dato.length; i++) {
            if (isNaN(dato[i])) {
                return false;
            }
        }
    } else {
        for (let i = 0; i < dato.length; i++) {
            if (isNaN(dato[i])) {
                return false;
            }
        }
    }

    return true;
}


const filtroEstado = dato => {
    if (dato.length < 1) {
        return false;
    }

    const estadosPermitidos = ["principiante", "bajo", "medio", "alto", "para seleccionar", "inicio", "sin evolucion", "en evolucion", "satisfactorio"];

    return estadosPermitidos.includes(dato);
}

const filtroNumero = dato => {
    dato = dato.trim();

    if (dato.length < 1 || dato.length > 10) {
        return false;
    }

    for (let i = 0; i < dato.length; i++) {
        if (isNaN(dato[i])) {
            return false;
        }
    }

    return true;
}

const filtroFecha = dato => {
    dato = dato.trim();

    let fecha = new Date(dato);

    if (fecha.toString() == "Invalid Date") {
        return false;
    }

    return true;
}

const filtroHora = dato => {
    dato = dato.trim();

    let codigo = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!codigo.test(dato)) {
        return false;
    }

    return true;
}

const filtroTurnoAgenda = dato => {
    dato = dato.trim();

    if (dato.length < 1) {
        return false;
    }

    const turnosPermitidos = ["matutino", "vespertino"];
    return turnosPermitidos.includes(dato);
}


const filtroValor = dato => {
    dato = dato.trim();
    let codigoValor = /^\d{1,8}(\.\d{1,2})?$/;

    return codigoValor.test(dato);
}

const filtroNombreRutina = dato => {

    if (dato.length < 1 || dato.length > 99) {
        return false;
    }

    return true;
}

const filtroCantidad = dato => {

    if (dato.length < 1 || dato.length > 9) {
        return false;
    }

    return true;
}

const filtroDireccion = dato => {
    if (dato.length < 1 || dato.length > 199) {
        return false;
    }

    return true;
}

const validarContrasenia = (contrasena) => {
    if (contrasena.length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(contrasena)) {
        return false;
    }
    if (!/[a-z]/.test(contrasena)) {
        return false;
    }
    if (!/\d/.test(contrasena)) {
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
        return false;
    }

    return { valido: true };
};

const filtroBoolean = dato => {
    if (dato !== true && dato !== false) {
        return false
    }
    return true;
}

const filtroPlan = dato => {

    if (dato.length < 1) {
        return false;
    }

    const turnosPermitidos = ["Basico", "Premium", "Pack Verano", "Avanzado", "Elite", "Verano"];
    return turnosPermitidos.includes(dato);
}

// const filtro = dato => {


// }