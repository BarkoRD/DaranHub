import React, { useRef, useState, useEffect } from 'react'
import Amoguss from './Amoguss'
import SocialBox from './SocialBox'
import SendSvg from '../assets/SendSvg'
import '../styles/FormSection.css'
import { MailIcon } from './MailIcon'
import Githubicon from './Githubicon'

export default function FormSection() {
  const textareaRef = useRef(null)
  const ref1 = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      },
      { threshold: 0.2 },
    )
    if (ref1.current) observer.observe(ref1.current)
    return () => observer.disconnect()
  }, [])

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = '10px' // Reinicia altura mínima
      textarea.style.height = `${textarea.scrollHeight}px` // Ajusta según el contenido
    }
  }

  return (
    <>
      <div ref={ref1} className="formsection-container fade-inform">
        <div className="form-container">
          <p>Contactanos</p>
          <div className="userinformationinputs">
            <input type="text" className="inputName" placeholder="Name" />
            <input type="text" className="inputEmail" placeholder="Email" />
          </div>
          <textarea
            ref={textareaRef}
            required
            onInput={adjustHeight}
            minLength="20"
            name="message"
            className="message"
            placeholder="Message"
          ></textarea>
          <button>
            <SendSvg />
          </button>
          <SocialBox
            svg={<MailIcon />}
            text="contact@daranhub.com"
            svgclass="mailicon"
            elementclass="elpepe socialboxform"
          />
          <SocialBox
            svg={<Githubicon />}
            text="Github"
            svgclass="mailicon"
            elementclass="elpepe socialboxform"
          />
        </div>
        <Amoguss />
      </div>
    </>
  )
}
