let fisioterapias = {};

$(document).ready(function () {
  listarFisioterapia();
});

function listarFisioterapia() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/fisioterapia.php",
    type: "GET",
    data: {
      accion: "getFisioterapia",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((fisioterapia) => {
          template += `
            <tr fisioterapiaId="${fisioterapia.id_fisioterapia}"> 
              <td>${fisioterapia.id_fisioterapia}</td>
              <td>${fisioterapia.nombre_fisioterapia}</td>
              <td>${fisioterapia.tipo_fisioterapia}</td>
              <td>${fisioterapia.descripcion}</td>
            </tr>
          `;

          fisioterapias[fisioterapia.id_fisioterapia] = fisioterapia;
        });
        $("#tblFisioterapia tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
