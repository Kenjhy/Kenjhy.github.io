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
    html2canvas:  { scale: 4, logging: true, useCORS: true }, // Aumenta la escala para mejorar la calidad
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Usa las opciones definidas para generar el PDF
  html2pdf().from(document.body).set(opt).save();
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('content.json')
      .then(response => response.json())
      .then(data => {
        let formattedText = data.profileDescription.replace(/\n/g, '<br>');  
        document.querySelector('#profile p').innerHTML = formattedText;
      })
      .catch(error => console.error('Error:', error));
});



function drawSkillBar(canvasId, skillLevel) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const width = 100; // Usa el ancho real del canvas
  const height = 10; // Usa la altura real del canvas

  // Redefine las dimensiones internas del canvas
  canvas.width = width;
  canvas.height = height;

  // Dibuja el fondo
  ctx.fillStyle = '#ddd';
  ctx.fillRect(0, 0, width, height);

  // Dibuja el nivel de habilidad
  ctx.fillStyle = '#4191e6';
  ctx.fillRect(0, 0, skillLevel, height); // Ajusta el ancho según el nivel de habilidad
}

document.addEventListener('DOMContentLoaded', () => {
  drawSkillBar('englishSkill', 70); // 65% para inglés
  drawSkillBar('spanishSkill', 95); // 90% para español

  drawSkillBar('pythonSkill', 75); // 90% para español
  drawSkillBar('javaSkill', 90); // 90% para español
  drawSkillBar('javaScriptSkill', 70); // 90% para español
  drawSkillBar('fastApiSkill', 75); // 90% para español
  drawSkillBar('djangoSkill', 75); // 90% para español
  drawSkillBar('flaskSkill', 60); // 90% para español
  drawSkillBar('tensorFlowSkill', 65); // 90% para español
  drawSkillBar('aiSkill', 65); // 90% para español
  drawSkillBar('nlpSkill', 70); // 90% para español
  drawSkillBar('springBootSkill', 85); // 90% para español
  drawSkillBar('mavenSkill', 85); // 90% para español
  drawSkillBar('gradleSkill', 85); // 90% para español
  drawSkillBar('nodejsSkill', 70); // 90% para español
  drawSkillBar('cloudSkill', 55); // 90% para español

  drawSkillBar('angularSkill', 75); // 90% para español
  drawSkillBar('reactSkill', 30); // 90% para español
  drawSkillBar('bootstrapSkill', 85); // 90% para español
  drawSkillBar('materialSkill', 70); // 90% para español
  drawSkillBar('html-cssSkill', 95); // 90% para español
  drawSkillBar('mockupSkill', 80); // 90% para español
  drawSkillBar('softwareTestingSkill', 70); // 90% para español
  drawSkillBar('jsfSkill', 60); // 90% para español
  drawSkillBar('jspSkill', 70); // 90% para español

  drawSkillBar('sqlSkill', 90); // 90% para español
  drawSkillBar('pl-sqlSkill', 80); // 90% para español
  drawSkillBar('mongoDBSkill', 75); // 90% para español
  drawSkillBar('postgreSqlSkill', 75); // 90% para español
  drawSkillBar('mySqlSkill', 75); // 90% para español
  drawSkillBar('oracleSkill', 70); // 90% para español
  drawSkillBar('sqlServerSkill', 75); // 90% para español
  drawSkillBar('fireBaseSkill', 75); // 90% para español
  drawSkillBar('mariaDBSkill', 50); // 90% para español
  drawSkillBar('sqLiteSkill', 70); // 90% para español
  drawSkillBar('auroraDBSkill', 40); // 90% para español
  drawSkillBar('dynamoDbSkill', 40); // 90% para español
});