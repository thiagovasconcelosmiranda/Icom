(function () {
    if (document.querySelector('.home')) {

        function slideHeader() {
            let sliderCount = document.querySelectorAll(' .carousel-items .carousel-item').length
            document.querySelector('.carousel-items').style.width = `calc(100vw * ${sliderCount})`;
            let sliders = document.querySelector('.carousel-items');
            let buttonLeft = document.querySelector('.button-left-header');
            let buttonRight = document.querySelector('.button-right-header');
            let circles = document.querySelector('.circles');
            let atual = 0;
            let roll = true;

            for (let i = 0; i < sliderCount; i++) {
                let div = document.createElement('div');
                div.id = i;
                div.classList.add('circle');
                circles.appendChild(div);
            }

            document.getElementById(0).classList.add('circleActive');
            let pos = document.querySelectorAll('.circles div');

            for (let i = 0; i < pos.length; i++) {
                pos[i].addEventListener('click', () => {
                    atual = pos[i].id;
                    slide();
                });
            }

            buttonLeft.addEventListener('click', () => {
                atual--;
                slide();
                roll = false;
            });

            buttonRight.addEventListener('click', () => {
                atual++;
                slide();
                roll = false;
            });

            function slide() {

                if (atual == sliderCount) {
                    atual = 0;
                } else if (atual < 0) {
                    atual = sliderCount - 1;
                }

                if (document.querySelector('.circleActive')) {
                    document.querySelector('.circleActive').classList.remove('circleActive');
                    let sliderWidth = document.querySelector('.carousel-item').clientWidth;
                    sliders.style.marginLeft = -sliderWidth * atual + `px`;
                    document.getElementById(atual).classList.add('circleActive');
                }

            }

            setInterval(() => {
                if (roll) {
                    atual++;
                    slide();
                } else {
                    roll = true;
                }
            }, 10000);
        }

        function sliderSoon() {
            let slideCount = document.querySelectorAll('.carousel-soon-items .carousel-soon-item').length;
            let slides = document.querySelector('.carousel-soon-items')
            slides.style.width = `calc(100vw * ${slideCount})`;
            let slideWidth = document.querySelector('.carousel-soon-item').clientWidth;
            let buttonLeftSoon = document.querySelector('.button-left-soon');
            let buttonRightSoon = document.querySelector('.button-right-soon');
            let atual = 0;
            let rollSoon = true;


            buttonLeftSoon.addEventListener('click', () => {
                atual--;
                slideSoon();
                rollSoon = false;
            });

            buttonRightSoon.addEventListener('click', () => {
                atual++;
                rollSoon = false;
                slideSoon();
            });

            function slideSoon() {
                animationSlideSoon();
                if (atual == slideCount) {
                    atual = 0;
                } else if (atual < 0) {
                    atual = slideCount - 1;
                }

                slides.style.marginLeft = -slideWidth * atual + 'px';
            }

            function animationSlideSoon() {
                if (atual >= 0 && atual < slideCount) {
                    slides.style.transition = ' 1s';
                } else if (atual === slideCount) {
                    slides.style.transition = ' none';
                }
            }

            setInterval(() => {
                if (rollSoon) {
                    atual++;
                    slideSoon();
                } else {
                    rollSoon = true;
                }
            }, 5000);
        }

        function sliderCompany() {
            let sliderCount = document.querySelectorAll('.carousel-company-items .carousel-company-item').length;
            document.querySelector('.carousel-company-items').style.width = `calc(100vw * ${sliderCount})`;
            let sliders = document.querySelector('.carousel-company-items');
            let slideWidth = document.querySelector('.carousel-company-item').clientWidth;
            let buttonCompanyLeft = document.querySelector('.button-company-left');
            let buttonCompanyRight = document.querySelector('.button-company-right');
            let circles = document.querySelector('.circles-company');
            let atual = 0;
            let roll = true;


            for (let i = 0; i < sliderCount; i++) {
                let div = document.createElement('div')
                div.classList.add('circle');
                div.id = 'company-' + i;
                circles.appendChild(div);
            }

            let pos = document.querySelectorAll('.circle');
            document.getElementById("company-" + 0).classList.add('circleActiveCompany');

            for (let i = 0; i < pos.length; i++) {
                pos[i].addEventListener('click', () => {
                    let num = pos[i].id.split('-');
                    atual = num[1];
                    slide();
                });
            }

            buttonCompanyLeft.addEventListener('click', () => {
                atual--;
                roll = false;
                slide();
            });

            buttonCompanyRight.addEventListener('click', () => {
                atual++;
                roll = false;
                slide();
            });
            animationButtonSlide();

            function animationButtonSlide() {

            }

            function slide() {
                if (atual == sliderCount) {
                    atual = 0;
                } else if (atual < 0) {
                    atual = sliderCount - 1;
                }
                document.querySelector('.circleActiveCompany').classList.remove('circleActiveCompany');
                sliders.style.marginLeft = -slideWidth * atual + 'px';
                document.getElementById("company-" + atual).classList.add('circleActiveCompany');
            }

            setInterval(() => {
                if (roll) {
                    atual++;
                    slide();
                } else {
                    roll = true;
                }
            }, 10000);
        }

        slideHeader();
        sliderSoon();
        sliderCompany();
    }
}());


