let rutinas = {};

$(document).ready(function () {
  listarRutinas();
});

function listarRutinas() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/rut_fisioterapia.php",
    type: "GET",
    data: {
      accion: "getRutinasFisioterapia",
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

          rutinas[rutina.id_rutina] = rutina;
        });
        $("#tblRutinas tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}