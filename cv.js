// Aquí puedes agregar JavaScript para interactividad
// Por ejemplo, cambiar dinámicamente tu email o mostrar más detalles al clickear

document.getElementById('email').addEventListener('click', function() {
  this.textContent = 'tuemailreal@example.com';
});


// Funcionalidad para descargar el CV en PDF con calidad mejorada
document.getElementById('download').addEventListener('click', () => {
  var opt = {
    margin:       0,
    filename:     'mi-cv.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4, logging: true }, // Aumenta la escala para mejorar la calidad
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Usa las opciones definidas para generar el PDF
  html2pdf().from(document.body).set(opt).save();
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('content.json')
      .then(response => response.json())
      .then(data => {
          document.querySelector('#profile p').textContent = data.profileDescription;
      })
      .catch(error => console.error('Error:', error));
});


