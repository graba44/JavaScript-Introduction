//Rozwiązując kolejne punkty powinieneś z planszy usuwać kwadraty z danym numerem.
//Jeżeli dane kwadraty nie zostały usunięte, znaczy że polecenie nie zostało dobrze wykonane.

// 1. Znajdź elementy o klasie .first-attempt - dodaj im klasę active
// 2. Znajdź elementy z atrybutem data-border i dodaj im atrybut data-el-active. Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu
// 3. Znajdź elementy z klasą hack. Dodaj im atrybut title ustawiony na wartość "hacking". Ten atrybut nie ma mieć z przodu data-
// 4. Znajdź elementy o klasie hijack. Usuń im atrybut title
// 5. Znajdź elementy które mają 2 klasy równocześnie: st1 i st2. Dodaj im style: color: red, i font-size na 15px
// 6. Znajdź elementy które mają klasę .del ale nie mają klasy .hijack. Dodaj im atrybut data-hack-active, usuń atrybut data-hack-inactive
// 7. Znajdź elementy o klase .last-attempt i pokaż w ich wnętrzu spany



const el1 = document.querySelectorAll(".first-attempt");
el1.forEach(el => el.classList.add('active'));

const el2 = document.querySelectorAll("[data-border]");
el2.forEach(el => el.dataset.elActive = true);

const el3 = document.querySelectorAll(".hack");
el3.forEach(el => el.setAttribute('title', "hacking"));

const el4 = document.querySelectorAll(".hijack");
el4.forEach(el => el.removeAttribute('title'));

const el5 = document.querySelectorAll(".st1.st2");
el5.forEach(el => {
    el.style.color = "red";
    el.style.fontSize = "15px"
});

const el6 = document.querySelectorAll(".del:not(.hijack)");
el6.forEach(el => {
    el.setAttribute('data-hack-active', true)
    el.removeAttribute('data-hack-inactive')
});

const el7 = document.querySelectorAll(".last-attempt");
el7.forEach(el => {
    el.querySelector('span').style.display = "none";
})