import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SkillsModal } from './SkillsModal'
import { Skills } from '../constants'
import { createBlendy } from 'blendy'
import { Carousel } from './Carousel'

export const SkillsSection = () => {
  const blendy = useRef(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    blendy.current = createBlendy({ animation: 'spring' })
  }, [])

  const openModal = () => {
    setShowModal(true)
    blendy.current?.toggle('skills')
  }

  const closeModal = () => {
    blendy.current?.untoggle('skills', () => setShowModal(false))
  }

  return (
    <div>
      {showModal &&
        createPortal(
          <SkillsModal onClose={closeModal} skills={Skills}></SkillsModal>,
          document.body,
        )}
      <Carousel images={Skills} onOpen={openModal} />
    </div>
  )
}
