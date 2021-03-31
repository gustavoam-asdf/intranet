import createCSSLink from '../functions/createCSSLink.js'

class Preloader extends HTMLElement {
  constructor() {
    super()
    createCSSLink('src/css/preloader/preloader.css', 'preloader')
  }

  connectedCallback() {
    this.classList.add('preloader__overlay')
    this.innerHTML = '<div class="preloader"></div>'
  }
}

customElements.define('pre-loader', Preloader)
