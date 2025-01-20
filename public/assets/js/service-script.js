(function () {
    if (document.querySelector('.row-i-service-cart')) {
        document.querySelectorAll('.service-cart-doubts-i').forEach(item => {
            let click = item.querySelector('i');

            click.addEventListener('click', () => {
                let description = item.querySelector('.doubts-description');

                click.classList.remove('fa-plus');
                click.innerHTML = "-";
                click.style.fontSize = "50px";

                if (description.style.marginTop == '0%') {
                    item.style.backgroundColor = 'rgb(241, 241, 241)';
                    description.style.marginTop = '-200%';
                    click.classList.add('fa-plus');
                    click.style = "";
                    click.innerHTML = "";

                } else {
                    item.style.backgroundColor = '#fff';
                    description.style.marginTop = '0%';

                    click.classList.remove('fa-plus');
                    click.innerHTML = "-";
                    click.style.fontSize = "50px";
                }
            });
        });
    }
}());