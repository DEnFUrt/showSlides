export function showSlides() {

//INIT CONSTANTS
const slides = document.querySelectorAll('.slider-item'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    dotWrap = document.querySelector('.slider-dots'),
    dotBtns = dotWrap.querySelectorAll('.dot');

let slideIndex = 0;
//END INIT CONSTANTS

const onShow = index => {
    slides[index].style.display = 'block';
    dotBtns[index].classList.add('dot-active');
};

const onHide = index => {
    slides[index].style.display = 'none';
    dotBtns[index].classList.remove('dot-active');
};

dotWrap.addEventListener('click', (e) => {
    const target = e.target;

    if(target &&
        target.classList.contains('dot') &&
        !target.classList.contains('dot-active')) {
            for (let i = 0; i < dotBtns.length; i++) {
                if (target === dotBtns[i]) {
                    onHide(slideIndex);
                    slideIndex = i;      
                    onShow(slideIndex);
                    break;
                }
            }
    }
});

prevBtn.addEventListener('click', () => {
    onHide(slideIndex);
    slideIndex === 0 ? slideIndex = slides.length - 1 : --slideIndex;
    onShow(slideIndex);
});

nextBtn.addEventListener('click', () => {
    onHide(slideIndex);
    slideIndex === slides.length - 1 ? slideIndex = 0 : ++slideIndex;
    onShow(slideIndex);
});

//Инициализируем Slides при старте скрипта
(() => {
    slides.forEach(item => item.style.display = 'none');
    dotBtns.forEach(item => item.classList.remove('dot-active'));

    onShow(slideIndex);
})();
}