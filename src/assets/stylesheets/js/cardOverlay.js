document.addEventListener("DOMContentLoaded", function() {
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
