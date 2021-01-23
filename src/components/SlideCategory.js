import React, { useRef, useState } from "react";
import Slider from "react-slick";
import {Icon} from 'rsuite'

const SlideCategory = () => {
  const slideRef = useRef();
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ],
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  })

  const next = () => {
    slideRef.current.slickNext();
    console.log(slideRef.current);

  };
  const pre = () => {
      console.log("valo");
    slideRef.current.slickPrev();
  };
  return (
    <div>
      <h1>Hà Nội ăn gì ? - uống gì?</h1>
      <div className="slide-list">
      <div className="slide-btn btn-prev" onClick={pre}>
            <Icon icon="angle-left"/>
        </div>
        <div className="slide-btn btn-next" onClick={next}>
            <Icon icon="angle-right"/>
        </div>
        <Slider ref={slideRef} {...sliderSettings} arrows={false}>
          <div>
            <div className="category-slide">
              <img
                src="https://static.riviu.vn/480/image/2020/07/23/b5738f0f3ba575825a55311d52f37216.jpeg"
                alt=""
              />
              <div className="modal-background category-modal">
                <span className="title">Tổng hợp các địa điểm ăn uống, vui chơi Hà Nội 1</span>
                <span>654 posts</span>
              </div>
            </div>
          </div>
          <div>
            <div className="category-slide">
              <img
                src="https://static.riviu.vn/480/image/2020/07/23/b5738f0f3ba575825a55311d52f37216.jpeg"
                alt=""
              />
              <div className="modal-background category-modal">
                <sp className="title"an>Tổng hợp các địa điểm ăn uống, vui chơi Hà Nội</sp>
                <span>654 posts</span>
              </div>
            </div>
          </div>
          <div>
            <div className="category-slide">
              <img
                src="https://static.riviu.vn/480/image/2020/07/23/b5738f0f3ba575825a55311d52f37216.jpeg"
                alt=""
              />
              <div className="modal-background category-modal">
                <sp className="title"an>Tổng hợp các địa điểm ăn uống, vui chơi Hà Nội</sp>
                <span>654 posts</span>
              </div>
            </div>
          </div>
          <div>
            <div className="category-slide">
              <img
                src="https://static.riviu.vn/480/image/2020/07/23/b5738f0f3ba575825a55311d52f37216.jpeg"
                alt=""
              />
              <div className="modal-background category-modal">
                <sp className="title"an>Tổng hợp các địa điểm ăn uống, vui chơi Hà Nội</sp>
                <span>654 posts</span>
              </div>
            </div>
          </div>
          <div>
            <div className="category-slide">
              <img
                src="https://static.riviu.vn/480/image/2020/07/23/b5738f0f3ba575825a55311d52f37216.jpeg"
                alt=""
              />
              <div className="modal-background category-modal">
                <sp className="title"an>Tổng hợp các địa điểm ăn uống, vui chơi Hà Nội</sp>
                <span>654 posts</span>
              </div>
            </div>
          </div>
          <div>
            <div className="category-slide">
              <img
                src="https://static.riviu.vn/480/image/2020/07/23/b5738f0f3ba575825a55311d52f37216.jpeg"
                alt=""
              />
              <div className="modal-background category-modal">
                <sp className="title"an>Tổng hợp các địa điểm ăn uống, vui chơi Hà Nội</sp>
                <span>654 posts</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlideCategory;
