let clientes = {};

$(document).ready(function () {
  listarClientes();
});

function listarClientes() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/usuario_cliente.php",
    type: "GET",
    data: {
      accion: "getClientes",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((cliente) => {
          template += `
            <tr clienteId="${cliente.ci}"> 
              <td>${cliente.ci}</td>
              <td>${cliente.actividad}</td>
              <td>${cliente.estado}</td>
              <td>${cliente.calificacion}</td>
              <td>${cliente.estado_actividad}</td>
              <td>${cliente.fecha}</td>
              <td>${cliente.hora}</td>
              <td>${cliente.turno_agenda}</td>
            </tr>
          `;

          clientes[cliente.ci] = cliente;
        });
        $("#tblClientes tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
