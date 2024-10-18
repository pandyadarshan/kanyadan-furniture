import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(true);
  const fadeRef = useRef(null);

  // Fade in animation on mount
  useEffect(() => {
    if (fadeRef.current) {
      gsap.fromTo(
        fadeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 } // 1 second fade-in
      );
    }
    return () => {
      gsap.to(fadeRef.current, {
        opacity: 0,
        duration: 1, // 1 second fade-out
        onComplete: () => setShow(false), // After fade-out, hide component
      });
    };
  }, [show]);

  return (
    <>
      {show && (
        <div className="col-12 col-sm-6 col-lg-4 col-md-6 mb-3" ref={fadeRef}>
          <figure class="effect-layla">
            <img src={product.src} alt="img06" loading="lazy" />
            <figcaption className="d-flex flex-column justify-content-between">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.category}</p>
            </figcaption>
          </figure>
        </div>
      )}
      {/* {!show && <button onClick={() => setShow(true)}>Show Again</button>} */}
    </>
  );
};

export default ProductCard;
