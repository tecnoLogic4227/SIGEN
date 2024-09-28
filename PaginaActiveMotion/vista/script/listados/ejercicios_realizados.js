let ejerciciosRealizados = {};

$(document).ready(function () {
  listarEjerciciosRealizados();
});

function listarEjerciciosRealizados() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/hace.php",
    type: "GET",
    data: {
      accion: "getEjerciciosRealizados",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((ejercicio) => {
          template += `
            <tr ejercicioId="${ejercicio.ci}"> 
              <td>${ejercicio.ci}</td>
              <td>${ejercicio.id_ejercicio}</td>
            </tr>
          `;

          ejerciciosRealizados[ejercicio.ci] = ejercicio;
        });
        $("#tblEjerciciosRealizados tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
