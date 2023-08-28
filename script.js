let wrap = document.querySelector("#wrapper")
let heart = document.querySelector(".heart")

wrap.addEventListener("dblclick",function(){
    heart.style.transform = " translate(-50%, -50%) scale(3)";
    heart.style.opacity = .6;

    setTimeout(function(){
        heart.style.transform = " translate(-50%, -50%) scale(0)";
    },1500)
    setTimeout(function(){
        heart.style.opacity = 0;
    },1000)
})