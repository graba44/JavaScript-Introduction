/*
Zadanie:
-------------
po kliknięciu na przycisk przy przy samochodzie:
- pokaż element .car-detail dla danego samochodu.
- zmień tekst na przycisku na "schowaj detale".
- dodaj klasę .car-show-detail do danego samochodu - elementu .car

Po ponownym kliknięciu na przycisk
- Przywróć początkowy tekst na przycisku (pokaż detale)
- schowaj .car-detail danego samochodu
- usuń klasę .car-show-detail z danego samochodu
*/



document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll(".car-toggle-detail");

    for(button of buttons){

        button.addEventListener("click", function(){
            let car = this.closest(".car");
            let carDetail = car.querySelector(".car-detail");

            car.classList.toggle("car-show-detail");

            if(car.classList.contains("car-show-detail")){
                carDetail.style.display = "flex";
                this.textContent = "Schowaj detale";
            } else{
                carDetail.style.display = "none";
                this.textContent = "Pokaż detale";
            }
        });
    }
});