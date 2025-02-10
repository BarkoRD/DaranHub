import React from 'react'
import '../styles/Logo.css'

export default function Logo({ size = '2rem' }) {
  return (
    <div className="logo-container" style={{ fontSize: size }}>
      Daran <span>H</span>ub.
    </div>
  )
}
