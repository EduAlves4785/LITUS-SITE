const carouselTrack = document.getElementById('carouselTrack');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth;
const totalItems = carouselItems.length;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -1 * currentIndex * itemWidth;
  carouselTrack.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
