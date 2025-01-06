import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
)
