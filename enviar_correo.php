<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "bhernandez.colombia@gmail.com";
  $asunto = "Information required";

  $contenido = "Nombre: $nombre\n";
  $contenido .= "Correo: $correo\n";
  $contenido .= "Mensaje: $mensaje\n";

  // Envía el correo electrónico
  $headers = "From: $correo";
  mail($destinatario, $asunto, $contenido, $headers);

  // Redirecciona al usuario a una página de confirmación
  header("Location: confirmacion.html");
}
?>
