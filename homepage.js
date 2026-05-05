// ══════════════════════════════
// Hamburger Menu Toggle
// ══════════════════════════════

const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('mobileNav');

menuToggle.addEventListener('click', function () {
  const isOpen = mobileNav.classList.contains('open');

  if (isOpen) {
    // Close the menu
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    // Open the menu
    mobileNav.classList.add('open');
    menuToggle.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
  }
});

// Close mobile nav when a link inside it is clicked
mobileNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav if screen grows past mobile breakpoint
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
