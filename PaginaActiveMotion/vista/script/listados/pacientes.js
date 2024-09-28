let pacientes = {};

$(document).ready(function () {
  listarPacientes();
});

function listarPacientes() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/paciente.php",
    type: "GET",
    data: {
      accion: "getPacientes",
    },
    success: function (response) {
      
        
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((paciente) => {
          template += `
            <tr pacienteId="${paciente.ci}"> 
              <td>${paciente.ci}</td>
              <td>${paciente.motivo}</td>
              <td>${paciente.lesion}</td>
            </tr>
          `;

          pacientes[paciente.ci] = paciente;
        });
        $("#tblPacientes tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
