import { EVENTS } from './utils/consts'

const { PUSHSTATE } = EVENTS

export function navigate (href) {
  window.history.pushState({}, '', href)
  const event = new Event(PUSHSTATE)
  window.dispatchEvent(event)
}
