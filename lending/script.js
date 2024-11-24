// Placeholder for interactivity
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Welcome to PC Club!");
    
//     // Example of smooth scroll for navigation links
//     const navLinks = document.querySelectorAll('.nav-links a');
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetID = this.getAttribute('href');
//             document.querySelector(targetID).scrollIntoView({ behavior: 'smooth' });
//         });
//     });
// });

// let slideIndex = 0;
// const slides = document.querySelector('.slides');
// const totalSlides = document.querySelectorAll('.slide').length;

// // Функция обновления слайдера
// function updateSlider() {
//     slides.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// // Прокрутка вперёд
// function nextSlide() {
//     slideIndex = (slideIndex + 1) % totalSlides;
//     updateSlider();
// }

// // Автоматическая прокрутка каждые 3 секунды
// let autoSlide = setInterval(nextSlide, 3000);

// // Остановка автопрокрутки при наведении мыши
// const sliderElement = document.querySelector('.slider');

// sliderElement.addEventListener('mouseover', () => {
//     clearInterval(autoSlide);
// });

// sliderElement.addEventListener('mouseout', () => {
//     autoSlide = setInterval(nextSlide, 3000);
// });
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}



//cartinca
const wrapperEl = document.querySelector(".js-wrapper");
const slides = document.querySelectorAll(".js-slide");

// Initial State
slides.forEach(function (slide, idx) {
  if (idx === 0) return;
  const slideImage = slide.querySelector("img");
  gsap.set(slide, { yPercent: 100 });
  gsap.set(slideImage, { yPercent: -100 });
});

const scroll = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperEl,
      start: "top top",
      end: `+=${slides.length * 100}%`,
      scrub: true,
      pin: true
      // markers: true
    },
    defaults: { ease: "none" }
  });

  slides.forEach(function (slide, idx) {
    if (idx === slides.length - 1) return;
    const slideImg = slide.querySelector("img");
    const nextSlide = slides[idx + 1];
    const nextSlideImg = slides[idx + 1].querySelector("img");
    tl.to(slide, { yPercent: -100 })
    .to(slideImg, { yPercent: 100 }, "<")

    .to(nextSlide, { yPercent: 0 }, "<")
    .to(nextSlideImg, { yPercent: 0 }, "<");
  });
};



// игры
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


  


scroll();