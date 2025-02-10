import React from 'react'
import Logo from './Logo'
import '../styles/Header.css'

export default function Header() {
  return (
    <div className="header-container">
      <p className="header-element">Proyectos</p>
      <p className="header-element">Contratanos</p>
      <div className="header-logo">
        <Logo size="3rem" />
      </div>
      <p className="header-element">Sobre Nosotros</p>
      <p className="header-element">Contactanos</p>
    </div>
  )
}
