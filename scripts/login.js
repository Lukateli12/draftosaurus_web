console.log('login.js cargado');
console.log('UserProfile en login.js:', typeof window.UserProfile);

// Función para mostrar mensajes en el DOM
function showMessage(elementId, message, type) {
    // Obtiene el elemento del DOM por su id
    const messageElement = document.getElementById(elementId);
    // Asigna el texto del mensaje al elemento
    messageElement.textContent = message;
    // Cambia la clase del elemento para mostrar el tipo de mensaje (success/error)
    messageElement.className = 'message ' + type;
}

// Función para limpiar mensajes
function clearMessages() {
    // Limpia el mensaje de login
    document.getElementById('loginMessage').textContent = '';
    document.getElementById('loginMessage').className = 'message';
    // Limpia el mensaje de registro
    document.getElementById('registerMessage').textContent = '';
    document.getElementById('registerMessage').className = 'message';
}

// Evento para el formulario de login
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtiene el valor del usuario
    const username = document.getElementById('username').value;
    // Obtiene el valor de la contraseña
    const password = document.getElementById('password').value;
    // Obtiene el botón de login
    const loginButton = document.getElementById('loginButton');

    clearMessages(); // Limpia mensajes previos
    loginButton.disabled = true; // Deshabilita el botón

    try {
        // Realiza la petición POST al backend para login
    const res = await fetch('php/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        // Convierte la respuesta en JSON
        const data = await res.json();

        console.log('LOGIN - Código de respuesta:', res.status);
        console.log('LOGIN - Datos recibidos:', data);

        if (res.ok && res.status >= 200 && res.status < 300) { // Si la respuesta HTTP es 2.. algo  (éxito)
            showMessage('loginMessage', data.message, 'success'); // Entonces muestra mensaje de éxito
            
            // GUARDAR USUARIO EN EL PERFIL
            console.log('LOGIN EXITOSO - Usuario:', username);
            console.log('window.UserProfile existe:', !!window.UserProfile);
            console.log('typeof window.UserProfile:', typeof window.UserProfile);
            
            // Intentar múltiples formas de acceder a UserProfile
            let profileSaved = false;
            
            // Método 1: window.UserProfile
            if (window.UserProfile && typeof window.UserProfile.saveUser === 'function') {
                try {
                    window.UserProfile.saveUser(username);
                    const savedUser = window.UserProfile.getUser();
                    console.log('Método 1 exitoso - Usuario guardado:', savedUser);
                    profileSaved = true;
                } catch (e) {
                    console.error('Método 1 falló:', e);
                }
            }
            
            // Método 2: Acceso directo a localStorage como respaldo
            if (!profileSaved) {
                try {
                    localStorage.setItem('loggedUser', username);
                    const savedUser = localStorage.getItem('loggedUser');
                    console.log('Método 2 (respaldo) exitoso - Usuario guardado:', savedUser);
                    profileSaved = true;
                } catch (e) {
                    console.error('Método 2 también falló:', e);
                }
            }
            
            if (!profileSaved) {
                console.error('CRÍTICO: No se pudo guardar el usuario de ninguna manera');
            }
            
            setTimeout(() => {
                // Todos los usuarios van al mismo menú, que se adapta automáticamente
                window.location.href = 'menu.html';
            }, 1000); // Espera 1 segundo antes de redirigir
        } else { // Si hay error HTTP (4.. o  5..)
            console.log('Error en el login:', data.error);
            const loginErrorText = window.LanguageSystem ? window.LanguageSystem.getText('login-error') : 'Error al iniciar sesión';
            showMessage('loginMessage', data.error || loginErrorText, 'error'); // Muestra mensaje de error en rojo
        }
    } catch (error) {
        // Si hay error de red o servidor
        console.error('Error de red o del servidor:', error);
        const serverErrorText = window.LanguageSystem ? window.LanguageSystem.getText('server-connection-error') : 'No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.';
        showMessage('loginMessage', serverErrorText, 'error');
    } finally {
        loginButton.disabled = false; // Vuelve a habilitar el botón
    }
});



