// TODO :
// 1 - Select corresponding audio file
// 2 - Play audio file
// 3 - Rewind audio file
// 4 - Select key divs
// 5 - Transitionend listener
// 6 - Remove transition


window.addEventListener("keydown", function(e){
    e.keycode //récupère la clef de la touche
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const img = document.querySelector(`.image[data-key="${e.keyCode}"]`);
    if(!audio) return;

    audio.currentTime = 0;

    button.classList.add("playing");
    img.classList.add("opacity");

    audio.play();
});

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    e.currentTarget.classList.remove("playing");
};


const imgs = document.querySelectorAll(".image");

imgs.forEach((img) => img.addEventListener("transitionend", removeTransitionImg));

function removeTransitionImg(e){
    e.currentTarget.classList.remove("opacity");
};