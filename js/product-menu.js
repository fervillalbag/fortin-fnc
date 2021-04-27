
const productNavigation = document.querySelector('.products-main__navigation')
const productNavigationButtonOpen = document.querySelector('#productActionOpen')
// const productNavigationButtonClose = document.querySelector('#productActionClose')

productNavigationButtonOpen.addEventListener('click', () => {
  productNavigation.classList.add('active')
})

productNavigation.addEventListener('click', () => {
  productNavigation.classList.remove('active')
})