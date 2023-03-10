function createElement (type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (
        typeof child === 'object'
          ? child
          : createTextElement(child)
      ))
    }
  }
}

function createTextElement (text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function createDom (fiber) {
  const dom = fiber.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(fiber.type)

  const isProperty = (key) => key !== 'children'
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = fiber.props[name]
    })

  return dom
}

function commitWork (fiber) {
  if (!fiber) return
  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

function commitRoot () {
  commitWork(wipRoot.child)
  wipRoot = null
}

function render (element, container) {
  // set next unit of work
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    }
  }
  nextUnitOfWork = wipRoot
}

let wipRoot = null
let nextUnitOfWork = null

function performUnitOfWork (fiber) {
  // add dom node
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  // create new fibers
  const elements = fiber.props.children
  let index = 0
  let prevSibling = null

  while (index < elements.length) {
    const { type, props } = elements[index]

    const newFiber = {
      type,
      props,
      parent: fiber,
      dom: null
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index += 1
  }

  // return next unit of work
  if (fiber.child) {
    return fiber.child
  }

  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

function requestIdleCallback (workLoop) { }

function workLoop (deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

export default {
  createElement,
  createTextElement,
  render
}
