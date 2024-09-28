let libres = {};

$(document).ready(function () {
  listarLibres();
});

function listarLibres() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/libre.php",
    type: "GET",
    data: {
      accion: "getLibres",
    },
    success: function (response) {
        
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((libre) => {
          template += `
            <tr libreId="${libre.ci}"> 
              <td>${libre.ci}</td>
            </tr>
          `;

          libres[libre.ci] = libre;
        });
        $("#tblLibres tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
