const menuBtn = document.querySelector('.menu-btn'),
  navWrapper = document.querySelector('.nav__wrapper'),
  navList = document.querySelector('.nav__list'),
  navItems = document.querySelectorAll('.nav__item'),
  hamburger = document.querySelector('.menu-btn__burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  // if (!showMenu) {
  //   hamburger.classList.add('open');
  //   navWrapper.classList.add('open');
  //   navList.classList.add('open');
  // } else {
  //   hamburger.classList.remove('open');
  //   navWrapper.classList.remove('open');
  //   navList.classList.remove('open');
  // }
  // showMenu = !showMenu;
  hamburger.classList.toggle('open');
  navWrapper.classList.toggle('open');
  navList.classList.toggle('open');
  navItems.forEach(navItem => {
    navItem.classList.toggle('open');
  });
  showMenu = !showMenu;
}