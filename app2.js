document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__inner').classList.toggle('open');
})
const sliders = {};
function initializeSlider(sliderId) {
    sliders[sliderId] = {
        currentIndex: 0,
        totalItems: document.getElementById(sliderId).querySelectorAll('.slider-item, .carousel-item').length
    };
    showSlide(sliderId, 0);
}
function showSlide(sliderId, index) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slider-item, .carousel-item');

    // Проверка на выход за границы слайдов
    sliders[sliderId].currentIndex = (index + slides.length) % slides.length;

    // Вычисление смещения для переключения слайда
    const translateValue = -sliders[sliderId].currentIndex * 100 + '%';
    slider.querySelector('.slider-inner, .carousel-inner').style.transform = 'translateX(' + translateValue + ')';
}
function prevSlide(sliderId) {
    showSlide(sliderId, sliders[sliderId].currentIndex - 1);
}

function nextSlide(sliderId) {
    showSlide(sliderId, sliders[sliderId].currentIndex + 1);
}
// Инициализация слайдеров
initializeSlider('slider2');