function showSection(sectionId) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Mostra apenas a seção clicada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  
  // Mostra a seção "inicio" ao carregar a página
  window.onload = function () {
    showSection('inicio');
  };
