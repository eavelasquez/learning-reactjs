import { useContext, useState } from 'react'

import ThemeContext from '../contexts/ThemeContext'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true)
  const theme = useContext(ThemeContext)

  const isDarkText = darkMode ? 'Dark Mode' : 'Light Mode'

  const handleClick = () => setDarkMode(!darkMode)

  return (
    <div className='Header'>
      <h1 style={{ color: theme }}>React Hooks</h1>
      <button type='button' onClick={handleClick}>
        {isDarkText}
      </button>
    </div>
  )
}
