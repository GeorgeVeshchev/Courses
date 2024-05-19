document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
  
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    function updateDots(index) {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      updateDots(currentSlide);
      toggleButtons();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      updateDots(currentSlide);
      toggleButtons();
    }
  
    function toggleButtons() {
      if (currentSlide === 0) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'block';
      }
  
      if (currentSlide === slides.length - 1) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'block';
      }
    }
  
    function initDots() {
      slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
          updateDots(currentSlide);
          toggleButtons();
        });
        dotsContainer.appendChild(dot);
      });
      updateDots(0);
    }
  
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  
    initDots();
    showSlide(currentSlide);
    toggleButtons();
  });
  