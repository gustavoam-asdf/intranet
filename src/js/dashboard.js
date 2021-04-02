import './components/preloader.js'
import getPage from './functions/getPage.js'
import renderPage from './functions/renderPage.js'

const preloader = document.createElement('pre-loader')
let currentPage = {
  name: 'dashboard',
  html: '',
  styleLink: {},
  scriptLink: {}
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
    document.querySelector('.main').appendChild(preloader)
    highlightItemActive($pageLink, $pagesLinks, 'sideitem-active')
    if (currentPage.name !== $pageLink.getAttribute('href').replace('#', '')) {
      setTimeout(async () => {
          currentPage.styleLink.remove()
          currentPage.scriptLink.remove()
        }
        const pageLink = $pageLink.getAttribute('href').replace('#', '')
        currentPage = await getPage(pageLink)
        renderPage(currentPage, preloader, document.getElementById('pages'))
    } else {
      preloader.remove()
      alert('Estas aquí')
      /**
       * Future code, new modal to inform user
       */
    }
  })
)

// Check if location have and a sitelink
addEventListener('DOMContentLoaded', evt => {
  if (location.href.indexOf('#') === -1) return
  const pageLink = location.href.slice(location.href.indexOf('#'))
  document.querySelectorAll('.sideitem a').forEach(link => {
    if (link.getAttribute('href') === pageLink) link.click()
  })
})
