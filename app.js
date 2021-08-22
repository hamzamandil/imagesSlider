const sliders = document.querySelectorAll('.slider');
const next = document.querySelector('.btn__next');
const prev = document.querySelector('.btn__prev');

let counter = 0
next.addEventListener('click', () => {
    counter++;
    if(counter > sliders.length - 1) {
        counter = 0;
    }
    sliders.forEach((item, index) => {
        item.style.transform = `translateX(-${counter * 100}%)`;
    });
});


prev.addEventListener('click', () => {
    counter--;
    if(counter < 0) {
        counter = sliders.length - 1;
    }
    sliders.forEach((item, index) => {
        item.style.transform = `translateX(-${counter * 100}%)`;
    });
    
});