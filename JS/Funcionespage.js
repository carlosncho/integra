document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('loginButton').classList.add('active');
  
  const btnPerfil = document.getElementById('btnPerfil');
  const btnHistorial = document.getElementById('btnHistorial');
  const divUsuario = document.getElementById('usuario');
  const divHistorial = document.getElementById('historial');

  btnPerfil.addEventListener('click', function () {
      divUsuario.style.display = 'block';
      divHistorial.style.display = 'none';
  });

  btnHistorial.addEventListener('click', function () {
      divUsuario.style.display = 'none';
      divHistorial.style.display = 'block';
  });
});