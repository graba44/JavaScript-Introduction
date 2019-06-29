document.addEventListener('DOMContentLoaded', function() {
    const map = document.querySelector('.map');

    //dodaję markery na mapę
    for (c of cities) {
        console.log(c.href)
        const marker = document.createElement('a');

        marker.href= c.href;
        marker.classList.add('map-marker');
        marker.dataset.name = c.name;
        marker.dataset.population = c.population;
        marker.style.left = c.map_x + "px";
        marker.style.top = c.map_y + "px";
        marker.innerText = c.name;
        console.log(marker)
        map.appendChild(marker)
    }


    //dodaję toolip do strony
    const tooltip = document.createElement('div');
    tooltip.classList.add('map-tooltip');
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);


    //dla dodanych markerów robię pętlę
    //po najechaniu wypelniam i pokazuję tooltipa
    //po poruszaniu się po markerze przesuwam tooltipa
    //po zjechaniu z markera chowam tooltipa
    const markers = map.querySelectorAll('.map-marker');
    for (const m of markers) {
        m.addEventListener('mouseover', function(e) {
            tooltip.innerHTML = `
                <h2>${this.dataset.name}</h2>
                <div>Population: <strong>${this.dataset.population}</strong></div>
            `;
            tooltip.style.left = e.pageX + 30 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
            tooltip.style.display = "";
        });
        m.addEventListener('mousemove', function(e) {
            tooltip.style.left = e.pageX + 30 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        })
        m.addEventListener('mouseout', function() {
            tooltip.innerHTML = '';
            tooltip.style.display = "none";
        });
    }

});