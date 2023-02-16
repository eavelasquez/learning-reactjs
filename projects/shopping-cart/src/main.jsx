import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { FiltersProvider } from './contexts/FiltersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
)
