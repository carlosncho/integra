document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('loginForm').addEventListener('submit', login);
    document.getElementById('registerForm').addEventListener('submit', register);
    document.querySelector('#loginForm a').addEventListener('click', showRegisterForm);
    document.querySelector('#registerForm a').addEventListener('click', showLoginForm);

    function register(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        let registroGente = localStorage.getItem('registrogente');
        registroGente = registroGente ? JSON.parse(registroGente) : [];
        registroGente.push(userData);
        localStorage.setItem('registrogente', JSON.stringify(registroGente));

        alert('¡Wena wn registrado con exito, se viene el 7 csmre!');
        event.target.reset();
    }

    function login(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userEmail = formData.get('email');
        const userPassword = formData.get('password');

        const registroGente = JSON.parse(localStorage.getItem('registrogente')) || [];
        const user = registroGente.find(user => user.email === userEmail && user.password === userPassword);

        if (user) {
            localStorage.setItem('usuarioiniciado', JSON.stringify(user));
            alert('¡Wena hno tu primer local storage weno wn!');
            window.location.href = 'perfil.html';
        } else {
            alert('Carlos coloca bien las tonteras po men');
        }
    }

    function showRegisterForm() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    }

    function showLoginForm() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
});
