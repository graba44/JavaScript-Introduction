/*
Po kliknięciu na A przełącz klasę .nav-li-active z obecnie zaznaczonego elementu na kliknięty element.
Po kliknięciu na A przewiń stronę do odpowiedniego elementu na który wskazuje link
Zwróć uwagę że klasa .nav-li-active jest nadawana na element LI a nie na A.

Dla przewinięcia skorzystaj z:
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

Jak pobrać element na który wskazuje link?
Wystarczy pobrać atrybut href linka i wykorzystać go w querySelector.
Dla przykładu gdy link ma <a href="#section1"></a> to by pobrać element na który wskazuje link
trzeba użyć instrukcji document.querySelector("#section1").
*/

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector(".nav");
    const li = nav.querySelectorAll('li');
    const links = nav.querySelectorAll("a");

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            //usuwam klasę innym, dodaję klikniętemu
            for (const el of li) {
                el.classList.remove("nav-el-active");
            }
            this.parentElement.classList.add("nav-el-active");

            //pobieram element na ktory wskazuje link
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            //i przewijam do niego stronę
            target.scrollIntoView({
                behavior : 'smooth',
                block : 'start'
            });
        })
    }
});