function createCSSLink(href, id) {
  if (document.getElementById(id)) return
  const styles = document.createElement('link')
  styles.setAttribute('id', id)
  styles.setAttribute('rel', 'stylesheet')
  styles.setAttribute('href', href)
  document.head.appendChild(styles)
}

export default createCSSLink
