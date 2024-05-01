const left = document.querySelector('.left');

const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

let slideNumber = 1;

const images = document.querySelectorAll('.image');

const length = images.length;
console.log("length",length);

const nextSlide = ()=>{
    slider.style.transform=`translateX(-${slideNumber*571}px)`;
    console.log(slideNumber);
    slideNumber++;
}


const prevSlide =()=>{
    slider.style.transform=`translateX(-${(slideNumber-2)*571}px)`;
    console.log(slideNumber);
    slideNumber--; 
}
const getFirstSlide =()=>{
    slider.style.transform=`translateX(0px)`;
    slideNumber = 1;
}

const getLastSlide =()=>{
    slider.style.transform=`translateX(-${(length-1)*571}px)`;
    slideNumber = length;
}

right.addEventListener('click',()=>{
   slideNumber < length ? nextSlide() : getFirstSlide();
});


left.addEventListener('click',()=>{
    slideNumber >= 1 ? prevSlide() : getLastSlide()
})








/**
 *  NOTE:-
 *  We are subtracting 2 from the slideNumber because :-
 *  Certainly! Let's go over the reasoning:

 **Indexing Starts at 0**: In JavaScript, arrays and array-like structures use zero-based indexing. This means that the index of the first element in an array is 0, the second element is 1, and so on. 

 **Initial Slide Number is 1**: If you set `slideNumber` to 1 as the initial value, it indicates that you're currently on the first slide. However, in zero-based indexing, the index of the first slide would be 0.

 **Adjusting for Previous Slide**: When moving to the previous slide, you need to find the index of the slide before the current one. Since `slideNumber` is 1-based but indexing is 0-based, you need to subtract 1 to get the correct index of the current slide. Then, to find the index of the previous slide, you subtract another 1.

   So, when `slideNumber` is initially set to 1, to find the index of the previous slide, you subtract 2:

 ```javascript

 slider.style.transform = `translateX(-${(slideNumber-2)*571}px)`;

 ```

This adjustment ensures that you're correctly targeting the index of the previous slide, regardless of whether `slideNumber` is initially set to 0 or 1. 
 * 
 * 
 * 
 * 
 * */ 
