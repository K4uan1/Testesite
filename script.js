const searchInput = document.getElementById('searchInput');
const scrollButtons = document.querySelectorAll('.scrollButton');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();

  scrollButtons.forEach(button => {
    const buttonNumber = button.getAttribute('data-number');
    if (query === '' || buttonNumber.includes(query)) {
      button.style.display = '';
    } else {
      button.style.display = '';
    }
  });
});

searchInput.addEventListener('blur', () => {
  if (searchInput.value.trim() === '') {
    scrollButtons.forEach(button => {
      button.style.display = 'block'; // Voltar ao estilo padrão (valor vazio)
    });
  }
});




