//Rozwiązując kolejne punkty powinieneś z planszy usuwać kwadraty z danym numerem.
//Jeżeli dane kwadraty nie zostały usunięte, znaczy że polecenie nie zostało dobrze wykonane.

// 1. Znajdź elementy o klasie .first-attempt - dodaj im klasę active
// 2. Znajdź elementy z atrybutem data-border i dodaj im atrybut data-el-active. Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu
// 3. Znajdź elementy z klasą hack. Dodaj im atrybut title ustawiony na wartość "hacking". Ten atrybut nie ma mieć z przodu data-
// 4. Znajdź elementy o klasie hijack. Usuń im atrybut title
// 5. Znajdź elementy które mają 2 klasy równocześnie: st1 i st2. Dodaj im style: color: red, i font-size na 15px
// 6. Znajdź elementy które mają klasę .del ale nie mają klasy .hijack. Dodaj im atrybut data-hack-active, usuń atrybut data-hack-inactive
// 7. Znajdź elementy o klase .last-attempt i pokaż w ich wnętrzu spany

// ZADANIE 1
const ex1 = document.querySelectorAll(".first-attempt");
ex1.forEach(element => element.classList.add("active"));

// ZADANIE 2
const ex2 = document.querySelectorAll("[data-border]");
ex2.forEach(element => element.dataset.elActive = true);

// ZADANIE 3
const ex3 = document.querySelectorAll(".hack");
ex3.forEach(element => element.setAttribute("title", "hacking"));

// ZADANIE 4
const ex4 = document.querySelectorAll(".hijack");
ex4.forEach(element => element.removeAttribute("title"));

// ZADANIE 5
const ex5 = document.querySelectorAll(".st1.st2");
ex5.forEach(element => {element.style.color = "red", element.style.fontSize = "15px"});

// ZADANIE 6
const ex6 = document.querySelectorAll(".del:not(.hijack)");
ex6.forEach(element => {
    element.setAttribute("data-hack-active", true),
    element.removeAttribute("data-hack-inactive")
});

// ZADANIE 7
const ex7 = document.querySelectorAll(".last-attempt");
ex7.forEach(element => {
    element.querySelector("span").style.display = "none";
})




