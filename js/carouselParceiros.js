let customSlideIndex = 0;
const customSlidesToShow = 4;
const customSlideWidth = 100 / customSlidesToShow; // Percentage width for each slide
const customGap = 1; // gap in rem
const customTotalGap = customGap * (customSlidesToShow - 1); // total gap between slides to show

customShowSlides(customSlideIndex);

function customPlusSlides(n) {
  customShowSlides(customSlideIndex += n);
}

function customCurrentSlide(n) {
  customShowSlides(customSlideIndex = n);
}

function customShowSlides(n) {
  let slides = document.getElementsByClassName("custom-carousel-item");
  let dots = document.getElementsByClassName("custom-carousel-dot");
  let carouselSlide = document.getElementsByClassName("custom-carousel-slide")[0];
  
  // Calculate max slide index
  const maxIndex = slides.length - customSlidesToShow;
  if (n > maxIndex) { customSlideIndex = maxIndex; }
  if (n < 0) { customSlideIndex = 0; }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Calculate the correct translateX value considering the gap
  const transformValue = -(customSlideIndex * (customSlideWidth + customTotalGap / customSlidesToShow));
  carouselSlide.style.transform = `translateX(${transformValue}%)`;
  if (dots[customSlideIndex]) {
    dots[customSlideIndex].className += " active";
  }
}
