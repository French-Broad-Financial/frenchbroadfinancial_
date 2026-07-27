// French Broad Financial - Main JS

document.addEventListener('DOMContentLoaded', function () {
  // Close mobile menu when a nav link is clicked
  const navLinks = document.querySelectorAll('.nav a');
  const nav = document.querySelector('.nav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });

  // Optional: close menu when clicking outside
  document.addEventListener('click', function (e) {
    const toggle = document.querySelector('.menu-toggle');
    if (nav && nav.classList.contains('open') && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
});
