import '../styles/Carousel.css'

export const Carousel = ({ images = [] }) => {

  return (
    <div className="carousel-container">
      <div className="carousel-track"
        style={{
          width: `${images.length * 2 * 64 + (120*(images.length-1))}px`
        }}
      >
        {images.map((Image, index) => (
        <div className="carousel-card"
        >
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
