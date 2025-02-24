import { Expressjs, Nodejs, React, Vite } from './Icons'
import { ProjectCard } from './ProjectCard'
import '../styles/ProjectSection.css'

export const ProjectSection = () => {
  return (
    // <h2 className="projects-carousel-text">PROJECTS</h2>
    <section className="projects-pin">
      <section className="projects-sticky">
        <div className="projects-wrap">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </section>
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
