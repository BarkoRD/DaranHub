import '../styles/Carousel.css'

export const Carousel = ({ images = [] }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((Image, index) => (
          <div key={`original-${index}`} className="carousel-card">
            <Image width="64px" height="64px" />
            <p className="text">Hola mundo</p>
          </div>
        ))}
      </div>
      <div className="carousel-track">
        {images.map((Image, index) => (
          <div key={`dupe-${index}`} className="carousel-card">
            <Image width="64px" height="64px" />
            <p className="text">Hola mundo</p>
          </div>
        ))}
      </div>
    </div>
  )
}
