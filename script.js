document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    setTimeout(() => {
      status.textContent = "Message sent successfully!";
      form.reset();
    }, 1000);
  });
});
