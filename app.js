// app.js

document.addEventListener("DOMContentLoaded", function() {
    var imagenes = [
        "im1.png", "im2.png", "im3.png", "im4.png", "im5.png", "im6.png", "im7.png",
        "im8.png", "im9.png", "im10.png", "im11.png", "im12.png", "im13.png",
        "im14.png", "im15.png", "im16.png", "im17.png", "im18.png", "im19.png",
        "im20.png", "im21.png", "im22.png"
    ];
    var indiceImagen = 0;
    var imagenRaqueta = document.getElementById("imagenRaqueta");

    function cambiarImagen() {
        imagenRaqueta.style.opacity = "0";
        setTimeout(function() {
            imagenRaqueta.src = "img2/" + imagenes[indiceImagen];
            imagenRaqueta.style.opacity = "1";
            indiceImagen = (indiceImagen + 1) % imagenes.length;
        }, 500);
    }

    setInterval(cambiarImagen, 5000);
});


function toggleLanguage() {
  // Obtiene el nombre de la página actual (por ejemplo, "index.html")
  var currentPageName = window.location.pathname.split("/").pop();

  // Reemplaza la extensión ".html" con "-es.html" para obtener el nombre de la página en español
  var newPageName = currentPageName.replace(".html", "-es.html");

  // Construye la nueva URL
  var newURL = window.location.origin + "/" + newPageName;

  // Cambia la ubicación a la página traducida
  window.location.href = newURL;

  // Cambia el texto del botón a "Español"
  document.getElementById("languageButton").textContent = "Español";

}

function revtoggleLanguage() {
  // Obtiene el nombre de la página actual (por ejemplo, "index.html")
  var currentPageName = window.location.pathname.split("/").pop();

  // Reemplaza la extensión ".html" con "-es.html" para obtener el nombre de la página en español
  var newPageName = currentPageName.replace("-es.html", ".html");

  // Construye la nueva URL
  var newURL = window.location.origin + "/" + newPageName;

  // Cambia la ubicación a la página traducida
  window.location.href = newURL;

  // Cambia el texto del botón a "Español"
  document.getElementById("languageButton").textContent = "Español";
}




  