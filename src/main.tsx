import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Route from './routes/Route'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
      <Route />
    </BrowserRouter>
  </React.StrictMode>,
)
