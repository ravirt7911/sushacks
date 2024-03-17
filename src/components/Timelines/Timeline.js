import React, { useState } from "react";
import "./Timeline.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProgressBar from "@ramonak/react-progress-bar";
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import CardHeader from '@mui/material/CardHeader'
// import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
const Timeline = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="card__data">
        <h3 className="card__title">TIMELINES</h3>
      </div>

      <div className="progresBar">
        <ProgressBar
          borderRadius="0"
          animateOnRender={true}
          completed={((active + 1) * 100) / 6}
          labelColor="green"
          bgColor="green"
        />
      </div>

      <Swiper
        freeMode={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        className="card__container"
        onSlideChange={(e) => setActive(e.activeIndex)}
        onActiveIndexChange={(e) => console.log(e)}
        //style={{backgroundImage:`url(${require('./assets/i')})`}}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        autoFocus={true}
      >
        <div className="card__content">
          <SwiperSlide className="card__article">
            <div className="card__image">
              <img
                src={require("../../assets/back.png")}
                className="card__img"
              />
              <div className="card__shadow"></div>
            </div>

            <div className="card__data">
              <h3 className="card__name">Registration Begins</h3>
              <p className="card__description">20-04-2024</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card__article">
            <div className="card__image">
              <img
                src={require("../../assets/img_3.png")}
                className="card__img"
              />
              <div className="card__shadow"></div>
            </div>

            <div className="card__data">
              <h3 className="card__name">Registration Ends</h3>
              <p className="card__description">27-04-2024</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card__article ">
            <div className="card__image">
              <img
                src={require("../../assets/img_3.png")}
                className="card__img"
              />
              <div className="card__shadow"></div>
            </div>

            <div className="card__data">
              <h3 className="card__name">Project Submission</h3>
              <p className="card__description">29-04-2024</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card__article">
            <div className="card__image">
              <img
                src={require("../../assets/img_2.png")}
                className="card__img"
              />
              <div className="card__shadow"></div>
            </div>

            <div className="card__data">
              <h3 className="card__name">Registration Begins</h3>
              <p className="card__description">20-04-2024</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card__article">
            <div className="card__image">
              <img
                src={require("../../assets/img_3.png")}
                className="card__img"
              />
              <div className="card__shadow"></div>
            </div>

            <div className="card__data">
              <h3 className="card__name">Registration Ends</h3>
              <p className="card__description">27-04-2024</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card__article ">
            <div className="card__image">
              <img
                src={require("../../assets/img_3.png")}
                className="card__img"
              />
              <div className="card__shadow"></div>
            </div>

            <div className="card__data">
              <h3 className="card__name">Project Submission</h3>
              <p className="card__description">29-04-2024</p>
            </div>
          </SwiperSlide>
        </div>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Timeline;
