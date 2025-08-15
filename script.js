function showView(viewType, topicId) {
  const shortDiv = document.getElementById(`${topicId}-short`);
  const longDiv = document.getElementById(`${topicId}-long`);

  if (viewType === 'short') {
    shortDiv.classList.remove('hidden');
    longDiv.classList.add('hidden');
  } else {
    shortDiv.classList.add('hidden');
    longDiv.classList.remove('hidden');
  }
}

// Optional: shrink navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '0.5rem 2rem';
  } else {
    navbar.style.padding = '1rem 2rem';
  }
});