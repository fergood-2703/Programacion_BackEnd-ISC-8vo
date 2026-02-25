<?php
// Configuración para MAC (MAMP)
$servidor = "sql200.infinityfree.com";
$usuario = "ifO_41119528";
$password = "DzyyAC4Joh"; // En Mac MAMP la contraseña es "root"
$base_datos = "if0_41119528_contacto";
$puerto =  // Puerto estándar de MAMP para MySQL

$conn = new mysqli($servidor, $usuario, $password, $base_datos);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>