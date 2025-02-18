const slider = document.querySelector('.image-slider');
const images = slider.querySelectorAll('img');
let currentIndex = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}