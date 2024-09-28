let rutinasFisioterapia = {};

$(document).ready(function () {
  listarRutinasFisioterapia();
});

function listarRutinasFisioterapia() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/incluye.php",
    type: "GET",
    data: {
      accion: "getRutinasFisioterapiaIncluidas",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((rutina) => {
          template += `
            <tr rutinaId="${rutina.ci}"> 
              <td>${rutina.ci}</td>
              <td>${rutina.id_rutina}</td>
              <td>${rutina.id_fisioterapia}</td>
            </tr>
          `;

          rutinasFisioterapia[rutina.ci] = rutina;
        });
        $("#tblRutinasFisioterapia tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
