(function () {
    if (document.querySelector('.about')) {
        let circle1 = document.querySelector('.i-img-x-align .circle-13');
        let circle2 = document.querySelector('.i-img-x-7 .circle-13');
        $(document).scroll(() => {
            let scroll = document.documentElement.scrollTop;
            
            if(scroll > 10){
                circle1.style.marginTop = '100%';
                circle2.style.marginTop = '100%';
            }else if(scroll  < 10) {
               circle1.style.marginTop = '0px';
               circle2.style.marginTop = '0%';
                
            }
        })
    }
}());
