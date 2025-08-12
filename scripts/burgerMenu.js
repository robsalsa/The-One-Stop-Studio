const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const closeButton=document.querySelector('.close-button');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.classList.remove('open');
});
