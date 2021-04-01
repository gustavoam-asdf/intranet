import createCSSLink from './createCSSLink.js'

const renderPage = (page, preloader, pageContainer) => {
  preloader.remove()
  page.styleLink = createCSSLink(
    `/src/css/pages/${page.name}.css`,
    `page-${page.name}`
  )
  pageContainer.innerHTML = page.text
}

export default renderPage
