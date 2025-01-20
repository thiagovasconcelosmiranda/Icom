(function () {
  if (document.getElementById('navbar')) {
    var navbar = document.querySelector('.navbar-i');
    var optionClick = document.querySelector('.option');
    optionClick.addEventListener('click', () => {

      if (navbar.classList.contains('navbar-vision')) {
        navbar.classList.remove('navbar-vision');
      } else {
        navbar.classList.add('navbar-vision');
      }
    });
  }
}());
