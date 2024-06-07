let slideIndex = 0;

function showSlides1() {
  const slides = document.querySelectorAll('.img-trending');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
}

function prevSlide1() {
  slideIndex--;
  showSlides1();
}

function nextSlide1() {
  slideIndex++;
  showSlides1();
}

showSlides1();
