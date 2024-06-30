document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const userData = JSON.parse(storedData);

            
            if (userData.email === email && userData.password === password) {
                alert('Inicio de sesión exitoso!');

                
                localStorage.setItem('loggedInUser', JSON.stringify(userData));

                
                window.location.href = 'index.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos. Por favor, intenta de nuevo.');
            }
        } else {
            alert('No se encontraron datos de usuario. Por favor, regístrate primero.');
            
            window.location.href = 'register.html';
        }
    });
    
});