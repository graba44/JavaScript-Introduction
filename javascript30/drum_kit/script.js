window.addEventListener("keydown", function(e) {

    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //zatrzymuje działanie funkcji

    audio.currentTime = 0; //przewija audio na sam początek
    audio.play();
    key.classList.add("playing");

});


function removeTransition(e) {

    if(e.propertyName !== "transition") return;
    this.classList.remove("playing"); //this odwołuje sie do key, usuwa mu klasę playing
}

var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));