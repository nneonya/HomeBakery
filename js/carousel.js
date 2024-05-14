const carouselTrack = document.querySelector('.carousel-track');
const items = Array.from(carouselTrack.children);
const itemRect = carouselTrack.children[0].getBoundingClientRect();
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');
let currentItemIndex = carouselTrack.children.length - 1;

function nextHandler(e) {
    if (currentItemIndex != 0) {
        items[currentItemIndex].style.transform = 'translate(100%, -50%)';
        items[currentItemIndex].style.opacity = 0;
        currentItemIndex--;
    }
    
}

function prevHandler(e) {
    if (currentItemIndex != carouselTrack.children.length - 1) {
        items[currentItemIndex + 1].style.transform = 'translate(-50%, -50%)';
        items[currentItemIndex + 1].style.opacity = 1;
        currentItemIndex++;
    }
}

window.addEventListener('load', () => {
    nextBtn.addEventListener('click', nextHandler);
    prevBtn.addEventListener('click', prevHandler);
})

