$(document).ready(function () {
    listarEquiposContenidos();
  });
  
  function listarEquiposContenidos() {
    $.ajax({
      url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/contiene.php",
      type: "GET",
      data: {
        accion: "getEquiposContenidos",
      },
      success: function (response) {
        try {
          let data = JSON.parse(response);
  
          let template = "";
          data.forEach((equipoContenido) => {
            template += `
              <tr>
                <td>${equipoContenido.id_equipo}</td>
                <td>${equipoContenido.nombre_deporte}</td>
              </tr>
            `;
          });
          $("#tblEquiposContenidos tbody").html(template);
        } catch (e) {
          console.error("Error parsing JSON response:", e);
        }
      },
      error: function (xhr, status, error) {
        console.error("Error in AJAX request:", status, error);
      }
    });
  }
  