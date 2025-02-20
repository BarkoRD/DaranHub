import '../styles/SkillsModal.css'

export const SkillsModal = ({ skills = [], onClose }) => {
  return (
    <div data-blendy-to="skills" className="skills-modal" onClick={onClose}>
      <div className="skills-header">
        <h2>All skills</h2>
      </div>
      <div className="skills-container">
        {skills.map(({ Icon, name, color = 'white' }) => (
          <div key={name}>
            <Icon width="64px" height="64px" />
            <span
              className="tech-name"
              style={{
                color,
                textShadow: `0 0 2px ${color}, 0 0 5px ${color}`,
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
