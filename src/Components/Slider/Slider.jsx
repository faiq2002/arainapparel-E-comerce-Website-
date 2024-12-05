import React from "react"
import "./Slider.css"
import slider01 from "../../Data/Photos/slider-01.png"
import slider02 from "../../Data/Photos/slider-02.png"
import slider03 from "../../Data/Photos/slider-03.png"
import slider04 from "../../Data/Photos/slider-04.png"
import Carousel from 'react-bootstrap/Carousel';

import { useState } from "react"

export default function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} className="responsive-carousel ">
    <Carousel.Item>
      <img
        className=" w-100 "
        src={slider01}
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider02}
        alt="Second slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider03}
        alt="Third slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider04}
        alt="Fourth slide"
      />
     
    </Carousel.Item>
  </Carousel>
  )
}
