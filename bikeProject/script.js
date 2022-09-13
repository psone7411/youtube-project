const dot=document.querySelectorAll(".dot")
const slide=document.querySelectorAll(".slide");

for(let i=0;i<dot.length;i++){
    dot[i].addEventListener("click",function(){
        changeSlide(i)
    })
}
function changeSlide(j){
    for(x of dot){
        x.classList.remove("active")
        dot[j].classList.add("active")
    }
    for(x of slide){
        x.classList.remove("active")
        slide[j].classList.add("active")
    }
}

// function changeSlide(j){
//     for(y of slide){
//         y.classList.remove("active")
//         slide[j].classList.add("active")
//         console.log(slide[j])
//     }
//     for(x of dot){
//         x.classList.remove("active")
//         dot[j].classList.add("active")
//     }
// }
// for(let i=0;i<dot.length;i++){
//     dot[i].addEventListener("click",function(){
//         changeSlide(i)
//     })
// }