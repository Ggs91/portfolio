document.addEventListener("DOMContentLoaded", function() {

////////////////////// Setting requestAnimationFrame //////////////////////

  var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

////////////////////// Menu Toggle //////////////////////

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

//////////////////////  Card Overlay ////////////////////// 

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

////////////////////// Parallax Effect Hero Section //////////////////////

window.addEventListener("DOMContentLoaded", scrollLoop, false);

var xScrollPosition;
var yScrollPosition;

const hero = document.getElementById("hero");
const heroBG = document.querySelector(".hero-bg");

function scrollLoop(e) {// requestAnimation frame run this function with 60fps. 60 times per sec setTranslate is called and it update transform3D of the img, and so its position
  xScrollPosition = window.scrollX; //We don't use the scroll event to get the position for perfs reasons, instead we ask for x & y position 60 times per sec
  yScrollPosition = window.scrollY;
  if (isVisible(hero)) { //activate animation only if the hero section appears in the viewport
    setTranslate(0, yScrollPosition * 0.5, heroBG);
  }
  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el){
  //setting translate3d optimize performance. It forces the GPU to handle the animation instead of the CPU
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// return true if a part of the html element appears in the viewport
function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight);
}

////////////////////// Observers //////////////////////

const header = document.querySelector(".primary-header");

// Hero Section Observer
const heroSection = document.querySelector("section#hero");
const heroSectionOptions = {
  root: null,
  rootMargin: "-6% 0px 0px 0px"
};

const heroSectionObserver = new IntersectionObserver(function(entries, heroSectionObserver) {
  entries.forEach(entry => {
    console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("inverse");
    } else {
      header.classList.remove("inverse");
    }
  });

}, heroSectionOptions)

heroSectionObserver.observe(heroSection)

// Footer Observer

const footer = document.getElementById("primary-footer");

const footerOptions = {
  root: null,
  rootMargin: "0px 0px -94% 0px"
};

const footerObserver = new IntersectionObserver(function(entries, footerObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("inverse");
    } else {
      header.classList.remove("inverse");
    }
  });

}, footerOptions)

footerObserver.observe(footer)
