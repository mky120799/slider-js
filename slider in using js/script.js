const left = document.querySelector('.left');

const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

let slideNumber = 1;

const images = document.querySelectorAll('.image');

const length = images.length;

const nextSlide = ()=>{
    slider.style.transform=`translateX(-${slideNumber*800}px)`;
    slideNumber++;
}

const getFirstSlide =()=>{
    slider.style.transform=`translateX(0x)`;
    slideNumber = 1;
}
right.addEventListener('click',()=>{
   slideNumber < length ? nextSlide() : getFirstSlide();
   getFirstSlide();   
});



