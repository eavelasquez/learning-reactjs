import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import ThemeContext from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext.Provider value='red'>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
)
