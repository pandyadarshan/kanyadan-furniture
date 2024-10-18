import React from "react";
import smart from "../../assets/smart.svg";
import price from "../../assets/price.svg";
import quality from "../../assets/quality.svg";
import unique from "../../assets/unique.svg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const MidBannerSection = () => {
  return (
    <div className="mid-section">
      <div className="mid-section-overlay"> </div>
      <div
        className="container py-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div class="quality-container ">
          <div class="section">
            <div className="icon-div">
              <img src={smart} alt="Dummy Image 2" />
            </div>
            <h3>Smart Work</h3>
          </div>
          <div class="section">
            <img src={price} alt="Dummy Image 2" />
            <h3>Best Pricing</h3>
          </div>
          <div class="section">
            <img src={quality} alt="Dummy Image 3" />
            <h3>Quality Material</h3>
          </div>
          <div class="section">
            <img src={unique} alt="Dummy Image 3" />
            <h3>Unique Design</h3>
          </div>
        </div>
        <div className="my-5">
          <div className="common-title">We have lot of to show</div>
          <div className="common-sub-title">Our Product Range</div>
        </div>
        <div class="effect-grid">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            loop
            grabCursor
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <figure class="effect-layla">
                <img
                  src="https://aksharfurniture.in/assets/images/home-product/diningset.jpg"
                  alt="img06"
                />
                <figcaption>
                  <h2>
                    Kanyadan Furniture <span>Chairs</span>
                  </h2>
                  <p>
                    Fully Furnished, Attractive Design And Top Quality Chairs
                  </p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure class="effect-layla">
                <img
                  src="https://aksharfurniture.in/assets/images/home-product/officefurniture.jpg"
                  alt="img06"
                />
                <figcaption>
                  <h2>
                    Kanyadan Furniture <span>Office</span>
                  </h2>
                  <p>
                    Fully Furnished, Attractive Design And Top Quality Chairs
                  </p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure class="effect-layla">
                <img
                  src="https://aksharfurniture.in/assets/images/home-product/bedroomset.jpg"
                  alt="img06"
                />
                <figcaption>
                  <h2>
                    Kanyadan Furniture <span>Bedroomset</span>
                  </h2>
                  <p>
                    Fully Furnished, Attractive Design And Top Quality Chairs
                  </p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure class="effect-layla">
                <img
                  src="https://aksharfurniture.in/assets/images/home-product/centertable.jpg"
                  alt="img06"
                />
                <figcaption>
                  <h2>
                    Kanyadan Furniture <span>Centertable</span>
                  </h2>
                  <p>
                    Fully Furnished, Attractive Design And Top Quality Chairs
                  </p>
                  {/* <a href="#">View more</a> */}
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure class="effect-layla">
                <img
                  src="https://aksharfurniture.in/assets/images/home-product/sofaset.jpg"
                  alt="img06"
                />
                <figcaption>
                  <h2>
                    Kanyadan Furniture <span>Sofaset</span>
                  </h2>
                  <p>
                    Fully Furnished, Attractive Design And Top Quality Chairs
                  </p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center mt-5">
          <Link class="cta mt-0" to={"/gallery"}>
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MidBannerSection;
