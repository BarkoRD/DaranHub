import React from 'react'
import '../styles/SocialBox.css'

export default function SocialBox({ svg, text, svgclass, elementclass }) {
  return (
    <div className={`sociabox-container ${elementclass}`}>
      <div className={svgclass}>{svg}</div>
      <p>{text}</p>
    </div>
  )
}
