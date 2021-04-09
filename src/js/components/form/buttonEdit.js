class FormInput extends HTMLButtonElement {
  constructor() {
    super()
    this.classList.add('form__fieldset-edit')
    this.setAttribute('type', 'button')
    this.text
  }

  toogleEditable() {
    const group = this.closest('div[is="form-fieldset"]')
    if (group.getAttribute('editable') === 'true') {
      group.setAttribute('editable', 'false')
      this.querySelector('i').classList.remove('fa-save')
      this.querySelector('i').classList.add('fa-pen-square')
      this.setAttribute('text', 'Editar')
    } else {
      group.setAttribute('editable', 'true')
      this.querySelector('i').classList.remove('fa-pen-square')
      this.querySelector('i').classList.add('fa-save')
      this.setAttribute('text', 'Confirmar')
    }
  }

  get template() {
    const template = document.createElement('div')
    template.innerHTML = `
      <span>${this.text ? this.text : 'Editar'}</span>
      <i class="fa fa-pen-square"></i>
    `
    return template
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'text') {
      this.text = newValue
      this.querySelector('span').textContent = this.text
    }
  }

  connectedCallback() {
    this.innerHTML = this.template.innerHTML
    this.onclick = this.toogleEditable
  }
}

customElements.define('button-edit', FormInput, {
  extends: 'button'
})
