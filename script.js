const searchInput = document.getElementById('searchInput');
const scrollButtons = document.querySelectorAll('.scrollButton');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();

  scrollButtons.forEach(button => {
    const buttonNumber = button.getAttribute('data-number');
    if (query === '' || buttonNumber.includes(query)) {
      button.style.display = '';
    } else {
      button.style.display = 'none';
    }
  });
});

searchInput.addEventListener('blur', () => {
  if (searchInput.value.trim() === 'block') {
    showAllButtons();
  }
});

function showAllButtons() {
  scrollButtons.forEach(button => {
    button.style.display = 'block';
  });
}


// não mexer!!!!!!!!!!!!

 