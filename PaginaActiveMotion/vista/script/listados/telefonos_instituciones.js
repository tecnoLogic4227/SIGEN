let telefonosInstituciones = {};

$(document).ready(function () {
  listarTelefonosInstituciones();
});

function listarTelefonosInstituciones() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/institucion_telefono.php",
    type: "GET",
    data: {
      accion: "getTelefonosInstituciones",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((telefono) => {
          template += `
            <tr telefonoId="${telefono.id_institucion}"> 
              <td>${telefono.id_institucion}</td>
              <td>${telefono.telefono}</td>
            </tr>
          `;

          telefonosInstituciones[telefono.id_institucion] = telefono;
        });
        $("#tblTelefonosInstituciones tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
