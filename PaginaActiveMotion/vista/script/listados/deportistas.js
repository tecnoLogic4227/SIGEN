let deportistas = {};

$(document).ready(function () {
  listarDeportistas();
});

function listarDeportistas() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/deportista.php",
    type: "GET",
    data: {
      accion: "getDeportistas",
    },
    success: function (response) {
      
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((deportista) => {
          template += `
            <tr deportistaId="${deportista.ci}"> 
              <td>${deportista.ci}</td>
              <td>${deportista.posicion}</td>
            </tr>
          `;

          deportistas[deportista.ci] = deportista;
        });
        $("#tblDeportistas tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
