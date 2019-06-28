/*
Zadanie:
-------------

Po kliknięciu w "dodaj element" do listy dodaj nowy element podobny do tego już istniejącego na liście
Po dodaniu powinien mieć kolejny numer który wylicz na podstawie ilości elementów + 1

Po kliknięciu w ikonę kosza usuń dany element
Po kliknięciu w ikonę klonowania sklonuj na koniec listy dany element

*/
document.addEventListener('DOMContentLoaded', function() {

    let number = document.querySelector(".nr").textContent;
    const list = document.querySelector(".list");
    const addBtn = document.getElementById("add");

    addBtn.addEventListener("click", function(){
        const newDiv = document.createElement("div");
        newDiv.classList.add("element");

        const contentOfDiv = document.querySelector("#elementInner").innerHTML;
        newDiv.innerHTML = contentOfDiv;

        number++;
        newDiv.querySelector(".nr").innerHTML = number;
        list.appendChild(newDiv);
    });

    list.addEventListener("click", function(e){
        if(e.target.classList.contains("clone")){
            let ClonedElement = e.target.parentElement.cloneNode(true);
            list.appendChild(ClonedElement);
        }

        if(e.target.classList.contains("delete")){
           e.target.parentElement.remove();
        }
    })


});