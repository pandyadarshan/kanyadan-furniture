import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const CompletedSection = () => {
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
    <>
      <section id="demos" style="opacity: 1; transform: translate(0px, 0px);">
        SCROLL DOWN
      </section>
      <section
        class="animCounterTrigger"
        style="opacity: 1; transform: translate(0px, 0px);"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-4">
              <h1 class="animCounter">31</h1>
              <div class="divider divider-orchid mb-2"></div>
              <span class="super-lead-text">
                We provide more than 110,000 clients with a funding solution
                each year.
              </span>
            </div>
            <div class="col-12 col-sm-4">
              <h1 class="animCounter">1000</h1>
              <div class="divider divider-orchid mb-2"></div>
              <span class="super-lead-text">
                Over 1,000 insurance brokers choose to partner with us.
              </span>
            </div>
            <div class="col-12 col-sm-4">
              <h1 class="animCounter">60</h1>
              <div class="divider divider-orchid mb-2"></div>
              <span class="super-lead-text">
                We have over 60 yrs combined experience in supporting Australian
                businesses &amp; clients.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompletedSection;
