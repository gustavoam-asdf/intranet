import replaceSlots from '../../functions/replaceSlots.js'

class FormInput extends HTMLDivElement {
  constructor() {
    super()
    this.classList.add('form__group-input')
    this.inputId
    this.type
    this.placeholder
    this.readonly
    this.autocomplete
  }

  render(template) {
    const defTemplate = replaceSlots(this, template)
    this.innerHTML = defTemplate.innerHTML
  }

  get template() {
    const template = document.createElement('div')
    template.innerHTML = `
      <input
        class="form__input"
        type="${this.type}"
        name="${this.inputId}"
        id="${this.inputId}"
        placeholder="${this.placeholder}"
        ${this.readonly ? 'readonly' : ''}
        ${this.autocomplete ? '' : 'autocomplete="off"'}
      />
      <slot class="fas form__check-state" name="icon"></slot>
    `
    return template
  }

  static get observedAttributes() {
    return ['input-id', 'type', 'placeholder', 'readonly', 'autocomplete']
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    const newTemplate = this.template
    const oldInput = this.querySelector('input')
    if (attr === 'type') {
      this.type = newValue
    } else if (attr === 'input-id') {
      this.inputId = newValue
    } else if (attr === 'placeholder') {
      this.placeholder = newValue
    } else if (attr === 'readonly') {
      this.readonly = newValue === 'true' ? true : false
      if (oldInput) newTemplate.querySelector('input').setAttribute('value', oldInput.value)
      if (this.readonly) {
        newTemplate.querySelector('input').setAttribute('readonly', 'true')
      } else {
        newTemplate.querySelector('input').removeAttribute('readonly')
      }
    } else if (attr === 'autocomplete') {
      this.autocomplete = newValue === 'off' ? false : true
    }
    this.render(newTemplate)
  }

  connectedCallback() {
    this.render(this.template)
  }
}

customElements.define('form-input', FormInput, {
  extends: 'div'
})
