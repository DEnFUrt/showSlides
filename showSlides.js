export function showSlides() {

//INIT CONSTANTS
const slides = document.querySelectorAll('.slider-item'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    dotWrap = document.querySelector('.slider-dots'),
    dotBtns = dotWrap.querySelectorAll('.dot');

let slideIndex = 0,
    autoShow = false;
    //END INIT CONSTANTS
    
function autoShowStart() {
    const autoStepId = setInterval( () => {
        if (!autoShow) {
            clearInterval(autoStepId);
            return;
        }
        stepSlides(1);
    }, 5000);
}

const onShow = index => {
    slides[index].style.display = 'block';
    dotBtns[index].classList.add('dot-active');
};

const onHide = index => {
    slides[index].style.display = 'none';
    dotBtns[index].classList.remove('dot-active');
};

const stepSlides = step => {
    onHide(slideIndex);
    switch (true) {
        case (slideIndex + step < 0) :
            slideIndex = slides.length - 1;
            break;
        case (slideIndex + step > slides.length - 1) :
            slideIndex = 0;
            break;
        default :
            slideIndex += step;
    }
    onShow(slideIndex);
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
    stepSlides(-1);
    autoShow = false;
});

nextBtn.addEventListener('click', () => {
    stepSlides(1);
    autoShow = true;
    autoShowStart();
});

//Инициализируем Slides при старте скрипта
(() => {
    slides.forEach(item => item.style.display = 'none');
    dotBtns.forEach(item => item.classList.remove('dot-active'));

    onShow(slideIndex);
})();
}
