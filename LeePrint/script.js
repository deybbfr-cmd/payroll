// Mobile menu toggle
const menu = document.querySelector(".nav-menu");
const openBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.style.overflow = "hidden"; // prevent scroll
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.style.overflow = "auto"; // restore scroll
});

// Scroll-to-top button
const scrollBtn = document;
