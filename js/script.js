const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

toggleBtn.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
});
