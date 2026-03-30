document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.querySelector('.modal');
  const modalImg = document.getElementById('modal-image');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');

  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.querySelector('img').src;
      captionText.innerHTML = this.querySelector('.description').textContent;
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
