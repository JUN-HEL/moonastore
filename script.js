// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Keep theme on reload
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Reveal on scroll (Products & UPI)
const revealSections = document.querySelectorAll('.products-section, .upi-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

revealSections.forEach(section => observer.observe(section));

// Preloader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
});
