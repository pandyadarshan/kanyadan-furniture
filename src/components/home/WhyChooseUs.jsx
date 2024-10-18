import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import check from "../../assets/check.svg";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once when entering the viewport
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const elementRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.to(elementRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
      });
    }
  }, [inView]);
  return (
    <div className="why-choose-section">
      <div
        className="container py-5"
        style={{ opacity: 0, transform: "translateY(20px)" }}
        ref={(node) => {
          ref(node);
          elementRef.current = node;
        }}
      >
        <div className="list-section">
          <div className="mb-5">
            <div className="common-title">
              We Focus to Make Your Home Beautiful
            </div>
            <div className="common-sub-title">Why Choose Us</div>
          </div>
          <div className="list-item">
            <div className="img-sec">
              <img src={check} />
            </div>
            <div className="para-sec">
              <h3>Make your drawing room classy with us</h3>
              <div>
                at Kanyadan Furniture we have beautiful and newly innovative
                looks designs for all types of sofa sets, Dinning Table and
                Chairs & Shutter Tables.
              </div>
            </div>
          </div>
          <div className="list-item">
            <div className="img-sec">
              <img src={check} />
            </div>
            <div className="para-sec">
              <h3>Awesome Work Deliver for Make Your Bed Room New</h3>
              <div>
                We have customised solutions as per your space to make more
                attrative and spacious your bedroom by providing great look with
                Wadrobe, Beds and side Tables sets.
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link class="cta mt-0" to={"/gallery"}>
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
