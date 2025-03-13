import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/TextCarousel.css'

export const TextCarousel = () => {
  const letters = ['PROJECTS', '', 'PROJECTS', '', 'PROJECTS', '', 'PROJECTS', '',]

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false
  }

  return (
    <div className="text-carousel-container">
      <Slider {...settings}>
        {letters.map((letter, index) => (
          <div key={index} className="text-carousel-item">
            {letter}
          </div>
        ))}
      </Slider>
    </div>
  )
}
