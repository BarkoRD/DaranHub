import React, { useRef, useEffect } from 'react'
import Header from './Header'
import Amoguss from './Amoguss'
import '../styles/MainLanding.css'
import SocialBox from './SocialBox'
import { MailIcon } from './MailIcon'
import Githubicon from './Githubicon'

export default function MainLanding() {
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
      { threshold: 0.1 },
    )
    if (ref1.current) observer.observe(ref1.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <section ref={ref1} className="mainlandin-section fade-inlanding">
        <div className="landingtexts">
          <div className="welcomemessage">
            <p className="maintext">
              Development <span>T</span>eam
            </p>
            <p className="subtext">for web pages and applications</p>
          </div>
          <div className="contact-text">
            <SocialBox
              svg={<MailIcon />}
              text="contact@daranhub.com"
              svgclass="mailicon"
              elementclass="elpepe"
            />
            <SocialBox
              svg={<Githubicon />}
              text="Github"
              svgclass="mailicon"
              elementclass="elpepe"
            />
          </div>
        </div>
        <Amoguss />
      </section>
    </>
  )
}
