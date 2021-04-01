const renderPage = (page, preloader, pageContainer) => {
  preloader.remove()
  document.head.appendChild(page.styleLink)
  pageContainer.innerHTML = page.html
  document.body.appendChild(page.scriptLink)
}

export default renderPage
