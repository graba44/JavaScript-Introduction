const hexNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexBtn = document.querySelector(".hexBtn");
const hexCode = document.querySelector(".hexCode");
const body = document.querySelector("body");

hexBtn.addEventListener("click", function(){

    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexColor += hexNumbers[random];
    }
    hexCode.textContent = hexColor;
    body.style.backgroundColor = hexColor;
});
