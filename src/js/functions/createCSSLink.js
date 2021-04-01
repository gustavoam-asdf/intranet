const createCSSLink = href => {
  const styles = document.createElement('link')
  styles.setAttribute('rel', 'stylesheet')
  styles.setAttribute('href', href)
  return styles
}

export default createCSSLink
