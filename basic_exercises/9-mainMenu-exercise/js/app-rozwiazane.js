document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu');
    const menuLi = menu.querySelectorAll('li');
    const menuLinks = menu.querySelectorAll('a');

    function expandElementTransitionEnd() {
        this.removeEventListener('transitionend', expandElementTransitionEnd);
        console.log(this.querySelector('a').getAttribute('href'));

        const close = document.createElement('button');
        close.classList.add('close');
        close.innerText = "Zamknij";
        close.addEventListener('click', function() {
            this.parentElement.classList.remove('expand');
            for (const li of menuLi) {
                li.classList.remove('collapsed');
            }
            this.remove()
        });
        this.appendChild(close);
    }

    menu.classList.add('menu');

    for (const li of menuLi) {
        li.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            for (const li of menuLi) {
                li.classList.remove('active');
            }
            this.classList.add('active');
        })
    }

    for (const a of menuLinks) {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const link = this;
            const href = this.getAttribute('href');

            for (const li of menuLi) {
                if (li !== this.parentElement)
                li.classList.add('collapsed');
            }
            this.parentElement.classList.add('expand')

            this.parentElement.addEventListener('transitionend', expandElementTransitionEnd);
        })
    }

})
