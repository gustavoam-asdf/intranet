const renderPage = (page, preloader, pageContainer) => {
  preloader.remove()
  pageContainer.innerHTML = page.text
}

export default renderPage
