// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
const body = document.body;

// Load saved mode preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  darkToggle.textContent = "☀️";
}

// Toggle dark mode on click
darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change icon
  const isDark = body.classList.contains("dark-mode");
  darkToggle.textContent = isDark ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Scroll to mini cards on Read More
const readMoreBtn = document.querySelector(".read-more-btn");
if (readMoreBtn) {
  readMoreBtn.addEventListener("click", () => {
    document.querySelector(".mini-cards").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    menu.classList.toggle("hidden");
  });
}
