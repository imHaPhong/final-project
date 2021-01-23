import React, { useRef, useState } from 'react'
import Slider from "react-slick";
const Slide = () => {

    const [setting, setIsSetting] = useState(
       {
      customPaging: function(i) {
        return (
          <a>
            <span className="c-dots">
            </span>
          </a>
        );
      },
      dotsClass: "dot-position",
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      speed: 2000,
      cssEase: "linear"
      }
    )

    const slideRef = useRef()
    return (
        <div>
        <Slider ref={slideRef} {...setting} arrows={false} >
          <div className="full slide-container">
            <img src="https://static.riviu.co/image/2020/12/01/e82c998f287b75e0138a81679c5cc87d.png" alt="" />
          </div>
          <div className="full slide-container">
            <img src="https://static.riviu.co/image/2021/01/04/22b98c87e512e989b379a9897f53c74b.png" alt="" />
          </div>
         
        </Slider>
      </div>
    )
}

export default Slide
