import '../styles/Carousel.css'

export const Carousel = ({ images = [] }) => {

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((Image, index) => (
        <div className="carousel-card">
          <Image key={`original-${index}`} width='64px' height='64px'/>
        </div>
        ))}
        {images.map((Image, index) => (
        <div className="carousel-card">
          <Image key={`duplicado-${index}`} width='64px' height='64px'/>
        </div>
        ))}
      </div>
    </div>
  )
}
