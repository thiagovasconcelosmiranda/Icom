(function () {
    let button = document.querySelector('.button-form');
    button.addEventListener('click', () => {
        verifyInputsError();
    });

    function verifyInputsError() {
        let count = 0;
        let countInput = 0;

        document.querySelectorAll('.contact-col form input, .contact-col form select').forEach(item => {
            let id = item.id;

            if (id) {
                countInput++;
                if (item.value) {
                    document.getElementById(id).style = "";
                    document.getElementById('msg-' + id).style.visibility = "hidden";
                    count++;
                } else {
                    document.getElementById(id).style.border = "1px solid red";
                    document.getElementById('msg-' + id).style.visibility = "visible";
                }
            }
        });

        if (count === countInput) {
            button.type = "Submit";
        }
    }
}());
