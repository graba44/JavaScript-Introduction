/* 

Kiedy inny skrypt, inna biblioteka "zabierze" nadpisze znak dolara
$ === jQuery to ta sama funkcja globalna

pod dolarem ma być jQuery, parametr $ przyjmuje wartość jQuery

(function($) {

})(jQuery);

*/

(function($) {

    //znajdujemy klase menu_item i przypisujemy do zmiennej
    var menuItems = $(".menu_item");

    //znajdujemy klase section i przypisujemy do zmiennej
    var section = $(".section");

    //znajdujemy klase menu_item--active i przypisujemy do zmiennej, aby łatwiej było się potem odwoływać
    var activeClass = "menu_item--active";

    //Pierwszy element zmiennej menuItems(czyli elementu naszego menu) ma mieć przypisana klase, ktora zapisalismy w zmiennej activeClass("menu_item--active")
    menuItems.first().addClass(activeClass);

    //Z elementu section ukryj wszystko oprócz, 1 elementu z klasą section
    section.not(":first").hide();

    //metoda on pozwala przypisywać różne zdarzenia, na kliknięcie wykonujemy daną funkcję
    menuItems.on("click", function() {

        /*Po kliknięciu chcemy wiedzieć, który element klikneliśmy
        Pod zmienną this jest to co klikneliśmy, this nie jest obiektem jQuery aby to zrobić wywołujemy funkcję $ */  

        //Aby było łatwiej przypisujemy $(this) pod zmienną menuItem
        var menuItem = $(this);

        //Przypisujemy zmienną index, która będzie oznaczała w który element klikneliśmy
        var index = menuItem.index();

        //Usuwamy wszystkim elementom menuItems klase, ktora kryję się pod zmienną activeClass("menu_item--active")
        menuItems.removeClass(activeClass);

        //Najpierw usuwamy wszystkim, potem dodajemy temu który klikneliśmy

        //Na ten element, na który klikneliśmy dodajemy klase
        menuItem.addClass(activeClass)

        //metodą hide() ukrywamy wszystkie elementy, czyli na kliknięcie ukrywamy wszystkie divy z klasą section
        section.hide();

        //metoda eq pozwala przekazać jakiś element np section.eq(0)
        //fadeIn() funkcja pozwalająca na łagdone przejście 1000-1s
        section.eq(index).fadeIn(700);
    });

})(jQuery);