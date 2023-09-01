$(document).ready(function() {
    var image = document.getElementById('contoured-image');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
  
    // Imposta le dimensioni del canvas sulle dimensioni dell'immagine
    canvas.width = image.width;
    canvas.height = image.height;
  
    // Disegna l'immagine sul canvas
    ctx.drawImage(image, 0, 0, image.width, image.height);
  
    // Ottieni i dati dell'immagine
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
    // Calcola i bordi basati sui pixel trasparenti
    var borderWidth = 10; // Spessore del bordo
    var borderColor = '#000'; // Colore del bordo
  
    for (var y = 0; y < canvas.height; y++) {
      for (var x = 0; x < canvas.width; x++) {
        var index = (y * canvas.width + x) * 4;
  
        // Verifica se il pixel è trasparente
        if (imageData.data[index + 3] === 0) {
          // Applica il bordo al pixel trasparente
          for (var i = 0; i < borderWidth; i++) {
            var pixelIndex = ((y + i) * canvas.width + x + i) * 4;
            imageData.data[pixelIndex] = borderColor[0];
            imageData.data[pixelIndex + 1] = borderColor[1];
            imageData.data[pixelIndex + 2] = borderColor[2];
            imageData.data[pixelIndex + 3] = 255; // Opacità massima
          }
        }
      }
    }
  
    // Aggiorna l'immagine con i bordi modificati
    ctx.putImageData(imageData, 0, 0);
  
    // Imposta l'URL del canvas come sorgente dell'immagine
    image.src = canvas.toDataURL();
  });
  