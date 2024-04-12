document.addEventListener('DOMContentLoaded', function () {

    const usuarioIniciadoString = localStorage.getItem('usuarioiniciado');

    if (usuarioIniciadoString) {
        const usuarioIniciado = JSON.parse(usuarioIniciadoString);

        const nombre = usuarioIniciado.name;
        const email = usuarioIniciado.email;
        const password = usuarioIniciado.password;

        document.getElementById('nombre').textContent = "Nombre: " + nombre;
        document.getElementById('email').textContent = "Correo electrónico: " + email;
        document.getElementById('password').textContent = "Contraseña: " + password;
    } else {
        alert('No estas iniciado en el login porfavor inicia.');
        window.location.href = '../HTML/menu.html';
    }

})