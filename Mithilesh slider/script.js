const prev = document.querySelector(".prev");
console.log(prev)
const next = document.querySelector(".next");
console.log(next)
const slider = document.querySelector(".slider");
console.log(slider);
const slide = document.querySelectorAll(".slide");
console.log(slide);

// here goes the logic
let slideIndex=0;
next.addEventListener("click", (e)=>{
     slide[1].style='transform: translateX(-100px);'
} )