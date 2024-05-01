const left = document.querySelector('.left');

const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

let slideNumber = 0;

const images = document.querySelectorAll('.image');

const length = images.length;

const nextSlide = ()=>{
    slider.style.transform=`translateX(-${slideNumber*571}px)`;
    console.log(slideNumber);
    slideNumber++;
}

const prevSlide =()=>{
    slider.style.transform=`translateX(-${(slideNumber-1)*571}px)`;
    console.log(slideNumber);
    slideNumber--; 
}
const getFirstSlide =()=>{
    slider.style.transform=`translateX(0px)`;
    slideNumber = 1;
}

const getLastSlide =()=>{
    slider.style.transform=`translateX(-${(length-1)*571})`;
    slideNumber = length;
}

right.addEventListener('click',()=>{
   slideNumber < length ? nextSlide() : getFirstSlide();
});


left.addEventListener('click',()=>{
    slideNumber >= 1 ? prevSlide() : getLastSlide()
})


