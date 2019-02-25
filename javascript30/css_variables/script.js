var inputs = document.querySelectorAll(".options input");

function handleUpdate() {

    //dataset to obiekt, który przetrzymuje atrybuty data. np data-sizing, data-name, data-cool
    //tworzymy zmienną która określa przyrostek(jednostka fonta, px, em itp.), dla tych które nie mają wartość sizing nic nie robimy czyli ||(OR).
    var suffix = this.dataset.sizing || "";

    //jeżeli zostanie przesunięty suwak, do zmiennej w CSS zostanie przypisana dana wartość, np. --blur 50px
    //zwraca element bedący dzieckiem document(HTML)
    //dodajemy zmienną suffix aby były pixele, lub w przypadku obrazka nic
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//na zmianę i ruch myszki jednego z 3 inputów, wywołuje funkcję handleUpdate
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));