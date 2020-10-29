document.addEventListener("DOMContentLoaded", function() {
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
  }
});
