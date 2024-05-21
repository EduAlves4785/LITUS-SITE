let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let currentSlideIndex = 0;

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active-slide");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function currentSlide(n) {
  if (n > currentSlideIndex) {
    slides[currentSlideIndex].style.animation = "slide-animation 1s forwards";
    slides[n - 1].style.animation = "slide-animation 1s forwards";
  } else {
    slides[currentSlideIndex].style.animation = "slide-animation-reverse 1s forwards";
    slides[n - 1].style.animation = "slide-animation-reverse 1s forwards";
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  currentSlideIndex = n - 1;
  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].classList.add("active");
}
