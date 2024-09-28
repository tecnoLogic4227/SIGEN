let entrenadores = {};

$(document).ready(function () {
  listarEntrenadores();
});

function listarEntrenadores() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/usuario_entrenador.php",
    type: "GET",
    data: {
      accion: "getEntrenadores",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((entrenador) => {
          template += `
            <tr entrenadorId="${entrenador.ci}"> 
              <td>${entrenador.ci}</td>
            </tr>
          `;

          entrenadores[entrenador.ci] = entrenador;
        });
        $("#tblEntrenadores tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
