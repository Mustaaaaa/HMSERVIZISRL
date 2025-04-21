import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- importa questo
import './index.css'
import './app.css'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <MainContent />
    </BrowserRouter>
  </StrictMode>
)
