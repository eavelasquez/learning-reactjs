function createElement (type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
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

function render (element, container) {
  const dom = document.createElement(element.type)
  container.appendChild(dom)
}

export default {
  createElement,
  createTextElement,
  render
}
