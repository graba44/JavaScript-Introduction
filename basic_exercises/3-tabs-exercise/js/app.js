/*
Zadanie:
-------------

Po kliknięciu w link w zakładkach:
- przełącz aktywną zakładkę (zmieniając klasę tab-el-active)
- pokaż treść zakładki na którą kieruje dany link, ukryj pozostałe treści
*/
document.addEventListener('DOMContentLoaded', function() {

    const tab = document.querySelector(".tab");
    const tabLinks = tab.querySelectorAll(".tab-link");

    for(const item of tabLinks){
        item.addEventListener("click", function(e){
            e.preventDefault();

            const elements = this.parentElement.parentElement.children;
            for(const li of elements){
                li.classList.remove("tab-el-active");
            }

            this.parentElement.classList.add("tab-el-active");

            const el = document.querySelector(this.getAttribute("href"));
            const tabContents = el.parentElement.children;

            for(const content of tabContents){
                content.classList.remove("tab-content-active");
            }
            el.classList.add("tab-content-active");
        });
    }

});