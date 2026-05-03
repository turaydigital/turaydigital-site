const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    menuButton.textContent = siteNav.classList.contains("open") ? "✕" : "☰";
  });
}

const currentPath = window.location.pathname.replace("/", "").replace(".html", "") || "index";

navLinks.forEach((link) => {
  const linkPath = link
    .getAttribute("href")
    .replace(".html", "")
    .replace("/", "");

  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});