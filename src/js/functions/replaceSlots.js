/**
 * Find the nodes slots and replace them with the nodes entered
 * @param {HTMLElement} slotsInserted html writted
 * @param {HTMLElement} template element base model
 * @returns {HTMLElement} template modified
 */

const replaceSlots = (slotsInserted, template) => {
  const slots = template.querySelectorAll('slot')
  if (!slots) return
  slots.forEach(slot => {
    const slotEntered = slotsInserted.querySelector(`[slot="${slot.name}"]`)
    if (slotEntered) {
      slot.getAttributeNames().forEach(attr => {
        if (attr === 'class' || attr === 'name' || attr === 'id') return
        slotEntered.setAttribute(attr, slot.getAttribute(attr))
      })
      slotEntered.className += ` ${slot.className}`
      slot.parentElement.replaceChild(slotEntered, slot)
    }
  })
  return template
}

export default replaceSlots
