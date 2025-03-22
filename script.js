// Aquí puedes agregar JavaScript para interactividad
// Por ejemplo, cambiar dinámicamente tu email o mostrar más detalles al clickear

// Funcionalidad para descargar el CV en PDF con calidad mejorada
document.getElementById('download').addEventListener('click', () => {
  var opt = {
    margin:       0,
    filename:     'Daniel_Felipe_Vargas_Pamplona_CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4, logging: true, useCORS: true }, // Aumenta la escala para mejorar la calidad
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Usa las opciones definidas para generar el PDF
  html2pdf().from(document.body).set(opt).save();
});

let currentLanguage = 'en'; // Idioma predeterminado

function changeLanguage(lang) {
  currentLanguage = lang;
  loadContent();
}

// Función para cargar y mostrar el contenido
function loadContent() {
  // Cargar y mostrar el perfil
  fetch('content.json') //Ir a buscar o traer
    .then(response => response.json())
    .then(data => {
      const languageData  = data[currentLanguage];
      let profileData = languageData.profileDescription;
      let profileText = Array.isArray(profileData)
        ? profileData.map(paragraph => paragraph).join('<br><br>')
        : profileData.replace(/\n/g, '<br>');
      document.querySelector('#profile p').innerHTML = profileText;
      

      // Cargar y mostrar la experiencia de trabajo de softwareOne
      let softwareOneArray = languageData.workExperience.softwareOne;
      let softwareOneText = Array.isArray(softwareOneArray)
        ? softwareOneArray.map(item => `● ${item}`).join('<br><br>')
        : softwareOneArray.replace(/\n/g, '<br>').replace(/-/g, ' ● ');
      document.querySelector('#jobSoftwareOne').innerHTML = `<p>${softwareOneText}</p>`;


      // Cargar y mostrar la experiencia de trabajo de StefaniniITSolutions
      let stefaniniITSolutionsArray = languageData.workExperience.stefaniniITSolutions;
      let stefaniniITSolutionsText = Array.isArray(stefaniniITSolutionsArray)
        ? stefaniniITSolutionsArray.map(item => `● ${item}`).join('<br><br>')
        : stefaniniITSolutionsArray.replace(/\n/g, '<br>').replace(/-/g, ' ● ');
      document.querySelector('#jobStefaniniITSolutions').innerHTML = `<p>${stefaniniITSolutionsText}</p>`;
      
      
      // Cargar y mostrar la experiencia de trabajo de carvajalTyS
      let carvajalTySArray = languageData.workExperience.carvajalTyS;
      let carvajalTySText = Array.isArray(carvajalTySArray)
        ? carvajalTySArray.map(item => `● ${item}`).join('<br><br>')
        : carvajalTySArray.replace(/\n/g, '<br>').replace(/-/g, ' ● ');
      document.querySelector('#jobCarvajalTyS').innerHTML = `<p>${carvajalTySText}</p>`;
      
      
      // Cargar y mostrar la experiencia de trabajo de gmlAviatur
      let gmlAviaturArray = languageData.workExperience.gmlAviatur;
      let gmlAviaturText = Array.isArray(gmlAviaturArray)
        ? gmlAviaturArray.map(item => `● ${item}`).join('<br><br>')
        : gmlAviaturArray.replace(/\n/g, '<br>').replace(/-/g, ' ● ');
      document.querySelector('#jobGmlAviatur').innerHTML = `<p>${gmlAviaturText}</p>`;
      

      // Cargar y mostrar la experiencia de trabajo de smartLawTech
      let smartLawTechArray = languageData.workExperience.smartLawTech;
      let smartLawTechText = Array.isArray(smartLawTechArray)
        ? smartLawTechArray.map(item => `● ${item}`).join('<br><br>')
        : smartLawTechArray.replace(/\n/g, '<br>').replace(/-/g, ' ● ');
      document.querySelector('#jobSmartLawTech').innerHTML = `<p>${smartLawTechText}</p>`;
      
      
      // Cargar y mostrar la experiencia de trabajo de novatecSolutions
      let novatecSolutionsArray = languageData.workExperience.novatecSolutions;
      let novatecSolutionsText = Array.isArray(novatecSolutionsArray)
        ? novatecSolutionsArray.map(item => `● ${item}`).join('<br><br>')
        : novatecSolutionsArray.replace(/\n/g, '<br>').replace(/-/g, ' ● ');
      document.querySelector('#jobNovatecSolutions').innerHTML = `<p>${novatecSolutionsText}</p>`;
      
      
      const cloudSkillsTexts = data.cloudSkillsTexts;
      displayCloudSkills(cloudSkillsTexts);
    })
    .catch(error => console.error('Error:', error));
}


function displayCloudSkills(cloudSkillsTexts) {
  const cloudSkillsSection = document.querySelector('#clouds-skills-text');
  let htmlContent = '';
  cloudSkillsTexts.forEach(text => {
    htmlContent += `<p>${text}</p>`;
  });
  cloudSkillsSection.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', () => {
  loadContent();
  drawSkillBars();
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

function drawSkillBars() {
  drawSkillBar('englishSkill', 70); // 65% para inglés
  // drawSkillBar('spanishSkill', 95); // 90% para español

  drawSkillBar('pythonSkill', 90); // 90% para español
  drawSkillBar('javaSkill', 90); // 90% para español
  drawSkillBar('javaScriptSkill', 70); // 90% para español
  drawSkillBar('fastApiSkill', 75); // 90% para español
  drawSkillBar('flaskSkill', 75); // 90% para español
  drawSkillBar('djangoSkill', 50); // 90% para español
  drawSkillBar('aiSkill', 65); // 90% para español
  drawSkillBar('llmSkill', 50); // 90% para español
  drawSkillBar('nlpSkill', 70); // 90% para español
  drawSkillBar('tensorFlowSkill', 65); // 90% para español
  drawSkillBar('springBootSkill', 85); // 90% para español
  drawSkillBar('mavenSkill', 85); // 90% para español
  drawSkillBar('gradleSkill', 85); // 90% para español
  drawSkillBar('nodejsSkill', 70); // 90% para español

  drawSkillBar('reactSkill', 75); // 90% para español
  drawSkillBar('angularSkill', 60); // 90% para español
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
  drawSkillBar('vectorChromaSkill', 45); // 90% para español
  drawSkillBar('vectorCosmoSkill', 45); // 90% para español
  drawSkillBar('fireBaseSkill', 75); // 90% para español
  drawSkillBar('mariaDBSkill', 50); // 90% para español
  drawSkillBar('sqLiteSkill', 70); // 90% para español
  drawSkillBar('auroraDBSkill', 40); // 90% para español
  drawSkillBar('dynamoDbSkill', 40); // 90% para español
  drawSkillBar('clouds-skills-bar', 50); // 90% para español
  drawSkillBar('architectures-skills', 65); // 90% para español
  drawSkillBar('appicationServers-skills', 55); // 90% para español
  drawSkillBar('deployments-skills', 60); // 90% para español
  drawSkillBar('dataTransmissions-skills', 35); // 90% para español
  drawSkillBar('tests-skills', 50); // 90% para español
  drawSkillBar('repositorys-skills', 85); // 90% para español
}


