import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { BgColorProvider } from "./context/BgColorContext";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <BgColorProvider>
    <App/>
    </BgColorProvider>
  </BrowserRouter>
  </StrictMode>
)
