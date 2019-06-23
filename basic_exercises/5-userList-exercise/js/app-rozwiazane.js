document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputName = form.querySelector('input[name="name"]');
        const inputPhone = form.querySelector('input[name="phone"]');

        if (inputName.value !== "" && inputPhone.value !== "") {
            const li = document.createElement('li');
            li.classList.add('user');

            let template = `
                <div class="user-data">
                    <div class="user-name">{{name}}</div>
                    <div class="user-phone">{{phone}}</div>
                </div>
                <button type="button" class="btn user-delete">
                    Usuń
                </button>
            `;
            template = template.replace('{{name}}', inputName.value);
            template = template.replace('{{phone}}', inputPhone.value);

            li.innerHTML = template;

            document.querySelector('.user-list').appendChild(li);

            inputName.value = "";
            inputPhone.value = "";
        }
    });


    document.querySelector('.user-list').addEventListener('click', function(e) {
        if (e.target.parentElement.parentElement.classList.contains('user-list') && e.target.classList.contains('user-delete')) {
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        }
    });

});