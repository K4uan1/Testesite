const searchInput = document.getElementById('searchInput');
const scrollButtons = document.querySelectorAll('.scrollButton');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();

  scrollButtons.forEach(button => {
    const buttonNumber = button.getAttribute('data-number');
    if (query === '') {
      button.style.display = ''; // Mostrar todos os botões quando a pesquisa estiver vazia
    } else if (buttonNumber.includes(query)) {
      button.style.display = '';
    } else {
      button.style.display = '';
    }
  });
});

 



