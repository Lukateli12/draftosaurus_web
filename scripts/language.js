// Sistema de traducción de idiomas para Draftosaurus
// Soporta Español (es) e Inglés (en)

const LanguageSystem = {
    // Idioma actual (por defecto español)
    currentLanguage: 'es',

    // Diccionario de traducciones
    translations: {
        // ===== INDEX.HTML - Login/Register =====
        'page-title': {
            es: 'Inicio de Sesión - Draftosaurus',
            en: 'Login - Draftosaurus'
        },
        'welcome-title': {
            es: '¡Bienvenido a Draftosaurus!',
            en: 'Welcome to Draftosaurus!'
        },
        'username': {
            es: 'Nombre de usuario',
            en: 'Username'
        },
        'password': {
            es: 'Contraseña',
            en: 'Password'
        },
        'loginButton': {
            es: 'Iniciar sesión',
            en: 'Login'
        },
        'no-account-text': {
            es: '¿No tienes cuenta?',
            en: "Don't have an account?"
        },
        'register-link': {
            es: 'Registrarse',
            en: 'Sign up'
        },
        'guest-button': {
            es: 'Soy Invitado',
            en: "I'm a Guest"
        },
        'register-title': {
            es: 'Registro de Usuario',
            en: 'User Registration'
        },
        'newUsername': {
            es: 'Nuevo nombre de usuario',
            en: 'New username'
        },
        'newPassword': {
            es: 'Nueva contraseña',
            en: 'New password'
        },
        'confirmNewPassword': {
            es: 'Confirmar contraseña',
            en: 'Confirm password'
        },
        'registerButton': {
            es: 'Registrarse',
            en: 'Register'
        },
        'have-account-text': {
            es: '¿Ya tenes cuenta?',
            en: 'Already have an account?'
        },
        'login-link': {
            es: 'Iniciar sesión',
            en: 'Login'
        },
        'footer-text': {
            es: '© 2025 FaNaLuDi Software. Todos los derechos reservados.',
            en: '© 2025 FaNaLuDi Software. All rights reserved.'
        },

        // ===== MENU.HTML - Main Menu =====
        'menu-page-title': {
            es: 'Draftosaurus - Menú Principal',
            en: 'Draftosaurus - Main Menu'
        },
        'logged-as-text': {
            es: 'Logueado como: ',
            en: 'Logged in as: '
        },
        'admin-badge': {
            es: ' (ADMINISTRADOR)',
            en: ' (ADMINISTRATOR)'
        },
        'play-button': {
            es: 'Jugar',
            en: 'Play'
        },
        'follow-button': {
            es: 'Seguimiento',
            en: 'Tracking'
        },
        'admin-button': {
            es: 'Modo Administrador',
            en: 'Administrator Mode'
        },
        'about-button': {
            es: 'Sobre nosotros',
            en: 'About us'
        },
        'manual-button': {
            es: 'Manual',
            en: 'Manual'
        },
        'settings-title': {
            es: 'Configuración',
            en: 'Settings'
        },
        'language-label': {
            es: 'Idioma:',
            en: 'Language:'
        },
        'menu-footer-text': {
            es: '© 2025 FaNaLuDi Software. Todos los derechos reservados.',
            en: '© 2025 FaNaLuDi Software. All rights reserved.'
        },

        // ===== GAME.HTML - Game Page =====
        'game-page-title': {
            es: 'Draftosaurus',
            en: 'Draftosaurus'
        },
        'back-button': {
            es: 'Atrás',
            en: 'Back'
        },
        'player-text': {
            es: 'Jugador: ',
            en: 'Player: '
        },
        'score-text': {
            es: 'Puntaje: ',
            en: 'Score: '
        },
        'round-text': {
            es: 'Ronda N°: ',
            en: 'Round #: '
        },
        'help-button': {
            es: 'Ayuda',
            en: 'Help'
        },
        'rival1-score-text': {
            es: 'Puntaje: ',
            en: 'Score: '
        },
        'rival2-score-text': {
            es: 'Puntaje: ',
            en: 'Score: '
        },
        'rival3-score-text': {
            es: 'Puntaje: ',
            en: 'Score: '
        },
        'rival4-score-text': {
            es: 'Puntaje: ',
            en: 'Score: '
        },
        'help-modal-title': {
            es: 'Ayuda',
            en: 'Help'
        },
        'forest-rule-title': {
            es: 'El Bosque: ',
            en: 'The Forest: '
        },
        'forest-rule-text': {
            es: 'Los dinosaurios deben colocarse en cualquier recinto del área de Bosque del parque.',
            en: 'Dinosaurs must be placed in any enclosure in the Forest area of the park.'
        },
        'plains-rule-title': {
            es: 'Llanura: ',
            en: 'Plains: '
        },
        'plains-rule-text': {
            es: 'Los dinosaurios deben colocarse en cualquier recinto del área de Llanura del parque.',
            en: 'Dinosaurs must be placed in any enclosure in the Plains area of the park.'
        },
        'bathrooms-rule-title': {
            es: 'Baños: ',
            en: 'Bathrooms: '
        },
        'bathrooms-rule-text': {
            es: 'Los dinosaurios deben colocarse únicamente en los recintos que se encuentren a la derecha del Río.',
            en: 'Dinosaurs must be placed only in enclosures to the right of the River.'
        },
        'cafeteria-rule-title': {
            es: 'Cafetería: ',
            en: 'Cafeteria: '
        },
        'cafeteria-rule-text': {
            es: 'Los dinosaurios deben colocarse únicamente en los recintos que se encuentren a la izquierda del Río.',
            en: 'Dinosaurs must be placed only in enclosures to the left of the River.'
        },
        'empty-rule-title': {
            es: 'Recinto Vacío: ',
            en: 'Empty Enclosure: '
        },
        'empty-rule-text': {
            es: 'Los dinosaurios deben colocarse en un recinto vacío del parque.',
            en: 'Dinosaurs must be placed in an empty enclosure in the park.'
        },
        'trex-rule-title': {
            es: '¡Cuidado con el T-Rex!: ',
            en: 'Beware of T-Rex!: '
        },
        'trex-rule-text': {
            es: 'Los dinosaurios deben colocarse en un recinto que no contenga previamente un T-Rex.',
            en: 'Dinosaurs must be placed in an enclosure that does not previously contain a T-Rex.'
        },
        'trex-rule-extra': {
            es: 'Se puede jugar un T-Rex este turno, siempre que el recinto donde vaya a ser colocado no contenga previamente otro T-Rex.',
            en: 'A T-Rex can be played this turn, as long as the enclosure where it will be placed does not previously contain another T-Rex.'
        },

        // ===== balance.html - Balance Page =====
        'balance-page-title': {
            es: 'Balanza Dinológica',
            en: 'Dinosaur Balance'
        },
        'balance-back-button': {
            es: 'ATRAS',
            en: 'BACK'
        },
        'balance-title': {
            es: 'BALANZA DINOLÓGICA',
            en: 'DINOSAUR BALANCE'
        },
        'left-pan-text': {
            es: 'Arrastra aquí',
            en: 'Drag here'
        },
        'right-pan-text': {
            es: 'Arrastra aquí',
            en: 'Drag here'
        },
        'reset-button': {
            es: 'REINICIAR BALANZA',
            en: 'RESET BALANCE'
        },
        'available-dinosaurs-title': {
            es: 'DINOSAURIOS DISPONIBLES',
            en: 'AVAILABLE DINOSAURS'
        },
        'trex-name': {
            es: 'T-Rex',
            en: 'T-Rex'
        },
        'stegosaurus-name': {
            es: 'Stegosaurus',
            en: 'Stegosaurus'
        },
        'brontosaurus-name': {
            es: 'Brontosaurio',
            en: 'Brontosaurus'
        },
        'triceratops-name': {
            es: 'Triceratops',
            en: 'Triceratops'
        },
        'parasaurus-name': {
            es: 'Parasaurio',
            en: 'Parasaurus'
        },
        'spinosaurus-name': {
            es: 'Espinosaurio',
            en: 'Spinosaurus'
        },

        // ===== TRACKING.HTML - Tracking Page =====
        'tracking-page-title': {
            es: 'Seguimiento',
            en: 'Tracking'
        },
        'tracking-back-button': {
            es: 'Atrás',
            en: 'Back'
        },
        'game-config-title': {
            es: 'Configuración de la partida',
            en: 'Game Configuration'
        },
        'select-players-text': {
            es: 'Selecciona la cantidad de jugadores (2-5) y edita sus nombres:',
            en: 'Select the number of players (2-5) and edit their names:'
        },
        'player-count-label': {
            es: 'Cantidad de jugadores:',
            en: 'Number of players:'
        },
        'option-2-players': {
            es: '2 jugadores',
            en: '2 players'
        },
        'option-3-players': {
            es: '3 jugadores',
            en: '3 players'
        },
        'option-4-players': {
            es: '4 jugadores',
            en: '4 players'
        },
        'option-5-players': {
            es: '5 jugadores',
            en: '5 players'
        },
        'config-guardar': {
            es: 'Guardar',
            en: 'Save'
        },
        'config-cancelar': {
            es: 'Cancelar',
            en: 'Cancel'
        },
        'boton-calcular-ganador': {
            es: 'Calcular',
            en: 'Calculate'
        },
        'boton-reiniciar-datos': {
            es: 'Reiniciar partida',
            en: 'Restart game'
        },
        'modal-ganador-titulo': {
            es: 'Ganador',
            en: 'Winner'
        },
        'modal-ganador-close': {
            es: 'Cerrar',
            en: 'Close'
        },

        // ===== NUEVOS TEXTOS DE SEGUIMIENTO =====
        'player-1-label': {
            es: 'Jugador 1:',
            en: 'Player 1:'
        },
        'player-2-label': {
            es: 'Jugador 2:',
            en: 'Player 2:'
        },
        'player-3-label': {
            es: 'Jugador 3:',
            en: 'Player 3:'
        },
        'player-4-label': {
            es: 'Jugador 4:',
            en: 'Player 4:'
        },
        'player-5-label': {
            es: 'Jugador 5:',
            en: 'Player 5:'
        },
        'player-1-input': {
            es: 'Jugador 1',
            en: 'Player 1'
        },
        'player-2-input': {
            es: 'Jugador 2',
            en: 'Player 2'
        },
        'player-3-input': {
            es: 'Jugador 3',
            en: 'Player 3'
        },
        'player-4-input': {
            es: 'Jugador 4',
            en: 'Player 4'
        },
        'player-5-input': {
            es: 'Jugador 5',
            en: 'Player 5'
        },
        'scoring-title': {
            es: 'Puntuación por Jugador',
            en: 'Player Scoring'
        },
        'equals-plot-label': {
            es: 'Parcela de Iguales',
            en: 'Same Species Plot'
        },
        'trio-plot-label': {
            es: 'Parcela de Trío',
            en: 'Trio Plot'
        },
        'pairs-plot-label': {
            es: 'Parcela de Parejas',
            en: 'Pairs Plot'
        },
        'unique-plot-label': {
            es: 'Parcela de Único',
            en: 'Unique Plot'
        },
        'river-plot-label': {
            es: 'Río',
            en: 'River'
        },
        'different-plot-label': {
            es: 'Parcela de Diferentes',
            en: 'Different Species Plot'
        },
        'king-plot-label': {
            es: 'Parcela del Rey',
            en: 'King Plot'
        },
        'trex-count-label': {
            es: 'Cantidad de T-Rex',
            en: 'T-Rex Count'
        },

        // ===== TEXTOS DINÁMICOS DE TRACKING.JS =====
        'scoring-of': {
            es: 'Puntuación de',
            en: 'Scoring for'
        },
        'winner-text': {
            es: 'Ganador',
            en: 'Winner'
        },
        'tie-between': {
            es: 'Empate entre',
            en: 'Tie between'
        },
        'player-header': {
            es: 'Jugador',
            en: 'Player'
        },
        'points-header': {
            es: 'Puntos',
            en: 'Points'
        },
        'copy-results': {
            es: 'Copiar resultados',
            en: 'Copy results'
        },
        'copied': {
            es: 'Copiado ✓',
            en: 'Copied ✓'
        },
        'pts': {
            es: 'pts',
            en: 'pts'
        },
        'th-jugador': {
            es: 'Jugador',
            en: 'Player'
        },
        'th-puntos': {
            es: 'Puntos',
            en: 'Points'
        },
        'modal-ganador-titulo': {
            es: 'Ganador',
            en: 'Winner'
        },
        'resultado-header-text': {
            es: 'Ganador',
            en: 'Winner'
        },
        'button-copy-results': {
            es: 'Copiar resultados',
            en: 'Copy results'
        },
        'no-data': {
            es: 'Sin datos',
            en: 'No data'
        },
        'no-data-entered': {
            es: 'No hay datos ingresados',
            en: 'No data entered'
        },
        'tie-text': {
            es: 'Empate',
            en: 'Tie'
        },
        'and-text': {
            es: 'y',
            en: 'and'
        },
        'confirm-reset-message': {
            es: '¿Seguro que deseas reiniciar los datos de la partida? Se perderán los puntajes guardados.',
            en: 'Are you sure you want to reset the game data? Saved scores will be lost.'
        },

        // ===== MENSAJES DE LOGIN Y REGISTRO =====
        'login-error': {
            es: 'Error al iniciar sesión',
            en: 'Login error'
        },
        'server-connection-error': {
            es: 'No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.',
            en: 'Could not connect to server. Please try again later.'
        },
        'passwords-no-match': {
            es: 'Las contraseñas no coinciden.',
            en: 'Passwords do not match.'
        },
        'register-success': {
            es: 'Usuario registrado exitosamente',
            en: 'User registered successfully'
        },
        'register-unknown-error': {
            es: 'Error desconocido al registrarse',
            en: 'Unknown registration error'
        },
        // ===== TRADUCCIONES DE LOS PHP =====

        // ===== TRADUCCIONES DE admin-mode.php =====
        'admin-title-tag': {
            es: 'Modificar como Administrador',
            en: 'Modify as administrator'
        },
        'admin-back-button': {
            es: 'Atrás',
            en: 'Back'
        },
        'admin-insert-user-link': {
            es: 'Insertar usuario',
            en: 'Add user'
        },
        'admin-page-title': {
            es: 'Modificar como Administrador',
            en: 'Modify as administrator'
        },
        'admin-ban-user-button': {
            es: 'Banear usuario',
            en: 'Ban user'
        },
        'admin-reset-score-button': {
            es: 'Vaciar puntajes',
            en: 'Clear scores'
        },
        'admin-reset-money-button': {
            es: 'Vaciar monedas',
            en: 'Clear coins'
        },
        'th-id-user': {
            es: 'Id_Usuario',
            en: 'Id_User'
        },
        'th-username': {
            es: 'Usuario',
            en: 'User'
        },
        'th-password': {
            es: 'Contraseña',
            en: 'Password'
        },
        'th-score': {
            es: 'Puntaje',
            en: 'Score'
        },
        'th-money': {
            es: 'Monedas',
            en: 'Coins'
        },
        // Mensajes y alertas de admin-mode
        'admin-select-user-first': {
            es: 'Selecciona un usuario primero',
            en: 'Select a user first'
        },
        'admin-confirm-delete': {
            es: '¿Seguro que quieres banear este usuario?',
            en: 'Are you sure you want to ban this user?'
        },
        // Códigos devueltos por backend (prefijo admin-)
        'admin-delete-success': {
            es: 'Usuario baneado correctamente',
            en: 'User banned successfully'
        },
        'admin-delete-fail': {
            es: 'No se pudo banear el usuario',
            en: 'Could not banned the user'
        },
        'admin-reset-score-success': {
            es: 'Puntaje vaciado correctamente',
            en: 'Score cleared successfully'
        },
        'admin-reset-score-fail': {
            es: 'No se pudo vaciar el puntaje',
            en: 'Could not clear the score'
        },
        'admin-reset-money-success': {
            es: 'Monedas vaciadas correctamente',
            en: 'Coins cleared successfully'
        },
        'admin-reset-money-fail': {
            es: 'No se pudo vaciar las monedas',
            en: 'Could not clear the coins'
        },
        'admin-invalid-action': {
            es: 'Acción no válida',
            en: 'Invalid action'
        },
        'admin-invalid-user-id': {
            es: 'ID de usuario no válido',
            en: 'Invalid user ID'
        },
        'admin-protected-user': {
            es: 'No puedes modificar al usuario administrador',
            en: 'You cannot modify the administrator user'
        },
        'generic-error': {
            es: 'Ocurrió un error. Inténtalo nuevamente.',
            en: 'An error occurred. Please try again.'
        },

        // ===== TRADUCCIONES DE ranking-tracking.php =====
        'tracking-ranking-title-tag': {
            es: 'Ranking del Seguimiento',
            en: 'Tracking ranking'
        },
        'tracking-ranking-back-button': {
            es: 'Atrás',
            en: 'Back'
        },
        'tracking-ranking-page-title': {
            es: 'Ranking del Seguimiento',
            en: 'Tracking ranking'
        },
        'th-tracking-rank': {
            es: '# Puesto',
            en: '# Position'
        },
        'th-tracking-user': {
            es: 'Usuario',
            en: 'User'
        },
        'th-tracking-score': {
            es: 'Puntaje',
            en: 'Score'
        },
                // ===== TRADUCCIONES DE ranking.php =====
        'ranking-title-tag': {
            es: 'Ranking de Jugadores',
            en: 'Ranking'
        },
        'ranking-back-button': {
            es: 'Atrás',
            en: 'Back'
        },
        'ranking-page-title': {
            es: 'Ranking de Jugadores',
            en: 'Ranking'
        },
        'th-rank': {
            es: '# Puesto',
            en: '# Position'
        },
        'th-user': {
            es: 'Usuario',
            en: 'User'
        },
        'th-score': {
            es: 'Puntaje',
            en: 'Score'
        },

        // ===== TRADUCCIONES DE into_insert.php =====
        'insert-user-title-tag': {
            es: 'Insertar Usuario',
            en: 'Insert User'
        },
        'insert-user-back-button': {
            es: 'Atrás',
            en: 'Back'
        },
        'insert-user-heading': {
            es: 'Insertar Usuario',
            en: 'Insert User'
        },
        'insert-user-label-username': {
            es: 'Usuario',
            en: 'Username'
        },
        'insert-user-label-password': {
            es: 'Contraseña',
            en: 'Password'
        },
        'insert-user-label-score': {
            es: 'Puntaje',
            en: 'Score'
        },
        'insert-user-label-money': {
            es: 'Monedas',
            en: 'Coins'
        },
        'insert-user-submit-button': {
            es: 'Insertar usuario',
            en: 'Add user'
        },
        // Mensajes dinámicos
        'insert-user-required': {
            es: 'Usuario y contraseña requeridos',
            en: 'Username and password are required'
        },
        'insert-user-success': {
            es: 'Usuario insertado correctamente',
            en: 'User inserted successfully'
        },
        'insert-user-fail': {
            es: 'No se pudo insertar el usuario',
            en: 'Could not insert the user'
        },
        'insert-user-exists': {
            es: 'El usuario ya existe',
            en: 'User already exists'
        }
    },



    // Función para cambiar idioma
    setLanguage: function(languageCode) {
        if (languageCode !== 'es' && languageCode !== 'en') {
            console.error('Idioma no soportado:', languageCode);
            return;
        }
        
        this.currentLanguage = languageCode;
        localStorage.setItem('selectedLanguage', languageCode);
        
        document.documentElement.lang = languageCode;
        
        this.updatePageTexts();
        
        // Si estamos en la página de seguimiento y hay resultados mostrados, recalcularlos
        if (window.location.pathname.includes('tracking.html')) {
            const resultadoContainer = document.getElementById('resultado-ganador');
            if (resultadoContainer && resultadoContainer.innerHTML.trim() !== '' && window.recalcularResultados) {
                // Recalcular para actualizar los textos en el idioma correcto
                window.recalcularResultados();
            }
        }
        
        console.log('Idioma cambiado a:', languageCode);
    },

    // Función para obtener idioma guardado
    getSavedLanguage: function() {
        return localStorage.getItem('selectedLanguage') || 'es';
    },

    // Función para inicializar el sistema de idiomas
    init: function() {
        // No inicializar si estamos en fanaludi.html
        if (window.location.pathname.includes('fanaludi.html')) {
            console.log('fanaludi.html detectado - Sistema de idiomas NO inicializado');
            return;
        }

        const savedLanguage = this.getSavedLanguage();
        this.currentLanguage = savedLanguage;
        
        // Establecer el atributo lang del HTML para los mensajes nativos del navegador
        document.documentElement.lang = savedLanguage;
        
        this.updatePageTexts();
        this.updateLanguageSelectors();
        console.log('Sistema de idiomas inicializado. Idioma actual:', savedLanguage);
    },

    // Función para actualizar todos los textos de la página
    updatePageTexts: function() {
        // Verificar si estamos en fanaludi.html y no hacer nada si es así
        if (window.location.pathname.includes('fanaludi.html')) {
            console.log('fanaludi.html detectado - NO se aplicarán traducciones');
            return;
        }

        for (const elementId in this.translations) {
            const element = document.getElementById(elementId);
            if (element) {
                const translation = this.translations[elementId][this.currentLanguage];
                if (translation) {
                    // Actualizar texto del elemento
                    if (element.tagName === 'INPUT') {
                        // Para inputs, actualizar placeholder
                        element.placeholder = translation;
                    } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                        // Para botones y enlaces, actualizar textContent
                        element.textContent = translation;
                    } else if (element.tagName === 'TITLE') {
                        // Para title, actualizar textContent
                        element.textContent = translation;
                        document.title = translation; // También actualizar el título del documento
                    } else {
                        // Para otros elementos, actualizar innerHTML
                        element.innerHTML = translation;
                    }
                }
            }
        }
        
        // Actualizar placeholders dinámicamente
        this.updatePlaceholders();

        // Actualizar elementos con data-lang-key (mensajes dinámicos)
        const dataKeyElements = document.querySelectorAll('[data-lang-key]');
        dataKeyElements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (key && this.translations[key] && this.translations[key][this.currentLanguage]) {
                el.textContent = this.translations[key][this.currentLanguage];
            }
        });
    },

    // Función para actualizar placeholders de inputs
    updatePlaceholders: function() {
        const placeholderMappings = {
            'username': this.translations['username'][this.currentLanguage],
            'password': this.translations['password'][this.currentLanguage],
            'newUsername': this.translations['newUsername'][this.currentLanguage],
            'newPassword': this.translations['newPassword'][this.currentLanguage],
            'confirmNewPassword': this.translations['confirmNewPassword'][this.currentLanguage]
        };

        for (const inputId in placeholderMappings) {
            const element = document.getElementById(inputId);
            if (element && element.tagName === 'INPUT') {
                element.placeholder = placeholderMappings[inputId];
            }
        }

        // Actualizar valores de inputs de jugadores en seguimiento
        const playerInputMappings = {
            'player-1-input': this.translations['player-1-input'][this.currentLanguage],
            'player-2-input': this.translations['player-2-input'][this.currentLanguage],
            'player-3-input': this.translations['player-3-input'][this.currentLanguage],
            'player-4-input': this.translations['player-4-input'][this.currentLanguage],
            'player-5-input': this.translations['player-5-input'][this.currentLanguage]
        };

        for (const inputId in playerInputMappings) {
            const element = document.getElementById(inputId);
            if (element && element.tagName === 'INPUT') {
                // Solo actualizar si tiene el valor por defecto
                if (element.value.startsWith('Jugador ') || element.value.startsWith('Player ')) {
                    element.value = playerInputMappings[inputId];
                }
            }
        }
    },

    // Función para actualizar los selectores de idioma
    updateLanguageSelectors: function() {
        const selectors = ['language-select', 'language-select-menu'];
        selectors.forEach(selectorId => {
            const selector = document.getElementById(selectorId);
            if (selector) {
                selector.value = this.currentLanguage;
                console.log('Selector actualizado:', selectorId, '→', this.currentLanguage);
            }
        });
    },

    // Función para obtener traducción específica
    getText: function(key) {
        if (this.translations[key] && this.translations[key][this.currentLanguage]) {
            return this.translations[key][this.currentLanguage];
        }
        console.warn('Traducción no encontrada para:', key, 'en idioma:', this.currentLanguage);
        return key; // Devolver la clave si no se encuentra la traducción
    }
};

// Hacer disponible globalmente
window.LanguageSystem = LanguageSystem;

// Evento listeners para los selectores de idioma
document.addEventListener('DOMContentLoaded', function() {
    console.log('language.js cargado');
    
    // Pequeño delay para asegurar que el DOM esté completamente listo
    setTimeout(() => {
        // Inicializar el sistema de idiomas
        LanguageSystem.init();
    }, 100);
    
    // Agregar evento de  listeners a los selectores de idioma
    const languageSelectors = ['language-select', 'language-select-menu'];
    languageSelectors.forEach(selectorId => {
        const selector = document.getElementById(selectorId);
        if (selector) {
            selector.addEventListener('change', function() {
                LanguageSystem.setLanguage(this.value);
                console.log('Cambio de idioma via selector:', this.value);
            });
        }
    });
});

// Funciones globales para el modal de configuración del menú
function openLanguageSettings() {
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeLanguageSettings() {
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

console.log('Sistema de idiomas Draftosaurus cargado exitosamente');