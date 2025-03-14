import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import { ProjectCard } from './ProjectCard'
import { TextCarousel } from './TextCarousel'

import { projects } from '../constants'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/ProjectSection.css'

export const ProjectSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const rect = section.getBoundingClientRect()

      if (
        (rect.top >= -100 && rect.top <= 100) ||
        (rect.bottom - windowHeight >= -100 &&
          rect.bottom - windowHeight <= 100)
      ) {
        setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          })
        }, 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="projects-section" ref={sectionRef} id="projects">
      <TextCarousel />
      <Swiper
        loop={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        rewind={true}
        modules={[Pagination, Autoplay]}
        onSlideChange={(s) => {
          const { bgc, dotBgc } = projects[s.realIndex]
          const ps = document.getElementById('projects')
          ps.style.setProperty('--bgc', bgc)
          ps.style.setProperty('--swiper-pagination-color', dotBgc)
          ps.style.setProperty('swiper-pagination-bullet-inactive-color', dotBgc)
          ps.style.setProperty(
            '--text-carousel-color',
            bgc
          )
        }}
        className="projects-slider"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
