import gsap from "gsap";
import React, { useRef, useState, useEffect, createRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import RippleButton from "../input/RippleButton";

const Header = () => {
  const items = [
    {
      name: "Home",
      color: "#8f6100",
      href: "/",
    },
    {
      name: "About Us",
      color: "#8f6100",
      href: "/about-us",
    },
    {
      name: "Gallery",
      color: "#8f6100",
      href: "/gallery",
    },
    {
      name: "Contact Us",
      color: "#8f6100",
      href: "#contact-us",
    },
  ];
  const location = useLocation();
  const $root = useRef();
  const $indicator1 = useRef();
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: "none",
      duration: 0.2,
    };

    gsap.to($indicator1.current, {
      ...settings,
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active]);
  return (
    <>
      <div className="mx-md-5 mx-3">
        <div className="align-items-center d-flex justify-content-between header-sec flex-lg-row flex-sm-column flex-column">
          <div className="d-flex align-items-center gap-5 w-100">
            <div className="logo">
              <Link to={"/"}> Kanyadan Furniture</Link>
            </div>
            <div className="burger-menu">
              <i
                class="fa-solid fa-bars"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              ></i>
            </div>
            <div ref={$root} className="menu flex-fill justify-content-end">
              {items.map((item, index) => (
                <>
                  {item.name === "Contact Us" ? (
                    <a
                      ref={$items.current[index]}
                      href="#contact-us"
                      key={item.name}
                      className={`item ${active === index ? "active" : ""}`}
                      onMouseEnter={() => {
                        setActive(index);
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      ref={$items.current[index]}
                      className={`item ${active === index ? "active" : ""}`}
                      onMouseEnter={() => {
                        setActive(index);
                      }}
                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              ))}
              <div ref={$indicator1} className="indicator" />
              {/* <div ref={$indicator2} className="indicator" /> */}
            </div>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column gap-md-5 gap-2 align-items-sm-center phone-section right-sec mb-3">
          <a class="cta mt-0" href={"#contact-us"}>
            Inquiry Now
          </a>
          <div className="d-flex gap-3 align-items-center">
            <i class="fa-solid fa-phone-volume"></i>
            <div>
              <span className="call">Call any time</span>
              <div className="number">+9112345 67890</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu ${isMenuOpen ? "mobile-menu-show" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`mobile-menu-inner ${isMenuOpen ? "show" : ""}`}>
          <div className="close-menu">
            <i class="fa-solid fa-times"></i>
          </div>
          <ul className="nav flex-column">
            {items.map((item, index) => (
              <li
                key={item.name}
                className={`nav-item ${
                  location.pathname === item.href ? "active" : ""
                }`}
              >
                <Link to={item.href} className="nav-link" exact>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
