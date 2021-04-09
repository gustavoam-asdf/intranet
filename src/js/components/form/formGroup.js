import replaceSlots from '../../functions/replaceSlots.js'

class FormGroup extends HTMLDivElement {
  constructor() {
    super()
    this.groupId
    this.inputId
    this.correct
    this.labelName
  }

  render() {
    const template = replaceSlots(this, this.template)
    this.innerHTML = template.innerHTML
  }

  get template() {
    const template = document.createElement('div')
    template.innerHTML = `
      <label for="${this.inputId}" class="form__label">${this.labelName}</label>
      <slot input-id="${this.inputId}" name="input"></slot>
      <slot class="form__input-error" name="error"></slot>  
    `
    return template
  }

  static get observedAttributes() {
    return ['group-id', 'correct', 'label-name']
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    // console.log(`attr: ${attr}, oldValue: ${oldValue}, newValue: ${newValue}`)
    if (attr === 'group-id') {
      this.groupId = newValue
      this.inputId = newValue.replace('group__', '')
    } else if (attr === 'label-name') {
      this.labelName = newValue
    } else if (attr === 'correct') {
      this.correct = newValue === 'true' ? true : false
      if (this.correct) {
        this.classList.remove('form__group-incorrect')
        this.classList.add('form__group-correct')
      } else {
        this.classList.remove('form__group-correct')
        this.classList.add('form__group-incorrect')
      }
    }
  }

  connectedCallback() {
    this.render()
  }
}
customElements.define('form-group', FormGroup, {
  extends: 'div'
})
