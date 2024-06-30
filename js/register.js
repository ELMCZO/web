// register.js
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

       
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phone: phone,
            address: address
        };

       
        localStorage.setItem('userData', JSON.stringify(userData));

       
        window.location.href = 'login.html';
    });
});