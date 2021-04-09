const renderPage = (page, preloader, pageContainer) => {
  pageContainer.innerHTML = page.html
  document.body.append(page.scriptLink)
  preloader.remove()
}

export default renderPage
