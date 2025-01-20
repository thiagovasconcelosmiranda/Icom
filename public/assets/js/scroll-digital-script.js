(function () {
    if (document.querySelector('.digital')) {
        $(document).scroll(() => {
            let scroll = document.documentElement.scrollTop;
            scrollTopAnimation(scroll);
            scrollTopQuiteAnimation(scroll);
        });
    }

    function scrollTopAnimation(scroll) {
        for (let i = 1; i < 4; i++) {
            let circle = document.getElementById(`digital-circle-${i}`);
            if (scroll > 0) {
                circle.style.marginTop = "110%";
            } else if (scroll < 20) {
                circle.style.marginTop = "50%";
            }
        }
    }

    function scrollTopQuiteAnimation(scroll) {
        for (let i = 4; i < 8; i++) {
            let circle = document.getElementById(`digital-circle-${i}`);

            if (scroll > 1537.77783203125) {
                circle.style.marginLeft = "10%";
            } else if (scroll < 1537.77783203125) {
                circle.style.marginLeft = "0%";
            }
        }
    }
}());

