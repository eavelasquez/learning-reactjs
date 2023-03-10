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

function render (element, container) {
  // set next unit of work
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element]
    }
  }
}

export default {
  createElement,
  createTextElement,
  render
}
