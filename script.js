document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", function() {
    const menuOptions = document.querySelector(".menu-options");
    menuOptions.style.display = menuOptions.style.display === "block" ? "none" : "block";
  });
});
