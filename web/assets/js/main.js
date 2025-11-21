// Main JavaScript entry point for the Test scaffold

const setCurrentYear = () => {
  const target = document.getElementById('year');
  if (target) {
    target.textContent = new Date().getFullYear();
  }
};

const bindNotifyButton = () => {
  const button = document.getElementById('notify-button');
  if (!button) return;

  button.addEventListener('click', () => {
    button.textContent = 'Thanks for your interest!';
    button.disabled = true;
    button.classList.add('ghost');
  });
};

const bindMenuToggle = () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setCurrentYear();
  bindNotifyButton();
  bindMenuToggle();
});
