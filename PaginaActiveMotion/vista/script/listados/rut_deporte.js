let rutinasDeporte = {};

$(document).ready(function () {
  listarRutinasDeporte();
});

function listarRutinasDeporte() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/rut_deporte.php",
    type: "GET",
    data: {
      accion: "getRutinasDeporte",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((rutina) => {
          template += `
            <tr rutinaId="${rutina.id_rutina}"> 
              <td>${rutina.id_rutina}</td>
            </tr>
          `;

          rutinasDeporte[rutina.id_rutina] = rutina;
        });
        $("#tblRutinasDeporte tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
