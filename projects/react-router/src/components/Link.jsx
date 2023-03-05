import { BUTTONS } from '../utils/consts'
import { EVENTS } from './utils/consts'

const { PRIMARY } = BUTTONS
const { PUSHSTATE } = EVENTS

export function navigate (href) {
  window.history.pushState({}, '', href)
  const event = new Event(PUSHSTATE)
  window.dispatchEvent(event)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === PRIMARY
    const isModifiedEvent = !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      e.preventDefault()
      navigate(to)
    }
  }

  return (
    <a href={to} target={target} onClick={handleClick} {...props} />
  )
}
