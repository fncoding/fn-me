import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

registerSW()

// debug: log whether running standalone (home-screen) or in browser
if (typeof window !== 'undefined') {
  const mq = window.matchMedia ? window.matchMedia('(display-mode: standalone)') : null
  const isStandalone = Boolean((mq && mq.matches) || (window.navigator && window.navigator.standalone))
  console.log('PWA display-mode standalone?', isStandalone)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
