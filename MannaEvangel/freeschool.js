


document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const caption = document.getElementById("caption");
  const closeBtn = document.getElementById("closeBtn");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;

    lightboxImg.src = images[currentIndex].src;

    // fallback if no description
    caption.textContent = images[currentIndex].dataset.desc || "";
  }

  // Open lightbox
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      showImage(index);
      lightbox.classList.add("active");
    });
  });

  // Close button
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Click outside (ONLY background closes)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // Next
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Prev
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") lightbox.classList.remove("active");
  });

});
