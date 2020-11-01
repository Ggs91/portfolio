////////////////////// Parallax Effect Hero Section //////////////////////
var requestAnimationFrame = window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame;

window.addEventListener("DOMContentLoaded", scrollLoop, false);

var xScrollPosition;
var yScrollPosition;

const hero = document.getElementById("hero");
const heroParallaxBG = document.querySelector(".hero-prallax-bg");
// const heroParallaxBG2 = document.querySelector(".hero-prallax-bg2");

function scrollLoop(e) {// requestAnimation frame run this function with 60fps. 60 times per sec setTranslate is called and it update transform3D of the img, and so its position
  xScrollPosition = window.scrollX; //We don't use the scroll event to get the position for perfs reasons, instead we ask for x & y position 60 times per sec
  yScrollPosition = window.scrollY;
  if (isVisible(hero)) { //activate animation only if the hero section appears in the viewport
    setTranslate(0, yScrollPosition * 0.20, heroParallaxBG);
    // setTranslate(0, yScrollPosition * -0.2, heroParallaxBG2);
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