// Evento para el formulario de registro
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtiene el valor del usuario
    const username = document.getElementById('newUsername').value;
    // Obtiene el valor de la contraseña
    const password = document.getElementById('newPassword').value;
    // Obtiene el valor de la confirmación de contraseña
    const confirmPassword = document.getElementById('confirmNewPassword').value;
    // Obtiene el botón de registro
    const registerButton = document.getElementById('registerButton');

    clearMessages(); // Limpia mensajes anteriores

    // Verifica si las contraseñas coinciden
    if (password !== confirmPassword) {
        const passwordsNoMatchText = window.LanguageSystem ? window.LanguageSystem.getText('passwords-no-match') : 'Las contraseñas no coinciden.';
        showMessage('registerMessage', passwordsNoMatchText, 'error'); // Muestra error si no coinciden
        return; // Detiene la función si las contraseñas no coinciden
    }

    registerButton.disabled = true; // Deshabilita el botón

    try { // Inicia un bloque try para manejar posibles errores durante el registro
        // Realiza la petición POST al backend para registro
        const res = await fetch('php/register.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        // Convierte la respuesta en JSON
        const data = await res.json(); // Espera y obtiene la respuesta del servidor en formato JSON

        console.log('REGISTRO - Código de respuesta:', res.status);
        console.log('REGISTRO - Datos recibidos:', data);

        if (res.ok && res.status >= 200 && res.status < 300) { // Si la respuesta HTTP indica éxito real (2xx)
            const registerSuccessText = window.LanguageSystem ? window.LanguageSystem.getText('register-success') : 'Usuario registrado exitosamente';
            showMessage('registerMessage', data.message || registerSuccessText, 'success'); // Muestra un mensaje de éxito en el registro
            console.log('Registro exitoso');
            setTimeout(() => { // Espera 1.5 segundos antes de ejecutar el siguiente bloque
                toggleRegister(); // Cambia al formulario de login tras el registro exitoso
                document.getElementById('newUsername').value = ''; // Limpia el campo de usuario
                document.getElementById('newPassword').value = ''; // Limpia el campo de contraseña
                document.getElementById('confirmNewPassword').value = ''; // Limpia el campo de confirmación de contraseña
            }, 1500); // Retardo de 1.5 segundos
        } else { // Si la respuesta HTTP indica error (4xx, 5xx)
            console.log('Error en el registro:', data.error);
            const registerErrorText = window.LanguageSystem ? window.LanguageSystem.getText('register-unknown-error') : 'Error desconocido al registrarse';
            showMessage('registerMessage', data.error || registerErrorText, 'error'); // Muestra mensaje de error
        }
    } catch (error) { // Si ocurre un error de red o servidor
        // Si hay error de red o servidor
        console.error('Error de red o del servidor:', error); // Muestra el error en la consola
        const serverErrorText = window.LanguageSystem ? window.LanguageSystem.getText('server-connection-error') : 'No se pudo conectar con el servidor. Intentalo de nuevo más tarde.';
        showMessage('registerMessage', serverErrorText, 'error'); // Muestra mensaje de error al usuario
    } finally { // Este bloque se ejecuta siempre, haya o no error
        registerButton.disabled = false; // Vuelve a habilitar el botón de registro
    }
});



// Función para alternar entre formularios de login y registro
function toggleRegister() {
    // Obtiene el contenedor de login
    const loginBox = document.getElementById('login-container');
    // Obtiene el contenedor de registro
    const registerBox = document.getElementById('register-container');
    
    // Cambia la visibilidad de los formularios
    loginBox.style.display = loginBox.style.display === 'none' ? 'block' : 'none';
    registerBox.style.display = registerBox.style.display === 'none' ? 'block' : 'none';
    
    clearMessages(); // Limpia los mensajes al cambiar de formulario
}

// Función para entrar como invitado
function loginAsGuest() {
    console.log('🎭 Entrando como invitado');
    
    let guestSaved = false;
    
    // Método 1: UserProfile
    if (window.UserProfile && typeof window.UserProfile.saveUser === 'function') {
        try {
            window.UserProfile.logout(); // Limpiar sesión anterior
            window.UserProfile.saveUser('Invitado');
            console.log('Invitado guardado con UserProfile');
            guestSaved = true;
        } catch (e) {
            console.error('Error con UserProfile para invitado:', e);
        }
    }
    
    // Método 2: localStorage directo
    if (!guestSaved) {
        try {
            localStorage.setItem('loggedUser', 'Invitado');
            console.log('Invitado guardado con localStorage directo');
            guestSaved = true;
        } catch (e) {
            console.error('Error con localStorage para invitado:', e);
        }
    }
    
    if (!guestSaved) {
        console.error('CRÍTICO: No se pudo guardar el invitado');
    }
    
    // Redirigir al menú normal
    window.location.href = 'menu.html';
}

