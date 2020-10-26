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
  const buttonLines = document.querySelectorAll('.btn-line');

  // Set Initial State Of Menu
  let showMenu = false;

  menuBtn.addEventListener('click', toggleMenu);
  navItems.forEach(item => item.addEventListener('click', toggleMenu));

  // function markCurrentSection(menuOpen) {
  //   //get anchor name of the current section ID
  //   const currentSectionId = window.location.hash;
  //   //Select the anchor link in the menu with the current value for its href attribute
  //   const currentAnchor = document.querySelector(`a[href="${currentSectionId}"]`);
  //   //Add to it a class of current to style it
  //   menuOpen ? currentAnchor.classList.add("current") : currentAnchor.classList.remove("current");
  // }

  function toggleMenu() {
    if (!showMenu) { //ce qui se passe quand on ouvre le menu
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuPanelRight.classList.add('show');
      menuPanelRight.classList.remove('close'); /////
      menuPanelLeft.classList.add('show');
      menuPanelLeft.classList.remove('close'); /////
      navItems.forEach(item => item.classList.add('show'));
      buttonLines.forEach(item => item.classList.add('show'));
      buttonLines.forEach(item => item.classList.remove('close'));

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
      buttonLines.forEach(item => item.classList.remove('show'));
      buttonLines.forEach(item => item.classList.add('close'));

      // Set Menu State
      showMenu = false;
    }
    // markCurrentSection(showMenu)
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

//Jump to a position a little above of the anchor link to avoir the header to overlap the section's title
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 40);
});

// Parallax Effect Hero Section
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var heroBG = document.querySelector(".hero-bg");

function scrollLoop(e) {// requestAnimation frame run this function with 60fps. 60 times per sec setTranslate is called and it update transform3D of the img, and so its position
  xScrollPosition = window.scrollX; //We don't use the scroll event to get the position for perfs reasons, instead we ask for x & y position 60 times per sec
  yScrollPosition = window.scrollY;
  setTranslate(0, yScrollPosition * -0.3, heroBG);
  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el){
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}
