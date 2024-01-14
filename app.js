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
initializeSlider('slider1');
initializeSlider('slider2');
initializeSlider('carousel1');
initializeSlider('carousel2');
initializeSlider('carousel3');
// И добавьте инициализации для других слайдеров, если они есть
function showBlock(blockId) {
    let deteyling = document.querySelectorAll("#deteylingBlock .service");
    let okleika = document.querySelectorAll("#okleikaBlock .service");
    var serviceBlocks = document.getElementsByClassName("service-block");
    for (var i = 0; i < serviceBlocks.length; i++) {
        serviceBlocks[i].style.display = "none";
    }
    document.getElementById(blockId).style.display = "flex";
}

function showDetails(pId) {
    var paragraph = document.getElementById(pId);
    var service = paragraph.parentNode.parentNode; // Перейти к блоку .service
    var imgAndTitle = service.querySelector('.img-and-title');
    var details = service.querySelector('.details');

    // Переключаем видимость блока с фотографией и названием
    imgAndTitle.style.display = imgAndTitle.style.display === 'none' ? 'block' : 'none';

    // Переключаем видимость блока с подробностями
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

function changeColor(buttonId) {
    // Получаем элемент кнопки по её идентификатору
    var button = document.getElementById(buttonId);
  
    document.getElementById('button1').classList.remove('active');
    document.getElementById('button1').classList.remove('button1');
    document.getElementById('button2').classList.remove('button2');
  
    // Добавляем соответствующий класс к нажатой кнопке
    button.classList.add(buttonId);
}

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__inner').classList.toggle('open');
})