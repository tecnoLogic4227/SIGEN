$(document).ready(() => {
    const cerrarSesion = (event) => {
        event.preventDefault();
        sessionStorage.removeItem("ci");
        window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
    }

    $(".cerrarSesion").click(cerrarSesion);
})