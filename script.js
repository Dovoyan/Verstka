let closeButton = document.querySelector('.mobil_close');

closeButton.addEventListener('click', () => {
  let mobilWindow = document.querySelector('.mobil_menu')
  mobilWindow.classList.add('mobil_menu-display_none')
})


let openButton = document.querySelector('.mobil_menu_icon');

openButton.addEventListener('click', () => {
  let mobilWindow = document.querySelector('.mobil_menu')
  mobilWindow.classList.remove('mobil_menu-display_none')
})