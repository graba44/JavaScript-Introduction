window.addEventListener("keydown", function(e) {

    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //zatrzymuje działanie funkcji

    audio.currentTime = 0; //currentTime cofa do tyłu do danej sekundy(w tym wypadku do zerowej, czyli początku)
    audio.play();
    key.classList.add("playing");

});

function removeTransition(e) {

    //usuwa animacje, przejście(transition) wtedy kiedy nie ma właściwości transform i wtedy usuwa klasę playing
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing"); //this odwołuje sie do key, usuwa mu klasę playing
}

var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
