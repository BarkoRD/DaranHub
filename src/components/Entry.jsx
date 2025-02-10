import React, { useState, useEffect } from 'react'
import '../styles/Entry.css'
import Logo from './Logo'

export const Entry = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }, [])

  return (
    <div className={`overlay ${show ? 'fade-in' : 'fade-out'}`}>
      <h1 className="text">
        Bienvenido a <Logo />
      </h1>
    </div>
  )
}
