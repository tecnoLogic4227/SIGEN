let usuarios = {};

$(document).ready(function () {
  listarUsuarios();
});

function listarUsuarios() {
  $.ajax({
    url: "http://localhost/SIGEN/PaginaActiveMotion/modelo/listado/usuario.php",
    type: "GET",
    data: {
      accion: "getUsuarios",
    },
    success: function (response) {
      try {
        let data = JSON.parse(response);

        let template = "";
        data.forEach((usuario) => {
          template += `
            <tr usuarioId="${usuario.ci}"> 
              <td>${usuario.ci}</td>
              <td>${usuario.nombre}</td>
              <td>${usuario.apellido}</td>
              <td>${usuario.direccion}</td>
              <td>${usuario.email}</td>
              <td>${usuario.fecha_nac}</td>
              <td>${usuario.rol}</td>
            </tr>
          `;

          usuarios[usuario.ci] = usuario;
        });
        $("#tblUsuarios tbody").html(template);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error in AJAX request:", status, error);
    }
  });
}
