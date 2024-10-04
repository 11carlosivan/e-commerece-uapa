document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const email = this[0].value;
    const password = this[1].value;

    // Simulación de autenticación
    if (email === "usuario@ejemplo.com" && password === "contraseña") {
        alert("Inicio de sesión exitoso. Bienvenido!");
        // Redirigir a la página principal o a otra página
        window.location.href = "admin-dashboard.html"; // Cambia esto a la página deseada
    } else {
        alert("Correo electrónico o contraseña incorrectos.");
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const name = this[0].value;
    const email = this[1].value;
    const password = this[2].value;

    // Validación simple
    if (name === "" || email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    alert(`Registro exitoso para ${name}. Puedes iniciar sesión ahora.`);
    this.reset();
});
