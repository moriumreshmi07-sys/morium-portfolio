// Sticky navbar transparency on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const navLinks = document.getElementById('navLinks');
document.getElementById('navToggle').addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Fade-up + skill bar animation on scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.querySelectorAll('.bar-fill').forEach(fill => {
        fill.style.width = fill.getAttribute('data-width') + '%';
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Back to top
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form -> opens default mail app with the message pre-filled
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
  );
  window.location.href = `mailto:yourname@gmail.com?subject=${subject}&body=${body}`;
});