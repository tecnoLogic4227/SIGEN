let pagosEfectuados = {};

$(document).ready(function () {
  listarPagosEfectuados();
});

function listarPagosEfectuados() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/efectua.php",
    type: "GET",
    data: {
      accion: "getPagosEfectuados",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((pago) => {
          template += `
            <tr pagoId="${pago.ci}"> 
              <td>${pago.ci}</td>
              <td>${pago.id_ultimo_pago}</td>
            </tr>
          `;

          pagosEfectuados[pago.ci] = pago;
        });
        $("#tblPagosEfectuados tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
