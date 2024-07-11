document.addEventListener('DOMContentLoaded', function() {
    const loginToggle = document.getElementById('loginToggle');
    const registerToggle = document.getElementById('registerToggle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginToggle.addEventListener('click', function() {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });

    registerToggle.addEventListener('click', function() {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    });
});
