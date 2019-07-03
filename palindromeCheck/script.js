document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".form");
    const wrapper = document.querySelector(".wrapper");
    const moreInfo = document.querySelector(".wrapper__info");

    moreInfo.addEventListener("click", () => {

        let newParagraph = document.createElement("p");
        newParagraph.classList.add("newElement");
        let newParagraphText = document.createTextNode("A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar or the number 10801.")
        newParagraph.appendChild(newParagraphText);

        newParagraph.style.padding = "1.5rem";
        newParagraph.style.color = "#4286f4";
        newParagraph.style.textTransform = "uppercase";
        newParagraph.style.width = "50%";

        let existCheck = document.querySelector(".newElement");
        if(typeof(existCheck) != "undefined" && existCheck != null){
            alert("Definition already exists.");
        } else wrapper.insertBefore(newParagraph, form);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let word = document.querySelector("#word");
        word.value = word.value.toLowerCase().replace(/[^a-z]+/g, " ");
        let reversed = word.value.split("").reverse().join("");
        let checkPalindrome = (word.value === reversed) ? "This word is a palindrome." : "This word is not a palindrome.";

        alert(checkPalindrome);
        word.value = "";
    });
});

