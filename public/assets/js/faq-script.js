(function () {
    let pag1 = document.getElementById('pag-1');
    let pag2 = document.getElementById('pag-2');
    let buttons = document.querySelectorAll('.i-button .button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelector('.active-button').classList.remove('active-button');
            e.target.classList.add('active-button');
            let dataClient = e.target.getAttribute('data-button');

            document.querySelector('.clientVisible').classList.remove('clientVisible');

            dataClient === 'yes-client' ? pag2.classList.add('clientVisible') : pag1.classList.add('clientVisible');
        });
    });

}());