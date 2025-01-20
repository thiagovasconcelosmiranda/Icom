(function () {
    let cookies = document.getElementById('cookies');
    let refuse = document.getElementById('refuse');
    let accept = document.getElementById('accept');

    refuse.addEventListener('click', () => { 
        localStorage.lgpd = "not";
        cookies.style.display = "none";
       
    });
    accept.addEventListener('click', () => {
        localStorage.lgpd = "yes";
        cookies.style.display = "none";
    });
}());

(localStorage.lgpd == 'yes' ? cookies.style.display = "none": cookies.style.display = "flex");