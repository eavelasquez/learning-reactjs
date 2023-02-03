import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { App } from './routes/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
