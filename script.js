// Search functionality
document.querySelector('.search input').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
