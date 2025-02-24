import { Expressjs, Nodejs, React, Vite } from './Icons'
import { ProjectCard } from './ProjectCard'
import '../styles/ProjectSection.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const ProjectSection = () => {
  return (
    // <h2 className="projects-carousel-text">PROJECTS</h2>
    // <section className="projects-pin">
    //   <div className="projects-sticky">
    //     <div className="projects-wrap">
    //       {projects.map((project, index) => (
    //         <ProjectCard key={index} project={project} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

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
      className="projects-slider"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const projects = [
  {
    logo: '/darangetLogo.png',
    image: '/daranget.png',
    title: 'DaranGET',
    date: '02/2024 - actualidad',
    description:
      'DaranGET gets the video and audio of your link and allows you to download it easily',
    skills: [Vite, Expressjs, React, Nodejs]
  },
  {
    logo: '/darangetLogo.png',
    image: '/daranget.png',
    title: 'DaranGET2',
    date: '02/2024 - actualidad',
    description:
      'DaranGET gets the video and audio of your link and allows you to download it easily',
    skills: [Vite, Expressjs, React, Nodejs]
  },
  {
    logo: '/darangetLogo.png',
    image: '/daranget.png',
    title: 'DaranGET3',
    date: '02/2024 - actualidad',
    description:
      'DaranGET gets the video and audio of your link and allows you to download it easily',
    skills: [Vite, Expressjs, React, Nodejs]
  }
]
