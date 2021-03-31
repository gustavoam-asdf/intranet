import './components/preloader.js'

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

document.querySelectorAll('.sideitem a').forEach((pageLink, i, pagesLinks) =>
  pageLink.addEventListener('click', evt => {
    evt.preventDefault()
    const preloader = document.createElement('pre-loader')
    document.querySelector('.main').appendChild(preloader)
    setTimeout(() => {
      preloader.remove()
    }, 1000)

    highlightItemActive(pageLink, pagesLinks, 'sideitem-active')
  })
)
