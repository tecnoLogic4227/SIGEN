let ejerciciosRutinas = {};

$(document).ready(function () {
  listarEjerciciosRutinas();
});

function listarEjerciciosRutinas() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/posee.php",
    type: "GET",
    data: {
      accion: "getEjerciciosDeRutinas",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((posee) => {
          template += `
            <tr ejercicioRutinaId="${posee.id_rutina}-${posee.id_ejercicio}"> 
              <td>${posee.id_rutina}</td>
              <td>${posee.id_ejercicio}</td>
            </tr>
          `;

          ejerciciosRutinas[`${posee.id_rutina}-${posee.id_ejercicio}`] = posee;
        });
        $("#tblEjerciciosRutinas tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
