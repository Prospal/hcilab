const carousel = document.getElementById("carousel");
const slides = carousel.querySelector(".slides");
const prev = carousel.querySelector(".prev");
const next = carousel.querySelector(".next");

let slideIndex = 0;

function showSlide(index) {
  const slidesArray = Array.from(slides.children);
  slidesArray.forEach(slide => {
    slide.style.opacity = 0;
  });
  slidesArray[index].style.opacity = 1;
}

prev.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }
  showSlide(slideIndex);
});