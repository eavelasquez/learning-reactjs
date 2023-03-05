import { EVENTS } from './utils/consts'

const { PUSHSTATE } = EVENTS

export function navigate (href) {
  window.history.pushState({}, '', href)
  const event = new Event(PUSHSTATE)
  window.dispatchEvent(event)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    e.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} target={target} onClick={handleClick} {...props} />
  )
}
