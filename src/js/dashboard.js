import './components/preloader.js'
import getPage from './functions/getPage.js'
import renderPage from './functions/renderPage.js'

let currentPage = {
  name: 'dashboard',
  text: '',
  styleLink: {}
}

// Expand and collapse sidemenu
document.getElementById('sidemenu__button').addEventListener('click', evt => {
  evt.target.parentElement.parentElement.classList.toggle('sidemenu-collapsed')
  evt.target.parentElement.parentElement.parentElement.classList.toggle(
    'dashboard__container-collapsed'
  )
})

const highlightItemActive = (itemClicked, items, className) => {
  items.forEach(item => item.parentElement.classList.remove(className))
  itemClicked.parentElement.classList.add(className)
}

document.querySelectorAll('.sideitem a').forEach(($pageLink, i, $pagesLinks) =>
  $pageLink.addEventListener('click', async () => {
    const preloader = document.createElement('pre-loader')
    document.querySelector('.main').appendChild(preloader)
    highlightItemActive($pageLink, $pagesLinks, 'sideitem-active')
    if (currentPage.name !== $pageLink.getAttribute('href').replace('#', '')) {
      // setTimeout(async () => {
      if (currentPage.name !== 'dashboard') currentPage.styleLink.remove()
      const pageLink = $pageLink.getAttribute('href').replace('#', '')
      currentPage = await getPage(pageLink)
      renderPage(currentPage, preloader, document.getElementById('pages'))
      // }, Math.random() * 1000)
    } else {
      preloader.remove()

      alert('Estas aquí')
      /**
       * Future code, new modal to inform user
       */
    }
  })
)
