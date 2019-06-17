/*
Zadanie:
-------------

Po kliknięciu na LI przełącz klasę .nav-li-active z obecnie zaznaczonego elementu na element kliknięty.

Zwróć uwagę, że klasa .nav-li-active jest nadawana na element LI a nie na A. Postaraj się sprawić, by
podczas takiego kliku strona nie była przeładowywana.
*/

document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector(".nav");
    var links = nav.querySelectorAll(".nav-link");

    links.forEach(el => {
        el.addEventListener("click", function(e){
            e.preventDefault();

            let children = this.parentElement.parentElement.children;
            for(let i = 0; i < children.length; i++){
                children[i].classList.remove("nav-el-active");
            }

            this.parentElement.classList.add("nav-el-active");
        });
    });
});
