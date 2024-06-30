document.addEventListener('DOMContentLoaded', function() {
    const userCard = document.getElementById('userCard');
    const userDataContainer = document.getElementById('userDataContainer');
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        const { firstName, lastName, email, password, phone, address } = userData;
        userDataContainer.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> *********</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        `;
        userCard.style.display = 'block'; // Mostrar el card flotante al cargar la página
    }
});
