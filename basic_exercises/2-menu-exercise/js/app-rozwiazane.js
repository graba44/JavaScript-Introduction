document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const links = nav.querySelectorAll('.nav-link');

    for (const a of links) {
        a.addEventListener('click', function(e) {
            e.preventDefault();

            const children = this.parentElement.parentElement.children;

            for (const child of children) {
               child.classList.remove('nav-el-active');
            }

            this.parentElement.classList.add('nav-el-active');
        });
    }
});