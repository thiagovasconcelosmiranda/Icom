(function () {

    if (document.querySelector('.home')) {
        document.addEventListener('scroll', () => {
            let num = document.documentElement;
            scrollNavbar(num);
            scrollAnimationHeader(num);
            scrollAnimationMainInfo(num);
            scrollAnimationMainCompany(num);
        });

        function scrollNavbar(num) {
            let ul = document.querySelector('#navbar').style;

            if (num.scrollTop > 0) {
                ul.height = '60px';
            } else {
                ul.height = '80px';
            }
        }

        function scrollAnimationHeader(num) {
            let circleBue = document.querySelector('#circle_blue').style;
            let circle_yellow = document.querySelector('#circle_yellow').style;
            let circleRose = document.querySelector('#circle-rose').style;

            if (num.scrollTop > 0) {
                circleBue.marginTop = '120%';
                circle_yellow.marginTop = '130%';
                circleRose.marginTop = '80%';
            } else if (num.scrollTop < 40) {
                circleBue.marginTop = '50%';
                circle_yellow.marginTop = '0%';
                circleRose.marginTop = '60%';
            }
        }

        function scrollAnimationMainInfo(num) {
            let circle13 = document.querySelector('#circle-1-3').style;
            let circle23 = document.querySelector('#circle-2-3').style;

            if (num.scrollTop > 1383) {
                circle13.marginTop = '40%';
                circle23.marginTop = '30%';

            } else if (num.scrollTop < 2007) {
                circle13.marginTop = '0%';
                circle23.marginTop = '-10%';
            }
        }

        function scrollAnimationMainCompany(num) {
            let movementNine = document.querySelector('#movementNine').style;
            let movementLeven = document.querySelector('#movementLeven').style;
            let movementTen = document.querySelector('#movementTen').style;
            let movementEight = document.querySelector('#movementEight').style;

            if (num.scrollTop > 3177) {
                movementNine.marginLeft = '30%';
                movementLeven.marginLeft = '20%';
                movementTen.marginLeft = '-5%';
                movementEight.marginLeft = '-10%';
            } else if (num.scrollTop < 3792) {
                movementNine.marginLeft = '0%';
                movementLeven.marginLeft = '0%';
                movementTen.marginLeft = '20%';
                movementEight.marginLeft = '0%';

            }
        }
    }
}())