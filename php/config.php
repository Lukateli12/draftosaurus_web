<?php
$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "usuarios_registrados_bd";
$DB_PORT = 3306;

$conn = @new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME, $DB_PORT);
if ($conn->connect_error) {
    http_response_code(500);
    die("Error de conexión a la base de datos: " . htmlspecialchars($conn->connect_error));
}
$conn->set_charset("utf8mb4");
?>