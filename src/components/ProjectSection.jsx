import { ProjectCard } from './ProjectCard'
import '../styles/ProjectSection.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { TextCarousel } from './TextCarousel'

import { projects } from '../constants'

export const ProjectSection = () => {
  return (
    <section className='projects-section'>
      <TextCarousel />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={(s) => {
          console.log(s.realIndex, s.activeIndex)
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
