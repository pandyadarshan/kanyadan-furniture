import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-inner container">
        <div className="row">
          <div className="address-section col-lg-4 col-md-8 mt-5">
            <div className="logo mb-3">
              <Link to={"/"}> Kanyadan Furniture</Link>
            </div>

            <div className="address mb-4">
              <i className="fa-solid fa-location-dot me-2"></i>
              <span>
                Kanyadan Furniture Rajkot, Nr Mavdi Plot, Rajkot-360004
              </span>
            </div>

            <div className="contact-section">
              <div className="contact-item">
                <i class="fa-solid fa-phone-volume"></i>
                <div>
                  Call anytime
                  <div>+9112345 67890</div>
                </div>
              </div>
              <hr />
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  Send Email
                  <div>kanyadanfurniture@gmail.com</div>
                </div>
              </div>
              <hr />
              <div className="contact-item">
                <i class="fa-solid fa-map-location-dot"></i>
                <div>
                  Showroom Address
                  <div>Click Here</div>
                </div>
              </div>
            </div>
            <div className="social-sec">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="links-section col-lg-3 col-md-4 mt-5">
            <div className="common-sub-title text-start mb-4">
              We work with a passion of taking challenges and creating new
              innovation in furniture sector.
            </div>
            <div className="common-sub-title text-start">Quick Links</div>
            <div>
              <Link to={"/about-us"}>
                <i class="fa-solid fa-chevron-right"></i> About
              </Link>
            </div>
            <div>
              <Link to={"/contact"}>
                <i class="fa-solid fa-chevron-right"></i> Contact
              </Link>
            </div>
            <div>
              <Link to={"/gallery"}>
                <i class="fa-solid fa-chevron-right"></i> Gallery
              </Link>
            </div>
            <div>
              <Link to={"/contact"}>
                <i class="fa-solid fa-chevron-right"></i> Career
              </Link>
            </div>
          </div>
          <div
            className="contact-section col-lg-5 col-md-12 mt-5"
            id="contact-us"
          >
            <div className="common-title text-start">Feel Free to Write</div>
            <div className="common-sub-title text-start">Contact us</div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
