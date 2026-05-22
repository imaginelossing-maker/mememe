document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop refresh
    window.location.href = 'index2.html'; // or index2.html
  });
});
