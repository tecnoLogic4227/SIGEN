let equipos = {};

$(document).ready(function () {
  listarEquipos();
});

function listarEquipos() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/equipo.php",
    type: "GET",
    data: {
      accion: "getEquipos",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((equipo) => {
          template += `
            <tr equipoId="${equipo.id_equipo}"> 
              <td>${equipo.id_equipo}</td>
              <td>${equipo.nombre_equipo}</td>
              <td>${equipo.cantidad}</td>
            </tr>
          `;

          equipos[equipo.id_equipo] = equipo;
        });
        $("#tblEquipos tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
