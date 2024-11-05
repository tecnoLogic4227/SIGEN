$(document).ready(() => {
    const verificar = () => {
        let data1 = sessionStorage.getItem("ci");
        let data2 = sessionStorage.getItem("rol");
        if (data1) {
            const path = window.location.pathname;
            const pathSegments = path.split("/");
            const cleanSegments = pathSegments.filter(segment => segment !== "");
            const currentFolder = cleanSegments.length > 1 ? cleanSegments[cleanSegments.length - 2] : "/";

            alert(currentFolder);

            switch (currentFolder) {
                case "administrador":
                    if (data2 != "administrativo") {
                        alert("nonono");
                        alert("Debe iniciar sesión antes de ingresar al sistema.");
                        window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
                    }
                    break;
                case "avanzado":
                    if (data2 != "avanzado") {
                        alert("Debe iniciar sesión antes de ingresar al sistema.");
                        window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
                    }
                    break;
                case "cliente":
                    if (data2 != "cliente") {
                        alert("Debe iniciar sesión antes de ingresar al sistema.");
                        window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
                    }
                    break;
                case "entrenador":
                    if (data2 != "entrenador") {
                        alert("Debe iniciar sesión antes de ingresar al sistema.");
                        window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
                    }
                    break;
                case "seleccionador":
                    if (data2 != "seleccionador") {
                        alert("Debe iniciar sesión antes de ingresar al sistema.");
                        window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
                    }
                    break;
                case "superUsuario":
                    if (data2 != "administradorti") {
                        alert("Debe iniciar sesión antes de ingresar al sistema.");
                        window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
                    }
                    break;
                default:
                    alert("Debe iniciar sesión antes de ingresar al sistema.");
                    window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
                    break;
            }
        } else {
            alert("Debe iniciar sesión antes de ingresar al sistema.");
            window.location.href = "http://localhost/sigen/paginaactivemotion/vista/html/general/index.html";
        }
    }

    verificar();
})