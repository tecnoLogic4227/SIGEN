let rutinasRealizadas = {};

$(document).ready(function () {
  listarRutinasRealizadas();
});

function listarRutinasRealizadas() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/realiza.php",
    type: "GET",
    data: {
      accion: "getRutinasRealizadas",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((rutina) => {
          template += `
            <tr rutinaRealizadaId="${rutina.ci}-${rutina.id_rutina}"> 
              <td>${rutina.ci}</td>
              <td>${rutina.id_rutina}</td>
              <td>${rutina.nivel}</td>
              <td>${rutina.fecha_inicio}</td>
              <td>${rutina.fecha_termino}</td>
            </tr>
          `;

          rutinasRealizadas[`${rutina.ci}-${rutina.id_rutina}`] = rutina;
        });
        $("#tblRutinasRealizadas tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
