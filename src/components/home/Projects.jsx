import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  return (
    <div className="projects-section container py-5">
      <div className="d-flex my-5">
        <div className="w-50">
          <div className="common-title text-start">
            Keep Your Eye on Our Latest Projects
          </div>
          <div className="common-sub-title text-start">Successful Project</div>
        </div>
        <div className="w-50">
          Kanyadan Furniture is the leading manufacturer and deisgner of
          customised furniture for your dream home, our classic designs for
          Bedroom sets, Sofa Sets, Central Table, Dressing Table, Dinning Table
          & Chairs sets make your home more beatiful.
        </div>
      </div>
      <div class="effect-grid">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
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
                src="https://aksharfurniture.in/upload/latest-project/marble-top-dining-table.jpg"
                alt="img06"
              />
              <figcaption className="d-flex flex-column justify-content-between">
                <p>
                  <h4>Dining Table</h4>
                </p>
                <h3 className="btn btn-light">2024-09-23</h3>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="effect-layla">
              <img
                src="https://aksharfurniture.in/upload/latest-project/center-table.jpg"
                alt="img06"
              />
              <figcaption className="d-flex flex-column justify-content-between">
                <p>
                  <h4>Center Table</h4>
                </p>
                <h3 className="btn btn-light">2024-09-23</h3>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="effect-layla">
              <img
                src="https://aksharfurniture.in/upload/latest-project/loghuar%20sofa.jpg"
                alt="img06"
              />
              <figcaption className="d-flex flex-column justify-content-between">
                <p>
                  <h4>Longer Sofa</h4>
                </p>
                <h3 className="btn btn-light">2024-09-23</h3>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="effect-layla">
              <img
                src="https://aksharfurniture.in/upload/latest-project/l-safe-sofa.jpg"
                alt="img06"
              />
              <figcaption className="d-flex flex-column justify-content-between">
                <p>
                  <h4>I-shape sofa</h4>
                </p>
                <h3 className="btn btn-light">2024-09-23</h3>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure class="effect-layla">
              <img
                src="https://aksharfurniture.in/upload/latest-project/sofa-set.jpg"
                alt="img06"
              />
              <figcaption className="d-flex flex-column justify-content-between">
                <p>
                  <h4>Sofa set</h4>
                </p>
                <h3 className="btn btn-light">2024-09-23</h3>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
