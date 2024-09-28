$(document).ready(function () {
    listarAsistencias();
  });
  
  function listarAsistencias() {
    $.ajax({
      url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/asiste.php",
      type: "GET",
      data: {
        accion: "getAsistencias",
      },
      success: function (response) {
        try {
          let data = JSON.parse(response);
  
          let template = "";
          data.forEach((asistencia) => {
            template += `
              <tr>
                <td>${asistencia.ci}</td>
                <td>${asistencia.id_rutina}</td>
                <td>${asistencia.nivel}</td>
                <td>${asistencia.fecha_inicio}</td>
                <td>${asistencia.fecha_termino}</td>
              </tr>
            `;
          });
          $("#tblAsistencias tbody").html(template);
        } catch (e) {
          console.error("Error parsing JSON response:", e);
        }
      },
      error: function (xhr, status, error) {
        console.error("Error in AJAX request:", status, error);
      }
    });
  }
  