const element = document.getElementById('body');
const triangleElement = document.getElementById('triangle'); 
const triangleElement2 = document.getElementById('triangle2'); 
const triangleElementR = document.getElementById('triangleR'); 
const triangleElementR2 = document.getElementById('triangleR2'); 
let timeoutId = null;
let timeoutId2 = null;


window.addEventListener('scroll', () => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    const scrollY = window.scrollY;
    

    if (scrollY > 700 && scrollY <= 2200) {
      element.classList.remove('bg-primary');
      element.classList.add('bg-switch');

      triangleElement.classList.remove('bg-secondary');
      triangleElement.classList.add('bg-switch2');

      triangleElement2.classList.remove('bg-secondary');
      triangleElement2.classList.add('bg-switch2');

        triangleElementR.classList.remove('bg-secondary');
      triangleElementR.classList.add('bg-switch2');

          triangleElementR2.classList.remove('bg-secondary');
          triangleElementR2.classList.add('bg-switch2');

    } else {
      element.classList.remove('bg-switch');
      element.classList.add('bg-primary');

    

         triangleElement.classList.remove('bg-switch2');
      triangleElement.classList.add('bg-secondary');

      triangleElement2.classList.remove('bg-switch2');
      triangleElement2.classList.add('bg-secondary');

      triangleElementR.classList.remove('bg-switch2');
      triangleElementR.classList.add('bg-secondary');

      triangleElementR2.classList.remove('bg-switch2');
      triangleElementR2.classList.add('bg-secondary');
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const carousel1 = document.querySelector('#default-carousel');
  const carousel2 = document.querySelector('#carousel2');

  const c1Next = carousel1.querySelector('[data-carousel-prev]');
  const c1Prev = carousel1.querySelector('[data-carousel-next]');
  const c2Next = carousel2.querySelector('[data-carousel-prev]');
  const c2Prev = carousel2.querySelector('[data-carousel-next]');

  const slides1 = carousel1.querySelectorAll('[data-carousel-item]');
  const slides2 = carousel2.querySelectorAll('[data-carousel-item]');

  function addFadeTransition(slides) {
    slides.forEach(slide => {
      slide.classList.add('duration-0');
    });
  }

  addFadeTransition(slides1);
  addFadeTransition(slides2);

  c1Next.addEventListener('click', () => c2Next.click());
  c1Prev.addEventListener('click', () => c2Prev.click());
  c2Next.addEventListener('click', () => c1Next.click());
  c2Prev.addEventListener('click', () => c1Prev.click());
});

  

   function scrollToSection() {
      const contact = document.getElementById("contact");
      const target = document.getElementById("my-target");
      const home = document.getElementById("home")
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (home) {
        home.scrollIntoView({ behavior: "smooth" });
      }
    };