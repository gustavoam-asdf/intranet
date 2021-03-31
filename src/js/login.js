const regExps = {
  user: /^[0-9]{10}$/,
  password: /^.{4,12}$/
}

const verifier = {
  user: false,
  password: false,
  parent: false
}

const add = 'add',
  remove = 'remove'

/**
 * Add or remove a class from the selector element
 * @param {String} selector element selector
 * @param {String} action add or remove class
 * @param {String} className class to modify
 * @param {Boolean} id by default is true and use getElementById and when is false use querySelector
 */
const modifyClass = (selector, action, className, id = true) => {
  if (id) {
    if (action === 'add') {
      document.getElementById(selector).classList.add(className)
    } else if (action === 'remove') {
      document.getElementById(selector).classList.remove(className)
    } else {
      throw new Error('action not acepted')
    }
  } else {
    if (action === 'add') {
      document.querySelector(selector).classList.add(className)
    } else if (action === 'remove') {
      document.querySelector(selector).classList.remove(className)
    } else {
      throw new Error('action not acepted')
    }
  }
}

const drawInfo = (test, $input) => {
  if (test) {
    modifyClass(`group__${$input.id}`, remove, 'form__group-incorrect')
    modifyClass(`group__${$input.id}`, add, 'form__group-correct')
    modifyClass(`#group__${$input.id} i`, remove, 'fa-times-circle', false)
    modifyClass(`#group__${$input.id} i`, add, 'fa-check-circle', false)
    modifyClass(
      `#group__${$input.id} .form__input-error`,
      remove,
      'form__input-error-active',
      false
    )
  } else {
    modifyClass(`group__${$input.id}`, remove, 'form__group-correct')
    modifyClass(`group__${$input.id}`, add, 'form__group-incorrect')
    modifyClass(`#group__${$input.id} i`, remove, 'fa-check-circle', false)
    modifyClass(`#group__${$input.id} i`, add, 'fa-times-circle', false)
    modifyClass(
      `#group__${$input.id} .form__input-error`,
      add,
      'form__input-error-active',
      false
    )
  }
  return test
}

const checkInput = evt => {
  verifier[evt.target.id] = drawInfo(
    regExps[evt.target.id].test(evt.target.value),
    evt.target
  )
}

const loginHandler = $login => {
  $login.user.addEventListener('keyup', checkInput)
  $login.user.addEventListener('blur', checkInput)

  $login.password.addEventListener('keyup', checkInput)
  $login.password.addEventListener('blur', checkInput)

  $login.addEventListener('submit', evt => {
    evt.preventDefault()
    verifier.parent = $login.parent.checked
    if (verifier.user && verifier.password) {
      $login.reset()
      modifyClass('form__message', remove, 'form__message-active')
      document
        .querySelectorAll('.form__group')
        .forEach(group => group.classList.remove('form__group-correct'))
      location.href = '/dashboard.html'
    } else {
      modifyClass('form__message', add, 'form__message-active')
    }
  })
}

loginHandler(document.getElementById('login'))
