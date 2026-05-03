const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    menuButton.textContent = siteNav.classList.contains("open") ? "✕" : "☰";
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});