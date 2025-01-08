import React from 'react'
import { useState } from 'react'

import './Slider.scss'

import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (previousState) => previousState - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (previousState) => previousState + 1)
  }

  // setTimeout(() => {
  //   // prevSlide();
  //   // nextSlide();
  //   // currentSlide++;
  //   setCurrentSlide(currentSlide === 4 ? 0 : (previousState) => previousState + 1);
  //   console.log(currentSlide);
  // }, 5000)

  const data = [
      "./img/hoodie1.avif",
      "./img/hoodie2.avif",
      "./img/hoodie3.jpg",
      "./img/hoodie4.avif",
      "./img/hoodie5.jpeg"
  ]

  return (
    <div className='slider'>
      {/* <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}> */}
      <div className="container" >
        {
          data.map((url) => (
            <img 
              key={url} 
              src={url} 
              className='slider-image' 
              style={{translate:`${currentSlide * -100}%`}}
            />
          ))
        }
        {/* <img src={data[currentSlide]}/> */}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon/>
        </div>
      </div>
    </div>
  )
}

export default Slider
