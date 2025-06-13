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

// Reveal entire sections (products-section & upi-section)
const revealSections = document.querySelectorAll('.products-section, .upi-section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
revealSections.forEach(section => sectionObserver.observe(section));

// Animate each product card individually on scroll
const productCards = document.querySelectorAll('.product-card');
const cardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});
productCards.forEach(card => cardObserver.observe(card));

// Preloader (if you have a loader element with ID 'loader')
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
  }
});
  
