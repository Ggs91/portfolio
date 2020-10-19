document.addEventListener("DOMContentLoaded", function() {
  //Setting requestAnimationFrame
  var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
  var xScrollPosition;
  var yScrollPosition;

  // Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuPanelRight = document.querySelector('.menu-panel-right');
  const menuPanelLeft = document.querySelector('.menu-panel-left');
  const navItems = document.querySelectorAll('.nav-item');

  // Set Initial State Of Menu
  let showMenu = false;

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuPanelRight.classList.add('show');
      menuPanelRight.classList.remove('close'); /////
      menuPanelLeft.classList.add('show');
      menuPanelLeft.classList.remove('close'); /////

      navItems.forEach(item => item.classList.add('show'));

      // Set Menu State
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuPanelRight.classList.remove('show');
      menuPanelRight.classList.add('close'); /////
      menuPanelLeft.classList.remove('show');
      menuPanelLeft.classList.add('close'); /////
      navItems.forEach(item => item.classList.remove('show'));

      // Set Menu State
      showMenu = false;
    }
  }

//Card Overlay

  const cardOverlays = document.querySelectorAll('.card-overlay');
  const cardImageWrappers = document.querySelectorAll(".card-img-wrapper");
  const cardTitles = document.querySelectorAll(".card-title");
  const closeDetailsButtons = document.querySelectorAll('.close-overlay');

  for (let i = 0; i < cardOverlays.length; i++) {
    cardTitles[i].addEventListener("click", ()=> cardOverlays[i].classList.add('show'));
    cardImageWrappers[i].addEventListener("click", ()=> cardOverlays[i].classList.add('show'));
    closeDetailsButtons[i].addEventListener("click", ()=> cardOverlays[i].classList.remove('show'));
  }
});

// Parallax Effect Hero Section
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var heroBG = document.getElementsByClassName("hero-bg")[0];

function scrollLoop(e) {// requestAnimation frame fait this function fction 60fps. 60 times per sec setTranslate is called and it update transform3D of the img, and so its position
  xScrollPosition = window.scrollX; //We don't use the scroll event to get the position for perfs reasons, instead we ask for x & y position 60 times per sec
  yScrollPosition = window.scrollY;
  setTranslate(0, yScrollPosition * 0.3, heroBG);
  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el){
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}
