import '../styles/ProjectCard.css'

export const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <ProjectHeader
        logo={project.logo}
        title={project.title}
        date={project.date}
      />
      <ProjectBody
        image={project.image}
        title={project.title}
        description={project.description}
        skills={project.skills}
      />
    </article>
  )
}

const ProjectHeader = ({ logo, title, date }) => {
  return (
    <div className="project-card__header">
      <img src={logo} alt={title} />
      <div>
        <h3>
          Explore <strong>{title}</strong>
          <svg
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5058 7.40982L2.25544 0.325288C1.97497 0.0862306 1.614 -0.0285598 1.25156 0.00605419C0.889127 0.0406682 0.554774 0.221866 0.321719 0.509967C0.0886643 0.798068 -0.0240971 1.16959 0.00812749 1.54318C0.0403521 1.91677 0.214936 2.26198 0.493649 2.50321L7.47639 8.49883L0.493649 14.4944C0.213862 14.7353 0.0383132 15.0808 0.00556476 15.455C-0.0271837 15.8292 0.0855471 16.2014 0.318993 16.49C0.552439 16.7786 0.887508 16.9599 1.2506 16.9941C1.61369 17.0283 1.9751 16.9126 2.25544 16.6724L10.5058 9.58774C10.6605 9.45456 10.785 9.28801 10.8704 9.09985C10.9557 8.91168 11 8.7065 11 8.49878C11 8.29106 10.9557 8.08587 10.8704 7.89771C10.785 7.70955 10.6605 7.54299 10.5058 7.40982Z"
              fill="white"
            />
          </svg>
        </h3>
        <div>
          <p>{date}</p>
          {/* AQUI VA EL ENLACE A GITHUB */}
        </div>
      </div>
    </div>
  )
}

const ProjectBody = ({ image, title, description, skills }) => {
  return (
    <div className="project-card__body">
      <img src={image} alt={title} />
      <div className="project-card__body-info">
        <p>{description}</p>
        <div className="project-card__body-skills">
          {skills.map((SkillIcon, index) => (
            <SkillIcon key={index} width="30" height="30" />
          ))}
        </div>
      </div>
    </div>
  )
}
