const searchInput = document.getElementById('searchInput');
const scrollButtons = document.querySelectorAll('.scrollButton');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();

  scrollButtons.forEach(button => {
    const buttonNumber = button.getAttribute('data-number');
    if (query === '') {
      button.style.display = 'none'; // Mostrar todos os botões quando a pesquisa estiver vazia
    } else if (buttonNumber.includes(query)) {
      button.style.display = 'none';
    } else {
      button.style.display = 'none';
    }
  });
});

 



