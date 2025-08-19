Feature: Login de usuario
  Como usuario registrado
  Quiero iniciar sesión en el sistema
  Para acceder a mis datos personales

  Scenario: Login exitoso con credenciales válidas
    Given un usuario con email "user@test.com" y contraseña "1234"
    When intenta ingresar con esas credenciales
    Then el sistema debería mostrar "Bienvenido"

  Scenario: Login fallido con credenciales inválidas
    Given un usuario con email "user@test.com" y contraseña "1234"
    When intenta ingresar con el email "user@test.com" y contraseña "wrong"
    Then el sistema debería mostrar "Credenciales inválidas"