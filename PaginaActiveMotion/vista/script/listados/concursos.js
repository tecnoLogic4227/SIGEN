$(document).ready(function () {
  listarConcursos();
});

function listarConcursos() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/concurre.php",
    type: "GET",
    data: {
      accion: "getConcursos",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((concurso) => {
          template += `
            <tr>
              <td>${concurso.ci}</td>
              <td>${concurso.id_institucion}</td>
            </tr>
          `;
        });
        $("#tblConcursos tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
