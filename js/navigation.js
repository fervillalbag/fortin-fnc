
const barsButton = document.querySelector('.menu-navigation__bars')
const menuNavigation = document.querySelector('.menu-navigation')

barsButton.addEventListener('click', () => {
  if (!menuNavigation.classList.contains('active')) {
    barsButton.innerHTML = '<i class="fas fa-times"></i>'
  } else {
    barsButton.innerHTML = '<i class="fas fa-bars"></i>'
  }
  menuNavigation.classList.toggle('active')
})