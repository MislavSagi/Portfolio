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


