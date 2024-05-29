document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const headerBlocks = document.getElementById('headerBlocks');
  
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('open');
      headerBlocks.classList.toggle('open');
    });
  });
  