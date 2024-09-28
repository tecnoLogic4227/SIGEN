let instituciones = {};

$(document).ready(function () {
  listarInstituciones();
});

function listarInstituciones() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/institucion.php",
    type: "GET",
    data: {
      accion: "getInstituciones",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((institucion) => {
          template += `
            <tr institucionId="${institucion.id_institucion}"> 
              <td>${institucion.id_institucion}</td>
              <td>${institucion.nombre_institucion}</td>
              <td>${institucion.direccion}</td>
            </tr>
          `;

          instituciones[institucion.id_institucion] = institucion;
        });
        $("#tblInstituciones tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
