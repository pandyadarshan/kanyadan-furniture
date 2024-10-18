import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const TopSection = () => {
  return (
    <Swiper
      effect={"fade"}
      fadeEffect={{
        crossFade: true,
      }}
      // navigation={true}
      // autoplay={{
      //   delay: 6000,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      loop
      grabCursor
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <header class="mainHeading">
          <div class="mainHeading__content">
            <article class="mainHeading__text">
              <p class="mainHeading__preTitle">Decent Look </p>
              <h2 class="mainHeading__title"> Dining Table Set </h2>
              <p class="mainHeading__description">For Home</p>
              <Link class="cta" to={"/gallery"}>
                know more
              </Link>
              {/* <button class="cta">know more</button> */}
            </article>

            <div class="mainHeading__image">
              <img
                loading="lazy"
                src="https://aksharfurniture.in/upload/home-slider/banner-2.jpg"
                alt=""
              />
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header class="mainHeading">
          <div class="mainHeading__content">
            <article class="mainHeading__text">
              <p class="mainHeading__preTitle">Classy </p>
              <h2 class="mainHeading__title"> Bedroom Set </h2>
              <p class="mainHeading__description">For Home</p>
              <Link class="cta" to={"/gallery"}>
                know more
              </Link>
            </article>

            <div class="mainHeading__image">
              <img
                loading="lazy"
                src="https://aksharfurniture.in/upload/home-slider/banner-1.jpg"
                alt=""
              />
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header class="mainHeading">
          <div class="mainHeading__content">
            <article class="mainHeading__text">
              <p class="mainHeading__preTitle">Best Quality </p>
              <h2 class="mainHeading__title"> Sofa Set </h2>
              <p class="mainHeading__description">For Your Home</p>
              <Link class="cta" to={"/gallery"}>
                know more
              </Link>
            </article>

            <div class="mainHeading__image">
              <img
                loading="lazy"
                src="https://aksharfurniture.in/upload/home-slider/banner.jpg"
                alt=""
              />
            </div>
          </div>
        </header>
      </SwiperSlide>
    </Swiper>
  );
};

export default TopSection;
