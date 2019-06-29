/*
1) pobierz ze strony element #menu i dodaj do niego klasę .menu
2) Pobierz z tego menu wszystkie elementy A i LI (podstaw je pod stosowne zmienne, które potem wykorzystaj)
3) po wjechaniu kursorem na każde LI dodaj temu LI klasę active, a wszystkim pozostałym LI usuń klasę active
4) po kliknięciu na każdy link w menu zrób następujące czynności:
    - zatrzymaj domyślną akcję
    - wszystkim LI poza tym w którym znajduje się kliknięty link dodaj klasę collased
    - rodzicowi klikniętego linka dodaj klasę expand
    - rodzicowi klikniętego linka dodaj event "transitionend", w którym podepniesz funkcję przez nazwę (nie anonimową).
    Funkcja ta może się dla przykładu nazywać expandElementTransitionEnd.
    W funkcji tej:
        * usuń event transitionend który właśnie dodałeś
        * wypisz w konsoli href linka w tym LI (alternatywnie użyj location.href = pobranyHref)

5) - dodatkowe dla chętnych:
    W powyższej funkcji którą podpiąłeś pod zdarzenie transition end:
        - stwórz dodatkowo nowy element który jest buttononem z klasą .close i tekstem Zamknij
        - element ten dodaj do tego LI

    Po kliknięciu na .close rodzicowi usuń klasę .expand
    Wszystkim LI usuń klasę collapsed
    Usuń klikniety .close
*/

document.addEventListener("DOMContentLoaded", function(){

    const menu = document.querySelector("#menu");
    menu.classList.add("menu");

    function expandElementTransitionEnd(){
        this.removeEventListener("transitionend", expandElementTransitionEnd);
        console.log(this.querySelector("a").getAttribute("href"));

        const btn = document.createElement("button");
        btn.classList.add("close");
        btn.innerHTML = "Zamknij";
        this.appendChild(btn);

        btn.addEventListener("click", function(){
            this.parentElement.classList.remove("expand");
            for(const element of li){
                element.classList.remove("collapsed");
            }
            this.remove();
        })
    }

    const li = menu.querySelectorAll("li");
    for(const element of li){
        element.addEventListener("mouseenter", function(){
            for(const element of li){
                element.classList.remove("active");
            }
            this.classList.add("active");
        });
    }

    const links = menu.querySelectorAll("a");
    for(const link of links){
        link.addEventListener("click", function(e){
            e.preventDefault();

            for(const element of li){
                element.classList.add("collapsed");
                if(element.classList.contains("active")){
                    element.classList.remove("collapsed");
                }
            }

            this.parentElement.classList.add("expand");
            this.parentElement.addEventListener("transitionend", expandElementTransitionEnd )
        });
    }
});
