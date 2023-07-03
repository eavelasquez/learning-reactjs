import React from 'react';

const Button = ({ children, onClick }) => (
  <button
    style={{
      appearance: 'none',
      background: 'none',
      backgroundColor: 'rgba(112, 76, 182, 0.1)',
      border: '2px solid transparent',
      borderRadius: '2px',
      color: 'rgb(112, 76, 182)',
      cursor: 'pointer',
      fontSize: '32px',
      outline: 'none',
      paddingBottom: '4px',
      paddingLeft: '12px',
      paddingRight: '12px',
      transition: 'all 0.15s',
      ':hover': {
        border: '2px solid rgba(112, 76, 182, 0.4)'
      },
      ':active': {
        border: '2px solid rgba(112, 76, 182, 0.2)'
      },
      ':focus': {
        border: '2px solid rgba(112, 76, 182, 0.4)'
      }
    }}
    onClick={onClick}
  >
    {children}
  </button>
)

const Span = ({ children }) => (
  <span
    style={{
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '78px',
      marginTop: '2px',
      paddingLeft: '16px',
      paddingRight: '16px'
    }}
  >
    {children}
  </span>
)

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Span>{count}</Span>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  )
}

export default function App () {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'rgb(112, 76, 182)', fontSize: '48px' }}>React SSR App - Counter</h1>
      <Counter />
    </div>
  )
}
