import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from "../src/components/theme-provider"
import { Toaster } from "../src/components/ui/sonner"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <Toaster position="bottom-right" richColors closeButton expand={true} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
