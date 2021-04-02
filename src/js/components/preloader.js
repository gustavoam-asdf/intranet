import createCSSLink from '../functions/createCSSLink.js'

class Preloader extends HTMLElement {
  constructor() {
    super()
    this.styleLink = createCSSLink('/intranet/src/css/preloader/preloader.css')
    document.head.appendChild(this.styleLink)
  }

  connectedCallback() {
    this.classList.add('preloader__overlay')
    this.innerHTML = '<div class="preloader"></div>'
  }
}

customElements.define('pre-loader', Preloader)
