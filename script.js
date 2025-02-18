const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const slideWidth = slider.querySelector('img').clientWidth;

// 上一张图片
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

// 下一张图片
nextBtn.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});