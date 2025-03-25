import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'uno.css'
import ToastProvider from './components/Toast/ToastProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
    <App />
    </ToastProvider>
  </StrictMode>,
)
