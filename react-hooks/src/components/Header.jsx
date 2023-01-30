import { useState } from 'react'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true)

  const isDarkText = darkMode ? 'Dark Mode' : 'Light Mode'

  const handleClick = () => setDarkMode(!darkMode)

  return (
    <div className='Header'>
      <h1>React Hooks</h1>
      <button type='button' onClick={handleClick}>
        {isDarkText}
      </button>
    </div>
  )
}
