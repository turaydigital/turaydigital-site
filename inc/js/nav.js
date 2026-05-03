const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");

menuButton.addEventListener("click", () => {
  siteNav.classList.toggle("open");

  menuButton.textContent = siteNav.classList.contains("open") ? "✕" : "☰";
});