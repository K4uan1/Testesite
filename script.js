document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", function() {
    this.classList.toggle("active");
  });
});
