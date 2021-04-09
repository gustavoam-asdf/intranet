import replaceSlots from '../../functions/replaceSlots.js'

class FormFieldset extends HTMLDivElement {
  constructor() {
    super()
    this.classList.add('form__fieldset')
    this.fieldsetId
    this.editable
  }

  render() {
    const template = replaceSlots(this, this.template)
    if (this.querySelector('header')) {
      this.replaceChild(template, this.querySelector('header'))
    } else {
      this.prepend(template)
    }
  }

  get template() {
    const template = document.createElement('header')
    template.classList.add('form__fieldset-header')
    template.innerHTML = `
      <h3 class="form__fieldset-title">${this.title}</h3>
      <slot id="btn__${this.fieldsetId}" name="editable"></slot>
    `
    return template
  }

  static get observedAttributes() {
    return ['fieldset-id', 'editable', 'title']
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'fieldset-id') {
      this.fieldsetId = newValue
      this.render()
    } else if (attr === 'title') {
      this.render()
    } else if (attr === 'editable') {
      this.editable = newValue === 'true' ? true : false
      this.editable
        ? this.querySelectorAll('div[is="form-input"]').forEach(input =>
            input.setAttribute('readonly', 'false')
          )
        : this.querySelectorAll('div[is="form-input"]').forEach(input =>
            input.setAttribute('readonly', 'true')
          )
    }
  }

  connectedCallback() {
    this.render()
  }
}
customElements.define('form-fieldset', FormFieldset, {
  extends: 'div'
})
