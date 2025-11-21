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

document.addEventListener('DOMContentLoaded', () => {
  setCurrentYear();
  bindNotifyButton();
});
