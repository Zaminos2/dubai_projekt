import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { v4 } from "uuid";
import { mySlides } from "../../utils";
import slideLogo from "../../asets/icons/Group 87.svg";
import "./titleSlider.css";

export default function TitleSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=${className}>
      <h2 class='buletTitle'>0${index + 1}</h2>
      <div className="buletWrap">
      <p class='buletText'>Lorem Ipsum Dolorem apset</p>
      </div>
    </div>
`;
    },
  };
  const prevButton = (
    <div className="custom-button-prev">
     
      <button className="custom-prev-button">Prev</button>
    </div>
  );
  const nextButton = (
    <div className="custom-button-next">
     
      <button className="custom-next-button">Next</button>
    </div>
  );

  return (
    <section className="firstSlider">
      <div className="swiperWrap">
        <Swiper
          navigation={{
            prevEl: ".custom-button-prev",
            nextEl: ".custom-button-next",
          }}
          pagination={pagination}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          
        >
          {mySlides.map((el) => {
            return (
              <SwiperSlide key={v4()}>
                <div
                  className="slide"
                  style={{ backgroundImage: `url(${el})` }}
                ></div>
              </SwiperSlide>
            );
          })}
          <img className="slideLogo" src={slideLogo} alt="logoImg"></img>
          {prevButton}
          {nextButton}
        </Swiper>
      </div>
    </section>
  );
}
