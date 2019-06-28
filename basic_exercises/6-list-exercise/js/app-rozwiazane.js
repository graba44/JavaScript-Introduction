document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('.list');

    //tutaj napisz skrypty
    document.querySelector('#add').addEventListener('click', function() {
        const elemHTML = document.querySelector('#elementInner').innerHTML;
        const div = document.createElement('div');
        div.classList.add('element');
        div.innerHTML = elemHTML;

        const countElements = list.querySelectorAll('.element').length;
        div.querySelector('.nr').innerHTML = countElements + 1;
        list.appendChild(div);
    });

    //to też mozna przypiąć po stworzeniu danego elementu na końcu powyższego #add
    list.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }

        if (e.target.classList.contains('clone')) {
            const clone = e.target.parentNode.cloneNode(true);
            list.appendChild(clone);
        }
    })

});
