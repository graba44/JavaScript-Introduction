(function() {

    var form = document.querySelector("#form");
    var firstName = form.querySelector("input[name='firstName']");
    var lastName = form.querySelector("input[name='lastName']");
    var email = form.querySelector("input[name='email']");
    var message = form.querySelector("textarea[name='message']");


    function displayErrors(errors, form) {

        var p = document.querySelector(".info-errors");

        if(!p)
        {
            p = document.createElement("p");
        }
           
        
       
        p.className = "info-errors";
        p.innerHTML = errors.join("<br>");

        //wstawiamy paragraf przed 1 dzieckiem znacznika form czyli przed 1 znacznikiem label
        form.insertBefore(p, form.children[0]);
    }

    form.addEventListener("submit", function(e) {

        //e.preventDefault() zapobiega domyślnej akcji przeglądarki
        e.preventDefault();

        var errors = [];

        //indexOf sprawdza czy w danym stringu znajduje się jakiś znak
        if(email.value.indexOf("@") === -1){

            //push dodaje do końca tablicy wartość
            errors.push("Podaj poprawny adres e-mail.");
            email.classList.add("invalid");
        } else{
            email.classList.remove("invalid");
        }
        
        if(firstName.value === ""){
            errors.push("Podaj swoje imię.");
            firstName.classList.add("invalid");
        } else{
            firstName.classList.remove("invalid");
        }

        if(lastName.value === ""){
            errors.push("Podaj swoje nazwisko.");
            lastName.classList.add("invalid");
        } else{
            lastName.classList.remove("invalid");
        }

        if(message.value === ""){
            errors.push("Wpisz treść wiadomości");
            message.classList.add("invalid");
        } else{
            message.classList.remove("invalid");
        }
        if(errors.length >= 1)
        {
            displayErrors(errors, form);
        } else{
            form.submit();
        }
        

        
    }, false);


})();