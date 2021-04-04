const renderPage = (page, preloader, pageContainer) => {
  document.head.appendChild(page.styleLink)
  document.body.appendChild(page.scriptLink)
  pageContainer.innerHTML = page.html
  preloader.remove()
}

export default renderPage
