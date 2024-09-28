$(document).ready(function () {
    listarDeportes();
  });
  
  function listarDeportes() {
    $.ajax({
      url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/deporte.php",
      type: "GET",
      data: {
        accion: "getDeportes",
      },
      success: function (response) {
        try {
          let data = JSON.parse(response);
  
          let template = "";
          data.forEach((deporte) => {
            template += `
              <tr>
                <td>${deporte.nombre_deporte}</td>
                <td>${deporte.descripcion}</td>
              </tr>
            `;
          });
          $("#tblDeportes tbody").html(template);
        } catch (e) {
          console.error("Error parsing JSON response:", e);
        }
      },
      error: function (xhr, status, error) {
        console.error("Error in AJAX request:", status, error);
      }
    });
  }
  