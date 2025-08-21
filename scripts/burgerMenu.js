// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');
// const closeButton=document.querySelector('.close-button');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('open');
//   burger.classList.toggle('open');
// });

// closeButton.addEventListener('click', () => {
//   navLinks.classList.remove('open');
//   burger.classList.remove('open');
// });



const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

document.querySelectorAll(".burger-item").forEach(n => {
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    burgerMenu.classList.remove("active");
  });
});