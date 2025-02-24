import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

try{

  createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
  </StrictMode>,
)
} catch (e) {
  console.error('Dos pedazos de tetas como dos putisimos barcos, que se mueven de manera discontinua y ademas no simetrica, es decir, si sube la teta izquiera baja la derecha, o sea, es como que respiran las tetas')
}