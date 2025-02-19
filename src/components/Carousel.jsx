import '../styles/Carousel.css'

export const Carousel = ({ images = [] }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map(({ Icon, name, color = 'white' }) => (
          <div key={`original-${name}`} className="carousel-card">
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
      <div className="carousel-track">
        {images.map(({ Icon, name, color }) => (
          <div key={`dupe-${name}`} className="carousel-card">
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
