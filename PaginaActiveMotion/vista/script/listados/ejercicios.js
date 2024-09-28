let ejercicios = {};

$(document).ready(function () {
  listarEjercicios();
});

function listarEjercicios() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/ejercicio.php",
    type: "GET",
    data: {
      accion: "getEjercicios",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((ejercicio) => {
          template += `
            <tr ejercicioId="${ejercicio.id_ejercicio}"> 
              <td>${ejercicio.id_ejercicio}</td>
              <td>${ejercicio.nombre_ejercicio}</td>
              <td>${ejercicio.nro_rep}</td>
              <td>${ejercicio.nro_series}</td>
              <td>${ejercicio.grupo_muscular}</td>
              <td>${ejercicio.descripcion}</td>
            </tr>
          `;

          ejercicios[ejercicio.id_ejercicio] = ejercicio;
        });
        $("#tblEjercicios tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
