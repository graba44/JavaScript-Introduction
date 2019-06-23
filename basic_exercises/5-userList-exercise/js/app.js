/*
Zadanie:
-------------

Przy wysyłce formularza dodaj do listy nowego użytkownika. Niech formularz nie przeładowuje strony.
Postaraj się nie podpinać zdarzenia click dla button:submit, a podpiąć się pod zdarzenie submit dla formularza.

Po kliknięciu na przycisk usuwania (kosz na śmieci) usuń danego użytkownika z listy
*/
document.addEventListener('DOMContentLoaded', function() {

const form = document.querySelector(".form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const formName = form.querySelector("input[name='name']");
    const formPhone = form.querySelector("input[name='phone']");
    if(formName.value !== "" && formPhone.value !== ""){

        let newLi = document.createElement("li");
        newLi.classList.add("user");

        let template = `
        <div class="user-data">
            <div class="user-name">|name|</div>
            <div class="user-phone">|phone|</div>
        </div>
        <button type="button" class="btn user-delete">
            Usuń
        </button>`

        template = template.replace("|name|", formName.value);
        template = template.replace("|phone|", formPhone.value);

        newLi.innerHTML = template;
        document.querySelector(".user-list").appendChild(newLi);

        formName.value = "";
        formPhone.value = "";
    }
});

const userList = document.querySelector(".user-list");
userList.addEventListener("click", function(event){

    if(event.target.classList.contains("user-delete")){
        const toRemove = event.target.parentElement;
        userList.removeChild(toRemove);
    }
})

});