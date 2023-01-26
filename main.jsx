import './style.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { App } from './src/App.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

