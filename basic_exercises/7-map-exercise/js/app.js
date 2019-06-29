/*
Zadanie:
-------------

w pliku html mamy mapę.
Dołączone są też 2 skrypty: cities.js i app.js
W tym pierwszym jest tablica z miastami - nie musisz go ruszać, ale przejrzeć powinieneś.

Naszym zadaniem jest:

1)
zrobienie pętli po tej tablicy
i wygenerowanie dla każdego elementu tablicy elementu:

<a
    href="http://www.poznan.pl/"
    class="map-marker"
    data-name="Poznań"
    data-population="542689"
    style="left: 180px; top: 270px;"
>Poznań</a>

Wykorzystaj tutaj dataset, classList, style itp.

Wygenerowany element wrzuć do mapy. Wszystkie dane potrzebne do wygenerowania takiego elementu są w tablicy.

2)
Wygenerowanie elementu i wrzucenie go do body:
<div class="map-tooltip" style="display: none"></div>


3)
Złapanie wygenerowanych wcześniej markerów (.map-marker)
Dla każdego takiego markera podepnijmy zdarzenia:
a) mouseover:
    - niech wypełnia tooltipa następującym html:
        <h2>Nazwa miasta</h2>
        <div>Population: <strong>Populacja miasta</strong></div>
    - niech ustawia go w pozycji kursora myszki (dodajć + 30 do x i y)
    - niech pokazuje tooltipa
b) mousemove:
    - niech ustawia tooltipa w pozycji kursora myszki (dodać + 30 do x i y)
c) mouseout:
    - niech czyści html tooltipa ("")
    - niech ukrywa toolip
*/
document.addEventListener('DOMContentLoaded', function() {

    const map = document.querySelector(".map");

    for(city of cities){
        let cityMarker = document.createElement("a");

        cityMarker.href = city.href;
        cityMarker.classList.add("map-marker");
        cityMarker.dataset.name = city.name;
        cityMarker.dataset.population = city.population;
        cityMarker.style.left = city.map_x + "px";
        cityMarker.style.top = city.map_y + "px";

        map.appendChild(cityMarker)
    }

    const tooltip = document.createElement("div");
    tooltip.classList.add("map-tooltip");
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);

    const cityMarkers = map.querySelectorAll(".map-marker");

    for(cityMarker of cityMarkers){
        cityMarker.addEventListener("mouseover", function(e){
            tooltip.innerHTML = `
            <h2>${this.dataset.name}</h2>
            <div>Populacja: <strong>${this.dataset.population}</strong></div>`;

            tooltip.style.left = e.pageX + 30 + "px";
            tooltip.style.top = e.pageY - 30 + "px";
            tooltip.style.display = "block";
        })

        cityMarker.addEventListener("mousemove", function(e){
            tooltip.style.left = e.pageX + 30 + "px";
            tooltip.style.top = e.pageY + 30 + "px";
        });

        cityMarker.addEventListener("mouseout", function(){
            tooltip.innerHTML = "";
            tooltip.style.display = "none";
        })
    }

});