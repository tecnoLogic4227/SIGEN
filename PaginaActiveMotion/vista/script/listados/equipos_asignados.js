let equiposAsignados = {};

$(document).ready(function () {
  listarEquiposAsignados();
});

function listarEquiposAsignados() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/esta.php",
    type: "GET",
    data: {
      accion: "getEquiposAsignados",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((equipo) => {
          template += `
            <tr equipoId="${equipo.ci}"> 
              <td>${equipo.ci}</td>
              <td>${equipo.id_equipo}</td>
            </tr>
          `;

          equiposAsignados[equipo.ci] = equipo;
        });
        $("#tblEquiposAsignados tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
