const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

console.log(burgerMenu);

if(burgerMenu) {
  burgerMenu.addEventListener('click', function(e) {
    burgerMenu.classList.toggle("_open");
    menu.classList.toggle("_open");
    document.body.classList.toggle("_lock");
  })
}