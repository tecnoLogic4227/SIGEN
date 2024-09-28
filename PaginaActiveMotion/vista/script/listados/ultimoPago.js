let ultimosPagos = {};

$(document).ready(function () {
  listarUltimosPagos();
});

function listarUltimosPagos() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/ultimo_pago.php",
    type: "GET",
    data: {
      accion: "getUltimoPago",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((pago) => {
          template += `
            <tr pagoId="${pago.id_ultimo_pago}"> 
              <td>${pago.id_ultimo_pago}</td>
              <td>${pago.hora}</td>
              <td>${pago.fecha}</td>
              <td>${pago.valor}</td>
            </tr>
          `;

          ultimosPagos[pago.id_ultimo_pago] = pago;
        });
        $("#tblUltimosPagos tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
